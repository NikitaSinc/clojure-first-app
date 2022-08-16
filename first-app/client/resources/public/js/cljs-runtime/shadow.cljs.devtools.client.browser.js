goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21123 = arguments.length;
var i__5770__auto___21124 = (0);
while(true){
if((i__5770__auto___21124 < len__5769__auto___21123)){
args__5775__auto__.push((arguments[i__5770__auto___21124]));

var G__21125 = (i__5770__auto___21124 + (1));
i__5770__auto___21124 = G__21125;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20834){
var G__20835 = cljs.core.first(seq20834);
var seq20834__$1 = cljs.core.next(seq20834);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20835,seq20834__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20838 = cljs.core.seq(sources);
var chunk__20839 = null;
var count__20840 = (0);
var i__20841 = (0);
while(true){
if((i__20841 < count__20840)){
var map__20849 = chunk__20839.cljs$core$IIndexed$_nth$arity$2(null,i__20841);
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var src = map__20849__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20850){var e_21126 = e20850;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21126);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21126.message)].join('')));
}

var G__21127 = seq__20838;
var G__21128 = chunk__20839;
var G__21129 = count__20840;
var G__21130 = (i__20841 + (1));
seq__20838 = G__21127;
chunk__20839 = G__21128;
count__20840 = G__21129;
i__20841 = G__21130;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20838);
if(temp__5804__auto__){
var seq__20838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20838__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20838__$1);
var G__21131 = cljs.core.chunk_rest(seq__20838__$1);
var G__21132 = c__5568__auto__;
var G__21133 = cljs.core.count(c__5568__auto__);
var G__21134 = (0);
seq__20838 = G__21131;
chunk__20839 = G__21132;
count__20840 = G__21133;
i__20841 = G__21134;
continue;
} else {
var map__20852 = cljs.core.first(seq__20838__$1);
var map__20852__$1 = cljs.core.__destructure_map(map__20852);
var src = map__20852__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20854){var e_21135 = e20854;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21135);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21135.message)].join('')));
}

var G__21136 = cljs.core.next(seq__20838__$1);
var G__21137 = null;
var G__21138 = (0);
var G__21139 = (0);
seq__20838 = G__21136;
chunk__20839 = G__21137;
count__20840 = G__21138;
i__20841 = G__21139;
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
var seq__20855 = cljs.core.seq(js_requires);
var chunk__20856 = null;
var count__20857 = (0);
var i__20858 = (0);
while(true){
if((i__20858 < count__20857)){
var js_ns = chunk__20856.cljs$core$IIndexed$_nth$arity$2(null,i__20858);
var require_str_21140 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21140);


var G__21141 = seq__20855;
var G__21142 = chunk__20856;
var G__21143 = count__20857;
var G__21144 = (i__20858 + (1));
seq__20855 = G__21141;
chunk__20856 = G__21142;
count__20857 = G__21143;
i__20858 = G__21144;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20855);
if(temp__5804__auto__){
var seq__20855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20855__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20855__$1);
var G__21145 = cljs.core.chunk_rest(seq__20855__$1);
var G__21146 = c__5568__auto__;
var G__21147 = cljs.core.count(c__5568__auto__);
var G__21148 = (0);
seq__20855 = G__21145;
chunk__20856 = G__21146;
count__20857 = G__21147;
i__20858 = G__21148;
continue;
} else {
var js_ns = cljs.core.first(seq__20855__$1);
var require_str_21149 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21149);


