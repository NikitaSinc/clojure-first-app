goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11408__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11409__i = 0, G__11409__a = new Array(arguments.length -  0);
while (G__11409__i < G__11409__a.length) {G__11409__a[G__11409__i] = arguments[G__11409__i + 0]; ++G__11409__i;}
  args = new cljs.core.IndexedSeq(G__11409__a,0,null);
} 
return G__11408__delegate.call(this,args);};
G__11408.cljs$lang$maxFixedArity = 0;
G__11408.cljs$lang$applyTo = (function (arglist__11410){
var args = cljs.core.seq(arglist__11410);
return G__11408__delegate(args);
});
G__11408.cljs$core$IFn$_invoke$arity$variadic = G__11408__delegate;
return G__11408;
})()
);

(o.error = (function() { 
var G__11411__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11412__i = 0, G__11412__a = new Array(arguments.length -  0);
while (G__11412__i < G__11412__a.length) {G__11412__a[G__11412__i] = arguments[G__11412__i + 0]; ++G__11412__i;}
  args = new cljs.core.IndexedSeq(G__11412__a,0,null);
} 
return G__11411__delegate.call(this,args);};
G__11411.cljs$lang$maxFixedArity = 0;
G__11411.cljs$lang$applyTo = (function (arglist__11413){
var args = cljs.core.seq(arglist__11413);
return G__11411__delegate(args);
});
G__11411.cljs$core$IFn$_invoke$arity$variadic = G__11411__delegate;
return G__11411;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
