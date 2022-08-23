goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__40969 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40970 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40970);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___41206 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___41206)){
var new_db_41207 = temp__5804__auto___41206;
var fexpr__40978_41208 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40978_41208.cljs$core$IFn$_invoke$arity$1 ? fexpr__40978_41208.cljs$core$IFn$_invoke$arity$1(new_db_41207) : fexpr__40978_41208.call(null,new_db_41207));
} else {
}

var seq__40979 = cljs.core.seq(effects_without_db);
var chunk__40980 = null;
var count__40981 = (0);
var i__40982 = (0);
while(true){
if((i__40982 < count__40981)){
var vec__40997 = chunk__40980.cljs$core$IIndexed$_nth$arity$2(null,i__40982);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40997,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40997,(1),null);
var temp__5802__auto___41209 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41209)){
var effect_fn_41210 = temp__5802__auto___41209;
(effect_fn_41210.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41210.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41210.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41211 = seq__40979;
var G__41212 = chunk__40980;
var G__41213 = count__40981;
var G__41214 = (i__40982 + (1));
seq__40979 = G__41211;
chunk__40980 = G__41212;
count__40981 = G__41213;
i__40982 = G__41214;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40979);
if(temp__5804__auto__){
var seq__40979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40979__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40979__$1);
var G__41215 = cljs.core.chunk_rest(seq__40979__$1);
var G__41216 = c__5568__auto__;
var G__41217 = cljs.core.count(c__5568__auto__);
var G__41218 = (0);
seq__40979 = G__41215;
chunk__40980 = G__41216;
count__40981 = G__41217;
i__40982 = G__41218;
continue;
} else {
var vec__41010 = cljs.core.first(seq__40979__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41010,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41010,(1),null);
var temp__5802__auto___41219 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41219)){
var effect_fn_41220 = temp__5802__auto___41219;
(effect_fn_41220.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41220.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41220.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41221 = cljs.core.next(seq__40979__$1);
var G__41222 = null;
var G__41223 = (0);
var G__41224 = (0);
seq__40979 = G__41221;
chunk__40980 = G__41222;
count__40981 = G__41223;
i__40982 = G__41224;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40451__auto___41225 = re_frame.interop.now();
var duration__40452__auto___41226 = (end__40451__auto___41225 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40452__auto___41226,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40451__auto___41225);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40969);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___41227 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___41227)){
var new_db_41228 = temp__5804__auto___41227;
var fexpr__41015_41230 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__41015_41230.cljs$core$IFn$_invoke$arity$1 ? fexpr__41015_41230.cljs$core$IFn$_invoke$arity$1(new_db_41228) : fexpr__41015_41230.call(null,new_db_41228));
} else {
}

