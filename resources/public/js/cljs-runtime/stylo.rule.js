goog.provide('stylo.rule');
if((typeof stylo !== 'undefined') && (typeof stylo.rule !== 'undefined') && (typeof stylo.rule.rule !== 'undefined')){
} else {
stylo.rule.rule = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41260 = cljs.core.get_global_hierarchy;
return (fexpr__41260.cljs$core$IFn$_invoke$arity$0 ? fexpr__41260.cljs$core$IFn$_invoke$arity$0() : fexpr__41260.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("stylo.rule","rule"),(function() { 
var G__41364__delegate = function (k,_){
return k;
};
var G__41364 = function (k,var_args){
var _ = null;
if (arguments.length > 1) {
var G__41365__i = 0, G__41365__a = new Array(arguments.length -  1);
while (G__41365__i < G__41365__a.length) {G__41365__a[G__41365__i] = arguments[G__41365__i + 1]; ++G__41365__i;}
  _ = new cljs.core.IndexedSeq(G__41365__a,0,null);
} 
return G__41364__delegate.call(this,k,_);};
G__41364.cljs$lang$maxFixedArity = 1;
G__41364.cljs$lang$applyTo = (function (arglist__41366){
var k = cljs.core.first(arglist__41366);
var _ = cljs.core.rest(arglist__41366);
return G__41364__delegate(k,_);
});
G__41364.cljs$core$IFn$_invoke$arity$variadic = G__41364__delegate;
return G__41364;
})()
,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),(function() { 
var G__41367__delegate = function (k,types){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([types], 0))])], null)], null);
};
var G__41367 = function (k,var_args){
var types = null;
if (arguments.length > 1) {
var G__41369__i = 0, G__41369__a = new Array(arguments.length -  1);
while (G__41369__i < G__41369__a.length) {G__41369__a[G__41369__i] = arguments[G__41369__i + 1]; ++G__41369__i;}
  types = new cljs.core.IndexedSeq(G__41369__a,0,null);
} 
return G__41367__delegate.call(this,k,types);};
G__41367.cljs$lang$maxFixedArity = 1;
G__41367.cljs$lang$applyTo = (function (arglist__41370){
var k = cljs.core.first(arglist__41370);
var types = cljs.core.rest(arglist__41370);
return G__41367__delegate(k,types);
});
G__41367.cljs$core$IFn$_invoke$arity$variadic = G__41367__delegate;
return G__41367;
})()
);
stylo.rule.defrules = (function stylo$rule$defrules(var_args){
var G__41265 = arguments.length;
switch (G__41265) {
case 1:
return stylo.rule.defrules.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylo.rule.defrules.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.rule.defrules.cljs$core$IFn$_invoke$arity$1 = (function (rules){
var seq__41267 = cljs.core.seq(rules);
var chunk__41268 = null;
var count__41269 = (0);
var i__41270 = (0);
while(true){
if((i__41270 < count__41269)){
var vec__41284 = chunk__41268.cljs$core$IIndexed$_nth$arity$2(null,i__41270);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41284,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41267,chunk__41268,count__41269,i__41270,vec__41284,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__41267,chunk__41268,count__41269,i__41270,vec__41284,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41267,chunk__41268,count__41269,i__41270,vec__41284,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41267,chunk__41268,count__41269,i__41270,vec__41284,k,v))
);
}


var G__41375 = seq__41267;
var G__41376 = chunk__41268;
var G__41377 = count__41269;
var G__41378 = (i__41270 + (1));
seq__41267 = G__41375;
chunk__41268 = G__41376;
count__41269 = G__41377;
i__41270 = G__41378;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41267);
if(temp__5804__auto__){
var seq__41267__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41267__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41267__$1);
var G__41379 = cljs.core.chunk_rest(seq__41267__$1);
var G__41380 = c__5568__auto__;
var G__41381 = cljs.core.count(c__5568__auto__);
var G__41382 = (0);
seq__41267 = G__41379;
chunk__41268 = G__41380;
count__41269 = G__41381;
i__41270 = G__41382;
continue;
} else {
var vec__41289 = cljs.core.first(seq__41267__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41267,chunk__41268,count__41269,i__41270,vec__41289,k,v,seq__41267__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__41267,chunk__41268,count__41269,i__41270,vec__41289,k,v,seq__41267__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41267,chunk__41268,count__41269,i__41270,vec__41289,k,v,seq__41267__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41267,chunk__41268,count__41269,i__41270,vec__41289,k,v,seq__41267__$1,temp__5804__auto__))
);
}


