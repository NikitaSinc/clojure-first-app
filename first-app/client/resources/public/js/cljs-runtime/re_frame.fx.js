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
var _STAR_current_trace_STAR__orig_val__40950 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40951 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40951);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___41116 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___41116)){
var new_db_41117 = temp__5804__auto___41116;
var fexpr__40956_41118 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40956_41118.cljs$core$IFn$_invoke$arity$1 ? fexpr__40956_41118.cljs$core$IFn$_invoke$arity$1(new_db_41117) : fexpr__40956_41118.call(null,new_db_41117));
} else {
}

var seq__40960 = cljs.core.seq(effects_without_db);
var chunk__40961 = null;
var count__40962 = (0);
var i__40963 = (0);
while(true){
if((i__40963 < count__40962)){
var vec__40981 = chunk__40961.cljs$core$IIndexed$_nth$arity$2(null,i__40963);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40981,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40981,(1),null);
var temp__5802__auto___41125 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41125)){
var effect_fn_41127 = temp__5802__auto___41125;
(effect_fn_41127.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41127.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41127.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41129 = seq__40960;
var G__41130 = chunk__40961;
var G__41131 = count__40962;
var G__41132 = (i__40963 + (1));
seq__40960 = G__41129;
chunk__40961 = G__41130;
count__40962 = G__41131;
i__40963 = G__41132;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40960);
if(temp__5804__auto__){
var seq__40960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40960__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40960__$1);
var G__41133 = cljs.core.chunk_rest(seq__40960__$1);
var G__41134 = c__5568__auto__;
var G__41135 = cljs.core.count(c__5568__auto__);
var G__41136 = (0);
seq__40960 = G__41133;
chunk__40961 = G__41134;
count__40962 = G__41135;
i__40963 = G__41136;
continue;
} else {
var vec__40988 = cljs.core.first(seq__40960__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40988,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40988,(1),null);
var temp__5802__auto___41137 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41137)){
var effect_fn_41141 = temp__5802__auto___41137;
(effect_fn_41141.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41141.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41141.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41142 = cljs.core.next(seq__40960__$1);
var G__41143 = null;
var G__41144 = (0);
var G__41145 = (0);
seq__40960 = G__41142;
chunk__40961 = G__41143;
count__40962 = G__41144;
i__40963 = G__41145;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40445__auto___41146 = re_frame.interop.now();
var duration__40446__auto___41147 = (end__40445__auto___41146 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40446__auto___41147,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40445__auto___41146);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40950);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___41149 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___41149)){
var new_db_41150 = temp__5804__auto___41149;
var fexpr__40999_41151 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40999_41151.cljs$core$IFn$_invoke$arity$1 ? fexpr__40999_41151.cljs$core$IFn$_invoke$arity$1(new_db_41150) : fexpr__40999_41151.call(null,new_db_41150));
} else {
}