var seq__41016 = cljs.core.seq(effects_without_db);
var chunk__41017 = null;
var count__41018 = (0);
var i__41019 = (0);
while(true){
if((i__41019 < count__41018)){
var vec__41029 = chunk__41017.cljs$core$IIndexed$_nth$arity$2(null,i__41019);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41029,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41029,(1),null);
var temp__5802__auto___41235 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41235)){
var effect_fn_41237 = temp__5802__auto___41235;
(effect_fn_41237.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41237.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41237.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41239 = seq__41016;
var G__41240 = chunk__41017;
var G__41241 = count__41018;
var G__41242 = (i__41019 + (1));
seq__41016 = G__41239;
chunk__41017 = G__41240;
count__41018 = G__41241;
i__41019 = G__41242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41016);
if(temp__5804__auto__){
var seq__41016__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41016__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41016__$1);
var G__41243 = cljs.core.chunk_rest(seq__41016__$1);
var G__41244 = c__5568__auto__;
var G__41245 = cljs.core.count(c__5568__auto__);
var G__41246 = (0);
seq__41016 = G__41243;
chunk__41017 = G__41244;
count__41018 = G__41245;
i__41019 = G__41246;
continue;
} else {
var vec__41039 = cljs.core.first(seq__41016__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(1),null);
var temp__5802__auto___41248 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41248)){
var effect_fn_41250 = temp__5802__auto___41248;
(effect_fn_41250.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41250.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41250.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41252 = cljs.core.next(seq__41016__$1);
var G__41253 = null;
var G__41254 = (0);
var G__41255 = (0);
seq__41016 = G__41252;
chunk__41017 = G__41253;
count__41018 = G__41254;
i__41019 = G__41255;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__41046){
var map__41047 = p__41046;
var map__41047__$1 = cljs.core.__destructure_map(map__41047);
var effect = map__41047__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__41053 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41054 = null;
var count__41055 = (0);
var i__41056 = (0);
while(true){
if((i__41056 < count__41055)){
var effect = chunk__41054.cljs$core$IIndexed$_nth$arity$2(null,i__41056);
re_frame.fx.dispatch_later(effect);


var G__41271 = seq__41053;
var G__41272 = chunk__41054;
var G__41273 = count__41055;
var G__41274 = (i__41056 + (1));
seq__41053 = G__41271;
chunk__41054 = G__41272;
count__41055 = G__41273;
i__41056 = G__41274;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41053);
if(temp__5804__auto__){
var seq__41053__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41053__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41053__$1);
var G__41276 = cljs.core.chunk_rest(seq__41053__$1);
var G__41277 = c__5568__auto__;
var G__41278 = cljs.core.count(c__5568__auto__);
var G__41279 = (0);
seq__41053 = G__41276;
chunk__41054 = G__41277;
count__41055 = G__41278;
i__41056 = G__41279;
continue;
} else {
var effect = cljs.core.first(seq__41053__$1);
re_frame.fx.dispatch_later(effect);


var G__41280 = cljs.core.next(seq__41053__$1);
var G__41281 = null;
var G__41282 = (0);
var G__41283 = (0);
seq__41053 = G__41280;
chunk__41054 = G__41281;
count__41055 = G__41282;
i__41056 = G__41283;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__41063 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__41064 = null;
var count__41065 = (0);
var i__41066 = (0);
while(true){
if((i__41066 < count__41065)){
var vec__41100 = chunk__41064.cljs$core$IIndexed$_nth$arity$2(null,i__41066);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41100,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41100,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___41295 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41295)){
var effect_fn_41296 = temp__5802__auto___41295;
(effect_fn_41296.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41296.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41296.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41297 = seq__41063;
var G__41298 = chunk__41064;
var G__41299 = count__41065;
var G__41300 = (i__41066 + (1));
seq__41063 = G__41297;
chunk__41064 = G__41298;
count__41065 = G__41299;
i__41066 = G__41300;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41063);
if(temp__5804__auto__){
var seq__41063__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41063__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41063__$1);
var G__41305 = cljs.core.chunk_rest(seq__41063__$1);
var G__41306 = c__5568__auto__;
var G__41307 = cljs.core.count(c__5568__auto__);
var G__41308 = (0);
seq__41063 = G__41305;
chunk__41064 = G__41306;
count__41065 = G__41307;
i__41066 = G__41308;
continue;
} else {
var vec__41106 = cljs.core.first(seq__41063__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41106,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41106,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___41310 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41310)){
var effect_fn_41311 = temp__5802__auto___41310;
(effect_fn_41311.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41311.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41311.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41313 = cljs.core.next(seq__41063__$1);
var G__41314 = null;
var G__41315 = (0);
var G__41316 = (0);
seq__41063 = G__41313;
chunk__41064 = G__41314;
count__41065 = G__41315;
i__41066 = G__41316;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__41126 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41127 = null;
var count__41128 = (0);
var i__41129 = (0);
while(true){
if((i__41129 < count__41128)){
var event = chunk__41127.cljs$core$IIndexed$_nth$arity$2(null,i__41129);
re_frame.router.dispatch(event);


var G__41323 = seq__41126;
var G__41324 = chunk__41127;
var G__41325 = count__41128;
var G__41326 = (i__41129 + (1));
seq__41126 = G__41323;
chunk__41127 = G__41324;
count__41128 = G__41325;
i__41129 = G__41326;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41126);
if(temp__5804__auto__){
var seq__41126__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41126__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41126__$1);
var G__41328 = cljs.core.chunk_rest(seq__41126__$1);
var G__41329 = c__5568__auto__;
var G__41330 = cljs.core.count(c__5568__auto__);
var G__41331 = (0);
seq__41126 = G__41328;
chunk__41127 = G__41329;
count__41128 = G__41330;
i__41129 = G__41331;
continue;
} else {
var event = cljs.core.first(seq__41126__$1);
re_frame.router.dispatch(event);


var G__41332 = cljs.core.next(seq__41126__$1);
var G__41333 = null;
var G__41334 = (0);
var G__41335 = (0);
seq__41126 = G__41332;
chunk__41127 = G__41333;
count__41128 = G__41334;
i__41129 = G__41335;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__41165 = cljs.core.seq(value);
var chunk__41166 = null;
var count__41167 = (0);
var i__41168 = (0);
while(true){
if((i__41168 < count__41167)){
var event = chunk__41166.cljs$core$IIndexed$_nth$arity$2(null,i__41168);
clear_event(event);


var G__41336 = seq__41165;
var G__41337 = chunk__41166;
var G__41338 = count__41167;
var G__41339 = (i__41168 + (1));
seq__41165 = G__41336;
chunk__41166 = G__41337;
count__41167 = G__41338;
i__41168 = G__41339;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41165);
if(temp__5804__auto__){
var seq__41165__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41165__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41165__$1);
var G__41340 = cljs.core.chunk_rest(seq__41165__$1);
var G__41341 = c__5568__auto__;
var G__41342 = cljs.core.count(c__5568__auto__);
var G__41343 = (0);
seq__41165 = G__41340;
chunk__41166 = G__41341;
count__41167 = G__41342;
i__41168 = G__41343;
continue;
} else {
var event = cljs.core.first(seq__41165__$1);
clear_event(event);


var G__41345 = cljs.core.next(seq__41165__$1);
var G__41346 = null;
var G__41347 = (0);
var G__41348 = (0);
seq__41165 = G__41345;
chunk__41166 = G__41346;
count__41167 = G__41347;
i__41168 = G__41348;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
