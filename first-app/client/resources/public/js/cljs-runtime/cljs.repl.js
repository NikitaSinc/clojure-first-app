goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19002){
var map__19005 = p__19002;
var map__19005__$1 = cljs.core.__destructure_map(map__19005);
var m = map__19005__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19005__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19017_19417 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19018_19418 = null;
var count__19019_19419 = (0);
var i__19020_19420 = (0);
while(true){
if((i__19020_19420 < count__19019_19419)){
var f_19421 = chunk__19018_19418.cljs$core$IIndexed$_nth$arity$2(null,i__19020_19420);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19421], 0));


var G__19426 = seq__19017_19417;
var G__19427 = chunk__19018_19418;
var G__19428 = count__19019_19419;
var G__19429 = (i__19020_19420 + (1));
seq__19017_19417 = G__19426;
chunk__19018_19418 = G__19427;
count__19019_19419 = G__19428;
i__19020_19420 = G__19429;
continue;
} else {
var temp__5804__auto___19430 = cljs.core.seq(seq__19017_19417);
if(temp__5804__auto___19430){
var seq__19017_19431__$1 = temp__5804__auto___19430;
if(cljs.core.chunked_seq_QMARK_(seq__19017_19431__$1)){
var c__5568__auto___19433 = cljs.core.chunk_first(seq__19017_19431__$1);
var G__19434 = cljs.core.chunk_rest(seq__19017_19431__$1);
var G__19435 = c__5568__auto___19433;
var G__19436 = cljs.core.count(c__5568__auto___19433);
var G__19437 = (0);
seq__19017_19417 = G__19434;
chunk__19018_19418 = G__19435;
count__19019_19419 = G__19436;
i__19020_19420 = G__19437;
continue;
} else {
var f_19438 = cljs.core.first(seq__19017_19431__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19438], 0));


var G__19439 = cljs.core.next(seq__19017_19431__$1);
var G__19440 = null;
var G__19441 = (0);
var G__19442 = (0);
seq__19017_19417 = G__19439;
chunk__19018_19418 = G__19440;
count__19019_19419 = G__19441;
i__19020_19420 = G__19442;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19446 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19446], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19446)))?cljs.core.second(arglists_19446):arglists_19446)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19032_19451 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19033_19452 = null;
var count__19034_19453 = (0);
var i__19035_19454 = (0);
while(true){
if((i__19035_19454 < count__19034_19453)){
var vec__19080_19455 = chunk__19033_19452.cljs$core$IIndexed$_nth$arity$2(null,i__19035_19454);
var name_19456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080_19455,(0),null);
var map__19083_19457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080_19455,(1),null);
var map__19083_19458__$1 = cljs.core.__destructure_map(map__19083_19457);
var doc_19459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083_19458__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083_19458__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19456], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19460], 0));

if(cljs.core.truth_(doc_19459)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19459], 0));
} else {
}


var G__19464 = seq__19032_19451;
var G__19465 = chunk__19033_19452;
var G__19466 = count__19034_19453;
var G__19467 = (i__19035_19454 + (1));
seq__19032_19451 = G__19464;
chunk__19033_19452 = G__19465;
count__19034_19453 = G__19466;
i__19035_19454 = G__19467;
continue;
} else {
var temp__5804__auto___19468 = cljs.core.seq(seq__19032_19451);
if(temp__5804__auto___19468){
var seq__19032_19470__$1 = temp__5804__auto___19468;
if(cljs.core.chunked_seq_QMARK_(seq__19032_19470__$1)){
var c__5568__auto___19474 = cljs.core.chunk_first(seq__19032_19470__$1);
var G__19475 = cljs.core.chunk_rest(seq__19032_19470__$1);
var G__19476 = c__5568__auto___19474;
var G__19477 = cljs.core.count(c__5568__auto___19474);
var G__19478 = (0);
seq__19032_19451 = G__19475;
chunk__19033_19452 = G__19476;
count__19034_19453 = G__19477;
i__19035_19454 = G__19478;
continue;
} else {
var vec__19134_19480 = cljs.core.first(seq__19032_19470__$1);
var name_19481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19134_19480,(0),null);
var map__19137_19482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19134_19480,(1),null);
var map__19137_19483__$1 = cljs.core.__destructure_map(map__19137_19482);
var doc_19484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137_19483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137_19483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19481], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19485], 0));

if(cljs.core.truth_(doc_19484)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19484], 0));
} else {
}


var G__19491 = cljs.core.next(seq__19032_19470__$1);
var G__19492 = null;
var G__19493 = (0);
var G__19494 = (0);
seq__19032_19451 = G__19491;
chunk__19033_19452 = G__19492;
count__19034_19453 = G__19493;
i__19035_19454 = G__19494;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19169 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19170 = null;
var count__19171 = (0);
var i__19172 = (0);
while(true){
if((i__19172 < count__19171)){
var role = chunk__19170.cljs$core$IIndexed$_nth$arity$2(null,i__19172);
var temp__5804__auto___19495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19495__$1)){
var spec_19499 = temp__5804__auto___19495__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19499)], 0));
} else {
}


