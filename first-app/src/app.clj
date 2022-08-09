(ns app
  (:require [org.httpkit.server :as server :refer [run-server]]
            [custom-router :refer [custom-router]]
            [custom-middleware :refer [my-wrap-catch my-wrap-uri-params]]))

(defn handler-home [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "hello"})

(defn handler-404 [request e]
  (let [path (:path (ex-data e))]
    {:status 404
   :headers {"Content-Type" "text/html"}
   :body    (format "Error-404!\nPage not found!\nNot found uri part: %s" path)}))

(defn handler-500 [request e]
  {:status 500
   :headers {"Content-Type" "text/html"}
   :body    (format "Error-500!\nSomething is wrong with server!\nMessage: %s" (ex-message e))})

(defn handler-tasks-all [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "tasks"})

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



(defn app-naked [request]
  (custom-router request custom-route-map))

(def app (-> app-naked
             my-wrap-catch
             my-wrap-uri-params))

(defn -main
  [& args]
  (run-server #'app {:port 8080}))


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
#_()
