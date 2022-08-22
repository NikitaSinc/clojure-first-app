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
var G__38212__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38213__i = 0, G__38213__a = new Array(arguments.length -  0);
while (G__38213__i < G__38213__a.length) {G__38213__a[G__38213__i] = arguments[G__38213__i + 0]; ++G__38213__i;}
  args = new cljs.core.IndexedSeq(G__38213__a,0,null);
} 
return G__38212__delegate.call(this,args);};
G__38212.cljs$lang$maxFixedArity = 0;
G__38212.cljs$lang$applyTo = (function (arglist__38214){
var args = cljs.core.seq(arglist__38214);
return G__38212__delegate(args);
});
G__38212.cljs$core$IFn$_invoke$arity$variadic = G__38212__delegate;
return G__38212;
})()
);

(o.error = (function() { 
var G__38215__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38216__i = 0, G__38216__a = new Array(arguments.length -  0);
while (G__38216__i < G__38216__a.length) {G__38216__a[G__38216__i] = arguments[G__38216__i + 0]; ++G__38216__i;}
  args = new cljs.core.IndexedSeq(G__38216__a,0,null);
} 
return G__38215__delegate.call(this,args);};
G__38215.cljs$lang$maxFixedArity = 0;
G__38215.cljs$lang$applyTo = (function (arglist__38217){
var args = cljs.core.seq(arglist__38217);
return G__38215__delegate(args);
});
G__38215.cljs$core$IFn$_invoke$arity$variadic = G__38215__delegate;
return G__38215;
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
