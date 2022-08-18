goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34203,res){
var map__34204 = p__34203;
var map__34204__$1 = cljs.core.__destructure_map(map__34204);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34204__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34204__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34205 = res;
var G__34205__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34205,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34205);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34205__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34205__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34214 = arguments.length;
switch (G__34214) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34222,msg,handlers,timeout_after_ms){
var map__34224 = p__34222;
var map__34224__$1 = cljs.core.__destructure_map(map__34224);
var runtime = map__34224__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34224__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34519 = arguments.length;
var i__5770__auto___34520 = (0);
while(true){
if((i__5770__auto___34520 < len__5769__auto___34519)){
args__5775__auto__.push((arguments[i__5770__auto___34520]));

var G__34522 = (i__5770__auto___34520 + (1));
i__5770__auto___34520 = G__34522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34246,ev,args){
var map__34247 = p__34246;
var map__34247__$1 = cljs.core.__destructure_map(map__34247);
var runtime = map__34247__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34247__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34249 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34252 = null;
var count__34253 = (0);
var i__34254 = (0);
while(true){
if((i__34254 < count__34253)){
var ext = chunk__34252.cljs$core$IIndexed$_nth$arity$2(null,i__34254);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34526 = seq__34249;
var G__34527 = chunk__34252;
var G__34528 = count__34253;
var G__34529 = (i__34254 + (1));
seq__34249 = G__34526;
chunk__34252 = G__34527;
count__34253 = G__34528;
i__34254 = G__34529;
continue;
} else {
var G__34530 = seq__34249;
var G__34531 = chunk__34252;
var G__34532 = count__34253;
var G__34533 = (i__34254 + (1));
seq__34249 = G__34530;
chunk__34252 = G__34531;
count__34253 = G__34532;
i__34254 = G__34533;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34249);
if(temp__5804__auto__){
var seq__34249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34249__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34249__$1);
var G__34535 = cljs.core.chunk_rest(seq__34249__$1);
var G__34536 = c__5568__auto__;
var G__34537 = cljs.core.count(c__5568__auto__);
var G__34538 = (0);
seq__34249 = G__34535;
chunk__34252 = G__34536;
count__34253 = G__34537;
i__34254 = G__34538;
continue;
} else {
var ext = cljs.core.first(seq__34249__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34541 = cljs.core.next(seq__34249__$1);
var G__34542 = null;
var G__34543 = (0);
var G__34544 = (0);
seq__34249 = G__34541;
chunk__34252 = G__34542;
count__34253 = G__34543;
i__34254 = G__34544;
continue;
} else {
var G__34545 = cljs.core.next(seq__34249__$1);
var G__34546 = null;
var G__34547 = (0);
var G__34548 = (0);
seq__34249 = G__34545;
chunk__34252 = G__34546;
count__34253 = G__34547;
i__34254 = G__34548;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34231){
var G__34233 = cljs.core.first(seq34231);
var seq34231__$1 = cljs.core.next(seq34231);
var G__34234 = cljs.core.first(seq34231__$1);
var seq34231__$2 = cljs.core.next(seq34231__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34233,G__34234,seq34231__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34288,p__34289){
var map__34291 = p__34288;
var map__34291__$1 = cljs.core.__destructure_map(map__34291);
var runtime = map__34291__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34291__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34292 = p__34289;
var map__34292__$1 = cljs.core.__destructure_map(map__34292);
var msg = map__34292__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34292__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34294 = cljs.core.deref(state_ref);
var map__34294__$1 = cljs.core.__destructure_map(map__34294);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34294__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34294__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34301){
var map__34302 = p__34301;
var map__34302__$1 = cljs.core.__destructure_map(map__34302);
var runtime = map__34302__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34302__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34304,msg){
var map__34307 = p__34304;
var map__34307__$1 = cljs.core.__destructure_map(map__34307);
var runtime = map__34307__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34307__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34324,key,p__34325){
var map__34327 = p__34324;
var map__34327__$1 = cljs.core.__destructure_map(map__34327);
var state = map__34327__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34327__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34328 = p__34325;
var map__34328__$1 = cljs.core.__destructure_map(map__34328);
var spec = map__34328__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34328__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34336,key,spec){
var map__34337 = p__34336;
var map__34337__$1 = cljs.core.__destructure_map(map__34337);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34341_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34341_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34342_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34342_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34343_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34343_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34344_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34344_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34345_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34345_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34364,key){
var map__34365 = p__34364;
var map__34365__$1 = cljs.core.__destructure_map(map__34365);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34371,msg){
var map__34376 = p__34371;
var map__34376__$1 = cljs.core.__destructure_map(map__34376);
var runtime = map__34376__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34376__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34385,p__34386){
var map__34387 = p__34385;
var map__34387__$1 = cljs.core.__destructure_map(map__34387);
var runtime = map__34387__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34388 = p__34386;
var map__34388__$1 = cljs.core.__destructure_map(map__34388);
var msg = map__34388__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34388__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34388__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34401 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34404 = null;
var count__34405 = (0);
var i__34406 = (0);
while(true){
if((i__34406 < count__34405)){
var map__34441 = chunk__34404.cljs$core$IIndexed$_nth$arity$2(null,i__34406);
var map__34441__$1 = cljs.core.__destructure_map(map__34441);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34441__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34595 = seq__34401;
var G__34596 = chunk__34404;
var G__34597 = count__34405;
var G__34598 = (i__34406 + (1));
seq__34401 = G__34595;
chunk__34404 = G__34596;
count__34405 = G__34597;
i__34406 = G__34598;
continue;
} else {
var G__34599 = seq__34401;
var G__34600 = chunk__34404;
var G__34601 = count__34405;
var G__34602 = (i__34406 + (1));
seq__34401 = G__34599;
chunk__34404 = G__34600;
count__34405 = G__34601;
i__34406 = G__34602;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34401);
if(temp__5804__auto__){
var seq__34401__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34401__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34401__$1);
var G__34604 = cljs.core.chunk_rest(seq__34401__$1);
var G__34605 = c__5568__auto__;
var G__34606 = cljs.core.count(c__5568__auto__);
var G__34607 = (0);
seq__34401 = G__34604;
chunk__34404 = G__34605;
count__34405 = G__34606;
i__34406 = G__34607;
continue;
} else {
var map__34476 = cljs.core.first(seq__34401__$1);
var map__34476__$1 = cljs.core.__destructure_map(map__34476);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34610 = cljs.core.next(seq__34401__$1);
var G__34611 = null;
var G__34612 = (0);
var G__34613 = (0);
seq__34401 = G__34610;
chunk__34404 = G__34611;
count__34405 = G__34612;
i__34406 = G__34613;
continue;
} else {
var G__34614 = cljs.core.next(seq__34401__$1);
var G__34615 = null;
var G__34616 = (0);
var G__34617 = (0);
seq__34401 = G__34614;
chunk__34404 = G__34615;
count__34405 = G__34616;
i__34406 = G__34617;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
