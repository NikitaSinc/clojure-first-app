goog.provide('stylo.tailwind.variant');
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),(function() { 
var G__41805__delegate = function (_,k,rules){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY], null),stylo.rule.join_rules(rules))], null);
};
var G__41805 = function (_,k,var_args){
var rules = null;
if (arguments.length > 2) {
var G__41806__i = 0, G__41806__a = new Array(arguments.length -  2);
while (G__41806__i < G__41806__a.length) {G__41806__a[G__41806__i] = arguments[G__41806__i + 2]; ++G__41806__i;}
  rules = new cljs.core.IndexedSeq(G__41806__a,0,null);
} 
return G__41805__delegate.call(this,_,k,rules);};
G__41805.cljs$lang$maxFixedArity = 2;
G__41805.cljs$lang$applyTo = (function (arglist__41807){
var _ = cljs.core.first(arglist__41807);
arglist__41807 = cljs.core.next(arglist__41807);
var k = cljs.core.first(arglist__41807);
var rules = cljs.core.rest(arglist__41807);
return G__41805__delegate(_,k,rules);
});
G__41805.cljs$core$IFn$_invoke$arity$variadic = G__41805__delegate;
return G__41805;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),(function() { 
var G__41808__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(odd)",rules);
};
var G__41808 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41809__i = 0, G__41809__a = new Array(arguments.length -  1);
while (G__41809__i < G__41809__a.length) {G__41809__a[G__41809__i] = arguments[G__41809__i + 1]; ++G__41809__i;}
  rules = new cljs.core.IndexedSeq(G__41809__a,0,null);
} 
return G__41808__delegate.call(this,_,rules);};
G__41808.cljs$lang$maxFixedArity = 1;
G__41808.cljs$lang$applyTo = (function (arglist__41810){
var _ = cljs.core.first(arglist__41810);
var rules = cljs.core.rest(arglist__41810);
return G__41808__delegate(_,rules);
});
G__41808.cljs$core$IFn$_invoke$arity$variadic = G__41808__delegate;
return G__41808;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"even","even",-275845692),(function() { 
var G__41811__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(even)",rules);
};
var G__41811 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41812__i = 0, G__41812__a = new Array(arguments.length -  1);
while (G__41812__i < G__41812__a.length) {G__41812__a[G__41812__i] = arguments[G__41812__i + 1]; ++G__41812__i;}
  rules = new cljs.core.IndexedSeq(G__41812__a,0,null);
} 
return G__41811__delegate.call(this,_,rules);};
G__41811.cljs$lang$maxFixedArity = 1;
G__41811.cljs$lang$applyTo = (function (arglist__41813){
var _ = cljs.core.first(arglist__41813);
var rules = cljs.core.rest(arglist__41813);
return G__41811__delegate(_,rules);
});
G__41811.cljs$core$IFn$_invoke$arity$variadic = G__41811__delegate;
return G__41811;
})()
);
stylo.tailwind.variant.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"any-link","any-link",-1005234634),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"defined","defined",-1805032318),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"first-child","first-child",2114099842),new cljs.core.Keyword(null,"first-of-type","first-of-type",-740219653),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"focus-visible","focus-visible",-135927717),new cljs.core.Keyword(null,"focus-within","focus-within",1637765153),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"in-range","in-range",1356571825),new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"last-child","last-child",1330670325),new cljs.core.Keyword(null,"last-of-type","last-of-type",-654078196),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"only-child","only-child",-1420502495),new cljs.core.Keyword(null,"only-of-type","only-of-type",693975143),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"out-of-range","out-of-range",692318589),new cljs.core.Keyword(null,"placeholder-shown","placeholder-shown",1752397014),new cljs.core.Keyword(null,"read-only","read-only",-191706886),new cljs.core.Keyword(null,"read-write","read-write",178022883),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"visited","visited",-1610853875)], true);
var seq__41767_41817 = cljs.core.seq(stylo.tailwind.variant.pseudo_classes);
var chunk__41768_41818 = null;
var count__41769_41819 = (0);
var i__41770_41820 = (0);
while(true){
if((i__41770_41820 < count__41769_41819)){
var c_41821 = chunk__41768_41818.cljs$core$IIndexed$_nth$arity$2(null,i__41770_41820);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_41821,((function (seq__41767_41817,chunk__41768_41818,count__41769_41819,i__41770_41820,c_41821){
return (function() { 
var G__41822__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41821),rules);
};
var G__41822 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41823__i = 0, G__41823__a = new Array(arguments.length -  1);
while (G__41823__i < G__41823__a.length) {G__41823__a[G__41823__i] = arguments[G__41823__i + 1]; ++G__41823__i;}
  rules = new cljs.core.IndexedSeq(G__41823__a,0,null);
} 
return G__41822__delegate.call(this,_,rules);};
G__41822.cljs$lang$maxFixedArity = 1;
G__41822.cljs$lang$applyTo = (function (arglist__41824){
var _ = cljs.core.first(arglist__41824);
var rules = cljs.core.rest(arglist__41824);
return G__41822__delegate(_,rules);
});
G__41822.cljs$core$IFn$_invoke$arity$variadic = G__41822__delegate;
return G__41822;
})()
;})(seq__41767_41817,chunk__41768_41818,count__41769_41819,i__41770_41820,c_41821))
);


