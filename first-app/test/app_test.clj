(ns app-test
  (:require [app :as a]
            [clojure.test :refer [deftest testing is]]))

(deftest app-naked-test
  (testing "home GET"
    (is (= a/handler-home (first (a/app-naked {:uri "/" :request-method :get})))))
  (testing "tasks GET"
    (is (= a/handler-tasks-all (first (a/app-naked {:uri "/tasks" :request-method :get})))))
  (testing "tasks GET by id"
    (is (= a/handler-tasks-id (first (a/app-naked {:uri "/tasks/1" :request-method :get})))))
  (testing "nil request"
    (is (= nil (a/app-naked {})))))
