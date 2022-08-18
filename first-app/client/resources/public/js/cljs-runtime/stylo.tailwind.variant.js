goog.provide('stylo.tailwind.variant');
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),(function() { 
var G__41812__delegate = function (_,k,rules){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY], null),stylo.rule.join_rules(rules))], null);
};
var G__41812 = function (_,k,var_args){
var rules = null;
if (arguments.length > 2) {
var G__41813__i = 0, G__41813__a = new Array(arguments.length -  2);
while (G__41813__i < G__41813__a.length) {G__41813__a[G__41813__i] = arguments[G__41813__i + 2]; ++G__41813__i;}
  rules = new cljs.core.IndexedSeq(G__41813__a,0,null);
} 
return G__41812__delegate.call(this,_,k,rules);};
G__41812.cljs$lang$maxFixedArity = 2;
G__41812.cljs$lang$applyTo = (function (arglist__41814){
var _ = cljs.core.first(arglist__41814);
arglist__41814 = cljs.core.next(arglist__41814);
var k = cljs.core.first(arglist__41814);
var rules = cljs.core.rest(arglist__41814);
return G__41812__delegate(_,k,rules);
});
G__41812.cljs$core$IFn$_invoke$arity$variadic = G__41812__delegate;
return G__41812;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),(function() { 
var G__41815__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(odd)",rules);
};
var G__41815 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41816__i = 0, G__41816__a = new Array(arguments.length -  1);
while (G__41816__i < G__41816__a.length) {G__41816__a[G__41816__i] = arguments[G__41816__i + 1]; ++G__41816__i;}
  rules = new cljs.core.IndexedSeq(G__41816__a,0,null);
} 
return G__41815__delegate.call(this,_,rules);};
G__41815.cljs$lang$maxFixedArity = 1;
G__41815.cljs$lang$applyTo = (function (arglist__41817){
var _ = cljs.core.first(arglist__41817);
var rules = cljs.core.rest(arglist__41817);
return G__41815__delegate(_,rules);
});
G__41815.cljs$core$IFn$_invoke$arity$variadic = G__41815__delegate;
return G__41815;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"even","even",-275845692),(function() { 
var G__41818__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(even)",rules);
};
var G__41818 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41819__i = 0, G__41819__a = new Array(arguments.length -  1);
while (G__41819__i < G__41819__a.length) {G__41819__a[G__41819__i] = arguments[G__41819__i + 1]; ++G__41819__i;}
  rules = new cljs.core.IndexedSeq(G__41819__a,0,null);
} 
return G__41818__delegate.call(this,_,rules);};
G__41818.cljs$lang$maxFixedArity = 1;
G__41818.cljs$lang$applyTo = (function (arglist__41820){
var _ = cljs.core.first(arglist__41820);
var rules = cljs.core.rest(arglist__41820);
return G__41818__delegate(_,rules);
});
G__41818.cljs$core$IFn$_invoke$arity$variadic = G__41818__delegate;
return G__41818;
})()
);
stylo.tailwind.variant.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"any-link","any-link",-1005234634),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"defined","defined",-1805032318),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"first-child","first-child",2114099842),new cljs.core.Keyword(null,"first-of-type","first-of-type",-740219653),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"focus-visible","focus-visible",-135927717),new cljs.core.Keyword(null,"focus-within","focus-within",1637765153),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"in-range","in-range",1356571825),new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"last-child","last-child",1330670325),new cljs.core.Keyword(null,"last-of-type","last-of-type",-654078196),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"only-child","only-child",-1420502495),new cljs.core.Keyword(null,"only-of-type","only-of-type",693975143),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"out-of-range","out-of-range",692318589),new cljs.core.Keyword(null,"placeholder-shown","placeholder-shown",1752397014),new cljs.core.Keyword(null,"read-only","read-only",-191706886),new cljs.core.Keyword(null,"read-write","read-write",178022883),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"visited","visited",-1610853875)], true);
var seq__41776_41822 = cljs.core.seq(stylo.tailwind.variant.pseudo_classes);
var chunk__41777_41823 = null;
var count__41778_41824 = (0);
var i__41779_41825 = (0);
while(true){
if((i__41779_41825 < count__41778_41824)){
var c_41829 = chunk__41777_41823.cljs$core$IIndexed$_nth$arity$2(null,i__41779_41825);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_41829,((function (seq__41776_41822,chunk__41777_41823,count__41778_41824,i__41779_41825,c_41829){
return (function() { 
var G__41830__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41829),rules);
};
var G__41830 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41834__i = 0, G__41834__a = new Array(arguments.length -  1);
while (G__41834__i < G__41834__a.length) {G__41834__a[G__41834__i] = arguments[G__41834__i + 1]; ++G__41834__i;}
  rules = new cljs.core.IndexedSeq(G__41834__a,0,null);
} 
return G__41830__delegate.call(this,_,rules);};
G__41830.cljs$lang$maxFixedArity = 1;
G__41830.cljs$lang$applyTo = (function (arglist__41835){
var _ = cljs.core.first(arglist__41835);
var rules = cljs.core.rest(arglist__41835);
return G__41830__delegate(_,rules);
});
G__41830.cljs$core$IFn$_invoke$arity$variadic = G__41830__delegate;
return G__41830;
})()
;})(seq__41776_41822,chunk__41777_41823,count__41778_41824,i__41779_41825,c_41829))
);