var G__21150 = cljs.core.next(seq__20855__$1);
var G__21151 = null;
var G__21152 = (0);
var G__21153 = (0);
seq__20855 = G__21150;
chunk__20856 = G__21151;
count__20857 = G__21152;
i__20858 = G__21153;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20861){
var map__20862 = p__20861;
var map__20862__$1 = cljs.core.__destructure_map(map__20862);
var msg = map__20862__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20862__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20862__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20864(s__20865){
return (new cljs.core.LazySeq(null,(function (){
var s__20865__$1 = s__20865;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20865__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20870 = cljs.core.first(xs__6360__auto__);
var map__20870__$1 = cljs.core.__destructure_map(map__20870);
var src = map__20870__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20870__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20870__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20865__$1,map__20870,map__20870__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20864_$_iter__20866(s__20867){
return (new cljs.core.LazySeq(null,((function (s__20865__$1,map__20870,map__20870__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info){
return (function (){
var s__20867__$1 = s__20867;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20867__$1);
if(temp__5804__auto____$1){
var s__20867__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20867__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20867__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20869 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20868 = (0);
while(true){
if((i__20868 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20868);
cljs.core.chunk_append(b__20869,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21154 = (i__20868 + (1));
i__20868 = G__21154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20869),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20864_$_iter__20866(cljs.core.chunk_rest(s__20867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20869),null);
}
} else {
var warning = cljs.core.first(s__20867__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20864_$_iter__20866(cljs.core.rest(s__20867__$2)));
}
} else {
return null;
}
break;
}
});})(s__20865__$1,map__20870,map__20870__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info))
,null,null));
});})(s__20865__$1,map__20870,map__20870__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20864(cljs.core.rest(s__20865__$1)));
} else {
var G__21155 = cljs.core.rest(s__20865__$1);
s__20865__$1 = G__21155;
continue;
}
} else {
var G__21156 = cljs.core.rest(s__20865__$1);
s__20865__$1 = G__21156;
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
var seq__20871_21157 = cljs.core.seq(warnings);
var chunk__20872_21158 = null;
var count__20873_21159 = (0);
var i__20874_21160 = (0);
while(true){
if((i__20874_21160 < count__20873_21159)){
var map__20877_21161 = chunk__20872_21158.cljs$core$IIndexed$_nth$arity$2(null,i__20874_21160);
var map__20877_21162__$1 = cljs.core.__destructure_map(map__20877_21161);
var w_21163 = map__20877_21162__$1;
var msg_21164__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21162__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21167)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21165),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21166),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21164__$1)].join(''));


var G__21168 = seq__20871_21157;
var G__21169 = chunk__20872_21158;
var G__21170 = count__20873_21159;
var G__21171 = (i__20874_21160 + (1));
seq__20871_21157 = G__21168;
chunk__20872_21158 = G__21169;
count__20873_21159 = G__21170;
i__20874_21160 = G__21171;
continue;
} else {
var temp__5804__auto___21172 = cljs.core.seq(seq__20871_21157);
if(temp__5804__auto___21172){
var seq__20871_21173__$1 = temp__5804__auto___21172;
if(cljs.core.chunked_seq_QMARK_(seq__20871_21173__$1)){
var c__5568__auto___21174 = cljs.core.chunk_first(seq__20871_21173__$1);
var G__21175 = cljs.core.chunk_rest(seq__20871_21173__$1);
var G__21176 = c__5568__auto___21174;
var G__21177 = cljs.core.count(c__5568__auto___21174);
var G__21178 = (0);
seq__20871_21157 = G__21175;
chunk__20872_21158 = G__21176;
count__20873_21159 = G__21177;
i__20874_21160 = G__21178;
continue;
} else {
var map__20878_21179 = cljs.core.first(seq__20871_21173__$1);
var map__20878_21180__$1 = cljs.core.__destructure_map(map__20878_21179);
var w_21181 = map__20878_21180__$1;
var msg_21182__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878_21180__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878_21180__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878_21180__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878_21180__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21185)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21183),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21184),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21182__$1)].join(''));