var G__41825 = seq__41767_41817;
var G__41826 = chunk__41768_41818;
var G__41827 = count__41769_41819;
var G__41828 = (i__41770_41820 + (1));
seq__41767_41817 = G__41825;
chunk__41768_41818 = G__41826;
count__41769_41819 = G__41827;
i__41770_41820 = G__41828;
continue;
} else {
var temp__5804__auto___41829 = cljs.core.seq(seq__41767_41817);
if(temp__5804__auto___41829){
var seq__41767_41830__$1 = temp__5804__auto___41829;
if(cljs.core.chunked_seq_QMARK_(seq__41767_41830__$1)){
var c__5568__auto___41831 = cljs.core.chunk_first(seq__41767_41830__$1);
var G__41832 = cljs.core.chunk_rest(seq__41767_41830__$1);
var G__41833 = c__5568__auto___41831;
var G__41834 = cljs.core.count(c__5568__auto___41831);
var G__41835 = (0);
seq__41767_41817 = G__41832;
chunk__41768_41818 = G__41833;
count__41769_41819 = G__41834;
i__41770_41820 = G__41835;
continue;
} else {
var c_41836 = cljs.core.first(seq__41767_41830__$1);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_41836,((function (seq__41767_41817,chunk__41768_41818,count__41769_41819,i__41770_41820,c_41836,seq__41767_41830__$1,temp__5804__auto___41829){
return (function() { 
var G__41837__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41836),rules);
};
var G__41837 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41838__i = 0, G__41838__a = new Array(arguments.length -  1);
while (G__41838__i < G__41838__a.length) {G__41838__a[G__41838__i] = arguments[G__41838__i + 1]; ++G__41838__i;}
  rules = new cljs.core.IndexedSeq(G__41838__a,0,null);
} 
return G__41837__delegate.call(this,_,rules);};
G__41837.cljs$lang$maxFixedArity = 1;
G__41837.cljs$lang$applyTo = (function (arglist__41839){
var _ = cljs.core.first(arglist__41839);
var rules = cljs.core.rest(arglist__41839);
return G__41837__delegate(_,rules);
});
G__41837.cljs$core$IFn$_invoke$arity$variadic = G__41837__delegate;
return G__41837;
})()
;})(seq__41767_41817,chunk__41768_41818,count__41769_41819,i__41770_41820,c_41836,seq__41767_41830__$1,temp__5804__auto___41829))
);


var G__41840 = cljs.core.next(seq__41767_41830__$1);
var G__41841 = null;
var G__41842 = (0);
var G__41843 = (0);
seq__41767_41817 = G__41840;
chunk__41768_41818 = G__41841;
count__41769_41819 = G__41842;
i__41770_41820 = G__41843;
continue;
}
} else {
}
}
break;
}
stylo.tailwind.variant.pseudo_elements = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thumb","thumb",1718947232),new cljs.core.Keyword(null,"range-track","range-track",-1449711072),new cljs.core.Keyword(null,"first-line","first-line",285094849),new cljs.core.Keyword(null,"spelling-error","spelling-error",1665378434),new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"grammar-error","grammar-error",419933222),new cljs.core.Keyword(null,"reveal","reveal",-131374202),new cljs.core.Keyword(null,"range-progress","range-progress",-920777497),new cljs.core.Keyword(null,"check","check",1226308904),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"browse","browse",2070502601),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"slider-thumb","slider-thumb",155435340),new cljs.core.Keyword(null,"cue-region","cue-region",1087710702),new cljs.core.Keyword(null,"ticks-before","ticks-before",2078986128),new cljs.core.Keyword(null,"ticks-after","ticks-after",-211651342),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"slider-runnable-track","slider-runnable-track",1815502899),new cljs.core.Keyword(null,"range-thumb","range-thumb",1201269077),new cljs.core.Keyword(null,"fill-lower","fill-lower",1022026678),new cljs.core.Keyword(null,"first-letter","first-letter",1923006839),new cljs.core.Keyword(null,"cue","cue",1555624311),new cljs.core.Keyword(null,"fill-upper","fill-upper",-911013512),new cljs.core.Keyword(null,"progress-value","progress-value",1698126170),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"track","track",195787487)],["::-ms-thumb","::-moz-range-track","::first-line","::spelling-error",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["::-webkit-progress-bar",null,"::-moz-progress-bar",null], null), null),"::placeholder","::grammar-error","::-ms-reveal","::-moz-range-progress","::-ms-check","::marker","::-ms-browse","::-ms-fill","::-ms-value","::-webkit-slider-thumb","::cue-region","::-ms-ticks-before","::-ms-ticks-after","::after","::-webkit-slider-runnable-track","::-moz-range-thumb","::-ms-fill-lower","::first-letter","::cue","::-ms-fill-upper","::-webkit-progress-value","::selection","::backdrop","::before","::-ms-expand","::-ms-tooltip","::-ms-clear","::-ms-track"]);
var seq__41776_41844 = cljs.core.seq(stylo.tailwind.variant.pseudo_elements);
var chunk__41777_41845 = null;
var count__41778_41846 = (0);
var i__41779_41847 = (0);
while(true){
if((i__41779_41847 < count__41778_41846)){
var vec__41791_41848 = chunk__41777_41845.cljs$core$IIndexed$_nth$arity$2(null,i__41779_41847);
var k_41849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41791_41848,(0),null);
var v_41850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41791_41848,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_41849,((function (seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41791_41848,k_41849,v_41850){
return (function() { 
var G__41851__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41791_41848,k_41849,v_41850){
return (function (p1__41775_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__41775_SHARP_,rules);
});})(seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41791_41848,k_41849,v_41850))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_41850))?v_41850:cljs.core.PersistentHashSet.createAsIfByAssoc([v_41850]))], 0));
};
var G__41851 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41853__i = 0, G__41853__a = new Array(arguments.length -  1);
while (G__41853__i < G__41853__a.length) {G__41853__a[G__41853__i] = arguments[G__41853__i + 1]; ++G__41853__i;}
  rules = new cljs.core.IndexedSeq(G__41853__a,0,null);
} 
return G__41851__delegate.call(this,_,rules);};
G__41851.cljs$lang$maxFixedArity = 1;
G__41851.cljs$lang$applyTo = (function (arglist__41857){
var _ = cljs.core.first(arglist__41857);
var rules = cljs.core.rest(arglist__41857);
return G__41851__delegate(_,rules);
});
G__41851.cljs$core$IFn$_invoke$arity$variadic = G__41851__delegate;
return G__41851;
})()
;})(seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41791_41848,k_41849,v_41850))
);


