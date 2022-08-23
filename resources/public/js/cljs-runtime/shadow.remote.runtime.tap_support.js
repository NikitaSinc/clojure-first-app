goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38098,p__38099){
var map__38100 = p__38098;
var map__38100__$1 = cljs.core.__destructure_map(map__38100);
var svc = map__38100__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38100__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38100__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38100__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38101 = p__38099;
var map__38101__$1 = cljs.core.__destructure_map(map__38101);
var msg = map__38101__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38101__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38101__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38101__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38101__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38117,p__38118){
var map__38120 = p__38117;
var map__38120__$1 = cljs.core.__destructure_map(map__38120);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38120__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38121 = p__38118;
var map__38121__$1 = cljs.core.__destructure_map(map__38121);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38121__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38128,p__38129){
var map__38130 = p__38128;
var map__38130__$1 = cljs.core.__destructure_map(map__38130);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38130__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38130__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38131 = p__38129;
var map__38131__$1 = cljs.core.__destructure_map(map__38131);
var msg = map__38131__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38131__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38132,tid){
var map__38135 = p__38132;
var map__38135__$1 = cljs.core.__destructure_map(map__38135);
var svc = map__38135__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38135__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38145 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38146 = null;
var count__38147 = (0);
var i__38148 = (0);
while(true){
if((i__38148 < count__38147)){
var vec__38161 = chunk__38146.cljs$core$IIndexed$_nth$arity$2(null,i__38148);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38161,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38161,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38185 = seq__38145;
var G__38186 = chunk__38146;
var G__38187 = count__38147;
var G__38188 = (i__38148 + (1));
seq__38145 = G__38185;
chunk__38146 = G__38186;
count__38147 = G__38187;
i__38148 = G__38188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38145);
if(temp__5804__auto__){
var seq__38145__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38145__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38145__$1);
var G__38189 = cljs.core.chunk_rest(seq__38145__$1);
var G__38190 = c__5568__auto__;
var G__38191 = cljs.core.count(c__5568__auto__);
var G__38192 = (0);
seq__38145 = G__38189;
chunk__38146 = G__38190;
count__38147 = G__38191;
i__38148 = G__38192;
continue;
} else {
var vec__38164 = cljs.core.first(seq__38145__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38193 = cljs.core.next(seq__38145__$1);
var G__38194 = null;
var G__38195 = (0);
var G__38196 = (0);
seq__38145 = G__38193;
chunk__38146 = G__38194;
count__38147 = G__38195;
i__38148 = G__38196;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38138_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38138_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38139_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38139_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38141_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38141_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38142_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38142_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38171){
var map__38172 = p__38171;
var map__38172__$1 = cljs.core.__destructure_map(map__38172);
var svc = map__38172__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
