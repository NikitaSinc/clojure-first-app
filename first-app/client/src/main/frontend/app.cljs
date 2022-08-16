(ns frontend.app (:require
                  [reagent.core :as r]
                  [reagent.dom :as rd]))

(defn app []
  [:b "Hello World! It's shadow-cljs"])

(defn init []
  (let [container (js/document.getElementById "tasks-app")]
    (rd/render [app] container)))
