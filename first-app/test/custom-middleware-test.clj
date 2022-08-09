(ns custom-middleware-test
  (:require [custom-middleware :refer [my-wrap-catch my-wrap-uri-params]]
            [clojure.test :refer [is deftest testing assert-expr with-test]]))

(defn my-thrower [ex]
  (throw ex))
(defn my-divider []
  (/ 0 0))

(def my-excepted-fn (my-wrap-catch my-thrower))
(def my-divided-by-zero-fn (my-wrap-catch my-divider))

(def nil-ex (new NullPointerException "my"))
(def arith-ex (new ArithmeticException "my"))
(def info-ex (ex-info "my" {}))

(deftest my-wrap-catch-test
  (testing "NPE case"
    (is (= nil-ex (my-excepted-fn nil-ex))))
  (testing "Arithmetic case"
    (is (= arith-ex (my-excepted-fn arith-ex))))
  (testing "Info case"
    (is (= info-ex (my-excepted-fn info-ex))))
  (testing "Actual case"
    (is (= java.lang.ArithmeticException (type (my-divided-by-zero-fn)))))
  )

(defn my-request [func]
  (fn [request]
  (func request)))

(defn my-app-fn [request]
  (if  (:req-flag request)
    (:uri-params request)
    true))

(def my-into-uri-wrap (-> my-app-fn
                          my-wrap-uri-params
                          my-request))

(deftest my-wrap-uri-params-test-normal
  (testing "App is executed"
    (is (= true
           (my-into-uri-wrap {:uri "asd/asd/asd?hello=world&its=me"}))))

  (testing "Params are wrapped"
    (is (= {:hello "world" :its "me"}
           (my-into-uri-wrap {:uri "asd/asd/asd?hello=world&its=me" :req-flag true})))))

(deftest my-wrap-uri-params-test-without-params
  (testing "App is executed"
    (is (= true
           (my-into-uri-wrap {:uri "asd/asd/asd"}))))

  (testing "Params are wrapped"
    (is (= nil
           (my-into-uri-wrap {:uri "asd/asd/asd" :req-flag true})))))
