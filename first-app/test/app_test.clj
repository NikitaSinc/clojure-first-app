(ns app-test
  (:require [app :refer [custom-parser custom-router]]
            [clojure.test :refer [deftest testing is]]))

(defn test-get [request]
  "get")

(defn test-post [request]
  "post")

(defn test-get-id [request]
  (if (nil? (:uid request))
    "error"
    "ok"))

(def test-route-map
  {:get test-get
   "hello" {:get test-get
           [:uid] {:get test-get-id}
           "world" {
                   "lol" {
                         :get test-get
                         :post test-post
                         }
                   }
           }
  }

)

(deftest test-custom-parser
  (testing "root dir"
    (is (= [] (custom-parser "/"))))
  (testing "normal case"
    (is (= ["hello" "world" "lol"] (custom-parser "/hello/world/lol"))))
  (testing "double triple slash"
    (is (= ["hello" "world" "lol"] (custom-parser "/hello//world///lol"))))
  (testing "nums in path"
    (is (= ["hello" "1"] (custom-parser "/hello/1")))))

(deftest test-custom-router
  (testing "root case"
    (is (= "get" (custom-router {:uri "/" :request-method :get} test-route-map))))
  (testing "get case"
    (is (= "get" (custom-router {:uri "/hello/world/lol" :request-method :get} test-route-map))))
  (testing "post case"
    (is (= "post" (custom-router {:uri "/hello/world/lol" :request-method :post} test-route-map))))
  (testing "not found case")
    (is (= nil (custom-router  {:uri "/hello/world/lol/wha" :request-method :get} test-route-map)))
  (testing "dictionary case"
    (is (= "ok" (custom-router {:uri "/hello/1" :request-method :get} test-route-map)))))
