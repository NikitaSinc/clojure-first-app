goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36974){
var map__36975 = p__36974;
var map__36975__$1 = cljs.core.__destructure_map(map__36975);
var m = map__36975__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36975__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36975__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36982_37310 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36983_37311 = null;
var count__36984_37312 = (0);
var i__36985_37313 = (0);
while(true){
if((i__36985_37313 < count__36984_37312)){
var f_37314 = chunk__36983_37311.cljs$core$IIndexed$_nth$arity$2(null,i__36985_37313);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37314], 0));


var G__37315 = seq__36982_37310;
var G__37316 = chunk__36983_37311;
var G__37317 = count__36984_37312;
var G__37318 = (i__36985_37313 + (1));
seq__36982_37310 = G__37315;
chunk__36983_37311 = G__37316;
count__36984_37312 = G__37317;
i__36985_37313 = G__37318;
continue;
} else {
var temp__5804__auto___37319 = cljs.core.seq(seq__36982_37310);
if(temp__5804__auto___37319){
var seq__36982_37320__$1 = temp__5804__auto___37319;
if(cljs.core.chunked_seq_QMARK_(seq__36982_37320__$1)){
var c__5568__auto___37321 = cljs.core.chunk_first(seq__36982_37320__$1);
var G__37322 = cljs.core.chunk_rest(seq__36982_37320__$1);
var G__37323 = c__5568__auto___37321;
var G__37324 = cljs.core.count(c__5568__auto___37321);
var G__37325 = (0);
seq__36982_37310 = G__37322;
chunk__36983_37311 = G__37323;
count__36984_37312 = G__37324;
i__36985_37313 = G__37325;
continue;
} else {
var f_37326 = cljs.core.first(seq__36982_37320__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37326], 0));


var G__37327 = cljs.core.next(seq__36982_37320__$1);
var G__37328 = null;
var G__37329 = (0);
var G__37330 = (0);
seq__36982_37310 = G__37327;
chunk__36983_37311 = G__37328;
count__36984_37312 = G__37329;
i__36985_37313 = G__37330;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37331 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37331], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37331)))?cljs.core.second(arglists_37331):arglists_37331)], 0));
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
var seq__37006_37338 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37007_37339 = null;
var count__37008_37340 = (0);
var i__37009_37341 = (0);
while(true){
if((i__37009_37341 < count__37008_37340)){
var vec__37037_37342 = chunk__37007_37339.cljs$core$IIndexed$_nth$arity$2(null,i__37009_37341);
var name_37343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037_37342,(0),null);
var map__37040_37344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037_37342,(1),null);
var map__37040_37345__$1 = cljs.core.__destructure_map(map__37040_37344);
var doc_37346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37040_37345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37040_37345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37343], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37347], 0));

if(cljs.core.truth_(doc_37346)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37346], 0));
} else {
}


var G__37349 = seq__37006_37338;
var G__37350 = chunk__37007_37339;
var G__37351 = count__37008_37340;
var G__37352 = (i__37009_37341 + (1));
seq__37006_37338 = G__37349;
chunk__37007_37339 = G__37350;
count__37008_37340 = G__37351;
i__37009_37341 = G__37352;
continue;
} else {
var temp__5804__auto___37353 = cljs.core.seq(seq__37006_37338);
if(temp__5804__auto___37353){
var seq__37006_37354__$1 = temp__5804__auto___37353;
if(cljs.core.chunked_seq_QMARK_(seq__37006_37354__$1)){
var c__5568__auto___37355 = cljs.core.chunk_first(seq__37006_37354__$1);
var G__37356 = cljs.core.chunk_rest(seq__37006_37354__$1);
var G__37357 = c__5568__auto___37355;
var G__37358 = cljs.core.count(c__5568__auto___37355);
var G__37359 = (0);
seq__37006_37338 = G__37356;
chunk__37007_37339 = G__37357;
count__37008_37340 = G__37358;
i__37009_37341 = G__37359;
continue;
} else {
var vec__37045_37360 = cljs.core.first(seq__37006_37354__$1);
var name_37361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045_37360,(0),null);
var map__37048_37362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045_37360,(1),null);
var map__37048_37363__$1 = cljs.core.__destructure_map(map__37048_37362);
var doc_37364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048_37363__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048_37363__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37361], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37365], 0));

if(cljs.core.truth_(doc_37364)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37364], 0));
} else {
}


var G__37367 = cljs.core.next(seq__37006_37354__$1);
var G__37368 = null;
var G__37369 = (0);
var G__37370 = (0);
seq__37006_37338 = G__37367;
chunk__37007_37339 = G__37368;
count__37008_37340 = G__37369;
i__37009_37341 = G__37370;
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

var seq__37057 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37058 = null;
var count__37059 = (0);
var i__37060 = (0);
while(true){
if((i__37060 < count__37059)){
var role = chunk__37058.cljs$core$IIndexed$_nth$arity$2(null,i__37060);
var temp__5804__auto___37371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37371__$1)){
var spec_37372 = temp__5804__auto___37371__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37372)], 0));
} else {
}


