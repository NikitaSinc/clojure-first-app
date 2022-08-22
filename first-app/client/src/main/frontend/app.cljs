(ns frontend.app (:require
                  ["react-dom/client" :refer [createRoot]]
                  [reagent.core :as r]
                  [reagent.dom :as rd]
                  [re-frame.core :as rf]
                  [stylo.core :refer [c]]
                  [day8.re-frame.http-fx]
                  [ajax.core :as ajax] ))

(def app-state (r/atom {}))

(rf/reg-event-fx
  :get-tasks
  (fn [coeffects event]
    {:http-xhrio {:method        :get
                 :uri           "http://localhost:8080/tasks/get"
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:success-http-result]
                  :on-failure [:failure-http-result]}}))

(rf/reg-event-db
  :success-http-result
  (fn [db [_ result]]
    (assoc app-state :succes-http-result result)))

(rf/reg-event-db
  :failure-http-result
  (fn [db [_ result]]
    (assoc app-state :failure-http-result result)))

(defn tasks-grid []
   (let [tasks #(rf/dispatch [:get-tasks])]
  [:table
    [:tbody
     [:tr {:class (c :table-row)} [:td "1"] [:td "task-1"]]
     [:tr {:class (c :table-row)} [:td "2"] [:td "task-2"]]]])

(defn strange-button []
  (let [state (r/atom {:color "green" :title "i am green"})]
  [:button (:title @state) {:on-click #(swap! state {:color "red" :title "now i am red"})}]))

(defn app []
  [:div.wrapper {:class (c :w-full
                           [:pl 10]
                           [:pt 10])}
   [:div.content {:class (c :w-auto)}
    [:h1 {:class (c :text-lg)} "Taskss"]
    tasks-grid]])

(defonce root (createRoot (js/document.getElementById "tasks-app")))

(defn init []
  (.render root (r/as-element [app])))

(defn ^:dev/after-load re-render
  []
  (init))
