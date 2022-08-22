goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39300 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39301 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39301);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__39311 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39312 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39312);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39311);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39300);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__39328 = arguments.length;
switch (G__39328) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__39339 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39339,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39339,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__39356_39402 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__39357_39403 = null;
var count__39358_39404 = (0);
var i__39359_39405 = (0);
while(true){
if((i__39359_39405 < count__39358_39404)){
var vec__39374_39407 = chunk__39357_39403.cljs$core$IIndexed$_nth$arity$2(null,i__39359_39405);
var container_39408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39374_39407,(0),null);
var comp_39409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39374_39407,(1),null);
reagent.dom.re_render_component(comp_39409,container_39408);


var G__39410 = seq__39356_39402;
var G__39411 = chunk__39357_39403;
var G__39412 = count__39358_39404;
var G__39413 = (i__39359_39405 + (1));
seq__39356_39402 = G__39410;
chunk__39357_39403 = G__39411;
count__39358_39404 = G__39412;
i__39359_39405 = G__39413;
continue;
} else {
var temp__5804__auto___39414 = cljs.core.seq(seq__39356_39402);
if(temp__5804__auto___39414){
var seq__39356_39415__$1 = temp__5804__auto___39414;
if(cljs.core.chunked_seq_QMARK_(seq__39356_39415__$1)){
var c__5568__auto___39416 = cljs.core.chunk_first(seq__39356_39415__$1);
var G__39418 = cljs.core.chunk_rest(seq__39356_39415__$1);
var G__39419 = c__5568__auto___39416;
var G__39420 = cljs.core.count(c__5568__auto___39416);
var G__39421 = (0);
seq__39356_39402 = G__39418;
chunk__39357_39403 = G__39419;
count__39358_39404 = G__39420;
i__39359_39405 = G__39421;
continue;
} else {
var vec__39384_39422 = cljs.core.first(seq__39356_39415__$1);
var container_39423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39384_39422,(0),null);
var comp_39424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39384_39422,(1),null);
reagent.dom.re_render_component(comp_39424,container_39423);


var G__39425 = cljs.core.next(seq__39356_39415__$1);
var G__39426 = null;
var G__39427 = (0);
var G__39428 = (0);
seq__39356_39402 = G__39425;
chunk__39357_39403 = G__39426;
count__39358_39404 = G__39427;
i__39359_39405 = G__39428;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
