(ns build
  (:require [clojure.tools.build.api :as b]
))

(def lib 'app)
(def version (format "1.2.%s" (b/git-count-revs nil)))
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def uber-file "target/app.jar")

(defn clean [_]
  (b/delete {:path "target"}))

(defn uber [_]
  (clean nil)
  (b/copy-dir {:src-dirs (:paths basis)
               :target-dir class-dir})
  (b/compile-clj {:basis basis
                  :src-dirs ["src" "test"]
                  :class-dir class-dir})
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           :basis basis
           :main 'app}))
