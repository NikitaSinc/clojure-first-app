goog.provide('app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change-desc","change-desc",2114450792),null], null));
app.cljsify = (function app$cljsify(d){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"custom-fetch","custom-fetch",777656205),(function (p__30136){
var map__30137 = p__30136;
var map__30137__$1 = cljs.core.__destructure_map(map__30137);
var req = map__30137__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30137__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30137__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30137__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30137__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
return window.fetch(uri).then((function (resp){
if((resp.status > (203))){
var seq__30139 = cljs.core.seq(failure);
var chunk__30140 = null;
var count__30141 = (0);
var i__30142 = (0);
while(true){
if((i__30142 < count__30141)){
var f = chunk__30140.cljs$core$IIndexed$_nth$arity$2(null,i__30142);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,app.cljsify(resp)], null));


var G__30213 = seq__30139;
var G__30214 = chunk__30140;
var G__30215 = count__30141;
var G__30216 = (i__30142 + (1));
seq__30139 = G__30213;
chunk__30140 = G__30214;
count__30141 = G__30215;
i__30142 = G__30216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30139);
if(temp__5804__auto__){
var seq__30139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30139__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30139__$1);
var G__30217 = cljs.core.chunk_rest(seq__30139__$1);
var G__30218 = c__5568__auto__;
var G__30219 = cljs.core.count(c__5568__auto__);
var G__30220 = (0);
seq__30139 = G__30217;
chunk__30140 = G__30218;
count__30141 = G__30219;
i__30142 = G__30220;
continue;
} else {
var f = cljs.core.first(seq__30139__$1);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,app.cljsify(resp)], null));


var G__30221 = cljs.core.next(seq__30139__$1);
var G__30222 = null;
var G__30223 = (0);
var G__30224 = (0);
seq__30139 = G__30221;
chunk__30140 = G__30222;
count__30141 = G__30223;
i__30142 = G__30224;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return resp.json().then((function (resp__$1){
var seq__30143 = cljs.core.seq(success);
var chunk__30144 = null;
var count__30145 = (0);
var i__30146 = (0);
while(true){
if((i__30146 < count__30145)){
var s = chunk__30144.cljs$core$IIndexed$_nth$arity$2(null,i__30146);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,app.cljsify(resp__$1)], null));


var G__30225 = seq__30143;
var G__30226 = chunk__30144;
var G__30227 = count__30145;
var G__30228 = (i__30146 + (1));
seq__30143 = G__30225;
chunk__30144 = G__30226;
count__30145 = G__30227;
i__30146 = G__30228;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30143);
if(temp__5804__auto__){
var seq__30143__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30143__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30143__$1);
var G__30229 = cljs.core.chunk_rest(seq__30143__$1);
var G__30230 = c__5568__auto__;
var G__30231 = cljs.core.count(c__5568__auto__);
var G__30232 = (0);
seq__30143 = G__30229;
chunk__30144 = G__30230;
count__30145 = G__30231;
i__30146 = G__30232;
continue;
} else {
var s = cljs.core.first(seq__30143__$1);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,app.cljsify(resp__$1)], null));


var G__30233 = cljs.core.next(seq__30143__$1);
var G__30234 = null;
var G__30235 = (0);
var G__30236 = (0);
seq__30143 = G__30233;
chunk__30144 = G__30234;
count__30145 = G__30235;
i__30146 = G__30236;
continue;
}
} else {
return null;
}
}
break;
}
}));
}
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-tasks","get-tasks",-1984554960),(function (p__30148,_){
var map__30149 = p__30148;
var map__30149__$1 = cljs.core.__destructure_map(map__30149);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30149__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"custom-fetch","custom-fetch",777656205),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/get",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-get-tasks","success-get-tasks",1139596560)], null),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-get-tasks","failure-get-tasks",-717850038)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-tasks","add-tasks",1710130168),(function (p__30150,p__30151){
var map__30152 = p__30150;
var map__30152__$1 = cljs.core.__destructure_map(map__30152);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30152__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30153 = p__30151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30153,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/add",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-tasks","success-add-tasks",-1015101135)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-add-tasks","failure-add-tasks",513047701)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),(function (p__30156,p__30157){
var map__30158 = p__30156;
var map__30158__$1 = cljs.core.__destructure_map(map__30158);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30158__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30159 = p__30157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30159,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30159,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/tasks/delete/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-delete-tasks","success-delete-tasks",1392770014)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-delete-tasks","failure-delete-tasks",-419813457)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),(function (p__30162,p__30163){
var map__30164 = p__30162;
var map__30164__$1 = cljs.core.__destructure_map(map__30164);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30164__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30165 = p__30163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30165,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30165,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/tasks/update/",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"params","params",710516235),val,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-update-tasks","success-update-tasks",-1009135340)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-update-tasks","failure-update-tasks",678689174)], null)], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),null], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-get-tasks","success-get-tasks",1139596560),(function (db,p__30168){
var vec__30169 = p__30168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30169,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30169,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-get-tasks","failure-get-tasks",-717850038),(function (db,p__30172){
var vec__30173 = p__30172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30173,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30173,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-add-tasks","success-add-tasks",-1015101135),(function (db,p__30176){
var vec__30177 = p__30176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30177,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30177,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (___$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tdb,resp);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-add-tasks","failure-add-tasks",513047701),(function (db,p__30180){
var vec__30181 = p__30180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30181,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30181,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-delete-tasks","success-delete-tasks",1392770014),(function (db,p__30185){
var vec__30186 = p__30185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30186,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30186,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (old){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30184_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(p1__30184_SHARP_),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(resp));
}),old));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-delete-tasks","failure-delete-tasks",-419813457),(function (db,p__30189){
var vec__30190 = p__30189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success-update-tasks","success-update-tasks",-1009135340),(function (db,p__30194){
var vec__30195 = p__30194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30195,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30195,(1),null);
var tdb = new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),(function (old){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30193_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(p1__30193_SHARP_))){
return resp;
} else {
return p1__30193_SHARP_;
}
}),old);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failure-update-tasks","failure-update-tasks",678689174),(function (db,p__30198){
var vec__30199 = p__30198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30199,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30199,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),response);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),(function (db,p__30202){
var vec__30203 = p__30202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30203,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30203,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"change-desc","change-desc",2114450792),id);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sorted-tasks","sorted-tasks",1984680796),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null));
}),(function (tasks,_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__30206_SHARP_){
return new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(p1__30206_SHARP_) === false;
}),tasks);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"change-desc","change-desc",2114450792),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"change-desc","change-desc",2114450792).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
app.new_task_input = (function app$new_task_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type new task here",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30207_SHARP_){
return cljs.core.reset_BANG_(value,p1__30207_SHARP_.target.value);
})], null)], null);
});
app.change_desc_input = (function app$change_desc_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type new description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30208_SHARP_){
return cljs.core.reset_BANG_(value,p1__30208_SHARP_.target.value);
})], null)], null);
});
app.tasks_grid = (function app$tasks_grid(){
var tasks = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sorted-tasks","sorted-tasks",1984680796)], null));
var ch_desc = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc","change-desc",2114450792)], null));
var new_task = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var new_description = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"tasks-grid",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-175-21","app-175-21",655892468)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-176-22","app-176-22",-1424741626)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-177-20","app-177-20",823029509)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Done"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-181-22","app-181-22",-1787569681)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function app$tasks_grid_$_iter__30209(s__30210){
return (new cljs.core.LazySeq(null,(function (){
var s__30210__$1 = s__30210;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30210__$1);
if(temp__5804__auto__){
var s__30210__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30210__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30210__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30212 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30211 = (0);
while(true){
if((i__30211 < size__5522__auto__)){
var t = cljs.core._nth(c__5521__auto__,i__30211);
cljs.core.chunk_append(b__30212,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-185-24","app-185-24",-514907563)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.change_desc_input,new_description], null):((cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t))], null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t))], null)], null));
});})(i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Change"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(new_description),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)], null)], null));
});})(i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Save"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),null], null));
});})(i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Discard"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(i__30211,t,c__5521__auto__,size__5522__auto__,b__30212,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Delete"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__30237 = (i__30211 + (1));
i__30211 = G__30237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30212),app$tasks_grid_$_iter__30209(cljs.core.chunk_rest(s__30210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30212),null);
}
} else {
var t = cljs.core.first(s__30210__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-185-24","app-185-24",-514907563)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.change_desc_input,new_description], null):((cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t))], null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("tasks","description","tasks/description",-1605738226).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.not(new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t))], null)], null));
});})(t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Change"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(new_description),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword("tasks","done","tasks/done",-1069182290).cljs$core$IFn$_invoke$arity$1(t)], null)], null));
});})(t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Save"], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t),cljs.core.deref(ch_desc)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-desc-event","change-desc-event",-974635526),null], null));
});})(t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Discard"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-tasks","delete-tasks",-1948117208),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null));
});})(t,s__30210__$2,temp__5804__auto__,tasks,ch_desc,new_task,new_description))
], null),"Delete"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tasks","id","tasks/id",-1278267738).cljs$core$IFn$_invoke$arity$1(t)], null)),app$tasks_grid_$_iter__30209(cljs.core.rest(s__30210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(tasks));
})()),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-207-20","app-207-20",216009088)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.new_task_input,new_task], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-tasks","add-tasks",1710130168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.deref(new_task)], null)], null));
})], null),"Add"], null)], null)], null)], null)], null);
});
app.app = (function app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-213-25","app-213-25",-215954831)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-217-26","app-217-26",-369539753)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app-218-18","app-218-18",903415480)], null),"Tasks"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.tasks_grid], null)], null)], null);
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
