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
      (if (s/includes? uri "?")
        (->  uri
             (s/split #"\?")
             second
             (s/split #"&")
             (->> (map #(s/split % #"="))
                  (into {}))
             (update-keys keyword)
             (->> (assoc request :uri-params))
             func)
        (func request)))))

#_(if-let [uri-args (second (s/split "asd/asd/asd" #"\?"))] true false)
#_(apply(my-wrap-uri-params (#(fn [request] ) {:uri "asd/asd/asd"})))
#_(assoc {:hey "hey"} :hehm {:heh "heh"})
