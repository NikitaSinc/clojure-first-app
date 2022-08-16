goog.provide('frontend.app');
frontend.app.app = (function frontend$app$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Hello World! It's shadow-cljs"], null);
});
frontend.app.init = (function frontend$app$init(){
var container = document.getElementById("tasks-app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.app], null),container);
});

//# sourceMappingURL=frontend.app.js.map