var G__37373 = seq__37057;
var G__37374 = chunk__37058;
var G__37375 = count__37059;
var G__37376 = (i__37060 + (1));
seq__37057 = G__37373;
chunk__37058 = G__37374;
count__37059 = G__37375;
i__37060 = G__37376;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__37057);
if(temp__5804__auto____$1){
var seq__37057__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37057__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37057__$1);
var G__37377 = cljs.core.chunk_rest(seq__37057__$1);
var G__37378 = c__5568__auto__;
var G__37379 = cljs.core.count(c__5568__auto__);
var G__37380 = (0);
seq__37057 = G__37377;
chunk__37058 = G__37378;
count__37059 = G__37379;
i__37060 = G__37380;
continue;
} else {
var role = cljs.core.first(seq__37057__$1);
var temp__5804__auto___37381__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37381__$2)){
var spec_37382 = temp__5804__auto___37381__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37382)], 0));
} else {
}


var G__37384 = cljs.core.next(seq__37057__$1);
var G__37385 = null;
var G__37386 = (0);
var G__37387 = (0);
seq__37057 = G__37384;
chunk__37058 = G__37385;
count__37059 = G__37386;
i__37060 = G__37387;
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
var G__37391 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37392 = cljs.core.ex_cause(t);
via = G__37391;
t = G__37392;
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
var map__37182 = datafied_throwable;
var map__37182__$1 = cljs.core.__destructure_map(map__37182);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37182__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37183 = cljs.core.last(via);
var map__37183__$1 = cljs.core.__destructure_map(map__37183);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37183__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37183__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37184 = data;
var map__37184__$1 = cljs.core.__destructure_map(map__37184);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37184__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37185 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37185__$1 = cljs.core.__destructure_map(map__37185);
var top_data = map__37185__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37196 = phase;
var G__37196__$1 = (((G__37196 instanceof cljs.core.Keyword))?G__37196.fqn:null);
switch (G__37196__$1) {
case "read-source":
var map__37204 = data;
var map__37204__$1 = cljs.core.__destructure_map(map__37204);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37212 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37212__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37212,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37212);
var G__37212__$2 = (cljs.core.truth_((function (){var fexpr__37217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37217.cljs$core$IFn$_invoke$arity$1 ? fexpr__37217.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37217.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37212__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37212__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37212__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37212__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37222 = top_data;
var G__37222__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37222,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37222);
var G__37222__$2 = (cljs.core.truth_((function (){var fexpr__37227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37227.cljs$core$IFn$_invoke$arity$1 ? fexpr__37227.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37227.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37222__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37222__$1);
var G__37222__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37222__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37222__$2);
var G__37222__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37222__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37222__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37222__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37222__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37228 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(3),null);
var G__37235 = top_data;
var G__37235__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37235,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37235);
var G__37235__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37235__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37235__$1);
var G__37235__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37235__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37235__$2);
var G__37235__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37235__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37235__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37235__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37235__$4;
}

break;
case "execution":
var vec__37238 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37162_SHARP_){
var or__5045__auto__ = (p1__37162_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__37241 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37241.cljs$core$IFn$_invoke$arity$1 ? fexpr__37241.cljs$core$IFn$_invoke$arity$1(p1__37162_SHARP_) : fexpr__37241.call(null,p1__37162_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__37242 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37242__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37242,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37242);
var G__37242__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37242__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37242__$1);
var G__37242__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37242__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37242__$2);
var G__37242__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37242__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37242__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37242__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37242__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37196__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37254){
var map__37255 = p__37254;
var map__37255__$1 = cljs.core.__destructure_map(map__37255);
var triage_data = map__37255__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__37261 = phase;
var G__37261__$1 = (((G__37261 instanceof cljs.core.Keyword))?G__37261.fqn:null);
switch (G__37261__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37262 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37263 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37264 = loc;
var G__37265 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37266_37415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37267_37416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37268_37417 = true;
var _STAR_print_fn_STAR__temp_val__37269_37418 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37268_37417);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37269_37418);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37250_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37250_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37267_37416);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37266_37415);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37262,G__37263,G__37264,G__37265) : format.call(null,G__37262,G__37263,G__37264,G__37265));

break;
case "macroexpansion":
var G__37270 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37271 = cause_type;
var G__37272 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37273 = loc;
var G__37274 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37270,G__37271,G__37272,G__37273,G__37274) : format.call(null,G__37270,G__37271,G__37272,G__37273,G__37274));

break;
case "compile-syntax-check":
var G__37275 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37276 = cause_type;
var G__37277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37278 = loc;
var G__37279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37275,G__37276,G__37277,G__37278,G__37279) : format.call(null,G__37275,G__37276,G__37277,G__37278,G__37279));

break;
case "compilation":
var G__37280 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37281 = cause_type;
var G__37282 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37283 = loc;
var G__37284 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37280,G__37281,G__37282,G__37283,G__37284) : format.call(null,G__37280,G__37281,G__37282,G__37283,G__37284));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37285 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37286 = symbol;
var G__37287 = loc;
var G__37288 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37293_37419 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37294_37420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37295_37421 = true;
var _STAR_print_fn_STAR__temp_val__37296_37422 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37295_37421);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37296_37422);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37253_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37253_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37294_37420);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37293_37419);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37285,G__37286,G__37287,G__37288) : format.call(null,G__37285,G__37286,G__37287,G__37288));
} else {
var G__37301 = "Execution error%s at %s(%s).\n%s\n";
var G__37302 = cause_type;
var G__37303 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37304 = loc;
var G__37305 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37301,G__37302,G__37303,G__37304,G__37305) : format.call(null,G__37301,G__37302,G__37303,G__37304,G__37305));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37261__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
