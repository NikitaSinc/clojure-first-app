goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39485 = arguments.length;
var i__5770__auto___39486 = (0);
while(true){
if((i__5770__auto___39486 < len__5769__auto___39485)){
args__5775__auto__.push((arguments[i__5770__auto___39486]));

var G__39487 = (i__5770__auto___39486 + (1));
i__5770__auto___39486 = G__39487;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39031){
var G__39032 = cljs.core.first(seq39031);
var seq39031__$1 = cljs.core.next(seq39031);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39032,seq39031__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39042 = cljs.core.seq(sources);
var chunk__39043 = null;
var count__39044 = (0);
var i__39045 = (0);
while(true){
if((i__39045 < count__39044)){
var map__39055 = chunk__39043.cljs$core$IIndexed$_nth$arity$2(null,i__39045);
var map__39055__$1 = cljs.core.__destructure_map(map__39055);
var src = map__39055__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39055__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39058){var e_39488 = e39058;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39488);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39488.message)].join('')));
}

var G__39489 = seq__39042;
var G__39490 = chunk__39043;
var G__39491 = count__39044;
var G__39492 = (i__39045 + (1));
seq__39042 = G__39489;
chunk__39043 = G__39490;
count__39044 = G__39491;
i__39045 = G__39492;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39042);
if(temp__5804__auto__){
var seq__39042__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39042__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39042__$1);
var G__39493 = cljs.core.chunk_rest(seq__39042__$1);
var G__39494 = c__5568__auto__;
var G__39495 = cljs.core.count(c__5568__auto__);
var G__39496 = (0);
seq__39042 = G__39493;
chunk__39043 = G__39494;
count__39044 = G__39495;
i__39045 = G__39496;
continue;
} else {
var map__39061 = cljs.core.first(seq__39042__$1);
var map__39061__$1 = cljs.core.__destructure_map(map__39061);
var src = map__39061__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39062){var e_39497 = e39062;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39497);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39497.message)].join('')));
}

var G__39498 = cljs.core.next(seq__39042__$1);
var G__39499 = null;
var G__39500 = (0);
var G__39501 = (0);
seq__39042 = G__39498;
chunk__39043 = G__39499;
count__39044 = G__39500;
i__39045 = G__39501;
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
var seq__39065 = cljs.core.seq(js_requires);
var chunk__39066 = null;
var count__39067 = (0);
var i__39068 = (0);
while(true){
if((i__39068 < count__39067)){
var js_ns = chunk__39066.cljs$core$IIndexed$_nth$arity$2(null,i__39068);
var require_str_39503 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39503);


var G__39504 = seq__39065;
var G__39505 = chunk__39066;
var G__39506 = count__39067;
var G__39507 = (i__39068 + (1));
seq__39065 = G__39504;
chunk__39066 = G__39505;
count__39067 = G__39506;
i__39068 = G__39507;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39065);
if(temp__5804__auto__){
var seq__39065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39065__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39065__$1);
var G__39508 = cljs.core.chunk_rest(seq__39065__$1);
var G__39509 = c__5568__auto__;
var G__39510 = cljs.core.count(c__5568__auto__);
var G__39511 = (0);
seq__39065 = G__39508;
chunk__39066 = G__39509;
count__39067 = G__39510;
i__39068 = G__39511;
continue;
} else {
var js_ns = cljs.core.first(seq__39065__$1);
var require_str_39512 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39512);


