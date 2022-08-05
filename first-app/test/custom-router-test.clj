(ns custom-router-test
  (:require [clojure.test :refer [deftest testing is]]
            [custom-router :refer [custom-router custom-parser]]))

(defn test-get [request]
  "get")

(defn test-post [request]
  "post")

(defn test-get-id [request]
  (if (nil? (:uid request))
    "error"
    "ok"))

(defn test-get-id-name [request]
  (if (nil? (and (:uid request) (:uname request)))
    "error"
    "ok"))

(def test-route-map
   {:get test-get
   "hello" {:get test-get
           [:uid] {:get test-get-id
                   [:uname]{
                            :get test-get-id-name
                            }
                   }
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
    (is (= test-get (custom-router {:uri "/" :request-method :get} test-route-map))))
  (testing "get case"
    (is (= test-get (custom-router {:uri "/hello/world/lol" :request-method :get} test-route-map))))
  (testing "post case"
    (is (= test-post (custom-router {:uri "/hello/world/lol" :request-method :post} test-route-map))))
  (testing "not found case")
    (is (= nil (custom-router  {:uri "/hello/world/lol/wha" :request-method :get} test-route-map)))
  (testing "dictionary case"
    (is (= test-get-id (custom-router {:uri "/hello/1" :request-method :get} test-route-map))))
  (testing "double dictionary case"
    (is (= test-get-id-name (custom-router {:uri "/hello/1/nikita" :request-method :get} test-route-map))))
    (testing "execute dictionary case"
    (is (= "ok" ((custom-router {:uri "/hello/1" :request-method :get} test-route-map) {:uid 1}))))
  (testing "execute double dictionary case"
    (is (= "ok" ((custom-router {:uri "/hello/1/nikita" :request-method :get} test-route-map) {:uid 1 :uname "nikita"})))))
