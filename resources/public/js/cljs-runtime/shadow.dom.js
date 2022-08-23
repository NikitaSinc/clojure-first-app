goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37471 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37471(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37482 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37482(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35934 = coll;
var G__35935 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35934,G__35935) : shadow.dom.lazy_native_coll_seq.call(null,G__35934,G__35935));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36027 = arguments.length;
switch (G__36027) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36040 = arguments.length;
switch (G__36040) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36061 = arguments.length;
switch (G__36061) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36077 = arguments.length;
switch (G__36077) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36099 = arguments.length;
switch (G__36099) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36131 = arguments.length;
switch (G__36131) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36139){if((e36139 instanceof Object)){
var e = e36139;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36139;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36155 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36156 = null;
var count__36157 = (0);
var i__36158 = (0);
while(true){
if((i__36158 < count__36157)){
var el = chunk__36156.cljs$core$IIndexed$_nth$arity$2(null,i__36158);
var handler_37502__$1 = ((function (seq__36155,chunk__36156,count__36157,i__36158,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36155,chunk__36156,count__36157,i__36158,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37502__$1);


var G__37503 = seq__36155;
var G__37504 = chunk__36156;
var G__37505 = count__36157;
var G__37506 = (i__36158 + (1));
seq__36155 = G__37503;
chunk__36156 = G__37504;
count__36157 = G__37505;
i__36158 = G__37506;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36155);
if(temp__5804__auto__){
var seq__36155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36155__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36155__$1);
var G__37507 = cljs.core.chunk_rest(seq__36155__$1);
var G__37508 = c__5568__auto__;
var G__37509 = cljs.core.count(c__5568__auto__);
var G__37510 = (0);
seq__36155 = G__37507;
chunk__36156 = G__37508;
count__36157 = G__37509;
i__36158 = G__37510;
continue;
} else {
var el = cljs.core.first(seq__36155__$1);
var handler_37511__$1 = ((function (seq__36155,chunk__36156,count__36157,i__36158,el,seq__36155__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36155,chunk__36156,count__36157,i__36158,el,seq__36155__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37511__$1);


var G__37514 = cljs.core.next(seq__36155__$1);
var G__37515 = null;
var G__37516 = (0);
var G__37517 = (0);
seq__36155 = G__37514;
chunk__36156 = G__37515;
count__36157 = G__37516;
i__36158 = G__37517;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36203 = arguments.length;
switch (G__36203) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36232 = cljs.core.seq(events);
var chunk__36233 = null;
var count__36234 = (0);
var i__36235 = (0);
while(true){
if((i__36235 < count__36234)){
var vec__36267 = chunk__36233.cljs$core$IIndexed$_nth$arity$2(null,i__36235);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36267,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37527 = seq__36232;
var G__37528 = chunk__36233;
var G__37529 = count__36234;
var G__37530 = (i__36235 + (1));
seq__36232 = G__37527;
chunk__36233 = G__37528;
count__36234 = G__37529;
i__36235 = G__37530;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36232);
if(temp__5804__auto__){
var seq__36232__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36232__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36232__$1);
var G__37531 = cljs.core.chunk_rest(seq__36232__$1);
var G__37532 = c__5568__auto__;
var G__37533 = cljs.core.count(c__5568__auto__);
var G__37534 = (0);
seq__36232 = G__37531;
chunk__36233 = G__37532;
count__36234 = G__37533;
i__36235 = G__37534;
continue;
} else {
var vec__36277 = cljs.core.first(seq__36232__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36277,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37536 = cljs.core.next(seq__36232__$1);
var G__37538 = null;
var G__37539 = (0);
var G__37541 = (0);
seq__36232 = G__37536;
chunk__36233 = G__37538;
count__36234 = G__37539;
i__36235 = G__37541;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36295 = cljs.core.seq(styles);
var chunk__36296 = null;
var count__36297 = (0);
var i__36298 = (0);
while(true){
if((i__36298 < count__36297)){
var vec__36320 = chunk__36296.cljs$core$IIndexed$_nth$arity$2(null,i__36298);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36320,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36320,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37546 = seq__36295;
var G__37547 = chunk__36296;
var G__37548 = count__36297;
var G__37549 = (i__36298 + (1));
seq__36295 = G__37546;
chunk__36296 = G__37547;
count__36297 = G__37548;
i__36298 = G__37549;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36295);
if(temp__5804__auto__){
var seq__36295__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36295__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36295__$1);
var G__37550 = cljs.core.chunk_rest(seq__36295__$1);
var G__37551 = c__5568__auto__;
var G__37552 = cljs.core.count(c__5568__auto__);
var G__37553 = (0);
seq__36295 = G__37550;
chunk__36296 = G__37551;
count__36297 = G__37552;
i__36298 = G__37553;
continue;
} else {
var vec__36326 = cljs.core.first(seq__36295__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36326,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37554 = cljs.core.next(seq__36295__$1);
var G__37555 = null;
var G__37556 = (0);
var G__37557 = (0);
seq__36295 = G__37554;
chunk__36296 = G__37555;
count__36297 = G__37556;
i__36298 = G__37557;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36335_37558 = key;
var G__36335_37559__$1 = (((G__36335_37558 instanceof cljs.core.Keyword))?G__36335_37558.fqn:null);
switch (G__36335_37559__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37562 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37562,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37562,"aria-");
}
})())){
el.setAttribute(ks_37562,value);
} else {
(el[ks_37562] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36402){
var map__36403 = p__36402;
var map__36403__$1 = cljs.core.__destructure_map(map__36403);
var props = map__36403__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36408 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36408,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36408,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36408,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36417 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36417,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36417;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36423 = arguments.length;
switch (G__36423) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36430){
var vec__36431 = p__36430;
var seq__36432 = cljs.core.seq(vec__36431);
var first__36433 = cljs.core.first(seq__36432);
var seq__36432__$1 = cljs.core.next(seq__36432);
var nn = first__36433;
var first__36433__$1 = cljs.core.first(seq__36432__$1);
var seq__36432__$2 = cljs.core.next(seq__36432__$1);
var np = first__36433__$1;
var nc = seq__36432__$2;
var node = vec__36431;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36434 = nn;
var G__36435 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36434,G__36435) : create_fn.call(null,G__36434,G__36435));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36438 = nn;
var G__36439 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36438,G__36439) : create_fn.call(null,G__36438,G__36439));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36449 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36449,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36449,(1),null);
var seq__36453_37579 = cljs.core.seq(node_children);
var chunk__36454_37580 = null;
var count__36455_37581 = (0);
var i__36456_37582 = (0);
while(true){
if((i__36456_37582 < count__36455_37581)){
var child_struct_37584 = chunk__36454_37580.cljs$core$IIndexed$_nth$arity$2(null,i__36456_37582);
var children_37585 = shadow.dom.dom_node(child_struct_37584);
if(cljs.core.seq_QMARK_(children_37585)){
var seq__36565_37586 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37585));
var chunk__36568_37587 = null;
var count__36569_37588 = (0);
var i__36570_37589 = (0);
while(true){
if((i__36570_37589 < count__36569_37588)){
var child_37590 = chunk__36568_37587.cljs$core$IIndexed$_nth$arity$2(null,i__36570_37589);
if(cljs.core.truth_(child_37590)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37590);


var G__37591 = seq__36565_37586;
var G__37592 = chunk__36568_37587;
var G__37593 = count__36569_37588;
var G__37594 = (i__36570_37589 + (1));
seq__36565_37586 = G__37591;
chunk__36568_37587 = G__37592;
count__36569_37588 = G__37593;
i__36570_37589 = G__37594;
continue;
} else {
var G__37595 = seq__36565_37586;
var G__37596 = chunk__36568_37587;
var G__37597 = count__36569_37588;
var G__37598 = (i__36570_37589 + (1));
seq__36565_37586 = G__37595;
chunk__36568_37587 = G__37596;
count__36569_37588 = G__37597;
i__36570_37589 = G__37598;
continue;
}
} else {
var temp__5804__auto___37599 = cljs.core.seq(seq__36565_37586);
if(temp__5804__auto___37599){
var seq__36565_37600__$1 = temp__5804__auto___37599;
if(cljs.core.chunked_seq_QMARK_(seq__36565_37600__$1)){
var c__5568__auto___37601 = cljs.core.chunk_first(seq__36565_37600__$1);
var G__37602 = cljs.core.chunk_rest(seq__36565_37600__$1);
var G__37603 = c__5568__auto___37601;
var G__37604 = cljs.core.count(c__5568__auto___37601);
var G__37605 = (0);
seq__36565_37586 = G__37602;
chunk__36568_37587 = G__37603;
count__36569_37588 = G__37604;
i__36570_37589 = G__37605;
continue;
} else {
var child_37606 = cljs.core.first(seq__36565_37600__$1);
if(cljs.core.truth_(child_37606)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37606);


var G__37608 = cljs.core.next(seq__36565_37600__$1);
var G__37609 = null;
var G__37610 = (0);
var G__37611 = (0);
seq__36565_37586 = G__37608;
chunk__36568_37587 = G__37609;
count__36569_37588 = G__37610;
i__36570_37589 = G__37611;
continue;
} else {
var G__37613 = cljs.core.next(seq__36565_37600__$1);
var G__37614 = null;
var G__37615 = (0);
var G__37616 = (0);
seq__36565_37586 = G__37613;
chunk__36568_37587 = G__37614;
count__36569_37588 = G__37615;
i__36570_37589 = G__37616;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37585);
}


var G__37617 = seq__36453_37579;
var G__37618 = chunk__36454_37580;
var G__37619 = count__36455_37581;
var G__37620 = (i__36456_37582 + (1));
seq__36453_37579 = G__37617;
chunk__36454_37580 = G__37618;
count__36455_37581 = G__37619;
i__36456_37582 = G__37620;
continue;
} else {
var temp__5804__auto___37621 = cljs.core.seq(seq__36453_37579);
if(temp__5804__auto___37621){
var seq__36453_37622__$1 = temp__5804__auto___37621;
if(cljs.core.chunked_seq_QMARK_(seq__36453_37622__$1)){
var c__5568__auto___37623 = cljs.core.chunk_first(seq__36453_37622__$1);
var G__37624 = cljs.core.chunk_rest(seq__36453_37622__$1);
var G__37625 = c__5568__auto___37623;
var G__37626 = cljs.core.count(c__5568__auto___37623);
var G__37627 = (0);
seq__36453_37579 = G__37624;
chunk__36454_37580 = G__37625;
count__36455_37581 = G__37626;
i__36456_37582 = G__37627;
continue;
} else {
var child_struct_37629 = cljs.core.first(seq__36453_37622__$1);
var children_37630 = shadow.dom.dom_node(child_struct_37629);
if(cljs.core.seq_QMARK_(children_37630)){
var seq__36622_37631 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37630));
var chunk__36624_37632 = null;
var count__36625_37633 = (0);
var i__36626_37634 = (0);
while(true){
if((i__36626_37634 < count__36625_37633)){
var child_37636 = chunk__36624_37632.cljs$core$IIndexed$_nth$arity$2(null,i__36626_37634);
if(cljs.core.truth_(child_37636)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37636);


var G__37638 = seq__36622_37631;
var G__37639 = chunk__36624_37632;
var G__37640 = count__36625_37633;
var G__37641 = (i__36626_37634 + (1));
seq__36622_37631 = G__37638;
chunk__36624_37632 = G__37639;
count__36625_37633 = G__37640;
i__36626_37634 = G__37641;
continue;
} else {
var G__37642 = seq__36622_37631;
var G__37643 = chunk__36624_37632;
var G__37644 = count__36625_37633;
var G__37645 = (i__36626_37634 + (1));
seq__36622_37631 = G__37642;
chunk__36624_37632 = G__37643;
count__36625_37633 = G__37644;
i__36626_37634 = G__37645;
continue;
}
} else {
var temp__5804__auto___37646__$1 = cljs.core.seq(seq__36622_37631);
if(temp__5804__auto___37646__$1){
var seq__36622_37647__$1 = temp__5804__auto___37646__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36622_37647__$1)){
var c__5568__auto___37648 = cljs.core.chunk_first(seq__36622_37647__$1);
var G__37649 = cljs.core.chunk_rest(seq__36622_37647__$1);
var G__37650 = c__5568__auto___37648;
var G__37651 = cljs.core.count(c__5568__auto___37648);
var G__37652 = (0);
seq__36622_37631 = G__37649;
chunk__36624_37632 = G__37650;
count__36625_37633 = G__37651;
i__36626_37634 = G__37652;
continue;
} else {
var child_37653 = cljs.core.first(seq__36622_37647__$1);
if(cljs.core.truth_(child_37653)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37653);


var G__37654 = cljs.core.next(seq__36622_37647__$1);
var G__37655 = null;
var G__37656 = (0);
var G__37657 = (0);
seq__36622_37631 = G__37654;
chunk__36624_37632 = G__37655;
count__36625_37633 = G__37656;
i__36626_37634 = G__37657;
continue;
} else {
var G__37658 = cljs.core.next(seq__36622_37647__$1);
var G__37659 = null;
var G__37660 = (0);
var G__37661 = (0);
seq__36622_37631 = G__37658;
chunk__36624_37632 = G__37659;
count__36625_37633 = G__37660;
i__36626_37634 = G__37661;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37630);
}


var G__37662 = cljs.core.next(seq__36453_37622__$1);
var G__37663 = null;
var G__37664 = (0);
var G__37665 = (0);
seq__36453_37579 = G__37662;
chunk__36454_37580 = G__37663;
count__36455_37581 = G__37664;
i__36456_37582 = G__37665;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36757 = cljs.core.seq(node);
var chunk__36758 = null;
var count__36759 = (0);
var i__36760 = (0);
while(true){
if((i__36760 < count__36759)){
var n = chunk__36758.cljs$core$IIndexed$_nth$arity$2(null,i__36760);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37669 = seq__36757;
var G__37670 = chunk__36758;
var G__37671 = count__36759;
var G__37672 = (i__36760 + (1));
seq__36757 = G__37669;
chunk__36758 = G__37670;
count__36759 = G__37671;
i__36760 = G__37672;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36757);
if(temp__5804__auto__){
var seq__36757__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36757__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36757__$1);
var G__37673 = cljs.core.chunk_rest(seq__36757__$1);
var G__37674 = c__5568__auto__;
var G__37675 = cljs.core.count(c__5568__auto__);
var G__37676 = (0);
seq__36757 = G__37673;
chunk__36758 = G__37674;
count__36759 = G__37675;
i__36760 = G__37676;
continue;
} else {
var n = cljs.core.first(seq__36757__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37680 = cljs.core.next(seq__36757__$1);
var G__37681 = null;
var G__37682 = (0);
var G__37683 = (0);
seq__36757 = G__37680;
chunk__36758 = G__37681;
count__36759 = G__37682;
i__36760 = G__37683;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36830 = arguments.length;
switch (G__36830) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36851 = arguments.length;
switch (G__36851) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36890 = arguments.length;
switch (G__36890) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37696 = arguments.length;
var i__5770__auto___37697 = (0);
while(true){
if((i__5770__auto___37697 < len__5769__auto___37696)){
args__5775__auto__.push((arguments[i__5770__auto___37697]));

var G__37698 = (i__5770__auto___37697 + (1));
i__5770__auto___37697 = G__37698;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36932_37701 = cljs.core.seq(nodes);
var chunk__36933_37702 = null;
var count__36934_37703 = (0);
var i__36935_37704 = (0);
while(true){
if((i__36935_37704 < count__36934_37703)){
var node_37705 = chunk__36933_37702.cljs$core$IIndexed$_nth$arity$2(null,i__36935_37704);
fragment.appendChild(shadow.dom._to_dom(node_37705));


var G__37706 = seq__36932_37701;
var G__37707 = chunk__36933_37702;
var G__37708 = count__36934_37703;
var G__37709 = (i__36935_37704 + (1));
seq__36932_37701 = G__37706;
chunk__36933_37702 = G__37707;
count__36934_37703 = G__37708;
i__36935_37704 = G__37709;
continue;
} else {
var temp__5804__auto___37710 = cljs.core.seq(seq__36932_37701);
if(temp__5804__auto___37710){
var seq__36932_37711__$1 = temp__5804__auto___37710;
if(cljs.core.chunked_seq_QMARK_(seq__36932_37711__$1)){
var c__5568__auto___37712 = cljs.core.chunk_first(seq__36932_37711__$1);
var G__37713 = cljs.core.chunk_rest(seq__36932_37711__$1);
var G__37714 = c__5568__auto___37712;
var G__37715 = cljs.core.count(c__5568__auto___37712);
var G__37716 = (0);
seq__36932_37701 = G__37713;
chunk__36933_37702 = G__37714;
count__36934_37703 = G__37715;
i__36935_37704 = G__37716;
continue;
} else {
var node_37721 = cljs.core.first(seq__36932_37711__$1);
fragment.appendChild(shadow.dom._to_dom(node_37721));


var G__37722 = cljs.core.next(seq__36932_37711__$1);
var G__37723 = null;
var G__37724 = (0);
var G__37725 = (0);
seq__36932_37701 = G__37722;
chunk__36933_37702 = G__37723;
count__36934_37703 = G__37724;
i__36935_37704 = G__37725;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36919){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36919));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36968_37726 = cljs.core.seq(scripts);
var chunk__36969_37727 = null;
var count__36970_37728 = (0);
var i__36971_37729 = (0);
while(true){
if((i__36971_37729 < count__36970_37728)){
var vec__36986_37730 = chunk__36969_37727.cljs$core$IIndexed$_nth$arity$2(null,i__36971_37729);
var script_tag_37731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36986_37730,(0),null);
var script_body_37732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36986_37730,(1),null);
eval(script_body_37732);


var G__37733 = seq__36968_37726;
var G__37734 = chunk__36969_37727;
var G__37735 = count__36970_37728;
var G__37736 = (i__36971_37729 + (1));
seq__36968_37726 = G__37733;
chunk__36969_37727 = G__37734;
count__36970_37728 = G__37735;
i__36971_37729 = G__37736;
continue;
} else {
var temp__5804__auto___37737 = cljs.core.seq(seq__36968_37726);
if(temp__5804__auto___37737){
var seq__36968_37738__$1 = temp__5804__auto___37737;
if(cljs.core.chunked_seq_QMARK_(seq__36968_37738__$1)){
var c__5568__auto___37739 = cljs.core.chunk_first(seq__36968_37738__$1);
var G__37740 = cljs.core.chunk_rest(seq__36968_37738__$1);
var G__37741 = c__5568__auto___37739;
var G__37742 = cljs.core.count(c__5568__auto___37739);
var G__37743 = (0);
seq__36968_37726 = G__37740;
chunk__36969_37727 = G__37741;
count__36970_37728 = G__37742;
i__36971_37729 = G__37743;
continue;
} else {
var vec__36994_37744 = cljs.core.first(seq__36968_37738__$1);
var script_tag_37745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994_37744,(0),null);
var script_body_37746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994_37744,(1),null);
eval(script_body_37746);


var G__37747 = cljs.core.next(seq__36968_37738__$1);
var G__37748 = null;
var G__37749 = (0);
var G__37750 = (0);
seq__36968_37726 = G__37747;
chunk__36969_37727 = G__37748;
count__36970_37728 = G__37749;
i__36971_37729 = G__37750;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36999){
var vec__37000 = p__36999;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37000,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37000,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37015 = arguments.length;
switch (G__37015) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37026 = cljs.core.seq(style_keys);
var chunk__37027 = null;
var count__37028 = (0);
var i__37029 = (0);
while(true){
if((i__37029 < count__37028)){
var it = chunk__37027.cljs$core$IIndexed$_nth$arity$2(null,i__37029);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37759 = seq__37026;
var G__37760 = chunk__37027;
var G__37761 = count__37028;
var G__37762 = (i__37029 + (1));
seq__37026 = G__37759;
chunk__37027 = G__37760;
count__37028 = G__37761;
i__37029 = G__37762;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37026);
if(temp__5804__auto__){
var seq__37026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37026__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37026__$1);
var G__37765 = cljs.core.chunk_rest(seq__37026__$1);
var G__37766 = c__5568__auto__;
var G__37767 = cljs.core.count(c__5568__auto__);
var G__37768 = (0);
seq__37026 = G__37765;
chunk__37027 = G__37766;
count__37028 = G__37767;
i__37029 = G__37768;
continue;
} else {
var it = cljs.core.first(seq__37026__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37770 = cljs.core.next(seq__37026__$1);
var G__37771 = null;
var G__37772 = (0);
var G__37773 = (0);
seq__37026 = G__37770;
chunk__37027 = G__37771;
count__37028 = G__37772;
i__37029 = G__37773;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37041,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37048 = k37041;
var G__37048__$1 = (((G__37048 instanceof cljs.core.Keyword))?G__37048.fqn:null);
switch (G__37048__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37041,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37049){
var vec__37050 = p__37049;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37050,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37050,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37040){
var self__ = this;
var G__37040__$1 = this;
return (new cljs.core.RecordIter((0),G__37040__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37042,other37043){
var self__ = this;
var this37042__$1 = this;
return (((!((other37043 == null)))) && ((((this37042__$1.constructor === other37043.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37042__$1.x,other37043.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37042__$1.y,other37043.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37042__$1.__extmap,other37043.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37041){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37053 = k37041;
var G__37053__$1 = (((G__37053 instanceof cljs.core.Keyword))?G__37053.fqn:null);
switch (G__37053__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37041);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37040){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37054 = cljs.core.keyword_identical_QMARK_;
var expr__37055 = k__5352__auto__;
if(cljs.core.truth_((pred__37054.cljs$core$IFn$_invoke$arity$2 ? pred__37054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37055) : pred__37054.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37055)))){
return (new shadow.dom.Coordinate(G__37040,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37054.cljs$core$IFn$_invoke$arity$2 ? pred__37054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37055) : pred__37054.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37055)))){
return (new shadow.dom.Coordinate(self__.x,G__37040,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37040),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37040){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37040,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37044){
var extmap__5385__auto__ = (function (){var G__37061 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37044,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37044)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37061);
} else {
return G__37061;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37044),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37044),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37066,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37071 = k37066;
var G__37071__$1 = (((G__37071 instanceof cljs.core.Keyword))?G__37071.fqn:null);
switch (G__37071__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37066,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37072){
var vec__37073 = p__37072;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37073,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37065){
var self__ = this;
var G__37065__$1 = this;
return (new cljs.core.RecordIter((0),G__37065__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37067,other37068){
var self__ = this;
var this37067__$1 = this;
return (((!((other37068 == null)))) && ((((this37067__$1.constructor === other37068.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37067__$1.w,other37068.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37067__$1.h,other37068.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37067__$1.__extmap,other37068.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37066){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37086 = k37066;
var G__37086__$1 = (((G__37086 instanceof cljs.core.Keyword))?G__37086.fqn:null);
switch (G__37086__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37066);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37065){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37087 = cljs.core.keyword_identical_QMARK_;
var expr__37088 = k__5352__auto__;
if(cljs.core.truth_((pred__37087.cljs$core$IFn$_invoke$arity$2 ? pred__37087.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37088) : pred__37087.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37088)))){
return (new shadow.dom.Size(G__37065,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37087.cljs$core$IFn$_invoke$arity$2 ? pred__37087.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37088) : pred__37087.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37088)))){
return (new shadow.dom.Size(self__.w,G__37065,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37065),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37065){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37065,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37069){
var extmap__5385__auto__ = (function (){var G__37097 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37069,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37069)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37097);
} else {
return G__37097;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37069),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37069),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37829 = (i + (1));
var G__37830 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37829;
ret = G__37830;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37106){
var vec__37107 = p__37106;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37111 = arguments.length;
switch (G__37111) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37837 = ps;
var G__37838 = (i + (1));
el__$1 = G__37837;
i = G__37838;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37123 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37123,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37123,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37123,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37126_37847 = cljs.core.seq(props);
var chunk__37127_37848 = null;
var count__37128_37849 = (0);
var i__37129_37850 = (0);
while(true){
if((i__37129_37850 < count__37128_37849)){
var vec__37142_37851 = chunk__37127_37848.cljs$core$IIndexed$_nth$arity$2(null,i__37129_37850);
var k_37852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37142_37851,(0),null);
var v_37853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37142_37851,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37852);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37852),v_37853);


var G__37856 = seq__37126_37847;
var G__37857 = chunk__37127_37848;
var G__37858 = count__37128_37849;
var G__37859 = (i__37129_37850 + (1));
seq__37126_37847 = G__37856;
chunk__37127_37848 = G__37857;
count__37128_37849 = G__37858;
i__37129_37850 = G__37859;
continue;
} else {
var temp__5804__auto___37860 = cljs.core.seq(seq__37126_37847);
if(temp__5804__auto___37860){
var seq__37126_37861__$1 = temp__5804__auto___37860;
if(cljs.core.chunked_seq_QMARK_(seq__37126_37861__$1)){
var c__5568__auto___37862 = cljs.core.chunk_first(seq__37126_37861__$1);
var G__37863 = cljs.core.chunk_rest(seq__37126_37861__$1);
var G__37864 = c__5568__auto___37862;
var G__37865 = cljs.core.count(c__5568__auto___37862);
var G__37866 = (0);
seq__37126_37847 = G__37863;
chunk__37127_37848 = G__37864;
count__37128_37849 = G__37865;
i__37129_37850 = G__37866;
continue;
} else {
var vec__37148_37867 = cljs.core.first(seq__37126_37861__$1);
var k_37868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37148_37867,(0),null);
var v_37869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37148_37867,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37868);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37868),v_37869);


var G__37874 = cljs.core.next(seq__37126_37861__$1);
var G__37875 = null;
var G__37876 = (0);
var G__37877 = (0);
seq__37126_37847 = G__37874;
chunk__37127_37848 = G__37875;
count__37128_37849 = G__37876;
i__37129_37850 = G__37877;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37164 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37164,(1),null);
var seq__37167_37878 = cljs.core.seq(node_children);
var chunk__37169_37879 = null;
var count__37170_37880 = (0);
var i__37171_37881 = (0);
while(true){
if((i__37171_37881 < count__37170_37880)){
var child_struct_37882 = chunk__37169_37879.cljs$core$IIndexed$_nth$arity$2(null,i__37171_37881);
if((!((child_struct_37882 == null)))){
if(typeof child_struct_37882 === 'string'){
var text_37883 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37883),child_struct_37882].join(''));
} else {
var children_37884 = shadow.dom.svg_node(child_struct_37882);
if(cljs.core.seq_QMARK_(children_37884)){
var seq__37230_37885 = cljs.core.seq(children_37884);
var chunk__37232_37886 = null;
var count__37233_37887 = (0);
var i__37234_37888 = (0);
while(true){
if((i__37234_37888 < count__37233_37887)){
var child_37889 = chunk__37232_37886.cljs$core$IIndexed$_nth$arity$2(null,i__37234_37888);
if(cljs.core.truth_(child_37889)){
node.appendChild(child_37889);


var G__37890 = seq__37230_37885;
var G__37891 = chunk__37232_37886;
var G__37892 = count__37233_37887;
var G__37893 = (i__37234_37888 + (1));
seq__37230_37885 = G__37890;
chunk__37232_37886 = G__37891;
count__37233_37887 = G__37892;
i__37234_37888 = G__37893;
continue;
} else {
var G__37894 = seq__37230_37885;
var G__37895 = chunk__37232_37886;
var G__37896 = count__37233_37887;
var G__37897 = (i__37234_37888 + (1));
seq__37230_37885 = G__37894;
chunk__37232_37886 = G__37895;
count__37233_37887 = G__37896;
i__37234_37888 = G__37897;
continue;
}
} else {
var temp__5804__auto___37900 = cljs.core.seq(seq__37230_37885);
if(temp__5804__auto___37900){
var seq__37230_37901__$1 = temp__5804__auto___37900;
if(cljs.core.chunked_seq_QMARK_(seq__37230_37901__$1)){
var c__5568__auto___37902 = cljs.core.chunk_first(seq__37230_37901__$1);
var G__37903 = cljs.core.chunk_rest(seq__37230_37901__$1);
var G__37904 = c__5568__auto___37902;
var G__37905 = cljs.core.count(c__5568__auto___37902);
var G__37906 = (0);
seq__37230_37885 = G__37903;
chunk__37232_37886 = G__37904;
count__37233_37887 = G__37905;
i__37234_37888 = G__37906;
continue;
} else {
var child_37907 = cljs.core.first(seq__37230_37901__$1);
if(cljs.core.truth_(child_37907)){
node.appendChild(child_37907);


var G__37908 = cljs.core.next(seq__37230_37901__$1);
var G__37909 = null;
var G__37910 = (0);
var G__37911 = (0);
seq__37230_37885 = G__37908;
chunk__37232_37886 = G__37909;
count__37233_37887 = G__37910;
i__37234_37888 = G__37911;
continue;
} else {
var G__37912 = cljs.core.next(seq__37230_37901__$1);
var G__37913 = null;
var G__37914 = (0);
var G__37915 = (0);
seq__37230_37885 = G__37912;
chunk__37232_37886 = G__37913;
count__37233_37887 = G__37914;
i__37234_37888 = G__37915;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37884);
}
}


var G__37916 = seq__37167_37878;
var G__37917 = chunk__37169_37879;
var G__37918 = count__37170_37880;
var G__37919 = (i__37171_37881 + (1));
seq__37167_37878 = G__37916;
chunk__37169_37879 = G__37917;
count__37170_37880 = G__37918;
i__37171_37881 = G__37919;
continue;
} else {
var G__37920 = seq__37167_37878;
var G__37921 = chunk__37169_37879;
var G__37922 = count__37170_37880;
var G__37923 = (i__37171_37881 + (1));
seq__37167_37878 = G__37920;
chunk__37169_37879 = G__37921;
count__37170_37880 = G__37922;
i__37171_37881 = G__37923;
continue;
}
} else {
var temp__5804__auto___37924 = cljs.core.seq(seq__37167_37878);
if(temp__5804__auto___37924){
var seq__37167_37925__$1 = temp__5804__auto___37924;
if(cljs.core.chunked_seq_QMARK_(seq__37167_37925__$1)){
var c__5568__auto___37926 = cljs.core.chunk_first(seq__37167_37925__$1);
var G__37927 = cljs.core.chunk_rest(seq__37167_37925__$1);
var G__37928 = c__5568__auto___37926;
var G__37929 = cljs.core.count(c__5568__auto___37926);
var G__37930 = (0);
seq__37167_37878 = G__37927;
chunk__37169_37879 = G__37928;
count__37170_37880 = G__37929;
i__37171_37881 = G__37930;
continue;
} else {
var child_struct_37931 = cljs.core.first(seq__37167_37925__$1);
if((!((child_struct_37931 == null)))){
if(typeof child_struct_37931 === 'string'){
var text_37932 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37932),child_struct_37931].join(''));
} else {
var children_37933 = shadow.dom.svg_node(child_struct_37931);
if(cljs.core.seq_QMARK_(children_37933)){
var seq__37313_37934 = cljs.core.seq(children_37933);
var chunk__37315_37935 = null;
var count__37316_37936 = (0);
var i__37317_37937 = (0);
while(true){
if((i__37317_37937 < count__37316_37936)){
var child_37938 = chunk__37315_37935.cljs$core$IIndexed$_nth$arity$2(null,i__37317_37937);
if(cljs.core.truth_(child_37938)){
node.appendChild(child_37938);


var G__37940 = seq__37313_37934;
var G__37941 = chunk__37315_37935;
var G__37942 = count__37316_37936;
var G__37943 = (i__37317_37937 + (1));
seq__37313_37934 = G__37940;
chunk__37315_37935 = G__37941;
count__37316_37936 = G__37942;
i__37317_37937 = G__37943;
continue;
} else {
var G__37944 = seq__37313_37934;
var G__37945 = chunk__37315_37935;
var G__37946 = count__37316_37936;
var G__37947 = (i__37317_37937 + (1));
seq__37313_37934 = G__37944;
chunk__37315_37935 = G__37945;
count__37316_37936 = G__37946;
i__37317_37937 = G__37947;
continue;
}
} else {
var temp__5804__auto___37948__$1 = cljs.core.seq(seq__37313_37934);
if(temp__5804__auto___37948__$1){
var seq__37313_37949__$1 = temp__5804__auto___37948__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37313_37949__$1)){
var c__5568__auto___37950 = cljs.core.chunk_first(seq__37313_37949__$1);
var G__37951 = cljs.core.chunk_rest(seq__37313_37949__$1);
var G__37952 = c__5568__auto___37950;
var G__37953 = cljs.core.count(c__5568__auto___37950);
var G__37954 = (0);
seq__37313_37934 = G__37951;
chunk__37315_37935 = G__37952;
count__37316_37936 = G__37953;
i__37317_37937 = G__37954;
continue;
} else {
var child_37955 = cljs.core.first(seq__37313_37949__$1);
if(cljs.core.truth_(child_37955)){
node.appendChild(child_37955);


var G__37956 = cljs.core.next(seq__37313_37949__$1);
var G__37957 = null;
var G__37958 = (0);
var G__37959 = (0);
seq__37313_37934 = G__37956;
chunk__37315_37935 = G__37957;
count__37316_37936 = G__37958;
i__37317_37937 = G__37959;
continue;
} else {
var G__37960 = cljs.core.next(seq__37313_37949__$1);
var G__37961 = null;
var G__37962 = (0);
var G__37963 = (0);
seq__37313_37934 = G__37960;
chunk__37315_37935 = G__37961;
count__37316_37936 = G__37962;
i__37317_37937 = G__37963;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37933);
}
}


var G__37964 = cljs.core.next(seq__37167_37925__$1);
var G__37965 = null;
var G__37966 = (0);
var G__37967 = (0);
seq__37167_37878 = G__37964;
chunk__37169_37879 = G__37965;
count__37170_37880 = G__37966;
i__37171_37881 = G__37967;
continue;
} else {
var G__37969 = cljs.core.next(seq__37167_37925__$1);
var G__37970 = null;
var G__37971 = (0);
var G__37972 = (0);
seq__37167_37878 = G__37969;
chunk__37169_37879 = G__37970;
count__37170_37880 = G__37971;
i__37171_37881 = G__37972;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37975 = arguments.length;
var i__5770__auto___37976 = (0);
while(true){
if((i__5770__auto___37976 < len__5769__auto___37975)){
args__5775__auto__.push((arguments[i__5770__auto___37976]));

var G__37977 = (i__5770__auto___37976 + (1));
i__5770__auto___37976 = G__37977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37340){
var G__37341 = cljs.core.first(seq37340);
var seq37340__$1 = cljs.core.next(seq37340);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37341,seq37340__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37351 = arguments.length;
switch (G__37351) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__31857__auto___37981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_37379){
var state_val_37380 = (state_37379[(1)]);
if((state_val_37380 === (1))){
var state_37379__$1 = state_37379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37379__$1,(2),once_or_cleanup);
} else {
if((state_val_37380 === (2))){
var inst_37376 = (state_37379[(2)]);
var inst_37377 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37379__$1 = (function (){var statearr_37394 = state_37379;
(statearr_37394[(7)] = inst_37376);

return statearr_37394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37379__$1,inst_37377);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31505__auto__ = null;
var shadow$dom$state_machine__31505__auto____0 = (function (){
var statearr_37395 = [null,null,null,null,null,null,null,null];
(statearr_37395[(0)] = shadow$dom$state_machine__31505__auto__);

(statearr_37395[(1)] = (1));

return statearr_37395;
});
var shadow$dom$state_machine__31505__auto____1 = (function (state_37379){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_37379);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e37401){var ex__31508__auto__ = e37401;
var statearr_37402_37989 = state_37379;
(statearr_37402_37989[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_37379[(4)]))){
var statearr_37403_37990 = state_37379;
(statearr_37403_37990[(1)] = cljs.core.first((state_37379[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37992 = state_37379;
state_37379 = G__37992;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
shadow$dom$state_machine__31505__auto__ = function(state_37379){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31505__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31505__auto____1.call(this,state_37379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31505__auto____0;
shadow$dom$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31505__auto____1;
return shadow$dom$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_37405 = f__31858__auto__();
(statearr_37405[(6)] = c__31857__auto___37981);

return statearr_37405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