var G__39513 = cljs.core.next(seq__39065__$1);
var G__39514 = null;
var G__39515 = (0);
var G__39516 = (0);
seq__39065 = G__39513;
chunk__39066 = G__39514;
count__39067 = G__39515;
i__39068 = G__39516;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39075){
var map__39076 = p__39075;
var map__39076__$1 = cljs.core.__destructure_map(map__39076);
var msg = map__39076__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39076__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39076__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39077(s__39078){
return (new cljs.core.LazySeq(null,(function (){
var s__39078__$1 = s__39078;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39078__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39083 = cljs.core.first(xs__6360__auto__);
var map__39083__$1 = cljs.core.__destructure_map(map__39083);
var src = map__39083__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39083__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39078__$1,map__39083,map__39083__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39076,map__39076__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39077_$_iter__39079(s__39080){
return (new cljs.core.LazySeq(null,((function (s__39078__$1,map__39083,map__39083__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39076,map__39076__$1,msg,info,reload_info){
return (function (){
var s__39080__$1 = s__39080;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39080__$1);
if(temp__5804__auto____$1){
var s__39080__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39080__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39080__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39082 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39081 = (0);
while(true){
if((i__39081 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39081);
cljs.core.chunk_append(b__39082,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39517 = (i__39081 + (1));
i__39081 = G__39517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39082),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39077_$_iter__39079(cljs.core.chunk_rest(s__39080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39082),null);
}
} else {
var warning = cljs.core.first(s__39080__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39077_$_iter__39079(cljs.core.rest(s__39080__$2)));
}
} else {
return null;
}
break;
}
});})(s__39078__$1,map__39083,map__39083__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39076,map__39076__$1,msg,info,reload_info))
,null,null));
});})(s__39078__$1,map__39083,map__39083__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39076,map__39076__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39077(cljs.core.rest(s__39078__$1)));
} else {
var G__39518 = cljs.core.rest(s__39078__$1);
s__39078__$1 = G__39518;
continue;
}
} else {
var G__39519 = cljs.core.rest(s__39078__$1);
s__39078__$1 = G__39519;
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
var seq__39088_39520 = cljs.core.seq(warnings);
var chunk__39089_39521 = null;
var count__39090_39522 = (0);
var i__39091_39523 = (0);
while(true){
if((i__39091_39523 < count__39090_39522)){
var map__39097_39525 = chunk__39089_39521.cljs$core$IIndexed$_nth$arity$2(null,i__39091_39523);
var map__39097_39526__$1 = cljs.core.__destructure_map(map__39097_39525);
var w_39527 = map__39097_39526__$1;
var msg_39528__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39526__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39097_39526__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39531)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39529),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39530),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39528__$1)].join(''));


var G__39532 = seq__39088_39520;
var G__39533 = chunk__39089_39521;
var G__39534 = count__39090_39522;
var G__39535 = (i__39091_39523 + (1));
seq__39088_39520 = G__39532;
chunk__39089_39521 = G__39533;
count__39090_39522 = G__39534;
i__39091_39523 = G__39535;
continue;
} else {
var temp__5804__auto___39536 = cljs.core.seq(seq__39088_39520);
if(temp__5804__auto___39536){
var seq__39088_39537__$1 = temp__5804__auto___39536;
if(cljs.core.chunked_seq_QMARK_(seq__39088_39537__$1)){
var c__5568__auto___39538 = cljs.core.chunk_first(seq__39088_39537__$1);
var G__39539 = cljs.core.chunk_rest(seq__39088_39537__$1);
var G__39540 = c__5568__auto___39538;
var G__39541 = cljs.core.count(c__5568__auto___39538);
var G__39542 = (0);
seq__39088_39520 = G__39539;
chunk__39089_39521 = G__39540;
count__39090_39522 = G__39541;
i__39091_39523 = G__39542;
continue;
} else {
var map__39098_39543 = cljs.core.first(seq__39088_39537__$1);
var map__39098_39544__$1 = cljs.core.__destructure_map(map__39098_39543);
var w_39545 = map__39098_39544__$1;
var msg_39546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098_39544__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098_39544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098_39544__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39098_39544__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39549)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39547),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39548),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39546__$1)].join(''));


