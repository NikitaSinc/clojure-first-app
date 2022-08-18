goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39723 = arguments.length;
var i__5770__auto___39724 = (0);
while(true){
if((i__5770__auto___39724 < len__5769__auto___39723)){
args__5775__auto__.push((arguments[i__5770__auto___39724]));

var G__39726 = (i__5770__auto___39724 + (1));
i__5770__auto___39724 = G__39726;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39188){
var G__39189 = cljs.core.first(seq39188);
var seq39188__$1 = cljs.core.next(seq39188);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39189,seq39188__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39192 = cljs.core.seq(sources);
var chunk__39193 = null;
var count__39194 = (0);
var i__39195 = (0);
while(true){
if((i__39195 < count__39194)){
var map__39207 = chunk__39193.cljs$core$IIndexed$_nth$arity$2(null,i__39195);
var map__39207__$1 = cljs.core.__destructure_map(map__39207);
var src = map__39207__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39209){var e_39730 = e39209;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39730);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39730.message)].join('')));
}

var G__39731 = seq__39192;
var G__39732 = chunk__39193;
var G__39733 = count__39194;
var G__39734 = (i__39195 + (1));
seq__39192 = G__39731;
chunk__39193 = G__39732;
count__39194 = G__39733;
i__39195 = G__39734;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39192);
if(temp__5804__auto__){
var seq__39192__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39192__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39192__$1);
var G__39735 = cljs.core.chunk_rest(seq__39192__$1);
var G__39736 = c__5568__auto__;
var G__39737 = cljs.core.count(c__5568__auto__);
var G__39738 = (0);
seq__39192 = G__39735;
chunk__39193 = G__39736;
count__39194 = G__39737;
i__39195 = G__39738;
continue;
} else {
var map__39210 = cljs.core.first(seq__39192__$1);
var map__39210__$1 = cljs.core.__destructure_map(map__39210);
var src = map__39210__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39210__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39211){var e_39739 = e39211;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39739);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39739.message)].join('')));
}

var G__39740 = cljs.core.next(seq__39192__$1);
var G__39741 = null;
var G__39742 = (0);
var G__39743 = (0);
seq__39192 = G__39740;
chunk__39193 = G__39741;
count__39194 = G__39742;
i__39195 = G__39743;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39212 = cljs.core.seq(js_requires);
var chunk__39213 = null;
var count__39214 = (0);
var i__39215 = (0);
while(true){
if((i__39215 < count__39214)){
var js_ns = chunk__39213.cljs$core$IIndexed$_nth$arity$2(null,i__39215);
var require_str_39747 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39747);


var G__39749 = seq__39212;
var G__39750 = chunk__39213;
var G__39751 = count__39214;
var G__39752 = (i__39215 + (1));
seq__39212 = G__39749;
chunk__39213 = G__39750;
count__39214 = G__39751;
i__39215 = G__39752;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39212);
if(temp__5804__auto__){
var seq__39212__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39212__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39212__$1);
var G__39753 = cljs.core.chunk_rest(seq__39212__$1);
var G__39754 = c__5568__auto__;
var G__39755 = cljs.core.count(c__5568__auto__);
var G__39756 = (0);
seq__39212 = G__39753;
chunk__39213 = G__39754;
count__39214 = G__39755;
i__39215 = G__39756;
continue;
} else {
var js_ns = cljs.core.first(seq__39212__$1);
var require_str_39758 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39758);


