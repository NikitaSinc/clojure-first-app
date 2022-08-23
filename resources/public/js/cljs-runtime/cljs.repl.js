goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37133){
var map__37134 = p__37133;
var map__37134__$1 = cljs.core.__destructure_map(map__37134);
var m = map__37134__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37138_37406 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37139_37407 = null;
var count__37140_37408 = (0);
var i__37141_37409 = (0);
while(true){
if((i__37141_37409 < count__37140_37408)){
var f_37410 = chunk__37139_37407.cljs$core$IIndexed$_nth$arity$2(null,i__37141_37409);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37410], 0));


var G__37411 = seq__37138_37406;
var G__37412 = chunk__37139_37407;
var G__37413 = count__37140_37408;
var G__37414 = (i__37141_37409 + (1));
seq__37138_37406 = G__37411;
chunk__37139_37407 = G__37412;
count__37140_37408 = G__37413;
i__37141_37409 = G__37414;
continue;
} else {
var temp__5804__auto___37415 = cljs.core.seq(seq__37138_37406);
if(temp__5804__auto___37415){
var seq__37138_37416__$1 = temp__5804__auto___37415;
if(cljs.core.chunked_seq_QMARK_(seq__37138_37416__$1)){
var c__5568__auto___37417 = cljs.core.chunk_first(seq__37138_37416__$1);
var G__37418 = cljs.core.chunk_rest(seq__37138_37416__$1);
var G__37419 = c__5568__auto___37417;
var G__37420 = cljs.core.count(c__5568__auto___37417);
var G__37421 = (0);
seq__37138_37406 = G__37418;
chunk__37139_37407 = G__37419;
count__37140_37408 = G__37420;
i__37141_37409 = G__37421;
continue;
} else {
var f_37422 = cljs.core.first(seq__37138_37416__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37422], 0));


var G__37423 = cljs.core.next(seq__37138_37416__$1);
var G__37424 = null;
var G__37425 = (0);
var G__37426 = (0);
seq__37138_37406 = G__37423;
chunk__37139_37407 = G__37424;
count__37140_37408 = G__37425;
i__37141_37409 = G__37426;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37427 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37427], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37427)))?cljs.core.second(arglists_37427):arglists_37427)], 0));
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
var seq__37155_37429 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37156_37430 = null;
var count__37157_37431 = (0);
var i__37158_37432 = (0);
while(true){
if((i__37158_37432 < count__37157_37431)){
var vec__37183_37433 = chunk__37156_37430.cljs$core$IIndexed$_nth$arity$2(null,i__37158_37432);
var name_37434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37183_37433,(0),null);
var map__37186_37435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37183_37433,(1),null);
var map__37186_37436__$1 = cljs.core.__destructure_map(map__37186_37435);
var doc_37437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186_37436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186_37436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37434], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37438], 0));

if(cljs.core.truth_(doc_37437)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37437], 0));
} else {
}


var G__37443 = seq__37155_37429;
var G__37444 = chunk__37156_37430;
var G__37445 = count__37157_37431;
var G__37446 = (i__37158_37432 + (1));
seq__37155_37429 = G__37443;
chunk__37156_37430 = G__37444;
count__37157_37431 = G__37445;
i__37158_37432 = G__37446;
continue;
} else {
var temp__5804__auto___37447 = cljs.core.seq(seq__37155_37429);
if(temp__5804__auto___37447){
var seq__37155_37448__$1 = temp__5804__auto___37447;
if(cljs.core.chunked_seq_QMARK_(seq__37155_37448__$1)){
var c__5568__auto___37449 = cljs.core.chunk_first(seq__37155_37448__$1);
var G__37450 = cljs.core.chunk_rest(seq__37155_37448__$1);
var G__37451 = c__5568__auto___37449;
var G__37452 = cljs.core.count(c__5568__auto___37449);
var G__37453 = (0);
seq__37155_37429 = G__37450;
chunk__37156_37430 = G__37451;
count__37157_37431 = G__37452;
i__37158_37432 = G__37453;
continue;
} else {
var vec__37190_37454 = cljs.core.first(seq__37155_37448__$1);
var name_37455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37190_37454,(0),null);
var map__37193_37456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37190_37454,(1),null);
var map__37193_37457__$1 = cljs.core.__destructure_map(map__37193_37456);
var doc_37458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193_37457__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193_37457__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37455], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37459], 0));

if(cljs.core.truth_(doc_37458)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37458], 0));
} else {
}


var G__37461 = cljs.core.next(seq__37155_37448__$1);
var G__37462 = null;
var G__37463 = (0);
var G__37464 = (0);
seq__37155_37429 = G__37461;
chunk__37156_37430 = G__37462;
count__37157_37431 = G__37463;
i__37158_37432 = G__37464;
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

var seq__37194 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37195 = null;
var count__37196 = (0);
var i__37197 = (0);
while(true){
if((i__37197 < count__37196)){
var role = chunk__37195.cljs$core$IIndexed$_nth$arity$2(null,i__37197);
var temp__5804__auto___37465__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37465__$1)){
var spec_37466 = temp__5804__auto___37465__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37466)], 0));
} else {
}


