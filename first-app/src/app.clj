(ns app
  (:require [org.httpkit.server :as server :refer [run-server]]
            [custom-router :refer [custom-router]]
            [custom-middleware :refer [my-wrap-catch
                                       my-wrap-uri-params
                                       my-executor]]
            [next.jdbc :as jdbc]
            [dsql.pg :as dsql]
            [clojure.java.io :as io]
            [clojure.string :as s]))

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
   :headers {"Content-Type" "text/html"
             }

   :body    "<head>
                <link href='resources/stylo.css' rel='stylesheet'>
            </head>
            <body>
                <div id='tasks-app'></div>
                <script src='resources/main.js'></script>
            </body>"})

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
  (let [{:keys [identifier]} request
        file-format (second (s/split identifier #"."))]
    (if (= "js" file-format)      ;I know it's ugly -> Missing file-handling middleware (: Refactor later
    {
     :status 200
     :headers {"Content-Type" "application/javascript"
               "charset" "utf-8"}
     :body (slurp (io/resource identifier))
     }
     {
     :status 200
     :headers {"Content-Type" "text/css"
               "charset" "utf-8"}
     :body (slurp (io/resource identifier))
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
    "resources" {[:identifier] {:get file-handler}}         ;TODO: make only public
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
#_(-main)
#_(-stop)

#_(type (first (app-naked {:uri "/resources/main.js" :request-method :get})))
#_(clojure.java.io/resource "public/js/main.js")