var G__39550 = cljs.core.next(seq__39088_39537__$1);
var G__39551 = null;
var G__39552 = (0);
var G__39553 = (0);
seq__39088_39520 = G__39550;
chunk__39089_39521 = G__39551;
count__39090_39522 = G__39552;
i__39091_39523 = G__39553;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39074_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39074_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39107){
var map__39108 = p__39107;
var map__39108__$1 = cljs.core.__destructure_map(map__39108);
var msg = map__39108__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39108__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39108__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39109 = cljs.core.seq(updates);
var chunk__39111 = null;
var count__39112 = (0);
var i__39113 = (0);
while(true){
if((i__39113 < count__39112)){
var path = chunk__39111.cljs$core$IIndexed$_nth$arity$2(null,i__39113);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39324_39557 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39328_39558 = null;
var count__39329_39559 = (0);
var i__39330_39560 = (0);
while(true){
if((i__39330_39560 < count__39329_39559)){
var node_39561 = chunk__39328_39558.cljs$core$IIndexed$_nth$arity$2(null,i__39330_39560);
if(cljs.core.not(node_39561.shadow$old)){
var path_match_39562 = shadow.cljs.devtools.client.browser.match_paths(node_39561.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39562)){
var new_link_39563 = (function (){var G__39366 = node_39561.cloneNode(true);
G__39366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39562),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39366;
})();
(node_39561.shadow$old = true);

(new_link_39563.onload = ((function (seq__39324_39557,chunk__39328_39558,count__39329_39559,i__39330_39560,seq__39109,chunk__39111,count__39112,i__39113,new_link_39563,path_match_39562,node_39561,path,map__39108,map__39108__$1,msg,updates,reload_info){
return (function (e){
var seq__39367_39564 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39369_39565 = null;
var count__39370_39566 = (0);
var i__39371_39567 = (0);
while(true){
if((i__39371_39567 < count__39370_39566)){
var map__39379_39568 = chunk__39369_39565.cljs$core$IIndexed$_nth$arity$2(null,i__39371_39567);
var map__39379_39569__$1 = cljs.core.__destructure_map(map__39379_39568);
var task_39570 = map__39379_39569__$1;
var fn_str_39571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39379_39569__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39379_39569__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39573 = goog.getObjectByName(fn_str_39571,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39572)].join(''));

(fn_obj_39573.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39573.cljs$core$IFn$_invoke$arity$2(path,new_link_39563) : fn_obj_39573.call(null,path,new_link_39563));


var G__39574 = seq__39367_39564;
var G__39575 = chunk__39369_39565;
var G__39576 = count__39370_39566;
var G__39577 = (i__39371_39567 + (1));
seq__39367_39564 = G__39574;
chunk__39369_39565 = G__39575;
count__39370_39566 = G__39576;
i__39371_39567 = G__39577;
continue;
} else {
var temp__5804__auto___39578 = cljs.core.seq(seq__39367_39564);
if(temp__5804__auto___39578){
var seq__39367_39579__$1 = temp__5804__auto___39578;
if(cljs.core.chunked_seq_QMARK_(seq__39367_39579__$1)){
var c__5568__auto___39580 = cljs.core.chunk_first(seq__39367_39579__$1);
var G__39581 = cljs.core.chunk_rest(seq__39367_39579__$1);
var G__39582 = c__5568__auto___39580;
var G__39583 = cljs.core.count(c__5568__auto___39580);
var G__39584 = (0);
seq__39367_39564 = G__39581;
chunk__39369_39565 = G__39582;
count__39370_39566 = G__39583;
i__39371_39567 = G__39584;
continue;
} else {
var map__39380_39585 = cljs.core.first(seq__39367_39579__$1);
var map__39380_39586__$1 = cljs.core.__destructure_map(map__39380_39585);
var task_39587 = map__39380_39586__$1;
var fn_str_39588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380_39586__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380_39586__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39590 = goog.getObjectByName(fn_str_39588,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39589)].join(''));

(fn_obj_39590.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39590.cljs$core$IFn$_invoke$arity$2(path,new_link_39563) : fn_obj_39590.call(null,path,new_link_39563));


var G__39591 = cljs.core.next(seq__39367_39579__$1);
var G__39592 = null;
var G__39593 = (0);
var G__39594 = (0);
seq__39367_39564 = G__39591;
chunk__39369_39565 = G__39592;
count__39370_39566 = G__39593;
i__39371_39567 = G__39594;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39561);
});})(seq__39324_39557,chunk__39328_39558,count__39329_39559,i__39330_39560,seq__39109,chunk__39111,count__39112,i__39113,new_link_39563,path_match_39562,node_39561,path,map__39108,map__39108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39562], 0));

goog.dom.insertSiblingAfter(new_link_39563,node_39561);


var G__39595 = seq__39324_39557;
var G__39596 = chunk__39328_39558;
var G__39597 = count__39329_39559;
var G__39598 = (i__39330_39560 + (1));
seq__39324_39557 = G__39595;
chunk__39328_39558 = G__39596;
count__39329_39559 = G__39597;
i__39330_39560 = G__39598;
continue;
} else {
var G__39599 = seq__39324_39557;
var G__39600 = chunk__39328_39558;
var G__39601 = count__39329_39559;
var G__39602 = (i__39330_39560 + (1));
seq__39324_39557 = G__39599;
chunk__39328_39558 = G__39600;
count__39329_39559 = G__39601;
i__39330_39560 = G__39602;
continue;
}
} else {
var G__39603 = seq__39324_39557;
var G__39604 = chunk__39328_39558;
var G__39605 = count__39329_39559;
var G__39606 = (i__39330_39560 + (1));
seq__39324_39557 = G__39603;
chunk__39328_39558 = G__39604;
count__39329_39559 = G__39605;
i__39330_39560 = G__39606;
continue;
}
} else {
var temp__5804__auto___39607 = cljs.core.seq(seq__39324_39557);
if(temp__5804__auto___39607){
var seq__39324_39608__$1 = temp__5804__auto___39607;
if(cljs.core.chunked_seq_QMARK_(seq__39324_39608__$1)){
var c__5568__auto___39609 = cljs.core.chunk_first(seq__39324_39608__$1);
var G__39610 = cljs.core.chunk_rest(seq__39324_39608__$1);
var G__39611 = c__5568__auto___39609;
var G__39612 = cljs.core.count(c__5568__auto___39609);
var G__39613 = (0);
seq__39324_39557 = G__39610;
chunk__39328_39558 = G__39611;
count__39329_39559 = G__39612;
i__39330_39560 = G__39613;
continue;
} else {
var node_39614 = cljs.core.first(seq__39324_39608__$1);
if(cljs.core.not(node_39614.shadow$old)){
var path_match_39615 = shadow.cljs.devtools.client.browser.match_paths(node_39614.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39615)){
var new_link_39616 = (function (){var G__39382 = node_39614.cloneNode(true);
G__39382.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39615),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39382;
})();
(node_39614.shadow$old = true);

(new_link_39616.onload = ((function (seq__39324_39557,chunk__39328_39558,count__39329_39559,i__39330_39560,seq__39109,chunk__39111,count__39112,i__39113,new_link_39616,path_match_39615,node_39614,seq__39324_39608__$1,temp__5804__auto___39607,path,map__39108,map__39108__$1,msg,updates,reload_info){
return (function (e){
var seq__39383_39617 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39385_39618 = null;
var count__39386_39619 = (0);
var i__39387_39620 = (0);
while(true){
if((i__39387_39620 < count__39386_39619)){
var map__39394_39621 = chunk__39385_39618.cljs$core$IIndexed$_nth$arity$2(null,i__39387_39620);
var map__39394_39622__$1 = cljs.core.__destructure_map(map__39394_39621);
var task_39623 = map__39394_39622__$1;
var fn_str_39624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39394_39622__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39394_39622__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39626 = goog.getObjectByName(fn_str_39624,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39625)].join(''));

(fn_obj_39626.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39626.cljs$core$IFn$_invoke$arity$2(path,new_link_39616) : fn_obj_39626.call(null,path,new_link_39616));


var G__39627 = seq__39383_39617;
var G__39628 = chunk__39385_39618;
var G__39629 = count__39386_39619;
var G__39630 = (i__39387_39620 + (1));
seq__39383_39617 = G__39627;
chunk__39385_39618 = G__39628;
count__39386_39619 = G__39629;
i__39387_39620 = G__39630;
continue;
} else {
var temp__5804__auto___39631__$1 = cljs.core.seq(seq__39383_39617);
if(temp__5804__auto___39631__$1){
var seq__39383_39632__$1 = temp__5804__auto___39631__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39383_39632__$1)){
var c__5568__auto___39633 = cljs.core.chunk_first(seq__39383_39632__$1);
var G__39634 = cljs.core.chunk_rest(seq__39383_39632__$1);
var G__39635 = c__5568__auto___39633;
var G__39636 = cljs.core.count(c__5568__auto___39633);
var G__39637 = (0);
seq__39383_39617 = G__39634;
chunk__39385_39618 = G__39635;
count__39386_39619 = G__39636;
i__39387_39620 = G__39637;
continue;
} else {
var map__39397_39638 = cljs.core.first(seq__39383_39632__$1);
var map__39397_39639__$1 = cljs.core.__destructure_map(map__39397_39638);
var task_39640 = map__39397_39639__$1;
var fn_str_39641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39397_39639__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39397_39639__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39643 = goog.getObjectByName(fn_str_39641,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39642)].join(''));

(fn_obj_39643.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39643.cljs$core$IFn$_invoke$arity$2(path,new_link_39616) : fn_obj_39643.call(null,path,new_link_39616));


var G__39644 = cljs.core.next(seq__39383_39632__$1);
var G__39645 = null;
var G__39646 = (0);
var G__39647 = (0);
seq__39383_39617 = G__39644;
chunk__39385_39618 = G__39645;
count__39386_39619 = G__39646;
i__39387_39620 = G__39647;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39614);
});})(seq__39324_39557,chunk__39328_39558,count__39329_39559,i__39330_39560,seq__39109,chunk__39111,count__39112,i__39113,new_link_39616,path_match_39615,node_39614,seq__39324_39608__$1,temp__5804__auto___39607,path,map__39108,map__39108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39615], 0));

goog.dom.insertSiblingAfter(new_link_39616,node_39614);


var G__39648 = cljs.core.next(seq__39324_39608__$1);
var G__39649 = null;
var G__39650 = (0);
var G__39651 = (0);
seq__39324_39557 = G__39648;
chunk__39328_39558 = G__39649;
count__39329_39559 = G__39650;
i__39330_39560 = G__39651;
continue;
} else {
var G__39652 = cljs.core.next(seq__39324_39608__$1);
var G__39653 = null;
var G__39654 = (0);
var G__39655 = (0);
seq__39324_39557 = G__39652;
chunk__39328_39558 = G__39653;
count__39329_39559 = G__39654;
i__39330_39560 = G__39655;
continue;
}
} else {
var G__39656 = cljs.core.next(seq__39324_39608__$1);
var G__39657 = null;
var G__39658 = (0);
var G__39659 = (0);
seq__39324_39557 = G__39656;
chunk__39328_39558 = G__39657;
count__39329_39559 = G__39658;
i__39330_39560 = G__39659;
continue;
}
}
} else {
}
}
break;
}


