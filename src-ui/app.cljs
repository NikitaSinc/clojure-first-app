(ns app (:require
                  ["react-dom/client" :refer [createRoot]]
                  [reagent.core :as r]
                  [reagent.dom :as rd]
                  [re-frame.core :as rf]
                  [stylo.core :refer [c]]
                  [day8.re-frame.http-fx]
                  [ajax.core :as ajax]
                  [clojure.string :as s]))

(def app-state (r/atom {:tasks [] :change-desc nil}))

(defn cljsify [d]
  (js->clj d :keywordize-keys true))

(rf/reg-fx
  :custom-fetch
  (fn [{:as req, :keys [method uri success failure]}]
    (-> (.fetch js/window uri)
        (.then (fn [resp] (if (> (.-status resp) 203)
                            (doseq [f failure]
                              (rf/dispatch [f (cljsify resp)]))
                            (-> (.json resp)
                                (.then (fn [resp] (doseq [s success]
                                                    (rf/dispatch [s (cljsify resp)])))))))))))

(rf/reg-event-fx
  :get-tasks
  (fn [{db :db} _]
    {:custom-fetch {:uri "http://localhost:8080/tasks/get"
                    :success [:success-get-tasks]
                    :failure [:failure-get-tasks]}}))

#_(rf/reg-event-fx
    :get-tasks
  (fn [{db :db} _]
    {:http-xhrio {:method           :get
                 :uri               "http://localhost:8080/tasks/get"
                 :timeout           5000
                 :response-format   (ajax/json-response-format {:keywords? true})
                 :on-success        [:success-get-tasks]
                 :on-failure        [:failure-get-tasks]}}))

(rf/reg-event-fx
  :add-tasks
  (fn [{db :db} [_ val]]
    {:http-xhrio {:method           :post
                  :uri              "http://localhost:8080/tasks/add"
                  :timeout          5000
                  :params           val
                  :format           (ajax/json-request-format)
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-add-tasks]
                  :on-failure       [:failure-add-tasks]}}))

(rf/reg-event-fx
  :delete-tasks
  (fn [{db :db} [_ val]]
    {:http-xhrio {:method           :post
                  :uri              (str "http://localhost:8080/tasks/delete/" val)
                  :timeout          5000
                  :format           (ajax/json-request-format)
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-delete-tasks]
                  :on-failure       [:failure-delete-tasks]}}))

(rf/reg-event-fx
  :update-tasks
  (fn [{db :db} [_ val]]
    {:http-xhrio {:method           :post
                  :uri              (str "http://localhost:8080/tasks/update/")
                  :timeout          5000
                  :params           val
                  :format           (ajax/json-request-format)
                  :response-format  (ajax/json-response-format {:keywords? true})
                  :on-success       [:success-update-tasks]
                  :on-failure       [:failure-update-tasks]}
     :fx [[:dispatch [:change-desc-event nil]]]}))

(rf/reg-event-db
  :success-get-tasks
  (fn [db [_ response]]
    (println response)
    (assoc db :tasks response)))

#_(rf/reg-event-db
  :success-get-tasks
  (fn [db [_ response]]
    (assoc db :tasks (js->clj response :keywordize-keys true))))

(rf/reg-event-db
  :failure-get-tasks
  (fn [db [_ response]]
    (assoc db :error-message response)))

(rf/reg-event-db
  :success-add-tasks
  (fn [db [_ response]]
    (let [tdb (:tasks db)
          resp (js->clj response)]
    (update db :tasks (fn [_]
                        (conj tdb resp))))))

(rf/reg-event-db
  :failure-add-tasks
  (fn [db [_ response]]
    (assoc db :error-message response)))