var G__41858 = seq__41776_41844;
var G__41859 = chunk__41777_41845;
var G__41860 = count__41778_41846;
var G__41861 = (i__41779_41847 + (1));
seq__41776_41844 = G__41858;
chunk__41777_41845 = G__41859;
count__41778_41846 = G__41860;
i__41779_41847 = G__41861;
continue;
} else {
var temp__5804__auto___41862 = cljs.core.seq(seq__41776_41844);
if(temp__5804__auto___41862){
var seq__41776_41863__$1 = temp__5804__auto___41862;
if(cljs.core.chunked_seq_QMARK_(seq__41776_41863__$1)){
var c__5568__auto___41864 = cljs.core.chunk_first(seq__41776_41863__$1);
var G__41865 = cljs.core.chunk_rest(seq__41776_41863__$1);
var G__41866 = c__5568__auto___41864;
var G__41867 = cljs.core.count(c__5568__auto___41864);
var G__41868 = (0);
seq__41776_41844 = G__41865;
chunk__41777_41845 = G__41866;
count__41778_41846 = G__41867;
i__41779_41847 = G__41868;
continue;
} else {
var vec__41802_41869 = cljs.core.first(seq__41776_41863__$1);
var k_41870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41802_41869,(0),null);
var v_41871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41802_41869,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_41870,((function (seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41802_41869,k_41870,v_41871,seq__41776_41863__$1,temp__5804__auto___41862){
return (function() { 
var G__41872__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41802_41869,k_41870,v_41871,seq__41776_41863__$1,temp__5804__auto___41862){
return (function (p1__41775_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__41775_SHARP_,rules);
});})(seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41802_41869,k_41870,v_41871,seq__41776_41863__$1,temp__5804__auto___41862))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_41871))?v_41871:cljs.core.PersistentHashSet.createAsIfByAssoc([v_41871]))], 0));
};
var G__41872 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__41873__i = 0, G__41873__a = new Array(arguments.length -  1);
while (G__41873__i < G__41873__a.length) {G__41873__a[G__41873__i] = arguments[G__41873__i + 1]; ++G__41873__i;}
  rules = new cljs.core.IndexedSeq(G__41873__a,0,null);
} 
return G__41872__delegate.call(this,_,rules);};
G__41872.cljs$lang$maxFixedArity = 1;
G__41872.cljs$lang$applyTo = (function (arglist__41874){
var _ = cljs.core.first(arglist__41874);
var rules = cljs.core.rest(arglist__41874);
return G__41872__delegate(_,rules);
});
G__41872.cljs$core$IFn$_invoke$arity$variadic = G__41872__delegate;
return G__41872;
})()
;})(seq__41776_41844,chunk__41777_41845,count__41778_41846,i__41779_41847,vec__41802_41869,k_41870,v_41871,seq__41776_41863__$1,temp__5804__auto___41862))
);


var G__41875 = cljs.core.next(seq__41776_41863__$1);
var G__41876 = null;
var G__41877 = (0);
var G__41878 = (0);
seq__41776_41844 = G__41875;
chunk__41777_41845 = G__41876;
count__41778_41846 = G__41877;
i__41779_41847 = G__41878;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=stylo.tailwind.variant.js.map
