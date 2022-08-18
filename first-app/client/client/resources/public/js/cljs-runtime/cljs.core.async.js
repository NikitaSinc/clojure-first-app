goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32226 = arguments.length;
switch (G__32226) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32231 = (function (f,blockable,meta32232){
this.f = f;
this.blockable = blockable;
this.meta32232 = meta32232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32233,meta32232__$1){
var self__ = this;
var _32233__$1 = this;
return (new cljs.core.async.t_cljs$core$async32231(self__.f,self__.blockable,meta32232__$1));
}));

(cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32233){
var self__ = this;
var _32233__$1 = this;
return self__.meta32232;
}));

(cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32232","meta32232",-1938997632,null)], null);
}));

(cljs.core.async.t_cljs$core$async32231.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32231");

(cljs.core.async.t_cljs$core$async32231.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32231");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32231.
 */
cljs.core.async.__GT_t_cljs$core$async32231 = (function cljs$core$async$__GT_t_cljs$core$async32231(f__$1,blockable__$1,meta32232){
return (new cljs.core.async.t_cljs$core$async32231(f__$1,blockable__$1,meta32232));
});

}

return (new cljs.core.async.t_cljs$core$async32231(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32300 = arguments.length;
switch (G__32300) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32318 = arguments.length;
switch (G__32318) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32336 = arguments.length;
switch (G__32336) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36384 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36384) : fn1.call(null,val_36384));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36384) : fn1.call(null,val_36384));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32354 = arguments.length;
switch (G__32354) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36390 = n;
var x_36391 = (0);
while(true){
if((x_36391 < n__5636__auto___36390)){
(a[x_36391] = x_36391);

var G__36392 = (x_36391 + (1));
x_36391 = G__36392;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32387 = (function (flag,meta32388){
this.flag = flag;
this.meta32388 = meta32388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32389,meta32388__$1){
var self__ = this;
var _32389__$1 = this;
return (new cljs.core.async.t_cljs$core$async32387(self__.flag,meta32388__$1));
}));

(cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32389){
var self__ = this;
var _32389__$1 = this;
return self__.meta32388;
}));

(cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32388","meta32388",461724340,null)], null);
}));

(cljs.core.async.t_cljs$core$async32387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32387");

(cljs.core.async.t_cljs$core$async32387.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32387.
 */
cljs.core.async.__GT_t_cljs$core$async32387 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32387(flag__$1,meta32388){
return (new cljs.core.async.t_cljs$core$async32387(flag__$1,meta32388));
});

}

return (new cljs.core.async.t_cljs$core$async32387(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32408 = (function (flag,cb,meta32409){
this.flag = flag;
this.cb = cb;
this.meta32409 = meta32409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32410,meta32409__$1){
var self__ = this;
var _32410__$1 = this;
return (new cljs.core.async.t_cljs$core$async32408(self__.flag,self__.cb,meta32409__$1));
}));

(cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32410){
var self__ = this;
var _32410__$1 = this;
return self__.meta32409;
}));

(cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32409","meta32409",1909839005,null)], null);
}));

(cljs.core.async.t_cljs$core$async32408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32408");

(cljs.core.async.t_cljs$core$async32408.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32408.
 */
cljs.core.async.__GT_t_cljs$core$async32408 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32408(flag__$1,cb__$1,meta32409){
return (new cljs.core.async.t_cljs$core$async32408(flag__$1,cb__$1,meta32409));
});

}

