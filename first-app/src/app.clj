(ns app
  (:require [org.httpkit.server :as server :refer [run-server]]
            [custom-router :refer [custom-router]]
            [custom-middleware :refer [my-wrap-catch
                                       my-wrap-uri-params
                                       my-executor]]
            [next.jdbc :as jdbc]
            [dsql.pg :as dsql]))

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

 (->db (dsql/format
                        {:ql/type :pg/select
                         :select :*
                         :from :tasks}))

(defn handler-home [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "hello"})

(defn handler-tasks-all [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "<div id='tasks-app'><div>
            <script src='../client/public/js/main.js'><script>"})

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

(def custom-route-map
   {
    :get handler-home

    "tasks" {
             :get handler-tasks-all
             :post handler-tasks-all
             [:identifier] {
                            :get handler-tasks-id
                            }
             }
    "throw500" {
                :get handler-fake-500
                }
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
  (reset! server (run-server #'app {:port (:server-port config)})))


; Delete later
#_(app {:uri "/sdasd/asd" :request-method :get})
#_(app {:uri "/throw500" :request-method :get})
#_(app {:uri "/tasks/1" :request-method :get})
#_(app {:uri "/tasks" :request-method :post})
#_(custom-parser "/")
#_(Integer/parseInt (last [1 " " "1"]))
#_(first (first (filterv vector? (keys  {[:id] {["r"] {:red "rte"}} :id ["rew" "dsf"] "sd" {"fed" {"med" {"fer" "dfs"}}}}))))
#_(map #(map % %) [nil nil] [nil nil nil])
#_(vec (rest [1 2 3 4 5]))
#_(:id nil nil)
#_(:id {:id "x"})
#_(get-in route-map (conj [""] (:request-method {:request-method :get})))
#_(clojure.string/split (clojure.string/replace "/" #"/+" "/") #"/")
#_(empty? (vector (first [""])))
#_(get route-map :get)
#_(-> config :db :dbname)