var G__41836 = seq__41776_41822;
var G__41837 = chunk__41777_41823;
var G__41838 = count__41778_41824;
var G__41839 = (i__41779_41825 + (1));
seq__41776_41822 = G__41836;
chunk__41777_41823 = G__41837;
count__41778_41824 = G__41838;
i__41779_41825 = G__41839;
continue;
} else {
var temp__5804__auto___41840 = cljs.core.seq(seq__41776_41822);
if(temp__5804__auto___41840){
var seq__41776_41841__$1 = temp__5804__auto___41840;
if(cljs.core.chunked_seq_QMARK_(seq__41776_41841__$1)){
var c__5568__auto___41842 = cljs.core.chunk_first(seq__41776_41841__$1);
var G__41843 = cljs.core.chunk_rest(seq__41776_41841__$1);
var G__41844 = c__5568__auto___41842;
var G__41845 = cljs.core.count(c__5568__auto___41842);
var G__41846 = (0);
seq__41776_41822 = G__41843;
chunk__41777_41823 = G__41844;
count__41778_41824 = G__41845;
i__41779_41825 = G__41846;
continue;
} else {
var c_41847 = cljs.core.first(seq__41776_41841__$1);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_41847,((function (seq__41776_41822,chunk__41777_41823,count__41778_41824,i__41779_41825,c_41847,seq__41776_41841__$1,temp__5804__auto___41840){
return (function() { 
var G__41848__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41847),rules);
};
var G__41848 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41849__i = 0, G__41849__a = new Array(arguments.length -  1);
while (G__41849__i < G__41849__a.length) {G__41849__a[G__41849__i] = arguments[G__41849__i + 1]; ++G__41849__i;}
  rules = new cljs.core.IndexedSeq(G__41849__a,0,null);
} 
return G__41848__delegate.call(this,_,rules);};
G__41848.cljs$lang$maxFixedArity = 1;
G__41848.cljs$lang$applyTo = (function (arglist__41850){
var _ = cljs.core.first(arglist__41850);
var rules = cljs.core.rest(arglist__41850);
return G__41848__delegate(_,rules);
});
G__41848.cljs$core$IFn$_invoke$arity$variadic = G__41848__delegate;
return G__41848;
})()
;})(seq__41776_41822,chunk__41777_41823,count__41778_41824,i__41779_41825,c_41847,seq__41776_41841__$1,temp__5804__auto___41840))
);


var G__41851 = cljs.core.next(seq__41776_41841__$1);
var G__41852 = null;
var G__41853 = (0);
var G__41854 = (0);
seq__41776_41822 = G__41851;
chunk__41777_41823 = G__41852;
count__41778_41824 = G__41853;
i__41779_41825 = G__41854;
continue;
}
} else {
}
}
break;
}
stylo.tailwind.variant.pseudo_elements = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thumb","thumb",1718947232),new cljs.core.Keyword(null,"range-track","range-track",-1449711072),new cljs.core.Keyword(null,"first-line","first-line",285094849),new cljs.core.Keyword(null,"spelling-error","spelling-error",1665378434),new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"grammar-error","grammar-error",419933222),new cljs.core.Keyword(null,"reveal","reveal",-131374202),new cljs.core.Keyword(null,"range-progress","range-progress",-920777497),new cljs.core.Keyword(null,"check","check",1226308904),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"browse","browse",2070502601),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"slider-thumb","slider-thumb",155435340),new cljs.core.Keyword(null,"cue-region","cue-region",1087710702),new cljs.core.Keyword(null,"ticks-before","ticks-before",2078986128),new cljs.core.Keyword(null,"ticks-after","ticks-after",-211651342),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"slider-runnable-track","slider-runnable-track",1815502899),new cljs.core.Keyword(null,"range-thumb","range-thumb",1201269077),new cljs.core.Keyword(null,"fill-lower","fill-lower",1022026678),new cljs.core.Keyword(null,"first-letter","first-letter",1923006839),new cljs.core.Keyword(null,"cue","cue",1555624311),new cljs.core.Keyword(null,"fill-upper","fill-upper",-911013512),new cljs.core.Keyword(null,"progress-value","progress-value",1698126170),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"track","track",195787487)],["::-ms-thumb","::-moz-range-track","::first-line","::spelling-error",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["::-webkit-progress-bar",null,"::-moz-progress-bar",null], null), null),"::placeholder","::grammar-error","::-ms-reveal","::-moz-range-progress","::-ms-check","::marker","::-ms-browse","::-ms-fill","::-ms-value","::-webkit-slider-thumb","::cue-region","::-ms-ticks-before","::-ms-ticks-after","::after","::-webkit-slider-runnable-track","::-moz-range-thumb","::-ms-fill-lower","::first-letter","::cue","::-ms-fill-upper","::-webkit-progress-value","::selection","::backdrop","::before","::-ms-expand","::-ms-tooltip","::-ms-clear","::-ms-track"]);
var seq__41792_41855 = cljs.core.seq(stylo.tailwind.variant.pseudo_elements);
var chunk__41793_41856 = null;
var count__41794_41857 = (0);
var i__41795_41858 = (0);
while(true){
if((i__41795_41858 < count__41794_41857)){
var vec__41802_41859 = chunk__41793_41856.cljs$core$IIndexed$_nth$arity$2(null,i__41795_41858);
var k_41860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41802_41859,(0),null);
var v_41861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41802_41859,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_41860,((function (seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41802_41859,k_41860,v_41861){
return (function() { 
var G__41862__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41802_41859,k_41860,v_41861){
return (function (p1__41791_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__41791_SHARP_,rules);
});})(seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41802_41859,k_41860,v_41861))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_41861))?v_41861:cljs.core.PersistentHashSet.createAsIfByAssoc([v_41861]))], 0));
};
var G__41862 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41863__i = 0, G__41863__a = new Array(arguments.length -  1);
while (G__41863__i < G__41863__a.length) {G__41863__a[G__41863__i] = arguments[G__41863__i + 1]; ++G__41863__i;}
  rules = new cljs.core.IndexedSeq(G__41863__a,0,null);
} 
return G__41862__delegate.call(this,_,rules);};
G__41862.cljs$lang$maxFixedArity = 1;
G__41862.cljs$lang$applyTo = (function (arglist__41864){
var _ = cljs.core.first(arglist__41864);
var rules = cljs.core.rest(arglist__41864);
return G__41862__delegate(_,rules);
});
G__41862.cljs$core$IFn$_invoke$arity$variadic = G__41862__delegate;
return G__41862;
})()
;})(seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41802_41859,k_41860,v_41861))
);


