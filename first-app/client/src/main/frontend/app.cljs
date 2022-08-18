(ns frontend.app (:require
                  ["react-dom/client" :refer [createRoot]]
                  [reagent.core :as r]
                  [reagent.dom :as rd]
                  [re-frame.core :as rf]
                  [stylo.core :refer [c]]))

(defn strange-button []
  (let [state (r/atom {:color "green" :title "i am green"})]
  [:button (:title @state) {:on-click #(swap! state {:color "red" :title "now i am red"})}]))

(defn app []
  [:div.wrapper {:class (c :w-full [:px 100])}
   [:h2 "Tasks"]

   [:table
     [:tr [:td "1"] [:td "task-1"]]
     [:tr [:td "2"] [:td "task-2"]]]])

(defonce root (createRoot (js/document.getElementById "tasks-app")))

(defn init []
  (.render root (r/as-element [app])))

(defn ^:dev/after-load re-render
  []
  (init))
