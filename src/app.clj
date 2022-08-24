(ns app
  (:require [app-test]
            [org.httpkit.server :as server :refer [run-server]]
            [custom-router :refer [custom-router]]
            [custom-middleware :refer [my-wrap-catch
                                       my-wrap-uri-params
                                       my-executor]]
            [next.jdbc :as jdbc]
            [dsql.pg :as dsql]
            [clojure.java.io :as io]
            [clojure.string :as s]
            [clojure.data.json :as json]))

(def full-config                         ;refactor later
  {
   :run :dev
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
   })

(defn configurator []
  (if-let [config (get full-config (:run full-config))]
  config
  (throw (ex-info "Configuration is not loaded corectly" {:cause "config"}))))

(def config (configurator))


(def db-source
  (let [dbconf (:db config)]
    (jdbc/get-datasource {:dbtype (:dbtype dbconf)
                          :dbname (:dbname dbconf)})))

(defn ->db [query]
  (with-open [conn (jdbc/get-connection db-source (-> config :db :dbuser) (-> config :db :dbpassword))]
  (jdbc/execute! conn query)))

(defn tasks-all->db []
  (->db (dsql/format
                        {:ql/type :pg/select
                         :select :*
                         :from :tasks})))

(defn handler-get-all-tasks [request]
  {:status 200
   :headers {"Content-Type" "text/json"}
   :body (json/write-str (tasks-all->db))
   })

(defn handler-home [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "hello"})

(defn handler-tasks-all [request]
  {:status 200
   :headers {"Content-Type" "text/html"
             }

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
    (if (= "js" file-format)      ;I know it's ugly -> Missing file-handling middleware (: Refactor later
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
                    my-wrap-uri-params
                    ))

(defonce server (atom nil))

(defn
  -stop []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn
  -main [& args]
  (reset! server (run-server #'app {:thread 1 :port (:server-port config)})))


; Delete later
#_(-main)
#_(-stop)

#_(type (first (app-naked {:uri "/resources/main.js" :request-method :get})))
#_(clojure.java.io/resource "public/js/main.js")
