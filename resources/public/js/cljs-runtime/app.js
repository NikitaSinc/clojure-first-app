goog.provide('app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.PersistentVector.EMPTY], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960),(function (p__31745,_){
var map__31746 = p__31745;
var map__31746__$1 = cljs.core.__destructure_map(map__31746);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31746__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/get",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-tasks","success-get-tasks",1139596560)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-get-tasks","failure-get-tasks",-717850038)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-tasks","add-tasks",1710130168),(function (p__31747,p__31748){
var map__31749 = p__31747;
var map__31749__$1 = cljs.core.__destructure_map(map__31749);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31749__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31750 = p__31748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31750,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31750,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/add",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-tasks","success-add-tasks",-1015101135)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-add-tasks","failure-add-tasks",513047701)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),(function (p__31753,p__31754){
var map__31755 = p__31753;
var map__31755__$1 = cljs.core.__destructure_map(map__31755);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31755__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31756 = p__31754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31756,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31756,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/tasks/delete/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-delete-tasks","success-delete-tasks",1392770014)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-delete-tasks","failure-delete-tasks",-419813457)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),(function (p__31759,p__31760){
var map__31761 = p__31759;
var map__31761__$1 = cljs.core.__destructure_map(map__31761);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31761__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31762 = p__31760;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31762,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31762,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/update/",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-update-tasks","success-update-tasks",-1009135340)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-update-tasks","failure-update-tasks",678689174)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get-tasks","success-get-tasks",1139596560),(function (db,p__31765){
var vec__31766 = p__31765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31766,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31766,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-get-tasks","failure-get-tasks",-717850038),(function (db,p__31769){
var vec__31770 = p__31769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-add-tasks","success-add-tasks",-1015101135),(function (db,p__31773){
var vec__31774 = p__31773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31774,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31774,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (___$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tdb,resp);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-add-tasks","failure-add-tasks",513047701),(function (db,p__31777){
var vec__31778 = p__31777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-delete-tasks","success-delete-tasks",1392770014),(function (db,p__31782){
var vec__31783 = p__31782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31783,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31783,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (old){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31781_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(p1__31781_SHARP_),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(resp));
}),old));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-delete-tasks","failure-delete-tasks",-419813457),(function (db,p__31786){
var vec__31787 = p__31786;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31787,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31787,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-update-tasks","success-update-tasks",-1009135340),(function (db,p__31791){
var vec__31792 = p__31791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31792,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31792,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (old){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31790_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(p1__31790_SHARP_))){
return resp;
} else {
return p1__31790_SHARP_;
}
}),old);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-update-tasks","failure-update-tasks",678689174),(function (db,p__31795){
var vec__31796 = p__31795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31796,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31796,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sorted-tasks","sorted-tasks",1984680796),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null));
}),(function (tasks,_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__31799_SHARP_){
return new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(p1__31799_SHARP_) === false;
}),tasks);
})], 0));
app.new_task_input = (function app$new_task_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type new task here",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31800_SHARP_){
return cljs.core.reset_BANG_(value,p1__31800_SHARP_.target.value);
})], null)], null);
});
app.tasks_grid = (function app$tasks_grid(){
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted-tasks","sorted-tasks",1984680796)], null));
var new_task = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-131-19","app-131-19",1131754544)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-132-20","app-132-20",646985670)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-133-20","app-133-20",1000120673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Done"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-137-20","app-137-20",742877711)], null),(function (){var iter__5523__auto__ = (function app$tasks_grid_$_iter__31801(s__31802){
return (new cljs.core.LazySeq(null,(function (){
var s__31802__$1 = s__31802;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31802__$1);
if(temp__5804__auto__){
var s__31802__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31802__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31802__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31804 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31803 = (0);
while(true){
if((i__31803 < size__5522__auto__)){
var t = cljs.core._nth(c__5521__auto__,i__31803);
cljs.core.chunk_append(b__31804,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-140-19","app-140-19",188487566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__31803,t,c__5521__auto__,size__5522__auto__,b__31804,s__31802__$2,temp__5804__auto__,tasks,new_task){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t))], null)], null));
});})(i__31803,t,c__5521__auto__,size__5522__auto__,b__31804,s__31802__$2,temp__5804__auto__,tasks,new_task))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Update"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31803,t,c__5521__auto__,size__5522__auto__,b__31804,s__31802__$2,temp__5804__auto__,tasks,new_task){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(i__31803,t,c__5521__auto__,size__5522__auto__,b__31804,s__31802__$2,temp__5804__auto__,tasks,new_task))
], null),"Delete"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__31805 = (i__31803 + (1));
i__31803 = G__31805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31804),app$tasks_grid_$_iter__31801(cljs.core.chunk_rest(s__31802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31804),null);
}
} else {
var t = cljs.core.first(s__31802__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-140-19","app-140-19",188487566)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (t,s__31802__$2,temp__5804__auto__,tasks,new_task){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t))], null)], null));
});})(t,s__31802__$2,temp__5804__auto__,tasks,new_task))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Update"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__31802__$2,temp__5804__auto__,tasks,new_task){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(t,s__31802__$2,temp__5804__auto__,tasks,new_task))
], null),"Delete"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null)),app$tasks_grid_$_iter__31801(cljs.core.rest(s__31802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(tasks));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-153-19","app-153-19",-1863841295)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.new_task_input,new_task], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-tasks","add-tasks",1710130168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(new_task)], null)], null));
})], null),"Add"], null)], null)], null)], null)], null);
});
app.app = (function app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-159-25","app-159-25",-1680786433)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-163-26","app-163-26",-1588908724)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-164-18","app-164-18",1392176460)], null),"Tasks"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.tasks_grid], null)], null)], null);
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