return (new cljs.core.async.t_cljs$core$async32408(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32431_SHARP_){
var G__32451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32431_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32451) : fret.call(null,G__32451));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32433_SHARP_){
var G__32454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32433_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32454) : fret.call(null,G__32454));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36405 = (i + (1));
i = G__36405;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36410 = arguments.length;
var i__5770__auto___36411 = (0);
while(true){
if((i__5770__auto___36411 < len__5769__auto___36410)){
args__5775__auto__.push((arguments[i__5770__auto___36411]));

var G__36412 = (i__5770__auto___36411 + (1));
i__5770__auto___36411 = G__36412;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32477){
var map__32478 = p__32477;
var map__32478__$1 = cljs.core.__destructure_map(map__32478);
var opts = map__32478__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32470){
var G__32471 = cljs.core.first(seq32470);
var seq32470__$1 = cljs.core.next(seq32470);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32471,seq32470__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32507 = arguments.length;
switch (G__32507) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32082__auto___36414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_32590){
var state_val_32594 = (state_32590[(1)]);
if((state_val_32594 === (7))){
var inst_32569 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32647_36421 = state_32590__$1;
(statearr_32647_36421[(2)] = inst_32569);

(statearr_32647_36421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (1))){
var state_32590__$1 = state_32590;
var statearr_32648_36422 = state_32590__$1;
(statearr_32648_36422[(2)] = null);

(statearr_32648_36422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (4))){
var inst_32540 = (state_32590[(7)]);
var inst_32540__$1 = (state_32590[(2)]);
var inst_32548 = (inst_32540__$1 == null);
var state_32590__$1 = (function (){var statearr_32652 = state_32590;
(statearr_32652[(7)] = inst_32540__$1);

return statearr_32652;
})();
if(cljs.core.truth_(inst_32548)){
var statearr_32653_36423 = state_32590__$1;
(statearr_32653_36423[(1)] = (5));

} else {
var statearr_32654_36424 = state_32590__$1;
(statearr_32654_36424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (13))){
var state_32590__$1 = state_32590;
var statearr_32659_36425 = state_32590__$1;
(statearr_32659_36425[(2)] = null);

(statearr_32659_36425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (6))){
var inst_32540 = (state_32590[(7)]);
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32590__$1,(11),to,inst_32540);
} else {
if((state_val_32594 === (3))){
var inst_32574 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32590__$1,inst_32574);
} else {
if((state_val_32594 === (12))){
var state_32590__$1 = state_32590;
var statearr_32662_36432 = state_32590__$1;
(statearr_32662_36432[(2)] = null);

(statearr_32662_36432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (2))){
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32590__$1,(4),from);
} else {
if((state_val_32594 === (11))){
var inst_32561 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
if(cljs.core.truth_(inst_32561)){
var statearr_32667_36433 = state_32590__$1;
(statearr_32667_36433[(1)] = (12));

} else {
var statearr_32668_36434 = state_32590__$1;
(statearr_32668_36434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (9))){
var state_32590__$1 = state_32590;
var statearr_32669_36435 = state_32590__$1;
(statearr_32669_36435[(2)] = null);

(statearr_32669_36435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (5))){
var state_32590__$1 = state_32590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32677_36436 = state_32590__$1;
(statearr_32677_36436[(1)] = (8));

} else {
var statearr_32681_36437 = state_32590__$1;
(statearr_32681_36437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (14))){
var inst_32567 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32683_36438 = state_32590__$1;
(statearr_32683_36438[(2)] = inst_32567);

(statearr_32683_36438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (10))){
var inst_32556 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32687_36439 = state_32590__$1;
(statearr_32687_36439[(2)] = inst_32556);

(statearr_32687_36439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32594 === (8))){
var inst_32552 = cljs.core.async.close_BANG_(to);
var state_32590__$1 = state_32590;
var statearr_32691_36440 = state_32590__$1;
(statearr_32691_36440[(2)] = inst_32552);

(statearr_32691_36440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_32697 = [null,null,null,null,null,null,null,null];
(statearr_32697[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_32697[(1)] = (1));

return statearr_32697;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_32590){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_32590);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e32701){var ex__31488__auto__ = e32701;
var statearr_32702_36443 = state_32590;
(statearr_32702_36443[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_32590[(4)]))){
var statearr_32706_36444 = state_32590;
(statearr_32706_36444[(1)] = cljs.core.first((state_32590[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36445 = state_32590;
state_32590 = G__36445;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_32590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_32590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_32713 = f__32083__auto__();
(statearr_32713[(6)] = c__32082__auto___36414);

return statearr_32713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__32725){
var vec__32727 = p__32725;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(1),null);
var job = vec__32727;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32082__auto___36447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_32739){
var state_val_32740 = (state_32739[(1)]);
if((state_val_32740 === (1))){
var state_32739__$1 = state_32739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32739__$1,(2),res,v);
} else {
if((state_val_32740 === (2))){
var inst_32734 = (state_32739[(2)]);
var inst_32735 = cljs.core.async.close_BANG_(res);
var state_32739__$1 = (function (){var statearr_32744 = state_32739;
(statearr_32744[(7)] = inst_32734);

return statearr_32744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32739__$1,inst_32735);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0 = (function (){
var statearr_32745 = [null,null,null,null,null,null,null,null];
(statearr_32745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__);

(statearr_32745[(1)] = (1));

return statearr_32745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1 = (function (state_32739){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_32739);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e32750){var ex__31488__auto__ = e32750;
var statearr_32751_36450 = state_32739;
(statearr_32751_36450[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_32739[(4)]))){
var statearr_32752_36451 = state_32739;
(statearr_32752_36451[(1)] = cljs.core.first((state_32739[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36452 = state_32739;
state_32739 = G__36452;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = function(state_32739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1.call(this,state_32739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_32756 = f__32083__auto__();
(statearr_32756[(6)] = c__32082__auto___36447);

return statearr_32756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32765){
var vec__32766 = p__32765;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32766,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32766,(1),null);
var job = vec__32766;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36458 = n;
var __36459 = (0);
while(true){
if((__36459 < n__5636__auto___36458)){
var G__32772_36460 = type;
var G__32772_36461__$1 = (((G__32772_36460 instanceof cljs.core.Keyword))?G__32772_36460.fqn:null);
switch (G__32772_36461__$1) {
case "compute":
var c__32082__auto___36463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36459,c__32082__auto___36463,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async){
return (function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = ((function (__36459,c__32082__auto___36463,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async){
return (function (state_32791){
var state_val_32792 = (state_32791[(1)]);
if((state_val_32792 === (1))){
var state_32791__$1 = state_32791;
var statearr_32793_36470 = state_32791__$1;
(statearr_32793_36470[(2)] = null);

(statearr_32793_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (2))){
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32791__$1,(4),jobs);
} else {
if((state_val_32792 === (3))){
var inst_32789 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32791__$1,inst_32789);
} else {
if((state_val_32792 === (4))){
var inst_32777 = (state_32791[(2)]);
var inst_32780 = process__$1(inst_32777);
var state_32791__$1 = state_32791;
if(cljs.core.truth_(inst_32780)){
var statearr_32795_36472 = state_32791__$1;
(statearr_32795_36472[(1)] = (5));

} else {
var statearr_32796_36473 = state_32791__$1;
(statearr_32796_36473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (5))){
var state_32791__$1 = state_32791;
var statearr_32797_36474 = state_32791__$1;
(statearr_32797_36474[(2)] = null);

(statearr_32797_36474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (6))){
var state_32791__$1 = state_32791;
var statearr_32798_36475 = state_32791__$1;
(statearr_32798_36475[(2)] = null);

(statearr_32798_36475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (7))){
var inst_32787 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
var statearr_32799_36476 = state_32791__$1;
(statearr_32799_36476[(2)] = inst_32787);

(statearr_32799_36476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36459,c__32082__auto___36463,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async))
;
return ((function (__36459,switch__31483__auto__,c__32082__auto___36463,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0 = (function (){
var statearr_32801 = [null,null,null,null,null,null,null];
(statearr_32801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__);

(statearr_32801[(1)] = (1));

return statearr_32801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1 = (function (state_32791){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_32791);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e32806){var ex__31488__auto__ = e32806;
var statearr_32807_36477 = state_32791;
(statearr_32807_36477[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_32791[(4)]))){
var statearr_32812_36478 = state_32791;
(statearr_32812_36478[(1)] = cljs.core.first((state_32791[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36479 = state_32791;
state_32791 = G__36479;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = function(state_32791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1.call(this,state_32791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__;
})()
;})(__36459,switch__31483__auto__,c__32082__auto___36463,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async))
})();
var state__32084__auto__ = (function (){var statearr_32815 = f__32083__auto__();
(statearr_32815[(6)] = c__32082__auto___36463);

return statearr_32815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
});})(__36459,c__32082__auto___36463,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async))
);


break;
case "async":
var c__32082__auto___36480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36459,c__32082__auto___36480,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async){
return (function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = ((function (__36459,c__32082__auto___36480,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async){
return (function (state_32829){
var state_val_32830 = (state_32829[(1)]);
if((state_val_32830 === (1))){
var state_32829__$1 = state_32829;
var statearr_32835_36483 = state_32829__$1;
(statearr_32835_36483[(2)] = null);

(statearr_32835_36483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32830 === (2))){
var state_32829__$1 = state_32829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32829__$1,(4),jobs);
} else {
if((state_val_32830 === (3))){
var inst_32827 = (state_32829[(2)]);
var state_32829__$1 = state_32829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32829__$1,inst_32827);
} else {
if((state_val_32830 === (4))){
var inst_32818 = (state_32829[(2)]);
var inst_32820 = async(inst_32818);
var state_32829__$1 = state_32829;
if(cljs.core.truth_(inst_32820)){
var statearr_32837_36485 = state_32829__$1;
(statearr_32837_36485[(1)] = (5));

} else {
var statearr_32838_36487 = state_32829__$1;
(statearr_32838_36487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32830 === (5))){
var state_32829__$1 = state_32829;
var statearr_32841_36488 = state_32829__$1;
(statearr_32841_36488[(2)] = null);

(statearr_32841_36488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32830 === (6))){
var state_32829__$1 = state_32829;
var statearr_32843_36489 = state_32829__$1;
(statearr_32843_36489[(2)] = null);

(statearr_32843_36489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32830 === (7))){
var inst_32825 = (state_32829[(2)]);
var state_32829__$1 = state_32829;
var statearr_32844_36490 = state_32829__$1;
(statearr_32844_36490[(2)] = inst_32825);

(statearr_32844_36490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36459,c__32082__auto___36480,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async))
;
return ((function (__36459,switch__31483__auto__,c__32082__auto___36480,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0 = (function (){
var statearr_32852 = [null,null,null,null,null,null,null];
(statearr_32852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__);

(statearr_32852[(1)] = (1));

return statearr_32852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1 = (function (state_32829){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_32829);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e32856){var ex__31488__auto__ = e32856;
var statearr_32857_36496 = state_32829;
(statearr_32857_36496[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_32829[(4)]))){
var statearr_32858_36497 = state_32829;
(statearr_32858_36497[(1)] = cljs.core.first((state_32829[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36498 = state_32829;
state_32829 = G__36498;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = function(state_32829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1.call(this,state_32829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__;
})()
;})(__36459,switch__31483__auto__,c__32082__auto___36480,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async))
})();
var state__32084__auto__ = (function (){var statearr_32860 = f__32083__auto__();
(statearr_32860[(6)] = c__32082__auto___36480);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
});})(__36459,c__32082__auto___36480,G__32772_36460,G__32772_36461__$1,n__5636__auto___36458,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32772_36461__$1)].join('')));

}

var G__36499 = (__36459 + (1));
__36459 = G__36499;
continue;
} else {
}
break;
}

var c__32082__auto___36500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_32887){
var state_val_32888 = (state_32887[(1)]);
if((state_val_32888 === (7))){
var inst_32883 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_32894_36501 = state_32887__$1;
(statearr_32894_36501[(2)] = inst_32883);

(statearr_32894_36501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (1))){
var state_32887__$1 = state_32887;
var statearr_32897_36503 = state_32887__$1;
(statearr_32897_36503[(2)] = null);

(statearr_32897_36503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (4))){
var inst_32867 = (state_32887[(7)]);
var inst_32867__$1 = (state_32887[(2)]);
var inst_32868 = (inst_32867__$1 == null);
var state_32887__$1 = (function (){var statearr_32901 = state_32887;
(statearr_32901[(7)] = inst_32867__$1);

return statearr_32901;
})();
if(cljs.core.truth_(inst_32868)){
var statearr_32903_36505 = state_32887__$1;
(statearr_32903_36505[(1)] = (5));

} else {
var statearr_32904_36506 = state_32887__$1;
(statearr_32904_36506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (6))){
var inst_32867 = (state_32887[(7)]);
var inst_32873 = (state_32887[(8)]);
var inst_32873__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32875 = [inst_32867,inst_32873__$1];
var inst_32876 = (new cljs.core.PersistentVector(null,2,(5),inst_32874,inst_32875,null));
var state_32887__$1 = (function (){var statearr_32913 = state_32887;
(statearr_32913[(8)] = inst_32873__$1);

return statearr_32913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32887__$1,(8),jobs,inst_32876);
} else {
if((state_val_32888 === (3))){
var inst_32885 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32887__$1,inst_32885);
} else {
if((state_val_32888 === (2))){
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32887__$1,(4),from);
} else {
if((state_val_32888 === (9))){
var inst_32880 = (state_32887[(2)]);
var state_32887__$1 = (function (){var statearr_32934 = state_32887;
(statearr_32934[(9)] = inst_32880);

return statearr_32934;
})();
var statearr_32937_36507 = state_32887__$1;
(statearr_32937_36507[(2)] = null);

(statearr_32937_36507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (5))){
var inst_32870 = cljs.core.async.close_BANG_(jobs);
var state_32887__$1 = state_32887;
var statearr_32942_36508 = state_32887__$1;
(statearr_32942_36508[(2)] = inst_32870);

(statearr_32942_36508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (8))){
var inst_32873 = (state_32887[(8)]);
var inst_32878 = (state_32887[(2)]);
var state_32887__$1 = (function (){var statearr_32944 = state_32887;
(statearr_32944[(10)] = inst_32878);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32887__$1,(9),results,inst_32873);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0 = (function (){
var statearr_32951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__);

(statearr_32951[(1)] = (1));

return statearr_32951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1 = (function (state_32887){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_32887);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e32953){var ex__31488__auto__ = e32953;
var statearr_32954_36513 = state_32887;
(statearr_32954_36513[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_32887[(4)]))){
var statearr_32961_36514 = state_32887;
(statearr_32961_36514[(1)] = cljs.core.first((state_32887[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36515 = state_32887;
state_32887 = G__36515;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = function(state_32887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1.call(this,state_32887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_32964 = f__32083__auto__();
(statearr_32964[(6)] = c__32082__auto___36500);

return statearr_32964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


var c__32082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_33020){
var state_val_33021 = (state_33020[(1)]);
if((state_val_33021 === (7))){
var inst_33013 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33050_36516 = state_33020__$1;
(statearr_33050_36516[(2)] = inst_33013);

(statearr_33050_36516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (20))){
var state_33020__$1 = state_33020;
var statearr_33051_36517 = state_33020__$1;
(statearr_33051_36517[(2)] = null);

(statearr_33051_36517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (1))){
var state_33020__$1 = state_33020;
var statearr_33053_36519 = state_33020__$1;
(statearr_33053_36519[(2)] = null);

(statearr_33053_36519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (4))){
var inst_32970 = (state_33020[(7)]);
var inst_32970__$1 = (state_33020[(2)]);
var inst_32971 = (inst_32970__$1 == null);
var state_33020__$1 = (function (){var statearr_33060 = state_33020;
(statearr_33060[(7)] = inst_32970__$1);

return statearr_33060;
})();
if(cljs.core.truth_(inst_32971)){
var statearr_33070_36521 = state_33020__$1;
(statearr_33070_36521[(1)] = (5));

} else {
var statearr_33073_36522 = state_33020__$1;
(statearr_33073_36522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (15))){
var inst_32995 = (state_33020[(8)]);
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33020__$1,(18),to,inst_32995);
} else {
if((state_val_33021 === (21))){
var inst_33008 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33086_36523 = state_33020__$1;
(statearr_33086_36523[(2)] = inst_33008);

(statearr_33086_36523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (13))){
var inst_33010 = (state_33020[(2)]);
var state_33020__$1 = (function (){var statearr_33093 = state_33020;
(statearr_33093[(9)] = inst_33010);

return statearr_33093;
})();
var statearr_33096_36524 = state_33020__$1;
(statearr_33096_36524[(2)] = null);

(statearr_33096_36524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (6))){
var inst_32970 = (state_33020[(7)]);
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33020__$1,(11),inst_32970);
} else {
if((state_val_33021 === (17))){
var inst_33003 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
if(cljs.core.truth_(inst_33003)){
var statearr_33113_36532 = state_33020__$1;
(statearr_33113_36532[(1)] = (19));

} else {
var statearr_33114_36533 = state_33020__$1;
(statearr_33114_36533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (3))){
var inst_33015 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33020__$1,inst_33015);
} else {
if((state_val_33021 === (12))){
var inst_32980 = (state_33020[(10)]);
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33020__$1,(14),inst_32980);
} else {
if((state_val_33021 === (2))){
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33020__$1,(4),results);
} else {
if((state_val_33021 === (19))){
var state_33020__$1 = state_33020;
var statearr_33119_36537 = state_33020__$1;
(statearr_33119_36537[(2)] = null);

(statearr_33119_36537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (11))){
var inst_32980 = (state_33020[(2)]);
var state_33020__$1 = (function (){var statearr_33123 = state_33020;
(statearr_33123[(10)] = inst_32980);

return statearr_33123;
})();
var statearr_33125_36538 = state_33020__$1;
(statearr_33125_36538[(2)] = null);

(statearr_33125_36538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (9))){
var state_33020__$1 = state_33020;
var statearr_33131_36539 = state_33020__$1;
(statearr_33131_36539[(2)] = null);

(statearr_33131_36539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (5))){
var state_33020__$1 = state_33020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33138_36540 = state_33020__$1;
(statearr_33138_36540[(1)] = (8));

} else {
var statearr_33140_36541 = state_33020__$1;
(statearr_33140_36541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (14))){
var inst_32995 = (state_33020[(8)]);
var inst_32997 = (state_33020[(11)]);
var inst_32995__$1 = (state_33020[(2)]);
var inst_32996 = (inst_32995__$1 == null);
var inst_32997__$1 = cljs.core.not(inst_32996);
var state_33020__$1 = (function (){var statearr_33142 = state_33020;
(statearr_33142[(8)] = inst_32995__$1);

(statearr_33142[(11)] = inst_32997__$1);

return statearr_33142;
})();
if(inst_32997__$1){
var statearr_33143_36542 = state_33020__$1;
(statearr_33143_36542[(1)] = (15));

} else {
var statearr_33145_36543 = state_33020__$1;
(statearr_33145_36543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (16))){
var inst_32997 = (state_33020[(11)]);
var state_33020__$1 = state_33020;
var statearr_33147_36544 = state_33020__$1;
(statearr_33147_36544[(2)] = inst_32997);

(statearr_33147_36544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (10))){
var inst_32977 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33150_36545 = state_33020__$1;
(statearr_33150_36545[(2)] = inst_32977);

(statearr_33150_36545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (18))){
var inst_33000 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33155_36546 = state_33020__$1;
(statearr_33155_36546[(2)] = inst_33000);

(statearr_33155_36546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (8))){
var inst_32974 = cljs.core.async.close_BANG_(to);
var state_33020__$1 = state_33020;
var statearr_33160_36547 = state_33020__$1;
(statearr_33160_36547[(2)] = inst_32974);

(statearr_33160_36547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0 = (function (){
var statearr_33167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__);

(statearr_33167[(1)] = (1));

return statearr_33167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1 = (function (state_33020){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_33020);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e33170){var ex__31488__auto__ = e33170;
var statearr_33174_36549 = state_33020;
(statearr_33174_36549[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_33020[(4)]))){
var statearr_33176_36551 = state_33020;
(statearr_33176_36551[(1)] = cljs.core.first((state_33020[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36552 = state_33020;
state_33020 = G__36552;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__ = function(state_33020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1.call(this,state_33020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_33177 = f__32083__auto__();
(statearr_33177[(6)] = c__32082__auto__);

return statearr_33177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));

return c__32082__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33180 = arguments.length;
switch (G__33180) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33192 = arguments.length;
switch (G__33192) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33205 = arguments.length;
switch (G__33205) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32082__auto___36559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_33240){
var state_val_33241 = (state_33240[(1)]);
if((state_val_33241 === (7))){
var inst_33235 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33244_36560 = state_33240__$1;
(statearr_33244_36560[(2)] = inst_33235);

(statearr_33244_36560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (1))){
var state_33240__$1 = state_33240;
var statearr_33251_36561 = state_33240__$1;
(statearr_33251_36561[(2)] = null);

(statearr_33251_36561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (4))){
var inst_33215 = (state_33240[(7)]);
var inst_33215__$1 = (state_33240[(2)]);
var inst_33217 = (inst_33215__$1 == null);
var state_33240__$1 = (function (){var statearr_33253 = state_33240;
(statearr_33253[(7)] = inst_33215__$1);

return statearr_33253;
})();
if(cljs.core.truth_(inst_33217)){
var statearr_33259_36562 = state_33240__$1;
(statearr_33259_36562[(1)] = (5));

} else {
var statearr_33261_36563 = state_33240__$1;
(statearr_33261_36563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (13))){
var state_33240__$1 = state_33240;
var statearr_33263_36564 = state_33240__$1;
(statearr_33263_36564[(2)] = null);

(statearr_33263_36564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (6))){
var inst_33215 = (state_33240[(7)]);
var inst_33222 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33215) : p.call(null,inst_33215));
var state_33240__$1 = state_33240;
if(cljs.core.truth_(inst_33222)){
var statearr_33264_36566 = state_33240__$1;
(statearr_33264_36566[(1)] = (9));

} else {
var statearr_33265_36567 = state_33240__$1;
(statearr_33265_36567[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (3))){
var inst_33238 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33240__$1,inst_33238);
} else {
if((state_val_33241 === (12))){
var state_33240__$1 = state_33240;
var statearr_33266_36568 = state_33240__$1;
(statearr_33266_36568[(2)] = null);

(statearr_33266_36568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (2))){
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33240__$1,(4),ch);
} else {
if((state_val_33241 === (11))){
var inst_33215 = (state_33240[(7)]);
var inst_33226 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33240__$1,(8),inst_33226,inst_33215);
} else {
if((state_val_33241 === (9))){
var state_33240__$1 = state_33240;
var statearr_33269_36569 = state_33240__$1;
(statearr_33269_36569[(2)] = tc);

(statearr_33269_36569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (5))){
var inst_33219 = cljs.core.async.close_BANG_(tc);
var inst_33220 = cljs.core.async.close_BANG_(fc);
var state_33240__$1 = (function (){var statearr_33276 = state_33240;
(statearr_33276[(8)] = inst_33219);

return statearr_33276;
})();
var statearr_33277_36570 = state_33240__$1;
(statearr_33277_36570[(2)] = inst_33220);

(statearr_33277_36570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (14))){
var inst_33233 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
var statearr_33278_36571 = state_33240__$1;
(statearr_33278_36571[(2)] = inst_33233);

(statearr_33278_36571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (10))){
var state_33240__$1 = state_33240;
var statearr_33279_36572 = state_33240__$1;
(statearr_33279_36572[(2)] = fc);

(statearr_33279_36572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33241 === (8))){
var inst_33228 = (state_33240[(2)]);
var state_33240__$1 = state_33240;
if(cljs.core.truth_(inst_33228)){
var statearr_33282_36573 = state_33240__$1;
(statearr_33282_36573[(1)] = (12));

} else {
var statearr_33283_36574 = state_33240__$1;
(statearr_33283_36574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_33288 = [null,null,null,null,null,null,null,null,null];
(statearr_33288[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_33288[(1)] = (1));

return statearr_33288;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_33240){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_33240);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e33290){var ex__31488__auto__ = e33290;
var statearr_33292_36575 = state_33240;
(statearr_33292_36575[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_33240[(4)]))){
var statearr_33293_36576 = state_33240;
(statearr_33293_36576[(1)] = cljs.core.first((state_33240[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36577 = state_33240;
state_33240 = G__36577;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_33240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_33240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_33299 = f__32083__auto__();
(statearr_33299[(6)] = c__32082__auto___36559);

return statearr_33299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_33324){
var state_val_33325 = (state_33324[(1)]);
if((state_val_33325 === (7))){
var inst_33320 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33331_36578 = state_33324__$1;
(statearr_33331_36578[(2)] = inst_33320);

(statearr_33331_36578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (1))){
var inst_33301 = init;
var inst_33303 = inst_33301;
var state_33324__$1 = (function (){var statearr_33332 = state_33324;
(statearr_33332[(7)] = inst_33303);

return statearr_33332;
})();
var statearr_33333_36579 = state_33324__$1;
(statearr_33333_36579[(2)] = null);

(statearr_33333_36579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (4))){
var inst_33307 = (state_33324[(8)]);
var inst_33307__$1 = (state_33324[(2)]);
var inst_33308 = (inst_33307__$1 == null);
var state_33324__$1 = (function (){var statearr_33342 = state_33324;
(statearr_33342[(8)] = inst_33307__$1);

return statearr_33342;
})();
if(cljs.core.truth_(inst_33308)){
var statearr_33343_36584 = state_33324__$1;
(statearr_33343_36584[(1)] = (5));

} else {
var statearr_33346_36585 = state_33324__$1;
(statearr_33346_36585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (6))){
var inst_33307 = (state_33324[(8)]);
var inst_33311 = (state_33324[(9)]);
var inst_33303 = (state_33324[(7)]);
var inst_33311__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33303,inst_33307) : f.call(null,inst_33303,inst_33307));
var inst_33312 = cljs.core.reduced_QMARK_(inst_33311__$1);
var state_33324__$1 = (function (){var statearr_33348 = state_33324;
(statearr_33348[(9)] = inst_33311__$1);

return statearr_33348;
})();
if(inst_33312){
var statearr_33351_36586 = state_33324__$1;
(statearr_33351_36586[(1)] = (8));

} else {
var statearr_33352_36587 = state_33324__$1;
(statearr_33352_36587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (3))){
var inst_33322 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33324__$1,inst_33322);
} else {
if((state_val_33325 === (2))){
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33324__$1,(4),ch);
} else {
if((state_val_33325 === (9))){
var inst_33311 = (state_33324[(9)]);
var inst_33303 = inst_33311;
var state_33324__$1 = (function (){var statearr_33354 = state_33324;
(statearr_33354[(7)] = inst_33303);

return statearr_33354;
})();
var statearr_33355_36588 = state_33324__$1;
(statearr_33355_36588[(2)] = null);

(statearr_33355_36588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (5))){
var inst_33303 = (state_33324[(7)]);
var state_33324__$1 = state_33324;
var statearr_33357_36589 = state_33324__$1;
(statearr_33357_36589[(2)] = inst_33303);

(statearr_33357_36589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (10))){
var inst_33318 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33358_36590 = state_33324__$1;
(statearr_33358_36590[(2)] = inst_33318);

(statearr_33358_36590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (8))){
var inst_33311 = (state_33324[(9)]);
var inst_33314 = cljs.core.deref(inst_33311);
var state_33324__$1 = state_33324;
var statearr_33363_36591 = state_33324__$1;
(statearr_33363_36591[(2)] = inst_33314);

(statearr_33363_36591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31484__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31484__auto____0 = (function (){
var statearr_33368 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33368[(0)] = cljs$core$async$reduce_$_state_machine__31484__auto__);

(statearr_33368[(1)] = (1));

return statearr_33368;
});
var cljs$core$async$reduce_$_state_machine__31484__auto____1 = (function (state_33324){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_33324);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e33369){var ex__31488__auto__ = e33369;
var statearr_33370_36592 = state_33324;
(statearr_33370_36592[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_33324[(4)]))){
var statearr_33371_36593 = state_33324;
(statearr_33371_36593[(1)] = cljs.core.first((state_33324[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36594 = state_33324;
state_33324 = G__36594;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31484__auto__ = function(state_33324){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31484__auto____1.call(this,state_33324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31484__auto____0;
cljs$core$async$reduce_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31484__auto____1;
return cljs$core$async$reduce_$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_33375 = f__32083__auto__();
(statearr_33375[(6)] = c__32082__auto__);

return statearr_33375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));

return c__32082__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_33382){
var state_val_33383 = (state_33382[(1)]);
if((state_val_33383 === (1))){
var inst_33377 = cljs.core.async.reduce(f__$1,init,ch);
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33382__$1,(2),inst_33377);
} else {
if((state_val_33383 === (2))){
var inst_33379 = (state_33382[(2)]);
var inst_33380 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33379) : f__$1.call(null,inst_33379));
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33382__$1,inst_33380);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31484__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31484__auto____0 = (function (){
var statearr_33394 = [null,null,null,null,null,null,null];
(statearr_33394[(0)] = cljs$core$async$transduce_$_state_machine__31484__auto__);

(statearr_33394[(1)] = (1));

return statearr_33394;
});
var cljs$core$async$transduce_$_state_machine__31484__auto____1 = (function (state_33382){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_33382);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e33396){var ex__31488__auto__ = e33396;
var statearr_33397_36595 = state_33382;
(statearr_33397_36595[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_33382[(4)]))){
var statearr_33402_36596 = state_33382;
(statearr_33402_36596[(1)] = cljs.core.first((state_33382[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36597 = state_33382;
state_33382 = G__36597;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31484__auto__ = function(state_33382){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31484__auto____1.call(this,state_33382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31484__auto____0;
cljs$core$async$transduce_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31484__auto____1;
return cljs$core$async$transduce_$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_33408 = f__32083__auto__();
(statearr_33408[(6)] = c__32082__auto__);

return statearr_33408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));

return c__32082__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33414 = arguments.length;
switch (G__33414) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_33458){
var state_val_33459 = (state_33458[(1)]);
if((state_val_33459 === (7))){
var inst_33437 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
var statearr_33462_36599 = state_33458__$1;
(statearr_33462_36599[(2)] = inst_33437);

(statearr_33462_36599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (1))){
var inst_33427 = cljs.core.seq(coll);
var inst_33429 = inst_33427;
var state_33458__$1 = (function (){var statearr_33463 = state_33458;
(statearr_33463[(7)] = inst_33429);

return statearr_33463;
})();
var statearr_33464_36600 = state_33458__$1;
(statearr_33464_36600[(2)] = null);

(statearr_33464_36600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (4))){
var inst_33429 = (state_33458[(7)]);
var inst_33435 = cljs.core.first(inst_33429);
var state_33458__$1 = state_33458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33458__$1,(7),ch,inst_33435);
} else {
if((state_val_33459 === (13))){
var inst_33451 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
var statearr_33466_36601 = state_33458__$1;
(statearr_33466_36601[(2)] = inst_33451);

(statearr_33466_36601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (6))){
var inst_33440 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
if(cljs.core.truth_(inst_33440)){
var statearr_33467_36602 = state_33458__$1;
(statearr_33467_36602[(1)] = (8));

} else {
var statearr_33468_36603 = state_33458__$1;
(statearr_33468_36603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (3))){
var inst_33455 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33458__$1,inst_33455);
} else {
if((state_val_33459 === (12))){
var state_33458__$1 = state_33458;
var statearr_33472_36604 = state_33458__$1;
(statearr_33472_36604[(2)] = null);

(statearr_33472_36604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (2))){
var inst_33429 = (state_33458[(7)]);
var state_33458__$1 = state_33458;
if(cljs.core.truth_(inst_33429)){
var statearr_33474_36605 = state_33458__$1;
(statearr_33474_36605[(1)] = (4));

} else {
var statearr_33475_36607 = state_33458__$1;
(statearr_33475_36607[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (11))){
var inst_33448 = cljs.core.async.close_BANG_(ch);
var state_33458__$1 = state_33458;
var statearr_33476_36608 = state_33458__$1;
(statearr_33476_36608[(2)] = inst_33448);

(statearr_33476_36608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (9))){
var state_33458__$1 = state_33458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33486_36610 = state_33458__$1;
(statearr_33486_36610[(1)] = (11));

} else {
var statearr_33487_36611 = state_33458__$1;
(statearr_33487_36611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (5))){
var inst_33429 = (state_33458[(7)]);
var state_33458__$1 = state_33458;
var statearr_33488_36612 = state_33458__$1;
(statearr_33488_36612[(2)] = inst_33429);

(statearr_33488_36612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (10))){
var inst_33453 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
var statearr_33489_36613 = state_33458__$1;
(statearr_33489_36613[(2)] = inst_33453);

(statearr_33489_36613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (8))){
var inst_33429 = (state_33458[(7)]);
var inst_33443 = cljs.core.next(inst_33429);
var inst_33429__$1 = inst_33443;
var state_33458__$1 = (function (){var statearr_33494 = state_33458;
(statearr_33494[(7)] = inst_33429__$1);

return statearr_33494;
})();
var statearr_33495_36614 = state_33458__$1;
(statearr_33495_36614[(2)] = null);

(statearr_33495_36614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_33496 = [null,null,null,null,null,null,null,null];
(statearr_33496[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_33496[(1)] = (1));

return statearr_33496;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_33458){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_33458);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e33497){var ex__31488__auto__ = e33497;
var statearr_33499_36616 = state_33458;
(statearr_33499_36616[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_33458[(4)]))){
var statearr_33503_36617 = state_33458;
(statearr_33503_36617[(1)] = cljs.core.first((state_33458[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36618 = state_33458;
state_33458 = G__36618;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_33458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_33458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_33506 = f__32083__auto__();
(statearr_33506[(6)] = c__32082__auto__);

return statearr_33506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));

return c__32082__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33520 = arguments.length;
switch (G__33520) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36620 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36620(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36621 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36621(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36625 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36625(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36626 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36626(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33617 = (function (ch,cs,meta33618){
this.ch = ch;
this.cs = cs;
this.meta33618 = meta33618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33619,meta33618__$1){
var self__ = this;
var _33619__$1 = this;
return (new cljs.core.async.t_cljs$core$async33617(self__.ch,self__.cs,meta33618__$1));
}));

(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33619){
var self__ = this;
var _33619__$1 = this;
return self__.meta33618;
}));

(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33617.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33618","meta33618",1385745087,null)], null);
}));

(cljs.core.async.t_cljs$core$async33617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33617");

(cljs.core.async.t_cljs$core$async33617.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33617.
 */
cljs.core.async.__GT_t_cljs$core$async33617 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33617(ch__$1,cs__$1,meta33618){
return (new cljs.core.async.t_cljs$core$async33617(ch__$1,cs__$1,meta33618));
});

}

return (new cljs.core.async.t_cljs$core$async33617(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32082__auto___36640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_33860){
var state_val_33862 = (state_33860[(1)]);
if((state_val_33862 === (7))){
var inst_33851 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33872_36641 = state_33860__$1;
(statearr_33872_36641[(2)] = inst_33851);

(statearr_33872_36641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (20))){
var inst_33712 = (state_33860[(7)]);
var inst_33728 = cljs.core.first(inst_33712);
var inst_33729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33728,(0),null);
var inst_33731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33728,(1),null);
var state_33860__$1 = (function (){var statearr_33887 = state_33860;
(statearr_33887[(8)] = inst_33729);

return statearr_33887;
})();
if(cljs.core.truth_(inst_33731)){
var statearr_33889_36642 = state_33860__$1;
(statearr_33889_36642[(1)] = (22));

} else {
var statearr_33890_36643 = state_33860__$1;
(statearr_33890_36643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (27))){
var inst_33770 = (state_33860[(9)]);
var inst_33671 = (state_33860[(10)]);
var inst_33783 = (state_33860[(11)]);
var inst_33772 = (state_33860[(12)]);
var inst_33783__$1 = cljs.core._nth(inst_33770,inst_33772);
var inst_33784 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33783__$1,inst_33671,done);
var state_33860__$1 = (function (){var statearr_33899 = state_33860;
(statearr_33899[(11)] = inst_33783__$1);

return statearr_33899;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33901_36647 = state_33860__$1;
(statearr_33901_36647[(1)] = (30));

} else {
var statearr_33902_36648 = state_33860__$1;
(statearr_33902_36648[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (1))){
var state_33860__$1 = state_33860;
var statearr_33904_36649 = state_33860__$1;
(statearr_33904_36649[(2)] = null);

(statearr_33904_36649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (24))){
var inst_33712 = (state_33860[(7)]);
var inst_33738 = (state_33860[(2)]);
var inst_33739 = cljs.core.next(inst_33712);
var inst_33682 = inst_33739;
var inst_33683 = null;
var inst_33684 = (0);
var inst_33685 = (0);
var state_33860__$1 = (function (){var statearr_33911 = state_33860;
(statearr_33911[(13)] = inst_33738);

(statearr_33911[(14)] = inst_33682);

(statearr_33911[(15)] = inst_33685);

(statearr_33911[(16)] = inst_33683);

(statearr_33911[(17)] = inst_33684);

return statearr_33911;
})();
var statearr_33912_36650 = state_33860__$1;
(statearr_33912_36650[(2)] = null);

(statearr_33912_36650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (39))){
var state_33860__$1 = state_33860;
var statearr_33928_36651 = state_33860__$1;
(statearr_33928_36651[(2)] = null);

(statearr_33928_36651[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (4))){
var inst_33671 = (state_33860[(10)]);
var inst_33671__$1 = (state_33860[(2)]);
var inst_33673 = (inst_33671__$1 == null);
var state_33860__$1 = (function (){var statearr_33933 = state_33860;
(statearr_33933[(10)] = inst_33671__$1);

return statearr_33933;
})();
if(cljs.core.truth_(inst_33673)){
var statearr_33934_36653 = state_33860__$1;
(statearr_33934_36653[(1)] = (5));

} else {
var statearr_33936_36656 = state_33860__$1;
(statearr_33936_36656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (15))){
var inst_33682 = (state_33860[(14)]);
var inst_33685 = (state_33860[(15)]);
var inst_33683 = (state_33860[(16)]);
var inst_33684 = (state_33860[(17)]);
var inst_33707 = (state_33860[(2)]);
var inst_33709 = (inst_33685 + (1));
var tmp33918 = inst_33682;
var tmp33919 = inst_33683;
var tmp33920 = inst_33684;
var inst_33682__$1 = tmp33918;
var inst_33683__$1 = tmp33919;
var inst_33684__$1 = tmp33920;
var inst_33685__$1 = inst_33709;
var state_33860__$1 = (function (){var statearr_33940 = state_33860;
(statearr_33940[(14)] = inst_33682__$1);

(statearr_33940[(15)] = inst_33685__$1);

(statearr_33940[(18)] = inst_33707);

(statearr_33940[(16)] = inst_33683__$1);

(statearr_33940[(17)] = inst_33684__$1);

return statearr_33940;
})();
var statearr_33944_36657 = state_33860__$1;
(statearr_33944_36657[(2)] = null);

(statearr_33944_36657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (21))){
var inst_33742 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33959_36658 = state_33860__$1;
(statearr_33959_36658[(2)] = inst_33742);

(statearr_33959_36658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (31))){
var inst_33783 = (state_33860[(11)]);
var inst_33789 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33783);
var state_33860__$1 = state_33860;
var statearr_33962_36659 = state_33860__$1;
(statearr_33962_36659[(2)] = inst_33789);

(statearr_33962_36659[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (32))){
var inst_33770 = (state_33860[(9)]);
var inst_33769 = (state_33860[(19)]);
var inst_33772 = (state_33860[(12)]);
var inst_33771 = (state_33860[(20)]);
var inst_33791 = (state_33860[(2)]);
var inst_33793 = (inst_33772 + (1));
var tmp33954 = inst_33770;
var tmp33955 = inst_33769;
var tmp33956 = inst_33771;
var inst_33769__$1 = tmp33955;
var inst_33770__$1 = tmp33954;
var inst_33771__$1 = tmp33956;
var inst_33772__$1 = inst_33793;
var state_33860__$1 = (function (){var statearr_33966 = state_33860;
(statearr_33966[(9)] = inst_33770__$1);

(statearr_33966[(21)] = inst_33791);

(statearr_33966[(19)] = inst_33769__$1);

(statearr_33966[(12)] = inst_33772__$1);

(statearr_33966[(20)] = inst_33771__$1);

return statearr_33966;
})();
var statearr_33969_36664 = state_33860__$1;
(statearr_33969_36664[(2)] = null);

(statearr_33969_36664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (40))){
var inst_33811 = (state_33860[(22)]);
var inst_33818 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33811);
var state_33860__$1 = state_33860;
var statearr_33976_36668 = state_33860__$1;
(statearr_33976_36668[(2)] = inst_33818);

(statearr_33976_36668[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (33))){
var inst_33797 = (state_33860[(23)]);
var inst_33800 = cljs.core.chunked_seq_QMARK_(inst_33797);
var state_33860__$1 = state_33860;
if(inst_33800){
var statearr_33981_36669 = state_33860__$1;
(statearr_33981_36669[(1)] = (36));

} else {
var statearr_33982_36670 = state_33860__$1;
(statearr_33982_36670[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (13))){
var inst_33701 = (state_33860[(24)]);
var inst_33704 = cljs.core.async.close_BANG_(inst_33701);
var state_33860__$1 = state_33860;
var statearr_33986_36671 = state_33860__$1;
(statearr_33986_36671[(2)] = inst_33704);

(statearr_33986_36671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (22))){
var inst_33729 = (state_33860[(8)]);
var inst_33735 = cljs.core.async.close_BANG_(inst_33729);
var state_33860__$1 = state_33860;
var statearr_33989_36672 = state_33860__$1;
(statearr_33989_36672[(2)] = inst_33735);

(statearr_33989_36672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (36))){
var inst_33797 = (state_33860[(23)]);
var inst_33803 = cljs.core.chunk_first(inst_33797);
var inst_33805 = cljs.core.chunk_rest(inst_33797);
var inst_33808 = cljs.core.count(inst_33803);
var inst_33769 = inst_33805;
var inst_33770 = inst_33803;
var inst_33771 = inst_33808;
var inst_33772 = (0);
var state_33860__$1 = (function (){var statearr_33993 = state_33860;
(statearr_33993[(9)] = inst_33770);

(statearr_33993[(19)] = inst_33769);

(statearr_33993[(12)] = inst_33772);

(statearr_33993[(20)] = inst_33771);

return statearr_33993;
})();
var statearr_33996_36674 = state_33860__$1;
(statearr_33996_36674[(2)] = null);

(statearr_33996_36674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (41))){
var inst_33797 = (state_33860[(23)]);
var inst_33820 = (state_33860[(2)]);
var inst_33823 = cljs.core.next(inst_33797);
var inst_33769 = inst_33823;
var inst_33770 = null;
var inst_33771 = (0);
var inst_33772 = (0);
var state_33860__$1 = (function (){var statearr_34003 = state_33860;
(statearr_34003[(9)] = inst_33770);

(statearr_34003[(25)] = inst_33820);

(statearr_34003[(19)] = inst_33769);

(statearr_34003[(12)] = inst_33772);

(statearr_34003[(20)] = inst_33771);

return statearr_34003;
})();
var statearr_34005_36678 = state_33860__$1;
(statearr_34005_36678[(2)] = null);

(statearr_34005_36678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (43))){
var state_33860__$1 = state_33860;
var statearr_34009_36679 = state_33860__$1;
(statearr_34009_36679[(2)] = null);

(statearr_34009_36679[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (29))){
var inst_33831 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_34011_36680 = state_33860__$1;
(statearr_34011_36680[(2)] = inst_33831);

(statearr_34011_36680[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (44))){
var inst_33848 = (state_33860[(2)]);
var state_33860__$1 = (function (){var statearr_34015 = state_33860;
(statearr_34015[(26)] = inst_33848);

return statearr_34015;
})();
var statearr_34016_36681 = state_33860__$1;
(statearr_34016_36681[(2)] = null);

(statearr_34016_36681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (6))){
var inst_33758 = (state_33860[(27)]);
var inst_33757 = cljs.core.deref(cs);
var inst_33758__$1 = cljs.core.keys(inst_33757);
var inst_33759 = cljs.core.count(inst_33758__$1);
var inst_33760 = cljs.core.reset_BANG_(dctr,inst_33759);
var inst_33767 = cljs.core.seq(inst_33758__$1);
var inst_33769 = inst_33767;
var inst_33770 = null;
var inst_33771 = (0);
var inst_33772 = (0);
var state_33860__$1 = (function (){var statearr_34021 = state_33860;
(statearr_34021[(9)] = inst_33770);

(statearr_34021[(19)] = inst_33769);

(statearr_34021[(27)] = inst_33758__$1);

(statearr_34021[(28)] = inst_33760);

(statearr_34021[(12)] = inst_33772);

(statearr_34021[(20)] = inst_33771);

return statearr_34021;
})();
var statearr_34023_36685 = state_33860__$1;
(statearr_34023_36685[(2)] = null);

(statearr_34023_36685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (28))){
var inst_33769 = (state_33860[(19)]);
var inst_33797 = (state_33860[(23)]);
var inst_33797__$1 = cljs.core.seq(inst_33769);
var state_33860__$1 = (function (){var statearr_34024 = state_33860;
(statearr_34024[(23)] = inst_33797__$1);

return statearr_34024;
})();
if(inst_33797__$1){
var statearr_34028_36686 = state_33860__$1;
(statearr_34028_36686[(1)] = (33));

} else {
var statearr_34030_36687 = state_33860__$1;
(statearr_34030_36687[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (25))){
var inst_33772 = (state_33860[(12)]);
var inst_33771 = (state_33860[(20)]);
var inst_33774 = (inst_33772 < inst_33771);
var inst_33775 = inst_33774;
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33775)){
var statearr_34034_36688 = state_33860__$1;
(statearr_34034_36688[(1)] = (27));

} else {
var statearr_34035_36689 = state_33860__$1;
(statearr_34035_36689[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (34))){
var state_33860__$1 = state_33860;
var statearr_34037_36690 = state_33860__$1;
(statearr_34037_36690[(2)] = null);

(statearr_34037_36690[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (17))){
var state_33860__$1 = state_33860;
var statearr_34041_36691 = state_33860__$1;
(statearr_34041_36691[(2)] = null);

(statearr_34041_36691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (3))){
var inst_33853 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33860__$1,inst_33853);
} else {
if((state_val_33862 === (12))){
var inst_33752 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_34043_36692 = state_33860__$1;
(statearr_34043_36692[(2)] = inst_33752);

(statearr_34043_36692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (2))){
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33860__$1,(4),ch);
} else {
if((state_val_33862 === (23))){
var state_33860__$1 = state_33860;
var statearr_34048_36693 = state_33860__$1;
(statearr_34048_36693[(2)] = null);

(statearr_34048_36693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (35))){
var inst_33829 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_34054_36694 = state_33860__$1;
(statearr_34054_36694[(2)] = inst_33829);

(statearr_34054_36694[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (19))){
var inst_33712 = (state_33860[(7)]);
var inst_33719 = cljs.core.chunk_first(inst_33712);
var inst_33720 = cljs.core.chunk_rest(inst_33712);
var inst_33721 = cljs.core.count(inst_33719);
var inst_33682 = inst_33720;
var inst_33683 = inst_33719;
var inst_33684 = inst_33721;
var inst_33685 = (0);
var state_33860__$1 = (function (){var statearr_34055 = state_33860;
(statearr_34055[(14)] = inst_33682);

(statearr_34055[(15)] = inst_33685);

(statearr_34055[(16)] = inst_33683);

(statearr_34055[(17)] = inst_33684);

return statearr_34055;
})();
var statearr_34056_36698 = state_33860__$1;
(statearr_34056_36698[(2)] = null);

(statearr_34056_36698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (11))){
var inst_33682 = (state_33860[(14)]);
var inst_33712 = (state_33860[(7)]);
var inst_33712__$1 = cljs.core.seq(inst_33682);
var state_33860__$1 = (function (){var statearr_34063 = state_33860;
(statearr_34063[(7)] = inst_33712__$1);

return statearr_34063;
})();
if(inst_33712__$1){
var statearr_34069_36703 = state_33860__$1;
(statearr_34069_36703[(1)] = (16));

} else {
var statearr_34070_36704 = state_33860__$1;
(statearr_34070_36704[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (9))){
var inst_33754 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_34073_36705 = state_33860__$1;
(statearr_34073_36705[(2)] = inst_33754);

(statearr_34073_36705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (5))){
var inst_33680 = cljs.core.deref(cs);
var inst_33681 = cljs.core.seq(inst_33680);
var inst_33682 = inst_33681;
var inst_33683 = null;
var inst_33684 = (0);
var inst_33685 = (0);
var state_33860__$1 = (function (){var statearr_34077 = state_33860;
(statearr_34077[(14)] = inst_33682);

(statearr_34077[(15)] = inst_33685);

(statearr_34077[(16)] = inst_33683);

(statearr_34077[(17)] = inst_33684);

return statearr_34077;
})();
var statearr_34081_36706 = state_33860__$1;
(statearr_34081_36706[(2)] = null);

(statearr_34081_36706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (14))){
var state_33860__$1 = state_33860;
var statearr_34084_36707 = state_33860__$1;
(statearr_34084_36707[(2)] = null);

(statearr_34084_36707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (45))){
var inst_33842 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_34089_36708 = state_33860__$1;
(statearr_34089_36708[(2)] = inst_33842);

(statearr_34089_36708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (26))){
var inst_33758 = (state_33860[(27)]);
var inst_33834 = (state_33860[(2)]);
var inst_33836 = cljs.core.seq(inst_33758);
var state_33860__$1 = (function (){var statearr_34091 = state_33860;
(statearr_34091[(29)] = inst_33834);

return statearr_34091;
})();
if(inst_33836){
var statearr_34092_36709 = state_33860__$1;
(statearr_34092_36709[(1)] = (42));

} else {
var statearr_34097_36710 = state_33860__$1;
(statearr_34097_36710[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (16))){
var inst_33712 = (state_33860[(7)]);
var inst_33717 = cljs.core.chunked_seq_QMARK_(inst_33712);
var state_33860__$1 = state_33860;
if(inst_33717){
var statearr_34102_36715 = state_33860__$1;
(statearr_34102_36715[(1)] = (19));

} else {
var statearr_34103_36716 = state_33860__$1;
(statearr_34103_36716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (38))){
var inst_33826 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_34105_36717 = state_33860__$1;
(statearr_34105_36717[(2)] = inst_33826);

(statearr_34105_36717[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (30))){
var state_33860__$1 = state_33860;
var statearr_34111_36718 = state_33860__$1;
(statearr_34111_36718[(2)] = null);

(statearr_34111_36718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (10))){
var inst_33685 = (state_33860[(15)]);
var inst_33683 = (state_33860[(16)]);
var inst_33699 = cljs.core._nth(inst_33683,inst_33685);
var inst_33701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33699,(0),null);
var inst_33702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33699,(1),null);
var state_33860__$1 = (function (){var statearr_34116 = state_33860;
(statearr_34116[(24)] = inst_33701);

return statearr_34116;
})();
if(cljs.core.truth_(inst_33702)){
var statearr_34117_36720 = state_33860__$1;
(statearr_34117_36720[(1)] = (13));

} else {
var statearr_34118_36721 = state_33860__$1;
(statearr_34118_36721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (18))){
var inst_33750 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_34123_36722 = state_33860__$1;
(statearr_34123_36722[(2)] = inst_33750);

(statearr_34123_36722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (42))){
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33860__$1,(45),dchan);
} else {
if((state_val_33862 === (37))){
var inst_33671 = (state_33860[(10)]);
var inst_33811 = (state_33860[(22)]);
var inst_33797 = (state_33860[(23)]);
var inst_33811__$1 = cljs.core.first(inst_33797);
var inst_33812 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33811__$1,inst_33671,done);
var state_33860__$1 = (function (){var statearr_34150 = state_33860;
(statearr_34150[(22)] = inst_33811__$1);

return statearr_34150;
})();
if(cljs.core.truth_(inst_33812)){
var statearr_34154_36723 = state_33860__$1;
(statearr_34154_36723[(1)] = (39));

} else {
var statearr_34156_36724 = state_33860__$1;
(statearr_34156_36724[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33862 === (8))){
var inst_33685 = (state_33860[(15)]);
var inst_33684 = (state_33860[(17)]);
var inst_33688 = (inst_33685 < inst_33684);
var inst_33689 = inst_33688;
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33689)){
var statearr_34160_36725 = state_33860__$1;
(statearr_34160_36725[(1)] = (10));

} else {
var statearr_34162_36726 = state_33860__$1;
(statearr_34162_36726[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31484__auto__ = null;
var cljs$core$async$mult_$_state_machine__31484__auto____0 = (function (){
var statearr_34170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34170[(0)] = cljs$core$async$mult_$_state_machine__31484__auto__);

(statearr_34170[(1)] = (1));

return statearr_34170;
});
var cljs$core$async$mult_$_state_machine__31484__auto____1 = (function (state_33860){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_33860);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e34172){var ex__31488__auto__ = e34172;
var statearr_34173_36727 = state_33860;
(statearr_34173_36727[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_33860[(4)]))){
var statearr_34174_36728 = state_33860;
(statearr_34174_36728[(1)] = cljs.core.first((state_33860[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36729 = state_33860;
state_33860 = G__36729;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31484__auto__ = function(state_33860){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31484__auto____1.call(this,state_33860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31484__auto____0;
cljs$core$async$mult_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31484__auto____1;
return cljs$core$async$mult_$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_34176 = f__32083__auto__();
(statearr_34176[(6)] = c__32082__auto___36640);

return statearr_34176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34185 = arguments.length;
switch (G__34185) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36731 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36731(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36732 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36732(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36733 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36733(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36734 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36734(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36737 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36737(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36738 = arguments.length;
var i__5770__auto___36739 = (0);
while(true){
if((i__5770__auto___36739 < len__5769__auto___36738)){
args__5775__auto__.push((arguments[i__5770__auto___36739]));

var G__36740 = (i__5770__auto___36739 + (1));
i__5770__auto___36739 = G__36740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34276){
var map__34287 = p__34276;
var map__34287__$1 = cljs.core.__destructure_map(map__34287);
var opts = map__34287__$1;
var statearr_34290_36741 = state;
(statearr_34290_36741[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34293_36742 = state;
(statearr_34293_36742[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34296_36743 = state;
(statearr_34296_36743[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34259){
var G__34260 = cljs.core.first(seq34259);
var seq34259__$1 = cljs.core.next(seq34259);
var G__34261 = cljs.core.first(seq34259__$1);
var seq34259__$2 = cljs.core.next(seq34259__$1);
var G__34262 = cljs.core.first(seq34259__$2);
var seq34259__$3 = cljs.core.next(seq34259__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34260,G__34261,G__34262,seq34259__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34346 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34347){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34347 = meta34347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34348,meta34347__$1){
var self__ = this;
var _34348__$1 = this;
return (new cljs.core.async.t_cljs$core$async34346(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34347__$1));
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34348){
var self__ = this;
var _34348__$1 = this;
return self__.meta34347;
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34346.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34347","meta34347",-471984320,null)], null);
}));

(cljs.core.async.t_cljs$core$async34346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34346");

(cljs.core.async.t_cljs$core$async34346.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34346.
 */
cljs.core.async.__GT_t_cljs$core$async34346 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34346(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34347){
return (new cljs.core.async.t_cljs$core$async34346(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34347));
});

}

return (new cljs.core.async.t_cljs$core$async34346(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32082__auto___36744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (7))){
var inst_34447 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34447)){
var statearr_34509_36745 = state_34500__$1;
(statearr_34509_36745[(1)] = (8));

} else {
var statearr_34510_36746 = state_34500__$1;
(statearr_34510_36746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (20))){
var inst_34437 = (state_34500[(7)]);
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34500__$1,(23),out,inst_34437);
} else {
if((state_val_34501 === (1))){
var inst_34414 = calc_state();
var inst_34417 = cljs.core.__destructure_map(inst_34414);
var inst_34418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34417,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34417,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34417,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34422 = inst_34414;
var state_34500__$1 = (function (){var statearr_34514 = state_34500;
(statearr_34514[(8)] = inst_34422);

(statearr_34514[(9)] = inst_34421);

(statearr_34514[(10)] = inst_34418);

(statearr_34514[(11)] = inst_34419);

return statearr_34514;
})();
var statearr_34518_36749 = state_34500__$1;
(statearr_34518_36749[(2)] = null);

(statearr_34518_36749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (24))){
var inst_34426 = (state_34500[(12)]);
var inst_34422 = inst_34426;
var state_34500__$1 = (function (){var statearr_34521 = state_34500;
(statearr_34521[(8)] = inst_34422);

return statearr_34521;
})();
var statearr_34524_36750 = state_34500__$1;
(statearr_34524_36750[(2)] = null);

(statearr_34524_36750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (4))){
var inst_34440 = (state_34500[(13)]);
var inst_34437 = (state_34500[(7)]);
var inst_34435 = (state_34500[(2)]);
var inst_34437__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34435,(0),null);
var inst_34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34435,(1),null);
var inst_34440__$1 = (inst_34437__$1 == null);
var state_34500__$1 = (function (){var statearr_34534 = state_34500;
(statearr_34534[(13)] = inst_34440__$1);

(statearr_34534[(14)] = inst_34438);

(statearr_34534[(7)] = inst_34437__$1);

return statearr_34534;
})();
if(cljs.core.truth_(inst_34440__$1)){
var statearr_34539_36754 = state_34500__$1;
(statearr_34539_36754[(1)] = (5));

} else {
var statearr_34540_36755 = state_34500__$1;
(statearr_34540_36755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (15))){
var inst_34466 = (state_34500[(15)]);
var inst_34427 = (state_34500[(16)]);
var inst_34466__$1 = cljs.core.empty_QMARK_(inst_34427);
var state_34500__$1 = (function (){var statearr_34549 = state_34500;
(statearr_34549[(15)] = inst_34466__$1);

return statearr_34549;
})();
if(inst_34466__$1){
var statearr_34550_36756 = state_34500__$1;
(statearr_34550_36756[(1)] = (17));

} else {
var statearr_34551_36757 = state_34500__$1;
(statearr_34551_36757[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (21))){
var inst_34426 = (state_34500[(12)]);
var inst_34422 = inst_34426;
var state_34500__$1 = (function (){var statearr_34553 = state_34500;
(statearr_34553[(8)] = inst_34422);

return statearr_34553;
})();
var statearr_34555_36758 = state_34500__$1;
(statearr_34555_36758[(2)] = null);

(statearr_34555_36758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (13))){
var inst_34457 = (state_34500[(2)]);
var inst_34458 = calc_state();
var inst_34422 = inst_34458;
var state_34500__$1 = (function (){var statearr_34561 = state_34500;
(statearr_34561[(17)] = inst_34457);

(statearr_34561[(8)] = inst_34422);

return statearr_34561;
})();
var statearr_34565_36760 = state_34500__$1;
(statearr_34565_36760[(2)] = null);

(statearr_34565_36760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (22))){
var inst_34489 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34568_36761 = state_34500__$1;
(statearr_34568_36761[(2)] = inst_34489);

(statearr_34568_36761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var inst_34438 = (state_34500[(14)]);
var inst_34444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34438,change);
var state_34500__$1 = state_34500;
var statearr_34573_36762 = state_34500__$1;
(statearr_34573_36762[(2)] = inst_34444);

(statearr_34573_36762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (25))){
var state_34500__$1 = state_34500;
var statearr_34574_36763 = state_34500__$1;
(statearr_34574_36763[(2)] = null);

(statearr_34574_36763[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (17))){
var inst_34438 = (state_34500[(14)]);
var inst_34428 = (state_34500[(18)]);
var inst_34468 = (inst_34428.cljs$core$IFn$_invoke$arity$1 ? inst_34428.cljs$core$IFn$_invoke$arity$1(inst_34438) : inst_34428.call(null,inst_34438));
var inst_34469 = cljs.core.not(inst_34468);
var state_34500__$1 = state_34500;
var statearr_34575_36764 = state_34500__$1;
(statearr_34575_36764[(2)] = inst_34469);

(statearr_34575_36764[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (3))){
var inst_34494 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34500__$1,inst_34494);
} else {
if((state_val_34501 === (12))){
var state_34500__$1 = state_34500;
var statearr_34576_36766 = state_34500__$1;
(statearr_34576_36766[(2)] = null);

(statearr_34576_36766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (2))){
var inst_34422 = (state_34500[(8)]);
var inst_34426 = (state_34500[(12)]);
var inst_34426__$1 = cljs.core.__destructure_map(inst_34422);
var inst_34427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34426__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34426__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34426__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34500__$1 = (function (){var statearr_34581 = state_34500;
(statearr_34581[(18)] = inst_34428);

(statearr_34581[(16)] = inst_34427);

(statearr_34581[(12)] = inst_34426__$1);

return statearr_34581;
})();
return cljs.core.async.ioc_alts_BANG_(state_34500__$1,(4),inst_34430);
} else {
if((state_val_34501 === (23))){
var inst_34478 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34478)){
var statearr_34587_36768 = state_34500__$1;
(statearr_34587_36768[(1)] = (24));

} else {
var statearr_34589_36769 = state_34500__$1;
(statearr_34589_36769[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (19))){
var inst_34472 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34590_36770 = state_34500__$1;
(statearr_34590_36770[(2)] = inst_34472);

(statearr_34590_36770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (11))){
var inst_34438 = (state_34500[(14)]);
var inst_34454 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34438);
var state_34500__$1 = state_34500;
var statearr_34593_36771 = state_34500__$1;
(statearr_34593_36771[(2)] = inst_34454);

(statearr_34593_36771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (9))){
var inst_34462 = (state_34500[(19)]);
var inst_34438 = (state_34500[(14)]);
var inst_34427 = (state_34500[(16)]);
var inst_34462__$1 = (inst_34427.cljs$core$IFn$_invoke$arity$1 ? inst_34427.cljs$core$IFn$_invoke$arity$1(inst_34438) : inst_34427.call(null,inst_34438));
var state_34500__$1 = (function (){var statearr_34603 = state_34500;
(statearr_34603[(19)] = inst_34462__$1);

return statearr_34603;
})();
if(cljs.core.truth_(inst_34462__$1)){
var statearr_34608_36772 = state_34500__$1;
(statearr_34608_36772[(1)] = (14));

} else {
var statearr_34609_36773 = state_34500__$1;
(statearr_34609_36773[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var inst_34440 = (state_34500[(13)]);
var state_34500__$1 = state_34500;
var statearr_34618_36774 = state_34500__$1;
(statearr_34618_36774[(2)] = inst_34440);

(statearr_34618_36774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (14))){
var inst_34462 = (state_34500[(19)]);
var state_34500__$1 = state_34500;
var statearr_34622_36775 = state_34500__$1;
(statearr_34622_36775[(2)] = inst_34462);

(statearr_34622_36775[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (26))){
var inst_34485 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34625_36776 = state_34500__$1;
(statearr_34625_36776[(2)] = inst_34485);

(statearr_34625_36776[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (16))){
var inst_34474 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34474)){
var statearr_34626_36777 = state_34500__$1;
(statearr_34626_36777[(1)] = (20));

} else {
var statearr_34627_36778 = state_34500__$1;
(statearr_34627_36778[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (10))){
var inst_34491 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34628_36779 = state_34500__$1;
(statearr_34628_36779[(2)] = inst_34491);

(statearr_34628_36779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (18))){
var inst_34466 = (state_34500[(15)]);
var state_34500__$1 = state_34500;
var statearr_34629_36780 = state_34500__$1;
(statearr_34629_36780[(2)] = inst_34466);

(statearr_34629_36780[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (8))){
var inst_34437 = (state_34500[(7)]);
var inst_34452 = (inst_34437 == null);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34452)){
var statearr_34630_36781 = state_34500__$1;
(statearr_34630_36781[(1)] = (11));

} else {
var statearr_34631_36782 = state_34500__$1;
(statearr_34631_36782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31484__auto__ = null;
var cljs$core$async$mix_$_state_machine__31484__auto____0 = (function (){
var statearr_34646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34646[(0)] = cljs$core$async$mix_$_state_machine__31484__auto__);

(statearr_34646[(1)] = (1));

return statearr_34646;
});
var cljs$core$async$mix_$_state_machine__31484__auto____1 = (function (state_34500){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_34500);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e34647){var ex__31488__auto__ = e34647;
var statearr_34648_36787 = state_34500;
(statearr_34648_36787[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_34500[(4)]))){
var statearr_34650_36788 = state_34500;
(statearr_34650_36788[(1)] = cljs.core.first((state_34500[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36789 = state_34500;
state_34500 = G__36789;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31484__auto__ = function(state_34500){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31484__auto____1.call(this,state_34500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31484__auto____0;
cljs$core$async$mix_$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31484__auto____1;
return cljs$core$async$mix_$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_34651 = f__32083__auto__();
(statearr_34651[(6)] = c__32082__auto___36744);

return statearr_34651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36794 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36794(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36798 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36798(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36803 = (function() {
var G__36804 = null;
var G__36804__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36804__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36804 = function(p,v){
switch(arguments.length){
case 1:
return G__36804__1.call(this,p);
case 2:
return G__36804__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36804.cljs$core$IFn$_invoke$arity$1 = G__36804__1;
G__36804.cljs$core$IFn$_invoke$arity$2 = G__36804__2;
return G__36804;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34707 = arguments.length;
switch (G__34707) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36803(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36803(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34748 = arguments.length;
switch (G__34748) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34728_SHARP_){
if(cljs.core.truth_((p1__34728_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34728_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34728_SHARP_.call(null,topic)))){
return p1__34728_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34728_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34778 = meta34778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34779,meta34778__$1){
var self__ = this;
var _34779__$1 = this;
return (new cljs.core.async.t_cljs$core$async34777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34778__$1));
}));

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34779){
var self__ = this;
var _34779__$1 = this;
return self__.meta34778;
}));

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34778","meta34778",1059248404,null)], null);
}));

(cljs.core.async.t_cljs$core$async34777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34777");

(cljs.core.async.t_cljs$core$async34777.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34777.
 */
cljs.core.async.__GT_t_cljs$core$async34777 = (function cljs$core$async$__GT_t_cljs$core$async34777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34778){
return (new cljs.core.async.t_cljs$core$async34777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34778));
});

}

return (new cljs.core.async.t_cljs$core$async34777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32082__auto___36820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_34910){
var state_val_34911 = (state_34910[(1)]);
if((state_val_34911 === (7))){
var inst_34901 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34927_36821 = state_34910__$1;
(statearr_34927_36821[(2)] = inst_34901);

(statearr_34927_36821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (20))){
var state_34910__$1 = state_34910;
var statearr_34929_36822 = state_34910__$1;
(statearr_34929_36822[(2)] = null);

(statearr_34929_36822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (1))){
var state_34910__$1 = state_34910;
var statearr_34930_36824 = state_34910__$1;
(statearr_34930_36824[(2)] = null);

(statearr_34930_36824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (24))){
var inst_34874 = (state_34910[(7)]);
var inst_34893 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34874);
var state_34910__$1 = state_34910;
var statearr_34932_36825 = state_34910__$1;
(statearr_34932_36825[(2)] = inst_34893);

(statearr_34932_36825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (4))){
var inst_34821 = (state_34910[(8)]);
var inst_34821__$1 = (state_34910[(2)]);
var inst_34822 = (inst_34821__$1 == null);
var state_34910__$1 = (function (){var statearr_34934 = state_34910;
(statearr_34934[(8)] = inst_34821__$1);

return statearr_34934;
})();
if(cljs.core.truth_(inst_34822)){
var statearr_34935_36826 = state_34910__$1;
(statearr_34935_36826[(1)] = (5));

} else {
var statearr_34936_36827 = state_34910__$1;
(statearr_34936_36827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (15))){
var inst_34868 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34937_36828 = state_34910__$1;
(statearr_34937_36828[(2)] = inst_34868);

(statearr_34937_36828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (21))){
var inst_34898 = (state_34910[(2)]);
var state_34910__$1 = (function (){var statearr_34938 = state_34910;
(statearr_34938[(9)] = inst_34898);

return statearr_34938;
})();
var statearr_34939_36829 = state_34910__$1;
(statearr_34939_36829[(2)] = null);

(statearr_34939_36829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (13))){
var inst_34848 = (state_34910[(10)]);
var inst_34850 = cljs.core.chunked_seq_QMARK_(inst_34848);
var state_34910__$1 = state_34910;
if(inst_34850){
var statearr_34940_36830 = state_34910__$1;
(statearr_34940_36830[(1)] = (16));

} else {
var statearr_34941_36831 = state_34910__$1;
(statearr_34941_36831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (22))){
var inst_34885 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
if(cljs.core.truth_(inst_34885)){
var statearr_34942_36832 = state_34910__$1;
(statearr_34942_36832[(1)] = (23));

} else {
var statearr_34943_36833 = state_34910__$1;
(statearr_34943_36833[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (6))){
var inst_34874 = (state_34910[(7)]);
var inst_34878 = (state_34910[(11)]);
var inst_34821 = (state_34910[(8)]);
var inst_34874__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34821) : topic_fn.call(null,inst_34821));
var inst_34877 = cljs.core.deref(mults);
var inst_34878__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34877,inst_34874__$1);
var state_34910__$1 = (function (){var statearr_34947 = state_34910;
(statearr_34947[(7)] = inst_34874__$1);

(statearr_34947[(11)] = inst_34878__$1);

return statearr_34947;
})();
if(cljs.core.truth_(inst_34878__$1)){
var statearr_34949_36834 = state_34910__$1;
(statearr_34949_36834[(1)] = (19));

} else {
var statearr_34950_36835 = state_34910__$1;
(statearr_34950_36835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (25))){
var inst_34895 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34952_36836 = state_34910__$1;
(statearr_34952_36836[(2)] = inst_34895);

(statearr_34952_36836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (17))){
var inst_34848 = (state_34910[(10)]);
var inst_34857 = cljs.core.first(inst_34848);
var inst_34858 = cljs.core.async.muxch_STAR_(inst_34857);
var inst_34859 = cljs.core.async.close_BANG_(inst_34858);
var inst_34860 = cljs.core.next(inst_34848);
var inst_34831 = inst_34860;
var inst_34832 = null;
var inst_34833 = (0);
var inst_34834 = (0);
var state_34910__$1 = (function (){var statearr_34958 = state_34910;
(statearr_34958[(12)] = inst_34831);

(statearr_34958[(13)] = inst_34833);

(statearr_34958[(14)] = inst_34859);

(statearr_34958[(15)] = inst_34834);

(statearr_34958[(16)] = inst_34832);

return statearr_34958;
})();
var statearr_34960_36843 = state_34910__$1;
(statearr_34960_36843[(2)] = null);

(statearr_34960_36843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (3))){
var inst_34903 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34910__$1,inst_34903);
} else {
if((state_val_34911 === (12))){
var inst_34870 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34965_36844 = state_34910__$1;
(statearr_34965_36844[(2)] = inst_34870);

(statearr_34965_36844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (2))){
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34910__$1,(4),ch);
} else {
if((state_val_34911 === (23))){
var state_34910__$1 = state_34910;
var statearr_34966_36845 = state_34910__$1;
(statearr_34966_36845[(2)] = null);

(statearr_34966_36845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (19))){
var inst_34878 = (state_34910[(11)]);
var inst_34821 = (state_34910[(8)]);
var inst_34880 = cljs.core.async.muxch_STAR_(inst_34878);
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34910__$1,(22),inst_34880,inst_34821);
} else {
if((state_val_34911 === (11))){
var inst_34848 = (state_34910[(10)]);
var inst_34831 = (state_34910[(12)]);
var inst_34848__$1 = cljs.core.seq(inst_34831);
var state_34910__$1 = (function (){var statearr_34967 = state_34910;
(statearr_34967[(10)] = inst_34848__$1);

return statearr_34967;
})();
if(inst_34848__$1){
var statearr_34968_36846 = state_34910__$1;
(statearr_34968_36846[(1)] = (13));

} else {
var statearr_34969_36847 = state_34910__$1;
(statearr_34969_36847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (9))){
var inst_34872 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34970_36848 = state_34910__$1;
(statearr_34970_36848[(2)] = inst_34872);

(statearr_34970_36848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (5))){
var inst_34828 = cljs.core.deref(mults);
var inst_34829 = cljs.core.vals(inst_34828);
var inst_34830 = cljs.core.seq(inst_34829);
var inst_34831 = inst_34830;
var inst_34832 = null;
var inst_34833 = (0);
var inst_34834 = (0);
var state_34910__$1 = (function (){var statearr_34973 = state_34910;
(statearr_34973[(12)] = inst_34831);

(statearr_34973[(13)] = inst_34833);

(statearr_34973[(15)] = inst_34834);

(statearr_34973[(16)] = inst_34832);

return statearr_34973;
})();
var statearr_34977_36849 = state_34910__$1;
(statearr_34977_36849[(2)] = null);

(statearr_34977_36849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (14))){
var state_34910__$1 = state_34910;
var statearr_34981_36850 = state_34910__$1;
(statearr_34981_36850[(2)] = null);

(statearr_34981_36850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (16))){
var inst_34848 = (state_34910[(10)]);
var inst_34852 = cljs.core.chunk_first(inst_34848);
var inst_34853 = cljs.core.chunk_rest(inst_34848);
var inst_34854 = cljs.core.count(inst_34852);
var inst_34831 = inst_34853;
var inst_34832 = inst_34852;
var inst_34833 = inst_34854;
var inst_34834 = (0);
var state_34910__$1 = (function (){var statearr_34982 = state_34910;
(statearr_34982[(12)] = inst_34831);

(statearr_34982[(13)] = inst_34833);

(statearr_34982[(15)] = inst_34834);

(statearr_34982[(16)] = inst_34832);

return statearr_34982;
})();
var statearr_34983_36851 = state_34910__$1;
(statearr_34983_36851[(2)] = null);

(statearr_34983_36851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (10))){
var inst_34831 = (state_34910[(12)]);
var inst_34833 = (state_34910[(13)]);
var inst_34834 = (state_34910[(15)]);
var inst_34832 = (state_34910[(16)]);
var inst_34841 = cljs.core._nth(inst_34832,inst_34834);
var inst_34842 = cljs.core.async.muxch_STAR_(inst_34841);
var inst_34843 = cljs.core.async.close_BANG_(inst_34842);
var inst_34844 = (inst_34834 + (1));
var tmp34978 = inst_34831;
var tmp34979 = inst_34833;
var tmp34980 = inst_34832;
var inst_34831__$1 = tmp34978;
var inst_34832__$1 = tmp34980;
var inst_34833__$1 = tmp34979;
var inst_34834__$1 = inst_34844;
var state_34910__$1 = (function (){var statearr_34985 = state_34910;
(statearr_34985[(17)] = inst_34843);

(statearr_34985[(12)] = inst_34831__$1);

(statearr_34985[(13)] = inst_34833__$1);

(statearr_34985[(15)] = inst_34834__$1);

(statearr_34985[(16)] = inst_34832__$1);

return statearr_34985;
})();
var statearr_34989_36855 = state_34910__$1;
(statearr_34989_36855[(2)] = null);

(statearr_34989_36855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (18))){
var inst_34863 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34994_36856 = state_34910__$1;
(statearr_34994_36856[(2)] = inst_34863);

(statearr_34994_36856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (8))){
var inst_34833 = (state_34910[(13)]);
var inst_34834 = (state_34910[(15)]);
var inst_34837 = (inst_34834 < inst_34833);
var inst_34838 = inst_34837;
var state_34910__$1 = state_34910;
if(cljs.core.truth_(inst_34838)){
var statearr_34997_36857 = state_34910__$1;
(statearr_34997_36857[(1)] = (10));

} else {
var statearr_35003_36858 = state_34910__$1;
(statearr_35003_36858[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_35007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35007[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_35007[(1)] = (1));

return statearr_35007;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_34910){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_34910);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e35008){var ex__31488__auto__ = e35008;
var statearr_35010_36859 = state_34910;
(statearr_35010_36859[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_34910[(4)]))){
var statearr_35012_36860 = state_34910;
(statearr_35012_36860[(1)] = cljs.core.first((state_34910[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36861 = state_34910;
state_34910 = G__36861;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_34910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_34910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_35017 = f__32083__auto__();
(statearr_35017[(6)] = c__32082__auto___36820);

return statearr_35017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35021 = arguments.length;
switch (G__35021) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35034 = arguments.length;
switch (G__35034) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35041 = arguments.length;
switch (G__35041) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32082__auto___36871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_35113){
var state_val_35114 = (state_35113[(1)]);
if((state_val_35114 === (7))){
var state_35113__$1 = state_35113;
var statearr_35122_36872 = state_35113__$1;
(statearr_35122_36872[(2)] = null);

(statearr_35122_36872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (1))){
var state_35113__$1 = state_35113;
var statearr_35124_36873 = state_35113__$1;
(statearr_35124_36873[(2)] = null);

(statearr_35124_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (4))){
var inst_35063 = (state_35113[(7)]);
var inst_35064 = (state_35113[(8)]);
var inst_35068 = (inst_35064 < inst_35063);
var state_35113__$1 = state_35113;
if(cljs.core.truth_(inst_35068)){
var statearr_35126_36874 = state_35113__$1;
(statearr_35126_36874[(1)] = (6));

} else {
var statearr_35129_36875 = state_35113__$1;
(statearr_35129_36875[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (15))){
var inst_35098 = (state_35113[(9)]);
var inst_35104 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35098);
var state_35113__$1 = state_35113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35113__$1,(17),out,inst_35104);
} else {
if((state_val_35114 === (13))){
var inst_35098 = (state_35113[(9)]);
var inst_35098__$1 = (state_35113[(2)]);
var inst_35100 = cljs.core.some(cljs.core.nil_QMARK_,inst_35098__$1);
var state_35113__$1 = (function (){var statearr_35134 = state_35113;
(statearr_35134[(9)] = inst_35098__$1);

return statearr_35134;
})();
if(cljs.core.truth_(inst_35100)){
var statearr_35135_36876 = state_35113__$1;
(statearr_35135_36876[(1)] = (14));

} else {
var statearr_35136_36877 = state_35113__$1;
(statearr_35136_36877[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (6))){
var state_35113__$1 = state_35113;
var statearr_35137_36878 = state_35113__$1;
(statearr_35137_36878[(2)] = null);

(statearr_35137_36878[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (17))){
var inst_35106 = (state_35113[(2)]);
var state_35113__$1 = (function (){var statearr_35139 = state_35113;
(statearr_35139[(10)] = inst_35106);

return statearr_35139;
})();
var statearr_35140_36879 = state_35113__$1;
(statearr_35140_36879[(2)] = null);

(statearr_35140_36879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (3))){
var inst_35111 = (state_35113[(2)]);
var state_35113__$1 = state_35113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35113__$1,inst_35111);
} else {
if((state_val_35114 === (12))){
var _ = (function (){var statearr_35155 = state_35113;
(statearr_35155[(4)] = cljs.core.rest((state_35113[(4)])));

return statearr_35155;
})();
var state_35113__$1 = state_35113;
var ex35138 = (state_35113__$1[(2)]);
var statearr_35158_36880 = state_35113__$1;
(statearr_35158_36880[(5)] = ex35138);


if((ex35138 instanceof Object)){
var statearr_35162_36881 = state_35113__$1;
(statearr_35162_36881[(1)] = (11));

(statearr_35162_36881[(5)] = null);

} else {
throw ex35138;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (2))){
var inst_35061 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35063 = cnt;
var inst_35064 = (0);
var state_35113__$1 = (function (){var statearr_35175 = state_35113;
(statearr_35175[(7)] = inst_35063);

(statearr_35175[(8)] = inst_35064);

(statearr_35175[(11)] = inst_35061);

return statearr_35175;
})();
var statearr_35176_36882 = state_35113__$1;
(statearr_35176_36882[(2)] = null);

(statearr_35176_36882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (11))){
var inst_35073 = (state_35113[(2)]);
var inst_35074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35113__$1 = (function (){var statearr_35177 = state_35113;
(statearr_35177[(12)] = inst_35073);

return statearr_35177;
})();
var statearr_35178_36883 = state_35113__$1;
(statearr_35178_36883[(2)] = inst_35074);

(statearr_35178_36883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (9))){
var inst_35064 = (state_35113[(8)]);
var _ = (function (){var statearr_35186 = state_35113;
(statearr_35186[(4)] = cljs.core.cons((12),(state_35113[(4)])));

return statearr_35186;
})();
var inst_35082 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35064) : chs__$1.call(null,inst_35064));
var inst_35083 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35064) : done.call(null,inst_35064));
var inst_35084 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35082,inst_35083);
var ___$1 = (function (){var statearr_35187 = state_35113;
(statearr_35187[(4)] = cljs.core.rest((state_35113[(4)])));

return statearr_35187;
})();
var state_35113__$1 = state_35113;
var statearr_35190_36884 = state_35113__$1;
(statearr_35190_36884[(2)] = inst_35084);

(statearr_35190_36884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (5))){
var inst_35096 = (state_35113[(2)]);
var state_35113__$1 = (function (){var statearr_35193 = state_35113;
(statearr_35193[(13)] = inst_35096);

return statearr_35193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35113__$1,(13),dchan);
} else {
if((state_val_35114 === (14))){
var inst_35102 = cljs.core.async.close_BANG_(out);
var state_35113__$1 = state_35113;
var statearr_35194_36891 = state_35113__$1;
(statearr_35194_36891[(2)] = inst_35102);

(statearr_35194_36891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (16))){
var inst_35109 = (state_35113[(2)]);
var state_35113__$1 = state_35113;
var statearr_35195_36892 = state_35113__$1;
(statearr_35195_36892[(2)] = inst_35109);

(statearr_35195_36892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (10))){
var inst_35064 = (state_35113[(8)]);
var inst_35087 = (state_35113[(2)]);
var inst_35090 = (inst_35064 + (1));
var inst_35064__$1 = inst_35090;
var state_35113__$1 = (function (){var statearr_35197 = state_35113;
(statearr_35197[(8)] = inst_35064__$1);

(statearr_35197[(14)] = inst_35087);

return statearr_35197;
})();
var statearr_35198_36893 = state_35113__$1;
(statearr_35198_36893[(2)] = null);

(statearr_35198_36893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35114 === (8))){
var inst_35094 = (state_35113[(2)]);
var state_35113__$1 = state_35113;
var statearr_35201_36894 = state_35113__$1;
(statearr_35201_36894[(2)] = inst_35094);

(statearr_35201_36894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_35205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35205[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_35205[(1)] = (1));

return statearr_35205;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_35113){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_35113);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e35206){var ex__31488__auto__ = e35206;
var statearr_35210_36895 = state_35113;
(statearr_35210_36895[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_35113[(4)]))){
var statearr_35211_36896 = state_35113;
(statearr_35211_36896[(1)] = cljs.core.first((state_35113[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36897 = state_35113;
state_35113 = G__36897;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_35113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_35113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_35220 = f__32083__auto__();
(statearr_35220[(6)] = c__32082__auto___36871);

return statearr_35220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35236 = arguments.length;
switch (G__35236) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32082__auto___36899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_35280){
var state_val_35281 = (state_35280[(1)]);
if((state_val_35281 === (7))){
var inst_35256 = (state_35280[(7)]);
var inst_35258 = (state_35280[(8)]);
var inst_35256__$1 = (state_35280[(2)]);
var inst_35258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35256__$1,(0),null);
var inst_35259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35256__$1,(1),null);
var inst_35260 = (inst_35258__$1 == null);
var state_35280__$1 = (function (){var statearr_35289 = state_35280;
(statearr_35289[(7)] = inst_35256__$1);

(statearr_35289[(9)] = inst_35259);

(statearr_35289[(8)] = inst_35258__$1);

return statearr_35289;
})();
if(cljs.core.truth_(inst_35260)){
var statearr_35291_36900 = state_35280__$1;
(statearr_35291_36900[(1)] = (8));

} else {
var statearr_35292_36901 = state_35280__$1;
(statearr_35292_36901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (1))){
var inst_35245 = cljs.core.vec(chs);
var inst_35246 = inst_35245;
var state_35280__$1 = (function (){var statearr_35293 = state_35280;
(statearr_35293[(10)] = inst_35246);

return statearr_35293;
})();
var statearr_35296_36902 = state_35280__$1;
(statearr_35296_36902[(2)] = null);

(statearr_35296_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (4))){
var inst_35246 = (state_35280[(10)]);
var state_35280__$1 = state_35280;
return cljs.core.async.ioc_alts_BANG_(state_35280__$1,(7),inst_35246);
} else {
if((state_val_35281 === (6))){
var inst_35275 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35299_36904 = state_35280__$1;
(statearr_35299_36904[(2)] = inst_35275);

(statearr_35299_36904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (3))){
var inst_35278 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35280__$1,inst_35278);
} else {
if((state_val_35281 === (2))){
var inst_35246 = (state_35280[(10)]);
var inst_35248 = cljs.core.count(inst_35246);
var inst_35249 = (inst_35248 > (0));
var state_35280__$1 = state_35280;
if(cljs.core.truth_(inst_35249)){
var statearr_35307_36905 = state_35280__$1;
(statearr_35307_36905[(1)] = (4));

} else {
var statearr_35308_36906 = state_35280__$1;
(statearr_35308_36906[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (11))){
var inst_35246 = (state_35280[(10)]);
var inst_35268 = (state_35280[(2)]);
var tmp35302 = inst_35246;
var inst_35246__$1 = tmp35302;
var state_35280__$1 = (function (){var statearr_35309 = state_35280;
(statearr_35309[(11)] = inst_35268);

(statearr_35309[(10)] = inst_35246__$1);

return statearr_35309;
})();
var statearr_35310_36908 = state_35280__$1;
(statearr_35310_36908[(2)] = null);

(statearr_35310_36908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (9))){
var inst_35258 = (state_35280[(8)]);
var state_35280__$1 = state_35280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35280__$1,(11),out,inst_35258);
} else {
if((state_val_35281 === (5))){
var inst_35273 = cljs.core.async.close_BANG_(out);
var state_35280__$1 = state_35280;
var statearr_35317_36910 = state_35280__$1;
(statearr_35317_36910[(2)] = inst_35273);

(statearr_35317_36910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (10))){
var inst_35271 = (state_35280[(2)]);
var state_35280__$1 = state_35280;
var statearr_35321_36911 = state_35280__$1;
(statearr_35321_36911[(2)] = inst_35271);

(statearr_35321_36911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35281 === (8))){
var inst_35256 = (state_35280[(7)]);
var inst_35246 = (state_35280[(10)]);
var inst_35259 = (state_35280[(9)]);
var inst_35258 = (state_35280[(8)]);
var inst_35263 = (function (){var cs = inst_35246;
var vec__35251 = inst_35256;
var v = inst_35258;
var c = inst_35259;
return (function (p1__35229_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35229_SHARP_);
});
})();
var inst_35264 = cljs.core.filterv(inst_35263,inst_35246);
var inst_35246__$1 = inst_35264;
var state_35280__$1 = (function (){var statearr_35326 = state_35280;
(statearr_35326[(10)] = inst_35246__$1);

return statearr_35326;
})();
var statearr_35327_36912 = state_35280__$1;
(statearr_35327_36912[(2)] = null);

(statearr_35327_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_35333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35333[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_35333[(1)] = (1));

return statearr_35333;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_35280){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_35280);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e35334){var ex__31488__auto__ = e35334;
var statearr_35335_36913 = state_35280;
(statearr_35335_36913[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_35280[(4)]))){
var statearr_35336_36914 = state_35280;
(statearr_35336_36914[(1)] = cljs.core.first((state_35280[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_35280;
state_35280 = G__36915;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_35280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_35280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_35365 = f__32083__auto__();
(statearr_35365[(6)] = c__32082__auto___36899);

return statearr_35365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35372 = arguments.length;
switch (G__35372) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32082__auto___36917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_35397){
var state_val_35398 = (state_35397[(1)]);
if((state_val_35398 === (7))){
var inst_35379 = (state_35397[(7)]);
var inst_35379__$1 = (state_35397[(2)]);
var inst_35380 = (inst_35379__$1 == null);
var inst_35381 = cljs.core.not(inst_35380);
var state_35397__$1 = (function (){var statearr_35399 = state_35397;
(statearr_35399[(7)] = inst_35379__$1);

return statearr_35399;
})();
if(inst_35381){
var statearr_35408_36918 = state_35397__$1;
(statearr_35408_36918[(1)] = (8));

} else {
var statearr_35409_36919 = state_35397__$1;
(statearr_35409_36919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (1))){
var inst_35374 = (0);
var state_35397__$1 = (function (){var statearr_35416 = state_35397;
(statearr_35416[(8)] = inst_35374);

return statearr_35416;
})();
var statearr_35417_36920 = state_35397__$1;
(statearr_35417_36920[(2)] = null);

(statearr_35417_36920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (4))){
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35397__$1,(7),ch);
} else {
if((state_val_35398 === (6))){
var inst_35392 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35424_36921 = state_35397__$1;
(statearr_35424_36921[(2)] = inst_35392);

(statearr_35424_36921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (3))){
var inst_35394 = (state_35397[(2)]);
var inst_35395 = cljs.core.async.close_BANG_(out);
var state_35397__$1 = (function (){var statearr_35425 = state_35397;
(statearr_35425[(9)] = inst_35394);

return statearr_35425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35397__$1,inst_35395);
} else {
if((state_val_35398 === (2))){
var inst_35374 = (state_35397[(8)]);
var inst_35376 = (inst_35374 < n);
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35376)){
var statearr_35426_36922 = state_35397__$1;
(statearr_35426_36922[(1)] = (4));

} else {
var statearr_35427_36923 = state_35397__$1;
(statearr_35427_36923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (11))){
var inst_35374 = (state_35397[(8)]);
var inst_35384 = (state_35397[(2)]);
var inst_35385 = (inst_35374 + (1));
var inst_35374__$1 = inst_35385;
var state_35397__$1 = (function (){var statearr_35428 = state_35397;
(statearr_35428[(10)] = inst_35384);

(statearr_35428[(8)] = inst_35374__$1);

return statearr_35428;
})();
var statearr_35429_36924 = state_35397__$1;
(statearr_35429_36924[(2)] = null);

(statearr_35429_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (9))){
var state_35397__$1 = state_35397;
var statearr_35438_36925 = state_35397__$1;
(statearr_35438_36925[(2)] = null);

(statearr_35438_36925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (5))){
var state_35397__$1 = state_35397;
var statearr_35445_36926 = state_35397__$1;
(statearr_35445_36926[(2)] = null);

(statearr_35445_36926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (10))){
var inst_35389 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
var statearr_35446_36927 = state_35397__$1;
(statearr_35446_36927[(2)] = inst_35389);

(statearr_35446_36927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (8))){
var inst_35379 = (state_35397[(7)]);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35397__$1,(11),out,inst_35379);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_35456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35456[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_35456[(1)] = (1));

return statearr_35456;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_35397){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_35397);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e35457){var ex__31488__auto__ = e35457;
var statearr_35458_36928 = state_35397;
(statearr_35458_36928[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_35397[(4)]))){
var statearr_35459_36929 = state_35397;
(statearr_35459_36929[(1)] = cljs.core.first((state_35397[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_35397;
state_35397 = G__36930;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_35397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_35397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_35464 = f__32083__auto__();
(statearr_35464[(6)] = c__32082__auto___36917);

return statearr_35464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35470 = (function (f,ch,meta35471){
this.f = f;
this.ch = ch;
this.meta35471 = meta35471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35472,meta35471__$1){
var self__ = this;
var _35472__$1 = this;
return (new cljs.core.async.t_cljs$core$async35470(self__.f,self__.ch,meta35471__$1));
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35472){
var self__ = this;
var _35472__$1 = this;
return self__.meta35471;
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35481 = (function (f,ch,meta35471,_,fn1,meta35482){
this.f = f;
this.ch = ch;
this.meta35471 = meta35471;
this._ = _;
this.fn1 = fn1;
this.meta35482 = meta35482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35483,meta35482__$1){
var self__ = this;
var _35483__$1 = this;
return (new cljs.core.async.t_cljs$core$async35481(self__.f,self__.ch,self__.meta35471,self__._,self__.fn1,meta35482__$1));
}));

(cljs.core.async.t_cljs$core$async35481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35483){
var self__ = this;
var _35483__$1 = this;
return self__.meta35482;
}));

(cljs.core.async.t_cljs$core$async35481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35465_SHARP_){
var G__35495 = (((p1__35465_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35465_SHARP_) : self__.f.call(null,p1__35465_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35495) : f1.call(null,G__35495));
});
}));

(cljs.core.async.t_cljs$core$async35481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35471","meta35471",-1519319675,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35470","cljs.core.async/t_cljs$core$async35470",302697057,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35482","meta35482",-293893605,null)], null);
}));

(cljs.core.async.t_cljs$core$async35481.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35481");

(cljs.core.async.t_cljs$core$async35481.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35481");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35481.
 */
cljs.core.async.__GT_t_cljs$core$async35481 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35481(f__$1,ch__$1,meta35471__$1,___$2,fn1__$1,meta35482){
return (new cljs.core.async.t_cljs$core$async35481(f__$1,ch__$1,meta35471__$1,___$2,fn1__$1,meta35482));
});

}

return (new cljs.core.async.t_cljs$core$async35481(self__.f,self__.ch,self__.meta35471,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35497 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35497) : self__.f.call(null,G__35497));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35471","meta35471",-1519319675,null)], null);
}));

(cljs.core.async.t_cljs$core$async35470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35470");

(cljs.core.async.t_cljs$core$async35470.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35470.
 */
cljs.core.async.__GT_t_cljs$core$async35470 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35470(f__$1,ch__$1,meta35471){
return (new cljs.core.async.t_cljs$core$async35470(f__$1,ch__$1,meta35471));
});

}

return (new cljs.core.async.t_cljs$core$async35470(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35501 = (function (f,ch,meta35502){
this.f = f;
this.ch = ch;
this.meta35502 = meta35502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35503,meta35502__$1){
var self__ = this;
var _35503__$1 = this;
return (new cljs.core.async.t_cljs$core$async35501(self__.f,self__.ch,meta35502__$1));
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35503){
var self__ = this;
var _35503__$1 = this;
return self__.meta35502;
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35502","meta35502",1785968941,null)], null);
}));

(cljs.core.async.t_cljs$core$async35501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35501");

(cljs.core.async.t_cljs$core$async35501.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35501.
 */
cljs.core.async.__GT_t_cljs$core$async35501 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35501(f__$1,ch__$1,meta35502){
return (new cljs.core.async.t_cljs$core$async35501(f__$1,ch__$1,meta35502));
});

}

return (new cljs.core.async.t_cljs$core$async35501(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35509 = (function (p,ch,meta35510){
this.p = p;
this.ch = ch;
this.meta35510 = meta35510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35511,meta35510__$1){
var self__ = this;
var _35511__$1 = this;
return (new cljs.core.async.t_cljs$core$async35509(self__.p,self__.ch,meta35510__$1));
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35511){
var self__ = this;
var _35511__$1 = this;
return self__.meta35510;
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35510","meta35510",-905803141,null)], null);
}));

(cljs.core.async.t_cljs$core$async35509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35509");

(cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35509.
 */
cljs.core.async.__GT_t_cljs$core$async35509 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35509(p__$1,ch__$1,meta35510){
return (new cljs.core.async.t_cljs$core$async35509(p__$1,ch__$1,meta35510));
});

}

return (new cljs.core.async.t_cljs$core$async35509(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35545 = arguments.length;
switch (G__35545) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32082__auto___36941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_35569){
var state_val_35570 = (state_35569[(1)]);
if((state_val_35570 === (7))){
var inst_35565 = (state_35569[(2)]);
var state_35569__$1 = state_35569;
var statearr_35574_36946 = state_35569__$1;
(statearr_35574_36946[(2)] = inst_35565);

(statearr_35574_36946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (1))){
var state_35569__$1 = state_35569;
var statearr_35575_36947 = state_35569__$1;
(statearr_35575_36947[(2)] = null);

(statearr_35575_36947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (4))){
var inst_35551 = (state_35569[(7)]);
var inst_35551__$1 = (state_35569[(2)]);
var inst_35552 = (inst_35551__$1 == null);
var state_35569__$1 = (function (){var statearr_35580 = state_35569;
(statearr_35580[(7)] = inst_35551__$1);

return statearr_35580;
})();
if(cljs.core.truth_(inst_35552)){
var statearr_35584_36948 = state_35569__$1;
(statearr_35584_36948[(1)] = (5));

} else {
var statearr_35585_36949 = state_35569__$1;
(statearr_35585_36949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (6))){
var inst_35551 = (state_35569[(7)]);
var inst_35556 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35551) : p.call(null,inst_35551));
var state_35569__$1 = state_35569;
if(cljs.core.truth_(inst_35556)){
var statearr_35600_36950 = state_35569__$1;
(statearr_35600_36950[(1)] = (8));

} else {
var statearr_35601_36951 = state_35569__$1;
(statearr_35601_36951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (3))){
var inst_35567 = (state_35569[(2)]);
var state_35569__$1 = state_35569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35569__$1,inst_35567);
} else {
if((state_val_35570 === (2))){
var state_35569__$1 = state_35569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35569__$1,(4),ch);
} else {
if((state_val_35570 === (11))){
var inst_35559 = (state_35569[(2)]);
var state_35569__$1 = state_35569;
var statearr_35627_36952 = state_35569__$1;
(statearr_35627_36952[(2)] = inst_35559);

(statearr_35627_36952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (9))){
var state_35569__$1 = state_35569;
var statearr_35629_36953 = state_35569__$1;
(statearr_35629_36953[(2)] = null);

(statearr_35629_36953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (5))){
var inst_35554 = cljs.core.async.close_BANG_(out);
var state_35569__$1 = state_35569;
var statearr_35633_36954 = state_35569__$1;
(statearr_35633_36954[(2)] = inst_35554);

(statearr_35633_36954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (10))){
var inst_35562 = (state_35569[(2)]);
var state_35569__$1 = (function (){var statearr_35635 = state_35569;
(statearr_35635[(8)] = inst_35562);

return statearr_35635;
})();
var statearr_35639_36955 = state_35569__$1;
(statearr_35639_36955[(2)] = null);

(statearr_35639_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35570 === (8))){
var inst_35551 = (state_35569[(7)]);
var state_35569__$1 = state_35569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35569__$1,(11),out,inst_35551);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_35646 = [null,null,null,null,null,null,null,null,null];
(statearr_35646[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_35646[(1)] = (1));

return statearr_35646;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_35569){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_35569);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e35648){var ex__31488__auto__ = e35648;
var statearr_35649_36957 = state_35569;
(statearr_35649_36957[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_35569[(4)]))){
var statearr_35650_36959 = state_35569;
(statearr_35650_36959[(1)] = cljs.core.first((state_35569[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36960 = state_35569;
state_35569 = G__36960;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_35569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_35569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_35654 = f__32083__auto__();
(statearr_35654[(6)] = c__32082__auto___36941);

return statearr_35654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35666 = arguments.length;
switch (G__35666) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_35742){
var state_val_35743 = (state_35742[(1)]);
if((state_val_35743 === (7))){
var inst_35737 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35744_36962 = state_35742__$1;
(statearr_35744_36962[(2)] = inst_35737);

(statearr_35744_36962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (20))){
var inst_35706 = (state_35742[(7)]);
var inst_35718 = (state_35742[(2)]);
var inst_35719 = cljs.core.next(inst_35706);
var inst_35690 = inst_35719;
var inst_35691 = null;
var inst_35692 = (0);
var inst_35693 = (0);
var state_35742__$1 = (function (){var statearr_35746 = state_35742;
(statearr_35746[(8)] = inst_35690);

(statearr_35746[(9)] = inst_35692);

(statearr_35746[(10)] = inst_35691);

(statearr_35746[(11)] = inst_35718);

(statearr_35746[(12)] = inst_35693);

return statearr_35746;
})();
var statearr_35747_36963 = state_35742__$1;
(statearr_35747_36963[(2)] = null);

(statearr_35747_36963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (1))){
var state_35742__$1 = state_35742;
var statearr_35748_36965 = state_35742__$1;
(statearr_35748_36965[(2)] = null);

(statearr_35748_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (4))){
var inst_35675 = (state_35742[(13)]);
var inst_35675__$1 = (state_35742[(2)]);
var inst_35676 = (inst_35675__$1 == null);
var state_35742__$1 = (function (){var statearr_35749 = state_35742;
(statearr_35749[(13)] = inst_35675__$1);

return statearr_35749;
})();
if(cljs.core.truth_(inst_35676)){
var statearr_35750_36967 = state_35742__$1;
(statearr_35750_36967[(1)] = (5));

} else {
var statearr_35751_36968 = state_35742__$1;
(statearr_35751_36968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (15))){
var state_35742__$1 = state_35742;
var statearr_35755_36969 = state_35742__$1;
(statearr_35755_36969[(2)] = null);

(statearr_35755_36969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (21))){
var state_35742__$1 = state_35742;
var statearr_35757_36970 = state_35742__$1;
(statearr_35757_36970[(2)] = null);

(statearr_35757_36970[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (13))){
var inst_35690 = (state_35742[(8)]);
var inst_35692 = (state_35742[(9)]);
var inst_35691 = (state_35742[(10)]);
var inst_35693 = (state_35742[(12)]);
var inst_35701 = (state_35742[(2)]);
var inst_35702 = (inst_35693 + (1));
var tmp35752 = inst_35690;
var tmp35753 = inst_35692;
var tmp35754 = inst_35691;
var inst_35690__$1 = tmp35752;
var inst_35691__$1 = tmp35754;
var inst_35692__$1 = tmp35753;
var inst_35693__$1 = inst_35702;
var state_35742__$1 = (function (){var statearr_35759 = state_35742;
(statearr_35759[(8)] = inst_35690__$1);

(statearr_35759[(9)] = inst_35692__$1);

(statearr_35759[(10)] = inst_35691__$1);

(statearr_35759[(12)] = inst_35693__$1);

(statearr_35759[(14)] = inst_35701);

return statearr_35759;
})();
var statearr_35763_36971 = state_35742__$1;
(statearr_35763_36971[(2)] = null);

(statearr_35763_36971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (22))){
var state_35742__$1 = state_35742;
var statearr_35764_36972 = state_35742__$1;
(statearr_35764_36972[(2)] = null);

(statearr_35764_36972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (6))){
var inst_35675 = (state_35742[(13)]);
var inst_35686 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35675) : f.call(null,inst_35675));
var inst_35687 = cljs.core.seq(inst_35686);
var inst_35690 = inst_35687;
var inst_35691 = null;
var inst_35692 = (0);
var inst_35693 = (0);
var state_35742__$1 = (function (){var statearr_35767 = state_35742;
(statearr_35767[(8)] = inst_35690);

(statearr_35767[(9)] = inst_35692);

(statearr_35767[(10)] = inst_35691);

(statearr_35767[(12)] = inst_35693);

return statearr_35767;
})();
var statearr_35768_36973 = state_35742__$1;
(statearr_35768_36973[(2)] = null);

(statearr_35768_36973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (17))){
var inst_35706 = (state_35742[(7)]);
var inst_35710 = cljs.core.chunk_first(inst_35706);
var inst_35711 = cljs.core.chunk_rest(inst_35706);
var inst_35712 = cljs.core.count(inst_35710);
var inst_35690 = inst_35711;
var inst_35691 = inst_35710;
var inst_35692 = inst_35712;
var inst_35693 = (0);
var state_35742__$1 = (function (){var statearr_35770 = state_35742;
(statearr_35770[(8)] = inst_35690);

(statearr_35770[(9)] = inst_35692);

(statearr_35770[(10)] = inst_35691);

(statearr_35770[(12)] = inst_35693);

return statearr_35770;
})();
var statearr_35772_36976 = state_35742__$1;
(statearr_35772_36976[(2)] = null);

(statearr_35772_36976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (3))){
var inst_35740 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35742__$1,inst_35740);
} else {
if((state_val_35743 === (12))){
var inst_35727 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35776_36977 = state_35742__$1;
(statearr_35776_36977[(2)] = inst_35727);

(statearr_35776_36977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (2))){
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35742__$1,(4),in$);
} else {
if((state_val_35743 === (23))){
var inst_35735 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35788_36978 = state_35742__$1;
(statearr_35788_36978[(2)] = inst_35735);

(statearr_35788_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (19))){
var inst_35722 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35793_36979 = state_35742__$1;
(statearr_35793_36979[(2)] = inst_35722);

(statearr_35793_36979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (11))){
var inst_35706 = (state_35742[(7)]);
var inst_35690 = (state_35742[(8)]);
var inst_35706__$1 = cljs.core.seq(inst_35690);
var state_35742__$1 = (function (){var statearr_35795 = state_35742;
(statearr_35795[(7)] = inst_35706__$1);

return statearr_35795;
})();
if(inst_35706__$1){
var statearr_35796_36980 = state_35742__$1;
(statearr_35796_36980[(1)] = (14));

} else {
var statearr_35797_36981 = state_35742__$1;
(statearr_35797_36981[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (9))){
var inst_35729 = (state_35742[(2)]);
var inst_35730 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35742__$1 = (function (){var statearr_35798 = state_35742;
(statearr_35798[(15)] = inst_35729);

return statearr_35798;
})();
if(cljs.core.truth_(inst_35730)){
var statearr_35800_36986 = state_35742__$1;
(statearr_35800_36986[(1)] = (21));

} else {
var statearr_35805_36987 = state_35742__$1;
(statearr_35805_36987[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (5))){
var inst_35679 = cljs.core.async.close_BANG_(out);
var state_35742__$1 = state_35742;
var statearr_35809_36988 = state_35742__$1;
(statearr_35809_36988[(2)] = inst_35679);

(statearr_35809_36988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (14))){
var inst_35706 = (state_35742[(7)]);
var inst_35708 = cljs.core.chunked_seq_QMARK_(inst_35706);
var state_35742__$1 = state_35742;
if(inst_35708){
var statearr_35813_36990 = state_35742__$1;
(statearr_35813_36990[(1)] = (17));

} else {
var statearr_35814_36991 = state_35742__$1;
(statearr_35814_36991[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (16))){
var inst_35725 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35815_36993 = state_35742__$1;
(statearr_35815_36993[(2)] = inst_35725);

(statearr_35815_36993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (10))){
var inst_35691 = (state_35742[(10)]);
var inst_35693 = (state_35742[(12)]);
var inst_35699 = cljs.core._nth(inst_35691,inst_35693);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35742__$1,(13),out,inst_35699);
} else {
if((state_val_35743 === (18))){
var inst_35706 = (state_35742[(7)]);
var inst_35716 = cljs.core.first(inst_35706);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35742__$1,(20),out,inst_35716);
} else {
if((state_val_35743 === (8))){
var inst_35692 = (state_35742[(9)]);
var inst_35693 = (state_35742[(12)]);
var inst_35695 = (inst_35693 < inst_35692);
var inst_35696 = inst_35695;
var state_35742__$1 = state_35742;
if(cljs.core.truth_(inst_35696)){
var statearr_35826_36995 = state_35742__$1;
(statearr_35826_36995[(1)] = (10));

} else {
var statearr_35827_36996 = state_35742__$1;
(statearr_35827_36996[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31484__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31484__auto____0 = (function (){
var statearr_35835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35835[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31484__auto__);

(statearr_35835[(1)] = (1));

return statearr_35835;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31484__auto____1 = (function (state_35742){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_35742);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e35838){var ex__31488__auto__ = e35838;
var statearr_35839_36998 = state_35742;
(statearr_35839_36998[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_35742[(4)]))){
var statearr_35840_36999 = state_35742;
(statearr_35840_36999[(1)] = cljs.core.first((state_35742[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_35742;
state_35742 = G__37000;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31484__auto__ = function(state_35742){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31484__auto____1.call(this,state_35742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31484__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31484__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_35843 = f__32083__auto__();
(statearr_35843[(6)] = c__32082__auto__);

return statearr_35843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));

return c__32082__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35851 = arguments.length;
switch (G__35851) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35870 = arguments.length;
switch (G__35870) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35883 = arguments.length;
switch (G__35883) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32082__auto___37011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_35914){
var state_val_35915 = (state_35914[(1)]);
if((state_val_35915 === (7))){
var inst_35909 = (state_35914[(2)]);
var state_35914__$1 = state_35914;
var statearr_35920_37016 = state_35914__$1;
(statearr_35920_37016[(2)] = inst_35909);

(statearr_35920_37016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35915 === (1))){
var inst_35891 = null;
var state_35914__$1 = (function (){var statearr_35925 = state_35914;
(statearr_35925[(7)] = inst_35891);

return statearr_35925;
})();
var statearr_35927_37017 = state_35914__$1;
(statearr_35927_37017[(2)] = null);

(statearr_35927_37017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35915 === (4))){
var inst_35894 = (state_35914[(8)]);
var inst_35894__$1 = (state_35914[(2)]);
var inst_35895 = (inst_35894__$1 == null);
var inst_35896 = cljs.core.not(inst_35895);
var state_35914__$1 = (function (){var statearr_35938 = state_35914;
(statearr_35938[(8)] = inst_35894__$1);

return statearr_35938;
})();
if(inst_35896){
var statearr_35945_37019 = state_35914__$1;
(statearr_35945_37019[(1)] = (5));

} else {
var statearr_35946_37020 = state_35914__$1;
(statearr_35946_37020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35915 === (6))){
var state_35914__$1 = state_35914;
var statearr_35950_37021 = state_35914__$1;
(statearr_35950_37021[(2)] = null);

(statearr_35950_37021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35915 === (3))){
var inst_35911 = (state_35914[(2)]);
var inst_35912 = cljs.core.async.close_BANG_(out);
var state_35914__$1 = (function (){var statearr_35954 = state_35914;
(statearr_35954[(9)] = inst_35911);

return statearr_35954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35914__$1,inst_35912);
} else {
if((state_val_35915 === (2))){
var state_35914__$1 = state_35914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35914__$1,(4),ch);
} else {
if((state_val_35915 === (11))){
var inst_35894 = (state_35914[(8)]);
var inst_35903 = (state_35914[(2)]);
var inst_35891 = inst_35894;
var state_35914__$1 = (function (){var statearr_35959 = state_35914;
(statearr_35959[(7)] = inst_35891);

(statearr_35959[(10)] = inst_35903);

return statearr_35959;
})();
var statearr_35963_37028 = state_35914__$1;
(statearr_35963_37028[(2)] = null);

(statearr_35963_37028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35915 === (9))){
var inst_35894 = (state_35914[(8)]);
var state_35914__$1 = state_35914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35914__$1,(11),out,inst_35894);
} else {
if((state_val_35915 === (5))){
var inst_35891 = (state_35914[(7)]);
var inst_35894 = (state_35914[(8)]);
var inst_35898 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35894,inst_35891);
var state_35914__$1 = state_35914;
if(inst_35898){
var statearr_35979_37029 = state_35914__$1;
(statearr_35979_37029[(1)] = (8));

} else {
var statearr_35984_37030 = state_35914__$1;
(statearr_35984_37030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35915 === (10))){
var inst_35906 = (state_35914[(2)]);
var state_35914__$1 = state_35914;
var statearr_35986_37031 = state_35914__$1;
(statearr_35986_37031[(2)] = inst_35906);

(statearr_35986_37031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35915 === (8))){
var inst_35891 = (state_35914[(7)]);
var tmp35978 = inst_35891;
var inst_35891__$1 = tmp35978;
var state_35914__$1 = (function (){var statearr_35989 = state_35914;
(statearr_35989[(7)] = inst_35891__$1);

return statearr_35989;
})();
var statearr_35993_37036 = state_35914__$1;
(statearr_35993_37036[(2)] = null);

(statearr_35993_37036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_36002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36002[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_36002[(1)] = (1));

return statearr_36002;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_35914){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_35914);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e36007){var ex__31488__auto__ = e36007;
var statearr_36008_37041 = state_35914;
(statearr_36008_37041[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_35914[(4)]))){
var statearr_36012_37042 = state_35914;
(statearr_36012_37042[(1)] = cljs.core.first((state_35914[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37043 = state_35914;
state_35914 = G__37043;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_35914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_35914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_36021 = f__32083__auto__();
(statearr_36021[(6)] = c__32082__auto___37011);

return statearr_36021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36032 = arguments.length;
switch (G__36032) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32082__auto___37051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_36097){
var state_val_36098 = (state_36097[(1)]);
if((state_val_36098 === (7))){
var inst_36093 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36112_37052 = state_36097__$1;
(statearr_36112_37052[(2)] = inst_36093);

(statearr_36112_37052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (1))){
var inst_36050 = (new Array(n));
var inst_36051 = inst_36050;
var inst_36052 = (0);
var state_36097__$1 = (function (){var statearr_36115 = state_36097;
(statearr_36115[(7)] = inst_36051);

(statearr_36115[(8)] = inst_36052);

return statearr_36115;
})();
var statearr_36120_37053 = state_36097__$1;
(statearr_36120_37053[(2)] = null);

(statearr_36120_37053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (4))){
var inst_36055 = (state_36097[(9)]);
var inst_36055__$1 = (state_36097[(2)]);
var inst_36060 = (inst_36055__$1 == null);
var inst_36061 = cljs.core.not(inst_36060);
var state_36097__$1 = (function (){var statearr_36128 = state_36097;
(statearr_36128[(9)] = inst_36055__$1);

return statearr_36128;
})();
if(inst_36061){
var statearr_36133_37055 = state_36097__$1;
(statearr_36133_37055[(1)] = (5));

} else {
var statearr_36134_37056 = state_36097__$1;
(statearr_36134_37056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (15))){
var inst_36086 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36137_37061 = state_36097__$1;
(statearr_36137_37061[(2)] = inst_36086);

(statearr_36137_37061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (13))){
var state_36097__$1 = state_36097;
var statearr_36140_37062 = state_36097__$1;
(statearr_36140_37062[(2)] = null);

(statearr_36140_37062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (6))){
var inst_36052 = (state_36097[(8)]);
var inst_36081 = (inst_36052 > (0));
var state_36097__$1 = state_36097;
if(cljs.core.truth_(inst_36081)){
var statearr_36143_37063 = state_36097__$1;
(statearr_36143_37063[(1)] = (12));

} else {
var statearr_36145_37064 = state_36097__$1;
(statearr_36145_37064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (3))){
var inst_36095 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36097__$1,inst_36095);
} else {
if((state_val_36098 === (12))){
var inst_36051 = (state_36097[(7)]);
var inst_36084 = cljs.core.vec(inst_36051);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36097__$1,(15),out,inst_36084);
} else {
if((state_val_36098 === (2))){
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36097__$1,(4),ch);
} else {
if((state_val_36098 === (11))){
var inst_36074 = (state_36097[(2)]);
var inst_36075 = (new Array(n));
var inst_36051 = inst_36075;
var inst_36052 = (0);
var state_36097__$1 = (function (){var statearr_36155 = state_36097;
(statearr_36155[(7)] = inst_36051);

(statearr_36155[(8)] = inst_36052);

(statearr_36155[(10)] = inst_36074);

return statearr_36155;
})();
var statearr_36157_37072 = state_36097__$1;
(statearr_36157_37072[(2)] = null);

(statearr_36157_37072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (9))){
var inst_36051 = (state_36097[(7)]);
var inst_36071 = cljs.core.vec(inst_36051);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36097__$1,(11),out,inst_36071);
} else {
if((state_val_36098 === (5))){
var inst_36064 = (state_36097[(11)]);
var inst_36055 = (state_36097[(9)]);
var inst_36051 = (state_36097[(7)]);
var inst_36052 = (state_36097[(8)]);
var inst_36063 = (inst_36051[inst_36052] = inst_36055);
var inst_36064__$1 = (inst_36052 + (1));
var inst_36065 = (inst_36064__$1 < n);
var state_36097__$1 = (function (){var statearr_36167 = state_36097;
(statearr_36167[(11)] = inst_36064__$1);

(statearr_36167[(12)] = inst_36063);

return statearr_36167;
})();
if(cljs.core.truth_(inst_36065)){
var statearr_36168_37074 = state_36097__$1;
(statearr_36168_37074[(1)] = (8));

} else {
var statearr_36169_37075 = state_36097__$1;
(statearr_36169_37075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (14))){
var inst_36090 = (state_36097[(2)]);
var inst_36091 = cljs.core.async.close_BANG_(out);
var state_36097__$1 = (function (){var statearr_36176 = state_36097;
(statearr_36176[(13)] = inst_36090);

return statearr_36176;
})();
var statearr_36178_37080 = state_36097__$1;
(statearr_36178_37080[(2)] = inst_36091);

(statearr_36178_37080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (10))){
var inst_36078 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36179_37081 = state_36097__$1;
(statearr_36179_37081[(2)] = inst_36078);

(statearr_36179_37081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (8))){
var inst_36064 = (state_36097[(11)]);
var inst_36051 = (state_36097[(7)]);
var tmp36172 = inst_36051;
var inst_36051__$1 = tmp36172;
var inst_36052 = inst_36064;
var state_36097__$1 = (function (){var statearr_36183 = state_36097;
(statearr_36183[(7)] = inst_36051__$1);

(statearr_36183[(8)] = inst_36052);

return statearr_36183;
})();
var statearr_36185_37082 = state_36097__$1;
(statearr_36185_37082[(2)] = null);

(statearr_36185_37082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_36186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36186[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_36186[(1)] = (1));

return statearr_36186;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_36097){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_36097);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e36193){var ex__31488__auto__ = e36193;
var statearr_36198_37086 = state_36097;
(statearr_36198_37086[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_36097[(4)]))){
var statearr_36204_37087 = state_36097;
(statearr_36204_37087[(1)] = cljs.core.first((state_36097[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37088 = state_36097;
state_36097 = G__37088;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_36097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_36097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_36217 = f__32083__auto__();
(statearr_36217[(6)] = c__32082__auto___37051);

return statearr_36217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36219 = arguments.length;
switch (G__36219) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32082__auto___37093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32083__auto__ = (function (){var switch__31483__auto__ = (function (state_36271){
var state_val_36272 = (state_36271[(1)]);
if((state_val_36272 === (7))){
var inst_36266 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
var statearr_36275_37098 = state_36271__$1;
(statearr_36275_37098[(2)] = inst_36266);

(statearr_36275_37098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (1))){
var inst_36223 = [];
var inst_36224 = inst_36223;
var inst_36225 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36271__$1 = (function (){var statearr_36276 = state_36271;
(statearr_36276[(7)] = inst_36224);

(statearr_36276[(8)] = inst_36225);

return statearr_36276;
})();
var statearr_36277_37099 = state_36271__$1;
(statearr_36277_37099[(2)] = null);

(statearr_36277_37099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (4))){
var inst_36230 = (state_36271[(9)]);
var inst_36230__$1 = (state_36271[(2)]);
var inst_36231 = (inst_36230__$1 == null);
var inst_36232 = cljs.core.not(inst_36231);
var state_36271__$1 = (function (){var statearr_36278 = state_36271;
(statearr_36278[(9)] = inst_36230__$1);

return statearr_36278;
})();
if(inst_36232){
var statearr_36279_37100 = state_36271__$1;
(statearr_36279_37100[(1)] = (5));

} else {
var statearr_36280_37105 = state_36271__$1;
(statearr_36280_37105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (15))){
var inst_36224 = (state_36271[(7)]);
var inst_36258 = cljs.core.vec(inst_36224);
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36271__$1,(18),out,inst_36258);
} else {
if((state_val_36272 === (13))){
var inst_36253 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
var statearr_36281_37119 = state_36271__$1;
(statearr_36281_37119[(2)] = inst_36253);

(statearr_36281_37119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (6))){
var inst_36224 = (state_36271[(7)]);
var inst_36255 = inst_36224.length;
var inst_36256 = (inst_36255 > (0));
var state_36271__$1 = state_36271;
if(cljs.core.truth_(inst_36256)){
var statearr_36289_37120 = state_36271__$1;
(statearr_36289_37120[(1)] = (15));

} else {
var statearr_36290_37121 = state_36271__$1;
(statearr_36290_37121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (17))){
var inst_36263 = (state_36271[(2)]);
var inst_36264 = cljs.core.async.close_BANG_(out);
var state_36271__$1 = (function (){var statearr_36291 = state_36271;
(statearr_36291[(10)] = inst_36263);

return statearr_36291;
})();
var statearr_36293_37122 = state_36271__$1;
(statearr_36293_37122[(2)] = inst_36264);

(statearr_36293_37122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (3))){
var inst_36268 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36271__$1,inst_36268);
} else {
if((state_val_36272 === (12))){
var inst_36224 = (state_36271[(7)]);
var inst_36246 = cljs.core.vec(inst_36224);
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36271__$1,(14),out,inst_36246);
} else {
if((state_val_36272 === (2))){
var state_36271__$1 = state_36271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36271__$1,(4),ch);
} else {
if((state_val_36272 === (11))){
var inst_36224 = (state_36271[(7)]);
var inst_36234 = (state_36271[(11)]);
var inst_36230 = (state_36271[(9)]);
var inst_36243 = inst_36224.push(inst_36230);
var tmp36294 = inst_36224;
var inst_36224__$1 = tmp36294;
var inst_36225 = inst_36234;
var state_36271__$1 = (function (){var statearr_36304 = state_36271;
(statearr_36304[(7)] = inst_36224__$1);

(statearr_36304[(12)] = inst_36243);

(statearr_36304[(8)] = inst_36225);

return statearr_36304;
})();
var statearr_36305_37130 = state_36271__$1;
(statearr_36305_37130[(2)] = null);

(statearr_36305_37130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (9))){
var inst_36225 = (state_36271[(8)]);
var inst_36239 = cljs.core.keyword_identical_QMARK_(inst_36225,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36271__$1 = state_36271;
var statearr_36308_37132 = state_36271__$1;
(statearr_36308_37132[(2)] = inst_36239);

(statearr_36308_37132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (5))){
var inst_36234 = (state_36271[(11)]);
var inst_36236 = (state_36271[(13)]);
var inst_36230 = (state_36271[(9)]);
var inst_36225 = (state_36271[(8)]);
var inst_36234__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36230) : f.call(null,inst_36230));
var inst_36236__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36234__$1,inst_36225);
var state_36271__$1 = (function (){var statearr_36311 = state_36271;
(statearr_36311[(11)] = inst_36234__$1);

(statearr_36311[(13)] = inst_36236__$1);

return statearr_36311;
})();
if(inst_36236__$1){
var statearr_36312_37141 = state_36271__$1;
(statearr_36312_37141[(1)] = (8));

} else {
var statearr_36313_37146 = state_36271__$1;
(statearr_36313_37146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (14))){
var inst_36234 = (state_36271[(11)]);
var inst_36230 = (state_36271[(9)]);
var inst_36248 = (state_36271[(2)]);
var inst_36249 = [];
var inst_36250 = inst_36249.push(inst_36230);
var inst_36224 = inst_36249;
var inst_36225 = inst_36234;
var state_36271__$1 = (function (){var statearr_36321 = state_36271;
(statearr_36321[(7)] = inst_36224);

(statearr_36321[(14)] = inst_36248);

(statearr_36321[(15)] = inst_36250);

(statearr_36321[(8)] = inst_36225);

return statearr_36321;
})();
var statearr_36322_37150 = state_36271__$1;
(statearr_36322_37150[(2)] = null);

(statearr_36322_37150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (16))){
var state_36271__$1 = state_36271;
var statearr_36323_37155 = state_36271__$1;
(statearr_36323_37155[(2)] = null);

(statearr_36323_37155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (10))){
var inst_36241 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
if(cljs.core.truth_(inst_36241)){
var statearr_36325_37163 = state_36271__$1;
(statearr_36325_37163[(1)] = (11));

} else {
var statearr_36326_37165 = state_36271__$1;
(statearr_36326_37165[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (18))){
var inst_36260 = (state_36271[(2)]);
var state_36271__$1 = state_36271;
var statearr_36327_37171 = state_36271__$1;
(statearr_36327_37171[(2)] = inst_36260);

(statearr_36327_37171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36272 === (8))){
var inst_36236 = (state_36271[(13)]);
var state_36271__$1 = state_36271;
var statearr_36328_37181 = state_36271__$1;
(statearr_36328_37181[(2)] = inst_36236);

(statearr_36328_37181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31484__auto__ = null;
var cljs$core$async$state_machine__31484__auto____0 = (function (){
var statearr_36331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36331[(0)] = cljs$core$async$state_machine__31484__auto__);

(statearr_36331[(1)] = (1));

return statearr_36331;
});
var cljs$core$async$state_machine__31484__auto____1 = (function (state_36271){
while(true){
var ret_value__31485__auto__ = (function (){try{while(true){
var result__31487__auto__ = switch__31483__auto__(state_36271);
if(cljs.core.keyword_identical_QMARK_(result__31487__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31487__auto__;
}
break;
}
}catch (e36332){var ex__31488__auto__ = e36332;
var statearr_36336_37186 = state_36271;
(statearr_36336_37186[(2)] = ex__31488__auto__);


if(cljs.core.seq((state_36271[(4)]))){
var statearr_36339_37187 = state_36271;
(statearr_36339_37187[(1)] = cljs.core.first((state_36271[(4)])));

} else {
throw ex__31488__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37192 = state_36271;
state_36271 = G__37192;
continue;
} else {
return ret_value__31485__auto__;
}
break;
}
});
cljs$core$async$state_machine__31484__auto__ = function(state_36271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31484__auto____1.call(this,state_36271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31484__auto____0;
cljs$core$async$state_machine__31484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31484__auto____1;
return cljs$core$async$state_machine__31484__auto__;
})()
})();
var state__32084__auto__ = (function (){var statearr_36340 = f__32083__auto__();
(statearr_36340[(6)] = c__32082__auto___37093);

return statearr_36340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32084__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