var G__39759 = cljs.core.next(seq__39212__$1);
var G__39760 = null;
var G__39761 = (0);
var G__39762 = (0);
seq__39212 = G__39759;
chunk__39213 = G__39760;
count__39214 = G__39761;
i__39215 = G__39762;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39219){
var map__39220 = p__39219;
var map__39220__$1 = cljs.core.__destructure_map(map__39220);
var msg = map__39220__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39220__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39220__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39221(s__39222){
return (new cljs.core.LazySeq(null,(function (){
var s__39222__$1 = s__39222;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39222__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39227 = cljs.core.first(xs__6360__auto__);
var map__39227__$1 = cljs.core.__destructure_map(map__39227);
var src = map__39227__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39227__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39222__$1,map__39227,map__39227__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39220,map__39220__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39221_$_iter__39223(s__39224){
return (new cljs.core.LazySeq(null,((function (s__39222__$1,map__39227,map__39227__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39220,map__39220__$1,msg,info,reload_info){
return (function (){
var s__39224__$1 = s__39224;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39224__$1);
if(temp__5804__auto____$1){
var s__39224__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39224__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39224__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39226 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39225 = (0);
while(true){
if((i__39225 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39225);
cljs.core.chunk_append(b__39226,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39766 = (i__39225 + (1));
i__39225 = G__39766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39226),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39221_$_iter__39223(cljs.core.chunk_rest(s__39224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39226),null);
}
} else {
var warning = cljs.core.first(s__39224__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39221_$_iter__39223(cljs.core.rest(s__39224__$2)));
}
} else {
return null;
}
break;
}
});})(s__39222__$1,map__39227,map__39227__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39220,map__39220__$1,msg,info,reload_info))
,null,null));
});})(s__39222__$1,map__39227,map__39227__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39220,map__39220__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39221(cljs.core.rest(s__39222__$1)));
} else {
var G__39767 = cljs.core.rest(s__39222__$1);
s__39222__$1 = G__39767;
continue;
}
} else {
var G__39768 = cljs.core.rest(s__39222__$1);
s__39222__$1 = G__39768;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39229_39769 = cljs.core.seq(warnings);
var chunk__39230_39770 = null;
var count__39231_39771 = (0);
var i__39232_39772 = (0);
while(true){
if((i__39232_39772 < count__39231_39771)){
var map__39238_39773 = chunk__39230_39770.cljs$core$IIndexed$_nth$arity$2(null,i__39232_39772);
var map__39238_39774__$1 = cljs.core.__destructure_map(map__39238_39773);
var w_39775 = map__39238_39774__$1;
var msg_39776__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39238_39774__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39238_39774__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39238_39774__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39238_39774__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39779)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39777),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39778),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39776__$1)].join(''));


var G__39782 = seq__39229_39769;
var G__39783 = chunk__39230_39770;
var G__39784 = count__39231_39771;
var G__39785 = (i__39232_39772 + (1));
seq__39229_39769 = G__39782;
chunk__39230_39770 = G__39783;
count__39231_39771 = G__39784;
i__39232_39772 = G__39785;
continue;
} else {
var temp__5804__auto___39786 = cljs.core.seq(seq__39229_39769);
if(temp__5804__auto___39786){
var seq__39229_39787__$1 = temp__5804__auto___39786;
if(cljs.core.chunked_seq_QMARK_(seq__39229_39787__$1)){
var c__5568__auto___39788 = cljs.core.chunk_first(seq__39229_39787__$1);
var G__39789 = cljs.core.chunk_rest(seq__39229_39787__$1);
var G__39790 = c__5568__auto___39788;
var G__39791 = cljs.core.count(c__5568__auto___39788);
var G__39792 = (0);
seq__39229_39769 = G__39789;
chunk__39230_39770 = G__39790;
count__39231_39771 = G__39791;
i__39232_39772 = G__39792;
continue;
} else {
var map__39240_39795 = cljs.core.first(seq__39229_39787__$1);
var map__39240_39796__$1 = cljs.core.__destructure_map(map__39240_39795);
var w_39797 = map__39240_39796__$1;
var msg_39798__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39240_39796__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39240_39796__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39240_39796__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39240_39796__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39801)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39799),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39800),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39798__$1)].join(''));


