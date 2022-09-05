(ns app-test
  (:require [app :as a]
            [clojure.test :refer [deftest testing is use-fixtures]]
            [next.jdbc :as jdbc]
            [dsql.pg :as dsql]
            [org.httpkit.client :as cl]
            [org.httpkit.server :as serv]
            [clojure.data.json :as json]
            [clojure.set :as set]
            [cheshire.core :as ch]))

(def test-tasks [{:description "test1" :done false}  ;can be loaded from file but im lazy
                 {:description "test2" :done true}
                 {:description "test3" :done false}
                 {:description "test4" :done true}
                 {:description "test5" :done false}])

(defn fill-test-db [data]
  (a/->db ["truncate table tasks;"])
  (a/->db (dsql/format {:ql/type :pg/insert-many
                         :into :tasks
                         :values {:keys [:description :done]
                                  :values data}
                         :returning :*})))

(defonce test-server (atom nil))

#_(-main-test)
#_(app-test/-stop-test)

(defn -main-test [& args]
   (reset! app-test/test-server (serv/run-server #'a/app {:port 8081})))

(defn -stop-test []
  (when (not (nil? @app-test/test-server))
    (@app-test/test-server :timeout 100)
    (reset! app-test/test-server nil)))

(defn testing-env [t]                             ;TODO refactor with dsql?
  (with-redefs [a/config (:test a/full-config)]
    ((app-test/-main-test)
    (a/->db ["SELECT 'CREATE DATABASE tasks_test'
              WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'tasks_test')"])
    (fill-test-db test-tasks)
    (t))
    (app-test/-stop-test)))

(deftest app-naked-test
  (testing "home GET"
    (is (= a/handler-home (first (a/app-naked {:uri "/" :request-method :get})))))
  (testing "tasks GET"
    (is (= a/handler-tasks-all (first (a/app-naked {:uri "/tasks" :request-method :get})))))
  (testing "tasks GET by id"
    (is (= a/handler-tasks-id (first (a/app-naked {:uri "/tasks/1" :request-method :get})))))
  (testing "nil request"
    (is (= nil (a/app-naked {})))))

(use-fixtures :once testing-env)

(defn my-js [js]
  (json/read-str js :key-fn keyword))

(defn db-key-transform-map [m]
  (-> (set/rename-keys m {:tasks/description :description :tasks/done :done})
      (dissoc :tasks/id)))

(defn db-key-transform-vec [v]
  (mapv db-key-transform-map v))

(defn testing-add [& [expected actual]]
  (if (and (nil? expected) (nil? actual))
    (is (= {:description "added-task" :done false}
           (->
             @(cl/post "http://localhost:8081/tasks/add"
                       {:headers {"content-type" "application/json"}
                        :body (ch/generate-string {:description "added-task"})})
             (:body)
             my-js
             db-key-transform-map)))
     (is (= expected
           (->
             @(cl/post "http://localhost:8081/tasks/add"
                       {:headers {"content-type" "application/json"}
                        :body (ch/generate-string actual)})
             (:status))))))

(defn testing-delete [& [expected actual]]
  (let [id (-> @(cl/post "http://localhost:8081/tasks/add"
                      {:headers {"content-type" "application/json"}
                       :body (ch/generate-string {:description "task to delete"})})
                (:body)
                (ch/parse-string keyword)
                (:tasks/id))]
    (if (and (nil? actual) (nil? expected))
      (is (= id                                                         ;normal case
           (->
             @(cl/post (str "http://localhost:8081/tasks/delete/" id))
             (:body)
             (ch/parse-string keyword)
             (:tasks/id))))
      (is (= expected                                                   ;custom case
             (:status @(cl/post (str "http://localhost:8081/tasks/delete/" actual)))))
    )))

(defn testing-update [& [expected actual]]
  (let [id (-> @(cl/post "http://localhost:8081/tasks/add"
                      {:headers {"content-type" "application/json"}
                       :body (ch/generate-string {:description "task to update"})})
                (:body)
                (ch/parse-string keyword)
                (:tasks/id))]
     (if (and (nil? actual) (nil? expected))
        (is (= {:tasks/id id                                            ;normal case
                :tasks/description "task updated"
                :tasks/done true}
               (->
                 @(cl/post "http://localhost:8081/tasks/update/"
                            {:headers {"content-type" "application/json"}
                             :body (ch/generate-string
                                       {:id id :description "task updated" :done true})})
                 (:body)
                 (ch/parse-string keyword))))
        (is (= expected                                                 ;custom case
               (->
                 @(cl/post "http://localhost:8081/tasks/update/"
                           {:headers {"content-type" "application/json"}
                            :body (ch/generate-string actual)})
                 (:status)))))))

(deftest integration-crud-tasks-test
  (testing "get tasks"
    (is (= test-tasks
           (->
             @(cl/get "http://localhost:8081/tasks/get")
             (:body)
             my-js
             db-key-transform-vec))))

  (testing "add tasks"
    (testing-add)
    (testing-add 404 nil)
    (testing-add 500 {}))

  (testing "delete tasks"
    (testing-delete)
    (testing-delete 404 nil)
    (testing-delete 404 "1111122")
    (testing-delete 500 "asdasfqwfqwfq"))

  (testing "update tasks"
    (testing-update)
    (testing-update 404 nil)
    (testing-update 500 {:id "asfda" :description "ebanamiy obema" :done true})
    (testing-update 404 "bolnoy?")))
