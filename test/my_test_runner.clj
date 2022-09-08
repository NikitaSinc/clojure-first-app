(ns my-test-runner
  (:require  [clojure.test :as t]
             [app-test]
             [custom-router-test]))

(defn run-all [_]
  (t/run-all-tests))
