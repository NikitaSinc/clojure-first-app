(ns custom-router
  (:require [clojure.string :as s]))

(defn custom-parser [uri]
  "Returns parsed uri in vector"
  (let [vector-path (s/split (s/replace (s/replace-first uri #"/" "") #"/+" "/") #"/")]
    (if (or (empty? vector-path) (= [""] vector-path))
      []
      vector-path)))

(defn route-navigator [cur path route-map request]
  (if (empty? path)
    (if-let [page (get route-map (:request-method request))]
      (list page request)
      nil)
    (let [next-cur (conj cur (first path))
          next-path (vec (rest path))]
      (if-let [match-path (get route-map (first path))]
        (route-navigator
            next-cur
            next-path
            match-path
            request)
        (if-let [identifier (ffirst (filterv vector? (keys route-map)))]
            (route-navigator
                next-cur
                next-path
                (get route-map (vector identifier))
                (conj request {identifier (first path)}))
            nil)))))

(defn custom-router [request route-map]
  (if (and (:uri request) (:request-method request))
  (let [{:keys [uri request-method]} request
        full-path (custom-parser uri)]
    (if (empty? full-path)
      (list (get route-map request-method) request)
      (let [frest (first full-path)]
          (route-navigator
            (vector frest)
            (vec (rest full-path))
            (get route-map frest)
            request))))
  nil))