var G__39802 = cljs.core.next(seq__39229_39787__$1);
var G__39803 = null;
var G__39804 = (0);
var G__39805 = (0);
seq__39229_39769 = G__39802;
chunk__39230_39770 = G__39803;
count__39231_39771 = G__39804;
i__39232_39772 = G__39805;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39218_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39218_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39243){
var map__39244 = p__39243;
var map__39244__$1 = cljs.core.__destructure_map(map__39244);
var msg = map__39244__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39244__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39244__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39245 = cljs.core.seq(updates);
var chunk__39247 = null;
var count__39248 = (0);
var i__39249 = (0);
while(true){
if((i__39249 < count__39248)){
var path = chunk__39247.cljs$core$IIndexed$_nth$arity$2(null,i__39249);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39468_39811 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39472_39812 = null;
var count__39473_39813 = (0);
var i__39474_39814 = (0);
while(true){
if((i__39474_39814 < count__39473_39813)){
var node_39817 = chunk__39472_39812.cljs$core$IIndexed$_nth$arity$2(null,i__39474_39814);
if(cljs.core.not(node_39817.shadow$old)){
var path_match_39818 = shadow.cljs.devtools.client.browser.match_paths(node_39817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39818)){
var new_link_39820 = (function (){var G__39516 = node_39817.cloneNode(true);
G__39516.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39818),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39516;
})();
(node_39817.shadow$old = true);

(new_link_39820.onload = ((function (seq__39468_39811,chunk__39472_39812,count__39473_39813,i__39474_39814,seq__39245,chunk__39247,count__39248,i__39249,new_link_39820,path_match_39818,node_39817,path,map__39244,map__39244__$1,msg,updates,reload_info){
return (function (e){
var seq__39519_39821 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39521_39822 = null;
var count__39522_39823 = (0);
var i__39523_39824 = (0);
while(true){
if((i__39523_39824 < count__39522_39823)){
var map__39528_39825 = chunk__39521_39822.cljs$core$IIndexed$_nth$arity$2(null,i__39523_39824);
var map__39528_39826__$1 = cljs.core.__destructure_map(map__39528_39825);
var task_39827 = map__39528_39826__$1;
var fn_str_39828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39528_39826__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39528_39826__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39834 = goog.getObjectByName(fn_str_39828,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39829)].join(''));

(fn_obj_39834.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39834.cljs$core$IFn$_invoke$arity$2(path,new_link_39820) : fn_obj_39834.call(null,path,new_link_39820));


var G__39837 = seq__39519_39821;
var G__39838 = chunk__39521_39822;
var G__39839 = count__39522_39823;
var G__39840 = (i__39523_39824 + (1));
seq__39519_39821 = G__39837;
chunk__39521_39822 = G__39838;
count__39522_39823 = G__39839;
i__39523_39824 = G__39840;
continue;
} else {
var temp__5804__auto___39842 = cljs.core.seq(seq__39519_39821);
if(temp__5804__auto___39842){
var seq__39519_39843__$1 = temp__5804__auto___39842;
if(cljs.core.chunked_seq_QMARK_(seq__39519_39843__$1)){
var c__5568__auto___39844 = cljs.core.chunk_first(seq__39519_39843__$1);
var G__39845 = cljs.core.chunk_rest(seq__39519_39843__$1);
var G__39846 = c__5568__auto___39844;
var G__39847 = cljs.core.count(c__5568__auto___39844);
var G__39848 = (0);
seq__39519_39821 = G__39845;
chunk__39521_39822 = G__39846;
count__39522_39823 = G__39847;
i__39523_39824 = G__39848;
continue;
} else {
var map__39531_39849 = cljs.core.first(seq__39519_39843__$1);
var map__39531_39850__$1 = cljs.core.__destructure_map(map__39531_39849);
var task_39851 = map__39531_39850__$1;
var fn_str_39852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39531_39850__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39531_39850__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39854 = goog.getObjectByName(fn_str_39852,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39853)].join(''));

(fn_obj_39854.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39854.cljs$core$IFn$_invoke$arity$2(path,new_link_39820) : fn_obj_39854.call(null,path,new_link_39820));


var G__39857 = cljs.core.next(seq__39519_39843__$1);
var G__39858 = null;
var G__39859 = (0);
var G__39860 = (0);
seq__39519_39821 = G__39857;
chunk__39521_39822 = G__39858;
count__39522_39823 = G__39859;
i__39523_39824 = G__39860;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39817);
});})(seq__39468_39811,chunk__39472_39812,count__39473_39813,i__39474_39814,seq__39245,chunk__39247,count__39248,i__39249,new_link_39820,path_match_39818,node_39817,path,map__39244,map__39244__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39818], 0));

goog.dom.insertSiblingAfter(new_link_39820,node_39817);


var G__39861 = seq__39468_39811;
var G__39862 = chunk__39472_39812;
var G__39863 = count__39473_39813;
var G__39864 = (i__39474_39814 + (1));
seq__39468_39811 = G__39861;
chunk__39472_39812 = G__39862;
count__39473_39813 = G__39863;
i__39474_39814 = G__39864;
continue;
} else {
var G__39866 = seq__39468_39811;
var G__39867 = chunk__39472_39812;
var G__39868 = count__39473_39813;
var G__39869 = (i__39474_39814 + (1));
seq__39468_39811 = G__39866;
chunk__39472_39812 = G__39867;
count__39473_39813 = G__39868;
i__39474_39814 = G__39869;
continue;
}
} else {
var G__39871 = seq__39468_39811;
var G__39872 = chunk__39472_39812;
var G__39873 = count__39473_39813;
var G__39874 = (i__39474_39814 + (1));
seq__39468_39811 = G__39871;
chunk__39472_39812 = G__39872;
count__39473_39813 = G__39873;
i__39474_39814 = G__39874;
continue;
}
} else {
var temp__5804__auto___39875 = cljs.core.seq(seq__39468_39811);
if(temp__5804__auto___39875){
var seq__39468_39876__$1 = temp__5804__auto___39875;
if(cljs.core.chunked_seq_QMARK_(seq__39468_39876__$1)){
var c__5568__auto___39877 = cljs.core.chunk_first(seq__39468_39876__$1);
var G__39878 = cljs.core.chunk_rest(seq__39468_39876__$1);
var G__39879 = c__5568__auto___39877;
var G__39880 = cljs.core.count(c__5568__auto___39877);
var G__39881 = (0);
seq__39468_39811 = G__39878;
chunk__39472_39812 = G__39879;
count__39473_39813 = G__39880;
i__39474_39814 = G__39881;
continue;
} else {
var node_39882 = cljs.core.first(seq__39468_39876__$1);
if(cljs.core.not(node_39882.shadow$old)){
var path_match_39883 = shadow.cljs.devtools.client.browser.match_paths(node_39882.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39883)){
var new_link_39884 = (function (){var G__39532 = node_39882.cloneNode(true);
G__39532.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39883),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39532;
})();
(node_39882.shadow$old = true);

(new_link_39884.onload = ((function (seq__39468_39811,chunk__39472_39812,count__39473_39813,i__39474_39814,seq__39245,chunk__39247,count__39248,i__39249,new_link_39884,path_match_39883,node_39882,seq__39468_39876__$1,temp__5804__auto___39875,path,map__39244,map__39244__$1,msg,updates,reload_info){
return (function (e){
var seq__39534_39886 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39536_39887 = null;
var count__39537_39888 = (0);
var i__39538_39889 = (0);
while(true){
if((i__39538_39889 < count__39537_39888)){
var map__39546_39893 = chunk__39536_39887.cljs$core$IIndexed$_nth$arity$2(null,i__39538_39889);
var map__39546_39894__$1 = cljs.core.__destructure_map(map__39546_39893);
var task_39895 = map__39546_39894__$1;
var fn_str_39896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39546_39894__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39546_39894__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39900 = goog.getObjectByName(fn_str_39896,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39897)].join(''));

(fn_obj_39900.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39900.cljs$core$IFn$_invoke$arity$2(path,new_link_39884) : fn_obj_39900.call(null,path,new_link_39884));


var G__39904 = seq__39534_39886;
var G__39905 = chunk__39536_39887;
var G__39906 = count__39537_39888;
var G__39907 = (i__39538_39889 + (1));
seq__39534_39886 = G__39904;
chunk__39536_39887 = G__39905;
count__39537_39888 = G__39906;
i__39538_39889 = G__39907;
continue;
} else {
var temp__5804__auto___39908__$1 = cljs.core.seq(seq__39534_39886);
if(temp__5804__auto___39908__$1){
var seq__39534_39909__$1 = temp__5804__auto___39908__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39534_39909__$1)){
var c__5568__auto___39911 = cljs.core.chunk_first(seq__39534_39909__$1);
var G__39912 = cljs.core.chunk_rest(seq__39534_39909__$1);
var G__39913 = c__5568__auto___39911;
var G__39914 = cljs.core.count(c__5568__auto___39911);
var G__39915 = (0);
seq__39534_39886 = G__39912;
chunk__39536_39887 = G__39913;
count__39537_39888 = G__39914;
i__39538_39889 = G__39915;
continue;
} else {
var map__39548_39918 = cljs.core.first(seq__39534_39909__$1);
var map__39548_39919__$1 = cljs.core.__destructure_map(map__39548_39918);
var task_39920 = map__39548_39919__$1;
var fn_str_39921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39548_39919__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39548_39919__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39925 = goog.getObjectByName(fn_str_39921,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39922)].join(''));

(fn_obj_39925.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39925.cljs$core$IFn$_invoke$arity$2(path,new_link_39884) : fn_obj_39925.call(null,path,new_link_39884));


var G__39926 = cljs.core.next(seq__39534_39909__$1);
var G__39927 = null;
var G__39928 = (0);
var G__39929 = (0);
seq__39534_39886 = G__39926;
chunk__39536_39887 = G__39927;
count__39537_39888 = G__39928;
i__39538_39889 = G__39929;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39882);
});})(seq__39468_39811,chunk__39472_39812,count__39473_39813,i__39474_39814,seq__39245,chunk__39247,count__39248,i__39249,new_link_39884,path_match_39883,node_39882,seq__39468_39876__$1,temp__5804__auto___39875,path,map__39244,map__39244__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39883], 0));

goog.dom.insertSiblingAfter(new_link_39884,node_39882);


var G__39935 = cljs.core.next(seq__39468_39876__$1);
var G__39936 = null;
var G__39937 = (0);
var G__39938 = (0);
seq__39468_39811 = G__39935;
chunk__39472_39812 = G__39936;
count__39473_39813 = G__39937;
i__39474_39814 = G__39938;
continue;
} else {
var G__39939 = cljs.core.next(seq__39468_39876__$1);
var G__39940 = null;
var G__39941 = (0);
var G__39942 = (0);
seq__39468_39811 = G__39939;
chunk__39472_39812 = G__39940;
count__39473_39813 = G__39941;
i__39474_39814 = G__39942;
continue;
}
} else {
var G__39945 = cljs.core.next(seq__39468_39876__$1);
var G__39946 = null;
var G__39947 = (0);
var G__39948 = (0);
seq__39468_39811 = G__39945;
chunk__39472_39812 = G__39946;
count__39473_39813 = G__39947;
i__39474_39814 = G__39948;
continue;
}
}
} else {
}
}
break;
}