var G__37467 = seq__37194;
var G__37468 = chunk__37195;
var G__37469 = count__37196;
var G__37470 = (i__37197 + (1));
seq__37194 = G__37467;
chunk__37195 = G__37468;
count__37196 = G__37469;
i__37197 = G__37470;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__37194);
if(temp__5804__auto____$1){
var seq__37194__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37194__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37194__$1);
var G__37472 = cljs.core.chunk_rest(seq__37194__$1);
var G__37473 = c__5568__auto__;
var G__37474 = cljs.core.count(c__5568__auto__);
var G__37475 = (0);
seq__37194 = G__37472;
chunk__37195 = G__37473;
count__37196 = G__37474;
i__37197 = G__37475;
continue;
} else {
var role = cljs.core.first(seq__37194__$1);
var temp__5804__auto___37476__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37476__$2)){
var spec_37477 = temp__5804__auto___37476__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37477)], 0));
} else {
}


var G__37478 = cljs.core.next(seq__37194__$1);
var G__37479 = null;
var G__37480 = (0);
var G__37481 = (0);
seq__37194 = G__37478;
chunk__37195 = G__37479;
count__37196 = G__37480;
i__37197 = G__37481;
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
var G__37483 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37484 = cljs.core.ex_cause(t);
via = G__37483;
t = G__37484;
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
var map__37305 = datafied_throwable;
var map__37305__$1 = cljs.core.__destructure_map(map__37305);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37305__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37305__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37305__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37306 = cljs.core.last(via);
var map__37306__$1 = cljs.core.__destructure_map(map__37306);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37306__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37307 = data;
var map__37307__$1 = cljs.core.__destructure_map(map__37307);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37307__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37307__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37307__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37308 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37308__$1 = cljs.core.__destructure_map(map__37308);
var top_data = map__37308__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37319 = phase;
var G__37319__$1 = (((G__37319 instanceof cljs.core.Keyword))?G__37319.fqn:null);
switch (G__37319__$1) {
case "read-source":
var map__37321 = data;
var map__37321__$1 = cljs.core.__destructure_map(map__37321);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37321__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37321__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37322 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37322__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37322,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37322);
var G__37322__$2 = (cljs.core.truth_((function (){var fexpr__37324 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37324.cljs$core$IFn$_invoke$arity$1 ? fexpr__37324.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37324.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37322__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37322__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37322__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37322__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37325 = top_data;
var G__37325__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37325,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37325);
var G__37325__$2 = (cljs.core.truth_((function (){var fexpr__37326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37326.cljs$core$IFn$_invoke$arity$1 ? fexpr__37326.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37326.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37325__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37325__$1);
var G__37325__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37325__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37325__$2);
var G__37325__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37325__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37325__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37325__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37325__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37327 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(3),null);
var G__37331 = top_data;
var G__37331__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37331,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37331);
var G__37331__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37331__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37331__$1);
var G__37331__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37331__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37331__$2);
var G__37331__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37331__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37331__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37331__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37331__$4;
}

break;
case "execution":
var vec__37333 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37333,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37333,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37333,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37333,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37296_SHARP_){
var or__5045__auto__ = (p1__37296_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__37337 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37337.cljs$core$IFn$_invoke$arity$1 ? fexpr__37337.cljs$core$IFn$_invoke$arity$1(p1__37296_SHARP_) : fexpr__37337.call(null,p1__37296_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__37338 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37338__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37338,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37338);
var G__37338__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37338__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37338__$1);
var G__37338__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37338__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37338__$2);
var G__37338__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37338__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37338__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37338__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37338__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37319__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37344){
var map__37345 = p__37344;
var map__37345__$1 = cljs.core.__destructure_map(map__37345);
var triage_data = map__37345__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37345__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__37352 = phase;
var G__37352__$1 = (((G__37352 instanceof cljs.core.Keyword))?G__37352.fqn:null);
switch (G__37352__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37357 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37358 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37359 = loc;
var G__37360 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37361_37519 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37362_37520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37363_37521 = true;
var _STAR_print_fn_STAR__temp_val__37364_37522 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37363_37521);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37364_37522);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37342_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37342_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37362_37520);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37361_37519);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37357,G__37358,G__37359,G__37360) : format.call(null,G__37357,G__37358,G__37359,G__37360));

break;
case "macroexpansion":
var G__37365 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37366 = cause_type;
var G__37367 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37368 = loc;
var G__37369 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37365,G__37366,G__37367,G__37368,G__37369) : format.call(null,G__37365,G__37366,G__37367,G__37368,G__37369));

break;
case "compile-syntax-check":
var G__37370 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37371 = cause_type;
var G__37372 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37373 = loc;
var G__37374 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37370,G__37371,G__37372,G__37373,G__37374) : format.call(null,G__37370,G__37371,G__37372,G__37373,G__37374));

break;
case "compilation":
var G__37381 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37382 = cause_type;
var G__37383 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37384 = loc;
var G__37385 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37381,G__37382,G__37383,G__37384,G__37385) : format.call(null,G__37381,G__37382,G__37383,G__37384,G__37385));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37386 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37387 = symbol;
var G__37388 = loc;
var G__37389 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37390_37535 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37391_37537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37392_37540 = true;
var _STAR_print_fn_STAR__temp_val__37393_37542 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37392_37540);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37393_37542);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37343_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37343_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37391_37537);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37390_37535);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37386,G__37387,G__37388,G__37389) : format.call(null,G__37386,G__37387,G__37388,G__37389));
} else {
var G__37396 = "Execution error%s at %s(%s).\n%s\n";
var G__37397 = cause_type;
var G__37398 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37399 = loc;
var G__37400 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37396,G__37397,G__37398,G__37399,G__37400) : format.call(null,G__37396,G__37397,G__37398,G__37399,G__37400));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37352__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
