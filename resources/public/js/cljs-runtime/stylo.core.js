goog.provide('stylo.core');
if((typeof stylo !== 'undefined') && (typeof stylo.core !== 'undefined') && (typeof stylo.core.styles !== 'undefined')){
} else {
stylo.core.styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof stylo !== 'undefined') && (typeof stylo.core !== 'undefined') && (typeof stylo.core.media_styles !== 'undefined')){
} else {
stylo.core.media_styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof stylo !== 'undefined') && (typeof stylo.core !== 'undefined') && (typeof stylo.core.media !== 'undefined')){
} else {
stylo.core.media = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),true], null),new cljs.core.Keyword(null,"smartphone","smartphone",-204168144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"415px"], null),new cljs.core.Keyword(null,"ereader","ereader",991688302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"481px"], null),new cljs.core.Keyword(null,"p-tablets","p-tablets",-809229293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"768px"], null),new cljs.core.Keyword(null,"l-tablets","l-tablets",46173935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1025px"], null),new cljs.core.Keyword(null,"desktop","desktop",1494219798),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"1200px"], null)], null));
}
stylo.core.garden_readable = (function stylo$core$garden_readable(media_rules){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__42072){
var vec__42073 = p__42072;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42073,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42073,(1),null);
var r = vec__42073;
if(typeof f === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),cljs.core.second(s)], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,r);
}
}),cljs.core.PersistentVector.EMPTY,media_rules);
});
stylo.core.media_query = (function stylo$core$media_query(media_specs,class_name,rules){
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(media_specs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,stylo.core.garden_readable(stylo.rule.join_rules(rules))], null)], null)], 0));
});
stylo.core.defmediarules = (function stylo$core$defmediarules(media){
var seq__42092 = cljs.core.seq(media);
var chunk__42093 = null;
var count__42094 = (0);
var i__42095 = (0);
while(true){
if((i__42095 < count__42094)){
var vec__42104 = chunk__42093.cljs$core$IIndexed$_nth$arity$2(null,i__42095);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42104,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__42092,chunk__42093,count__42094,i__42095,vec__42104,k,v){
return (function() { 
var G__42183__delegate = function (_,rules){
return ((function (seq__42092,chunk__42093,count__42094,i__42095,vec__42104,k,v){
return (function (class_name){
return stylo.core.media_query(v,class_name,rules);
});
;})(seq__42092,chunk__42093,count__42094,i__42095,vec__42104,k,v))
};
var G__42183 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__42185__i = 0, G__42185__a = new Array(arguments.length -  1);
while (G__42185__i < G__42185__a.length) {G__42185__a[G__42185__i] = arguments[G__42185__i + 1]; ++G__42185__i;}
  rules = new cljs.core.IndexedSeq(G__42185__a,0,null);
} 
return G__42183__delegate.call(this,_,rules);};
G__42183.cljs$lang$maxFixedArity = 1;
G__42183.cljs$lang$applyTo = (function (arglist__42186){
var _ = cljs.core.first(arglist__42186);
var rules = cljs.core.rest(arglist__42186);
return G__42183__delegate(_,rules);
});
G__42183.cljs$core$IFn$_invoke$arity$variadic = G__42183__delegate;
return G__42183;
})()
;})(seq__42092,chunk__42093,count__42094,i__42095,vec__42104,k,v))
);


var G__42187 = seq__42092;
var G__42188 = chunk__42093;
var G__42189 = count__42094;
var G__42190 = (i__42095 + (1));
seq__42092 = G__42187;
chunk__42093 = G__42188;
count__42094 = G__42189;
i__42095 = G__42190;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42092);
if(temp__5804__auto__){
var seq__42092__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42092__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42092__$1);
var G__42191 = cljs.core.chunk_rest(seq__42092__$1);
var G__42192 = c__5568__auto__;
var G__42193 = cljs.core.count(c__5568__auto__);
var G__42194 = (0);
seq__42092 = G__42191;
chunk__42093 = G__42192;
count__42094 = G__42193;
i__42095 = G__42194;
continue;
} else {
var vec__42127 = cljs.core.first(seq__42092__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42127,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k,((function (seq__42092,chunk__42093,count__42094,i__42095,vec__42127,k,v,seq__42092__$1,temp__5804__auto__){
return (function() { 
var G__42195__delegate = function (_,rules){
return ((function (seq__42092,chunk__42093,count__42094,i__42095,vec__42127,k,v,seq__42092__$1,temp__5804__auto__){
return (function (class_name){
return stylo.core.media_query(v,class_name,rules);
});
;})(seq__42092,chunk__42093,count__42094,i__42095,vec__42127,k,v,seq__42092__$1,temp__5804__auto__))
};
var G__42195 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__42200__i = 0, G__42200__a = new Array(arguments.length -  1);
while (G__42200__i < G__42200__a.length) {G__42200__a[G__42200__i] = arguments[G__42200__i + 1]; ++G__42200__i;}
  rules = new cljs.core.IndexedSeq(G__42200__a,0,null);
} 
return G__42195__delegate.call(this,_,rules);};
G__42195.cljs$lang$maxFixedArity = 1;
G__42195.cljs$lang$applyTo = (function (arglist__42201){
var _ = cljs.core.first(arglist__42201);
var rules = cljs.core.rest(arglist__42201);
return G__42195__delegate(_,rules);
});
G__42195.cljs$core$IFn$_invoke$arity$variadic = G__42195__delegate;
return G__42195;
})()
;})(seq__42092,chunk__42093,count__42094,i__42095,vec__42127,k,v,seq__42092__$1,temp__5804__auto__))
);