var G__39949 = seq__39245;
var G__39950 = chunk__39247;
var G__39951 = count__39248;
var G__39952 = (i__39249 + (1));
seq__39245 = G__39949;
chunk__39247 = G__39950;
count__39248 = G__39951;
i__39249 = G__39952;
continue;
} else {
var G__39957 = seq__39245;
var G__39958 = chunk__39247;
var G__39959 = count__39248;
var G__39960 = (i__39249 + (1));
seq__39245 = G__39957;
chunk__39247 = G__39958;
count__39248 = G__39959;
i__39249 = G__39960;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39245);
if(temp__5804__auto__){
var seq__39245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39245__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39245__$1);
var G__39962 = cljs.core.chunk_rest(seq__39245__$1);
var G__39963 = c__5568__auto__;
var G__39964 = cljs.core.count(c__5568__auto__);
var G__39965 = (0);
seq__39245 = G__39962;
chunk__39247 = G__39963;
count__39248 = G__39964;
i__39249 = G__39965;
continue;
} else {
var path = cljs.core.first(seq__39245__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39549_39967 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39553_39968 = null;
var count__39554_39969 = (0);
var i__39555_39970 = (0);
while(true){
if((i__39555_39970 < count__39554_39969)){
var node_39973 = chunk__39553_39968.cljs$core$IIndexed$_nth$arity$2(null,i__39555_39970);
if(cljs.core.not(node_39973.shadow$old)){
var path_match_39976 = shadow.cljs.devtools.client.browser.match_paths(node_39973.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39976)){
var new_link_39978 = (function (){var G__39597 = node_39973.cloneNode(true);
G__39597.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39976),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39597;
})();
(node_39973.shadow$old = true);

(new_link_39978.onload = ((function (seq__39549_39967,chunk__39553_39968,count__39554_39969,i__39555_39970,seq__39245,chunk__39247,count__39248,i__39249,new_link_39978,path_match_39976,node_39973,path,seq__39245__$1,temp__5804__auto__,map__39244,map__39244__$1,msg,updates,reload_info){
return (function (e){
var seq__39600_39979 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39602_39980 = null;
var count__39603_39981 = (0);
var i__39604_39982 = (0);
while(true){
if((i__39604_39982 < count__39603_39981)){
var map__39619_39983 = chunk__39602_39980.cljs$core$IIndexed$_nth$arity$2(null,i__39604_39982);
var map__39619_39984__$1 = cljs.core.__destructure_map(map__39619_39983);
var task_39985 = map__39619_39984__$1;
var fn_str_39986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619_39984__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619_39984__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39988 = goog.getObjectByName(fn_str_39986,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39987)].join(''));

(fn_obj_39988.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39988.cljs$core$IFn$_invoke$arity$2(path,new_link_39978) : fn_obj_39988.call(null,path,new_link_39978));


var G__39989 = seq__39600_39979;
var G__39990 = chunk__39602_39980;
var G__39991 = count__39603_39981;
var G__39992 = (i__39604_39982 + (1));
seq__39600_39979 = G__39989;
chunk__39602_39980 = G__39990;
count__39603_39981 = G__39991;
i__39604_39982 = G__39992;
continue;
} else {
var temp__5804__auto___39993__$1 = cljs.core.seq(seq__39600_39979);
if(temp__5804__auto___39993__$1){
var seq__39600_39994__$1 = temp__5804__auto___39993__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39600_39994__$1)){
var c__5568__auto___39995 = cljs.core.chunk_first(seq__39600_39994__$1);
var G__39996 = cljs.core.chunk_rest(seq__39600_39994__$1);
var G__39997 = c__5568__auto___39995;
var G__39998 = cljs.core.count(c__5568__auto___39995);
var G__39999 = (0);
seq__39600_39979 = G__39996;
chunk__39602_39980 = G__39997;
count__39603_39981 = G__39998;
i__39604_39982 = G__39999;
continue;
} else {
var map__39623_40001 = cljs.core.first(seq__39600_39994__$1);
var map__39623_40002__$1 = cljs.core.__destructure_map(map__39623_40001);
var task_40003 = map__39623_40002__$1;
var fn_str_40004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39623_40002__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39623_40002__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40007 = goog.getObjectByName(fn_str_40004,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40005)].join(''));

(fn_obj_40007.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40007.cljs$core$IFn$_invoke$arity$2(path,new_link_39978) : fn_obj_40007.call(null,path,new_link_39978));


var G__40008 = cljs.core.next(seq__39600_39994__$1);
var G__40009 = null;
var G__40010 = (0);
var G__40011 = (0);
seq__39600_39979 = G__40008;
chunk__39602_39980 = G__40009;
count__39603_39981 = G__40010;
i__39604_39982 = G__40011;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39973);
});})(seq__39549_39967,chunk__39553_39968,count__39554_39969,i__39555_39970,seq__39245,chunk__39247,count__39248,i__39249,new_link_39978,path_match_39976,node_39973,path,seq__39245__$1,temp__5804__auto__,map__39244,map__39244__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39976], 0));

goog.dom.insertSiblingAfter(new_link_39978,node_39973);


var G__40012 = seq__39549_39967;
var G__40013 = chunk__39553_39968;
var G__40014 = count__39554_39969;
var G__40015 = (i__39555_39970 + (1));
seq__39549_39967 = G__40012;
chunk__39553_39968 = G__40013;
count__39554_39969 = G__40014;
i__39555_39970 = G__40015;
continue;
} else {
var G__40018 = seq__39549_39967;
var G__40019 = chunk__39553_39968;
var G__40020 = count__39554_39969;
var G__40021 = (i__39555_39970 + (1));
seq__39549_39967 = G__40018;
chunk__39553_39968 = G__40019;
count__39554_39969 = G__40020;
i__39555_39970 = G__40021;
continue;
}
} else {
var G__40022 = seq__39549_39967;
var G__40023 = chunk__39553_39968;
var G__40024 = count__39554_39969;
var G__40025 = (i__39555_39970 + (1));
seq__39549_39967 = G__40022;
chunk__39553_39968 = G__40023;
count__39554_39969 = G__40024;
i__39555_39970 = G__40025;
continue;
}
} else {
var temp__5804__auto___40026__$1 = cljs.core.seq(seq__39549_39967);
if(temp__5804__auto___40026__$1){
var seq__39549_40027__$1 = temp__5804__auto___40026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39549_40027__$1)){
var c__5568__auto___40028 = cljs.core.chunk_first(seq__39549_40027__$1);
var G__40029 = cljs.core.chunk_rest(seq__39549_40027__$1);
var G__40030 = c__5568__auto___40028;
var G__40031 = cljs.core.count(c__5568__auto___40028);
var G__40032 = (0);
seq__39549_39967 = G__40029;
chunk__39553_39968 = G__40030;
count__39554_39969 = G__40031;
i__39555_39970 = G__40032;
continue;
} else {
var node_40037 = cljs.core.first(seq__39549_40027__$1);
if(cljs.core.not(node_40037.shadow$old)){
var path_match_40038 = shadow.cljs.devtools.client.browser.match_paths(node_40037.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40038)){
var new_link_40040 = (function (){var G__39630 = node_40037.cloneNode(true);
G__39630.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40038),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39630;
})();
(node_40037.shadow$old = true);

(new_link_40040.onload = ((function (seq__39549_39967,chunk__39553_39968,count__39554_39969,i__39555_39970,seq__39245,chunk__39247,count__39248,i__39249,new_link_40040,path_match_40038,node_40037,seq__39549_40027__$1,temp__5804__auto___40026__$1,path,seq__39245__$1,temp__5804__auto__,map__39244,map__39244__$1,msg,updates,reload_info){
return (function (e){
var seq__39632_40043 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39634_40044 = null;
var count__39635_40045 = (0);
var i__39636_40046 = (0);
while(true){
if((i__39636_40046 < count__39635_40045)){
var map__39653_40047 = chunk__39634_40044.cljs$core$IIndexed$_nth$arity$2(null,i__39636_40046);
var map__39653_40048__$1 = cljs.core.__destructure_map(map__39653_40047);
var task_40049 = map__39653_40048__$1;
var fn_str_40050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653_40048__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39653_40048__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40054 = goog.getObjectByName(fn_str_40050,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40051)].join(''));

(fn_obj_40054.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40054.cljs$core$IFn$_invoke$arity$2(path,new_link_40040) : fn_obj_40054.call(null,path,new_link_40040));


var G__40055 = seq__39632_40043;
var G__40056 = chunk__39634_40044;
var G__40057 = count__39635_40045;
var G__40058 = (i__39636_40046 + (1));
seq__39632_40043 = G__40055;
chunk__39634_40044 = G__40056;
count__39635_40045 = G__40057;
i__39636_40046 = G__40058;
continue;
} else {
var temp__5804__auto___40059__$2 = cljs.core.seq(seq__39632_40043);
if(temp__5804__auto___40059__$2){
var seq__39632_40062__$1 = temp__5804__auto___40059__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39632_40062__$1)){
var c__5568__auto___40063 = cljs.core.chunk_first(seq__39632_40062__$1);
var G__40064 = cljs.core.chunk_rest(seq__39632_40062__$1);
var G__40065 = c__5568__auto___40063;
var G__40066 = cljs.core.count(c__5568__auto___40063);
var G__40067 = (0);
seq__39632_40043 = G__40064;
chunk__39634_40044 = G__40065;
count__39635_40045 = G__40066;
i__39636_40046 = G__40067;
continue;
} else {
var map__39654_40068 = cljs.core.first(seq__39632_40062__$1);
var map__39654_40069__$1 = cljs.core.__destructure_map(map__39654_40068);
var task_40070 = map__39654_40069__$1;
var fn_str_40071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39654_40069__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39654_40069__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40073 = goog.getObjectByName(fn_str_40071,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40072)].join(''));

(fn_obj_40073.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40073.cljs$core$IFn$_invoke$arity$2(path,new_link_40040) : fn_obj_40073.call(null,path,new_link_40040));


var G__40075 = cljs.core.next(seq__39632_40062__$1);
var G__40076 = null;
var G__40077 = (0);
var G__40078 = (0);
seq__39632_40043 = G__40075;
chunk__39634_40044 = G__40076;
count__39635_40045 = G__40077;
i__39636_40046 = G__40078;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40037);
});})(seq__39549_39967,chunk__39553_39968,count__39554_39969,i__39555_39970,seq__39245,chunk__39247,count__39248,i__39249,new_link_40040,path_match_40038,node_40037,seq__39549_40027__$1,temp__5804__auto___40026__$1,path,seq__39245__$1,temp__5804__auto__,map__39244,map__39244__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40038], 0));

