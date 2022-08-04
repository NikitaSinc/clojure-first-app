(ns app
  (:require [org.httpkit.server :refer [run-server]])
  (:require [clojure.string :as s]))

(defn main-page [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "hello"})

(defn page-404 [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "Error-404!\nPage not found!"})

(defn tasks-all [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    "tasks"})

(defn tasks [request]
  (let [{:keys [identifier]} request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body    (format "Task's id: %s" identifier)}))

(def custom-route-map
  {:get main-page
   "tasks" {:get tasks-all
            :post tasks-all
           [:identifier] {
                          :get tasks
                         }
           }
   :not-found-page page-404
  })

(defn custom-parser [uri]
  "Returns parsed uri in vector"
  (let [vector-path (s/split (s/replace (s/replace-first uri #"/" "") #"/+" "/") #"/")]
    (if (or (empty? vector-path) (= [""] vector-path))
      []
      vector-path)))

(defn route-navigator [cur path route-map request]
  (do (println "\n" cur "\n" path "\n" route-map "\n" (:uid request) "\n") ;delete later
  (if (empty? path)
    (if-let [page (get route-map (:request-method request))]
      (page request)
      (if-let [not-found-page (get (first cur) :not-found-page)]
        (not-found-page request); not working yet :c
        nil)
    )
    (if-let [match-path (get route-map (first path))]
    (route-navigator
          (conj cur (first path))
          (vec (rest path))
          match-path
          request)
    (if-let [identifier (first (filterv keyword?
                                          (mapv
                                            #(if (vector? (first %)) (first (first %)))
                                            route-map)))]
       (route-navigator
          (conj cur (first path))
          (vec (rest path))
          (get route-map (vector identifier))
          (conj request {identifier (first path)}))
       nil)))))

(defn custom-router [request route-map]
  (let [{:keys [uri request-method]} request
        full-path (custom-parser uri)]
    (if (empty? full-path)
      ((get route-map request-method) request)
      (let [frest (first full-path)]
      (route-navigator
        (vector frest)
        (vec (rest full-path))
        (get route-map frest)
        request)))))


(defn app [request]
  (custom-router request custom-route-map))

(defn -main
  [& args]
  (run-server #'app {:port 8080}))


; Delete later
#_(app {:uri "/" :request-method :get})
#_(app {:uri "/tasks/1" :request-method :get})
#_(app {:uri "/tasks" :request-method :post})
#_(custom-parser "/")
#_(Integer/parseInt (last [1 " " "1"]))
#_(first (filterv keyword? (mapv #(if (vector? (first %)) (first (first %))) {[:id] {} :id [] "sd" {}})))
#_(map #(map % %) [nil nil] [nil nil nil])
#_(vec (rest [1 2 3 4 5]))
#_(:id nil nil)
#_(:id {:id "x"})
#_(get-in route-map (conj [""] (:request-method {:request-method :get})))
#_(clojure.string/split (clojure.string/replace "/" #"/+" "/") #"/")
#_(empty? (vector (first [""])))
#_(get route-map :get)