var G__41865 = seq__41792_41855;
var G__41866 = chunk__41793_41856;
var G__41867 = count__41794_41857;
var G__41868 = (i__41795_41858 + (1));
seq__41792_41855 = G__41865;
chunk__41793_41856 = G__41866;
count__41794_41857 = G__41867;
i__41795_41858 = G__41868;
continue;
} else {
var temp__5804__auto___41869 = cljs.core.seq(seq__41792_41855);
if(temp__5804__auto___41869){
var seq__41792_41870__$1 = temp__5804__auto___41869;
if(cljs.core.chunked_seq_QMARK_(seq__41792_41870__$1)){
var c__5568__auto___41871 = cljs.core.chunk_first(seq__41792_41870__$1);
var G__41872 = cljs.core.chunk_rest(seq__41792_41870__$1);
var G__41873 = c__5568__auto___41871;
var G__41874 = cljs.core.count(c__5568__auto___41871);
var G__41875 = (0);
seq__41792_41855 = G__41872;
chunk__41793_41856 = G__41873;
count__41794_41857 = G__41874;
i__41795_41858 = G__41875;
continue;
} else {
var vec__41806_41876 = cljs.core.first(seq__41792_41870__$1);
var k_41877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41806_41876,(0),null);
var v_41878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41806_41876,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_41877,((function (seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41806_41876,k_41877,v_41878,seq__41792_41870__$1,temp__5804__auto___41869){
return (function() { 
var G__41880__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41806_41876,k_41877,v_41878,seq__41792_41870__$1,temp__5804__auto___41869){
return (function (p1__41791_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__41791_SHARP_,rules);
});})(seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41806_41876,k_41877,v_41878,seq__41792_41870__$1,temp__5804__auto___41869))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_41878))?v_41878:cljs.core.PersistentHashSet.createAsIfByAssoc([v_41878]))], 0));
};
var G__41880 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41884__i = 0, G__41884__a = new Array(arguments.length -  1);
while (G__41884__i < G__41884__a.length) {G__41884__a[G__41884__i] = arguments[G__41884__i + 1]; ++G__41884__i;}
  rules = new cljs.core.IndexedSeq(G__41884__a,0,null);
} 
return G__41880__delegate.call(this,_,rules);};
G__41880.cljs$lang$maxFixedArity = 1;
G__41880.cljs$lang$applyTo = (function (arglist__41885){
var _ = cljs.core.first(arglist__41885);
var rules = cljs.core.rest(arglist__41885);
return G__41880__delegate(_,rules);
});
G__41880.cljs$core$IFn$_invoke$arity$variadic = G__41880__delegate;
return G__41880;
})()
;})(seq__41792_41855,chunk__41793_41856,count__41794_41857,i__41795_41858,vec__41806_41876,k_41877,v_41878,seq__41792_41870__$1,temp__5804__auto___41869))
);


var G__41889 = cljs.core.next(seq__41792_41870__$1);
var G__41890 = null;
var G__41891 = (0);
var G__41892 = (0);
seq__41792_41855 = G__41889;
chunk__41793_41856 = G__41890;
count__41794_41857 = G__41891;
i__41795_41858 = G__41892;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=stylo.tailwind.variant.js.map
