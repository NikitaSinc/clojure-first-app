(ns app
   (:require
   [org.httpkit.server :as server :refer [run-server]]
   [custom-router :refer [custom-router]]
   [custom-middleware :refer [my-wrap-catch
                              my-wrap-uri-params
                              my-executor]]
   [ring.middleware.params]
   [ring.middleware.json]
   [ring.middleware.keyword-params]
   [next.jdbc :as jdbc]
   [dsql.pg :as dsql]
   [clojure.java.io :as io]
   [clojure.string :as s]
   [clojure.data.json :as json]
   [clojure.string :as str])
  (:gen-class))

(def full-config                         ;refactor later
   {
   :run :prod
   :prod{
        :server-port 8080
        :db {
             :dbtype "postgresql"
             :dbport 5432
             :dbhost "db-tasks"
             :dbname "tasks"
             :dbuser "postgres"
             :dbpassword "1111"
             }
        }
   :dev{
        :server-port 8080
        :db {
             :dbtype "postgresql"
             :dbport 5432
             :dbhost "localhost"
             :dbname "tasks"
             :dbuser "postgres"
             :dbpassword "1111"
             }
        }
   :test{
        :server-port 8081
        :db {
             :dbtype "postgresql"
             :dbport 5432
             :dbhost "localhost"
             :dbname "tasks_test"
             :dbuser "postgres"
             :dbpassword "1111"
             }
        }
   })

(defn configurator []
  (if-let [conf (get full-config (:run full-config))]
  conf
  (throw (ex-info "Configuration is not loaded corectly" {:cause "config"}))))

(def config (configurator))

(defn db-sourcer [dbconf]
    (jdbc/get-datasource {:dbtype (:dbtype dbconf)
                          :dbname (:dbname dbconf)
                          :host (:dbhost dbconf)
                          :port (:dbport dbconf)}))

(def db-source (db-sourcer (:db config)))

(defn ->db [query]
  (with-open [conn (jdbc/get-connection db-source (-> config :db :dbuser) (-> config :db :dbpassword))]
  (jdbc/execute! conn query)))

(defn tasks-all->db []
  (->db (dsql/format
                        {:ql/type :pg/select
                         :select :*
                         :from :tasks})))

(defn tasks-delete->db [id]
  (first (->db (dsql/format
                        {:ql/type :pg/delete
                         :from :tasks
                         :where ^:pg/op[:= :id id]
                         :returning :id}))))

(defn tasks-add->db [task]
  (let [{:keys [description]} task]
    (first (->db (dsql/format
                        {:ql/type :pg/insert
                         :into :tasks
                         :value {:description description :done false}
                         :returning :*})))))

(defn tasks-update->db [task]
    (let [{:keys [id description done]} task]
    (first (->db (dsql/format
                        {:ql/type :pg/update
                         :update :tasks
                         :set {:description description :done done}
                         :where ^:pg/op[:= :id id]
                         :returning :*})))))

(defn trim-desc [tasks]
  (if (map? tasks)
    (update tasks :tasks/description (fn [old] (str/trim old)))
    (mapv #(update % :tasks/description (fn [old] (str/trim old))) tasks)))

(defn handler-get-all-tasks [request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (trim-desc (tasks-all->db))})

(defn handler-add-single-task [request]
  (let [task (get request :json-params)]
   (if (not (nil? task))
     (if-let [result (trim-desc (tasks-add->db task))]
       {:status 200
        :headers {"Content-Type" "application/json"}
        :body result}
       nil))))

(defn handler-delete-single-task [request]
    (let [{:keys [task-id]} request]
      (if (not (nil? task-id))
        (if-let [result (tasks-delete->db task-id)]
        {:status 200
         :headers {"Content-Type" "application/json"}
         :body result}
        nil))))

(defn handler-update-tasks [request]
  (let [task (:json-params request)]
    (if (not (nil? task))
      (if-let [result (trim-desc (tasks-update->db task))]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body result}))))

(defn handler-home [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "hello"})

(defn handler-tasks-all [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    (slurp (io/resource "index.html"))})

(defn handler-tasks-id [request]
  (let [{:keys [identifier]} request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    (format "Task's id: %s" identifier)}))

(defn handler-fake-500 [request]
  (throw (ex-info "Stop right there, criminal scum!"
                  {
                   :status 500
                   })))

(defn file-handler [request]
  (let [{:keys [rest-path]} request
        file-format (second (s/split rest-path #"\."))]
    (if (= "js" file-format)      ;I know it's ugly -> Missing file-handling middleware (: Refactor later Or not)))
    {
     :status 200
     :headers {"Content-Type" "application/javascript"
               "charset" "utf-8"}
     :body (slurp (io/resource rest-path))
     }
     {
     :status 200
     :headers {"Content-Type" "text/css"
               "charset" "utf-8"}
     :body (slurp (io/resource rest-path))
     })))

(def custom-route-map
   {
    :get handler-home

    "tasks" {
             "get" {:get handler-get-all-tasks}
             "add" {:post handler-add-single-task}
             "delete" {[:task-id] {:post handler-delete-single-task}}
             "update" {:post handler-update-tasks}
             :get handler-tasks-all
             :post handler-tasks-all
             [:identifier] {
                            :get handler-tasks-id
                            }
             }
    "throw500" {
                :get handler-fake-500
                }
    "resources" {:all {:get file-handler}}
    }
)

(defn
  app-naked [request & args]
  (custom-router request custom-route-map))

(def app (->        app-naked
                    my-executor
                    my-wrap-catch
                    ring.middleware.keyword-params/wrap-keyword-params
                    (ring.middleware.json/wrap-json-params {:key-fn keyword})
                    ring.middleware.params/wrap-params
                    ring.middleware.json/wrap-json-response
                    ))

(defonce server (atom nil))

(defn
  -stop []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn
  -main [& args]
  (reset! server (run-server #'app {:port (:server-port config)})))


; Delete later
#_(-main)
#_(-stop)

#_(type (first (app-naked {:uri "/resources/main.js" :request-method :get})))
#_(clojure.java.io/resource "public/js/main.js")