var G__39660 = seq__39109;
var G__39661 = chunk__39111;
var G__39662 = count__39112;
var G__39663 = (i__39113 + (1));
seq__39109 = G__39660;
chunk__39111 = G__39661;
count__39112 = G__39662;
i__39113 = G__39663;
continue;
} else {
var G__39664 = seq__39109;
var G__39665 = chunk__39111;
var G__39666 = count__39112;
var G__39667 = (i__39113 + (1));
seq__39109 = G__39664;
chunk__39111 = G__39665;
count__39112 = G__39666;
i__39113 = G__39667;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39109);
if(temp__5804__auto__){
var seq__39109__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39109__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39109__$1);
var G__39668 = cljs.core.chunk_rest(seq__39109__$1);
var G__39669 = c__5568__auto__;
var G__39670 = cljs.core.count(c__5568__auto__);
var G__39671 = (0);
seq__39109 = G__39668;
chunk__39111 = G__39669;
count__39112 = G__39670;
i__39113 = G__39671;
continue;
} else {
var path = cljs.core.first(seq__39109__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39398_39672 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39402_39673 = null;
var count__39403_39674 = (0);
var i__39404_39675 = (0);
while(true){
if((i__39404_39675 < count__39403_39674)){
var node_39676 = chunk__39402_39673.cljs$core$IIndexed$_nth$arity$2(null,i__39404_39675);
if(cljs.core.not(node_39676.shadow$old)){
var path_match_39677 = shadow.cljs.devtools.client.browser.match_paths(node_39676.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39677)){
var new_link_39678 = (function (){var G__39433 = node_39676.cloneNode(true);
G__39433.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39677),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39433;
})();
(node_39676.shadow$old = true);

(new_link_39678.onload = ((function (seq__39398_39672,chunk__39402_39673,count__39403_39674,i__39404_39675,seq__39109,chunk__39111,count__39112,i__39113,new_link_39678,path_match_39677,node_39676,path,seq__39109__$1,temp__5804__auto__,map__39108,map__39108__$1,msg,updates,reload_info){
return (function (e){
var seq__39435_39679 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39437_39680 = null;
var count__39438_39681 = (0);
var i__39439_39682 = (0);
while(true){
if((i__39439_39682 < count__39438_39681)){
var map__39444_39683 = chunk__39437_39680.cljs$core$IIndexed$_nth$arity$2(null,i__39439_39682);
var map__39444_39684__$1 = cljs.core.__destructure_map(map__39444_39683);
var task_39685 = map__39444_39684__$1;
var fn_str_39686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39444_39684__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39444_39684__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39688 = goog.getObjectByName(fn_str_39686,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39687)].join(''));

(fn_obj_39688.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39688.cljs$core$IFn$_invoke$arity$2(path,new_link_39678) : fn_obj_39688.call(null,path,new_link_39678));


var G__39689 = seq__39435_39679;
var G__39690 = chunk__39437_39680;
var G__39691 = count__39438_39681;
var G__39692 = (i__39439_39682 + (1));
seq__39435_39679 = G__39689;
chunk__39437_39680 = G__39690;
count__39438_39681 = G__39691;
i__39439_39682 = G__39692;
continue;
} else {
var temp__5804__auto___39693__$1 = cljs.core.seq(seq__39435_39679);
if(temp__5804__auto___39693__$1){
var seq__39435_39694__$1 = temp__5804__auto___39693__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39435_39694__$1)){
var c__5568__auto___39695 = cljs.core.chunk_first(seq__39435_39694__$1);
var G__39696 = cljs.core.chunk_rest(seq__39435_39694__$1);
var G__39697 = c__5568__auto___39695;
var G__39698 = cljs.core.count(c__5568__auto___39695);
var G__39699 = (0);
seq__39435_39679 = G__39696;
chunk__39437_39680 = G__39697;
count__39438_39681 = G__39698;
i__39439_39682 = G__39699;
continue;
} else {
var map__39445_39700 = cljs.core.first(seq__39435_39694__$1);
var map__39445_39701__$1 = cljs.core.__destructure_map(map__39445_39700);
var task_39702 = map__39445_39701__$1;
var fn_str_39703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39445_39701__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39445_39701__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39705 = goog.getObjectByName(fn_str_39703,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39704)].join(''));

(fn_obj_39705.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39705.cljs$core$IFn$_invoke$arity$2(path,new_link_39678) : fn_obj_39705.call(null,path,new_link_39678));


var G__39706 = cljs.core.next(seq__39435_39694__$1);
var G__39707 = null;
var G__39708 = (0);
var G__39709 = (0);
seq__39435_39679 = G__39706;
chunk__39437_39680 = G__39707;
count__39438_39681 = G__39708;
i__39439_39682 = G__39709;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39676);
});})(seq__39398_39672,chunk__39402_39673,count__39403_39674,i__39404_39675,seq__39109,chunk__39111,count__39112,i__39113,new_link_39678,path_match_39677,node_39676,path,seq__39109__$1,temp__5804__auto__,map__39108,map__39108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39677], 0));

goog.dom.insertSiblingAfter(new_link_39678,node_39676);


var G__39710 = seq__39398_39672;
var G__39711 = chunk__39402_39673;
var G__39712 = count__39403_39674;
var G__39713 = (i__39404_39675 + (1));
seq__39398_39672 = G__39710;
chunk__39402_39673 = G__39711;
count__39403_39674 = G__39712;
i__39404_39675 = G__39713;
continue;
} else {
var G__39714 = seq__39398_39672;
var G__39715 = chunk__39402_39673;
var G__39716 = count__39403_39674;
var G__39717 = (i__39404_39675 + (1));
seq__39398_39672 = G__39714;
chunk__39402_39673 = G__39715;
count__39403_39674 = G__39716;
i__39404_39675 = G__39717;
continue;
}
} else {
var G__39718 = seq__39398_39672;
var G__39719 = chunk__39402_39673;
var G__39720 = count__39403_39674;
var G__39721 = (i__39404_39675 + (1));
seq__39398_39672 = G__39718;
chunk__39402_39673 = G__39719;
count__39403_39674 = G__39720;
i__39404_39675 = G__39721;
continue;
}
} else {
var temp__5804__auto___39722__$1 = cljs.core.seq(seq__39398_39672);
if(temp__5804__auto___39722__$1){
var seq__39398_39723__$1 = temp__5804__auto___39722__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39398_39723__$1)){
var c__5568__auto___39724 = cljs.core.chunk_first(seq__39398_39723__$1);
var G__39725 = cljs.core.chunk_rest(seq__39398_39723__$1);
var G__39726 = c__5568__auto___39724;
var G__39727 = cljs.core.count(c__5568__auto___39724);
var G__39728 = (0);
seq__39398_39672 = G__39725;
chunk__39402_39673 = G__39726;
count__39403_39674 = G__39727;
i__39404_39675 = G__39728;
continue;
} else {
var node_39729 = cljs.core.first(seq__39398_39723__$1);
if(cljs.core.not(node_39729.shadow$old)){
var path_match_39730 = shadow.cljs.devtools.client.browser.match_paths(node_39729.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39730)){
var new_link_39731 = (function (){var G__39446 = node_39729.cloneNode(true);
G__39446.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39730),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39446;
})();
(node_39729.shadow$old = true);

(new_link_39731.onload = ((function (seq__39398_39672,chunk__39402_39673,count__39403_39674,i__39404_39675,seq__39109,chunk__39111,count__39112,i__39113,new_link_39731,path_match_39730,node_39729,seq__39398_39723__$1,temp__5804__auto___39722__$1,path,seq__39109__$1,temp__5804__auto__,map__39108,map__39108__$1,msg,updates,reload_info){
return (function (e){
var seq__39450_39732 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39452_39733 = null;
var count__39453_39734 = (0);
var i__39454_39735 = (0);
while(true){
if((i__39454_39735 < count__39453_39734)){
var map__39458_39736 = chunk__39452_39733.cljs$core$IIndexed$_nth$arity$2(null,i__39454_39735);
var map__39458_39737__$1 = cljs.core.__destructure_map(map__39458_39736);
var task_39738 = map__39458_39737__$1;
var fn_str_39739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458_39737__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458_39737__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39741 = goog.getObjectByName(fn_str_39739,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39740)].join(''));

(fn_obj_39741.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39741.cljs$core$IFn$_invoke$arity$2(path,new_link_39731) : fn_obj_39741.call(null,path,new_link_39731));


var G__39742 = seq__39450_39732;
var G__39743 = chunk__39452_39733;
var G__39744 = count__39453_39734;
var G__39745 = (i__39454_39735 + (1));
seq__39450_39732 = G__39742;
chunk__39452_39733 = G__39743;
count__39453_39734 = G__39744;
i__39454_39735 = G__39745;
continue;
} else {
var temp__5804__auto___39746__$2 = cljs.core.seq(seq__39450_39732);
if(temp__5804__auto___39746__$2){
var seq__39450_39747__$1 = temp__5804__auto___39746__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39450_39747__$1)){
var c__5568__auto___39748 = cljs.core.chunk_first(seq__39450_39747__$1);
var G__39749 = cljs.core.chunk_rest(seq__39450_39747__$1);
var G__39750 = c__5568__auto___39748;
var G__39751 = cljs.core.count(c__5568__auto___39748);
var G__39752 = (0);
seq__39450_39732 = G__39749;
chunk__39452_39733 = G__39750;
count__39453_39734 = G__39751;
i__39454_39735 = G__39752;
continue;
} else {
var map__39459_39753 = cljs.core.first(seq__39450_39747__$1);
var map__39459_39754__$1 = cljs.core.__destructure_map(map__39459_39753);
var task_39755 = map__39459_39754__$1;
var fn_str_39756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39459_39754__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39459_39754__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39758 = goog.getObjectByName(fn_str_39756,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39757)].join(''));

(fn_obj_39758.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39758.cljs$core$IFn$_invoke$arity$2(path,new_link_39731) : fn_obj_39758.call(null,path,new_link_39731));


var G__39759 = cljs.core.next(seq__39450_39747__$1);
var G__39760 = null;
var G__39761 = (0);
var G__39762 = (0);
seq__39450_39732 = G__39759;
chunk__39452_39733 = G__39760;
count__39453_39734 = G__39761;
i__39454_39735 = G__39762;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39729);
});})(seq__39398_39672,chunk__39402_39673,count__39403_39674,i__39404_39675,seq__39109,chunk__39111,count__39112,i__39113,new_link_39731,path_match_39730,node_39729,seq__39398_39723__$1,temp__5804__auto___39722__$1,path,seq__39109__$1,temp__5804__auto__,map__39108,map__39108__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39730], 0));