var G__21186 = cljs.core.next(seq__20871_21173__$1);
var G__21187 = null;
var G__21188 = (0);
var G__21189 = (0);
seq__20871_21157 = G__21186;
chunk__20872_21158 = G__21187;
count__20873_21159 = G__21188;
i__20874_21160 = G__21189;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20859_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20859_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20879){
var map__20880 = p__20879;
var map__20880__$1 = cljs.core.__destructure_map(map__20880);
var msg = map__20880__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20880__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20880__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20881 = cljs.core.seq(updates);
var chunk__20883 = null;
var count__20884 = (0);
var i__20885 = (0);
while(true){
if((i__20885 < count__20884)){
var path = chunk__20883.cljs$core$IIndexed$_nth$arity$2(null,i__20885);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20995_21190 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20999_21191 = null;
var count__21000_21192 = (0);
var i__21001_21193 = (0);
while(true){
if((i__21001_21193 < count__21000_21192)){
var node_21194 = chunk__20999_21191.cljs$core$IIndexed$_nth$arity$2(null,i__21001_21193);
if(cljs.core.not(node_21194.shadow$old)){
var path_match_21195 = shadow.cljs.devtools.client.browser.match_paths(node_21194.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21195)){
var new_link_21196 = (function (){var G__21027 = node_21194.cloneNode(true);
G__21027.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21195),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21027;
})();
(node_21194.shadow$old = true);

(new_link_21196.onload = ((function (seq__20995_21190,chunk__20999_21191,count__21000_21192,i__21001_21193,seq__20881,chunk__20883,count__20884,i__20885,new_link_21196,path_match_21195,node_21194,path,map__20880,map__20880__$1,msg,updates,reload_info){
return (function (e){
var seq__21028_21197 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21030_21198 = null;
var count__21031_21199 = (0);
var i__21032_21200 = (0);
while(true){
if((i__21032_21200 < count__21031_21199)){
var map__21036_21201 = chunk__21030_21198.cljs$core$IIndexed$_nth$arity$2(null,i__21032_21200);
var map__21036_21202__$1 = cljs.core.__destructure_map(map__21036_21201);
var task_21203 = map__21036_21202__$1;
var fn_str_21204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21202__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21202__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21206 = goog.getObjectByName(fn_str_21204,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21205)].join(''));

(fn_obj_21206.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21206.cljs$core$IFn$_invoke$arity$2(path,new_link_21196) : fn_obj_21206.call(null,path,new_link_21196));


var G__21207 = seq__21028_21197;
var G__21208 = chunk__21030_21198;
var G__21209 = count__21031_21199;
var G__21210 = (i__21032_21200 + (1));
seq__21028_21197 = G__21207;
chunk__21030_21198 = G__21208;
count__21031_21199 = G__21209;
i__21032_21200 = G__21210;
continue;
} else {
var temp__5804__auto___21211 = cljs.core.seq(seq__21028_21197);
if(temp__5804__auto___21211){
var seq__21028_21212__$1 = temp__5804__auto___21211;
if(cljs.core.chunked_seq_QMARK_(seq__21028_21212__$1)){
var c__5568__auto___21213 = cljs.core.chunk_first(seq__21028_21212__$1);
var G__21214 = cljs.core.chunk_rest(seq__21028_21212__$1);
var G__21215 = c__5568__auto___21213;
var G__21216 = cljs.core.count(c__5568__auto___21213);
var G__21217 = (0);
seq__21028_21197 = G__21214;
chunk__21030_21198 = G__21215;
count__21031_21199 = G__21216;
i__21032_21200 = G__21217;
continue;
} else {
var map__21037_21218 = cljs.core.first(seq__21028_21212__$1);
var map__21037_21219__$1 = cljs.core.__destructure_map(map__21037_21218);
var task_21220 = map__21037_21219__$1;
var fn_str_21221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037_21219__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037_21219__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21223 = goog.getObjectByName(fn_str_21221,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21222)].join(''));

(fn_obj_21223.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21223.cljs$core$IFn$_invoke$arity$2(path,new_link_21196) : fn_obj_21223.call(null,path,new_link_21196));


var G__21224 = cljs.core.next(seq__21028_21212__$1);
var G__21225 = null;
var G__21226 = (0);
var G__21227 = (0);
seq__21028_21197 = G__21224;
chunk__21030_21198 = G__21225;
count__21031_21199 = G__21226;
i__21032_21200 = G__21227;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21194);
});})(seq__20995_21190,chunk__20999_21191,count__21000_21192,i__21001_21193,seq__20881,chunk__20883,count__20884,i__20885,new_link_21196,path_match_21195,node_21194,path,map__20880,map__20880__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21195], 0));

goog.dom.insertSiblingAfter(new_link_21196,node_21194);


var G__21228 = seq__20995_21190;
var G__21229 = chunk__20999_21191;
var G__21230 = count__21000_21192;
var G__21231 = (i__21001_21193 + (1));
seq__20995_21190 = G__21228;
chunk__20999_21191 = G__21229;
count__21000_21192 = G__21230;
i__21001_21193 = G__21231;
continue;
} else {
var G__21232 = seq__20995_21190;
var G__21233 = chunk__20999_21191;
var G__21234 = count__21000_21192;
var G__21235 = (i__21001_21193 + (1));
seq__20995_21190 = G__21232;
chunk__20999_21191 = G__21233;
count__21000_21192 = G__21234;
i__21001_21193 = G__21235;
continue;
}
} else {
var G__21236 = seq__20995_21190;
var G__21237 = chunk__20999_21191;
var G__21238 = count__21000_21192;
var G__21239 = (i__21001_21193 + (1));
seq__20995_21190 = G__21236;
chunk__20999_21191 = G__21237;
count__21000_21192 = G__21238;
i__21001_21193 = G__21239;
continue;
}
} else {
var temp__5804__auto___21240 = cljs.core.seq(seq__20995_21190);
if(temp__5804__auto___21240){
var seq__20995_21241__$1 = temp__5804__auto___21240;
if(cljs.core.chunked_seq_QMARK_(seq__20995_21241__$1)){
var c__5568__auto___21242 = cljs.core.chunk_first(seq__20995_21241__$1);
var G__21243 = cljs.core.chunk_rest(seq__20995_21241__$1);
var G__21244 = c__5568__auto___21242;
var G__21245 = cljs.core.count(c__5568__auto___21242);
var G__21246 = (0);
seq__20995_21190 = G__21243;
chunk__20999_21191 = G__21244;
count__21000_21192 = G__21245;
i__21001_21193 = G__21246;
continue;
} else {
var node_21247 = cljs.core.first(seq__20995_21241__$1);
if(cljs.core.not(node_21247.shadow$old)){
var path_match_21248 = shadow.cljs.devtools.client.browser.match_paths(node_21247.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21248)){
var new_link_21249 = (function (){var G__21038 = node_21247.cloneNode(true);
G__21038.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21248),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21038;
})();
(node_21247.shadow$old = true);

(new_link_21249.onload = ((function (seq__20995_21190,chunk__20999_21191,count__21000_21192,i__21001_21193,seq__20881,chunk__20883,count__20884,i__20885,new_link_21249,path_match_21248,node_21247,seq__20995_21241__$1,temp__5804__auto___21240,path,map__20880,map__20880__$1,msg,updates,reload_info){
return (function (e){
var seq__21039_21250 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21041_21251 = null;
var count__21042_21252 = (0);
var i__21043_21253 = (0);
while(true){
if((i__21043_21253 < count__21042_21252)){
var map__21047_21254 = chunk__21041_21251.cljs$core$IIndexed$_nth$arity$2(null,i__21043_21253);
var map__21047_21255__$1 = cljs.core.__destructure_map(map__21047_21254);
var task_21256 = map__21047_21255__$1;
var fn_str_21257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21255__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21255__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21259 = goog.getObjectByName(fn_str_21257,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21258)].join(''));

(fn_obj_21259.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21259.cljs$core$IFn$_invoke$arity$2(path,new_link_21249) : fn_obj_21259.call(null,path,new_link_21249));


var G__21260 = seq__21039_21250;
var G__21261 = chunk__21041_21251;
var G__21262 = count__21042_21252;
var G__21263 = (i__21043_21253 + (1));
seq__21039_21250 = G__21260;
chunk__21041_21251 = G__21261;
count__21042_21252 = G__21262;
i__21043_21253 = G__21263;
continue;
} else {
var temp__5804__auto___21264__$1 = cljs.core.seq(seq__21039_21250);
if(temp__5804__auto___21264__$1){
var seq__21039_21265__$1 = temp__5804__auto___21264__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21039_21265__$1)){
var c__5568__auto___21266 = cljs.core.chunk_first(seq__21039_21265__$1);
var G__21267 = cljs.core.chunk_rest(seq__21039_21265__$1);
var G__21268 = c__5568__auto___21266;
var G__21269 = cljs.core.count(c__5568__auto___21266);
var G__21270 = (0);
seq__21039_21250 = G__21267;
chunk__21041_21251 = G__21268;
count__21042_21252 = G__21269;
i__21043_21253 = G__21270;
continue;
} else {
var map__21048_21271 = cljs.core.first(seq__21039_21265__$1);
var map__21048_21272__$1 = cljs.core.__destructure_map(map__21048_21271);
var task_21273 = map__21048_21272__$1;
var fn_str_21274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21272__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21272__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21276 = goog.getObjectByName(fn_str_21274,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21275)].join(''));

(fn_obj_21276.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21276.cljs$core$IFn$_invoke$arity$2(path,new_link_21249) : fn_obj_21276.call(null,path,new_link_21249));


var G__21277 = cljs.core.next(seq__21039_21265__$1);
var G__21278 = null;
var G__21279 = (0);
var G__21280 = (0);
seq__21039_21250 = G__21277;
chunk__21041_21251 = G__21278;
count__21042_21252 = G__21279;
i__21043_21253 = G__21280;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21247);
});})(seq__20995_21190,chunk__20999_21191,count__21000_21192,i__21001_21193,seq__20881,chunk__20883,count__20884,i__20885,new_link_21249,path_match_21248,node_21247,seq__20995_21241__$1,temp__5804__auto___21240,path,map__20880,map__20880__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21248], 0));

goog.dom.insertSiblingAfter(new_link_21249,node_21247);


var G__21281 = cljs.core.next(seq__20995_21241__$1);
var G__21282 = null;
var G__21283 = (0);
var G__21284 = (0);
seq__20995_21190 = G__21281;
chunk__20999_21191 = G__21282;
count__21000_21192 = G__21283;
i__21001_21193 = G__21284;
continue;
} else {
var G__21285 = cljs.core.next(seq__20995_21241__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__20995_21190 = G__21285;
chunk__20999_21191 = G__21286;
count__21000_21192 = G__21287;
i__21001_21193 = G__21288;
continue;
}
} else {
var G__21289 = cljs.core.next(seq__20995_21241__$1);
var G__21290 = null;
var G__21291 = (0);
var G__21292 = (0);
seq__20995_21190 = G__21289;
chunk__20999_21191 = G__21290;
count__21000_21192 = G__21291;
i__21001_21193 = G__21292;
continue;
}
}
} else {
}
}
break;
}


