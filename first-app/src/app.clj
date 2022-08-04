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
                   :identifier {:get tasks}
                   }
         }
   })

(defn custom-parser [uri]
  "Returns parsed uri in vector"
  (let [vector-path (clojure.string/split (clojure.string/replace uri #"/+" "/") #"/")]
    (if (empty? vector-path)
      [""]
      vector-path)))

(defn route-navigator [path route-map]
  (map #(map % %) path route-map))

(defn custom-router [request route-map]
  (let [{:keys [uri request-method :as metod]} request
        full-path (custom-parser uri)
        matches-norm (get-in route-map full-path)])
  (if (nil? matches-norm)
    (let [matches-var (map #(:identifier (first %)) (get-in route-map (pop full-path)))]
      (if matches-var
        ()))))

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
#_(apply (map #(vector? (first %)) {[] {} :id [] "sd" {}}))
#_(map #(map % %) [nil nil] [nil nil nil])