goog.dom.insertSiblingAfter(new_link_39731,node_39729);


var G__39763 = cljs.core.next(seq__39398_39723__$1);
var G__39764 = null;
var G__39765 = (0);
var G__39766 = (0);
seq__39398_39672 = G__39763;
chunk__39402_39673 = G__39764;
count__39403_39674 = G__39765;
i__39404_39675 = G__39766;
continue;
} else {
var G__39767 = cljs.core.next(seq__39398_39723__$1);
var G__39768 = null;
var G__39769 = (0);
var G__39770 = (0);
seq__39398_39672 = G__39767;
chunk__39402_39673 = G__39768;
count__39403_39674 = G__39769;
i__39404_39675 = G__39770;
continue;
}
} else {
var G__39771 = cljs.core.next(seq__39398_39723__$1);
var G__39772 = null;
var G__39773 = (0);
var G__39774 = (0);
seq__39398_39672 = G__39771;
chunk__39402_39673 = G__39772;
count__39403_39674 = G__39773;
i__39404_39675 = G__39774;
continue;
}
}
} else {
}
}
break;
}


var G__39775 = cljs.core.next(seq__39109__$1);
var G__39776 = null;
var G__39777 = (0);
var G__39778 = (0);
seq__39109 = G__39775;
chunk__39111 = G__39776;
count__39112 = G__39777;
i__39113 = G__39778;
continue;
} else {
var G__39779 = cljs.core.next(seq__39109__$1);
var G__39780 = null;
var G__39781 = (0);
var G__39782 = (0);
seq__39109 = G__39779;
chunk__39111 = G__39780;
count__39112 = G__39781;
i__39113 = G__39782;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39460){
var map__39461 = p__39460;
var map__39461__$1 = cljs.core.__destructure_map(map__39461);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39461__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39462){
var map__39463 = p__39462;
var map__39463__$1 = cljs.core.__destructure_map(map__39463);
var _ = map__39463__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39463__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39464,done,error){
var map__39465 = p__39464;
var map__39465__$1 = cljs.core.__destructure_map(map__39465);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39465__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39466,done,error){
var map__39467 = p__39466;
var map__39467__$1 = cljs.core.__destructure_map(map__39467);
var msg = map__39467__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39467__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39467__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39467__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39468){
var map__39469 = p__39468;
var map__39469__$1 = cljs.core.__destructure_map(map__39469);
var src = map__39469__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39469__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39470 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39470) : done.call(null,G__39470));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39471){
var map__39472 = p__39471;
var map__39472__$1 = cljs.core.__destructure_map(map__39472);
var msg__$1 = map__39472__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39473){var ex = e39473;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39474){
var map__39475 = p__39474;
var map__39475__$1 = cljs.core.__destructure_map(map__39475);
var env = map__39475__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39475__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39480){
var map__39481 = p__39480;
var map__39481__$1 = cljs.core.__destructure_map(map__39481);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39482){
var map__39483 = p__39482;
var map__39483__$1 = cljs.core.__destructure_map(map__39483);
var svc = map__39483__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39483__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
