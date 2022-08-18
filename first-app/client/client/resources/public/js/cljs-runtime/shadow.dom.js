goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37639 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_37639(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37641 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_37641(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36400 = coll;
var G__36401 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36400,G__36401) : shadow.dom.lazy_native_coll_seq.call(null,G__36400,G__36401));
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
var G__36449 = arguments.length;
switch (G__36449) {
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
var G__36471 = arguments.length;
switch (G__36471) {
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
var G__36484 = arguments.length;
switch (G__36484) {
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
var G__36504 = arguments.length;
switch (G__36504) {
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
var G__36520 = arguments.length;
switch (G__36520) {
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
var G__36550 = arguments.length;
switch (G__36550) {
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
}catch (e36565){if((e36565 instanceof Object)){
var e = e36565;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36565;

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
var seq__36580 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36581 = null;
var count__36582 = (0);
var i__36583 = (0);
while(true){
if((i__36583 < count__36582)){
var el = chunk__36581.cljs$core$IIndexed$_nth$arity$2(null,i__36583);
var handler_37687__$1 = ((function (seq__36580,chunk__36581,count__36582,i__36583,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36580,chunk__36581,count__36582,i__36583,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37687__$1);


var G__37688 = seq__36580;
var G__37689 = chunk__36581;
var G__37690 = count__36582;
var G__37691 = (i__36583 + (1));
seq__36580 = G__37688;
chunk__36581 = G__37689;
count__36582 = G__37690;
i__36583 = G__37691;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36580);
if(temp__5804__auto__){
var seq__36580__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36580__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36580__$1);
var G__37696 = cljs.core.chunk_rest(seq__36580__$1);
var G__37697 = c__5568__auto__;
var G__37698 = cljs.core.count(c__5568__auto__);
var G__37699 = (0);
seq__36580 = G__37696;
chunk__36581 = G__37697;
count__36582 = G__37698;
i__36583 = G__37699;
continue;
} else {
var el = cljs.core.first(seq__36580__$1);
var handler_37700__$1 = ((function (seq__36580,chunk__36581,count__36582,i__36583,el,seq__36580__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36580,chunk__36581,count__36582,i__36583,el,seq__36580__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37700__$1);


var G__37701 = cljs.core.next(seq__36580__$1);
var G__37702 = null;
var G__37703 = (0);
var G__37704 = (0);
seq__36580 = G__37701;
chunk__36581 = G__37702;
count__36582 = G__37703;
i__36583 = G__37704;
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
var G__36609 = arguments.length;
switch (G__36609) {
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
var seq__36627 = cljs.core.seq(events);
var chunk__36628 = null;
var count__36629 = (0);
var i__36630 = (0);
while(true){
if((i__36630 < count__36629)){
var vec__36644 = chunk__36628.cljs$core$IIndexed$_nth$arity$2(null,i__36630);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36644,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37714 = seq__36627;
var G__37715 = chunk__36628;
var G__37716 = count__36629;
var G__37717 = (i__36630 + (1));
seq__36627 = G__37714;
chunk__36628 = G__37715;
count__36629 = G__37716;
i__36630 = G__37717;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36627);
if(temp__5804__auto__){
var seq__36627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36627__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36627__$1);
var G__37718 = cljs.core.chunk_rest(seq__36627__$1);
var G__37719 = c__5568__auto__;
var G__37720 = cljs.core.count(c__5568__auto__);
var G__37721 = (0);
seq__36627 = G__37718;
chunk__36628 = G__37719;
count__36629 = G__37720;
i__36630 = G__37721;
continue;
} else {
var vec__36652 = cljs.core.first(seq__36627__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36652,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37725 = cljs.core.next(seq__36627__$1);
var G__37726 = null;
var G__37727 = (0);
var G__37728 = (0);
seq__36627 = G__37725;
chunk__36628 = G__37726;
count__36629 = G__37727;
i__36630 = G__37728;
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
var seq__36660 = cljs.core.seq(styles);
var chunk__36661 = null;
var count__36662 = (0);
var i__36663 = (0);
while(true){
if((i__36663 < count__36662)){
var vec__36682 = chunk__36661.cljs$core$IIndexed$_nth$arity$2(null,i__36663);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36682,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37732 = seq__36660;
var G__37733 = chunk__36661;
var G__37734 = count__36662;
var G__37735 = (i__36663 + (1));
seq__36660 = G__37732;
chunk__36661 = G__37733;
count__36662 = G__37734;
i__36663 = G__37735;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36660);
if(temp__5804__auto__){
var seq__36660__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36660__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36660__$1);
var G__37736 = cljs.core.chunk_rest(seq__36660__$1);
var G__37737 = c__5568__auto__;
var G__37738 = cljs.core.count(c__5568__auto__);
var G__37739 = (0);
seq__36660 = G__37736;
chunk__36661 = G__37737;
count__36662 = G__37738;
i__36663 = G__37739;
continue;
} else {
var vec__36695 = cljs.core.first(seq__36660__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37740 = cljs.core.next(seq__36660__$1);
var G__37741 = null;
var G__37742 = (0);
var G__37743 = (0);
seq__36660 = G__37740;
chunk__36661 = G__37741;
count__36662 = G__37742;
i__36663 = G__37743;
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
var G__36719_37747 = key;
var G__36719_37748__$1 = (((G__36719_37747 instanceof cljs.core.Keyword))?G__36719_37747.fqn:null);
switch (G__36719_37748__$1) {
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
var ks_37753 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37753,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37753,"aria-");
}
})())){
el.setAttribute(ks_37753,value);
} else {
(el[ks_37753] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36747){
var map__36748 = p__36747;
var map__36748__$1 = cljs.core.__destructure_map(map__36748);
var props = map__36748__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36748__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36751 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36759 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36759,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36759;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36767 = arguments.length;
switch (G__36767) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36790){
var vec__36791 = p__36790;
var seq__36792 = cljs.core.seq(vec__36791);
var first__36793 = cljs.core.first(seq__36792);
var seq__36792__$1 = cljs.core.next(seq__36792);
var nn = first__36793;
var first__36793__$1 = cljs.core.first(seq__36792__$1);
var seq__36792__$2 = cljs.core.next(seq__36792__$1);
var np = first__36793__$1;
var nc = seq__36792__$2;
var node = vec__36791;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36799 = nn;
var G__36800 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36799,G__36800) : create_fn.call(null,G__36799,G__36800));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36801 = nn;
var G__36802 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36801,G__36802) : create_fn.call(null,G__36801,G__36802));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36806 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806,(1),null);
var seq__36809_37765 = cljs.core.seq(node_children);
var chunk__36810_37766 = null;
var count__36811_37767 = (0);
var i__36812_37768 = (0);
while(true){
if((i__36812_37768 < count__36811_37767)){
var child_struct_37773 = chunk__36810_37766.cljs$core$IIndexed$_nth$arity$2(null,i__36812_37768);
var children_37774 = shadow.dom.dom_node(child_struct_37773);
if(cljs.core.seq_QMARK_(children_37774)){
var seq__36862_37775 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37774));
var chunk__36864_37776 = null;
var count__36865_37777 = (0);
var i__36866_37778 = (0);
while(true){
if((i__36866_37778 < count__36865_37777)){
var child_37779 = chunk__36864_37776.cljs$core$IIndexed$_nth$arity$2(null,i__36866_37778);
if(cljs.core.truth_(child_37779)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37779);


var G__37780 = seq__36862_37775;
var G__37781 = chunk__36864_37776;
var G__37782 = count__36865_37777;
var G__37783 = (i__36866_37778 + (1));
seq__36862_37775 = G__37780;
chunk__36864_37776 = G__37781;
count__36865_37777 = G__37782;
i__36866_37778 = G__37783;
continue;
} else {
var G__37784 = seq__36862_37775;
var G__37785 = chunk__36864_37776;
var G__37786 = count__36865_37777;
var G__37787 = (i__36866_37778 + (1));
seq__36862_37775 = G__37784;
chunk__36864_37776 = G__37785;
count__36865_37777 = G__37786;
i__36866_37778 = G__37787;
continue;
}
} else {
var temp__5804__auto___37788 = cljs.core.seq(seq__36862_37775);
if(temp__5804__auto___37788){
var seq__36862_37789__$1 = temp__5804__auto___37788;
if(cljs.core.chunked_seq_QMARK_(seq__36862_37789__$1)){
var c__5568__auto___37790 = cljs.core.chunk_first(seq__36862_37789__$1);
var G__37791 = cljs.core.chunk_rest(seq__36862_37789__$1);
var G__37792 = c__5568__auto___37790;
var G__37793 = cljs.core.count(c__5568__auto___37790);
var G__37794 = (0);
seq__36862_37775 = G__37791;
chunk__36864_37776 = G__37792;
count__36865_37777 = G__37793;
i__36866_37778 = G__37794;
continue;
} else {
var child_37795 = cljs.core.first(seq__36862_37789__$1);
if(cljs.core.truth_(child_37795)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37795);


var G__37796 = cljs.core.next(seq__36862_37789__$1);
var G__37797 = null;
var G__37798 = (0);
var G__37799 = (0);
seq__36862_37775 = G__37796;
chunk__36864_37776 = G__37797;
count__36865_37777 = G__37798;
i__36866_37778 = G__37799;
continue;
} else {
var G__37800 = cljs.core.next(seq__36862_37789__$1);
var G__37801 = null;
var G__37802 = (0);
var G__37803 = (0);
seq__36862_37775 = G__37800;
chunk__36864_37776 = G__37801;
count__36865_37777 = G__37802;
i__36866_37778 = G__37803;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37774);
}


var G__37804 = seq__36809_37765;
var G__37805 = chunk__36810_37766;
var G__37806 = count__36811_37767;
var G__37807 = (i__36812_37768 + (1));
seq__36809_37765 = G__37804;
chunk__36810_37766 = G__37805;
count__36811_37767 = G__37806;
i__36812_37768 = G__37807;
continue;
} else {
var temp__5804__auto___37808 = cljs.core.seq(seq__36809_37765);
if(temp__5804__auto___37808){
var seq__36809_37809__$1 = temp__5804__auto___37808;
if(cljs.core.chunked_seq_QMARK_(seq__36809_37809__$1)){
var c__5568__auto___37810 = cljs.core.chunk_first(seq__36809_37809__$1);
var G__37811 = cljs.core.chunk_rest(seq__36809_37809__$1);
var G__37812 = c__5568__auto___37810;
var G__37813 = cljs.core.count(c__5568__auto___37810);
var G__37814 = (0);
seq__36809_37765 = G__37811;
chunk__36810_37766 = G__37812;
count__36811_37767 = G__37813;
i__36812_37768 = G__37814;
continue;
} else {
var child_struct_37815 = cljs.core.first(seq__36809_37809__$1);
var children_37816 = shadow.dom.dom_node(child_struct_37815);
if(cljs.core.seq_QMARK_(children_37816)){
var seq__36885_37817 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37816));
var chunk__36887_37818 = null;
var count__36888_37819 = (0);
var i__36889_37820 = (0);
while(true){
if((i__36889_37820 < count__36888_37819)){
var child_37821 = chunk__36887_37818.cljs$core$IIndexed$_nth$arity$2(null,i__36889_37820);
if(cljs.core.truth_(child_37821)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37821);


var G__37822 = seq__36885_37817;
var G__37823 = chunk__36887_37818;
var G__37824 = count__36888_37819;
var G__37825 = (i__36889_37820 + (1));
seq__36885_37817 = G__37822;
chunk__36887_37818 = G__37823;
count__36888_37819 = G__37824;
i__36889_37820 = G__37825;
continue;
} else {
var G__37826 = seq__36885_37817;
var G__37827 = chunk__36887_37818;
var G__37828 = count__36888_37819;
var G__37829 = (i__36889_37820 + (1));
seq__36885_37817 = G__37826;
chunk__36887_37818 = G__37827;
count__36888_37819 = G__37828;
i__36889_37820 = G__37829;
continue;
}
} else {
var temp__5804__auto___37830__$1 = cljs.core.seq(seq__36885_37817);
if(temp__5804__auto___37830__$1){
var seq__36885_37831__$1 = temp__5804__auto___37830__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36885_37831__$1)){
var c__5568__auto___37832 = cljs.core.chunk_first(seq__36885_37831__$1);
var G__37833 = cljs.core.chunk_rest(seq__36885_37831__$1);
var G__37834 = c__5568__auto___37832;
var G__37835 = cljs.core.count(c__5568__auto___37832);
var G__37836 = (0);
seq__36885_37817 = G__37833;
chunk__36887_37818 = G__37834;
count__36888_37819 = G__37835;
i__36889_37820 = G__37836;
continue;
} else {
var child_37837 = cljs.core.first(seq__36885_37831__$1);
if(cljs.core.truth_(child_37837)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37837);


var G__37838 = cljs.core.next(seq__36885_37831__$1);
var G__37839 = null;
var G__37840 = (0);
var G__37841 = (0);
seq__36885_37817 = G__37838;
chunk__36887_37818 = G__37839;
count__36888_37819 = G__37840;
i__36889_37820 = G__37841;
continue;
} else {
var G__37842 = cljs.core.next(seq__36885_37831__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__36885_37817 = G__37842;
chunk__36887_37818 = G__37843;
count__36888_37819 = G__37844;
i__36889_37820 = G__37845;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37816);
}


var G__37846 = cljs.core.next(seq__36809_37809__$1);
var G__37847 = null;
var G__37848 = (0);
var G__37849 = (0);
seq__36809_37765 = G__37846;
chunk__36810_37766 = G__37847;
count__36811_37767 = G__37848;
i__36812_37768 = G__37849;
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
var seq__36932 = cljs.core.seq(node);
var chunk__36933 = null;
var count__36934 = (0);
var i__36935 = (0);
while(true){
if((i__36935 < count__36934)){
var n = chunk__36933.cljs$core$IIndexed$_nth$arity$2(null,i__36935);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37850 = seq__36932;
var G__37851 = chunk__36933;
var G__37852 = count__36934;
var G__37853 = (i__36935 + (1));
seq__36932 = G__37850;
chunk__36933 = G__37851;
count__36934 = G__37852;
i__36935 = G__37853;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36932);
if(temp__5804__auto__){
var seq__36932__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36932__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36932__$1);
var G__37854 = cljs.core.chunk_rest(seq__36932__$1);
var G__37855 = c__5568__auto__;
var G__37856 = cljs.core.count(c__5568__auto__);
var G__37857 = (0);
seq__36932 = G__37854;
chunk__36933 = G__37855;
count__36934 = G__37856;
i__36935 = G__37857;
continue;
} else {
var n = cljs.core.first(seq__36932__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37858 = cljs.core.next(seq__36932__$1);
var G__37859 = null;
var G__37860 = (0);
var G__37861 = (0);
seq__36932 = G__37858;
chunk__36933 = G__37859;
count__36934 = G__37860;
i__36935 = G__37861;
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
var G__36958 = arguments.length;
switch (G__36958) {
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
var G__36966 = arguments.length;
switch (G__36966) {
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
var G__36992 = arguments.length;
switch (G__36992) {
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
var len__5769__auto___37866 = arguments.length;
var i__5770__auto___37867 = (0);
while(true){
if((i__5770__auto___37867 < len__5769__auto___37866)){
args__5775__auto__.push((arguments[i__5770__auto___37867]));

var G__37868 = (i__5770__auto___37867 + (1));
i__5770__auto___37867 = G__37868;
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
var seq__37032_37869 = cljs.core.seq(nodes);
var chunk__37033_37870 = null;
var count__37034_37871 = (0);
var i__37035_37872 = (0);
while(true){
if((i__37035_37872 < count__37034_37871)){
var node_37873 = chunk__37033_37870.cljs$core$IIndexed$_nth$arity$2(null,i__37035_37872);
fragment.appendChild(shadow.dom._to_dom(node_37873));


var G__37874 = seq__37032_37869;
var G__37875 = chunk__37033_37870;
var G__37876 = count__37034_37871;
var G__37877 = (i__37035_37872 + (1));
seq__37032_37869 = G__37874;
chunk__37033_37870 = G__37875;
count__37034_37871 = G__37876;
i__37035_37872 = G__37877;
continue;
} else {
var temp__5804__auto___37878 = cljs.core.seq(seq__37032_37869);
if(temp__5804__auto___37878){
var seq__37032_37879__$1 = temp__5804__auto___37878;
if(cljs.core.chunked_seq_QMARK_(seq__37032_37879__$1)){
var c__5568__auto___37880 = cljs.core.chunk_first(seq__37032_37879__$1);
var G__37881 = cljs.core.chunk_rest(seq__37032_37879__$1);
var G__37882 = c__5568__auto___37880;
var G__37883 = cljs.core.count(c__5568__auto___37880);
var G__37884 = (0);
seq__37032_37869 = G__37881;
chunk__37033_37870 = G__37882;
count__37034_37871 = G__37883;
i__37035_37872 = G__37884;
continue;
} else {
var node_37885 = cljs.core.first(seq__37032_37879__$1);
fragment.appendChild(shadow.dom._to_dom(node_37885));


var G__37886 = cljs.core.next(seq__37032_37879__$1);
var G__37887 = null;
var G__37888 = (0);
var G__37889 = (0);
seq__37032_37869 = G__37886;
chunk__37033_37870 = G__37887;
count__37034_37871 = G__37888;
i__37035_37872 = G__37889;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37023){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37023));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37065_37890 = cljs.core.seq(scripts);
var chunk__37066_37891 = null;
var count__37067_37892 = (0);
var i__37068_37893 = (0);
while(true){
if((i__37068_37893 < count__37067_37892)){
var vec__37083_37894 = chunk__37066_37891.cljs$core$IIndexed$_nth$arity$2(null,i__37068_37893);
var script_tag_37895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37083_37894,(0),null);
var script_body_37896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37083_37894,(1),null);
eval(script_body_37896);


var G__37897 = seq__37065_37890;
var G__37898 = chunk__37066_37891;
var G__37899 = count__37067_37892;
var G__37900 = (i__37068_37893 + (1));
seq__37065_37890 = G__37897;
chunk__37066_37891 = G__37898;
count__37067_37892 = G__37899;
i__37068_37893 = G__37900;
continue;
} else {
var temp__5804__auto___37901 = cljs.core.seq(seq__37065_37890);
if(temp__5804__auto___37901){
var seq__37065_37902__$1 = temp__5804__auto___37901;
if(cljs.core.chunked_seq_QMARK_(seq__37065_37902__$1)){
var c__5568__auto___37903 = cljs.core.chunk_first(seq__37065_37902__$1);
var G__37904 = cljs.core.chunk_rest(seq__37065_37902__$1);
var G__37905 = c__5568__auto___37903;
var G__37906 = cljs.core.count(c__5568__auto___37903);
var G__37907 = (0);
seq__37065_37890 = G__37904;
chunk__37066_37891 = G__37905;
count__37067_37892 = G__37906;
i__37068_37893 = G__37907;
continue;
} else {
var vec__37089_37908 = cljs.core.first(seq__37065_37902__$1);
var script_tag_37909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089_37908,(0),null);
var script_body_37910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37089_37908,(1),null);
eval(script_body_37910);


var G__37911 = cljs.core.next(seq__37065_37902__$1);
var G__37912 = null;
var G__37913 = (0);
var G__37914 = (0);
seq__37065_37890 = G__37911;
chunk__37066_37891 = G__37912;
count__37067_37892 = G__37913;
i__37068_37893 = G__37914;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37094){
var vec__37095 = p__37094;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095,(1),null);
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
var G__37133 = arguments.length;
switch (G__37133) {
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
var seq__37231 = cljs.core.seq(style_keys);
var chunk__37232 = null;
var count__37233 = (0);
var i__37234 = (0);
while(true){
if((i__37234 < count__37233)){
var it = chunk__37232.cljs$core$IIndexed$_nth$arity$2(null,i__37234);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37916 = seq__37231;
var G__37917 = chunk__37232;
var G__37918 = count__37233;
var G__37919 = (i__37234 + (1));
seq__37231 = G__37916;
chunk__37232 = G__37917;
count__37233 = G__37918;
i__37234 = G__37919;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37231);
if(temp__5804__auto__){
var seq__37231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37231__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37231__$1);
var G__37920 = cljs.core.chunk_rest(seq__37231__$1);
var G__37921 = c__5568__auto__;
var G__37922 = cljs.core.count(c__5568__auto__);
var G__37923 = (0);
seq__37231 = G__37920;
chunk__37232 = G__37921;
count__37233 = G__37922;
i__37234 = G__37923;
continue;
} else {
var it = cljs.core.first(seq__37231__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37924 = cljs.core.next(seq__37231__$1);
var G__37925 = null;
var G__37926 = (0);
var G__37927 = (0);
seq__37231 = G__37924;
chunk__37232 = G__37925;
count__37233 = G__37926;
i__37234 = G__37927;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37244,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37251 = k37244;
var G__37251__$1 = (((G__37251 instanceof cljs.core.Keyword))?G__37251.fqn:null);
switch (G__37251__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37244,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37256){
var vec__37257 = p__37256;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37257,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37257,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37243){
var self__ = this;
var G__37243__$1 = this;
return (new cljs.core.RecordIter((0),G__37243__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37245,other37246){
var self__ = this;
var this37245__$1 = this;
return (((!((other37246 == null)))) && ((((this37245__$1.constructor === other37246.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37245__$1.x,other37246.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37245__$1.y,other37246.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37245__$1.__extmap,other37246.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37244){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37306 = k37244;
var G__37306__$1 = (((G__37306 instanceof cljs.core.Keyword))?G__37306.fqn:null);
switch (G__37306__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37244);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37243){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37307 = cljs.core.keyword_identical_QMARK_;
var expr__37308 = k__5352__auto__;
if(cljs.core.truth_((pred__37307.cljs$core$IFn$_invoke$arity$2 ? pred__37307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37308) : pred__37307.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37308)))){
return (new shadow.dom.Coordinate(G__37243,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37307.cljs$core$IFn$_invoke$arity$2 ? pred__37307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37308) : pred__37307.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37308)))){
return (new shadow.dom.Coordinate(self__.x,G__37243,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37243),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37243){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37243,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37248){
var extmap__5385__auto__ = (function (){var G__37337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37248,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37248)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37337);
} else {
return G__37337;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37248),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37248),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37395,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37400 = k37395;
var G__37400__$1 = (((G__37400 instanceof cljs.core.Keyword))?G__37400.fqn:null);
switch (G__37400__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37395,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37401){
var vec__37402 = p__37401;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37402,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37402,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37394){
var self__ = this;
var G__37394__$1 = this;
return (new cljs.core.RecordIter((0),G__37394__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37396,other37397){
var self__ = this;
var this37396__$1 = this;
return (((!((other37397 == null)))) && ((((this37396__$1.constructor === other37397.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37396__$1.w,other37397.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37396__$1.h,other37397.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37396__$1.__extmap,other37397.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37395){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37426 = k37395;
var G__37426__$1 = (((G__37426 instanceof cljs.core.Keyword))?G__37426.fqn:null);
switch (G__37426__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37395);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37394){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37427 = cljs.core.keyword_identical_QMARK_;
var expr__37428 = k__5352__auto__;
if(cljs.core.truth_((pred__37427.cljs$core$IFn$_invoke$arity$2 ? pred__37427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37428) : pred__37427.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37428)))){
return (new shadow.dom.Size(G__37394,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37427.cljs$core$IFn$_invoke$arity$2 ? pred__37427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37428) : pred__37427.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37428)))){
return (new shadow.dom.Size(self__.w,G__37394,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37394),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37394){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37394,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37398){
var extmap__5385__auto__ = (function (){var G__37439 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37398,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37398)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37439);
} else {
return G__37439;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37398),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37398),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__37963 = (i + (1));
var G__37964 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37963;
ret = G__37964;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37453){
var vec__37454 = p__37453;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37454,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37458 = arguments.length;
switch (G__37458) {
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
var G__37975 = ps;
var G__37976 = (i + (1));
el__$1 = G__37975;
i = G__37976;
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
var vec__37485 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37485,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37485,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37485,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37488_37988 = cljs.core.seq(props);
var chunk__37489_37989 = null;
var count__37490_37990 = (0);
var i__37491_37991 = (0);
while(true){
if((i__37491_37991 < count__37490_37990)){
var vec__37504_37992 = chunk__37489_37989.cljs$core$IIndexed$_nth$arity$2(null,i__37491_37991);
var k_37993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504_37992,(0),null);
var v_37994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37504_37992,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37993);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37993),v_37994);


var G__37997 = seq__37488_37988;
var G__37998 = chunk__37489_37989;
var G__37999 = count__37490_37990;
var G__38000 = (i__37491_37991 + (1));
seq__37488_37988 = G__37997;
chunk__37489_37989 = G__37998;
count__37490_37990 = G__37999;
i__37491_37991 = G__38000;
continue;
} else {
var temp__5804__auto___38001 = cljs.core.seq(seq__37488_37988);
if(temp__5804__auto___38001){
var seq__37488_38003__$1 = temp__5804__auto___38001;
if(cljs.core.chunked_seq_QMARK_(seq__37488_38003__$1)){
var c__5568__auto___38004 = cljs.core.chunk_first(seq__37488_38003__$1);
var G__38005 = cljs.core.chunk_rest(seq__37488_38003__$1);
var G__38006 = c__5568__auto___38004;
var G__38007 = cljs.core.count(c__5568__auto___38004);
var G__38008 = (0);
seq__37488_37988 = G__38005;
chunk__37489_37989 = G__38006;
count__37490_37990 = G__38007;
i__37491_37991 = G__38008;
continue;
} else {
var vec__37511_38009 = cljs.core.first(seq__37488_38003__$1);
var k_38010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37511_38009,(0),null);
var v_38011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37511_38009,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38010);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38010),v_38011);


var G__38013 = cljs.core.next(seq__37488_38003__$1);
var G__38014 = null;
var G__38015 = (0);
var G__38016 = (0);
seq__37488_37988 = G__38013;
chunk__37489_37989 = G__38014;
count__37490_37990 = G__38015;
i__37491_37991 = G__38016;
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
var vec__37524 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37524,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37524,(1),null);
var seq__37527_38021 = cljs.core.seq(node_children);
var chunk__37529_38022 = null;
var count__37530_38023 = (0);
var i__37531_38024 = (0);
while(true){
if((i__37531_38024 < count__37530_38023)){
var child_struct_38025 = chunk__37529_38022.cljs$core$IIndexed$_nth$arity$2(null,i__37531_38024);
if((!((child_struct_38025 == null)))){
if(typeof child_struct_38025 === 'string'){
var text_38026 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38026),child_struct_38025].join(''));
} else {
var children_38029 = shadow.dom.svg_node(child_struct_38025);
if(cljs.core.seq_QMARK_(children_38029)){
var seq__37559_38031 = cljs.core.seq(children_38029);
var chunk__37561_38032 = null;
var count__37562_38033 = (0);
var i__37563_38034 = (0);
while(true){
if((i__37563_38034 < count__37562_38033)){
var child_38036 = chunk__37561_38032.cljs$core$IIndexed$_nth$arity$2(null,i__37563_38034);
if(cljs.core.truth_(child_38036)){
node.appendChild(child_38036);


var G__38038 = seq__37559_38031;
var G__38039 = chunk__37561_38032;
var G__38040 = count__37562_38033;
var G__38041 = (i__37563_38034 + (1));
seq__37559_38031 = G__38038;
chunk__37561_38032 = G__38039;
count__37562_38033 = G__38040;
i__37563_38034 = G__38041;
continue;
} else {
var G__38043 = seq__37559_38031;
var G__38044 = chunk__37561_38032;
var G__38045 = count__37562_38033;
var G__38046 = (i__37563_38034 + (1));
seq__37559_38031 = G__38043;
chunk__37561_38032 = G__38044;
count__37562_38033 = G__38045;
i__37563_38034 = G__38046;
continue;
}
} else {
var temp__5804__auto___38047 = cljs.core.seq(seq__37559_38031);
if(temp__5804__auto___38047){
var seq__37559_38048__$1 = temp__5804__auto___38047;
if(cljs.core.chunked_seq_QMARK_(seq__37559_38048__$1)){
var c__5568__auto___38049 = cljs.core.chunk_first(seq__37559_38048__$1);
var G__38050 = cljs.core.chunk_rest(seq__37559_38048__$1);
var G__38051 = c__5568__auto___38049;
var G__38052 = cljs.core.count(c__5568__auto___38049);
var G__38053 = (0);
seq__37559_38031 = G__38050;
chunk__37561_38032 = G__38051;
count__37562_38033 = G__38052;
i__37563_38034 = G__38053;
continue;
} else {
var child_38054 = cljs.core.first(seq__37559_38048__$1);
if(cljs.core.truth_(child_38054)){
node.appendChild(child_38054);


var G__38057 = cljs.core.next(seq__37559_38048__$1);
var G__38058 = null;
var G__38059 = (0);
var G__38060 = (0);
seq__37559_38031 = G__38057;
chunk__37561_38032 = G__38058;
count__37562_38033 = G__38059;
i__37563_38034 = G__38060;
continue;
} else {
var G__38061 = cljs.core.next(seq__37559_38048__$1);
var G__38062 = null;
var G__38063 = (0);
var G__38064 = (0);
seq__37559_38031 = G__38061;
chunk__37561_38032 = G__38062;
count__37562_38033 = G__38063;
i__37563_38034 = G__38064;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38029);
}
}


var G__38067 = seq__37527_38021;
var G__38068 = chunk__37529_38022;
var G__38069 = count__37530_38023;
var G__38070 = (i__37531_38024 + (1));
seq__37527_38021 = G__38067;
chunk__37529_38022 = G__38068;
count__37530_38023 = G__38069;
i__37531_38024 = G__38070;
continue;
} else {
var G__38071 = seq__37527_38021;
var G__38072 = chunk__37529_38022;
var G__38073 = count__37530_38023;
var G__38074 = (i__37531_38024 + (1));
seq__37527_38021 = G__38071;
chunk__37529_38022 = G__38072;
count__37530_38023 = G__38073;
i__37531_38024 = G__38074;
continue;
}
} else {
var temp__5804__auto___38076 = cljs.core.seq(seq__37527_38021);
if(temp__5804__auto___38076){
var seq__37527_38078__$1 = temp__5804__auto___38076;
if(cljs.core.chunked_seq_QMARK_(seq__37527_38078__$1)){
var c__5568__auto___38079 = cljs.core.chunk_first(seq__37527_38078__$1);
var G__38081 = cljs.core.chunk_rest(seq__37527_38078__$1);
var G__38082 = c__5568__auto___38079;
var G__38083 = cljs.core.count(c__5568__auto___38079);
var G__38084 = (0);
seq__37527_38021 = G__38081;
chunk__37529_38022 = G__38082;
count__37530_38023 = G__38083;
i__37531_38024 = G__38084;
continue;
} else {
var child_struct_38085 = cljs.core.first(seq__37527_38078__$1);
if((!((child_struct_38085 == null)))){
if(typeof child_struct_38085 === 'string'){
var text_38086 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38086),child_struct_38085].join(''));
} else {
var children_38089 = shadow.dom.svg_node(child_struct_38085);
if(cljs.core.seq_QMARK_(children_38089)){
var seq__37573_38090 = cljs.core.seq(children_38089);
var chunk__37575_38091 = null;
var count__37576_38092 = (0);
var i__37577_38093 = (0);
while(true){
if((i__37577_38093 < count__37576_38092)){
var child_38098 = chunk__37575_38091.cljs$core$IIndexed$_nth$arity$2(null,i__37577_38093);
if(cljs.core.truth_(child_38098)){
node.appendChild(child_38098);


var G__38099 = seq__37573_38090;
var G__38100 = chunk__37575_38091;
var G__38101 = count__37576_38092;
var G__38102 = (i__37577_38093 + (1));
seq__37573_38090 = G__38099;
chunk__37575_38091 = G__38100;
count__37576_38092 = G__38101;
i__37577_38093 = G__38102;
continue;
} else {
var G__38103 = seq__37573_38090;
var G__38104 = chunk__37575_38091;
var G__38105 = count__37576_38092;
var G__38106 = (i__37577_38093 + (1));
seq__37573_38090 = G__38103;
chunk__37575_38091 = G__38104;
count__37576_38092 = G__38105;
i__37577_38093 = G__38106;
continue;
}
} else {
var temp__5804__auto___38107__$1 = cljs.core.seq(seq__37573_38090);
if(temp__5804__auto___38107__$1){
var seq__37573_38108__$1 = temp__5804__auto___38107__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37573_38108__$1)){
var c__5568__auto___38110 = cljs.core.chunk_first(seq__37573_38108__$1);
var G__38112 = cljs.core.chunk_rest(seq__37573_38108__$1);
var G__38113 = c__5568__auto___38110;
var G__38114 = cljs.core.count(c__5568__auto___38110);
var G__38115 = (0);
seq__37573_38090 = G__38112;
chunk__37575_38091 = G__38113;
count__37576_38092 = G__38114;
i__37577_38093 = G__38115;
continue;
} else {
var child_38117 = cljs.core.first(seq__37573_38108__$1);
if(cljs.core.truth_(child_38117)){
node.appendChild(child_38117);


var G__38118 = cljs.core.next(seq__37573_38108__$1);
var G__38119 = null;
var G__38120 = (0);
var G__38121 = (0);
seq__37573_38090 = G__38118;
chunk__37575_38091 = G__38119;
count__37576_38092 = G__38120;
i__37577_38093 = G__38121;
continue;
} else {
var G__38124 = cljs.core.next(seq__37573_38108__$1);
var G__38125 = null;
var G__38126 = (0);
var G__38127 = (0);
seq__37573_38090 = G__38124;
chunk__37575_38091 = G__38125;
count__37576_38092 = G__38126;
i__37577_38093 = G__38127;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38089);
}
}


var G__38128 = cljs.core.next(seq__37527_38078__$1);
var G__38129 = null;
var G__38130 = (0);
var G__38131 = (0);
seq__37527_38021 = G__38128;
chunk__37529_38022 = G__38129;
count__37530_38023 = G__38130;
i__37531_38024 = G__38131;
continue;
} else {
var G__38132 = cljs.core.next(seq__37527_38078__$1);
var G__38133 = null;
var G__38134 = (0);
var G__38135 = (0);
seq__37527_38021 = G__38132;
chunk__37529_38022 = G__38133;
count__37530_38023 = G__38134;
i__37531_38024 = G__38135;
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
var len__5769__auto___38145 = arguments.length;
var i__5770__auto___38147 = (0);
while(true){
if((i__5770__auto___38147 < len__5769__auto___38145)){
args__5775__auto__.push((arguments[i__5770__auto___38147]));

var G__38149 = (i__5770__auto___38147 + (1));
i__5770__auto___38147 = G__38149;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37589){
var G__37590 = cljs.core.first(seq37589);
var seq37589__$1 = cljs.core.next(seq37589);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37590,seq37589__$1);
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
var G__37606 = arguments.length;
switch (G__37606) {
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
var c__32082__auto___38178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_37617){
var state_val_37618 = (state_37617[(1)]);
if((state_val_37618 === (1))){
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37617__$1,(2),once_or_cleanup);
} else {
if((state_val_37618 === (2))){
var inst_37614 = (state_37617[(2)]);
var inst_37615 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37617__$1 = (function (){var statearr_37621 = state_37617;
(statearr_37621[(7)] = inst_37614);

return statearr_37621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37617__$1,inst_37615);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31484__auto__ = null;
var shadow$dom$state_machine__31484__auto____0 = (function (){
var statearr_37622 = [null,null,null,null,null,null,null,null];
(statearr_37622[(0)] = shadow$dom$state_machine__31484__auto__);

(statearr_37622[(1)] = (1));

return statearr_37622;
});
var shadow$dom$state_machine__31484__auto____1 = (function (state_37617){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_37617);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e37623){var ex__31488__auto__ = e37623;
var statearr_37624_38185 = state_37617;
(statearr_37624_38185[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_37617[(4)]))){
var statearr_37626_38186 = state_37617;
(statearr_37626_38186[(1)] = cljs.core.first((state_37617[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38191 = state_37617;
state_37617 = G__38191;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
shadow$dom$state_machine__31484__auto__ = function(state_37617){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31484__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31484__auto____1.call(this,state_37617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31484__auto____0;
shadow$dom$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31484__auto____1;
return shadow$dom$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_37635 = f__32083__auto__();
(statearr_37635[(6)] = c__32082__auto___38178);

return statearr_37635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
