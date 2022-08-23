goog.provide('stylo.rule');
if((typeof stylo !== 'undefined') && (typeof stylo.rule !== 'undefined') && (typeof stylo.rule.rule !== 'undefined')){
} else {
stylo.rule.rule = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41057 = cljs.core.get_global_hierarchy;
return (fexpr__41057.cljs$core$IFn$_invoke$arity$0 ? fexpr__41057.cljs$core$IFn$_invoke$arity$0() : fexpr__41057.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("stylo.rule","rule"),(function() { 
var G__41229__delegate = function (k,_){
return k;
};
var G__41229 = function (k,var_args){
var _ = null;
if (arguments.length > 1) {
var G__41231__i = 0, G__41231__a = new Array(arguments.length -  1);
while (G__41231__i < G__41231__a.length) {G__41231__a[G__41231__i] = arguments[G__41231__i + 1]; ++G__41231__i;}
  _ = new cljs.core.IndexedSeq(G__41231__a,0,null);
} 
return G__41229__delegate.call(this,k,_);};
G__41229.cljs$lang$maxFixedArity = 1;
G__41229.cljs$lang$applyTo = (function (arglist__41232){
var k = cljs.core.first(arglist__41232);
var _ = cljs.core.rest(arglist__41232);
return G__41229__delegate(k,_);
});
G__41229.cljs$core$IFn$_invoke$arity$variadic = G__41229__delegate;
return G__41229;
})()
,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),(function() { 
var G__41233__delegate = function (k,types){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([types], 0))])], null)], null);
};
var G__41233 = function (k,var_args){
var types = null;
if (arguments.length > 1) {
var G__41234__i = 0, G__41234__a = new Array(arguments.length -  1);
while (G__41234__i < G__41234__a.length) {G__41234__a[G__41234__i] = arguments[G__41234__i + 1]; ++G__41234__i;}
  types = new cljs.core.IndexedSeq(G__41234__a,0,null);
} 
return G__41233__delegate.call(this,k,types);};
G__41233.cljs$lang$maxFixedArity = 1;
G__41233.cljs$lang$applyTo = (function (arglist__41236){
var k = cljs.core.first(arglist__41236);
var types = cljs.core.rest(arglist__41236);
return G__41233__delegate(k,types);
});
G__41233.cljs$core$IFn$_invoke$arity$variadic = G__41233__delegate;
return G__41233;
})()
);
stylo.rule.defrules = (function stylo$rule$defrules(var_args){
var G__41061 = arguments.length;
switch (G__41061) {
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
var seq__41071 = cljs.core.seq(rules);
var chunk__41072 = null;
var count__41073 = (0);
var i__41074 = (0);
while(true){
if((i__41074 < count__41073)){
var vec__41109 = chunk__41072.cljs$core$IIndexed$_nth$arity$2(null,i__41074);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41109,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41071,chunk__41072,count__41073,i__41074,vec__41109,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__41071,chunk__41072,count__41073,i__41074,vec__41109,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41071,chunk__41072,count__41073,i__41074,vec__41109,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41071,chunk__41072,count__41073,i__41074,vec__41109,k,v))
);
}


var G__41257 = seq__41071;
var G__41258 = chunk__41072;
var G__41259 = count__41073;
var G__41260 = (i__41074 + (1));
seq__41071 = G__41257;
chunk__41072 = G__41258;
count__41073 = G__41259;
i__41074 = G__41260;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41071);
if(temp__5804__auto__){
var seq__41071__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41071__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41071__$1);
var G__41261 = cljs.core.chunk_rest(seq__41071__$1);
var G__41262 = c__5568__auto__;
var G__41263 = cljs.core.count(c__5568__auto__);
var G__41264 = (0);
seq__41071 = G__41261;
chunk__41072 = G__41262;
count__41073 = G__41263;
i__41074 = G__41264;
continue;
} else {
var vec__41118 = cljs.core.first(seq__41071__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41118,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41071,chunk__41072,count__41073,i__41074,vec__41118,k,v,seq__41071__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),v], null)], null);
});})(seq__41071,chunk__41072,count__41073,i__41074,vec__41118,k,v,seq__41071__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41071,chunk__41072,count__41073,i__41074,vec__41118,k,v,seq__41071__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41071,chunk__41072,count__41073,i__41074,vec__41118,k,v,seq__41071__$1,temp__5804__auto__))
);
}