var G__42202 = cljs.core.next(seq__42092__$1);
var G__42203 = null;
var G__42204 = (0);
var G__42205 = (0);
seq__42092 = G__42202;
chunk__42093 = G__42203;
count__42094 = G__42204;
i__42095 = G__42205;
continue;
}
} else {
return null;
}
}
break;
}
});
stylo.core.defmediarules(cljs.core.deref(stylo.core.media));
stylo.core.set_own_mediarules_BANG_ = (function stylo$core$set_own_mediarules_BANG_(rules){
cljs.core.reset_BANG_(stylo.core.media,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,stylo.core.media,rules);

stylo.core.defmediarules(cljs.core.deref(stylo.core.media));

return cljs.core.deref(stylo.core.media);
});
stylo.core.extend_media_rules_BANG_ = (function stylo$core$extend_media_rules_BANG_(rules){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,stylo.core.media,rules);

stylo.core.defmediarules(cljs.core.deref(stylo.core.media));

return cljs.core.deref(stylo.core.media);
});
stylo.core.media_rule_QMARK_ = (function stylo$core$media_rule_QMARK_(k){
if((k instanceof cljs.core.Keyword)){
return k.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(cljs.core.deref(stylo.core.media))));
} else {
return null;
}
});
stylo.core.create_located_classname = (function stylo$core$create_located_classname(env){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ns_name = temp__5804__auto__;
return stylo.util.format.cljs$core$IFn$_invoke$arity$variadic(".%s-%s-%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace(ns_name,/\./,"_"),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env)], 0));
} else {
return null;
}
});
stylo.core.create_hashed_classname = (function stylo$core$create_hashed_classname(rules){
return [".c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(rules))].join('');
});
stylo.core.create_classname = (function stylo$core$create_classname(env,rules){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = stylo.core.create_located_classname(env);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylo.core.create_hashed_classname(rules);
}
})());
});
stylo.core.divide_rules = (function stylo$core$divide_rules(rules){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,r){
if((r instanceof cljs.core.Keyword)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.conj,r);
} else {
if(cljs.core.truth_(stylo.core.media_rule_QMARK_(cljs.core.first(r)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"media-rules","media-rules",209246200),cljs.core.conj,r);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.conj,r);

}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rules","rules",1198912366),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"media-rules","media-rules",209246200),cljs.core.PersistentVector.EMPTY], null),rules);
});
stylo.core.inject_media_rules = (function stylo$core$inject_media_rules(class_name,garden_obj){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylo.core.media_styles,cljs.core.dissoc,class_name);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylo.core.media_styles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(garden_obj))], null),garden_obj);
});
stylo.core.create_media_rules = (function stylo$core$create_media_rules(class_name,media_rules){
if((!(cljs.core.empty_QMARK_(media_rules)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (g){
return stylo.core.inject_media_rules(class_name,g);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(class_name) : f.call(null,class_name));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,stylo.rule.rule),media_rules)));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylo.core.media_styles,cljs.core.dissoc,class_name);
}
});
stylo.core.rules_with_location = (function stylo$core$rules_with_location(env,rules){
return cljs.core.with_meta(stylo.rule.join_rules(rules),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env)], null)], null));
});
stylo.core.create_rules = (function stylo$core$create_rules(env,rules){
if(cljs.core.empty_QMARK_(rules)){
return null;
} else {
var class_name = stylo.core.create_classname(env,rules);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylo.core.styles,cljs.core.dissoc,class_name);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylo.core.styles,cljs.core.assoc,class_name,stylo.core.rules_with_location(env,rules));

return class_name;
}
});
stylo.core.return_classname = (function stylo$core$return_classname(classname){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname))));
});
stylo.core.c_fn = (function stylo$core$c_fn(env,rs){
var map__42161 = stylo.core.divide_rules(rs);
var map__42161__$1 = cljs.core.__destructure_map(map__42161);
var media_rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42161__$1,new cljs.core.Keyword(null,"media-rules","media-rules",209246200));
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42161__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var class_name = (function (){var or__5045__auto__ = stylo.core.create_rules(env,rules);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return stylo.core.create_classname(env,media_rules);
}
})();
var _ = stylo.core.create_media_rules(class_name,media_rules);
return stylo.core.return_classname(class_name);
});
stylo.core.prettify = (function stylo$core$prettify(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,"\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n",v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,v);

}
}
}),cljs.core.PersistentVector.EMPTY,(function (p1__42163_SHARP_){
return clojure.string.replace(p1__42163_SHARP_,/\s{2,}/," ");
})((function (p1__42162_SHARP_){
return clojure.string.replace(p1__42162_SHARP_,/\n/,"");
})(s))));
});
stylo.core.css_media_styles = (function stylo$core$css_media_styles(var_args){
var G__42166 = arguments.length;
switch (G__42166) {
case 0:
return stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylo.core.media_styles));
}));

(stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1 = (function (media_styles){
return stylo.core.prettify(garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vals,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(media_styles)], 0))], 0)));
}));

(stylo.core.css_media_styles.cljs$lang$maxFixedArity = 1);

stylo.core.css_rules = (function stylo$core$css_rules(var_args){
var G__42171 = arguments.length;
switch (G__42171) {
case 0:
return stylo.core.css_rules.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylo.core.styles));
}));

(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stylo.tailwind.preflight.preflight,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__42172){
var vec__42173 = p__42172;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42173,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.meta),styles)))], 0));
}));

(stylo.core.css_rules.cljs$lang$maxFixedArity = 1);

stylo.core.get_styles = (function stylo$core$get_styles(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$0()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$0())].join('');
});
stylo.core.compile_styles = (function stylo$core$compile_styles(styles,media_styles){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylo.core.css_rules.cljs$core$IFn$_invoke$arity$1(styles)),stylo.core.css_media_styles.cljs$core$IFn$_invoke$arity$1(media_styles)].join('');
});

//# sourceMappingURL=stylo.core.js.map
