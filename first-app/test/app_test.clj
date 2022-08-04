(ns app-test
  (:require [app :refer [custom-parser custom-router]]
            [clojure.test :refer [deftest testing is]]))

(defn test-get []
  "get")

(defn test-post []
  "post")

(defn test-get-id [uid]
  (if (nil? uid)
    ""
    "ok"))

(def test-route-map
  {""  {:get test-get
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
   }
)

(deftest test-custom-parser
  (testing "root dir"
    (is (= [""] (custom-parser "/"))))
  (testing "normal case"
    (is (= ["" "hello" "world" "lol"] (custom-parser "/hello/world/lol"))))
  (testing "double triple slash"
    (is (= ["" "hello" "world" "lol"] (custom-parser "/hello//world///lol"))))
  (testing "nums in path"
    (is (= ["" "hello" "1"]) (custom-parser "/hello/1"))))

(deftest test-custom-router
  (testing "root case"
    (is (= "get" (custom-router "/" :get {} test-route-map))))
  (testing "normal case"
    (is (= "get case" (custom-router "/hello/world/lol" :get {} test-route-map))))
  (testing "post case"
    (is (= "post" (custom-router "/hello/world/lol" :post {} test-route-map))))
  (testing "not found case")
    (is (= nil (custom-router "/hello/world" :post {} test-route-map)))
  (testing "dictionary case"
    (is (= "ok" (custom-router "/hello/1" :get {} test-route-map)))))