var G__41389 = cljs.core.next(seq__41267__$1);
var G__41390 = null;
var G__41391 = (0);
var G__41392 = (0);
seq__41267 = G__41389;
chunk__41268 = G__41390;
count__41269 = G__41391;
i__41270 = G__41392;
continue;
}
} else {
return null;
}
}
break;
}
}));

(stylo.rule.defrules.cljs$core$IFn$_invoke$arity$2 = (function (rules,pseudo_element_key){
var seq__41293 = cljs.core.seq(rules);
var chunk__41294 = null;
var count__41295 = (0);
var i__41296 = (0);
while(true){
if((i__41296 < count__41295)){
var vec__41311 = chunk__41294.cljs$core$IIndexed$_nth$arity$2(null,i__41296);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41311,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41293,chunk__41294,count__41295,i__41296,vec__41311,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__41293,chunk__41294,count__41295,i__41296,vec__41311,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41293,chunk__41294,count__41295,i__41296,vec__41311,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41293,chunk__41294,count__41295,i__41296,vec__41311,k,v))
);
}


var G__41399 = seq__41293;
var G__41400 = chunk__41294;
var G__41401 = count__41295;
var G__41402 = (i__41296 + (1));
seq__41293 = G__41399;
chunk__41294 = G__41400;
count__41295 = G__41401;
i__41296 = G__41402;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41293);
if(temp__5804__auto__){
var seq__41293__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41293__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41293__$1);
var G__41403 = cljs.core.chunk_rest(seq__41293__$1);
var G__41404 = c__5568__auto__;
var G__41405 = cljs.core.count(c__5568__auto__);
var G__41406 = (0);
seq__41293 = G__41403;
chunk__41294 = G__41404;
count__41295 = G__41405;
i__41296 = G__41406;
continue;
} else {
var vec__41319 = cljs.core.first(seq__41293__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41293,chunk__41294,count__41295,i__41296,vec__41319,k,v,seq__41293__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__41293,chunk__41294,count__41295,i__41296,vec__41319,k,v,seq__41293__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41293,chunk__41294,count__41295,i__41296,vec__41319,k,v,seq__41293__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41293,chunk__41294,count__41295,i__41296,vec__41319,k,v,seq__41293__$1,temp__5804__auto__))
);
}


var G__41409 = cljs.core.next(seq__41293__$1);
var G__41410 = null;
var G__41411 = (0);
var G__41412 = (0);
seq__41293 = G__41409;
chunk__41294 = G__41410;
count__41295 = G__41411;
i__41296 = G__41412;
continue;
}
} else {
return null;
}
}
break;
}
}));

(stylo.rule.defrules.cljs$lang$maxFixedArity = 2);

stylo.rule.merge_by_selector = (function stylo$rule$merge_by_selector(exps){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__41335){
var vec__41339 = p__41335;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(0),null);
var exps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41339,(1),null);
var style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,exps__$1));
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41333_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__41333_SHARP_);
}),exps__$1));
var G__41351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null);
var G__41351__$1 = ((cljs.core.seq(style))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41351,style):G__41351);
if(cljs.core.seq(children)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__41351__$1,children);
} else {
return G__41351__$1;
}
}),cljs.core.group_by(cljs.core.first,exps));
});
stylo.rule.join_rules = (function stylo$rule$join_rules(rules){
return stylo.rule.merge_by_selector(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__41353_SHARP_){
if(((cljs.core.sequential_QMARK_(p1__41353_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,p1__41353_SHARP_)))){
return p1__41353_SHARP_;
} else {
if(cljs.core.sequential_QMARK_(p1__41353_SHARP_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(stylo.rule.rule,p1__41353_SHARP_);
} else {
if(cljs.core.map_QMARK_(p1__41353_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),p1__41353_SHARP_], null)], null);
} else {
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$1(p1__41353_SHARP_);

}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0)));
});

//# sourceMappingURL=stylo.rule.js.map