var G__19500 = seq__19169;
var G__19501 = chunk__19170;
var G__19502 = count__19171;
var G__19503 = (i__19172 + (1));
seq__19169 = G__19500;
chunk__19170 = G__19501;
count__19171 = G__19502;
i__19172 = G__19503;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19169);
if(temp__5804__auto____$1){
var seq__19169__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19169__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19169__$1);
var G__19505 = cljs.core.chunk_rest(seq__19169__$1);
var G__19506 = c__5568__auto__;
var G__19507 = cljs.core.count(c__5568__auto__);
var G__19508 = (0);
seq__19169 = G__19505;
chunk__19170 = G__19506;
count__19171 = G__19507;
i__19172 = G__19508;
continue;
} else {
var role = cljs.core.first(seq__19169__$1);
var temp__5804__auto___19509__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19509__$2)){
var spec_19510 = temp__5804__auto___19509__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19510)], 0));
} else {
}


var G__19511 = cljs.core.next(seq__19169__$1);
var G__19512 = null;
var G__19513 = (0);
var G__19514 = (0);
seq__19169 = G__19511;
chunk__19170 = G__19512;
count__19171 = G__19513;
i__19172 = G__19514;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19518 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19519 = cljs.core.ex_cause(t);
via = G__19518;
t = G__19519;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19268 = datafied_throwable;
var map__19268__$1 = cljs.core.__destructure_map(map__19268);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19268__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19268__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19268__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19269 = cljs.core.last(via);
var map__19269__$1 = cljs.core.__destructure_map(map__19269);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19270 = data;
var map__19270__$1 = cljs.core.__destructure_map(map__19270);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19270__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19270__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19270__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19271 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19271__$1 = cljs.core.__destructure_map(map__19271);
var top_data = map__19271__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19271__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19281 = phase;
var G__19281__$1 = (((G__19281 instanceof cljs.core.Keyword))?G__19281.fqn:null);
switch (G__19281__$1) {
case "read-source":
var map__19286 = data;
var map__19286__$1 = cljs.core.__destructure_map(map__19286);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19286__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19290 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19290__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19290,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19290);
var G__19290__$2 = (cljs.core.truth_((function (){var fexpr__19292 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19292.cljs$core$IFn$_invoke$arity$1 ? fexpr__19292.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19292.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19290__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19290__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19290__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19295 = top_data;
var G__19295__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19295);
var G__19295__$2 = (cljs.core.truth_((function (){var fexpr__19296 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19296.cljs$core$IFn$_invoke$arity$1 ? fexpr__19296.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19296.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19295__$1);
var G__19295__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19295__$2);
var G__19295__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19295__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19295__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19295__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19302 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(3),null);
var G__19306 = top_data;
var G__19306__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19306);
var G__19306__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19306__$1);
var G__19306__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19306__$2);
var G__19306__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19306__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19306__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19306__$4;
}

break;
case "execution":
var vec__19314 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19314,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19314,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19314,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19314,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19261_SHARP_){
var or__5045__auto__ = (p1__19261_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19321 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19321.cljs$core$IFn$_invoke$arity$1 ? fexpr__19321.cljs$core$IFn$_invoke$arity$1(p1__19261_SHARP_) : fexpr__19321.call(null,p1__19261_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19327 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19327__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19327,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19327);
var G__19327__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19327__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19327__$1);
var G__19327__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19327__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19327__$2);
var G__19327__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19327__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19327__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19327__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19327__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19281__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19348){
var map__19351 = p__19348;
var map__19351__$1 = cljs.core.__destructure_map(map__19351);
var triage_data = map__19351__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19360 = phase;
var G__19360__$1 = (((G__19360 instanceof cljs.core.Keyword))?G__19360.fqn:null);
switch (G__19360__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19361 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19362 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19363 = loc;
var G__19364 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19368_19557 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19369_19558 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19370_19559 = true;
var _STAR_print_fn_STAR__temp_val__19371_19560 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19370_19559);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19371_19560);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19341_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19341_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19369_19558);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19368_19557);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19361,G__19362,G__19363,G__19364) : format.call(null,G__19361,G__19362,G__19363,G__19364));

break;
case "macroexpansion":
var G__19376 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19377 = cause_type;
var G__19378 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19379 = loc;
var G__19380 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19376,G__19377,G__19378,G__19379,G__19380) : format.call(null,G__19376,G__19377,G__19378,G__19379,G__19380));

break;
case "compile-syntax-check":
var G__19383 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19384 = cause_type;
var G__19385 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19386 = loc;
var G__19387 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19383,G__19384,G__19385,G__19386,G__19387) : format.call(null,G__19383,G__19384,G__19385,G__19386,G__19387));

break;
case "compilation":
var G__19388 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19389 = cause_type;
var G__19390 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19391 = loc;
var G__19392 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19388,G__19389,G__19390,G__19391,G__19392) : format.call(null,G__19388,G__19389,G__19390,G__19391,G__19392));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19393 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19394 = symbol;
var G__19395 = loc;
var G__19396 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19397_19564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19398_19565 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19399_19566 = true;
var _STAR_print_fn_STAR__temp_val__19400_19567 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19399_19566);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19400_19567);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19345_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19345_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19398_19565);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19397_19564);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19393,G__19394,G__19395,G__19396) : format.call(null,G__19393,G__19394,G__19395,G__19396));
} else {
var G__19401 = "Execution error%s at %s(%s).\n%s\n";
var G__19402 = cause_type;
var G__19403 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19404 = loc;
var G__19405 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19401,G__19402,G__19403,G__19404,G__19405) : format.call(null,G__19401,G__19402,G__19403,G__19404,G__19405));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19360__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
