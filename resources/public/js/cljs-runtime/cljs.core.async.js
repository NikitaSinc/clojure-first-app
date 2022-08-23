goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31971 = arguments.length;
switch (G__31971) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31973 = (function (f,blockable,meta31974){
this.f = f;
this.blockable = blockable;
this.meta31974 = meta31974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31975,meta31974__$1){
var self__ = this;
var _31975__$1 = this;
return (new cljs.core.async.t_cljs$core$async31973(self__.f,self__.blockable,meta31974__$1));
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31975){
var self__ = this;
var _31975__$1 = this;
return self__.meta31974;
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31974","meta31974",-1723485237,null)], null);
}));

(cljs.core.async.t_cljs$core$async31973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31973");

(cljs.core.async.t_cljs$core$async31973.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31973.
 */
cljs.core.async.__GT_t_cljs$core$async31973 = (function cljs$core$async$__GT_t_cljs$core$async31973(f__$1,blockable__$1,meta31974){
return (new cljs.core.async.t_cljs$core$async31973(f__$1,blockable__$1,meta31974));
});

}

return (new cljs.core.async.t_cljs$core$async31973(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31991 = arguments.length;
switch (G__31991) {
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
var G__32000 = arguments.length;
switch (G__32000) {
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
var G__32016 = arguments.length;
switch (G__32016) {
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
var val_35885 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35885) : fn1.call(null,val_35885));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35885) : fn1.call(null,val_35885));
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
var G__32023 = arguments.length;
switch (G__32023) {
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
var n__5636__auto___35899 = n;
var x_35900 = (0);
while(true){
if((x_35900 < n__5636__auto___35899)){
(a[x_35900] = x_35900);

var G__35901 = (x_35900 + (1));
x_35900 = G__35901;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32032 = (function (flag,meta32033){
this.flag = flag;
this.meta32033 = meta32033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32034,meta32033__$1){
var self__ = this;
var _32034__$1 = this;
return (new cljs.core.async.t_cljs$core$async32032(self__.flag,meta32033__$1));
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32034){
var self__ = this;
var _32034__$1 = this;
return self__.meta32033;
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32033","meta32033",-921452274,null)], null);
}));

(cljs.core.async.t_cljs$core$async32032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32032");

(cljs.core.async.t_cljs$core$async32032.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32032.
 */
cljs.core.async.__GT_t_cljs$core$async32032 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32032(flag__$1,meta32033){
return (new cljs.core.async.t_cljs$core$async32032(flag__$1,meta32033));
});

}

return (new cljs.core.async.t_cljs$core$async32032(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32066 = (function (flag,cb,meta32067){
this.flag = flag;
this.cb = cb;
this.meta32067 = meta32067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32068,meta32067__$1){
var self__ = this;
var _32068__$1 = this;
return (new cljs.core.async.t_cljs$core$async32066(self__.flag,self__.cb,meta32067__$1));
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32068){
var self__ = this;
var _32068__$1 = this;
return self__.meta32067;
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32067","meta32067",-1700642075,null)], null);
}));

(cljs.core.async.t_cljs$core$async32066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32066");

(cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32066.
 */
cljs.core.async.__GT_t_cljs$core$async32066 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32066(flag__$1,cb__$1,meta32067){
return (new cljs.core.async.t_cljs$core$async32066(flag__$1,cb__$1,meta32067));
});

}

return (new cljs.core.async.t_cljs$core$async32066(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32091_SHARP_){
var G__32100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32091_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32100) : fret.call(null,G__32100));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32092_SHARP_){
var G__32101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32092_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32101) : fret.call(null,G__32101));
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
var G__35906 = (i + (1));
i = G__35906;
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
var len__5769__auto___35907 = arguments.length;
var i__5770__auto___35908 = (0);
while(true){
if((i__5770__auto___35908 < len__5769__auto___35907)){
args__5775__auto__.push((arguments[i__5770__auto___35908]));

var G__35909 = (i__5770__auto___35908 + (1));
i__5770__auto___35908 = G__35909;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32131){
var map__32132 = p__32131;
var map__32132__$1 = cljs.core.__destructure_map(map__32132);
var opts = map__32132__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32116){
var G__32117 = cljs.core.first(seq32116);
var seq32116__$1 = cljs.core.next(seq32116);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32117,seq32116__$1);
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
var G__32144 = arguments.length;
switch (G__32144) {
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
var c__31857__auto___35911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_32228){
var state_val_32230 = (state_32228[(1)]);
if((state_val_32230 === (7))){
var inst_32219 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32256_35912 = state_32228__$1;
(statearr_32256_35912[(2)] = inst_32219);

(statearr_32256_35912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (1))){
var state_32228__$1 = state_32228;
var statearr_32258_35913 = state_32228__$1;
(statearr_32258_35913[(2)] = null);

(statearr_32258_35913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (4))){
var inst_32189 = (state_32228[(7)]);
var inst_32189__$1 = (state_32228[(2)]);
var inst_32193 = (inst_32189__$1 == null);
var state_32228__$1 = (function (){var statearr_32260 = state_32228;
(statearr_32260[(7)] = inst_32189__$1);

return statearr_32260;
})();
if(cljs.core.truth_(inst_32193)){
var statearr_32261_35919 = state_32228__$1;
(statearr_32261_35919[(1)] = (5));

} else {
var statearr_32262_35920 = state_32228__$1;
(statearr_32262_35920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (13))){
var state_32228__$1 = state_32228;
var statearr_32267_35922 = state_32228__$1;
(statearr_32267_35922[(2)] = null);

(statearr_32267_35922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (6))){
var inst_32189 = (state_32228[(7)]);
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32228__$1,(11),to,inst_32189);
} else {
if((state_val_32230 === (3))){
var inst_32224 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32228__$1,inst_32224);
} else {
if((state_val_32230 === (12))){
var state_32228__$1 = state_32228;
var statearr_32268_35923 = state_32228__$1;
(statearr_32268_35923[(2)] = null);

(statearr_32268_35923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (2))){
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32228__$1,(4),from);
} else {
if((state_val_32230 === (11))){
var inst_32205 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
if(cljs.core.truth_(inst_32205)){
var statearr_32273_35924 = state_32228__$1;
(statearr_32273_35924[(1)] = (12));

} else {
var statearr_32279_35925 = state_32228__$1;
(statearr_32279_35925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (9))){
var state_32228__$1 = state_32228;
var statearr_32284_35926 = state_32228__$1;
(statearr_32284_35926[(2)] = null);

(statearr_32284_35926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (5))){
var state_32228__$1 = state_32228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32285_35927 = state_32228__$1;
(statearr_32285_35927[(1)] = (8));

} else {
var statearr_32286_35928 = state_32228__$1;
(statearr_32286_35928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (14))){
var inst_32217 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32287_35929 = state_32228__$1;
(statearr_32287_35929[(2)] = inst_32217);

(statearr_32287_35929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (10))){
var inst_32202 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32292_35936 = state_32228__$1;
(statearr_32292_35936[(2)] = inst_32202);

(statearr_32292_35936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (8))){
var inst_32197 = cljs.core.async.close_BANG_(to);
var state_32228__$1 = state_32228;
var statearr_32295_35941 = state_32228__$1;
(statearr_32295_35941[(2)] = inst_32197);

(statearr_32295_35941[(1)] = (10));


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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_32296 = [null,null,null,null,null,null,null,null];
(statearr_32296[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_32296[(1)] = (1));

return statearr_32296;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_32228){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_32228);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e32297){var ex__31508__auto__ = e32297;
var statearr_32298_35962 = state_32228;
(statearr_32298_35962[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_32228[(4)]))){
var statearr_32299_35963 = state_32228;
(statearr_32299_35963[(1)] = cljs.core.first((state_32228[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35964 = state_32228;
state_32228 = G__35964;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_32228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_32228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_32314 = f__31858__auto__();
(statearr_32314[(6)] = c__31857__auto___35911);

return statearr_32314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
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
var process__$1 = (function (p__32348){
var vec__32349 = p__32348;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32349,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32349,(1),null);
var job = vec__32349;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31857__auto___35966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_32356){
var state_val_32357 = (state_32356[(1)]);
if((state_val_32357 === (1))){
var state_32356__$1 = state_32356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32356__$1,(2),res,v);
} else {
if((state_val_32357 === (2))){
var inst_32353 = (state_32356[(2)]);
var inst_32354 = cljs.core.async.close_BANG_(res);
var state_32356__$1 = (function (){var statearr_32366 = state_32356;
(statearr_32366[(7)] = inst_32353);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32356__$1,inst_32354);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0 = (function (){
var statearr_32370 = [null,null,null,null,null,null,null,null];
(statearr_32370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__);

(statearr_32370[(1)] = (1));

return statearr_32370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1 = (function (state_32356){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_32356);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e32372){var ex__31508__auto__ = e32372;
var statearr_32373_35973 = state_32356;
(statearr_32373_35973[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_32356[(4)]))){
var statearr_32375_35974 = state_32356;
(statearr_32375_35974[(1)] = cljs.core.first((state_32356[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35975 = state_32356;
state_32356 = G__35975;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = function(state_32356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1.call(this,state_32356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_32381 = f__31858__auto__();
(statearr_32381[(6)] = c__31857__auto___35966);

return statearr_32381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32390){
var vec__32391 = p__32390;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32391,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32391,(1),null);
var job = vec__32391;
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
var n__5636__auto___35976 = n;
var __35977 = (0);
while(true){
if((__35977 < n__5636__auto___35976)){
var G__32402_35978 = type;
var G__32402_35979__$1 = (((G__32402_35978 instanceof cljs.core.Keyword))?G__32402_35978.fqn:null);
switch (G__32402_35979__$1) {
case "compute":
var c__31857__auto___35981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35977,c__31857__auto___35981,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async){
return (function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = ((function (__35977,c__31857__auto___35981,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async){
return (function (state_32421){
var state_val_32423 = (state_32421[(1)]);
if((state_val_32423 === (1))){
var state_32421__$1 = state_32421;
var statearr_32433_35983 = state_32421__$1;
(statearr_32433_35983[(2)] = null);

(statearr_32433_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (2))){
var state_32421__$1 = state_32421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32421__$1,(4),jobs);
} else {
if((state_val_32423 === (3))){
var inst_32419 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32421__$1,inst_32419);
} else {
if((state_val_32423 === (4))){
var inst_32408 = (state_32421[(2)]);
var inst_32409 = process__$1(inst_32408);
var state_32421__$1 = state_32421;
if(cljs.core.truth_(inst_32409)){
var statearr_32435_35985 = state_32421__$1;
(statearr_32435_35985[(1)] = (5));

} else {
var statearr_32436_35986 = state_32421__$1;
(statearr_32436_35986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (5))){
var state_32421__$1 = state_32421;
var statearr_32438_35987 = state_32421__$1;
(statearr_32438_35987[(2)] = null);

(statearr_32438_35987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (6))){
var state_32421__$1 = state_32421;
var statearr_32445_35988 = state_32421__$1;
(statearr_32445_35988[(2)] = null);

(statearr_32445_35988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32423 === (7))){
var inst_32414 = (state_32421[(2)]);
var state_32421__$1 = state_32421;
var statearr_32450_35989 = state_32421__$1;
(statearr_32450_35989[(2)] = inst_32414);

(statearr_32450_35989[(1)] = (3));


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
});})(__35977,c__31857__auto___35981,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async))
;
return ((function (__35977,switch__31504__auto__,c__31857__auto___35981,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0 = (function (){
var statearr_32456 = [null,null,null,null,null,null,null];
(statearr_32456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__);

(statearr_32456[(1)] = (1));

return statearr_32456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1 = (function (state_32421){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_32421);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e32458){var ex__31508__auto__ = e32458;
var statearr_32461_35991 = state_32421;
(statearr_32461_35991[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_32421[(4)]))){
var statearr_32473_35992 = state_32421;
(statearr_32473_35992[(1)] = cljs.core.first((state_32421[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35993 = state_32421;
state_32421 = G__35993;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = function(state_32421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1.call(this,state_32421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__;
})()
;})(__35977,switch__31504__auto__,c__31857__auto___35981,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async))
})();
var state__31859__auto__ = (function (){var statearr_32476 = f__31858__auto__();
(statearr_32476[(6)] = c__31857__auto___35981);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
});})(__35977,c__31857__auto___35981,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async))
);


break;
case "async":
var c__31857__auto___35994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35977,c__31857__auto___35994,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async){
return (function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = ((function (__35977,c__31857__auto___35994,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async){
return (function (state_32492){
var state_val_32494 = (state_32492[(1)]);
if((state_val_32494 === (1))){
var state_32492__$1 = state_32492;
var statearr_32506_35995 = state_32492__$1;
(statearr_32506_35995[(2)] = null);

(statearr_32506_35995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (2))){
var state_32492__$1 = state_32492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32492__$1,(4),jobs);
} else {
if((state_val_32494 === (3))){
var inst_32489 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32492__$1,inst_32489);
} else {
if((state_val_32494 === (4))){
var inst_32481 = (state_32492[(2)]);
var inst_32482 = async(inst_32481);
var state_32492__$1 = state_32492;
if(cljs.core.truth_(inst_32482)){
var statearr_32510_35997 = state_32492__$1;
(statearr_32510_35997[(1)] = (5));

} else {
var statearr_32512_35998 = state_32492__$1;
(statearr_32512_35998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (5))){
var state_32492__$1 = state_32492;
var statearr_32515_35999 = state_32492__$1;
(statearr_32515_35999[(2)] = null);

(statearr_32515_35999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (6))){
var state_32492__$1 = state_32492;
var statearr_32516_36000 = state_32492__$1;
(statearr_32516_36000[(2)] = null);

(statearr_32516_36000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (7))){
var inst_32487 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
var statearr_32521_36001 = state_32492__$1;
(statearr_32521_36001[(2)] = inst_32487);

(statearr_32521_36001[(1)] = (3));


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
});})(__35977,c__31857__auto___35994,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async))
;
return ((function (__35977,switch__31504__auto__,c__31857__auto___35994,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0 = (function (){
var statearr_32522 = [null,null,null,null,null,null,null];
(statearr_32522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__);

(statearr_32522[(1)] = (1));

return statearr_32522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1 = (function (state_32492){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_32492);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e32535){var ex__31508__auto__ = e32535;
var statearr_32536_36004 = state_32492;
(statearr_32536_36004[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_32492[(4)]))){
var statearr_32539_36005 = state_32492;
(statearr_32539_36005[(1)] = cljs.core.first((state_32492[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36008 = state_32492;
state_32492 = G__36008;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = function(state_32492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1.call(this,state_32492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__;
})()
;})(__35977,switch__31504__auto__,c__31857__auto___35994,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async))
})();
var state__31859__auto__ = (function (){var statearr_32541 = f__31858__auto__();
(statearr_32541[(6)] = c__31857__auto___35994);

return statearr_32541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
});})(__35977,c__31857__auto___35994,G__32402_35978,G__32402_35979__$1,n__5636__auto___35976,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32402_35979__$1)].join('')));

}

var G__36013 = (__35977 + (1));
__35977 = G__36013;
continue;
} else {
}
break;
}

var c__31857__auto___36015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_32596){
var state_val_32598 = (state_32596[(1)]);
if((state_val_32598 === (7))){
var inst_32587 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32607_36018 = state_32596__$1;
(statearr_32607_36018[(2)] = inst_32587);

(statearr_32607_36018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (1))){
var state_32596__$1 = state_32596;
var statearr_32612_36019 = state_32596__$1;
(statearr_32612_36019[(2)] = null);

(statearr_32612_36019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (4))){
var inst_32548 = (state_32596[(7)]);
var inst_32548__$1 = (state_32596[(2)]);
var inst_32549 = (inst_32548__$1 == null);
var state_32596__$1 = (function (){var statearr_32616 = state_32596;
(statearr_32616[(7)] = inst_32548__$1);

return statearr_32616;
})();
if(cljs.core.truth_(inst_32549)){
var statearr_32617_36020 = state_32596__$1;
(statearr_32617_36020[(1)] = (5));

} else {
var statearr_32618_36021 = state_32596__$1;
(statearr_32618_36021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (6))){
var inst_32548 = (state_32596[(7)]);
var inst_32558 = (state_32596[(8)]);
var inst_32558__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32577 = [inst_32548,inst_32558__$1];
var inst_32578 = (new cljs.core.PersistentVector(null,2,(5),inst_32569,inst_32577,null));
var state_32596__$1 = (function (){var statearr_32624 = state_32596;
(statearr_32624[(8)] = inst_32558__$1);

return statearr_32624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32596__$1,(8),jobs,inst_32578);
} else {
if((state_val_32598 === (3))){
var inst_32589 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32596__$1,inst_32589);
} else {
if((state_val_32598 === (2))){
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32596__$1,(4),from);
} else {
if((state_val_32598 === (9))){
var inst_32584 = (state_32596[(2)]);
var state_32596__$1 = (function (){var statearr_32647 = state_32596;
(statearr_32647[(9)] = inst_32584);

return statearr_32647;
})();
var statearr_32649_36028 = state_32596__$1;
(statearr_32649_36028[(2)] = null);

(statearr_32649_36028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (5))){
var inst_32551 = cljs.core.async.close_BANG_(jobs);
var state_32596__$1 = state_32596;
var statearr_32652_36030 = state_32596__$1;
(statearr_32652_36030[(2)] = inst_32551);

(statearr_32652_36030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (8))){
var inst_32558 = (state_32596[(8)]);
var inst_32580 = (state_32596[(2)]);
var state_32596__$1 = (function (){var statearr_32669 = state_32596;
(statearr_32669[(10)] = inst_32580);

return statearr_32669;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32596__$1,(9),results,inst_32558);
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
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0 = (function (){
var statearr_32683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__);

(statearr_32683[(1)] = (1));

return statearr_32683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1 = (function (state_32596){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_32596);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e32689){var ex__31508__auto__ = e32689;
var statearr_32691_36031 = state_32596;
(statearr_32691_36031[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_32596[(4)]))){
var statearr_32698_36033 = state_32596;
(statearr_32698_36033[(1)] = cljs.core.first((state_32596[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36034 = state_32596;
state_32596 = G__36034;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = function(state_32596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1.call(this,state_32596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_32717 = f__31858__auto__();
(statearr_32717[(6)] = c__31857__auto___36015);

return statearr_32717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));


var c__31857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_32765){
var state_val_32766 = (state_32765[(1)]);
if((state_val_32766 === (7))){
var inst_32761 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32779_36035 = state_32765__$1;
(statearr_32779_36035[(2)] = inst_32761);

(statearr_32779_36035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (20))){
var state_32765__$1 = state_32765;
var statearr_32784_36036 = state_32765__$1;
(statearr_32784_36036[(2)] = null);

(statearr_32784_36036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (1))){
var state_32765__$1 = state_32765;
var statearr_32785_36039 = state_32765__$1;
(statearr_32785_36039[(2)] = null);

(statearr_32785_36039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (4))){
var inst_32722 = (state_32765[(7)]);
var inst_32722__$1 = (state_32765[(2)]);
var inst_32725 = (inst_32722__$1 == null);
var state_32765__$1 = (function (){var statearr_32788 = state_32765;
(statearr_32788[(7)] = inst_32722__$1);

return statearr_32788;
})();
if(cljs.core.truth_(inst_32725)){
var statearr_32789_36041 = state_32765__$1;
(statearr_32789_36041[(1)] = (5));

} else {
var statearr_32790_36042 = state_32765__$1;
(statearr_32790_36042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (15))){
var inst_32741 = (state_32765[(8)]);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32765__$1,(18),to,inst_32741);
} else {
if((state_val_32766 === (21))){
var inst_32756 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32794_36046 = state_32765__$1;
(statearr_32794_36046[(2)] = inst_32756);

(statearr_32794_36046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (13))){
var inst_32758 = (state_32765[(2)]);
var state_32765__$1 = (function (){var statearr_32812 = state_32765;
(statearr_32812[(9)] = inst_32758);

return statearr_32812;
})();
var statearr_32813_36047 = state_32765__$1;
(statearr_32813_36047[(2)] = null);

(statearr_32813_36047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (6))){
var inst_32722 = (state_32765[(7)]);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32765__$1,(11),inst_32722);
} else {
if((state_val_32766 === (17))){
var inst_32751 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
if(cljs.core.truth_(inst_32751)){
var statearr_32814_36049 = state_32765__$1;
(statearr_32814_36049[(1)] = (19));

} else {
var statearr_32817_36050 = state_32765__$1;
(statearr_32817_36050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (3))){
var inst_32763 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32765__$1,inst_32763);
} else {
if((state_val_32766 === (12))){
var inst_32738 = (state_32765[(10)]);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32765__$1,(14),inst_32738);
} else {
if((state_val_32766 === (2))){
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32765__$1,(4),results);
} else {
if((state_val_32766 === (19))){
var state_32765__$1 = state_32765;
var statearr_32840_36051 = state_32765__$1;
(statearr_32840_36051[(2)] = null);

(statearr_32840_36051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (11))){
var inst_32738 = (state_32765[(2)]);
var state_32765__$1 = (function (){var statearr_32841 = state_32765;
(statearr_32841[(10)] = inst_32738);

return statearr_32841;
})();
var statearr_32843_36052 = state_32765__$1;
(statearr_32843_36052[(2)] = null);

(statearr_32843_36052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (9))){
var state_32765__$1 = state_32765;
var statearr_32847_36055 = state_32765__$1;
(statearr_32847_36055[(2)] = null);

(statearr_32847_36055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (5))){
var state_32765__$1 = state_32765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32849_36056 = state_32765__$1;
(statearr_32849_36056[(1)] = (8));

} else {
var statearr_32850_36057 = state_32765__$1;
(statearr_32850_36057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (14))){
var inst_32741 = (state_32765[(8)]);
var inst_32744 = (state_32765[(11)]);
var inst_32741__$1 = (state_32765[(2)]);
var inst_32743 = (inst_32741__$1 == null);
var inst_32744__$1 = cljs.core.not(inst_32743);
var state_32765__$1 = (function (){var statearr_32853 = state_32765;
(statearr_32853[(8)] = inst_32741__$1);

(statearr_32853[(11)] = inst_32744__$1);

return statearr_32853;
})();
if(inst_32744__$1){
var statearr_32855_36059 = state_32765__$1;
(statearr_32855_36059[(1)] = (15));

} else {
var statearr_32856_36060 = state_32765__$1;
(statearr_32856_36060[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (16))){
var inst_32744 = (state_32765[(11)]);
var state_32765__$1 = state_32765;
var statearr_32857_36062 = state_32765__$1;
(statearr_32857_36062[(2)] = inst_32744);

(statearr_32857_36062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (10))){
var inst_32731 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32865_36063 = state_32765__$1;
(statearr_32865_36063[(2)] = inst_32731);

(statearr_32865_36063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (18))){
var inst_32748 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32872_36064 = state_32765__$1;
(statearr_32872_36064[(2)] = inst_32748);

(statearr_32872_36064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (8))){
var inst_32728 = cljs.core.async.close_BANG_(to);
var state_32765__$1 = state_32765;
var statearr_32874_36065 = state_32765__$1;
(statearr_32874_36065[(2)] = inst_32728);

(statearr_32874_36065[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0 = (function (){
var statearr_32878 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__);

(statearr_32878[(1)] = (1));

return statearr_32878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1 = (function (state_32765){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_32765);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e32881){var ex__31508__auto__ = e32881;
var statearr_32882_36069 = state_32765;
(statearr_32882_36069[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_32765[(4)]))){
var statearr_32884_36070 = state_32765;
(statearr_32884_36070[(1)] = cljs.core.first((state_32765[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36071 = state_32765;
state_32765 = G__36071;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__ = function(state_32765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1.call(this,state_32765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_32887 = f__31858__auto__();
(statearr_32887[(6)] = c__31857__auto__);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));

return c__31857__auto__;
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
var G__32890 = arguments.length;
switch (G__32890) {
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
var G__32909 = arguments.length;
switch (G__32909) {
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
var G__32929 = arguments.length;
switch (G__32929) {
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
var c__31857__auto___36082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_32967){
var state_val_32968 = (state_32967[(1)]);
if((state_val_32968 === (7))){
var inst_32960 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_32971_36083 = state_32967__$1;
(statearr_32971_36083[(2)] = inst_32960);

(statearr_32971_36083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (1))){
var state_32967__$1 = state_32967;
var statearr_32975_36084 = state_32967__$1;
(statearr_32975_36084[(2)] = null);

(statearr_32975_36084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (4))){
var inst_32936 = (state_32967[(7)]);
var inst_32936__$1 = (state_32967[(2)]);
var inst_32937 = (inst_32936__$1 == null);
var state_32967__$1 = (function (){var statearr_32979 = state_32967;
(statearr_32979[(7)] = inst_32936__$1);

return statearr_32979;
})();
if(cljs.core.truth_(inst_32937)){
var statearr_32980_36085 = state_32967__$1;
(statearr_32980_36085[(1)] = (5));

} else {
var statearr_32981_36086 = state_32967__$1;
(statearr_32981_36086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (13))){
var state_32967__$1 = state_32967;
var statearr_32983_36087 = state_32967__$1;
(statearr_32983_36087[(2)] = null);

(statearr_32983_36087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (6))){
var inst_32936 = (state_32967[(7)]);
var inst_32946 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32936) : p.call(null,inst_32936));
var state_32967__$1 = state_32967;
if(cljs.core.truth_(inst_32946)){
var statearr_32985_36088 = state_32967__$1;
(statearr_32985_36088[(1)] = (9));

} else {
var statearr_32988_36089 = state_32967__$1;
(statearr_32988_36089[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (3))){
var inst_32962 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32967__$1,inst_32962);
} else {
if((state_val_32968 === (12))){
var state_32967__$1 = state_32967;
var statearr_33001_36090 = state_32967__$1;
(statearr_33001_36090[(2)] = null);

(statearr_33001_36090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (2))){
var state_32967__$1 = state_32967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32967__$1,(4),ch);
} else {
if((state_val_32968 === (11))){
var inst_32936 = (state_32967[(7)]);
var inst_32951 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32967__$1,(8),inst_32951,inst_32936);
} else {
if((state_val_32968 === (9))){
var state_32967__$1 = state_32967;
var statearr_33006_36092 = state_32967__$1;
(statearr_33006_36092[(2)] = tc);

(statearr_33006_36092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (5))){
var inst_32939 = cljs.core.async.close_BANG_(tc);
var inst_32942 = cljs.core.async.close_BANG_(fc);
var state_32967__$1 = (function (){var statearr_33007 = state_32967;
(statearr_33007[(8)] = inst_32939);

return statearr_33007;
})();
var statearr_33009_36093 = state_32967__$1;
(statearr_33009_36093[(2)] = inst_32942);

(statearr_33009_36093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (14))){
var inst_32958 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_33010_36095 = state_32967__$1;
(statearr_33010_36095[(2)] = inst_32958);

(statearr_33010_36095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (10))){
var state_32967__$1 = state_32967;
var statearr_33011_36097 = state_32967__$1;
(statearr_33011_36097[(2)] = fc);

(statearr_33011_36097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (8))){
var inst_32953 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
if(cljs.core.truth_(inst_32953)){
var statearr_33012_36098 = state_32967__$1;
(statearr_33012_36098[(1)] = (12));

} else {
var statearr_33013_36100 = state_32967__$1;
(statearr_33013_36100[(1)] = (13));

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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_33014 = [null,null,null,null,null,null,null,null,null];
(statearr_33014[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_33014[(1)] = (1));

return statearr_33014;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_32967){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_32967);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e33015){var ex__31508__auto__ = e33015;
var statearr_33016_36105 = state_32967;
(statearr_33016_36105[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_32967[(4)]))){
var statearr_33018_36106 = state_32967;
(statearr_33018_36106[(1)] = cljs.core.first((state_32967[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36107 = state_32967;
state_32967 = G__36107;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_32967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_32967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_33021 = f__31858__auto__();
(statearr_33021[(6)] = c__31857__auto___36082);

return statearr_33021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
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
var c__31857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_33048){
var state_val_33049 = (state_33048[(1)]);
if((state_val_33049 === (7))){
var inst_33044 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33055_36114 = state_33048__$1;
(statearr_33055_36114[(2)] = inst_33044);

(statearr_33055_36114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (1))){
var inst_33025 = init;
var inst_33026 = inst_33025;
var state_33048__$1 = (function (){var statearr_33058 = state_33048;
(statearr_33058[(7)] = inst_33026);

return statearr_33058;
})();
var statearr_33059_36115 = state_33048__$1;
(statearr_33059_36115[(2)] = null);

(statearr_33059_36115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (4))){
var inst_33030 = (state_33048[(8)]);
var inst_33030__$1 = (state_33048[(2)]);
var inst_33031 = (inst_33030__$1 == null);
var state_33048__$1 = (function (){var statearr_33060 = state_33048;
(statearr_33060[(8)] = inst_33030__$1);

return statearr_33060;
})();
if(cljs.core.truth_(inst_33031)){
var statearr_33061_36116 = state_33048__$1;
(statearr_33061_36116[(1)] = (5));

} else {
var statearr_33062_36118 = state_33048__$1;
(statearr_33062_36118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (6))){
var inst_33026 = (state_33048[(7)]);
var inst_33034 = (state_33048[(9)]);
var inst_33030 = (state_33048[(8)]);
var inst_33034__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33026,inst_33030) : f.call(null,inst_33026,inst_33030));
var inst_33036 = cljs.core.reduced_QMARK_(inst_33034__$1);
var state_33048__$1 = (function (){var statearr_33069 = state_33048;
(statearr_33069[(9)] = inst_33034__$1);

return statearr_33069;
})();
if(inst_33036){
var statearr_33070_36120 = state_33048__$1;
(statearr_33070_36120[(1)] = (8));

} else {
var statearr_33073_36121 = state_33048__$1;
(statearr_33073_36121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (3))){
var inst_33046 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33048__$1,inst_33046);
} else {
if((state_val_33049 === (2))){
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33048__$1,(4),ch);
} else {
if((state_val_33049 === (9))){
var inst_33034 = (state_33048[(9)]);
var inst_33026 = inst_33034;
var state_33048__$1 = (function (){var statearr_33075 = state_33048;
(statearr_33075[(7)] = inst_33026);

return statearr_33075;
})();
var statearr_33076_36122 = state_33048__$1;
(statearr_33076_36122[(2)] = null);

(statearr_33076_36122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (5))){
var inst_33026 = (state_33048[(7)]);
var state_33048__$1 = state_33048;
var statearr_33083_36123 = state_33048__$1;
(statearr_33083_36123[(2)] = inst_33026);

(statearr_33083_36123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (10))){
var inst_33042 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33084_36124 = state_33048__$1;
(statearr_33084_36124[(2)] = inst_33042);

(statearr_33084_36124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (8))){
var inst_33034 = (state_33048[(9)]);
var inst_33038 = cljs.core.deref(inst_33034);
var state_33048__$1 = state_33048;
var statearr_33085_36125 = state_33048__$1;
(statearr_33085_36125[(2)] = inst_33038);

(statearr_33085_36125[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__31505__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31505__auto____0 = (function (){
var statearr_33091 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33091[(0)] = cljs$core$async$reduce_$_state_machine__31505__auto__);

(statearr_33091[(1)] = (1));

return statearr_33091;
});
var cljs$core$async$reduce_$_state_machine__31505__auto____1 = (function (state_33048){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_33048);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e33092){var ex__31508__auto__ = e33092;
var statearr_33093_36127 = state_33048;
(statearr_33093_36127[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_33048[(4)]))){
var statearr_33095_36129 = state_33048;
(statearr_33095_36129[(1)] = cljs.core.first((state_33048[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36132 = state_33048;
state_33048 = G__36132;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31505__auto__ = function(state_33048){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31505__auto____1.call(this,state_33048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31505__auto____0;
cljs$core$async$reduce_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31505__auto____1;
return cljs$core$async$reduce_$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_33101 = f__31858__auto__();
(statearr_33101[(6)] = c__31857__auto__);

return statearr_33101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));

return c__31857__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_33110){
var state_val_33111 = (state_33110[(1)]);
if((state_val_33111 === (1))){
var inst_33105 = cljs.core.async.reduce(f__$1,init,ch);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33110__$1,(2),inst_33105);
} else {
if((state_val_33111 === (2))){
var inst_33107 = (state_33110[(2)]);
var inst_33108 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33107) : f__$1.call(null,inst_33107));
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33110__$1,inst_33108);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31505__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31505__auto____0 = (function (){
var statearr_33121 = [null,null,null,null,null,null,null];
(statearr_33121[(0)] = cljs$core$async$transduce_$_state_machine__31505__auto__);

(statearr_33121[(1)] = (1));

return statearr_33121;
});
var cljs$core$async$transduce_$_state_machine__31505__auto____1 = (function (state_33110){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_33110);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e33122){var ex__31508__auto__ = e33122;
var statearr_33123_36133 = state_33110;
(statearr_33123_36133[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_33110[(4)]))){
var statearr_33124_36134 = state_33110;
(statearr_33124_36134[(1)] = cljs.core.first((state_33110[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36135 = state_33110;
state_33110 = G__36135;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31505__auto__ = function(state_33110){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31505__auto____1.call(this,state_33110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31505__auto____0;
cljs$core$async$transduce_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31505__auto____1;
return cljs$core$async$transduce_$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_33128 = f__31858__auto__();
(statearr_33128[(6)] = c__31857__auto__);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));

return c__31857__auto__;
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
var G__33133 = arguments.length;
switch (G__33133) {
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
var c__31857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_33159){
var state_val_33163 = (state_33159[(1)]);
if((state_val_33163 === (7))){
var inst_33140 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33165_36137 = state_33159__$1;
(statearr_33165_36137[(2)] = inst_33140);

(statearr_33165_36137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (1))){
var inst_33134 = cljs.core.seq(coll);
var inst_33135 = inst_33134;
var state_33159__$1 = (function (){var statearr_33167 = state_33159;
(statearr_33167[(7)] = inst_33135);

return statearr_33167;
})();
var statearr_33168_36138 = state_33159__$1;
(statearr_33168_36138[(2)] = null);

(statearr_33168_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (4))){
var inst_33135 = (state_33159[(7)]);
var inst_33138 = cljs.core.first(inst_33135);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33159__$1,(7),ch,inst_33138);
} else {
if((state_val_33163 === (13))){
var inst_33153 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33173_36140 = state_33159__$1;
(statearr_33173_36140[(2)] = inst_33153);

(statearr_33173_36140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (6))){
var inst_33143 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
if(cljs.core.truth_(inst_33143)){
var statearr_33176_36141 = state_33159__$1;
(statearr_33176_36141[(1)] = (8));

} else {
var statearr_33177_36142 = state_33159__$1;
(statearr_33177_36142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (3))){
var inst_33157 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33159__$1,inst_33157);
} else {
if((state_val_33163 === (12))){
var state_33159__$1 = state_33159;
var statearr_33178_36143 = state_33159__$1;
(statearr_33178_36143[(2)] = null);

(statearr_33178_36143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (2))){
var inst_33135 = (state_33159[(7)]);
var state_33159__$1 = state_33159;
if(cljs.core.truth_(inst_33135)){
var statearr_33180_36144 = state_33159__$1;
(statearr_33180_36144[(1)] = (4));

} else {
var statearr_33181_36145 = state_33159__$1;
(statearr_33181_36145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (11))){
var inst_33150 = cljs.core.async.close_BANG_(ch);
var state_33159__$1 = state_33159;
var statearr_33183_36146 = state_33159__$1;
(statearr_33183_36146[(2)] = inst_33150);

(statearr_33183_36146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (9))){
var state_33159__$1 = state_33159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33185_36147 = state_33159__$1;
(statearr_33185_36147[(1)] = (11));

} else {
var statearr_33186_36148 = state_33159__$1;
(statearr_33186_36148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (5))){
var inst_33135 = (state_33159[(7)]);
var state_33159__$1 = state_33159;
var statearr_33191_36149 = state_33159__$1;
(statearr_33191_36149[(2)] = inst_33135);

(statearr_33191_36149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (10))){
var inst_33155 = (state_33159[(2)]);
var state_33159__$1 = state_33159;
var statearr_33195_36150 = state_33159__$1;
(statearr_33195_36150[(2)] = inst_33155);

(statearr_33195_36150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (8))){
var inst_33135 = (state_33159[(7)]);
var inst_33145 = cljs.core.next(inst_33135);
var inst_33135__$1 = inst_33145;
var state_33159__$1 = (function (){var statearr_33199 = state_33159;
(statearr_33199[(7)] = inst_33135__$1);

return statearr_33199;
})();
var statearr_33200_36151 = state_33159__$1;
(statearr_33200_36151[(2)] = null);

(statearr_33200_36151[(1)] = (2));


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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_33201 = [null,null,null,null,null,null,null,null];
(statearr_33201[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_33201[(1)] = (1));

return statearr_33201;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_33159){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_33159);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e33203){var ex__31508__auto__ = e33203;
var statearr_33204_36152 = state_33159;
(statearr_33204_36152[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_33159[(4)]))){
var statearr_33209_36153 = state_33159;
(statearr_33209_36153[(1)] = cljs.core.first((state_33159[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36154 = state_33159;
state_33159 = G__36154;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_33210 = f__31858__auto__();
(statearr_33210[(6)] = c__31857__auto__);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));

return c__31857__auto__;
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
var G__33215 = arguments.length;
switch (G__33215) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_36160 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_36160(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36164 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_36164(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36169 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_36169(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36175 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_36175(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33244 = (function (ch,cs,meta33245){
this.ch = ch;
this.cs = cs;
this.meta33245 = meta33245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33246,meta33245__$1){
var self__ = this;
var _33246__$1 = this;
return (new cljs.core.async.t_cljs$core$async33244(self__.ch,self__.cs,meta33245__$1));
}));

(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33246){
var self__ = this;
var _33246__$1 = this;
return self__.meta33245;
}));

(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33245","meta33245",1692872520,null)], null);
}));

(cljs.core.async.t_cljs$core$async33244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33244");

(cljs.core.async.t_cljs$core$async33244.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33244.
 */
cljs.core.async.__GT_t_cljs$core$async33244 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33244(ch__$1,cs__$1,meta33245){
return (new cljs.core.async.t_cljs$core$async33244(ch__$1,cs__$1,meta33245));
});

}

return (new cljs.core.async.t_cljs$core$async33244(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31857__auto___36180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_33447){
var state_val_33448 = (state_33447[(1)]);
if((state_val_33448 === (7))){
var inst_33439 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33449_36184 = state_33447__$1;
(statearr_33449_36184[(2)] = inst_33439);

(statearr_33449_36184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (20))){
var inst_33341 = (state_33447[(7)]);
var inst_33354 = cljs.core.first(inst_33341);
var inst_33355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33354,(0),null);
var inst_33356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33354,(1),null);
var state_33447__$1 = (function (){var statearr_33450 = state_33447;
(statearr_33450[(8)] = inst_33355);

return statearr_33450;
})();
if(cljs.core.truth_(inst_33356)){
var statearr_33455_36188 = state_33447__$1;
(statearr_33455_36188[(1)] = (22));

} else {
var statearr_33456_36190 = state_33447__$1;
(statearr_33456_36190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (27))){
var inst_33386 = (state_33447[(9)]);
var inst_33306 = (state_33447[(10)]);
var inst_33388 = (state_33447[(11)]);
var inst_33393 = (state_33447[(12)]);
var inst_33393__$1 = cljs.core._nth(inst_33386,inst_33388);
var inst_33394 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33393__$1,inst_33306,done);
var state_33447__$1 = (function (){var statearr_33461 = state_33447;
(statearr_33461[(12)] = inst_33393__$1);

return statearr_33461;
})();
if(cljs.core.truth_(inst_33394)){
var statearr_33462_36194 = state_33447__$1;
(statearr_33462_36194[(1)] = (30));

} else {
var statearr_33464_36195 = state_33447__$1;
(statearr_33464_36195[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (1))){
var state_33447__$1 = state_33447;
var statearr_33467_36196 = state_33447__$1;
(statearr_33467_36196[(2)] = null);

(statearr_33467_36196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (24))){
var inst_33341 = (state_33447[(7)]);
var inst_33362 = (state_33447[(2)]);
var inst_33363 = cljs.core.next(inst_33341);
var inst_33318 = inst_33363;
var inst_33319 = null;
var inst_33320 = (0);
var inst_33321 = (0);
var state_33447__$1 = (function (){var statearr_33470 = state_33447;
(statearr_33470[(13)] = inst_33318);

(statearr_33470[(14)] = inst_33319);

(statearr_33470[(15)] = inst_33362);

(statearr_33470[(16)] = inst_33320);

(statearr_33470[(17)] = inst_33321);

return statearr_33470;
})();
var statearr_33471_36201 = state_33447__$1;
(statearr_33471_36201[(2)] = null);

(statearr_33471_36201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (39))){
var state_33447__$1 = state_33447;
var statearr_33478_36202 = state_33447__$1;
(statearr_33478_36202[(2)] = null);

(statearr_33478_36202[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (4))){
var inst_33306 = (state_33447[(10)]);
var inst_33306__$1 = (state_33447[(2)]);
var inst_33309 = (inst_33306__$1 == null);
var state_33447__$1 = (function (){var statearr_33479 = state_33447;
(statearr_33479[(10)] = inst_33306__$1);

return statearr_33479;
})();
if(cljs.core.truth_(inst_33309)){
var statearr_33480_36204 = state_33447__$1;
(statearr_33480_36204[(1)] = (5));

} else {
var statearr_33481_36205 = state_33447__$1;
(statearr_33481_36205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (15))){
var inst_33318 = (state_33447[(13)]);
var inst_33319 = (state_33447[(14)]);
var inst_33320 = (state_33447[(16)]);
var inst_33321 = (state_33447[(17)]);
var inst_33337 = (state_33447[(2)]);
var inst_33338 = (inst_33321 + (1));
var tmp33472 = inst_33318;
var tmp33473 = inst_33319;
var tmp33474 = inst_33320;
var inst_33318__$1 = tmp33472;
var inst_33319__$1 = tmp33473;
var inst_33320__$1 = tmp33474;
var inst_33321__$1 = inst_33338;
var state_33447__$1 = (function (){var statearr_33486 = state_33447;
(statearr_33486[(18)] = inst_33337);

(statearr_33486[(13)] = inst_33318__$1);

(statearr_33486[(14)] = inst_33319__$1);

(statearr_33486[(16)] = inst_33320__$1);

(statearr_33486[(17)] = inst_33321__$1);

return statearr_33486;
})();
var statearr_33490_36206 = state_33447__$1;
(statearr_33490_36206[(2)] = null);

(statearr_33490_36206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (21))){
var inst_33366 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33501_36207 = state_33447__$1;
(statearr_33501_36207[(2)] = inst_33366);

(statearr_33501_36207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (31))){
var inst_33393 = (state_33447[(12)]);
var inst_33397 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33393);
var state_33447__$1 = state_33447;
var statearr_33502_36208 = state_33447__$1;
(statearr_33502_36208[(2)] = inst_33397);

(statearr_33502_36208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (32))){
var inst_33386 = (state_33447[(9)]);
var inst_33387 = (state_33447[(19)]);
var inst_33385 = (state_33447[(20)]);
var inst_33388 = (state_33447[(11)]);
var inst_33399 = (state_33447[(2)]);
var inst_33400 = (inst_33388 + (1));
var tmp33491 = inst_33386;
var tmp33492 = inst_33387;
var tmp33493 = inst_33385;
var inst_33385__$1 = tmp33493;
var inst_33386__$1 = tmp33491;
var inst_33387__$1 = tmp33492;
var inst_33388__$1 = inst_33400;
var state_33447__$1 = (function (){var statearr_33504 = state_33447;
(statearr_33504[(9)] = inst_33386__$1);

(statearr_33504[(21)] = inst_33399);

(statearr_33504[(19)] = inst_33387__$1);

(statearr_33504[(20)] = inst_33385__$1);

(statearr_33504[(11)] = inst_33388__$1);

return statearr_33504;
})();
var statearr_33505_36216 = state_33447__$1;
(statearr_33505_36216[(2)] = null);

(statearr_33505_36216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (40))){
var inst_33412 = (state_33447[(22)]);
var inst_33416 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33412);
var state_33447__$1 = state_33447;
var statearr_33506_36217 = state_33447__$1;
(statearr_33506_36217[(2)] = inst_33416);

(statearr_33506_36217[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (33))){
var inst_33403 = (state_33447[(23)]);
var inst_33405 = cljs.core.chunked_seq_QMARK_(inst_33403);
var state_33447__$1 = state_33447;
if(inst_33405){
var statearr_33508_36221 = state_33447__$1;
(statearr_33508_36221[(1)] = (36));

} else {
var statearr_33509_36222 = state_33447__$1;
(statearr_33509_36222[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (13))){
var inst_33330 = (state_33447[(24)]);
var inst_33334 = cljs.core.async.close_BANG_(inst_33330);
var state_33447__$1 = state_33447;
var statearr_33510_36223 = state_33447__$1;
(statearr_33510_36223[(2)] = inst_33334);

(statearr_33510_36223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (22))){
var inst_33355 = (state_33447[(8)]);
var inst_33359 = cljs.core.async.close_BANG_(inst_33355);
var state_33447__$1 = state_33447;
var statearr_33511_36224 = state_33447__$1;
(statearr_33511_36224[(2)] = inst_33359);

(statearr_33511_36224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (36))){
var inst_33403 = (state_33447[(23)]);
var inst_33407 = cljs.core.chunk_first(inst_33403);
var inst_33408 = cljs.core.chunk_rest(inst_33403);
var inst_33409 = cljs.core.count(inst_33407);
var inst_33385 = inst_33408;
var inst_33386 = inst_33407;
var inst_33387 = inst_33409;
var inst_33388 = (0);
var state_33447__$1 = (function (){var statearr_33513 = state_33447;
(statearr_33513[(9)] = inst_33386);

(statearr_33513[(19)] = inst_33387);

(statearr_33513[(20)] = inst_33385);

(statearr_33513[(11)] = inst_33388);

return statearr_33513;
})();
var statearr_33515_36225 = state_33447__$1;
(statearr_33515_36225[(2)] = null);

(statearr_33515_36225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (41))){
var inst_33403 = (state_33447[(23)]);
var inst_33418 = (state_33447[(2)]);
var inst_33419 = cljs.core.next(inst_33403);
var inst_33385 = inst_33419;
var inst_33386 = null;
var inst_33387 = (0);
var inst_33388 = (0);
var state_33447__$1 = (function (){var statearr_33517 = state_33447;
(statearr_33517[(9)] = inst_33386);

(statearr_33517[(19)] = inst_33387);

(statearr_33517[(20)] = inst_33385);

(statearr_33517[(11)] = inst_33388);

(statearr_33517[(25)] = inst_33418);

return statearr_33517;
})();
var statearr_33519_36226 = state_33447__$1;
(statearr_33519_36226[(2)] = null);

(statearr_33519_36226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (43))){
var state_33447__$1 = state_33447;
var statearr_33524_36227 = state_33447__$1;
(statearr_33524_36227[(2)] = null);

(statearr_33524_36227[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (29))){
var inst_33427 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33529_36231 = state_33447__$1;
(statearr_33529_36231[(2)] = inst_33427);

(statearr_33529_36231[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (44))){
var inst_33436 = (state_33447[(2)]);
var state_33447__$1 = (function (){var statearr_33531 = state_33447;
(statearr_33531[(26)] = inst_33436);

return statearr_33531;
})();
var statearr_33534_36236 = state_33447__$1;
(statearr_33534_36236[(2)] = null);

(statearr_33534_36236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (6))){
var inst_33376 = (state_33447[(27)]);
var inst_33375 = cljs.core.deref(cs);
var inst_33376__$1 = cljs.core.keys(inst_33375);
var inst_33378 = cljs.core.count(inst_33376__$1);
var inst_33379 = cljs.core.reset_BANG_(dctr,inst_33378);
var inst_33384 = cljs.core.seq(inst_33376__$1);
var inst_33385 = inst_33384;
var inst_33386 = null;
var inst_33387 = (0);
var inst_33388 = (0);
var state_33447__$1 = (function (){var statearr_33538 = state_33447;
(statearr_33538[(9)] = inst_33386);

(statearr_33538[(19)] = inst_33387);

(statearr_33538[(20)] = inst_33385);

(statearr_33538[(11)] = inst_33388);

(statearr_33538[(28)] = inst_33379);

(statearr_33538[(27)] = inst_33376__$1);

return statearr_33538;
})();
var statearr_33540_36247 = state_33447__$1;
(statearr_33540_36247[(2)] = null);

(statearr_33540_36247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (28))){
var inst_33403 = (state_33447[(23)]);
var inst_33385 = (state_33447[(20)]);
var inst_33403__$1 = cljs.core.seq(inst_33385);
var state_33447__$1 = (function (){var statearr_33544 = state_33447;
(statearr_33544[(23)] = inst_33403__$1);

return statearr_33544;
})();
if(inst_33403__$1){
var statearr_33549_36248 = state_33447__$1;
(statearr_33549_36248[(1)] = (33));

} else {
var statearr_33551_36252 = state_33447__$1;
(statearr_33551_36252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (25))){
var inst_33387 = (state_33447[(19)]);
var inst_33388 = (state_33447[(11)]);
var inst_33390 = (inst_33388 < inst_33387);
var inst_33391 = inst_33390;
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33391)){
var statearr_33553_36253 = state_33447__$1;
(statearr_33553_36253[(1)] = (27));

} else {
var statearr_33554_36254 = state_33447__$1;
(statearr_33554_36254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (34))){
var state_33447__$1 = state_33447;
var statearr_33555_36255 = state_33447__$1;
(statearr_33555_36255[(2)] = null);

(statearr_33555_36255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (17))){
var state_33447__$1 = state_33447;
var statearr_33556_36260 = state_33447__$1;
(statearr_33556_36260[(2)] = null);

(statearr_33556_36260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (3))){
var inst_33441 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33447__$1,inst_33441);
} else {
if((state_val_33448 === (12))){
var inst_33371 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33562_36264 = state_33447__$1;
(statearr_33562_36264[(2)] = inst_33371);

(statearr_33562_36264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (2))){
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33447__$1,(4),ch);
} else {
if((state_val_33448 === (23))){
var state_33447__$1 = state_33447;
var statearr_33563_36265 = state_33447__$1;
(statearr_33563_36265[(2)] = null);

(statearr_33563_36265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (35))){
var inst_33425 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33564_36266 = state_33447__$1;
(statearr_33564_36266[(2)] = inst_33425);

(statearr_33564_36266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (19))){
var inst_33341 = (state_33447[(7)]);
var inst_33345 = cljs.core.chunk_first(inst_33341);
var inst_33346 = cljs.core.chunk_rest(inst_33341);
var inst_33347 = cljs.core.count(inst_33345);
var inst_33318 = inst_33346;
var inst_33319 = inst_33345;
var inst_33320 = inst_33347;
var inst_33321 = (0);
var state_33447__$1 = (function (){var statearr_33566 = state_33447;
(statearr_33566[(13)] = inst_33318);

(statearr_33566[(14)] = inst_33319);

(statearr_33566[(16)] = inst_33320);

(statearr_33566[(17)] = inst_33321);

return statearr_33566;
})();
var statearr_33571_36270 = state_33447__$1;
(statearr_33571_36270[(2)] = null);

(statearr_33571_36270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (11))){
var inst_33318 = (state_33447[(13)]);
var inst_33341 = (state_33447[(7)]);
var inst_33341__$1 = cljs.core.seq(inst_33318);
var state_33447__$1 = (function (){var statearr_33573 = state_33447;
(statearr_33573[(7)] = inst_33341__$1);

return statearr_33573;
})();
if(inst_33341__$1){
var statearr_33574_36273 = state_33447__$1;
(statearr_33574_36273[(1)] = (16));

} else {
var statearr_33575_36274 = state_33447__$1;
(statearr_33575_36274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (9))){
var inst_33373 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33577_36275 = state_33447__$1;
(statearr_33577_36275[(2)] = inst_33373);

(statearr_33577_36275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (5))){
var inst_33316 = cljs.core.deref(cs);
var inst_33317 = cljs.core.seq(inst_33316);
var inst_33318 = inst_33317;
var inst_33319 = null;
var inst_33320 = (0);
var inst_33321 = (0);
var state_33447__$1 = (function (){var statearr_33579 = state_33447;
(statearr_33579[(13)] = inst_33318);

(statearr_33579[(14)] = inst_33319);

(statearr_33579[(16)] = inst_33320);

(statearr_33579[(17)] = inst_33321);

return statearr_33579;
})();
var statearr_33580_36276 = state_33447__$1;
(statearr_33580_36276[(2)] = null);

(statearr_33580_36276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (14))){
var state_33447__$1 = state_33447;
var statearr_33581_36280 = state_33447__$1;
(statearr_33581_36280[(2)] = null);

(statearr_33581_36280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (45))){
var inst_33433 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33582_36284 = state_33447__$1;
(statearr_33582_36284[(2)] = inst_33433);

(statearr_33582_36284[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (26))){
var inst_33376 = (state_33447[(27)]);
var inst_33429 = (state_33447[(2)]);
var inst_33430 = cljs.core.seq(inst_33376);
var state_33447__$1 = (function (){var statearr_33589 = state_33447;
(statearr_33589[(29)] = inst_33429);

return statearr_33589;
})();
if(inst_33430){
var statearr_33590_36285 = state_33447__$1;
(statearr_33590_36285[(1)] = (42));

} else {
var statearr_33591_36286 = state_33447__$1;
(statearr_33591_36286[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (16))){
var inst_33341 = (state_33447[(7)]);
var inst_33343 = cljs.core.chunked_seq_QMARK_(inst_33341);
var state_33447__$1 = state_33447;
if(inst_33343){
var statearr_33592_36289 = state_33447__$1;
(statearr_33592_36289[(1)] = (19));

} else {
var statearr_33593_36291 = state_33447__$1;
(statearr_33593_36291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (38))){
var inst_33422 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33594_36293 = state_33447__$1;
(statearr_33594_36293[(2)] = inst_33422);

(statearr_33594_36293[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (30))){
var state_33447__$1 = state_33447;
var statearr_33595_36294 = state_33447__$1;
(statearr_33595_36294[(2)] = null);

(statearr_33595_36294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (10))){
var inst_33319 = (state_33447[(14)]);
var inst_33321 = (state_33447[(17)]);
var inst_33329 = cljs.core._nth(inst_33319,inst_33321);
var inst_33330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33329,(0),null);
var inst_33332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33329,(1),null);
var state_33447__$1 = (function (){var statearr_33601 = state_33447;
(statearr_33601[(24)] = inst_33330);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33332)){
var statearr_33602_36302 = state_33447__$1;
(statearr_33602_36302[(1)] = (13));

} else {
var statearr_33603_36303 = state_33447__$1;
(statearr_33603_36303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (18))){
var inst_33369 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33610_36307 = state_33447__$1;
(statearr_33610_36307[(2)] = inst_33369);

(statearr_33610_36307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (42))){
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33447__$1,(45),dchan);
} else {
if((state_val_33448 === (37))){
var inst_33306 = (state_33447[(10)]);
var inst_33403 = (state_33447[(23)]);
var inst_33412 = (state_33447[(22)]);
var inst_33412__$1 = cljs.core.first(inst_33403);
var inst_33413 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33412__$1,inst_33306,done);
var state_33447__$1 = (function (){var statearr_33621 = state_33447;
(statearr_33621[(22)] = inst_33412__$1);

return statearr_33621;
})();
if(cljs.core.truth_(inst_33413)){
var statearr_33626_36308 = state_33447__$1;
(statearr_33626_36308[(1)] = (39));

} else {
var statearr_33627_36309 = state_33447__$1;
(statearr_33627_36309[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (8))){
var inst_33320 = (state_33447[(16)]);
var inst_33321 = (state_33447[(17)]);
var inst_33323 = (inst_33321 < inst_33320);
var inst_33324 = inst_33323;
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33324)){
var statearr_33632_36311 = state_33447__$1;
(statearr_33632_36311[(1)] = (10));

} else {
var statearr_33633_36312 = state_33447__$1;
(statearr_33633_36312[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31505__auto__ = null;
var cljs$core$async$mult_$_state_machine__31505__auto____0 = (function (){
var statearr_33649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33649[(0)] = cljs$core$async$mult_$_state_machine__31505__auto__);

(statearr_33649[(1)] = (1));

return statearr_33649;
});
var cljs$core$async$mult_$_state_machine__31505__auto____1 = (function (state_33447){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_33447);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e33651){var ex__31508__auto__ = e33651;
var statearr_33652_36316 = state_33447;
(statearr_33652_36316[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_33447[(4)]))){
var statearr_33653_36317 = state_33447;
(statearr_33653_36317[(1)] = cljs.core.first((state_33447[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36318 = state_33447;
state_33447 = G__36318;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31505__auto__ = function(state_33447){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31505__auto____1.call(this,state_33447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31505__auto____0;
cljs$core$async$mult_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31505__auto____1;
return cljs$core$async$mult_$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_33657 = f__31858__auto__();
(statearr_33657[(6)] = c__31857__auto___36180);

return statearr_33657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
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
var G__33663 = arguments.length;
switch (G__33663) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36323 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36323(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36324 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36324(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36325 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36325(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36330 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36330(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36331 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36331(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36332 = arguments.length;
var i__5770__auto___36333 = (0);
while(true){
if((i__5770__auto___36333 < len__5769__auto___36332)){
args__5775__auto__.push((arguments[i__5770__auto___36333]));

var G__36334 = (i__5770__auto___36333 + (1));
i__5770__auto___36333 = G__36334;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33739){
var map__33740 = p__33739;
var map__33740__$1 = cljs.core.__destructure_map(map__33740);
var opts = map__33740__$1;
var statearr_33741_36336 = state;
(statearr_33741_36336[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33745_36337 = state;
(statearr_33745_36337[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33746_36338 = state;
(statearr_33746_36338[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33724){
var G__33725 = cljs.core.first(seq33724);
var seq33724__$1 = cljs.core.next(seq33724);
var G__33726 = cljs.core.first(seq33724__$1);
var seq33724__$2 = cljs.core.next(seq33724__$1);
var G__33727 = cljs.core.first(seq33724__$2);
var seq33724__$3 = cljs.core.next(seq33724__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33725,G__33726,G__33727,seq33724__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33778 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33779){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33779 = meta33779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33780,meta33779__$1){
var self__ = this;
var _33780__$1 = this;
return (new cljs.core.async.t_cljs$core$async33778(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33779__$1));
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33780){
var self__ = this;
var _33780__$1 = this;
return self__.meta33779;
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33779","meta33779",1666470495,null)], null);
}));

(cljs.core.async.t_cljs$core$async33778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33778");

(cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33778.
 */
cljs.core.async.__GT_t_cljs$core$async33778 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33778(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33779){
return (new cljs.core.async.t_cljs$core$async33778(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33779));
});

}

return (new cljs.core.async.t_cljs$core$async33778(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31857__auto___36358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_33915){
var state_val_33916 = (state_33915[(1)]);
if((state_val_33916 === (7))){
var inst_33862 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
if(cljs.core.truth_(inst_33862)){
var statearr_33925_36364 = state_33915__$1;
(statearr_33925_36364[(1)] = (8));

} else {
var statearr_33926_36365 = state_33915__$1;
(statearr_33926_36365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (20))){
var inst_33853 = (state_33915[(7)]);
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33915__$1,(23),out,inst_33853);
} else {
if((state_val_33916 === (1))){
var inst_33826 = calc_state();
var inst_33829 = cljs.core.__destructure_map(inst_33826);
var inst_33830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33829,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33829,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33829,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33836 = inst_33826;
var state_33915__$1 = (function (){var statearr_33931 = state_33915;
(statearr_33931[(8)] = inst_33836);

(statearr_33931[(9)] = inst_33830);

(statearr_33931[(10)] = inst_33834);

(statearr_33931[(11)] = inst_33833);

return statearr_33931;
})();
var statearr_33939_36366 = state_33915__$1;
(statearr_33939_36366[(2)] = null);

(statearr_33939_36366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (24))){
var inst_33839 = (state_33915[(12)]);
var inst_33836 = inst_33839;
var state_33915__$1 = (function (){var statearr_33940 = state_33915;
(statearr_33940[(8)] = inst_33836);

return statearr_33940;
})();
var statearr_33942_36367 = state_33915__$1;
(statearr_33942_36367[(2)] = null);

(statearr_33942_36367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (4))){
var inst_33856 = (state_33915[(13)]);
var inst_33853 = (state_33915[(7)]);
var inst_33852 = (state_33915[(2)]);
var inst_33853__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33852,(0),null);
var inst_33855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33852,(1),null);
var inst_33856__$1 = (inst_33853__$1 == null);
var state_33915__$1 = (function (){var statearr_33945 = state_33915;
(statearr_33945[(13)] = inst_33856__$1);

(statearr_33945[(7)] = inst_33853__$1);

(statearr_33945[(14)] = inst_33855);

return statearr_33945;
})();
if(cljs.core.truth_(inst_33856__$1)){
var statearr_33947_36379 = state_33915__$1;
(statearr_33947_36379[(1)] = (5));

} else {
var statearr_33949_36380 = state_33915__$1;
(statearr_33949_36380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (15))){
var inst_33840 = (state_33915[(15)]);
var inst_33879 = (state_33915[(16)]);
var inst_33879__$1 = cljs.core.empty_QMARK_(inst_33840);
var state_33915__$1 = (function (){var statearr_33951 = state_33915;
(statearr_33951[(16)] = inst_33879__$1);

return statearr_33951;
})();
if(inst_33879__$1){
var statearr_33952_36381 = state_33915__$1;
(statearr_33952_36381[(1)] = (17));

} else {
var statearr_33953_36382 = state_33915__$1;
(statearr_33953_36382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (21))){
var inst_33839 = (state_33915[(12)]);
var inst_33836 = inst_33839;
var state_33915__$1 = (function (){var statearr_33961 = state_33915;
(statearr_33961[(8)] = inst_33836);

return statearr_33961;
})();
var statearr_33962_36383 = state_33915__$1;
(statearr_33962_36383[(2)] = null);

(statearr_33962_36383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (13))){
var inst_33869 = (state_33915[(2)]);
var inst_33870 = calc_state();
var inst_33836 = inst_33870;
var state_33915__$1 = (function (){var statearr_33963 = state_33915;
(statearr_33963[(17)] = inst_33869);

(statearr_33963[(8)] = inst_33836);

return statearr_33963;
})();
var statearr_33965_36384 = state_33915__$1;
(statearr_33965_36384[(2)] = null);

(statearr_33965_36384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (22))){
var inst_33904 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33966_36385 = state_33915__$1;
(statearr_33966_36385[(2)] = inst_33904);

(statearr_33966_36385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (6))){
var inst_33855 = (state_33915[(14)]);
var inst_33860 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33855,change);
var state_33915__$1 = state_33915;
var statearr_33970_36386 = state_33915__$1;
(statearr_33970_36386[(2)] = inst_33860);

(statearr_33970_36386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (25))){
var state_33915__$1 = state_33915;
var statearr_33971_36387 = state_33915__$1;
(statearr_33971_36387[(2)] = null);

(statearr_33971_36387[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (17))){
var inst_33843 = (state_33915[(18)]);
var inst_33855 = (state_33915[(14)]);
var inst_33885 = (inst_33843.cljs$core$IFn$_invoke$arity$1 ? inst_33843.cljs$core$IFn$_invoke$arity$1(inst_33855) : inst_33843.call(null,inst_33855));
var inst_33886 = cljs.core.not(inst_33885);
var state_33915__$1 = state_33915;
var statearr_33977_36388 = state_33915__$1;
(statearr_33977_36388[(2)] = inst_33886);

(statearr_33977_36388[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (3))){
var inst_33908 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33915__$1,inst_33908);
} else {
if((state_val_33916 === (12))){
var state_33915__$1 = state_33915;
var statearr_33981_36390 = state_33915__$1;
(statearr_33981_36390[(2)] = null);

(statearr_33981_36390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (2))){
var inst_33839 = (state_33915[(12)]);
var inst_33836 = (state_33915[(8)]);
var inst_33839__$1 = cljs.core.__destructure_map(inst_33836);
var inst_33840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33839__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33839__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33839__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33915__$1 = (function (){var statearr_33985 = state_33915;
(statearr_33985[(12)] = inst_33839__$1);

(statearr_33985[(15)] = inst_33840);

(statearr_33985[(18)] = inst_33843);

return statearr_33985;
})();
return cljs.core.async.ioc_alts_BANG_(state_33915__$1,(4),inst_33844);
} else {
if((state_val_33916 === (23))){
var inst_33895 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
if(cljs.core.truth_(inst_33895)){
var statearr_33990_36393 = state_33915__$1;
(statearr_33990_36393[(1)] = (24));

} else {
var statearr_33991_36394 = state_33915__$1;
(statearr_33991_36394[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (19))){
var inst_33889 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_33992_36396 = state_33915__$1;
(statearr_33992_36396[(2)] = inst_33889);

(statearr_33992_36396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (11))){
var inst_33855 = (state_33915[(14)]);
var inst_33866 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33855);
var state_33915__$1 = state_33915;
var statearr_33994_36398 = state_33915__$1;
(statearr_33994_36398[(2)] = inst_33866);

(statearr_33994_36398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (9))){
var inst_33840 = (state_33915[(15)]);
var inst_33875 = (state_33915[(19)]);
var inst_33855 = (state_33915[(14)]);
var inst_33875__$1 = (inst_33840.cljs$core$IFn$_invoke$arity$1 ? inst_33840.cljs$core$IFn$_invoke$arity$1(inst_33855) : inst_33840.call(null,inst_33855));
var state_33915__$1 = (function (){var statearr_33997 = state_33915;
(statearr_33997[(19)] = inst_33875__$1);

return statearr_33997;
})();
if(cljs.core.truth_(inst_33875__$1)){
var statearr_33999_36399 = state_33915__$1;
(statearr_33999_36399[(1)] = (14));

} else {
var statearr_34003_36400 = state_33915__$1;
(statearr_34003_36400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (5))){
var inst_33856 = (state_33915[(13)]);
var state_33915__$1 = state_33915;
var statearr_34004_36401 = state_33915__$1;
(statearr_34004_36401[(2)] = inst_33856);

(statearr_34004_36401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (14))){
var inst_33875 = (state_33915[(19)]);
var state_33915__$1 = state_33915;
var statearr_34007_36404 = state_33915__$1;
(statearr_34007_36404[(2)] = inst_33875);

(statearr_34007_36404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (26))){
var inst_33900 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_34010_36405 = state_33915__$1;
(statearr_34010_36405[(2)] = inst_33900);

(statearr_34010_36405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (16))){
var inst_33891 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
if(cljs.core.truth_(inst_33891)){
var statearr_34012_36406 = state_33915__$1;
(statearr_34012_36406[(1)] = (20));

} else {
var statearr_34013_36407 = state_33915__$1;
(statearr_34013_36407[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (10))){
var inst_33906 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
var statearr_34015_36411 = state_33915__$1;
(statearr_34015_36411[(2)] = inst_33906);

(statearr_34015_36411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (18))){
var inst_33879 = (state_33915[(16)]);
var state_33915__$1 = state_33915;
var statearr_34016_36412 = state_33915__$1;
(statearr_34016_36412[(2)] = inst_33879);

(statearr_34016_36412[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (8))){
var inst_33853 = (state_33915[(7)]);
var inst_33864 = (inst_33853 == null);
var state_33915__$1 = state_33915;
if(cljs.core.truth_(inst_33864)){
var statearr_34020_36415 = state_33915__$1;
(statearr_34020_36415[(1)] = (11));

} else {
var statearr_34021_36416 = state_33915__$1;
(statearr_34021_36416[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__31505__auto__ = null;
var cljs$core$async$mix_$_state_machine__31505__auto____0 = (function (){
var statearr_34025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34025[(0)] = cljs$core$async$mix_$_state_machine__31505__auto__);

(statearr_34025[(1)] = (1));

return statearr_34025;
});
var cljs$core$async$mix_$_state_machine__31505__auto____1 = (function (state_33915){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_33915);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e34030){var ex__31508__auto__ = e34030;
var statearr_34031_36418 = state_33915;
(statearr_34031_36418[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_33915[(4)]))){
var statearr_34032_36419 = state_33915;
(statearr_34032_36419[(1)] = cljs.core.first((state_33915[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36420 = state_33915;
state_33915 = G__36420;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31505__auto__ = function(state_33915){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31505__auto____1.call(this,state_33915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31505__auto____0;
cljs$core$async$mix_$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31505__auto____1;
return cljs$core$async$mix_$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_34036 = f__31858__auto__();
(statearr_34036[(6)] = c__31857__auto___36358);

return statearr_34036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36422 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36422(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36424 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36424(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36425 = (function() {
var G__36426 = null;
var G__36426__1 = (function (p){
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
var G__36426__2 = (function (p,v){
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
G__36426 = function(p,v){
switch(arguments.length){
case 1:
return G__36426__1.call(this,p);
case 2:
return G__36426__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36426.cljs$core$IFn$_invoke$arity$1 = G__36426__1;
G__36426.cljs$core$IFn$_invoke$arity$2 = G__36426__2;
return G__36426;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34117 = arguments.length;
switch (G__34117) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36425(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36425(p,v);
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
var G__34155 = arguments.length;
switch (G__34155) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34142_SHARP_){
if(cljs.core.truth_((p1__34142_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34142_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34142_SHARP_.call(null,topic)))){
return p1__34142_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34142_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34164 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34165){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34165 = meta34165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34166,meta34165__$1){
var self__ = this;
var _34166__$1 = this;
return (new cljs.core.async.t_cljs$core$async34164(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34165__$1));
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34166){
var self__ = this;
var _34166__$1 = this;
return self__.meta34165;
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34164.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34165","meta34165",647466310,null)], null);
}));

(cljs.core.async.t_cljs$core$async34164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34164");

(cljs.core.async.t_cljs$core$async34164.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34164.
 */
cljs.core.async.__GT_t_cljs$core$async34164 = (function cljs$core$async$__GT_t_cljs$core$async34164(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34165){
return (new cljs.core.async.t_cljs$core$async34164(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34165));
});

}

return (new cljs.core.async.t_cljs$core$async34164(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31857__auto___36440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_34269){
var state_val_34270 = (state_34269[(1)]);
if((state_val_34270 === (7))){
var inst_34265 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34279_36441 = state_34269__$1;
(statearr_34279_36441[(2)] = inst_34265);

(statearr_34279_36441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (20))){
var state_34269__$1 = state_34269;
var statearr_34283_36442 = state_34269__$1;
(statearr_34283_36442[(2)] = null);

(statearr_34283_36442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (1))){
var state_34269__$1 = state_34269;
var statearr_34286_36443 = state_34269__$1;
(statearr_34286_36443[(2)] = null);

(statearr_34286_36443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (24))){
var inst_34239 = (state_34269[(7)]);
var inst_34257 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34239);
var state_34269__$1 = state_34269;
var statearr_34287_36444 = state_34269__$1;
(statearr_34287_36444[(2)] = inst_34257);

(statearr_34287_36444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (4))){
var inst_34178 = (state_34269[(8)]);
var inst_34178__$1 = (state_34269[(2)]);
var inst_34179 = (inst_34178__$1 == null);
var state_34269__$1 = (function (){var statearr_34291 = state_34269;
(statearr_34291[(8)] = inst_34178__$1);

return statearr_34291;
})();
if(cljs.core.truth_(inst_34179)){
var statearr_34292_36445 = state_34269__$1;
(statearr_34292_36445[(1)] = (5));

} else {
var statearr_34296_36446 = state_34269__$1;
(statearr_34296_36446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (15))){
var inst_34232 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34297_36448 = state_34269__$1;
(statearr_34297_36448[(2)] = inst_34232);

(statearr_34297_36448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (21))){
var inst_34262 = (state_34269[(2)]);
var state_34269__$1 = (function (){var statearr_34300 = state_34269;
(statearr_34300[(9)] = inst_34262);

return statearr_34300;
})();
var statearr_34304_36452 = state_34269__$1;
(statearr_34304_36452[(2)] = null);

(statearr_34304_36452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (13))){
var inst_34204 = (state_34269[(10)]);
var inst_34210 = cljs.core.chunked_seq_QMARK_(inst_34204);
var state_34269__$1 = state_34269;
if(inst_34210){
var statearr_34310_36457 = state_34269__$1;
(statearr_34310_36457[(1)] = (16));

} else {
var statearr_34311_36458 = state_34269__$1;
(statearr_34311_36458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (22))){
var inst_34254 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
if(cljs.core.truth_(inst_34254)){
var statearr_34317_36459 = state_34269__$1;
(statearr_34317_36459[(1)] = (23));

} else {
var statearr_34318_36460 = state_34269__$1;
(statearr_34318_36460[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (6))){
var inst_34178 = (state_34269[(8)]);
var inst_34239 = (state_34269[(7)]);
var inst_34246 = (state_34269[(11)]);
var inst_34239__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34178) : topic_fn.call(null,inst_34178));
var inst_34243 = cljs.core.deref(mults);
var inst_34246__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34243,inst_34239__$1);
var state_34269__$1 = (function (){var statearr_34323 = state_34269;
(statearr_34323[(7)] = inst_34239__$1);

(statearr_34323[(11)] = inst_34246__$1);

return statearr_34323;
})();
if(cljs.core.truth_(inst_34246__$1)){
var statearr_34324_36461 = state_34269__$1;
(statearr_34324_36461[(1)] = (19));

} else {
var statearr_34325_36462 = state_34269__$1;
(statearr_34325_36462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (25))){
var inst_34259 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34326_36469 = state_34269__$1;
(statearr_34326_36469[(2)] = inst_34259);

(statearr_34326_36469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (17))){
var inst_34204 = (state_34269[(10)]);
var inst_34219 = cljs.core.first(inst_34204);
var inst_34220 = cljs.core.async.muxch_STAR_(inst_34219);
var inst_34221 = cljs.core.async.close_BANG_(inst_34220);
var inst_34226 = cljs.core.next(inst_34204);
var inst_34189 = inst_34226;
var inst_34190 = null;
var inst_34191 = (0);
var inst_34192 = (0);
var state_34269__$1 = (function (){var statearr_34328 = state_34269;
(statearr_34328[(12)] = inst_34221);

(statearr_34328[(13)] = inst_34190);

(statearr_34328[(14)] = inst_34192);

(statearr_34328[(15)] = inst_34189);

(statearr_34328[(16)] = inst_34191);

return statearr_34328;
})();
var statearr_34329_36470 = state_34269__$1;
(statearr_34329_36470[(2)] = null);

(statearr_34329_36470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (3))){
var inst_34267 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34269__$1,inst_34267);
} else {
if((state_val_34270 === (12))){
var inst_34234 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34334_36471 = state_34269__$1;
(statearr_34334_36471[(2)] = inst_34234);

(statearr_34334_36471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (2))){
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34269__$1,(4),ch);
} else {
if((state_val_34270 === (23))){
var state_34269__$1 = state_34269;
var statearr_34342_36474 = state_34269__$1;
(statearr_34342_36474[(2)] = null);

(statearr_34342_36474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (19))){
var inst_34178 = (state_34269[(8)]);
var inst_34246 = (state_34269[(11)]);
var inst_34252 = cljs.core.async.muxch_STAR_(inst_34246);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34269__$1,(22),inst_34252,inst_34178);
} else {
if((state_val_34270 === (11))){
var inst_34204 = (state_34269[(10)]);
var inst_34189 = (state_34269[(15)]);
var inst_34204__$1 = cljs.core.seq(inst_34189);
var state_34269__$1 = (function (){var statearr_34344 = state_34269;
(statearr_34344[(10)] = inst_34204__$1);

return statearr_34344;
})();
if(inst_34204__$1){
var statearr_34345_36475 = state_34269__$1;
(statearr_34345_36475[(1)] = (13));

} else {
var statearr_34346_36476 = state_34269__$1;
(statearr_34346_36476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (9))){
var inst_34236 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34350_36477 = state_34269__$1;
(statearr_34350_36477[(2)] = inst_34236);

(statearr_34350_36477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (5))){
var inst_34186 = cljs.core.deref(mults);
var inst_34187 = cljs.core.vals(inst_34186);
var inst_34188 = cljs.core.seq(inst_34187);
var inst_34189 = inst_34188;
var inst_34190 = null;
var inst_34191 = (0);
var inst_34192 = (0);
var state_34269__$1 = (function (){var statearr_34354 = state_34269;
(statearr_34354[(13)] = inst_34190);

(statearr_34354[(14)] = inst_34192);

(statearr_34354[(15)] = inst_34189);

(statearr_34354[(16)] = inst_34191);

return statearr_34354;
})();
var statearr_34359_36487 = state_34269__$1;
(statearr_34359_36487[(2)] = null);

(statearr_34359_36487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (14))){
var state_34269__$1 = state_34269;
var statearr_34364_36488 = state_34269__$1;
(statearr_34364_36488[(2)] = null);

(statearr_34364_36488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (16))){
var inst_34204 = (state_34269[(10)]);
var inst_34214 = cljs.core.chunk_first(inst_34204);
var inst_34215 = cljs.core.chunk_rest(inst_34204);
var inst_34216 = cljs.core.count(inst_34214);
var inst_34189 = inst_34215;
var inst_34190 = inst_34214;
var inst_34191 = inst_34216;
var inst_34192 = (0);
var state_34269__$1 = (function (){var statearr_34369 = state_34269;
(statearr_34369[(13)] = inst_34190);

(statearr_34369[(14)] = inst_34192);

(statearr_34369[(15)] = inst_34189);

(statearr_34369[(16)] = inst_34191);

return statearr_34369;
})();
var statearr_34378_36489 = state_34269__$1;
(statearr_34378_36489[(2)] = null);

(statearr_34378_36489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (10))){
var inst_34190 = (state_34269[(13)]);
var inst_34192 = (state_34269[(14)]);
var inst_34189 = (state_34269[(15)]);
var inst_34191 = (state_34269[(16)]);
var inst_34198 = cljs.core._nth(inst_34190,inst_34192);
var inst_34199 = cljs.core.async.muxch_STAR_(inst_34198);
var inst_34200 = cljs.core.async.close_BANG_(inst_34199);
var inst_34201 = (inst_34192 + (1));
var tmp34361 = inst_34190;
var tmp34362 = inst_34189;
var tmp34363 = inst_34191;
var inst_34189__$1 = tmp34362;
var inst_34190__$1 = tmp34361;
var inst_34191__$1 = tmp34363;
var inst_34192__$1 = inst_34201;
var state_34269__$1 = (function (){var statearr_34380 = state_34269;
(statearr_34380[(17)] = inst_34200);

(statearr_34380[(13)] = inst_34190__$1);

(statearr_34380[(14)] = inst_34192__$1);

(statearr_34380[(15)] = inst_34189__$1);

(statearr_34380[(16)] = inst_34191__$1);

return statearr_34380;
})();
var statearr_34381_36490 = state_34269__$1;
(statearr_34381_36490[(2)] = null);

(statearr_34381_36490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (18))){
var inst_34229 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34383_36492 = state_34269__$1;
(statearr_34383_36492[(2)] = inst_34229);

(statearr_34383_36492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (8))){
var inst_34192 = (state_34269[(14)]);
var inst_34191 = (state_34269[(16)]);
var inst_34195 = (inst_34192 < inst_34191);
var inst_34196 = inst_34195;
var state_34269__$1 = state_34269;
if(cljs.core.truth_(inst_34196)){
var statearr_34384_36493 = state_34269__$1;
(statearr_34384_36493[(1)] = (10));

} else {
var statearr_34385_36494 = state_34269__$1;
(statearr_34385_36494[(1)] = (11));

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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_34390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34390[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_34390[(1)] = (1));

return statearr_34390;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_34269){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_34269);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e34396){var ex__31508__auto__ = e34396;
var statearr_34397_36499 = state_34269;
(statearr_34397_36499[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_34269[(4)]))){
var statearr_34399_36502 = state_34269;
(statearr_34399_36502[(1)] = cljs.core.first((state_34269[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36503 = state_34269;
state_34269 = G__36503;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_34269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_34269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_34407 = f__31858__auto__();
(statearr_34407[(6)] = c__31857__auto___36440);

return statearr_34407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
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
var G__34413 = arguments.length;
switch (G__34413) {
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
var G__34427 = arguments.length;
switch (G__34427) {
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
var G__34442 = arguments.length;
switch (G__34442) {
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
var c__31857__auto___36526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_34506){
var state_val_34508 = (state_34506[(1)]);
if((state_val_34508 === (7))){
var state_34506__$1 = state_34506;
var statearr_34509_36527 = state_34506__$1;
(statearr_34509_36527[(2)] = null);

(statearr_34509_36527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (1))){
var state_34506__$1 = state_34506;
var statearr_34514_36528 = state_34506__$1;
(statearr_34514_36528[(2)] = null);

(statearr_34514_36528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (4))){
var inst_34459 = (state_34506[(7)]);
var inst_34458 = (state_34506[(8)]);
var inst_34461 = (inst_34459 < inst_34458);
var state_34506__$1 = state_34506;
if(cljs.core.truth_(inst_34461)){
var statearr_34516_36529 = state_34506__$1;
(statearr_34516_36529[(1)] = (6));

} else {
var statearr_34517_36530 = state_34506__$1;
(statearr_34517_36530[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (15))){
var inst_34489 = (state_34506[(9)]);
var inst_34494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34489);
var state_34506__$1 = state_34506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34506__$1,(17),out,inst_34494);
} else {
if((state_val_34508 === (13))){
var inst_34489 = (state_34506[(9)]);
var inst_34489__$1 = (state_34506[(2)]);
var inst_34490 = cljs.core.some(cljs.core.nil_QMARK_,inst_34489__$1);
var state_34506__$1 = (function (){var statearr_34518 = state_34506;
(statearr_34518[(9)] = inst_34489__$1);

return statearr_34518;
})();
if(cljs.core.truth_(inst_34490)){
var statearr_34519_36531 = state_34506__$1;
(statearr_34519_36531[(1)] = (14));

} else {
var statearr_34524_36536 = state_34506__$1;
(statearr_34524_36536[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var state_34506__$1 = state_34506;
var statearr_34529_36537 = state_34506__$1;
(statearr_34529_36537[(2)] = null);

(statearr_34529_36537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (17))){
var inst_34496 = (state_34506[(2)]);
var state_34506__$1 = (function (){var statearr_34546 = state_34506;
(statearr_34546[(10)] = inst_34496);

return statearr_34546;
})();
var statearr_34547_36540 = state_34506__$1;
(statearr_34547_36540[(2)] = null);

(statearr_34547_36540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (3))){
var inst_34501 = (state_34506[(2)]);
var state_34506__$1 = state_34506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34506__$1,inst_34501);
} else {
if((state_val_34508 === (12))){
var _ = (function (){var statearr_34549 = state_34506;
(statearr_34549[(4)] = cljs.core.rest((state_34506[(4)])));

return statearr_34549;
})();
var state_34506__$1 = state_34506;
var ex34545 = (state_34506__$1[(2)]);
var statearr_34554_36545 = state_34506__$1;
(statearr_34554_36545[(5)] = ex34545);


if((ex34545 instanceof Object)){
var statearr_34555_36546 = state_34506__$1;
(statearr_34555_36546[(1)] = (11));

(statearr_34555_36546[(5)] = null);

} else {
throw ex34545;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (2))){
var inst_34451 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34458 = cnt;
var inst_34459 = (0);
var state_34506__$1 = (function (){var statearr_34568 = state_34506;
(statearr_34568[(11)] = inst_34451);

(statearr_34568[(7)] = inst_34459);

(statearr_34568[(8)] = inst_34458);

return statearr_34568;
})();
var statearr_34570_36547 = state_34506__$1;
(statearr_34570_36547[(2)] = null);

(statearr_34570_36547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (11))){
var inst_34467 = (state_34506[(2)]);
var inst_34469 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34506__$1 = (function (){var statearr_34572 = state_34506;
(statearr_34572[(12)] = inst_34467);

return statearr_34572;
})();
var statearr_34576_36550 = state_34506__$1;
(statearr_34576_36550[(2)] = inst_34469);

(statearr_34576_36550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (9))){
var inst_34459 = (state_34506[(7)]);
var _ = (function (){var statearr_34578 = state_34506;
(statearr_34578[(4)] = cljs.core.cons((12),(state_34506[(4)])));

return statearr_34578;
})();
var inst_34475 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34459) : chs__$1.call(null,inst_34459));
var inst_34476 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34459) : done.call(null,inst_34459));
var inst_34477 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34475,inst_34476);
var ___$1 = (function (){var statearr_34586 = state_34506;
(statearr_34586[(4)] = cljs.core.rest((state_34506[(4)])));

return statearr_34586;
})();
var state_34506__$1 = state_34506;
var statearr_34591_36552 = state_34506__$1;
(statearr_34591_36552[(2)] = inst_34477);

(statearr_34591_36552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (5))){
var inst_34487 = (state_34506[(2)]);
var state_34506__$1 = (function (){var statearr_34596 = state_34506;
(statearr_34596[(13)] = inst_34487);

return statearr_34596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34506__$1,(13),dchan);
} else {
if((state_val_34508 === (14))){
var inst_34492 = cljs.core.async.close_BANG_(out);
var state_34506__$1 = state_34506;
var statearr_34597_36555 = state_34506__$1;
(statearr_34597_36555[(2)] = inst_34492);

(statearr_34597_36555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (16))){
var inst_34499 = (state_34506[(2)]);
var state_34506__$1 = state_34506;
var statearr_34600_36558 = state_34506__$1;
(statearr_34600_36558[(2)] = inst_34499);

(statearr_34600_36558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (10))){
var inst_34459 = (state_34506[(7)]);
var inst_34480 = (state_34506[(2)]);
var inst_34481 = (inst_34459 + (1));
var inst_34459__$1 = inst_34481;
var state_34506__$1 = (function (){var statearr_34602 = state_34506;
(statearr_34602[(7)] = inst_34459__$1);

(statearr_34602[(14)] = inst_34480);

return statearr_34602;
})();
var statearr_34605_36559 = state_34506__$1;
(statearr_34605_36559[(2)] = null);

(statearr_34605_36559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (8))){
var inst_34485 = (state_34506[(2)]);
var state_34506__$1 = state_34506;
var statearr_34608_36560 = state_34506__$1;
(statearr_34608_36560[(2)] = inst_34485);

(statearr_34608_36560[(1)] = (5));


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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_34610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34610[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_34610[(1)] = (1));

return statearr_34610;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_34506){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_34506);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e34611){var ex__31508__auto__ = e34611;
var statearr_34613_36567 = state_34506;
(statearr_34613_36567[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_34506[(4)]))){
var statearr_34615_36572 = state_34506;
(statearr_34615_36572[(1)] = cljs.core.first((state_34506[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36573 = state_34506;
state_34506 = G__36573;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_34506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_34506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_34617 = f__31858__auto__();
(statearr_34617[(6)] = c__31857__auto___36526);

return statearr_34617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
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
var G__34624 = arguments.length;
switch (G__34624) {
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
var c__31857__auto___36578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_34668){
var state_val_34669 = (state_34668[(1)]);
if((state_val_34669 === (7))){
var inst_34644 = (state_34668[(7)]);
var inst_34645 = (state_34668[(8)]);
var inst_34644__$1 = (state_34668[(2)]);
var inst_34645__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34644__$1,(0),null);
var inst_34646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34644__$1,(1),null);
var inst_34648 = (inst_34645__$1 == null);
var state_34668__$1 = (function (){var statearr_34672 = state_34668;
(statearr_34672[(9)] = inst_34646);

(statearr_34672[(7)] = inst_34644__$1);

(statearr_34672[(8)] = inst_34645__$1);

return statearr_34672;
})();
if(cljs.core.truth_(inst_34648)){
var statearr_34673_36581 = state_34668__$1;
(statearr_34673_36581[(1)] = (8));

} else {
var statearr_34674_36582 = state_34668__$1;
(statearr_34674_36582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (1))){
var inst_34632 = cljs.core.vec(chs);
var inst_34633 = inst_34632;
var state_34668__$1 = (function (){var statearr_34677 = state_34668;
(statearr_34677[(10)] = inst_34633);

return statearr_34677;
})();
var statearr_34678_36583 = state_34668__$1;
(statearr_34678_36583[(2)] = null);

(statearr_34678_36583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (4))){
var inst_34633 = (state_34668[(10)]);
var state_34668__$1 = state_34668;
return cljs.core.async.ioc_alts_BANG_(state_34668__$1,(7),inst_34633);
} else {
if((state_val_34669 === (6))){
var inst_34664 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34680_36584 = state_34668__$1;
(statearr_34680_36584[(2)] = inst_34664);

(statearr_34680_36584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (3))){
var inst_34666 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34668__$1,inst_34666);
} else {
if((state_val_34669 === (2))){
var inst_34633 = (state_34668[(10)]);
var inst_34636 = cljs.core.count(inst_34633);
var inst_34637 = (inst_34636 > (0));
var state_34668__$1 = state_34668;
if(cljs.core.truth_(inst_34637)){
var statearr_34687_36585 = state_34668__$1;
(statearr_34687_36585[(1)] = (4));

} else {
var statearr_34688_36586 = state_34668__$1;
(statearr_34688_36586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (11))){
var inst_34633 = (state_34668[(10)]);
var inst_34656 = (state_34668[(2)]);
var tmp34682 = inst_34633;
var inst_34633__$1 = tmp34682;
var state_34668__$1 = (function (){var statearr_34690 = state_34668;
(statearr_34690[(10)] = inst_34633__$1);

(statearr_34690[(11)] = inst_34656);

return statearr_34690;
})();
var statearr_34692_36587 = state_34668__$1;
(statearr_34692_36587[(2)] = null);

(statearr_34692_36587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (9))){
var inst_34645 = (state_34668[(8)]);
var state_34668__$1 = state_34668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34668__$1,(11),out,inst_34645);
} else {
if((state_val_34669 === (5))){
var inst_34662 = cljs.core.async.close_BANG_(out);
var state_34668__$1 = state_34668;
var statearr_34702_36588 = state_34668__$1;
(statearr_34702_36588[(2)] = inst_34662);

(statearr_34702_36588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (10))){
var inst_34659 = (state_34668[(2)]);
var state_34668__$1 = state_34668;
var statearr_34704_36589 = state_34668__$1;
(statearr_34704_36589[(2)] = inst_34659);

(statearr_34704_36589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34669 === (8))){
var inst_34646 = (state_34668[(9)]);
var inst_34633 = (state_34668[(10)]);
var inst_34644 = (state_34668[(7)]);
var inst_34645 = (state_34668[(8)]);
var inst_34651 = (function (){var cs = inst_34633;
var vec__34640 = inst_34644;
var v = inst_34645;
var c = inst_34646;
return (function (p1__34619_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34619_SHARP_);
});
})();
var inst_34652 = cljs.core.filterv(inst_34651,inst_34633);
var inst_34633__$1 = inst_34652;
var state_34668__$1 = (function (){var statearr_34709 = state_34668;
(statearr_34709[(10)] = inst_34633__$1);

return statearr_34709;
})();
var statearr_34710_36590 = state_34668__$1;
(statearr_34710_36590[(2)] = null);

(statearr_34710_36590[(1)] = (2));


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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_34717 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34717[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_34717[(1)] = (1));

return statearr_34717;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_34668){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_34668);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e34718){var ex__31508__auto__ = e34718;
var statearr_34721_36596 = state_34668;
(statearr_34721_36596[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_34668[(4)]))){
var statearr_34723_36598 = state_34668;
(statearr_34723_36598[(1)] = cljs.core.first((state_34668[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36601 = state_34668;
state_34668 = G__36601;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_34668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_34668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_34727 = f__31858__auto__();
(statearr_34727[(6)] = c__31857__auto___36578);

return statearr_34727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
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
var G__34741 = arguments.length;
switch (G__34741) {
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
var c__31857__auto___36621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_34788){
var state_val_34789 = (state_34788[(1)]);
if((state_val_34789 === (7))){
var inst_34769 = (state_34788[(7)]);
var inst_34769__$1 = (state_34788[(2)]);
var inst_34770 = (inst_34769__$1 == null);
var inst_34771 = cljs.core.not(inst_34770);
var state_34788__$1 = (function (){var statearr_34792 = state_34788;
(statearr_34792[(7)] = inst_34769__$1);

return statearr_34792;
})();
if(inst_34771){
var statearr_34793_36632 = state_34788__$1;
(statearr_34793_36632[(1)] = (8));

} else {
var statearr_34794_36633 = state_34788__$1;
(statearr_34794_36633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (1))){
var inst_34763 = (0);
var state_34788__$1 = (function (){var statearr_34795 = state_34788;
(statearr_34795[(8)] = inst_34763);

return statearr_34795;
})();
var statearr_34797_36635 = state_34788__$1;
(statearr_34797_36635[(2)] = null);

(statearr_34797_36635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (4))){
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34788__$1,(7),ch);
} else {
if((state_val_34789 === (6))){
var inst_34782 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34800_36636 = state_34788__$1;
(statearr_34800_36636[(2)] = inst_34782);

(statearr_34800_36636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (3))){
var inst_34784 = (state_34788[(2)]);
var inst_34785 = cljs.core.async.close_BANG_(out);
var state_34788__$1 = (function (){var statearr_34809 = state_34788;
(statearr_34809[(9)] = inst_34784);

return statearr_34809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34788__$1,inst_34785);
} else {
if((state_val_34789 === (2))){
var inst_34763 = (state_34788[(8)]);
var inst_34765 = (inst_34763 < n);
var state_34788__$1 = state_34788;
if(cljs.core.truth_(inst_34765)){
var statearr_34815_36640 = state_34788__$1;
(statearr_34815_36640[(1)] = (4));

} else {
var statearr_34822_36641 = state_34788__$1;
(statearr_34822_36641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (11))){
var inst_34763 = (state_34788[(8)]);
var inst_34774 = (state_34788[(2)]);
var inst_34775 = (inst_34763 + (1));
var inst_34763__$1 = inst_34775;
var state_34788__$1 = (function (){var statearr_34828 = state_34788;
(statearr_34828[(10)] = inst_34774);

(statearr_34828[(8)] = inst_34763__$1);

return statearr_34828;
})();
var statearr_34830_36642 = state_34788__$1;
(statearr_34830_36642[(2)] = null);

(statearr_34830_36642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (9))){
var state_34788__$1 = state_34788;
var statearr_34833_36644 = state_34788__$1;
(statearr_34833_36644[(2)] = null);

(statearr_34833_36644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (5))){
var state_34788__$1 = state_34788;
var statearr_34839_36647 = state_34788__$1;
(statearr_34839_36647[(2)] = null);

(statearr_34839_36647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (10))){
var inst_34779 = (state_34788[(2)]);
var state_34788__$1 = state_34788;
var statearr_34842_36657 = state_34788__$1;
(statearr_34842_36657[(2)] = inst_34779);

(statearr_34842_36657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34789 === (8))){
var inst_34769 = (state_34788[(7)]);
var state_34788__$1 = state_34788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34788__$1,(11),out,inst_34769);
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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_34850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34850[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_34850[(1)] = (1));

return statearr_34850;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_34788){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_34788);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e34851){var ex__31508__auto__ = e34851;
var statearr_34853_36661 = state_34788;
(statearr_34853_36661[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_34788[(4)]))){
var statearr_34854_36662 = state_34788;
(statearr_34854_36662[(1)] = cljs.core.first((state_34788[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36663 = state_34788;
state_34788 = G__36663;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_34788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_34788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_34856 = f__31858__auto__();
(statearr_34856[(6)] = c__31857__auto___36621);

return statearr_34856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34873 = (function (f,ch,meta34874){
this.f = f;
this.ch = ch;
this.meta34874 = meta34874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34875,meta34874__$1){
var self__ = this;
var _34875__$1 = this;
return (new cljs.core.async.t_cljs$core$async34873(self__.f,self__.ch,meta34874__$1));
}));

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34875){
var self__ = this;
var _34875__$1 = this;
return self__.meta34874;
}));

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34886 = (function (f,ch,meta34874,_,fn1,meta34887){
this.f = f;
this.ch = ch;
this.meta34874 = meta34874;
this._ = _;
this.fn1 = fn1;
this.meta34887 = meta34887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34888,meta34887__$1){
var self__ = this;
var _34888__$1 = this;
return (new cljs.core.async.t_cljs$core$async34886(self__.f,self__.ch,self__.meta34874,self__._,self__.fn1,meta34887__$1));
}));

(cljs.core.async.t_cljs$core$async34886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34888){
var self__ = this;
var _34888__$1 = this;
return self__.meta34887;
}));

(cljs.core.async.t_cljs$core$async34886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34862_SHARP_){
var G__34915 = (((p1__34862_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34862_SHARP_) : self__.f.call(null,p1__34862_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34915) : f1.call(null,G__34915));
});
}));

(cljs.core.async.t_cljs$core$async34886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34874","meta34874",-1386655088,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34873","cljs.core.async/t_cljs$core$async34873",-705636526,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34887","meta34887",-176845657,null)], null);
}));

(cljs.core.async.t_cljs$core$async34886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34886");

(cljs.core.async.t_cljs$core$async34886.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34886.
 */
cljs.core.async.__GT_t_cljs$core$async34886 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34886(f__$1,ch__$1,meta34874__$1,___$2,fn1__$1,meta34887){
return (new cljs.core.async.t_cljs$core$async34886(f__$1,ch__$1,meta34874__$1,___$2,fn1__$1,meta34887));
});

}

return (new cljs.core.async.t_cljs$core$async34886(self__.f,self__.ch,self__.meta34874,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34946 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34946) : self__.f.call(null,G__34946));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34874","meta34874",-1386655088,null)], null);
}));

(cljs.core.async.t_cljs$core$async34873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34873");

(cljs.core.async.t_cljs$core$async34873.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34873.
 */
cljs.core.async.__GT_t_cljs$core$async34873 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34873(f__$1,ch__$1,meta34874){
return (new cljs.core.async.t_cljs$core$async34873(f__$1,ch__$1,meta34874));
});

}

return (new cljs.core.async.t_cljs$core$async34873(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34969 = (function (f,ch,meta34970){
this.f = f;
this.ch = ch;
this.meta34970 = meta34970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34971,meta34970__$1){
var self__ = this;
var _34971__$1 = this;
return (new cljs.core.async.t_cljs$core$async34969(self__.f,self__.ch,meta34970__$1));
}));

(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34971){
var self__ = this;
var _34971__$1 = this;
return self__.meta34970;
}));

(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34970","meta34970",1284331901,null)], null);
}));

(cljs.core.async.t_cljs$core$async34969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34969");

(cljs.core.async.t_cljs$core$async34969.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34969.
 */
cljs.core.async.__GT_t_cljs$core$async34969 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34969(f__$1,ch__$1,meta34970){
return (new cljs.core.async.t_cljs$core$async34969(f__$1,ch__$1,meta34970));
});

}

return (new cljs.core.async.t_cljs$core$async34969(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35014 = (function (p,ch,meta35015){
this.p = p;
this.ch = ch;
this.meta35015 = meta35015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35016,meta35015__$1){
var self__ = this;
var _35016__$1 = this;
return (new cljs.core.async.t_cljs$core$async35014(self__.p,self__.ch,meta35015__$1));
}));

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35016){
var self__ = this;
var _35016__$1 = this;
return self__.meta35015;
}));

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35015","meta35015",1186865732,null)], null);
}));

(cljs.core.async.t_cljs$core$async35014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35014");

(cljs.core.async.t_cljs$core$async35014.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35014.
 */
cljs.core.async.__GT_t_cljs$core$async35014 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35014(p__$1,ch__$1,meta35015){
return (new cljs.core.async.t_cljs$core$async35014(p__$1,ch__$1,meta35015));
});

}

return (new cljs.core.async.t_cljs$core$async35014(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35046 = arguments.length;
switch (G__35046) {
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
var c__31857__auto___36723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_35086){
var state_val_35087 = (state_35086[(1)]);
if((state_val_35087 === (7))){
var inst_35081 = (state_35086[(2)]);
var state_35086__$1 = state_35086;
var statearr_35098_36728 = state_35086__$1;
(statearr_35098_36728[(2)] = inst_35081);

(statearr_35098_36728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (1))){
var state_35086__$1 = state_35086;
var statearr_35099_36730 = state_35086__$1;
(statearr_35099_36730[(2)] = null);

(statearr_35099_36730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (4))){
var inst_35057 = (state_35086[(7)]);
var inst_35057__$1 = (state_35086[(2)]);
var inst_35062 = (inst_35057__$1 == null);
var state_35086__$1 = (function (){var statearr_35101 = state_35086;
(statearr_35101[(7)] = inst_35057__$1);

return statearr_35101;
})();
if(cljs.core.truth_(inst_35062)){
var statearr_35103_36734 = state_35086__$1;
(statearr_35103_36734[(1)] = (5));

} else {
var statearr_35104_36737 = state_35086__$1;
(statearr_35104_36737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (6))){
var inst_35057 = (state_35086[(7)]);
var inst_35067 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35057) : p.call(null,inst_35057));
var state_35086__$1 = state_35086;
if(cljs.core.truth_(inst_35067)){
var statearr_35105_36741 = state_35086__$1;
(statearr_35105_36741[(1)] = (8));

} else {
var statearr_35107_36742 = state_35086__$1;
(statearr_35107_36742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (3))){
var inst_35083 = (state_35086[(2)]);
var state_35086__$1 = state_35086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35086__$1,inst_35083);
} else {
if((state_val_35087 === (2))){
var state_35086__$1 = state_35086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35086__$1,(4),ch);
} else {
if((state_val_35087 === (11))){
var inst_35071 = (state_35086[(2)]);
var state_35086__$1 = state_35086;
var statearr_35109_36749 = state_35086__$1;
(statearr_35109_36749[(2)] = inst_35071);

(statearr_35109_36749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (9))){
var state_35086__$1 = state_35086;
var statearr_35110_36752 = state_35086__$1;
(statearr_35110_36752[(2)] = null);

(statearr_35110_36752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (5))){
var inst_35064 = cljs.core.async.close_BANG_(out);
var state_35086__$1 = state_35086;
var statearr_35114_36761 = state_35086__$1;
(statearr_35114_36761[(2)] = inst_35064);

(statearr_35114_36761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (10))){
var inst_35078 = (state_35086[(2)]);
var state_35086__$1 = (function (){var statearr_35117 = state_35086;
(statearr_35117[(8)] = inst_35078);

return statearr_35117;
})();
var statearr_35118_36765 = state_35086__$1;
(statearr_35118_36765[(2)] = null);

(statearr_35118_36765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35087 === (8))){
var inst_35057 = (state_35086[(7)]);
var state_35086__$1 = state_35086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35086__$1,(11),out,inst_35057);
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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_35121 = [null,null,null,null,null,null,null,null,null];
(statearr_35121[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_35121[(1)] = (1));

return statearr_35121;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_35086){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_35086);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e35123){var ex__31508__auto__ = e35123;
var statearr_35124_36773 = state_35086;
(statearr_35124_36773[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_35086[(4)]))){
var statearr_35128_36775 = state_35086;
(statearr_35128_36775[(1)] = cljs.core.first((state_35086[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36778 = state_35086;
state_35086 = G__36778;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_35086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_35086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_35139 = f__31858__auto__();
(statearr_35139[(6)] = c__31857__auto___36723);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35148 = arguments.length;
switch (G__35148) {
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
var c__31857__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_35218){
var state_val_35219 = (state_35218[(1)]);
if((state_val_35219 === (7))){
var inst_35214 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
var statearr_35222_36796 = state_35218__$1;
(statearr_35222_36796[(2)] = inst_35214);

(statearr_35222_36796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (20))){
var inst_35183 = (state_35218[(7)]);
var inst_35195 = (state_35218[(2)]);
var inst_35196 = cljs.core.next(inst_35183);
var inst_35169 = inst_35196;
var inst_35170 = null;
var inst_35171 = (0);
var inst_35172 = (0);
var state_35218__$1 = (function (){var statearr_35224 = state_35218;
(statearr_35224[(8)] = inst_35172);

(statearr_35224[(9)] = inst_35195);

(statearr_35224[(10)] = inst_35170);

(statearr_35224[(11)] = inst_35171);

(statearr_35224[(12)] = inst_35169);

return statearr_35224;
})();
var statearr_35225_36800 = state_35218__$1;
(statearr_35225_36800[(2)] = null);

(statearr_35225_36800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (1))){
var state_35218__$1 = state_35218;
var statearr_35228_36805 = state_35218__$1;
(statearr_35228_36805[(2)] = null);

(statearr_35228_36805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (4))){
var inst_35156 = (state_35218[(13)]);
var inst_35156__$1 = (state_35218[(2)]);
var inst_35157 = (inst_35156__$1 == null);
var state_35218__$1 = (function (){var statearr_35230 = state_35218;
(statearr_35230[(13)] = inst_35156__$1);

return statearr_35230;
})();
if(cljs.core.truth_(inst_35157)){
var statearr_35231_36807 = state_35218__$1;
(statearr_35231_36807[(1)] = (5));

} else {
var statearr_35232_36809 = state_35218__$1;
(statearr_35232_36809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (15))){
var state_35218__$1 = state_35218;
var statearr_35236_36813 = state_35218__$1;
(statearr_35236_36813[(2)] = null);

(statearr_35236_36813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (21))){
var state_35218__$1 = state_35218;
var statearr_35240_36819 = state_35218__$1;
(statearr_35240_36819[(2)] = null);

(statearr_35240_36819[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (13))){
var inst_35172 = (state_35218[(8)]);
var inst_35170 = (state_35218[(10)]);
var inst_35171 = (state_35218[(11)]);
var inst_35169 = (state_35218[(12)]);
var inst_35179 = (state_35218[(2)]);
var inst_35180 = (inst_35172 + (1));
var tmp35233 = inst_35170;
var tmp35234 = inst_35171;
var tmp35235 = inst_35169;
var inst_35169__$1 = tmp35235;
var inst_35170__$1 = tmp35233;
var inst_35171__$1 = tmp35234;
var inst_35172__$1 = inst_35180;
var state_35218__$1 = (function (){var statearr_35243 = state_35218;
(statearr_35243[(8)] = inst_35172__$1);

(statearr_35243[(14)] = inst_35179);

(statearr_35243[(10)] = inst_35170__$1);

(statearr_35243[(11)] = inst_35171__$1);

(statearr_35243[(12)] = inst_35169__$1);

return statearr_35243;
})();
var statearr_35244_36829 = state_35218__$1;
(statearr_35244_36829[(2)] = null);

(statearr_35244_36829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (22))){
var state_35218__$1 = state_35218;
var statearr_35246_36831 = state_35218__$1;
(statearr_35246_36831[(2)] = null);

(statearr_35246_36831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (6))){
var inst_35156 = (state_35218[(13)]);
var inst_35167 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35156) : f.call(null,inst_35156));
var inst_35168 = cljs.core.seq(inst_35167);
var inst_35169 = inst_35168;
var inst_35170 = null;
var inst_35171 = (0);
var inst_35172 = (0);
var state_35218__$1 = (function (){var statearr_35250 = state_35218;
(statearr_35250[(8)] = inst_35172);

(statearr_35250[(10)] = inst_35170);

(statearr_35250[(11)] = inst_35171);

(statearr_35250[(12)] = inst_35169);

return statearr_35250;
})();
var statearr_35254_36836 = state_35218__$1;
(statearr_35254_36836[(2)] = null);

(statearr_35254_36836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (17))){
var inst_35183 = (state_35218[(7)]);
var inst_35187 = cljs.core.chunk_first(inst_35183);
var inst_35188 = cljs.core.chunk_rest(inst_35183);
var inst_35189 = cljs.core.count(inst_35187);
var inst_35169 = inst_35188;
var inst_35170 = inst_35187;
var inst_35171 = inst_35189;
var inst_35172 = (0);
var state_35218__$1 = (function (){var statearr_35256 = state_35218;
(statearr_35256[(8)] = inst_35172);

(statearr_35256[(10)] = inst_35170);

(statearr_35256[(11)] = inst_35171);

(statearr_35256[(12)] = inst_35169);

return statearr_35256;
})();
var statearr_35258_36843 = state_35218__$1;
(statearr_35258_36843[(2)] = null);

(statearr_35258_36843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (3))){
var inst_35216 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35218__$1,inst_35216);
} else {
if((state_val_35219 === (12))){
var inst_35204 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
var statearr_35265_36846 = state_35218__$1;
(statearr_35265_36846[(2)] = inst_35204);

(statearr_35265_36846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (2))){
var state_35218__$1 = state_35218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35218__$1,(4),in$);
} else {
if((state_val_35219 === (23))){
var inst_35212 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
var statearr_35268_36847 = state_35218__$1;
(statearr_35268_36847[(2)] = inst_35212);

(statearr_35268_36847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (19))){
var inst_35199 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
var statearr_35275_36850 = state_35218__$1;
(statearr_35275_36850[(2)] = inst_35199);

(statearr_35275_36850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (11))){
var inst_35183 = (state_35218[(7)]);
var inst_35169 = (state_35218[(12)]);
var inst_35183__$1 = cljs.core.seq(inst_35169);
var state_35218__$1 = (function (){var statearr_35279 = state_35218;
(statearr_35279[(7)] = inst_35183__$1);

return statearr_35279;
})();
if(inst_35183__$1){
var statearr_35280_36852 = state_35218__$1;
(statearr_35280_36852[(1)] = (14));

} else {
var statearr_35281_36853 = state_35218__$1;
(statearr_35281_36853[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (9))){
var inst_35206 = (state_35218[(2)]);
var inst_35207 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35218__$1 = (function (){var statearr_35282 = state_35218;
(statearr_35282[(15)] = inst_35206);

return statearr_35282;
})();
if(cljs.core.truth_(inst_35207)){
var statearr_35283_36856 = state_35218__$1;
(statearr_35283_36856[(1)] = (21));

} else {
var statearr_35285_36857 = state_35218__$1;
(statearr_35285_36857[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (5))){
var inst_35159 = cljs.core.async.close_BANG_(out);
var state_35218__$1 = state_35218;
var statearr_35288_36858 = state_35218__$1;
(statearr_35288_36858[(2)] = inst_35159);

(statearr_35288_36858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (14))){
var inst_35183 = (state_35218[(7)]);
var inst_35185 = cljs.core.chunked_seq_QMARK_(inst_35183);
var state_35218__$1 = state_35218;
if(inst_35185){
var statearr_35292_36859 = state_35218__$1;
(statearr_35292_36859[(1)] = (17));

} else {
var statearr_35293_36860 = state_35218__$1;
(statearr_35293_36860[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (16))){
var inst_35202 = (state_35218[(2)]);
var state_35218__$1 = state_35218;
var statearr_35294_36861 = state_35218__$1;
(statearr_35294_36861[(2)] = inst_35202);

(statearr_35294_36861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35219 === (10))){
var inst_35172 = (state_35218[(8)]);
var inst_35170 = (state_35218[(10)]);
var inst_35177 = cljs.core._nth(inst_35170,inst_35172);
var state_35218__$1 = state_35218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35218__$1,(13),out,inst_35177);
} else {
if((state_val_35219 === (18))){
var inst_35183 = (state_35218[(7)]);
var inst_35193 = cljs.core.first(inst_35183);
var state_35218__$1 = state_35218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35218__$1,(20),out,inst_35193);
} else {
if((state_val_35219 === (8))){
var inst_35172 = (state_35218[(8)]);
var inst_35171 = (state_35218[(11)]);
var inst_35174 = (inst_35172 < inst_35171);
var inst_35175 = inst_35174;
var state_35218__$1 = state_35218;
if(cljs.core.truth_(inst_35175)){
var statearr_35300_36864 = state_35218__$1;
(statearr_35300_36864[(1)] = (10));

} else {
var statearr_35301_36865 = state_35218__$1;
(statearr_35301_36865[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__31505__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31505__auto____0 = (function (){
var statearr_35304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35304[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31505__auto__);

(statearr_35304[(1)] = (1));

return statearr_35304;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31505__auto____1 = (function (state_35218){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_35218);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e35311){var ex__31508__auto__ = e35311;
var statearr_35313_36867 = state_35218;
(statearr_35313_36867[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_35218[(4)]))){
var statearr_35315_36868 = state_35218;
(statearr_35315_36868[(1)] = cljs.core.first((state_35218[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36869 = state_35218;
state_35218 = G__36869;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31505__auto__ = function(state_35218){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31505__auto____1.call(this,state_35218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31505__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31505__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_35321 = f__31858__auto__();
(statearr_35321[(6)] = c__31857__auto__);

return statearr_35321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));

return c__31857__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35326 = arguments.length;
switch (G__35326) {
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
var G__35348 = arguments.length;
switch (G__35348) {
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
var G__35384 = arguments.length;
switch (G__35384) {
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
var c__31857__auto___36889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_35421){
var state_val_35422 = (state_35421[(1)]);
if((state_val_35422 === (7))){
var inst_35416 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35425_36891 = state_35421__$1;
(statearr_35425_36891[(2)] = inst_35416);

(statearr_35425_36891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (1))){
var inst_35396 = null;
var state_35421__$1 = (function (){var statearr_35427 = state_35421;
(statearr_35427[(7)] = inst_35396);

return statearr_35427;
})();
var statearr_35429_36892 = state_35421__$1;
(statearr_35429_36892[(2)] = null);

(statearr_35429_36892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (4))){
var inst_35400 = (state_35421[(8)]);
var inst_35400__$1 = (state_35421[(2)]);
var inst_35401 = (inst_35400__$1 == null);
var inst_35402 = cljs.core.not(inst_35401);
var state_35421__$1 = (function (){var statearr_35436 = state_35421;
(statearr_35436[(8)] = inst_35400__$1);

return statearr_35436;
})();
if(inst_35402){
var statearr_35437_36893 = state_35421__$1;
(statearr_35437_36893[(1)] = (5));

} else {
var statearr_35438_36894 = state_35421__$1;
(statearr_35438_36894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (6))){
var state_35421__$1 = state_35421;
var statearr_35439_36895 = state_35421__$1;
(statearr_35439_36895[(2)] = null);

(statearr_35439_36895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (3))){
var inst_35418 = (state_35421[(2)]);
var inst_35419 = cljs.core.async.close_BANG_(out);
var state_35421__$1 = (function (){var statearr_35450 = state_35421;
(statearr_35450[(9)] = inst_35418);

return statearr_35450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35421__$1,inst_35419);
} else {
if((state_val_35422 === (2))){
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35421__$1,(4),ch);
} else {
if((state_val_35422 === (11))){
var inst_35400 = (state_35421[(8)]);
var inst_35409 = (state_35421[(2)]);
var inst_35396 = inst_35400;
var state_35421__$1 = (function (){var statearr_35463 = state_35421;
(statearr_35463[(7)] = inst_35396);

(statearr_35463[(10)] = inst_35409);

return statearr_35463;
})();
var statearr_35468_36896 = state_35421__$1;
(statearr_35468_36896[(2)] = null);

(statearr_35468_36896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (9))){
var inst_35400 = (state_35421[(8)]);
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35421__$1,(11),out,inst_35400);
} else {
if((state_val_35422 === (5))){
var inst_35396 = (state_35421[(7)]);
var inst_35400 = (state_35421[(8)]);
var inst_35404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35400,inst_35396);
var state_35421__$1 = state_35421;
if(inst_35404){
var statearr_35486_36897 = state_35421__$1;
(statearr_35486_36897[(1)] = (8));

} else {
var statearr_35487_36898 = state_35421__$1;
(statearr_35487_36898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (10))){
var inst_35412 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35489_36899 = state_35421__$1;
(statearr_35489_36899[(2)] = inst_35412);

(statearr_35489_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (8))){
var inst_35396 = (state_35421[(7)]);
var tmp35478 = inst_35396;
var inst_35396__$1 = tmp35478;
var state_35421__$1 = (function (){var statearr_35492 = state_35421;
(statearr_35492[(7)] = inst_35396__$1);

return statearr_35492;
})();
var statearr_35493_36900 = state_35421__$1;
(statearr_35493_36900[(2)] = null);

(statearr_35493_36900[(1)] = (2));


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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_35497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35497[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_35497[(1)] = (1));

return statearr_35497;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_35421){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_35421);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e35500){var ex__31508__auto__ = e35500;
var statearr_35503_36905 = state_35421;
(statearr_35503_36905[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_35421[(4)]))){
var statearr_35505_36906 = state_35421;
(statearr_35505_36906[(1)] = cljs.core.first((state_35421[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36907 = state_35421;
state_35421 = G__36907;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_35421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_35421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_35509 = f__31858__auto__();
(statearr_35509[(6)] = c__31857__auto___36889);

return statearr_35509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35516 = arguments.length;
switch (G__35516) {
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
var c__31857__auto___36909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_35570){
var state_val_35571 = (state_35570[(1)]);
if((state_val_35571 === (7))){
var inst_35566 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35572_36910 = state_35570__$1;
(statearr_35572_36910[(2)] = inst_35566);

(statearr_35572_36910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (1))){
var inst_35521 = (new Array(n));
var inst_35523 = inst_35521;
var inst_35524 = (0);
var state_35570__$1 = (function (){var statearr_35573 = state_35570;
(statearr_35573[(7)] = inst_35524);

(statearr_35573[(8)] = inst_35523);

return statearr_35573;
})();
var statearr_35574_36912 = state_35570__$1;
(statearr_35574_36912[(2)] = null);

(statearr_35574_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (4))){
var inst_35529 = (state_35570[(9)]);
var inst_35529__$1 = (state_35570[(2)]);
var inst_35533 = (inst_35529__$1 == null);
var inst_35534 = cljs.core.not(inst_35533);
var state_35570__$1 = (function (){var statearr_35575 = state_35570;
(statearr_35575[(9)] = inst_35529__$1);

return statearr_35575;
})();
if(inst_35534){
var statearr_35576_36913 = state_35570__$1;
(statearr_35576_36913[(1)] = (5));

} else {
var statearr_35577_36914 = state_35570__$1;
(statearr_35577_36914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (15))){
var inst_35560 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35581_36915 = state_35570__$1;
(statearr_35581_36915[(2)] = inst_35560);

(statearr_35581_36915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (13))){
var state_35570__$1 = state_35570;
var statearr_35582_36916 = state_35570__$1;
(statearr_35582_36916[(2)] = null);

(statearr_35582_36916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (6))){
var inst_35524 = (state_35570[(7)]);
var inst_35556 = (inst_35524 > (0));
var state_35570__$1 = state_35570;
if(cljs.core.truth_(inst_35556)){
var statearr_35583_36917 = state_35570__$1;
(statearr_35583_36917[(1)] = (12));

} else {
var statearr_35584_36918 = state_35570__$1;
(statearr_35584_36918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (3))){
var inst_35568 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35570__$1,inst_35568);
} else {
if((state_val_35571 === (12))){
var inst_35523 = (state_35570[(8)]);
var inst_35558 = cljs.core.vec(inst_35523);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35570__$1,(15),out,inst_35558);
} else {
if((state_val_35571 === (2))){
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35570__$1,(4),ch);
} else {
if((state_val_35571 === (11))){
var inst_35547 = (state_35570[(2)]);
var inst_35548 = (new Array(n));
var inst_35523 = inst_35548;
var inst_35524 = (0);
var state_35570__$1 = (function (){var statearr_35591 = state_35570;
(statearr_35591[(7)] = inst_35524);

(statearr_35591[(10)] = inst_35547);

(statearr_35591[(8)] = inst_35523);

return statearr_35591;
})();
var statearr_35592_36926 = state_35570__$1;
(statearr_35592_36926[(2)] = null);

(statearr_35592_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (9))){
var inst_35523 = (state_35570[(8)]);
var inst_35545 = cljs.core.vec(inst_35523);
var state_35570__$1 = state_35570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35570__$1,(11),out,inst_35545);
} else {
if((state_val_35571 === (5))){
var inst_35524 = (state_35570[(7)]);
var inst_35529 = (state_35570[(9)]);
var inst_35523 = (state_35570[(8)]);
var inst_35540 = (state_35570[(11)]);
var inst_35536 = (inst_35523[inst_35524] = inst_35529);
var inst_35540__$1 = (inst_35524 + (1));
var inst_35541 = (inst_35540__$1 < n);
var state_35570__$1 = (function (){var statearr_35594 = state_35570;
(statearr_35594[(12)] = inst_35536);

(statearr_35594[(11)] = inst_35540__$1);

return statearr_35594;
})();
if(cljs.core.truth_(inst_35541)){
var statearr_35595_36930 = state_35570__$1;
(statearr_35595_36930[(1)] = (8));

} else {
var statearr_35596_36931 = state_35570__$1;
(statearr_35596_36931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (14))){
var inst_35563 = (state_35570[(2)]);
var inst_35564 = cljs.core.async.close_BANG_(out);
var state_35570__$1 = (function (){var statearr_35600 = state_35570;
(statearr_35600[(13)] = inst_35563);

return statearr_35600;
})();
var statearr_35601_36936 = state_35570__$1;
(statearr_35601_36936[(2)] = inst_35564);

(statearr_35601_36936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (10))){
var inst_35551 = (state_35570[(2)]);
var state_35570__$1 = state_35570;
var statearr_35602_36937 = state_35570__$1;
(statearr_35602_36937[(2)] = inst_35551);

(statearr_35602_36937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35571 === (8))){
var inst_35523 = (state_35570[(8)]);
var inst_35540 = (state_35570[(11)]);
var tmp35599 = inst_35523;
var inst_35523__$1 = tmp35599;
var inst_35524 = inst_35540;
var state_35570__$1 = (function (){var statearr_35603 = state_35570;
(statearr_35603[(7)] = inst_35524);

(statearr_35603[(8)] = inst_35523__$1);

return statearr_35603;
})();
var statearr_35604_36942 = state_35570__$1;
(statearr_35604_36942[(2)] = null);

(statearr_35604_36942[(1)] = (2));


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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_35608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35608[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_35608[(1)] = (1));

return statearr_35608;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_35570){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_35570);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e35609){var ex__31508__auto__ = e35609;
var statearr_35610_36943 = state_35570;
(statearr_35610_36943[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_35570[(4)]))){
var statearr_35611_36944 = state_35570;
(statearr_35611_36944[(1)] = cljs.core.first((state_35570[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36945 = state_35570;
state_35570 = G__36945;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_35570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_35570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_35613 = f__31858__auto__();
(statearr_35613[(6)] = c__31857__auto___36909);

return statearr_35613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35615 = arguments.length;
switch (G__35615) {
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
var c__31857__auto___36953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31858__auto__ = (function (){var switch__31504__auto__ = (function (state_35661){
var state_val_35662 = (state_35661[(1)]);
if((state_val_35662 === (7))){
var inst_35657 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35666_36954 = state_35661__$1;
(statearr_35666_36954[(2)] = inst_35657);

(statearr_35666_36954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (1))){
var inst_35617 = [];
var inst_35618 = inst_35617;
var inst_35619 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35661__$1 = (function (){var statearr_35668 = state_35661;
(statearr_35668[(7)] = inst_35618);

(statearr_35668[(8)] = inst_35619);

return statearr_35668;
})();
var statearr_35669_36955 = state_35661__$1;
(statearr_35669_36955[(2)] = null);

(statearr_35669_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (4))){
var inst_35622 = (state_35661[(9)]);
var inst_35622__$1 = (state_35661[(2)]);
var inst_35623 = (inst_35622__$1 == null);
var inst_35624 = cljs.core.not(inst_35623);
var state_35661__$1 = (function (){var statearr_35670 = state_35661;
(statearr_35670[(9)] = inst_35622__$1);

return statearr_35670;
})();
if(inst_35624){
var statearr_35672_36956 = state_35661__$1;
(statearr_35672_36956[(1)] = (5));

} else {
var statearr_35673_36957 = state_35661__$1;
(statearr_35673_36957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (15))){
var inst_35618 = (state_35661[(7)]);
var inst_35649 = cljs.core.vec(inst_35618);
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35661__$1,(18),out,inst_35649);
} else {
if((state_val_35662 === (13))){
var inst_35644 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35675_36964 = state_35661__$1;
(statearr_35675_36964[(2)] = inst_35644);

(statearr_35675_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (6))){
var inst_35618 = (state_35661[(7)]);
var inst_35646 = inst_35618.length;
var inst_35647 = (inst_35646 > (0));
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35647)){
var statearr_35676_36965 = state_35661__$1;
(statearr_35676_36965[(1)] = (15));

} else {
var statearr_35677_36966 = state_35661__$1;
(statearr_35677_36966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (17))){
var inst_35654 = (state_35661[(2)]);
var inst_35655 = cljs.core.async.close_BANG_(out);
var state_35661__$1 = (function (){var statearr_35678 = state_35661;
(statearr_35678[(10)] = inst_35654);

return statearr_35678;
})();
var statearr_35679_36967 = state_35661__$1;
(statearr_35679_36967[(2)] = inst_35655);

(statearr_35679_36967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (3))){
var inst_35659 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35661__$1,inst_35659);
} else {
if((state_val_35662 === (12))){
var inst_35618 = (state_35661[(7)]);
var inst_35637 = cljs.core.vec(inst_35618);
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35661__$1,(14),out,inst_35637);
} else {
if((state_val_35662 === (2))){
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35661__$1,(4),ch);
} else {
if((state_val_35662 === (11))){
var inst_35618 = (state_35661[(7)]);
var inst_35626 = (state_35661[(11)]);
var inst_35622 = (state_35661[(9)]);
var inst_35634 = inst_35618.push(inst_35622);
var tmp35680 = inst_35618;
var inst_35618__$1 = tmp35680;
var inst_35619 = inst_35626;
var state_35661__$1 = (function (){var statearr_35688 = state_35661;
(statearr_35688[(12)] = inst_35634);

(statearr_35688[(7)] = inst_35618__$1);

(statearr_35688[(8)] = inst_35619);

return statearr_35688;
})();
var statearr_35689_36975 = state_35661__$1;
(statearr_35689_36975[(2)] = null);

(statearr_35689_36975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (9))){
var inst_35619 = (state_35661[(8)]);
var inst_35630 = cljs.core.keyword_identical_QMARK_(inst_35619,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35661__$1 = state_35661;
var statearr_35690_36976 = state_35661__$1;
(statearr_35690_36976[(2)] = inst_35630);

(statearr_35690_36976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (5))){
var inst_35627 = (state_35661[(13)]);
var inst_35626 = (state_35661[(11)]);
var inst_35619 = (state_35661[(8)]);
var inst_35622 = (state_35661[(9)]);
var inst_35626__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35622) : f.call(null,inst_35622));
var inst_35627__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35626__$1,inst_35619);
var state_35661__$1 = (function (){var statearr_35692 = state_35661;
(statearr_35692[(13)] = inst_35627__$1);

(statearr_35692[(11)] = inst_35626__$1);

return statearr_35692;
})();
if(inst_35627__$1){
var statearr_35694_36979 = state_35661__$1;
(statearr_35694_36979[(1)] = (8));

} else {
var statearr_35695_36982 = state_35661__$1;
(statearr_35695_36982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (14))){
var inst_35626 = (state_35661[(11)]);
var inst_35622 = (state_35661[(9)]);
var inst_35639 = (state_35661[(2)]);
var inst_35640 = [];
var inst_35641 = inst_35640.push(inst_35622);
var inst_35618 = inst_35640;
var inst_35619 = inst_35626;
var state_35661__$1 = (function (){var statearr_35697 = state_35661;
(statearr_35697[(14)] = inst_35641);

(statearr_35697[(15)] = inst_35639);

(statearr_35697[(7)] = inst_35618);

(statearr_35697[(8)] = inst_35619);

return statearr_35697;
})();
var statearr_35698_36983 = state_35661__$1;
(statearr_35698_36983[(2)] = null);

(statearr_35698_36983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (16))){
var state_35661__$1 = state_35661;
var statearr_35700_36985 = state_35661__$1;
(statearr_35700_36985[(2)] = null);

(statearr_35700_36985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (10))){
var inst_35632 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
if(cljs.core.truth_(inst_35632)){
var statearr_35702_36989 = state_35661__$1;
(statearr_35702_36989[(1)] = (11));

} else {
var statearr_35703_36990 = state_35661__$1;
(statearr_35703_36990[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (18))){
var inst_35651 = (state_35661[(2)]);
var state_35661__$1 = state_35661;
var statearr_35704_36991 = state_35661__$1;
(statearr_35704_36991[(2)] = inst_35651);

(statearr_35704_36991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35662 === (8))){
var inst_35627 = (state_35661[(13)]);
var state_35661__$1 = state_35661;
var statearr_35705_36992 = state_35661__$1;
(statearr_35705_36992[(2)] = inst_35627);

(statearr_35705_36992[(1)] = (10));


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
var cljs$core$async$state_machine__31505__auto__ = null;
var cljs$core$async$state_machine__31505__auto____0 = (function (){
var statearr_35713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35713[(0)] = cljs$core$async$state_machine__31505__auto__);

(statearr_35713[(1)] = (1));

return statearr_35713;
});
var cljs$core$async$state_machine__31505__auto____1 = (function (state_35661){
while(true){
var ret_value__31506__auto__ = (function (){try{while(true){
var result__31507__auto__ = switch__31504__auto__(state_35661);
if(cljs.core.keyword_identical_QMARK_(result__31507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31507__auto__;
}
break;
}
}catch (e35714){var ex__31508__auto__ = e35714;
var statearr_35715_36993 = state_35661;
(statearr_35715_36993[(2)] = ex__31508__auto__);


if(cljs.core.seq((state_35661[(4)]))){
var statearr_35716_36997 = state_35661;
(statearr_35716_36997[(1)] = cljs.core.first((state_35661[(4)])));

} else {
throw ex__31508__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36998 = state_35661;
state_35661 = G__36998;
continue;
} else {
return ret_value__31506__auto__;
}
break;
}
});
cljs$core$async$state_machine__31505__auto__ = function(state_35661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31505__auto____1.call(this,state_35661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31505__auto____0;
cljs$core$async$state_machine__31505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31505__auto____1;
return cljs$core$async$state_machine__31505__auto__;
})()
})();
var state__31859__auto__ = (function (){var statearr_35720 = f__31858__auto__();
(statearr_35720[(6)] = c__31857__auto___36953);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31859__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