(rf/reg-event-db
  :success-delete-tasks
  (fn [db [_ response]]
    (let [tdb (:tasks db)
          resp (js->clj response :keywordize-keys true)]
    (update db :tasks  (fn [old]
                        (vec (remove #(= (:tasks/id %) (:tasks/id resp)) old)))))))

(rf/reg-event-db
  :failure-delete-tasks
  (fn [db [_ response]]
    (assoc db :error-message response)))

(rf/reg-event-db
  :success-update-tasks
  (fn [db [_ response]]
    (let [tdb (:tasks db)
          resp (js->clj response :keywordize-keys true)]
    (update db :tasks  (fn [old]
                        (map #(if (= (:tasks/id resp) (:tasks/id %))
                                resp
                                %) old))))))

(rf/reg-event-db
  :failure-update-tasks
  (fn [db [_ response]]
    (assoc db :error-message response)))

(rf/reg-event-db
  :change-desc-event
  (fn [db [_ id]]
    (assoc db :change-desc id)))

(rf/reg-sub
  :tasks
  (fn [db _]
    (:tasks db)))

(rf/reg-sub
  :sorted-tasks
  (fn [_ _]
    (rf/subscribe [:tasks]))
  (fn [tasks _]
    (sort #(false? (:tasks/done %)) tasks)))

(rf/reg-sub
  :change-desc
  (fn [db _]
    (:change-desc db)))

(defn new-task-input [value]
  [:input {:value @value
           :placeholder "Type new task here"
           :on-change #(reset! value (-> % .-target .-value))}])

(defn change-desc-input [value]
   [:input {:value @value
           :placeholder "Type new description"
           :on-change #(reset! value (-> % .-target .-value))}])

(defn tasks-grid []
  (let [tasks (rf/subscribe [:sorted-tasks])
        ch-desc (rf/subscribe [:change-desc])
        new-task (r/atom "")
        new-description (r/atom "")]
    [:table {:id "tasks-grid"
             :class (c :table [:border 2] [:w 100])}
     [:thead {:class (c :px-auto)}
      [:tr {:class (c :table-row)}
       [:td "ID"]
       [:td "Description"]
       [:td "Done"]]]
     [:tbody {:class (c [:gap 2])}
      (doall
        (for [t @tasks]
          ^{:key (:tasks/id t)}
          [:tr {:class (c :table-row)}
           [:td (str (:tasks/id t))]
           [:td (doall (if (= (:tasks/id t) @ch-desc)
                         [change-desc-input new-description]
                         (if (not (:tasks/done t))
                           (str (:tasks/description t))
                           [:s (str (:tasks/description t))])))]
           [:td [:input {:type :checkbox
                         :checked (:tasks/done t)
                         :on-change #(rf/dispatch [:update-tasks
                                                   {:id (:tasks/id t)
                                                    :description (:tasks/description t)
                                                    :done (not(:tasks/done t))}])}]]
           [:td (doall (if (not (= (:tasks/id t) @ch-desc))
                         [:button {:on-click #(rf/dispatch [:change-desc-event (:tasks/id t)])} "Change"]
                         [:button {:on-click #(rf/dispatch [:update-tasks
                                                            {:id (:tasks/id t)
                                                             :description @new-description
                                                             :done (:tasks/done t)}])} "Save"]))]
           [:td (if (= (:tasks/id t) @ch-desc)
                  [:button {:on-click #(rf/dispatch [:change-desc-event nil])} "Discard"]
                  [:button {:on-click #(rf/dispatch [:delete-tasks (:tasks/id t)] )} "Delete"])]]))
      [:tr {:class (c :table-row)}
       [:td]
       [:td [new-task-input new-task]]
       [:td [:button {:on-click #(rf/dispatch [:add-tasks {:description @new-task}])} "Add"]]]]]))

(defn app []
  [:div.wrapper {:class (c :w-full
                           [:pl 10]
                           [:pt 10]
                           :font-sants)}
   [:div.content {:class (c :w-auto)}
    [:h1 {:class (c :text-lg)} "Tasks"]
    [tasks-grid]]])

(defonce root (createRoot (js/document.getElementById "tasks-app")))

(defn init []
  (.render root (r/as-element [app]))
  (rf/dispatch [:get-tasks]))

(defn ^:dev/after-load re-render
  []
  (init))