var G__21293 = seq__20881;
var G__21294 = chunk__20883;
var G__21295 = count__20884;
var G__21296 = (i__20885 + (1));
seq__20881 = G__21293;
chunk__20883 = G__21294;
count__20884 = G__21295;
i__20885 = G__21296;
continue;
} else {
var G__21297 = seq__20881;
var G__21298 = chunk__20883;
var G__21299 = count__20884;
var G__21300 = (i__20885 + (1));
seq__20881 = G__21297;
chunk__20883 = G__21298;
count__20884 = G__21299;
i__20885 = G__21300;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20881);
if(temp__5804__auto__){
var seq__20881__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20881__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20881__$1);
var G__21301 = cljs.core.chunk_rest(seq__20881__$1);
var G__21302 = c__5568__auto__;
var G__21303 = cljs.core.count(c__5568__auto__);
var G__21304 = (0);
seq__20881 = G__21301;
chunk__20883 = G__21302;
count__20884 = G__21303;
i__20885 = G__21304;
continue;
} else {
var path = cljs.core.first(seq__20881__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21049_21305 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21053_21306 = null;
var count__21054_21307 = (0);
var i__21055_21308 = (0);
while(true){
if((i__21055_21308 < count__21054_21307)){
var node_21309 = chunk__21053_21306.cljs$core$IIndexed$_nth$arity$2(null,i__21055_21308);
if(cljs.core.not(node_21309.shadow$old)){
var path_match_21310 = shadow.cljs.devtools.client.browser.match_paths(node_21309.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21310)){
var new_link_21311 = (function (){var G__21081 = node_21309.cloneNode(true);
G__21081.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21310),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21081;
})();
(node_21309.shadow$old = true);

(new_link_21311.onload = ((function (seq__21049_21305,chunk__21053_21306,count__21054_21307,i__21055_21308,seq__20881,chunk__20883,count__20884,i__20885,new_link_21311,path_match_21310,node_21309,path,seq__20881__$1,temp__5804__auto__,map__20880,map__20880__$1,msg,updates,reload_info){
return (function (e){
var seq__21082_21312 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21084_21313 = null;
var count__21085_21314 = (0);
var i__21086_21315 = (0);
while(true){
if((i__21086_21315 < count__21085_21314)){
var map__21090_21316 = chunk__21084_21313.cljs$core$IIndexed$_nth$arity$2(null,i__21086_21315);
var map__21090_21317__$1 = cljs.core.__destructure_map(map__21090_21316);
var task_21318 = map__21090_21317__$1;
var fn_str_21319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090_21317__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090_21317__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21321 = goog.getObjectByName(fn_str_21319,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21320)].join(''));

(fn_obj_21321.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21321.cljs$core$IFn$_invoke$arity$2(path,new_link_21311) : fn_obj_21321.call(null,path,new_link_21311));


var G__21322 = seq__21082_21312;
var G__21323 = chunk__21084_21313;
var G__21324 = count__21085_21314;
var G__21325 = (i__21086_21315 + (1));
seq__21082_21312 = G__21322;
chunk__21084_21313 = G__21323;
count__21085_21314 = G__21324;
i__21086_21315 = G__21325;
continue;
} else {
var temp__5804__auto___21326__$1 = cljs.core.seq(seq__21082_21312);
if(temp__5804__auto___21326__$1){
var seq__21082_21327__$1 = temp__5804__auto___21326__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21082_21327__$1)){
var c__5568__auto___21328 = cljs.core.chunk_first(seq__21082_21327__$1);
var G__21329 = cljs.core.chunk_rest(seq__21082_21327__$1);
var G__21330 = c__5568__auto___21328;
var G__21331 = cljs.core.count(c__5568__auto___21328);
var G__21332 = (0);
seq__21082_21312 = G__21329;
chunk__21084_21313 = G__21330;
count__21085_21314 = G__21331;
i__21086_21315 = G__21332;
continue;
} else {
var map__21091_21333 = cljs.core.first(seq__21082_21327__$1);
var map__21091_21334__$1 = cljs.core.__destructure_map(map__21091_21333);
var task_21335 = map__21091_21334__$1;
var fn_str_21336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091_21334__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091_21334__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21338 = goog.getObjectByName(fn_str_21336,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21337)].join(''));

(fn_obj_21338.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21338.cljs$core$IFn$_invoke$arity$2(path,new_link_21311) : fn_obj_21338.call(null,path,new_link_21311));


var G__21339 = cljs.core.next(seq__21082_21327__$1);
var G__21340 = null;
var G__21341 = (0);
var G__21342 = (0);
seq__21082_21312 = G__21339;
chunk__21084_21313 = G__21340;
count__21085_21314 = G__21341;
i__21086_21315 = G__21342;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21309);
});})(seq__21049_21305,chunk__21053_21306,count__21054_21307,i__21055_21308,seq__20881,chunk__20883,count__20884,i__20885,new_link_21311,path_match_21310,node_21309,path,seq__20881__$1,temp__5804__auto__,map__20880,map__20880__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21310], 0));

goog.dom.insertSiblingAfter(new_link_21311,node_21309);


var G__21343 = seq__21049_21305;
var G__21344 = chunk__21053_21306;
var G__21345 = count__21054_21307;
var G__21346 = (i__21055_21308 + (1));
seq__21049_21305 = G__21343;
chunk__21053_21306 = G__21344;
count__21054_21307 = G__21345;
i__21055_21308 = G__21346;
continue;
} else {
var G__21347 = seq__21049_21305;
var G__21348 = chunk__21053_21306;
var G__21349 = count__21054_21307;
var G__21350 = (i__21055_21308 + (1));
seq__21049_21305 = G__21347;
chunk__21053_21306 = G__21348;
count__21054_21307 = G__21349;
i__21055_21308 = G__21350;
continue;
}
} else {
var G__21351 = seq__21049_21305;
var G__21352 = chunk__21053_21306;
var G__21353 = count__21054_21307;
var G__21354 = (i__21055_21308 + (1));
seq__21049_21305 = G__21351;
chunk__21053_21306 = G__21352;
count__21054_21307 = G__21353;
i__21055_21308 = G__21354;
continue;
}
} else {
var temp__5804__auto___21355__$1 = cljs.core.seq(seq__21049_21305);
if(temp__5804__auto___21355__$1){
var seq__21049_21356__$1 = temp__5804__auto___21355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21049_21356__$1)){
var c__5568__auto___21357 = cljs.core.chunk_first(seq__21049_21356__$1);
var G__21358 = cljs.core.chunk_rest(seq__21049_21356__$1);
var G__21359 = c__5568__auto___21357;
var G__21360 = cljs.core.count(c__5568__auto___21357);
var G__21361 = (0);
seq__21049_21305 = G__21358;
chunk__21053_21306 = G__21359;
count__21054_21307 = G__21360;
i__21055_21308 = G__21361;
continue;
} else {
var node_21362 = cljs.core.first(seq__21049_21356__$1);
if(cljs.core.not(node_21362.shadow$old)){
var path_match_21363 = shadow.cljs.devtools.client.browser.match_paths(node_21362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21363)){
var new_link_21364 = (function (){var G__21092 = node_21362.cloneNode(true);
G__21092.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21092;
})();
(node_21362.shadow$old = true);

(new_link_21364.onload = ((function (seq__21049_21305,chunk__21053_21306,count__21054_21307,i__21055_21308,seq__20881,chunk__20883,count__20884,i__20885,new_link_21364,path_match_21363,node_21362,seq__21049_21356__$1,temp__5804__auto___21355__$1,path,seq__20881__$1,temp__5804__auto__,map__20880,map__20880__$1,msg,updates,reload_info){
return (function (e){
var seq__21093_21365 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21095_21366 = null;
var count__21096_21367 = (0);
var i__21097_21368 = (0);
while(true){
if((i__21097_21368 < count__21096_21367)){
var map__21101_21369 = chunk__21095_21366.cljs$core$IIndexed$_nth$arity$2(null,i__21097_21368);
var map__21101_21370__$1 = cljs.core.__destructure_map(map__21101_21369);
var task_21371 = map__21101_21370__$1;
var fn_str_21372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101_21370__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101_21370__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21374 = goog.getObjectByName(fn_str_21372,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21373)].join(''));

(fn_obj_21374.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21374.cljs$core$IFn$_invoke$arity$2(path,new_link_21364) : fn_obj_21374.call(null,path,new_link_21364));


var G__21375 = seq__21093_21365;
var G__21376 = chunk__21095_21366;
var G__21377 = count__21096_21367;
var G__21378 = (i__21097_21368 + (1));
seq__21093_21365 = G__21375;
chunk__21095_21366 = G__21376;
count__21096_21367 = G__21377;
i__21097_21368 = G__21378;
continue;
} else {
var temp__5804__auto___21379__$2 = cljs.core.seq(seq__21093_21365);
if(temp__5804__auto___21379__$2){
var seq__21093_21380__$1 = temp__5804__auto___21379__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21093_21380__$1)){
var c__5568__auto___21381 = cljs.core.chunk_first(seq__21093_21380__$1);
var G__21382 = cljs.core.chunk_rest(seq__21093_21380__$1);
var G__21383 = c__5568__auto___21381;
var G__21384 = cljs.core.count(c__5568__auto___21381);
var G__21385 = (0);
seq__21093_21365 = G__21382;
chunk__21095_21366 = G__21383;
count__21096_21367 = G__21384;
i__21097_21368 = G__21385;
continue;
} else {
var map__21102_21386 = cljs.core.first(seq__21093_21380__$1);
var map__21102_21387__$1 = cljs.core.__destructure_map(map__21102_21386);
var task_21388 = map__21102_21387__$1;
var fn_str_21389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102_21387__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102_21387__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21391 = goog.getObjectByName(fn_str_21389,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21390)].join(''));

(fn_obj_21391.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21391.cljs$core$IFn$_invoke$arity$2(path,new_link_21364) : fn_obj_21391.call(null,path,new_link_21364));


var G__21392 = cljs.core.next(seq__21093_21380__$1);
var G__21393 = null;
var G__21394 = (0);
var G__21395 = (0);
seq__21093_21365 = G__21392;
chunk__21095_21366 = G__21393;
count__21096_21367 = G__21394;
i__21097_21368 = G__21395;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21362);
});})(seq__21049_21305,chunk__21053_21306,count__21054_21307,i__21055_21308,seq__20881,chunk__20883,count__20884,i__20885,new_link_21364,path_match_21363,node_21362,seq__21049_21356__$1,temp__5804__auto___21355__$1,path,seq__20881__$1,temp__5804__auto__,map__20880,map__20880__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21363], 0));

