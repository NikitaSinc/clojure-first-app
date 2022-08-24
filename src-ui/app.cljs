(ns app (:require
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
  (fn [{db :db} _]
    {:http-xhrio {:method           :get
                 :uri               "http://localhost:8080/tasks/get"
                 :response-format   (ajax/json-response-format {:keywords? true})
                 :on-success        [:success-get-tasks]
                 :on-failure        [:failure-get-tasks]}}))

(rf/reg-event-db
  :success-get-tasks
  (fn [db [_ response]]
    (assoc db :tasks (js->clj response))))

(rf/reg-event-db
  :failure-get-tasks
  (fn [db [_ result]]
    (assoc db :error-message result)))

(rf/reg-sub
  :tasks
  (fn [db _]
    (:tasks db)))


(defn tasks-grid []
   (rf/dispatch [:get-tasks])
  (let [tasks (rf/subscribe [:tasks])]
  [:table
    [:tbody
     [:tr {:class (c :table-row)} [:td "1"] [:td @tasks]]
     [:tr {:class (c :table-row)} [:td "2"] [:td "task-2"]]]]))

(defn app []
  [:div.wrapper {:class (c :w-full
                           [:pl 10]
                           [:pt 10])}
   [:div.content {:class (c :w-auto)}
    [:h1 {:class (c :text-lg)} "Tasks"]
    [tasks-grid]]])

(defonce root (createRoot (js/document.getElementById "tasks-app")))

(defn init []
  (.render root (r/as-element [app])))

(defn ^:dev/after-load re-render
  []
  (init))
