goog.provide('app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change-desc","change-desc",2114450792),null], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960),(function (p__34370,_){
var map__34371 = p__34370;
var map__34371__$1 = cljs.core.__destructure_map(map__34371);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34371__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/get",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-tasks","success-get-tasks",1139596560)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-get-tasks","failure-get-tasks",-717850038)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-tasks","add-tasks",1710130168),(function (p__34372,p__34373){
var map__34374 = p__34372;
var map__34374__$1 = cljs.core.__destructure_map(map__34374);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34374__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34375 = p__34373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34375,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34375,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/add",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-tasks","success-add-tasks",-1015101135)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-add-tasks","failure-add-tasks",513047701)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),(function (p__34378,p__34379){
var map__34380 = p__34378;
var map__34380__$1 = cljs.core.__destructure_map(map__34380);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34380__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34381 = p__34379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34381,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34381,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/tasks/delete/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-delete-tasks","success-delete-tasks",1392770014)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-delete-tasks","failure-delete-tasks",-419813457)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),(function (p__34384,p__34385){
var map__34386 = p__34384;
var map__34386__$1 = cljs.core.__destructure_map(map__34386);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34386__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34387 = p__34385;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34387,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34387,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/update/",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-update-tasks","success-update-tasks",-1009135340)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-update-tasks","failure-update-tasks",678689174)], null)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),null], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get-tasks","success-get-tasks",1139596560),(function (db,p__34390){
var vec__34391 = p__34390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34391,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34391,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-get-tasks","failure-get-tasks",-717850038),(function (db,p__34394){
var vec__34395 = p__34394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34395,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-add-tasks","success-add-tasks",-1015101135),(function (db,p__34398){
var vec__34399 = p__34398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34399,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34399,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (___$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tdb,resp);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-add-tasks","failure-add-tasks",513047701),(function (db,p__34402){
var vec__34403 = p__34402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34403,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34403,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-delete-tasks","success-delete-tasks",1392770014),(function (db,p__34407){
var vec__34408 = p__34407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34408,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34408,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (old){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34406_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(p1__34406_SHARP_),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(resp));
}),old));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-delete-tasks","failure-delete-tasks",-419813457),(function (db,p__34411){
var vec__34412 = p__34411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34412,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34412,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-update-tasks","success-update-tasks",-1009135340),(function (db,p__34416){
var vec__34417 = p__34416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34417,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34417,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (old){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34415_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(p1__34415_SHARP_))){
return resp;
} else {
return p1__34415_SHARP_;
}
}),old);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-update-tasks","failure-update-tasks",678689174),(function (db,p__34420){
var vec__34421 = p__34420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34421,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34421,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),(function (db,p__34424){
var vec__34425 = p__34424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34425,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34425,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"change-desc","change-desc",2114450792),id);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sorted-tasks","sorted-tasks",1984680796),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null));
}),(function (tasks,_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__34428_SHARP_){
return new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(p1__34428_SHARP_) === false;
}),tasks);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"change-desc","change-desc",2114450792),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"change-desc","change-desc",2114450792).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
app.new_task_input = (function app$new_task_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type new task here",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34429_SHARP_){
return cljs.core.reset_BANG_(value,p1__34429_SHARP_.target.value);
})], null)], null);
});
app.change_desc_input = (function app$change_desc_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type new description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34430_SHARP_){
return cljs.core.reset_BANG_(value,p1__34430_SHARP_.target.value);
})], null)], null);
});
app.tasks_grid = (function app$tasks_grid(){
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted-tasks","sorted-tasks",1984680796)], null));
var ch_desc = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc","change-desc",2114450792)], null));
var new_task = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var new_description = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tasks-grid",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-149-19","app-149-19",135667783)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-150-20","app-150-20",-2039399174)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-151-20","app-151-20",483979012)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Done"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-156-20","app-156-20",757872182)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function app$tasks_grid_$_iter__34431(s__34432){
return (new cljs.core.LazySeq(null,(function (){
var s__34432__$1 = s__34432;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__34432__$1);
if(temp__5804__auto__){
var s__34432__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34432__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__34432__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__34434 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__34433 = (0);
while(true){
if((i__34433 < size__5522__auto__)){
var t = cljs.core._nth(c__5521__auto__,i__34433);
cljs.core.chunk_append(b__34434,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-159-19","app-159-19",-2112807877)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.change_desc_input,new_description], null):((cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t))], null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t))], null)], null));
});})(i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Change"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(new_description),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)], null)], null));
});})(i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Save"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),null], null));
});})(i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Discard"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(i__34433,t,c__5521__auto__,size__5522__auto__,b__34434,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Delete"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__34435 = (i__34433 + (1));
i__34433 = G__34435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34434),app$tasks_grid_$_iter__34431(cljs.core.chunk_rest(s__34432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34434),null);
}
} else {
var t = cljs.core.first(s__34432__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-159-19","app-159-19",-2112807877)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.change_desc_input,new_description], null):((cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t))], null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t))], null)], null));
});})(t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Change"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(new_description),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)], null)], null));
});})(t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Save"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),null], null));
});})(t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Discard"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(t,s__34432__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Delete"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null)),app$tasks_grid_$_iter__34431(cljs.core.rest(s__34432__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(tasks));
})()),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-181-19","app-181-19",321381948)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.new_task_input,new_task], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-tasks","add-tasks",1710130168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(new_task)], null)], null));
})], null),"Add"], null)], null)], null)], null)], null);
});
app.app = (function app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-187-25","app-187-25",1205294125)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-191-26","app-191-26",-1380017083)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-192-18","app-192-18",2092747716)], null),"Tasks"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.tasks_grid], null)], null)], null);
});
if((typeof app !== 'undefined') && (typeof app.root !== 'undefined')){
} else {
app.root = module$node_modules$react_dom$client.createRoot(document.getElementById("tasks-app"));
}
app.init = (function app$init(){
app.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app], null)));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960)], null));
});
app.re_render = (function app$re_render(){
return app.init();
});

//# sourceMappingURL=app.js.map