goog.dom.insertSiblingAfter(new_link_40040,node_40037);


var G__40079 = cljs.core.next(seq__39549_40027__$1);
var G__40080 = null;
var G__40081 = (0);
var G__40082 = (0);
seq__39549_39967 = G__40079;
chunk__39553_39968 = G__40080;
count__39554_39969 = G__40081;
i__39555_39970 = G__40082;
continue;
} else {
var G__40083 = cljs.core.next(seq__39549_40027__$1);
var G__40084 = null;
var G__40085 = (0);
var G__40086 = (0);
seq__39549_39967 = G__40083;
chunk__39553_39968 = G__40084;
count__39554_39969 = G__40085;
i__39555_39970 = G__40086;
continue;
}
} else {
var G__40088 = cljs.core.next(seq__39549_40027__$1);
var G__40089 = null;
var G__40090 = (0);
var G__40091 = (0);
seq__39549_39967 = G__40088;
chunk__39553_39968 = G__40089;
count__39554_39969 = G__40090;
i__39555_39970 = G__40091;
continue;
}
}
} else {
}
}
break;
}


var G__40094 = cljs.core.next(seq__39245__$1);
var G__40095 = null;
var G__40096 = (0);
var G__40097 = (0);
seq__39245 = G__40094;
chunk__39247 = G__40095;
count__39248 = G__40096;
i__39249 = G__40097;
continue;
} else {
var G__40098 = cljs.core.next(seq__39245__$1);
var G__40099 = null;
var G__40100 = (0);
var G__40101 = (0);
seq__39245 = G__40098;
chunk__39247 = G__40099;
count__39248 = G__40100;
i__39249 = G__40101;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39655){
var map__39656 = p__39655;
var map__39656__$1 = cljs.core.__destructure_map(map__39656);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39656__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39671){
var map__39672 = p__39671;
var map__39672__$1 = cljs.core.__destructure_map(map__39672);
var _ = map__39672__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39672__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39677,done,error){
var map__39678 = p__39677;
var map__39678__$1 = cljs.core.__destructure_map(map__39678);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39678__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39683,done,error){
var map__39684 = p__39683;
var map__39684__$1 = cljs.core.__destructure_map(map__39684);
var msg = map__39684__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39688){
var map__39689 = p__39688;
var map__39689__$1 = cljs.core.__destructure_map(map__39689);
var src = map__39689__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39689__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39692 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39692) : done.call(null,G__39692));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39694){
var map__39695 = p__39694;
var map__39695__$1 = cljs.core.__destructure_map(map__39695);
var msg__$1 = map__39695__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39695__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39696){var ex = e39696;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39698){
var map__39699 = p__39698;
var map__39699__$1 = cljs.core.__destructure_map(map__39699);
var env = map__39699__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39699__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39713){
var map__39714 = p__39713;
var map__39714__$1 = cljs.core.__destructure_map(map__39714);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39714__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39714__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39716){
var map__39718 = p__39716;
var map__39718__$1 = cljs.core.__destructure_map(map__39718);
var svc = map__39718__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39718__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
