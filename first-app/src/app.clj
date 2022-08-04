(ns app
  (:require [org.httpkit.server :refer [run-server ]]))

(defn main-page [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "hello"})

(defn tasks-all [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "tasks"})

(defn tasks [request]
  (let [{:keys [my-param]} request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    (format "Task's id: %s" my-param)}))

(def route-map
  {""  {:get main-page
          "tasks" {:get tasks-all
                   [:uid] {:get tasks}
                   }
         }
   })

(defn custom-router
  [{:keys [uri request-method :as method]} request map]
  (let [full-path (custom-parser uri)]
    full-path))

(defn custom-parser [uri]
  "Returns parsed uri in vector"
  (let [vector-path (clojure.string/split (clojure.string/replace uri #"/+" "/") #"/")]
    (if (empty? vector-path)
      [""]
      vector-path)))


(defn app [request]
  (custom-router request route-map))

(defn -main
  [& args]
  (run-server #'app {:port 8080}))

#_(app {:uri "/" :request-method :get})
#_(app {:uri "/tasks/1" :request-method :get})
#_(app {:uri "/tasks" :request-method :get})
#_(custom-parser "/tasks/1")
#_(Integer/parseInt (last [1 " " "1"]))
#_(replace {"1" (Integer/parseInt "1")} ["" "tasks" "1"])
#_(last ["" "tasks" "1"])
#_(clojure.string/split "/" #"/")
#_(get (get route-map "") :get)
#_(apply tasks [1])
#_(apply (get (get-in route-map ["" "tasks" :param-flag]) :get) [1])
#_(clojure.string/replace "///dfsdf///dfsd/asda//ds" #"/+" "/")
