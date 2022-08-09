(ns custom-middleware
 (:require [clojure.string :as s]))

(defn my-wrap-catch
  [func]
  (fn [& args]
    (try
      (apply func args)
      (catch Throwable e
      e))))

(defn my-wrap-uri-params
  [func]
  (fn [request & args]
    (let [{:keys [uri]} request]
      (if-let [uri-args (second (s/split uri #"\?"))]
        (->  uri-args
             (s/split #"&")
             (->> (map #(s/split % #"="))
                  (into {}))
             (update-keys keyword)
             (->> (assoc request :uri-params))
             func)
        func))))

#_(if-let [uri-args (second (s/split "asd/asd/asd" #"\?"))] true false)
#_(apply(my-wrap-uri-params (#(fn [request] ) {:uri "asd/asd/asd"})))
