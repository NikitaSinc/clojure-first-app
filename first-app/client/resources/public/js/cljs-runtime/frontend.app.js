goog.provide('frontend.app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
frontend.app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960),(function (coeffects,event){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/get",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549),(function (db,p__30148){
var vec__30149 = p__30148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30149,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30149,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.app.app_state,new cljs.core.Keyword(null,"succes-http-result","succes-http-result",285498933),result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),(function (db,p__30152){
var vec__30153 = p__30152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.app.app_state,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),result);
}));
frontend.app.tasks_grid = (function frontend$app$tasks_grid(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"frontend_app-34-19","frontend_app-34-19",-127622295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"task-1"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"frontend_app-35-19","frontend_app-35-19",1789172647)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"task-2"], null)], null)], null)], null);
});
frontend.app.strange_button = (function frontend$app$strange_button(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"title","title",636505583),"i am green"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"title","title",636505583),"now i am red"], null));
})], null)], null);
});
frontend.app.app = (function frontend$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"frontend_app-42-25","frontend_app-42-25",-753049961)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"frontend_app-45-26","frontend_app-45-26",1453283353)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"frontend_app-46-18","frontend_app-46-18",288186101)], null),"Taskss"], null),frontend.app.tasks_grid], null)], null);
});
if((typeof frontend !== 'undefined') && (typeof frontend.app !== 'undefined') && (typeof frontend.app.root !== 'undefined')){
} else {
frontend.app.root = module$node_modules$react_dom$client.createRoot(document.getElementById("tasks-app"));
}
frontend.app.init = (function frontend$app$init(){

return frontend.app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.app], null)));
});
frontend.app.re_render = (function frontend$app$re_render(){
return frontend.app.init();
});

//# sourceMappingURL=frontend.app.js.map
