goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37651,p__37652){
var map__37654 = p__37651;
var map__37654__$1 = cljs.core.__destructure_map(map__37654);
var svc = map__37654__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37655 = p__37652;
var map__37655__$1 = cljs.core.__destructure_map(map__37655);
var msg = map__37655__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37655__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37655__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37665,p__37666){
var map__37668 = p__37665;
var map__37668__$1 = cljs.core.__destructure_map(map__37668);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37668__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37669 = p__37666;
var map__37669__$1 = cljs.core.__destructure_map(map__37669);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37676,p__37677){
var map__37680 = p__37676;
var map__37680__$1 = cljs.core.__destructure_map(map__37680);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37681 = p__37677;
var map__37681__$1 = cljs.core.__destructure_map(map__37681);
var msg = map__37681__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37681__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37683,tid){
var map__37684 = p__37683;
var map__37684__$1 = cljs.core.__destructure_map(map__37684);
var svc = map__37684__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37684__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37706 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37707 = null;
var count__37708 = (0);
var i__37709 = (0);
while(true){
if((i__37709 < count__37708)){
var vec__37729 = chunk__37707.cljs$core$IIndexed$_nth$arity$2(null,i__37709);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37729,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37757 = seq__37706;
var G__37758 = chunk__37707;
var G__37759 = count__37708;
var G__37760 = (i__37709 + (1));
seq__37706 = G__37757;
chunk__37707 = G__37758;
count__37708 = G__37759;
i__37709 = G__37760;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37706);
if(temp__5804__auto__){
var seq__37706__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37706__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37706__$1);
var G__37761 = cljs.core.chunk_rest(seq__37706__$1);
var G__37762 = c__5568__auto__;
var G__37763 = cljs.core.count(c__5568__auto__);
var G__37764 = (0);
seq__37706 = G__37761;
chunk__37707 = G__37762;
count__37708 = G__37763;
i__37709 = G__37764;
continue;
} else {
var vec__37744 = cljs.core.first(seq__37706__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37769 = cljs.core.next(seq__37706__$1);
var G__37770 = null;
var G__37771 = (0);
var G__37772 = (0);
seq__37706 = G__37769;
chunk__37707 = G__37770;
count__37708 = G__37771;
i__37709 = G__37772;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37692_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37692_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37693_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37693_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37694_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37694_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37695_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37695_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37754){
var map__37755 = p__37754;
var map__37755__$1 = cljs.core.__destructure_map(map__37755);
var svc = map__37755__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37755__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37755__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