var G__41266 = cljs.core.next(seq__41071__$1);
var G__41267 = null;
var G__41268 = (0);
var G__41269 = (0);
seq__41071 = G__41266;
chunk__41072 = G__41267;
count__41073 = G__41268;
i__41074 = G__41269;
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
var seq__41136 = cljs.core.seq(rules);
var chunk__41137 = null;
var count__41138 = (0);
var i__41139 = (0);
while(true){
if((i__41139 < count__41138)){
var vec__41170 = chunk__41137.cljs$core$IIndexed$_nth$arity$2(null,i__41139);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41170,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41136,chunk__41137,count__41138,i__41139,vec__41170,k,v){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__41136,chunk__41137,count__41138,i__41139,vec__41170,k,v))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41136,chunk__41137,count__41138,i__41139,vec__41170,k,v){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41136,chunk__41137,count__41138,i__41139,vec__41170,k,v))
);
}


var G__41284 = seq__41136;
var G__41285 = chunk__41137;
var G__41286 = count__41138;
var G__41287 = (i__41139 + (1));
seq__41136 = G__41284;
chunk__41137 = G__41285;
count__41138 = G__41286;
i__41139 = G__41287;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41136);
if(temp__5804__auto__){
var seq__41136__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41136__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41136__$1);
var G__41288 = cljs.core.chunk_rest(seq__41136__$1);
var G__41289 = c__5568__auto__;
var G__41290 = cljs.core.count(c__5568__auto__);
var G__41291 = (0);
seq__41136 = G__41288;
chunk__41137 = G__41289;
count__41138 = G__41290;
i__41139 = G__41291;
continue;
} else {
var vec__41188 = cljs.core.first(seq__41136__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41188,(1),null);
if(cljs.core.associative_QMARK_(v)){
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41136,chunk__41137,count__41138,i__41139,vec__41188,k,v,seq__41136__$1,temp__5804__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),v], null)], null);
});})(seq__41136,chunk__41137,count__41138,i__41139,vec__41188,k,v,seq__41136__$1,temp__5804__auto__))
);
} else {
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__41136,chunk__41137,count__41138,i__41139,vec__41188,k,v,seq__41136__$1,temp__5804__auto__){
return (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":&:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pseudo_element_key)].join(''),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(x) : v.call(null,x))], null)], null);
});})(seq__41136,chunk__41137,count__41138,i__41139,vec__41188,k,v,seq__41136__$1,temp__5804__auto__))
);
}


var G__41301 = cljs.core.next(seq__41136__$1);
var G__41302 = null;
var G__41303 = (0);
var G__41304 = (0);
seq__41136 = G__41301;
chunk__41137 = G__41302;
count__41138 = G__41303;
i__41139 = G__41304;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__41199){
var vec__41200 = p__41199;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41200,(0),null);
var exps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41200,(1),null);
var style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,exps__$1));
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41194_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__41194_SHARP_);
}),exps__$1));
var G__41204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null);
var G__41204__$1 = ((cljs.core.seq(style))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41204,style):G__41204);
if(cljs.core.seq(children)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__41204__$1,children);
} else {
return G__41204__$1;
}
}),cljs.core.group_by(cljs.core.first,exps));
});
stylo.rule.join_rules = (function stylo$rule$join_rules(rules){
return stylo.rule.merge_by_selector(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__41205_SHARP_){
if(((cljs.core.sequential_QMARK_(p1__41205_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,p1__41205_SHARP_)))){
return p1__41205_SHARP_;
} else {
if(cljs.core.sequential_QMARK_(p1__41205_SHARP_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(stylo.rule.rule,p1__41205_SHARP_);
} else {
if(cljs.core.map_QMARK_(p1__41205_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),p1__41205_SHARP_], null)], null);
} else {
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$1(p1__41205_SHARP_);

}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0)));
});

//# sourceMappingURL=stylo.rule.js.map
