goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40483){
var map__40484 = p__40483;
var map__40484__$1 = cljs.core.__destructure_map(map__40484);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40484__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__40487_40526 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__40488_40527 = null;
var count__40489_40528 = (0);
var i__40490_40529 = (0);
while(true){
if((i__40490_40529 < count__40489_40528)){
var vec__40502_40530 = chunk__40488_40527.cljs$core$IIndexed$_nth$arity$2(null,i__40490_40529);
var k_40531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40502_40530,(0),null);
var cb_40532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40502_40530,(1),null);
try{var G__40507_40533 = cljs.core.deref(re_frame.trace.traces);
(cb_40532.cljs$core$IFn$_invoke$arity$1 ? cb_40532.cljs$core$IFn$_invoke$arity$1(G__40507_40533) : cb_40532.call(null,G__40507_40533));
}catch (e40505){var e_40534 = e40505;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40531,"while storing",cljs.core.deref(re_frame.trace.traces),e_40534], 0));
}

var G__40535 = seq__40487_40526;
var G__40536 = chunk__40488_40527;
var G__40537 = count__40489_40528;
var G__40538 = (i__40490_40529 + (1));
seq__40487_40526 = G__40535;
chunk__40488_40527 = G__40536;
count__40489_40528 = G__40537;
i__40490_40529 = G__40538;
continue;
} else {
var temp__5804__auto___40539 = cljs.core.seq(seq__40487_40526);
if(temp__5804__auto___40539){
var seq__40487_40540__$1 = temp__5804__auto___40539;
if(cljs.core.chunked_seq_QMARK_(seq__40487_40540__$1)){
var c__5568__auto___40541 = cljs.core.chunk_first(seq__40487_40540__$1);
var G__40542 = cljs.core.chunk_rest(seq__40487_40540__$1);
var G__40543 = c__5568__auto___40541;
var G__40544 = cljs.core.count(c__5568__auto___40541);
var G__40545 = (0);
seq__40487_40526 = G__40542;
chunk__40488_40527 = G__40543;
count__40489_40528 = G__40544;
i__40490_40529 = G__40545;
continue;
} else {
var vec__40512_40547 = cljs.core.first(seq__40487_40540__$1);
var k_40548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_40547,(0),null);
var cb_40549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_40547,(1),null);
try{var G__40516_40550 = cljs.core.deref(re_frame.trace.traces);
(cb_40549.cljs$core$IFn$_invoke$arity$1 ? cb_40549.cljs$core$IFn$_invoke$arity$1(G__40516_40550) : cb_40549.call(null,G__40516_40550));
}catch (e40515){var e_40551 = e40515;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40548,"while storing",cljs.core.deref(re_frame.trace.traces),e_40551], 0));
}

var G__40552 = cljs.core.next(seq__40487_40540__$1);
var G__40553 = null;
var G__40554 = (0);
var G__40555 = (0);
seq__40487_40526 = G__40552;
chunk__40488_40527 = G__40553;
count__40489_40528 = G__40554;
i__40490_40529 = G__40555;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
