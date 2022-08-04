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
                   [:identifier] {:get tasks}
                   }
         }
   })

(defn custom-parser [uri]
  "Returns parsed uri in vector"
  (let [vector-path (clojure.string/split (clojure.string/replace uri #"/+" "/") #"/")]
    (if (empty? vector-path)
      [""]
      vector-path)))

(defn route-navigator [cur path route-map request]
  (if (empty? path)
    (get route-map cur)
      (if-let [identifier (first (filterv keyword?
                                          (mapv
                                            #(if (vector? (first %)) (first (first %)))
                                            route-map)))]
        (route-navigator
          (conj (first path))
          (vec (rest path))
          (get route-map cur)
          (conj request {identifier (first path)}))
        (route-navigator
          (conj (first path))
          (vec (rest path))
          (get route-map cur)
          request))))

(defn custom-router [request route-map]
  (let [{:keys [uri request-method :as metod]} request
        full-path (custom-parser uri)]
    (route-navigator (first full-path) (vec (rest full-path)) (get route-map (first full-path)) request)))


(defn app [request]
  (custom-router request route-map))

(defn -main
  [& args]
  (run-server #'app {:port 8080}))


; Delete later
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
#_(first (filterv keyword? (mapv #(if (vector? (first %)) (first (first %))) {[:id] {} :id [] "sd" {}})))
#_(map #(map % %) [nil nil] [nil nil nil])
#_(vec (rest [1 2 3 4 5]))
#_(:id nil nil)
