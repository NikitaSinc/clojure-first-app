goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19632 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_19632(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19635 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_19635(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17995 = coll;
var G__17996 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17995,G__17996) : shadow.dom.lazy_native_coll_seq.call(null,G__17995,G__17996));
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
var G__18069 = arguments.length;
switch (G__18069) {
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
var G__18088 = arguments.length;
switch (G__18088) {
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
var G__18107 = arguments.length;
switch (G__18107) {
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
var G__18135 = arguments.length;
switch (G__18135) {
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
var G__18166 = arguments.length;
switch (G__18166) {
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
var G__18206 = arguments.length;
switch (G__18206) {
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
}catch (e18224){if((e18224 instanceof Object)){
var e = e18224;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18224;

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
var seq__18252 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18253 = null;
var count__18254 = (0);
var i__18255 = (0);
while(true){
if((i__18255 < count__18254)){
var el = chunk__18253.cljs$core$IIndexed$_nth$arity$2(null,i__18255);
var handler_19649__$1 = ((function (seq__18252,chunk__18253,count__18254,i__18255,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18252,chunk__18253,count__18254,i__18255,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19649__$1);


var G__19650 = seq__18252;
var G__19651 = chunk__18253;
var G__19652 = count__18254;
var G__19653 = (i__18255 + (1));
seq__18252 = G__19650;
chunk__18253 = G__19651;
count__18254 = G__19652;
i__18255 = G__19653;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18252);
if(temp__5804__auto__){
var seq__18252__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18252__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18252__$1);
var G__19654 = cljs.core.chunk_rest(seq__18252__$1);
var G__19655 = c__5568__auto__;
var G__19656 = cljs.core.count(c__5568__auto__);
var G__19657 = (0);
seq__18252 = G__19654;
chunk__18253 = G__19655;
count__18254 = G__19656;
i__18255 = G__19657;
continue;
} else {
var el = cljs.core.first(seq__18252__$1);
var handler_19659__$1 = ((function (seq__18252,chunk__18253,count__18254,i__18255,el,seq__18252__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18252,chunk__18253,count__18254,i__18255,el,seq__18252__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19659__$1);


var G__19661 = cljs.core.next(seq__18252__$1);
var G__19662 = null;
var G__19663 = (0);
var G__19664 = (0);
seq__18252 = G__19661;
chunk__18253 = G__19662;
count__18254 = G__19663;
i__18255 = G__19664;
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
var G__18302 = arguments.length;
switch (G__18302) {
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
var seq__18353 = cljs.core.seq(events);
var chunk__18354 = null;
var count__18355 = (0);
var i__18356 = (0);
while(true){
if((i__18356 < count__18355)){
var vec__18396 = chunk__18354.cljs$core$IIndexed$_nth$arity$2(null,i__18356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18396,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19667 = seq__18353;
var G__19668 = chunk__18354;
var G__19669 = count__18355;
var G__19670 = (i__18356 + (1));
seq__18353 = G__19667;
chunk__18354 = G__19668;
count__18355 = G__19669;
i__18356 = G__19670;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18353);
if(temp__5804__auto__){
var seq__18353__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18353__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18353__$1);
var G__19671 = cljs.core.chunk_rest(seq__18353__$1);
var G__19672 = c__5568__auto__;
var G__19673 = cljs.core.count(c__5568__auto__);
var G__19674 = (0);
seq__18353 = G__19671;
chunk__18354 = G__19672;
count__18355 = G__19673;
i__18356 = G__19674;
continue;
} else {
var vec__18412 = cljs.core.first(seq__18353__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18412,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19679 = cljs.core.next(seq__18353__$1);
var G__19680 = null;
var G__19681 = (0);
var G__19682 = (0);
seq__18353 = G__19679;
chunk__18354 = G__19680;
count__18355 = G__19681;
i__18356 = G__19682;
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
var seq__18429 = cljs.core.seq(styles);
var chunk__18430 = null;
var count__18431 = (0);
var i__18432 = (0);
while(true){
if((i__18432 < count__18431)){
var vec__18469 = chunk__18430.cljs$core$IIndexed$_nth$arity$2(null,i__18432);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18469,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18469,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19683 = seq__18429;
var G__19684 = chunk__18430;
var G__19685 = count__18431;
var G__19686 = (i__18432 + (1));
seq__18429 = G__19683;
chunk__18430 = G__19684;
count__18431 = G__19685;
i__18432 = G__19686;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18429);
if(temp__5804__auto__){
var seq__18429__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18429__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18429__$1);
var G__19687 = cljs.core.chunk_rest(seq__18429__$1);
var G__19688 = c__5568__auto__;
var G__19689 = cljs.core.count(c__5568__auto__);
var G__19690 = (0);
seq__18429 = G__19687;
chunk__18430 = G__19688;
count__18431 = G__19689;
i__18432 = G__19690;
continue;
} else {
var vec__18488 = cljs.core.first(seq__18429__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19691 = cljs.core.next(seq__18429__$1);
var G__19692 = null;
var G__19693 = (0);
var G__19694 = (0);
seq__18429 = G__19691;
chunk__18430 = G__19692;
count__18431 = G__19693;
i__18432 = G__19694;
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
var G__18512_19695 = key;
var G__18512_19696__$1 = (((G__18512_19695 instanceof cljs.core.Keyword))?G__18512_19695.fqn:null);
switch (G__18512_19696__$1) {
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
var ks_19698 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19698,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19698,"aria-");
}
})())){
el.setAttribute(ks_19698,value);
} else {
(el[ks_19698] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18577){
var map__18578 = p__18577;
var map__18578__$1 = cljs.core.__destructure_map(map__18578);
var props = map__18578__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18578__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18583 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18583,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18583,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18583,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18588 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18588,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18588;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18598 = arguments.length;
switch (G__18598) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18624){
var vec__18626 = p__18624;
var seq__18627 = cljs.core.seq(vec__18626);
var first__18628 = cljs.core.first(seq__18627);
var seq__18627__$1 = cljs.core.next(seq__18627);
var nn = first__18628;
var first__18628__$1 = cljs.core.first(seq__18627__$1);
var seq__18627__$2 = cljs.core.next(seq__18627__$1);
var np = first__18628__$1;
var nc = seq__18627__$2;
var node = vec__18626;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18643 = nn;
var G__18644 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18643,G__18644) : create_fn.call(null,G__18643,G__18644));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18653 = nn;
var G__18654 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18653,G__18654) : create_fn.call(null,G__18653,G__18654));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18672 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18672,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18672,(1),null);
var seq__18680_19707 = cljs.core.seq(node_children);
var chunk__18681_19708 = null;
var count__18682_19709 = (0);
var i__18683_19710 = (0);
while(true){
if((i__18683_19710 < count__18682_19709)){
var child_struct_19711 = chunk__18681_19708.cljs$core$IIndexed$_nth$arity$2(null,i__18683_19710);
var children_19712 = shadow.dom.dom_node(child_struct_19711);
if(cljs.core.seq_QMARK_(children_19712)){
var seq__18757_19713 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19712));
var chunk__18759_19714 = null;
var count__18760_19715 = (0);
var i__18761_19716 = (0);
while(true){
if((i__18761_19716 < count__18760_19715)){
var child_19717 = chunk__18759_19714.cljs$core$IIndexed$_nth$arity$2(null,i__18761_19716);
if(cljs.core.truth_(child_19717)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19717);


var G__19718 = seq__18757_19713;
var G__19719 = chunk__18759_19714;
var G__19720 = count__18760_19715;
var G__19721 = (i__18761_19716 + (1));
seq__18757_19713 = G__19718;
chunk__18759_19714 = G__19719;
count__18760_19715 = G__19720;
i__18761_19716 = G__19721;
continue;
} else {
var G__19722 = seq__18757_19713;
var G__19723 = chunk__18759_19714;
var G__19724 = count__18760_19715;
var G__19725 = (i__18761_19716 + (1));
seq__18757_19713 = G__19722;
chunk__18759_19714 = G__19723;
count__18760_19715 = G__19724;
i__18761_19716 = G__19725;
continue;
}
} else {
var temp__5804__auto___19727 = cljs.core.seq(seq__18757_19713);
if(temp__5804__auto___19727){
var seq__18757_19728__$1 = temp__5804__auto___19727;
if(cljs.core.chunked_seq_QMARK_(seq__18757_19728__$1)){
var c__5568__auto___19729 = cljs.core.chunk_first(seq__18757_19728__$1);
var G__19730 = cljs.core.chunk_rest(seq__18757_19728__$1);
var G__19731 = c__5568__auto___19729;
var G__19732 = cljs.core.count(c__5568__auto___19729);
var G__19733 = (0);
seq__18757_19713 = G__19730;
chunk__18759_19714 = G__19731;
count__18760_19715 = G__19732;
i__18761_19716 = G__19733;
continue;
} else {
var child_19734 = cljs.core.first(seq__18757_19728__$1);
if(cljs.core.truth_(child_19734)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19734);


var G__19735 = cljs.core.next(seq__18757_19728__$1);
var G__19736 = null;
var G__19737 = (0);
var G__19738 = (0);
seq__18757_19713 = G__19735;
chunk__18759_19714 = G__19736;
count__18760_19715 = G__19737;
i__18761_19716 = G__19738;
continue;
} else {
var G__19739 = cljs.core.next(seq__18757_19728__$1);
var G__19740 = null;
var G__19741 = (0);
var G__19742 = (0);
seq__18757_19713 = G__19739;
chunk__18759_19714 = G__19740;
count__18760_19715 = G__19741;
i__18761_19716 = G__19742;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19712);
}


var G__19743 = seq__18680_19707;
var G__19744 = chunk__18681_19708;
var G__19745 = count__18682_19709;
var G__19746 = (i__18683_19710 + (1));
seq__18680_19707 = G__19743;
chunk__18681_19708 = G__19744;
count__18682_19709 = G__19745;
i__18683_19710 = G__19746;
continue;
} else {
var temp__5804__auto___19747 = cljs.core.seq(seq__18680_19707);
if(temp__5804__auto___19747){
var seq__18680_19748__$1 = temp__5804__auto___19747;
if(cljs.core.chunked_seq_QMARK_(seq__18680_19748__$1)){
var c__5568__auto___19749 = cljs.core.chunk_first(seq__18680_19748__$1);
var G__19750 = cljs.core.chunk_rest(seq__18680_19748__$1);
var G__19751 = c__5568__auto___19749;
var G__19752 = cljs.core.count(c__5568__auto___19749);
var G__19753 = (0);
seq__18680_19707 = G__19750;
chunk__18681_19708 = G__19751;
count__18682_19709 = G__19752;
i__18683_19710 = G__19753;
continue;
} else {
var child_struct_19754 = cljs.core.first(seq__18680_19748__$1);
var children_19755 = shadow.dom.dom_node(child_struct_19754);
if(cljs.core.seq_QMARK_(children_19755)){
var seq__18781_19756 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19755));
var chunk__18783_19757 = null;
var count__18784_19758 = (0);
var i__18785_19759 = (0);
while(true){
if((i__18785_19759 < count__18784_19758)){
var child_19760 = chunk__18783_19757.cljs$core$IIndexed$_nth$arity$2(null,i__18785_19759);
if(cljs.core.truth_(child_19760)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19760);


var G__19761 = seq__18781_19756;
var G__19762 = chunk__18783_19757;
var G__19763 = count__18784_19758;
var G__19764 = (i__18785_19759 + (1));
seq__18781_19756 = G__19761;
chunk__18783_19757 = G__19762;
count__18784_19758 = G__19763;
i__18785_19759 = G__19764;
continue;
} else {
var G__19765 = seq__18781_19756;
var G__19766 = chunk__18783_19757;
var G__19767 = count__18784_19758;
var G__19768 = (i__18785_19759 + (1));
seq__18781_19756 = G__19765;
chunk__18783_19757 = G__19766;
count__18784_19758 = G__19767;
i__18785_19759 = G__19768;
continue;
}
} else {
var temp__5804__auto___19769__$1 = cljs.core.seq(seq__18781_19756);
if(temp__5804__auto___19769__$1){
var seq__18781_19770__$1 = temp__5804__auto___19769__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18781_19770__$1)){
var c__5568__auto___19771 = cljs.core.chunk_first(seq__18781_19770__$1);
var G__19772 = cljs.core.chunk_rest(seq__18781_19770__$1);
var G__19773 = c__5568__auto___19771;
var G__19774 = cljs.core.count(c__5568__auto___19771);
var G__19775 = (0);
seq__18781_19756 = G__19772;
chunk__18783_19757 = G__19773;
count__18784_19758 = G__19774;
i__18785_19759 = G__19775;
continue;
} else {
var child_19776 = cljs.core.first(seq__18781_19770__$1);
if(cljs.core.truth_(child_19776)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19776);


var G__19777 = cljs.core.next(seq__18781_19770__$1);
var G__19778 = null;
var G__19779 = (0);
var G__19780 = (0);
seq__18781_19756 = G__19777;
chunk__18783_19757 = G__19778;
count__18784_19758 = G__19779;
i__18785_19759 = G__19780;
continue;
} else {
var G__19781 = cljs.core.next(seq__18781_19770__$1);
var G__19782 = null;
var G__19783 = (0);
var G__19784 = (0);
seq__18781_19756 = G__19781;
chunk__18783_19757 = G__19782;
count__18784_19758 = G__19783;
i__18785_19759 = G__19784;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19755);
}


var G__19785 = cljs.core.next(seq__18680_19748__$1);
var G__19786 = null;
var G__19787 = (0);
var G__19788 = (0);
seq__18680_19707 = G__19785;
chunk__18681_19708 = G__19786;
count__18682_19709 = G__19787;
i__18683_19710 = G__19788;
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
var seq__18814 = cljs.core.seq(node);
var chunk__18815 = null;
var count__18816 = (0);
var i__18817 = (0);
while(true){
if((i__18817 < count__18816)){
var n = chunk__18815.cljs$core$IIndexed$_nth$arity$2(null,i__18817);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19793 = seq__18814;
var G__19794 = chunk__18815;
var G__19795 = count__18816;
var G__19796 = (i__18817 + (1));
seq__18814 = G__19793;
chunk__18815 = G__19794;
count__18816 = G__19795;
i__18817 = G__19796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18814);
if(temp__5804__auto__){
var seq__18814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18814__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18814__$1);
var G__19798 = cljs.core.chunk_rest(seq__18814__$1);
var G__19799 = c__5568__auto__;
var G__19800 = cljs.core.count(c__5568__auto__);
var G__19801 = (0);
seq__18814 = G__19798;
chunk__18815 = G__19799;
count__18816 = G__19800;
i__18817 = G__19801;
continue;
} else {
var n = cljs.core.first(seq__18814__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19803 = cljs.core.next(seq__18814__$1);
var G__19804 = null;
var G__19805 = (0);
var G__19806 = (0);
seq__18814 = G__19803;
chunk__18815 = G__19804;
count__18816 = G__19805;
i__18817 = G__19806;
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
var G__18840 = arguments.length;
switch (G__18840) {
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
var G__18857 = arguments.length;
switch (G__18857) {
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
var G__18871 = arguments.length;
switch (G__18871) {
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
var len__5769__auto___19816 = arguments.length;
var i__5770__auto___19817 = (0);
while(true){
if((i__5770__auto___19817 < len__5769__auto___19816)){
args__5775__auto__.push((arguments[i__5770__auto___19817]));

var G__19818 = (i__5770__auto___19817 + (1));
i__5770__auto___19817 = G__19818;
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
var seq__18894_19819 = cljs.core.seq(nodes);
var chunk__18895_19820 = null;
var count__18896_19821 = (0);
var i__18897_19822 = (0);
while(true){
if((i__18897_19822 < count__18896_19821)){
var node_19823 = chunk__18895_19820.cljs$core$IIndexed$_nth$arity$2(null,i__18897_19822);
fragment.appendChild(shadow.dom._to_dom(node_19823));


var G__19824 = seq__18894_19819;
var G__19825 = chunk__18895_19820;
var G__19826 = count__18896_19821;
var G__19827 = (i__18897_19822 + (1));
seq__18894_19819 = G__19824;
chunk__18895_19820 = G__19825;
count__18896_19821 = G__19826;
i__18897_19822 = G__19827;
continue;
} else {
var temp__5804__auto___19828 = cljs.core.seq(seq__18894_19819);
if(temp__5804__auto___19828){
var seq__18894_19829__$1 = temp__5804__auto___19828;
if(cljs.core.chunked_seq_QMARK_(seq__18894_19829__$1)){
var c__5568__auto___19831 = cljs.core.chunk_first(seq__18894_19829__$1);
var G__19833 = cljs.core.chunk_rest(seq__18894_19829__$1);
var G__19834 = c__5568__auto___19831;
var G__19835 = cljs.core.count(c__5568__auto___19831);
var G__19836 = (0);
seq__18894_19819 = G__19833;
chunk__18895_19820 = G__19834;
count__18896_19821 = G__19835;
i__18897_19822 = G__19836;
continue;
} else {
var node_19838 = cljs.core.first(seq__18894_19829__$1);
fragment.appendChild(shadow.dom._to_dom(node_19838));


var G__19840 = cljs.core.next(seq__18894_19829__$1);
var G__19841 = null;
var G__19842 = (0);
var G__19843 = (0);
seq__18894_19819 = G__19840;
chunk__18895_19820 = G__19841;
count__18896_19821 = G__19842;
i__18897_19822 = G__19843;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18889));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18910_19844 = cljs.core.seq(scripts);
var chunk__18911_19845 = null;
var count__18912_19846 = (0);
var i__18913_19847 = (0);
while(true){
if((i__18913_19847 < count__18912_19846)){
var vec__18928_19848 = chunk__18911_19845.cljs$core$IIndexed$_nth$arity$2(null,i__18913_19847);
var script_tag_19849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18928_19848,(0),null);
var script_body_19850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18928_19848,(1),null);
eval(script_body_19850);


var G__19851 = seq__18910_19844;
var G__19852 = chunk__18911_19845;
var G__19853 = count__18912_19846;
var G__19854 = (i__18913_19847 + (1));
seq__18910_19844 = G__19851;
chunk__18911_19845 = G__19852;
count__18912_19846 = G__19853;
i__18913_19847 = G__19854;
continue;
} else {
var temp__5804__auto___19855 = cljs.core.seq(seq__18910_19844);
if(temp__5804__auto___19855){
var seq__18910_19856__$1 = temp__5804__auto___19855;
if(cljs.core.chunked_seq_QMARK_(seq__18910_19856__$1)){
var c__5568__auto___19857 = cljs.core.chunk_first(seq__18910_19856__$1);
var G__19858 = cljs.core.chunk_rest(seq__18910_19856__$1);
var G__19859 = c__5568__auto___19857;
var G__19860 = cljs.core.count(c__5568__auto___19857);
var G__19861 = (0);
seq__18910_19844 = G__19858;
chunk__18911_19845 = G__19859;
count__18912_19846 = G__19860;
i__18913_19847 = G__19861;
continue;
} else {
var vec__18932_19872 = cljs.core.first(seq__18910_19856__$1);
var script_tag_19873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932_19872,(0),null);
var script_body_19874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932_19872,(1),null);
eval(script_body_19874);


var G__19875 = cljs.core.next(seq__18910_19856__$1);
var G__19876 = null;
var G__19877 = (0);
var G__19878 = (0);
seq__18910_19844 = G__19875;
chunk__18911_19845 = G__19876;
count__18912_19846 = G__19877;
i__18913_19847 = G__19878;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18938){
var vec__18939 = p__18938;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18939,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18939,(1),null);
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
var G__18954 = arguments.length;
switch (G__18954) {
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
var seq__18981 = cljs.core.seq(style_keys);
var chunk__18982 = null;
var count__18983 = (0);
var i__18984 = (0);
while(true){
if((i__18984 < count__18983)){
var it = chunk__18982.cljs$core$IIndexed$_nth$arity$2(null,i__18984);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19888 = seq__18981;
var G__19889 = chunk__18982;
var G__19890 = count__18983;
var G__19891 = (i__18984 + (1));
seq__18981 = G__19888;
chunk__18982 = G__19889;
count__18983 = G__19890;
i__18984 = G__19891;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18981);
if(temp__5804__auto__){
var seq__18981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18981__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18981__$1);
var G__19892 = cljs.core.chunk_rest(seq__18981__$1);
var G__19893 = c__5568__auto__;
var G__19894 = cljs.core.count(c__5568__auto__);
var G__19895 = (0);
seq__18981 = G__19892;
chunk__18982 = G__19893;
count__18983 = G__19894;
i__18984 = G__19895;
continue;
} else {
var it = cljs.core.first(seq__18981__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19903 = cljs.core.next(seq__18981__$1);
var G__19904 = null;
var G__19905 = (0);
var G__19906 = (0);
seq__18981 = G__19903;
chunk__18982 = G__19904;
count__18983 = G__19905;
i__18984 = G__19906;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18996,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19015 = k18996;
var G__19015__$1 = (((G__19015 instanceof cljs.core.Keyword))?G__19015.fqn:null);
switch (G__19015__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18996,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19023){
var vec__19024 = p__19023;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18995){
var self__ = this;
var G__18995__$1 = this;
return (new cljs.core.RecordIter((0),G__18995__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18997,other18998){
var self__ = this;
var this18997__$1 = this;
return (((!((other18998 == null)))) && ((((this18997__$1.constructor === other18998.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18997__$1.x,other18998.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18997__$1.y,other18998.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18997__$1.__extmap,other18998.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18996){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19049 = k18996;
var G__19049__$1 = (((G__19049 instanceof cljs.core.Keyword))?G__19049.fqn:null);
switch (G__19049__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18996);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18995){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19070 = cljs.core.keyword_identical_QMARK_;
var expr__19071 = k__5352__auto__;
if(cljs.core.truth_((pred__19070.cljs$core$IFn$_invoke$arity$2 ? pred__19070.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19071) : pred__19070.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19071)))){
return (new shadow.dom.Coordinate(G__18995,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19070.cljs$core$IFn$_invoke$arity$2 ? pred__19070.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19071) : pred__19070.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19071)))){
return (new shadow.dom.Coordinate(self__.x,G__18995,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18995),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18995){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18995,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19003){
var extmap__5385__auto__ = (function (){var G__19168 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19003,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19003)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19168);
} else {
return G__19168;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19003),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19003),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19187,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19203 = k19187;
var G__19203__$1 = (((G__19203 instanceof cljs.core.Keyword))?G__19203.fqn:null);
switch (G__19203__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19187,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19208){
var vec__19209 = p__19208;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19186){
var self__ = this;
var G__19186__$1 = this;
return (new cljs.core.RecordIter((0),G__19186__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19188,other19189){
var self__ = this;
var this19188__$1 = this;
return (((!((other19189 == null)))) && ((((this19188__$1.constructor === other19189.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19188__$1.w,other19189.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19188__$1.h,other19189.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19188__$1.__extmap,other19189.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19187){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19263 = k19187;
var G__19263__$1 = (((G__19263 instanceof cljs.core.Keyword))?G__19263.fqn:null);
switch (G__19263__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19187);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19186){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19272 = cljs.core.keyword_identical_QMARK_;
var expr__19273 = k__5352__auto__;
if(cljs.core.truth_((pred__19272.cljs$core$IFn$_invoke$arity$2 ? pred__19272.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19273) : pred__19272.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19273)))){
return (new shadow.dom.Size(G__19186,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19272.cljs$core$IFn$_invoke$arity$2 ? pred__19272.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19273) : pred__19272.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19273)))){
return (new shadow.dom.Size(self__.w,G__19186,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19186),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19186){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19186,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19191){
var extmap__5385__auto__ = (function (){var G__19297 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19191,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19191)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19297);
} else {
return G__19297;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19191),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19191),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__19988 = (i + (1));
var G__19989 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19988;
ret = G__19989;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19338){
var vec__19342 = p__19338;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19342,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19354 = arguments.length;
switch (G__19354) {
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
var G__19995 = ps;
var G__19996 = (i + (1));
el__$1 = G__19995;
i = G__19996;
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
var vec__19406 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19410_20001 = cljs.core.seq(props);
var chunk__19411_20002 = null;
var count__19412_20003 = (0);
var i__19413_20004 = (0);
while(true){
if((i__19413_20004 < count__19412_20003)){
var vec__19447_20009 = chunk__19411_20002.cljs$core$IIndexed$_nth$arity$2(null,i__19413_20004);
var k_20010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19447_20009,(0),null);
var v_20011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19447_20009,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20010);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20010),v_20011);


var G__20012 = seq__19410_20001;
var G__20013 = chunk__19411_20002;
var G__20014 = count__19412_20003;
var G__20015 = (i__19413_20004 + (1));
seq__19410_20001 = G__20012;
chunk__19411_20002 = G__20013;
count__19412_20003 = G__20014;
i__19413_20004 = G__20015;
continue;
} else {
var temp__5804__auto___20016 = cljs.core.seq(seq__19410_20001);
if(temp__5804__auto___20016){
var seq__19410_20017__$1 = temp__5804__auto___20016;
if(cljs.core.chunked_seq_QMARK_(seq__19410_20017__$1)){
var c__5568__auto___20018 = cljs.core.chunk_first(seq__19410_20017__$1);
var G__20019 = cljs.core.chunk_rest(seq__19410_20017__$1);
var G__20020 = c__5568__auto___20018;
var G__20021 = cljs.core.count(c__5568__auto___20018);
var G__20022 = (0);
seq__19410_20001 = G__20019;
chunk__19411_20002 = G__20020;
count__19412_20003 = G__20021;
i__19413_20004 = G__20022;
continue;
} else {
var vec__19486_20023 = cljs.core.first(seq__19410_20017__$1);
var k_20024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19486_20023,(0),null);
var v_20025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19486_20023,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20024);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20024),v_20025);


var G__20026 = cljs.core.next(seq__19410_20017__$1);
var G__20027 = null;
var G__20028 = (0);
var G__20029 = (0);
seq__19410_20001 = G__20026;
chunk__19411_20002 = G__20027;
count__19412_20003 = G__20028;
i__19413_20004 = G__20029;
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
var vec__19515 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19515,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19515,(1),null);
var seq__19520_20030 = cljs.core.seq(node_children);
var chunk__19522_20031 = null;
var count__19523_20032 = (0);
var i__19524_20033 = (0);
while(true){
if((i__19524_20033 < count__19523_20032)){
var child_struct_20034 = chunk__19522_20031.cljs$core$IIndexed$_nth$arity$2(null,i__19524_20033);
if((!((child_struct_20034 == null)))){
if(typeof child_struct_20034 === 'string'){
var text_20035 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20035),child_struct_20034].join(''));
} else {
var children_20036 = shadow.dom.svg_node(child_struct_20034);
if(cljs.core.seq_QMARK_(children_20036)){
var seq__19551_20037 = cljs.core.seq(children_20036);
var chunk__19553_20038 = null;
var count__19554_20039 = (0);
var i__19555_20040 = (0);
while(true){
if((i__19555_20040 < count__19554_20039)){
var child_20041 = chunk__19553_20038.cljs$core$IIndexed$_nth$arity$2(null,i__19555_20040);
if(cljs.core.truth_(child_20041)){
node.appendChild(child_20041);


var G__20042 = seq__19551_20037;
var G__20043 = chunk__19553_20038;
var G__20044 = count__19554_20039;
var G__20045 = (i__19555_20040 + (1));
seq__19551_20037 = G__20042;
chunk__19553_20038 = G__20043;
count__19554_20039 = G__20044;
i__19555_20040 = G__20045;
continue;
} else {
var G__20046 = seq__19551_20037;
var G__20047 = chunk__19553_20038;
var G__20048 = count__19554_20039;
var G__20049 = (i__19555_20040 + (1));
seq__19551_20037 = G__20046;
chunk__19553_20038 = G__20047;
count__19554_20039 = G__20048;
i__19555_20040 = G__20049;
continue;
}
} else {
var temp__5804__auto___20050 = cljs.core.seq(seq__19551_20037);
if(temp__5804__auto___20050){
var seq__19551_20051__$1 = temp__5804__auto___20050;
if(cljs.core.chunked_seq_QMARK_(seq__19551_20051__$1)){
var c__5568__auto___20052 = cljs.core.chunk_first(seq__19551_20051__$1);
var G__20053 = cljs.core.chunk_rest(seq__19551_20051__$1);
var G__20054 = c__5568__auto___20052;
var G__20055 = cljs.core.count(c__5568__auto___20052);
var G__20056 = (0);
seq__19551_20037 = G__20053;
chunk__19553_20038 = G__20054;
count__19554_20039 = G__20055;
i__19555_20040 = G__20056;
continue;
} else {
var child_20057 = cljs.core.first(seq__19551_20051__$1);
if(cljs.core.truth_(child_20057)){
node.appendChild(child_20057);


var G__20058 = cljs.core.next(seq__19551_20051__$1);
var G__20059 = null;
var G__20060 = (0);
var G__20061 = (0);
seq__19551_20037 = G__20058;
chunk__19553_20038 = G__20059;
count__19554_20039 = G__20060;
i__19555_20040 = G__20061;
continue;
} else {
var G__20062 = cljs.core.next(seq__19551_20051__$1);
var G__20063 = null;
var G__20064 = (0);
var G__20065 = (0);
seq__19551_20037 = G__20062;
chunk__19553_20038 = G__20063;
count__19554_20039 = G__20064;
i__19555_20040 = G__20065;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20036);
}
}


var G__20066 = seq__19520_20030;
var G__20067 = chunk__19522_20031;
var G__20068 = count__19523_20032;
var G__20069 = (i__19524_20033 + (1));
seq__19520_20030 = G__20066;
chunk__19522_20031 = G__20067;
count__19523_20032 = G__20068;
i__19524_20033 = G__20069;
continue;
} else {
var G__20070 = seq__19520_20030;
var G__20071 = chunk__19522_20031;
var G__20072 = count__19523_20032;
var G__20073 = (i__19524_20033 + (1));
seq__19520_20030 = G__20070;
chunk__19522_20031 = G__20071;
count__19523_20032 = G__20072;
i__19524_20033 = G__20073;
continue;
}
} else {
var temp__5804__auto___20074 = cljs.core.seq(seq__19520_20030);
if(temp__5804__auto___20074){
var seq__19520_20075__$1 = temp__5804__auto___20074;
if(cljs.core.chunked_seq_QMARK_(seq__19520_20075__$1)){
var c__5568__auto___20076 = cljs.core.chunk_first(seq__19520_20075__$1);
var G__20077 = cljs.core.chunk_rest(seq__19520_20075__$1);
var G__20078 = c__5568__auto___20076;
var G__20079 = cljs.core.count(c__5568__auto___20076);
var G__20080 = (0);
seq__19520_20030 = G__20077;
chunk__19522_20031 = G__20078;
count__19523_20032 = G__20079;
i__19524_20033 = G__20080;
continue;
} else {
var child_struct_20081 = cljs.core.first(seq__19520_20075__$1);
if((!((child_struct_20081 == null)))){
if(typeof child_struct_20081 === 'string'){
var text_20082 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20082),child_struct_20081].join(''));
} else {
var children_20083 = shadow.dom.svg_node(child_struct_20081);
if(cljs.core.seq_QMARK_(children_20083)){
var seq__19572_20084 = cljs.core.seq(children_20083);
var chunk__19574_20085 = null;
var count__19575_20086 = (0);
var i__19576_20087 = (0);
while(true){
if((i__19576_20087 < count__19575_20086)){
var child_20088 = chunk__19574_20085.cljs$core$IIndexed$_nth$arity$2(null,i__19576_20087);
if(cljs.core.truth_(child_20088)){
node.appendChild(child_20088);


var G__20089 = seq__19572_20084;
var G__20090 = chunk__19574_20085;
var G__20091 = count__19575_20086;
var G__20092 = (i__19576_20087 + (1));
seq__19572_20084 = G__20089;
chunk__19574_20085 = G__20090;
count__19575_20086 = G__20091;
i__19576_20087 = G__20092;
continue;
} else {
var G__20093 = seq__19572_20084;
var G__20094 = chunk__19574_20085;
var G__20095 = count__19575_20086;
var G__20096 = (i__19576_20087 + (1));
seq__19572_20084 = G__20093;
chunk__19574_20085 = G__20094;
count__19575_20086 = G__20095;
i__19576_20087 = G__20096;
continue;
}
} else {
var temp__5804__auto___20097__$1 = cljs.core.seq(seq__19572_20084);
if(temp__5804__auto___20097__$1){
var seq__19572_20098__$1 = temp__5804__auto___20097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19572_20098__$1)){
var c__5568__auto___20099 = cljs.core.chunk_first(seq__19572_20098__$1);
var G__20100 = cljs.core.chunk_rest(seq__19572_20098__$1);
var G__20101 = c__5568__auto___20099;
var G__20102 = cljs.core.count(c__5568__auto___20099);
var G__20103 = (0);
seq__19572_20084 = G__20100;
chunk__19574_20085 = G__20101;
count__19575_20086 = G__20102;
i__19576_20087 = G__20103;
continue;
} else {
var child_20104 = cljs.core.first(seq__19572_20098__$1);
if(cljs.core.truth_(child_20104)){
node.appendChild(child_20104);


var G__20105 = cljs.core.next(seq__19572_20098__$1);
var G__20106 = null;
var G__20107 = (0);
var G__20108 = (0);
seq__19572_20084 = G__20105;
chunk__19574_20085 = G__20106;
count__19575_20086 = G__20107;
i__19576_20087 = G__20108;
continue;
} else {
var G__20109 = cljs.core.next(seq__19572_20098__$1);
var G__20110 = null;
var G__20111 = (0);
var G__20112 = (0);
seq__19572_20084 = G__20109;
chunk__19574_20085 = G__20110;
count__19575_20086 = G__20111;
i__19576_20087 = G__20112;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20083);
}
}


var G__20113 = cljs.core.next(seq__19520_20075__$1);
var G__20114 = null;
var G__20115 = (0);
var G__20116 = (0);
seq__19520_20030 = G__20113;
chunk__19522_20031 = G__20114;
count__19523_20032 = G__20115;
i__19524_20033 = G__20116;
continue;
} else {
var G__20117 = cljs.core.next(seq__19520_20075__$1);
var G__20118 = null;
var G__20119 = (0);
var G__20120 = (0);
seq__19520_20030 = G__20117;
chunk__19522_20031 = G__20118;
count__19523_20032 = G__20119;
i__19524_20033 = G__20120;
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
var len__5769__auto___20125 = arguments.length;
var i__5770__auto___20126 = (0);
while(true){
if((i__5770__auto___20126 < len__5769__auto___20125)){
args__5775__auto__.push((arguments[i__5770__auto___20126]));

var G__20127 = (i__5770__auto___20126 + (1));
i__5770__auto___20126 = G__20127;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19580){
var G__19581 = cljs.core.first(seq19580);
var seq19580__$1 = cljs.core.next(seq19580);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19581,seq19580__$1);
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
var G__19587 = arguments.length;
switch (G__19587) {
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
var c__14188__auto___20129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_19603){
var state_val_19604 = (state_19603[(1)]);
if((state_val_19604 === (1))){
var state_19603__$1 = state_19603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19603__$1,(2),once_or_cleanup);
} else {
if((state_val_19604 === (2))){
var inst_19600 = (state_19603[(2)]);
var inst_19601 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19603__$1 = (function (){var statearr_19609 = state_19603;
(statearr_19609[(7)] = inst_19600);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19603__$1,inst_19601);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13673__auto__ = null;
var shadow$dom$state_machine__13673__auto____0 = (function (){
var statearr_19612 = [null,null,null,null,null,null,null,null];
(statearr_19612[(0)] = shadow$dom$state_machine__13673__auto__);

(statearr_19612[(1)] = (1));

return statearr_19612;
});
var shadow$dom$state_machine__13673__auto____1 = (function (state_19603){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_19603);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e19613){var ex__13676__auto__ = e19613;
var statearr_19614_20134 = state_19603;
(statearr_19614_20134[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_19603[(4)]))){
var statearr_19615_20135 = state_19603;
(statearr_19615_20135[(1)] = cljs.core.first((state_19603[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20136 = state_19603;
state_19603 = G__20136;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
shadow$dom$state_machine__13673__auto__ = function(state_19603){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13673__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13673__auto____1.call(this,state_19603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13673__auto____0;
shadow$dom$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13673__auto____1;
return shadow$dom$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_19616 = f__14189__auto__();
(statearr_19616[(6)] = c__14188__auto___20129);

return statearr_19616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