var seq__41000 = cljs.core.seq(effects_without_db);
var chunk__41001 = null;
var count__41002 = (0);
var i__41003 = (0);
while(true){
if((i__41003 < count__41002)){
var vec__41019 = chunk__41001.cljs$core$IIndexed$_nth$arity$2(null,i__41003);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41019,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41019,(1),null);
var temp__5802__auto___41153 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41153)){
var effect_fn_41154 = temp__5802__auto___41153;
(effect_fn_41154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41154.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41158 = seq__41000;
var G__41159 = chunk__41001;
var G__41160 = count__41002;
var G__41161 = (i__41003 + (1));
seq__41000 = G__41158;
chunk__41001 = G__41159;
count__41002 = G__41160;
i__41003 = G__41161;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41000);
if(temp__5804__auto__){
var seq__41000__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41000__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41000__$1);
var G__41162 = cljs.core.chunk_rest(seq__41000__$1);
var G__41163 = c__5568__auto__;
var G__41164 = cljs.core.count(c__5568__auto__);
var G__41165 = (0);
seq__41000 = G__41162;
chunk__41001 = G__41163;
count__41002 = G__41164;
i__41003 = G__41165;
continue;
} else {
var vec__41027 = cljs.core.first(seq__41000__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41027,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41027,(1),null);
var temp__5802__auto___41166 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41166)){
var effect_fn_41167 = temp__5802__auto___41166;
(effect_fn_41167.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41167.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41167.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41168 = cljs.core.next(seq__41000__$1);
var G__41169 = null;
var G__41170 = (0);
var G__41171 = (0);
seq__41000 = G__41168;
chunk__41001 = G__41169;
count__41002 = G__41170;
i__41003 = G__41171;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__41035){
var map__41036 = p__41035;
var map__41036__$1 = cljs.core.__destructure_map(map__41036);
var effect = map__41036__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41036__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41036__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__41041 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41042 = null;
var count__41043 = (0);
var i__41044 = (0);
while(true){
if((i__41044 < count__41043)){
var effect = chunk__41042.cljs$core$IIndexed$_nth$arity$2(null,i__41044);
re_frame.fx.dispatch_later(effect);


var G__41176 = seq__41041;
var G__41177 = chunk__41042;
var G__41178 = count__41043;
var G__41179 = (i__41044 + (1));
seq__41041 = G__41176;
chunk__41042 = G__41177;
count__41043 = G__41178;
i__41044 = G__41179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41041);
if(temp__5804__auto__){
var seq__41041__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41041__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41041__$1);
var G__41185 = cljs.core.chunk_rest(seq__41041__$1);
var G__41186 = c__5568__auto__;
var G__41187 = cljs.core.count(c__5568__auto__);
var G__41188 = (0);
seq__41041 = G__41185;
chunk__41042 = G__41186;
count__41043 = G__41187;
i__41044 = G__41188;
continue;
} else {
var effect = cljs.core.first(seq__41041__$1);
re_frame.fx.dispatch_later(effect);


var G__41192 = cljs.core.next(seq__41041__$1);
var G__41193 = null;
var G__41194 = (0);
var G__41195 = (0);
seq__41041 = G__41192;
chunk__41042 = G__41193;
count__41043 = G__41194;
i__41044 = G__41195;
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
var seq__41057 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__41058 = null;
var count__41059 = (0);
var i__41060 = (0);
while(true){
if((i__41060 < count__41059)){
var vec__41074 = chunk__41058.cljs$core$IIndexed$_nth$arity$2(null,i__41060);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41074,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41074,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___41201 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41201)){
var effect_fn_41202 = temp__5802__auto___41201;
(effect_fn_41202.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41202.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41202.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41205 = seq__41057;
var G__41206 = chunk__41058;
var G__41207 = count__41059;
var G__41208 = (i__41060 + (1));
seq__41057 = G__41205;
chunk__41058 = G__41206;
count__41059 = G__41207;
i__41060 = G__41208;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41057);
if(temp__5804__auto__){
var seq__41057__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41057__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41057__$1);
var G__41209 = cljs.core.chunk_rest(seq__41057__$1);
var G__41210 = c__5568__auto__;
var G__41211 = cljs.core.count(c__5568__auto__);
var G__41212 = (0);
seq__41057 = G__41209;
chunk__41058 = G__41210;
count__41059 = G__41211;
i__41060 = G__41212;
continue;
} else {
var vec__41079 = cljs.core.first(seq__41057__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41079,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41079,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___41218 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___41218)){
var effect_fn_41221 = temp__5802__auto___41218;
(effect_fn_41221.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41221.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41221.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41222 = cljs.core.next(seq__41057__$1);
var G__41223 = null;
var G__41224 = (0);
var G__41225 = (0);
seq__41057 = G__41222;
chunk__41058 = G__41223;
count__41059 = G__41224;
i__41060 = G__41225;
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
var seq__41083 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41084 = null;
var count__41085 = (0);
var i__41086 = (0);
while(true){
if((i__41086 < count__41085)){
var event = chunk__41084.cljs$core$IIndexed$_nth$arity$2(null,i__41086);
re_frame.router.dispatch(event);


var G__41232 = seq__41083;
var G__41233 = chunk__41084;
var G__41234 = count__41085;
var G__41235 = (i__41086 + (1));
seq__41083 = G__41232;
chunk__41084 = G__41233;
count__41085 = G__41234;
i__41086 = G__41235;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41083);
if(temp__5804__auto__){
var seq__41083__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41083__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41083__$1);
var G__41236 = cljs.core.chunk_rest(seq__41083__$1);
var G__41237 = c__5568__auto__;
var G__41238 = cljs.core.count(c__5568__auto__);
var G__41239 = (0);
seq__41083 = G__41236;
chunk__41084 = G__41237;
count__41085 = G__41238;
i__41086 = G__41239;
continue;
} else {
var event = cljs.core.first(seq__41083__$1);
re_frame.router.dispatch(event);


var G__41240 = cljs.core.next(seq__41083__$1);
var G__41241 = null;
var G__41242 = (0);
var G__41243 = (0);
seq__41083 = G__41240;
chunk__41084 = G__41241;
count__41085 = G__41242;
i__41086 = G__41243;
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
var seq__41091 = cljs.core.seq(value);
var chunk__41092 = null;
var count__41093 = (0);
var i__41094 = (0);
while(true){
if((i__41094 < count__41093)){
var event = chunk__41092.cljs$core$IIndexed$_nth$arity$2(null,i__41094);
clear_event(event);


var G__41244 = seq__41091;
var G__41245 = chunk__41092;
var G__41246 = count__41093;
var G__41247 = (i__41094 + (1));
seq__41091 = G__41244;
chunk__41092 = G__41245;
count__41093 = G__41246;
i__41094 = G__41247;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41091);
if(temp__5804__auto__){
var seq__41091__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41091__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41091__$1);
var G__41248 = cljs.core.chunk_rest(seq__41091__$1);
var G__41249 = c__5568__auto__;
var G__41250 = cljs.core.count(c__5568__auto__);
var G__41251 = (0);
seq__41091 = G__41248;
chunk__41092 = G__41249;
count__41093 = G__41250;
i__41094 = G__41251;
continue;
} else {
var event = cljs.core.first(seq__41091__$1);
clear_event(event);


var G__41252 = cljs.core.next(seq__41091__$1);
var G__41253 = null;
var G__41254 = (0);
var G__41255 = (0);
seq__41091 = G__41252;
chunk__41092 = G__41253;
count__41093 = G__41254;
i__41094 = G__41255;
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