goog.dom.insertSiblingAfter(new_link_21364,node_21362);


var G__21396 = cljs.core.next(seq__21049_21356__$1);
var G__21397 = null;
var G__21398 = (0);
var G__21399 = (0);
seq__21049_21305 = G__21396;
chunk__21053_21306 = G__21397;
count__21054_21307 = G__21398;
i__21055_21308 = G__21399;
continue;
} else {
var G__21400 = cljs.core.next(seq__21049_21356__$1);
var G__21401 = null;
var G__21402 = (0);
var G__21403 = (0);
seq__21049_21305 = G__21400;
chunk__21053_21306 = G__21401;
count__21054_21307 = G__21402;
i__21055_21308 = G__21403;
continue;
}
} else {
var G__21404 = cljs.core.next(seq__21049_21356__$1);
var G__21405 = null;
var G__21406 = (0);
var G__21407 = (0);
seq__21049_21305 = G__21404;
chunk__21053_21306 = G__21405;
count__21054_21307 = G__21406;
i__21055_21308 = G__21407;
continue;
}
}
} else {
}
}
break;
}


var G__21408 = cljs.core.next(seq__20881__$1);
var G__21409 = null;
var G__21410 = (0);
var G__21411 = (0);
seq__20881 = G__21408;
chunk__20883 = G__21409;
count__20884 = G__21410;
i__20885 = G__21411;
continue;
} else {
var G__21412 = cljs.core.next(seq__20881__$1);
var G__21413 = null;
var G__21414 = (0);
var G__21415 = (0);
seq__20881 = G__21412;
chunk__20883 = G__21413;
count__20884 = G__21414;
i__20885 = G__21415;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21103){
var map__21104 = p__21103;
var map__21104__$1 = cljs.core.__destructure_map(map__21104);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21105){
var map__21106 = p__21105;
var map__21106__$1 = cljs.core.__destructure_map(map__21106);
var _ = map__21106__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21107,done,error){
var map__21108 = p__21107;
var map__21108__$1 = cljs.core.__destructure_map(map__21108);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21109,done,error){
var map__21110 = p__21109;
var map__21110__$1 = cljs.core.__destructure_map(map__21110);
var msg = map__21110__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21111){
var map__21112 = p__21111;
var map__21112__$1 = cljs.core.__destructure_map(map__21112);
var src = map__21112__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21113 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21113) : done.call(null,G__21113));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21114){
var map__21115 = p__21114;
var map__21115__$1 = cljs.core.__destructure_map(map__21115);
var msg__$1 = map__21115__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21116){var ex = e21116;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21117){
var map__21118 = p__21117;
var map__21118__$1 = cljs.core.__destructure_map(map__21118);
var env = map__21118__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21119){
var map__21120 = p__21119;
var map__21120__$1 = cljs.core.__destructure_map(map__21120);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21120__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21120__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21121){
var map__21122 = p__21121;
var map__21122__$1 = cljs.core.__destructure_map(map__21122);
var svc = map__21122__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
