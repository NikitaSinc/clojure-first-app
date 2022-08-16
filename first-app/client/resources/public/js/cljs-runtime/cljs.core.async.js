goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14304 = arguments.length;
switch (G__14304) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14305 = (function (f,blockable,meta14306){
this.f = f;
this.blockable = blockable;
this.meta14306 = meta14306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14307,meta14306__$1){
var self__ = this;
var _14307__$1 = this;
return (new cljs.core.async.t_cljs$core$async14305(self__.f,self__.blockable,meta14306__$1));
}));

(cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14307){
var self__ = this;
var _14307__$1 = this;
return self__.meta14306;
}));

(cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14306","meta14306",-2049904376,null)], null);
}));

(cljs.core.async.t_cljs$core$async14305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14305");

(cljs.core.async.t_cljs$core$async14305.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14305.
 */
cljs.core.async.__GT_t_cljs$core$async14305 = (function cljs$core$async$__GT_t_cljs$core$async14305(f__$1,blockable__$1,meta14306){
return (new cljs.core.async.t_cljs$core$async14305(f__$1,blockable__$1,meta14306));
});

}

return (new cljs.core.async.t_cljs$core$async14305(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14349 = arguments.length;
switch (G__14349) {
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
var G__14394 = arguments.length;
switch (G__14394) {
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
var G__14415 = arguments.length;
switch (G__14415) {
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
var val_17983 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17983) : fn1.call(null,val_17983));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17983) : fn1.call(null,val_17983));
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
var G__14447 = arguments.length;
switch (G__14447) {
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
var n__5636__auto___17988 = n;
var x_17989 = (0);
while(true){
if((x_17989 < n__5636__auto___17988)){
(a[x_17989] = x_17989);

var G__17990 = (x_17989 + (1));
x_17989 = G__17990;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14474 = (function (flag,meta14475){
this.flag = flag;
this.meta14475 = meta14475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14476,meta14475__$1){
var self__ = this;
var _14476__$1 = this;
return (new cljs.core.async.t_cljs$core$async14474(self__.flag,meta14475__$1));
}));

(cljs.core.async.t_cljs$core$async14474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14476){
var self__ = this;
var _14476__$1 = this;
return self__.meta14475;
}));

(cljs.core.async.t_cljs$core$async14474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14475","meta14475",662347454,null)], null);
}));

(cljs.core.async.t_cljs$core$async14474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14474");

(cljs.core.async.t_cljs$core$async14474.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14474.
 */
cljs.core.async.__GT_t_cljs$core$async14474 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14474(flag__$1,meta14475){
return (new cljs.core.async.t_cljs$core$async14474(flag__$1,meta14475));
});

}

return (new cljs.core.async.t_cljs$core$async14474(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14497 = (function (flag,cb,meta14498){
this.flag = flag;
this.cb = cb;
this.meta14498 = meta14498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14499,meta14498__$1){
var self__ = this;
var _14499__$1 = this;
return (new cljs.core.async.t_cljs$core$async14497(self__.flag,self__.cb,meta14498__$1));
}));

(cljs.core.async.t_cljs$core$async14497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14499){
var self__ = this;
var _14499__$1 = this;
return self__.meta14498;
}));

(cljs.core.async.t_cljs$core$async14497.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14497.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14498","meta14498",-502880580,null)], null);
}));

(cljs.core.async.t_cljs$core$async14497.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14497");

(cljs.core.async.t_cljs$core$async14497.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14497");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14497.
 */
cljs.core.async.__GT_t_cljs$core$async14497 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14497(flag__$1,cb__$1,meta14498){
return (new cljs.core.async.t_cljs$core$async14497(flag__$1,cb__$1,meta14498));
});

}

return (new cljs.core.async.t_cljs$core$async14497(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14520_SHARP_){
var G__14537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14520_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14537) : fret.call(null,G__14537));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14524_SHARP_){
var G__14542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14524_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14542) : fret.call(null,G__14542));
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
var G__17999 = (i + (1));
i = G__17999;
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
var len__5769__auto___18008 = arguments.length;
var i__5770__auto___18009 = (0);
while(true){
if((i__5770__auto___18009 < len__5769__auto___18008)){
args__5775__auto__.push((arguments[i__5770__auto___18009]));

var G__18014 = (i__5770__auto___18009 + (1));
i__5770__auto___18009 = G__18014;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14550){
var map__14551 = p__14550;
var map__14551__$1 = cljs.core.__destructure_map(map__14551);
var opts = map__14551__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14548){
var G__14549 = cljs.core.first(seq14548);
var seq14548__$1 = cljs.core.next(seq14548);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14549,seq14548__$1);
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
var G__14589 = arguments.length;
switch (G__14589) {
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
var c__14188__auto___18024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_14704){
var state_val_14706 = (state_14704[(1)]);
if((state_val_14706 === (7))){
var inst_14690 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
var statearr_14730_18028 = state_14704__$1;
(statearr_14730_18028[(2)] = inst_14690);

(statearr_14730_18028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (1))){
var state_14704__$1 = state_14704;
var statearr_14737_18029 = state_14704__$1;
(statearr_14737_18029[(2)] = null);

(statearr_14737_18029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (4))){
var inst_14655 = (state_14704[(7)]);
var inst_14655__$1 = (state_14704[(2)]);
var inst_14672 = (inst_14655__$1 == null);
var state_14704__$1 = (function (){var statearr_14746 = state_14704;
(statearr_14746[(7)] = inst_14655__$1);

return statearr_14746;
})();
if(cljs.core.truth_(inst_14672)){
var statearr_14751_18031 = state_14704__$1;
(statearr_14751_18031[(1)] = (5));

} else {
var statearr_14752_18032 = state_14704__$1;
(statearr_14752_18032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (13))){
var state_14704__$1 = state_14704;
var statearr_14754_18035 = state_14704__$1;
(statearr_14754_18035[(2)] = null);

(statearr_14754_18035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (6))){
var inst_14655 = (state_14704[(7)]);
var state_14704__$1 = state_14704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14704__$1,(11),to,inst_14655);
} else {
if((state_val_14706 === (3))){
var inst_14692 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14704__$1,inst_14692);
} else {
if((state_val_14706 === (12))){
var state_14704__$1 = state_14704;
var statearr_14758_18037 = state_14704__$1;
(statearr_14758_18037[(2)] = null);

(statearr_14758_18037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (2))){
var state_14704__$1 = state_14704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14704__$1,(4),from);
} else {
if((state_val_14706 === (11))){
var inst_14683 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
if(cljs.core.truth_(inst_14683)){
var statearr_14759_18048 = state_14704__$1;
(statearr_14759_18048[(1)] = (12));

} else {
var statearr_14760_18051 = state_14704__$1;
(statearr_14760_18051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (9))){
var state_14704__$1 = state_14704;
var statearr_14763_18053 = state_14704__$1;
(statearr_14763_18053[(2)] = null);

(statearr_14763_18053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (5))){
var state_14704__$1 = state_14704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14766_18054 = state_14704__$1;
(statearr_14766_18054[(1)] = (8));

} else {
var statearr_14767_18055 = state_14704__$1;
(statearr_14767_18055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (14))){
var inst_14688 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
var statearr_14773_18056 = state_14704__$1;
(statearr_14773_18056[(2)] = inst_14688);

(statearr_14773_18056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (10))){
var inst_14679 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
var statearr_14774_18057 = state_14704__$1;
(statearr_14774_18057[(2)] = inst_14679);

(statearr_14774_18057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (8))){
var inst_14676 = cljs.core.async.close_BANG_(to);
var state_14704__$1 = state_14704;
var statearr_14775_18064 = state_14704__$1;
(statearr_14775_18064[(2)] = inst_14676);

(statearr_14775_18064[(1)] = (10));


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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_14777 = [null,null,null,null,null,null,null,null];
(statearr_14777[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_14777[(1)] = (1));

return statearr_14777;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_14704){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_14704);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e14778){var ex__13676__auto__ = e14778;
var statearr_14779_18070 = state_14704;
(statearr_14779_18070[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_14704[(4)]))){
var statearr_14784_18071 = state_14704;
(statearr_14784_18071[(1)] = cljs.core.first((state_14704[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18079 = state_14704;
state_14704 = G__18079;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_14704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_14704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_14791 = f__14189__auto__();
(statearr_14791[(6)] = c__14188__auto___18024);

return statearr_14791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
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
var process__$1 = (function (p__14805){
var vec__14806 = p__14805;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14806,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14806,(1),null);
var job = vec__14806;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14188__auto___18083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_14813){
var state_val_14814 = (state_14813[(1)]);
if((state_val_14814 === (1))){
var state_14813__$1 = state_14813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14813__$1,(2),res,v);
} else {
if((state_val_14814 === (2))){
var inst_14810 = (state_14813[(2)]);
var inst_14811 = cljs.core.async.close_BANG_(res);
var state_14813__$1 = (function (){var statearr_14817 = state_14813;
(statearr_14817[(7)] = inst_14810);

return statearr_14817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14813__$1,inst_14811);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0 = (function (){
var statearr_14818 = [null,null,null,null,null,null,null,null];
(statearr_14818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__);

(statearr_14818[(1)] = (1));

return statearr_14818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1 = (function (state_14813){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_14813);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e14820){var ex__13676__auto__ = e14820;
var statearr_14821_18090 = state_14813;
(statearr_14821_18090[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_14813[(4)]))){
var statearr_14822_18091 = state_14813;
(statearr_14822_18091[(1)] = cljs.core.first((state_14813[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18094 = state_14813;
state_14813 = G__18094;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = function(state_14813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1.call(this,state_14813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_14825 = f__14189__auto__();
(statearr_14825[(6)] = c__14188__auto___18083);

return statearr_14825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14830){
var vec__14831 = p__14830;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831,(1),null);
var job = vec__14831;
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
var n__5636__auto___18100 = n;
var __18101 = (0);
while(true){
if((__18101 < n__5636__auto___18100)){
var G__14834_18103 = type;
var G__14834_18104__$1 = (((G__14834_18103 instanceof cljs.core.Keyword))?G__14834_18103.fqn:null);
switch (G__14834_18104__$1) {
case "compute":
var c__14188__auto___18106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18101,c__14188__auto___18106,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async){
return (function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = ((function (__18101,c__14188__auto___18106,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async){
return (function (state_14855){
var state_val_14856 = (state_14855[(1)]);
if((state_val_14856 === (1))){
var state_14855__$1 = state_14855;
var statearr_14859_18113 = state_14855__$1;
(statearr_14859_18113[(2)] = null);

(statearr_14859_18113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (2))){
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14855__$1,(4),jobs);
} else {
if((state_val_14856 === (3))){
var inst_14851 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14855__$1,inst_14851);
} else {
if((state_val_14856 === (4))){
var inst_14842 = (state_14855[(2)]);
var inst_14844 = process__$1(inst_14842);
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14844)){
var statearr_14867_18114 = state_14855__$1;
(statearr_14867_18114[(1)] = (5));

} else {
var statearr_14868_18115 = state_14855__$1;
(statearr_14868_18115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (5))){
var state_14855__$1 = state_14855;
var statearr_14869_18116 = state_14855__$1;
(statearr_14869_18116[(2)] = null);

(statearr_14869_18116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (6))){
var state_14855__$1 = state_14855;
var statearr_14878_18117 = state_14855__$1;
(statearr_14878_18117[(2)] = null);

(statearr_14878_18117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (7))){
var inst_14849 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14881_18121 = state_14855__$1;
(statearr_14881_18121[(2)] = inst_14849);

(statearr_14881_18121[(1)] = (3));


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
});})(__18101,c__14188__auto___18106,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async))
;
return ((function (__18101,switch__13672__auto__,c__14188__auto___18106,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0 = (function (){
var statearr_14885 = [null,null,null,null,null,null,null];
(statearr_14885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__);

(statearr_14885[(1)] = (1));

return statearr_14885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1 = (function (state_14855){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_14855);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e14887){var ex__13676__auto__ = e14887;
var statearr_14888_18134 = state_14855;
(statearr_14888_18134[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_14855[(4)]))){
var statearr_14889_18136 = state_14855;
(statearr_14889_18136[(1)] = cljs.core.first((state_14855[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18139 = state_14855;
state_14855 = G__18139;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__;
})()
;})(__18101,switch__13672__auto__,c__14188__auto___18106,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async))
})();
var state__14190__auto__ = (function (){var statearr_14890 = f__14189__auto__();
(statearr_14890[(6)] = c__14188__auto___18106);

return statearr_14890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
});})(__18101,c__14188__auto___18106,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async))
);


break;
case "async":
var c__14188__auto___18145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18101,c__14188__auto___18145,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async){
return (function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = ((function (__18101,c__14188__auto___18145,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async){
return (function (state_14904){
var state_val_14905 = (state_14904[(1)]);
if((state_val_14905 === (1))){
var state_14904__$1 = state_14904;
var statearr_14911_18147 = state_14904__$1;
(statearr_14911_18147[(2)] = null);

(statearr_14911_18147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (2))){
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14904__$1,(4),jobs);
} else {
if((state_val_14905 === (3))){
var inst_14902 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14904__$1,inst_14902);
} else {
if((state_val_14905 === (4))){
var inst_14894 = (state_14904[(2)]);
var inst_14895 = async(inst_14894);
var state_14904__$1 = state_14904;
if(cljs.core.truth_(inst_14895)){
var statearr_14912_18154 = state_14904__$1;
(statearr_14912_18154[(1)] = (5));

} else {
var statearr_14913_18155 = state_14904__$1;
(statearr_14913_18155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (5))){
var state_14904__$1 = state_14904;
var statearr_14914_18158 = state_14904__$1;
(statearr_14914_18158[(2)] = null);

(statearr_14914_18158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (6))){
var state_14904__$1 = state_14904;
var statearr_14915_18159 = state_14904__$1;
(statearr_14915_18159[(2)] = null);

(statearr_14915_18159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14905 === (7))){
var inst_14900 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14916_18161 = state_14904__$1;
(statearr_14916_18161[(2)] = inst_14900);

(statearr_14916_18161[(1)] = (3));


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
});})(__18101,c__14188__auto___18145,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async))
;
return ((function (__18101,switch__13672__auto__,c__14188__auto___18145,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0 = (function (){
var statearr_14917 = [null,null,null,null,null,null,null];
(statearr_14917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__);

(statearr_14917[(1)] = (1));

return statearr_14917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1 = (function (state_14904){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_14904);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e14918){var ex__13676__auto__ = e14918;
var statearr_14920_18165 = state_14904;
(statearr_14920_18165[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_14904[(4)]))){
var statearr_14921_18167 = state_14904;
(statearr_14921_18167[(1)] = cljs.core.first((state_14904[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18168 = state_14904;
state_14904 = G__18168;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = function(state_14904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1.call(this,state_14904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__;
})()
;})(__18101,switch__13672__auto__,c__14188__auto___18145,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async))
})();
var state__14190__auto__ = (function (){var statearr_14924 = f__14189__auto__();
(statearr_14924[(6)] = c__14188__auto___18145);

return statearr_14924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
});})(__18101,c__14188__auto___18145,G__14834_18103,G__14834_18104__$1,n__5636__auto___18100,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14834_18104__$1)].join('')));

}

var G__18174 = (__18101 + (1));
__18101 = G__18174;
continue;
} else {
}
break;
}

var c__14188__auto___18175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_14950){
var state_val_14951 = (state_14950[(1)]);
if((state_val_14951 === (7))){
var inst_14945 = (state_14950[(2)]);
var state_14950__$1 = state_14950;
var statearr_14966_18178 = state_14950__$1;
(statearr_14966_18178[(2)] = inst_14945);

(statearr_14966_18178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14951 === (1))){
var state_14950__$1 = state_14950;
var statearr_14970_18183 = state_14950__$1;
(statearr_14970_18183[(2)] = null);

(statearr_14970_18183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14951 === (4))){
var inst_14930 = (state_14950[(7)]);
var inst_14930__$1 = (state_14950[(2)]);
var inst_14931 = (inst_14930__$1 == null);
var state_14950__$1 = (function (){var statearr_14972 = state_14950;
(statearr_14972[(7)] = inst_14930__$1);

return statearr_14972;
})();
if(cljs.core.truth_(inst_14931)){
var statearr_14974_18184 = state_14950__$1;
(statearr_14974_18184[(1)] = (5));

} else {
var statearr_14977_18186 = state_14950__$1;
(statearr_14977_18186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14951 === (6))){
var inst_14935 = (state_14950[(8)]);
var inst_14930 = (state_14950[(7)]);
var inst_14935__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14937 = [inst_14930,inst_14935__$1];
var inst_14938 = (new cljs.core.PersistentVector(null,2,(5),inst_14936,inst_14937,null));
var state_14950__$1 = (function (){var statearr_14983 = state_14950;
(statearr_14983[(8)] = inst_14935__$1);

return statearr_14983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14950__$1,(8),jobs,inst_14938);
} else {
if((state_val_14951 === (3))){
var inst_14947 = (state_14950[(2)]);
var state_14950__$1 = state_14950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14950__$1,inst_14947);
} else {
if((state_val_14951 === (2))){
var state_14950__$1 = state_14950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14950__$1,(4),from);
} else {
if((state_val_14951 === (9))){
var inst_14942 = (state_14950[(2)]);
var state_14950__$1 = (function (){var statearr_14994 = state_14950;
(statearr_14994[(9)] = inst_14942);

return statearr_14994;
})();
var statearr_14995_18198 = state_14950__$1;
(statearr_14995_18198[(2)] = null);

(statearr_14995_18198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14951 === (5))){
var inst_14933 = cljs.core.async.close_BANG_(jobs);
var state_14950__$1 = state_14950;
var statearr_14998_18199 = state_14950__$1;
(statearr_14998_18199[(2)] = inst_14933);

(statearr_14998_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14951 === (8))){
var inst_14935 = (state_14950[(8)]);
var inst_14940 = (state_14950[(2)]);
var state_14950__$1 = (function (){var statearr_14999 = state_14950;
(statearr_14999[(10)] = inst_14940);

return statearr_14999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14950__$1,(9),results,inst_14935);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0 = (function (){
var statearr_15000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__);

(statearr_15000[(1)] = (1));

return statearr_15000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1 = (function (state_14950){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_14950);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e15001){var ex__13676__auto__ = e15001;
var statearr_15002_18207 = state_14950;
(statearr_15002_18207[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_14950[(4)]))){
var statearr_15003_18208 = state_14950;
(statearr_15003_18208[(1)] = cljs.core.first((state_14950[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18209 = state_14950;
state_14950 = G__18209;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = function(state_14950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1.call(this,state_14950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_15007 = f__14189__auto__();
(statearr_15007[(6)] = c__14188__auto___18175);

return statearr_15007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));


var c__14188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_15049){
var state_val_15050 = (state_15049[(1)]);
if((state_val_15050 === (7))){
var inst_15045 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
var statearr_15054_18211 = state_15049__$1;
(statearr_15054_18211[(2)] = inst_15045);

(statearr_15054_18211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (20))){
var state_15049__$1 = state_15049;
var statearr_15057_18216 = state_15049__$1;
(statearr_15057_18216[(2)] = null);

(statearr_15057_18216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (1))){
var state_15049__$1 = state_15049;
var statearr_15061_18217 = state_15049__$1;
(statearr_15061_18217[(2)] = null);

(statearr_15061_18217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (4))){
var inst_15013 = (state_15049[(7)]);
var inst_15013__$1 = (state_15049[(2)]);
var inst_15014 = (inst_15013__$1 == null);
var state_15049__$1 = (function (){var statearr_15064 = state_15049;
(statearr_15064[(7)] = inst_15013__$1);

return statearr_15064;
})();
if(cljs.core.truth_(inst_15014)){
var statearr_15065_18218 = state_15049__$1;
(statearr_15065_18218[(1)] = (5));

} else {
var statearr_15066_18221 = state_15049__$1;
(statearr_15066_18221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (15))){
var inst_15027 = (state_15049[(8)]);
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15049__$1,(18),to,inst_15027);
} else {
if((state_val_15050 === (21))){
var inst_15040 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
var statearr_15068_18222 = state_15049__$1;
(statearr_15068_18222[(2)] = inst_15040);

(statearr_15068_18222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (13))){
var inst_15042 = (state_15049[(2)]);
var state_15049__$1 = (function (){var statearr_15069 = state_15049;
(statearr_15069[(9)] = inst_15042);

return statearr_15069;
})();
var statearr_15070_18223 = state_15049__$1;
(statearr_15070_18223[(2)] = null);

(statearr_15070_18223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (6))){
var inst_15013 = (state_15049[(7)]);
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15049__$1,(11),inst_15013);
} else {
if((state_val_15050 === (17))){
var inst_15035 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
if(cljs.core.truth_(inst_15035)){
var statearr_15074_18225 = state_15049__$1;
(statearr_15074_18225[(1)] = (19));

} else {
var statearr_15075_18226 = state_15049__$1;
(statearr_15075_18226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (3))){
var inst_15047 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15049__$1,inst_15047);
} else {
if((state_val_15050 === (12))){
var inst_15024 = (state_15049[(10)]);
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15049__$1,(14),inst_15024);
} else {
if((state_val_15050 === (2))){
var state_15049__$1 = state_15049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15049__$1,(4),results);
} else {
if((state_val_15050 === (19))){
var state_15049__$1 = state_15049;
var statearr_15078_18228 = state_15049__$1;
(statearr_15078_18228[(2)] = null);

(statearr_15078_18228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (11))){
var inst_15024 = (state_15049[(2)]);
var state_15049__$1 = (function (){var statearr_15079 = state_15049;
(statearr_15079[(10)] = inst_15024);

return statearr_15079;
})();
var statearr_15080_18233 = state_15049__$1;
(statearr_15080_18233[(2)] = null);

(statearr_15080_18233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (9))){
var state_15049__$1 = state_15049;
var statearr_15083_18234 = state_15049__$1;
(statearr_15083_18234[(2)] = null);

(statearr_15083_18234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (5))){
var state_15049__$1 = state_15049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15084_18237 = state_15049__$1;
(statearr_15084_18237[(1)] = (8));

} else {
var statearr_15087_18239 = state_15049__$1;
(statearr_15087_18239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (14))){
var inst_15027 = (state_15049[(8)]);
var inst_15029 = (state_15049[(11)]);
var inst_15027__$1 = (state_15049[(2)]);
var inst_15028 = (inst_15027__$1 == null);
var inst_15029__$1 = cljs.core.not(inst_15028);
var state_15049__$1 = (function (){var statearr_15095 = state_15049;
(statearr_15095[(8)] = inst_15027__$1);

(statearr_15095[(11)] = inst_15029__$1);

return statearr_15095;
})();
if(inst_15029__$1){
var statearr_15097_18243 = state_15049__$1;
(statearr_15097_18243[(1)] = (15));

} else {
var statearr_15098_18244 = state_15049__$1;
(statearr_15098_18244[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (16))){
var inst_15029 = (state_15049[(11)]);
var state_15049__$1 = state_15049;
var statearr_15099_18248 = state_15049__$1;
(statearr_15099_18248[(2)] = inst_15029);

(statearr_15099_18248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (10))){
var inst_15021 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
var statearr_15100_18256 = state_15049__$1;
(statearr_15100_18256[(2)] = inst_15021);

(statearr_15100_18256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (18))){
var inst_15032 = (state_15049[(2)]);
var state_15049__$1 = state_15049;
var statearr_15106_18261 = state_15049__$1;
(statearr_15106_18261[(2)] = inst_15032);

(statearr_15106_18261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15050 === (8))){
var inst_15018 = cljs.core.async.close_BANG_(to);
var state_15049__$1 = state_15049;
var statearr_15109_18262 = state_15049__$1;
(statearr_15109_18262[(2)] = inst_15018);

(statearr_15109_18262[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0 = (function (){
var statearr_15113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__);

(statearr_15113[(1)] = (1));

return statearr_15113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1 = (function (state_15049){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_15049);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e15114){var ex__13676__auto__ = e15114;
var statearr_15115_18268 = state_15049;
(statearr_15115_18268[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_15049[(4)]))){
var statearr_15116_18269 = state_15049;
(statearr_15116_18269[(1)] = cljs.core.first((state_15049[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18272 = state_15049;
state_15049 = G__18272;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__ = function(state_15049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1.call(this,state_15049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_15122 = f__14189__auto__();
(statearr_15122[(6)] = c__14188__auto__);

return statearr_15122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));

return c__14188__auto__;
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
var G__15124 = arguments.length;
switch (G__15124) {
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
var G__15141 = arguments.length;
switch (G__15141) {
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
var G__15159 = arguments.length;
switch (G__15159) {
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
var c__14188__auto___18294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_15189){
var state_val_15190 = (state_15189[(1)]);
if((state_val_15190 === (7))){
var inst_15185 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
var statearr_15192_18295 = state_15189__$1;
(statearr_15192_18295[(2)] = inst_15185);

(statearr_15192_18295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (1))){
var state_15189__$1 = state_15189;
var statearr_15193_18296 = state_15189__$1;
(statearr_15193_18296[(2)] = null);

(statearr_15193_18296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (4))){
var inst_15165 = (state_15189[(7)]);
var inst_15165__$1 = (state_15189[(2)]);
var inst_15166 = (inst_15165__$1 == null);
var state_15189__$1 = (function (){var statearr_15195 = state_15189;
(statearr_15195[(7)] = inst_15165__$1);

return statearr_15195;
})();
if(cljs.core.truth_(inst_15166)){
var statearr_15196_18303 = state_15189__$1;
(statearr_15196_18303[(1)] = (5));

} else {
var statearr_15198_18304 = state_15189__$1;
(statearr_15198_18304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (13))){
var state_15189__$1 = state_15189;
var statearr_15199_18311 = state_15189__$1;
(statearr_15199_18311[(2)] = null);

(statearr_15199_18311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (6))){
var inst_15165 = (state_15189[(7)]);
var inst_15172 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15165) : p.call(null,inst_15165));
var state_15189__$1 = state_15189;
if(cljs.core.truth_(inst_15172)){
var statearr_15200_18315 = state_15189__$1;
(statearr_15200_18315[(1)] = (9));

} else {
var statearr_15201_18316 = state_15189__$1;
(statearr_15201_18316[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (3))){
var inst_15187 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15189__$1,inst_15187);
} else {
if((state_val_15190 === (12))){
var state_15189__$1 = state_15189;
var statearr_15202_18321 = state_15189__$1;
(statearr_15202_18321[(2)] = null);

(statearr_15202_18321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (2))){
var state_15189__$1 = state_15189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15189__$1,(4),ch);
} else {
if((state_val_15190 === (11))){
var inst_15165 = (state_15189[(7)]);
var inst_15176 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15189__$1,(8),inst_15176,inst_15165);
} else {
if((state_val_15190 === (9))){
var state_15189__$1 = state_15189;
var statearr_15203_18324 = state_15189__$1;
(statearr_15203_18324[(2)] = tc);

(statearr_15203_18324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (5))){
var inst_15169 = cljs.core.async.close_BANG_(tc);
var inst_15170 = cljs.core.async.close_BANG_(fc);
var state_15189__$1 = (function (){var statearr_15208 = state_15189;
(statearr_15208[(8)] = inst_15169);

return statearr_15208;
})();
var statearr_15209_18329 = state_15189__$1;
(statearr_15209_18329[(2)] = inst_15170);

(statearr_15209_18329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (14))){
var inst_15183 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
var statearr_15212_18336 = state_15189__$1;
(statearr_15212_18336[(2)] = inst_15183);

(statearr_15212_18336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (10))){
var state_15189__$1 = state_15189;
var statearr_15213_18338 = state_15189__$1;
(statearr_15213_18338[(2)] = fc);

(statearr_15213_18338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15190 === (8))){
var inst_15178 = (state_15189[(2)]);
var state_15189__$1 = state_15189;
if(cljs.core.truth_(inst_15178)){
var statearr_15217_18340 = state_15189__$1;
(statearr_15217_18340[(1)] = (12));

} else {
var statearr_15218_18341 = state_15189__$1;
(statearr_15218_18341[(1)] = (13));

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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_15222 = [null,null,null,null,null,null,null,null,null];
(statearr_15222[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_15222[(1)] = (1));

return statearr_15222;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_15189){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_15189);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e15223){var ex__13676__auto__ = e15223;
var statearr_15224_18346 = state_15189;
(statearr_15224_18346[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_15189[(4)]))){
var statearr_15225_18348 = state_15189;
(statearr_15225_18348[(1)] = cljs.core.first((state_15189[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18351 = state_15189;
state_15189 = G__18351;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_15189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_15189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_15226 = f__14189__auto__();
(statearr_15226[(6)] = c__14188__auto___18294);

return statearr_15226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
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
var c__14188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_15255){
var state_val_15256 = (state_15255[(1)]);
if((state_val_15256 === (7))){
var inst_15251 = (state_15255[(2)]);
var state_15255__$1 = state_15255;
var statearr_15257_18372 = state_15255__$1;
(statearr_15257_18372[(2)] = inst_15251);

(statearr_15257_18372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (1))){
var inst_15228 = init;
var inst_15229 = inst_15228;
var state_15255__$1 = (function (){var statearr_15258 = state_15255;
(statearr_15258[(7)] = inst_15229);

return statearr_15258;
})();
var statearr_15259_18376 = state_15255__$1;
(statearr_15259_18376[(2)] = null);

(statearr_15259_18376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (4))){
var inst_15234 = (state_15255[(8)]);
var inst_15234__$1 = (state_15255[(2)]);
var inst_15237 = (inst_15234__$1 == null);
var state_15255__$1 = (function (){var statearr_15260 = state_15255;
(statearr_15260[(8)] = inst_15234__$1);

return statearr_15260;
})();
if(cljs.core.truth_(inst_15237)){
var statearr_15262_18377 = state_15255__$1;
(statearr_15262_18377[(1)] = (5));

} else {
var statearr_15266_18378 = state_15255__$1;
(statearr_15266_18378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (6))){
var inst_15229 = (state_15255[(7)]);
var inst_15241 = (state_15255[(9)]);
var inst_15234 = (state_15255[(8)]);
var inst_15241__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15229,inst_15234) : f.call(null,inst_15229,inst_15234));
var inst_15242 = cljs.core.reduced_QMARK_(inst_15241__$1);
var state_15255__$1 = (function (){var statearr_15268 = state_15255;
(statearr_15268[(9)] = inst_15241__$1);

return statearr_15268;
})();
if(inst_15242){
var statearr_15276_18388 = state_15255__$1;
(statearr_15276_18388[(1)] = (8));

} else {
var statearr_15277_18393 = state_15255__$1;
(statearr_15277_18393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (3))){
var inst_15253 = (state_15255[(2)]);
var state_15255__$1 = state_15255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15255__$1,inst_15253);
} else {
if((state_val_15256 === (2))){
var state_15255__$1 = state_15255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15255__$1,(4),ch);
} else {
if((state_val_15256 === (9))){
var inst_15241 = (state_15255[(9)]);
var inst_15229 = inst_15241;
var state_15255__$1 = (function (){var statearr_15279 = state_15255;
(statearr_15279[(7)] = inst_15229);

return statearr_15279;
})();
var statearr_15282_18400 = state_15255__$1;
(statearr_15282_18400[(2)] = null);

(statearr_15282_18400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (5))){
var inst_15229 = (state_15255[(7)]);
var state_15255__$1 = state_15255;
var statearr_15284_18402 = state_15255__$1;
(statearr_15284_18402[(2)] = inst_15229);

(statearr_15284_18402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (10))){
var inst_15249 = (state_15255[(2)]);
var state_15255__$1 = state_15255;
var statearr_15286_18405 = state_15255__$1;
(statearr_15286_18405[(2)] = inst_15249);

(statearr_15286_18405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (8))){
var inst_15241 = (state_15255[(9)]);
var inst_15245 = cljs.core.deref(inst_15241);
var state_15255__$1 = state_15255;
var statearr_15287_18409 = state_15255__$1;
(statearr_15287_18409[(2)] = inst_15245);

(statearr_15287_18409[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13673__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13673__auto____0 = (function (){
var statearr_15291 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15291[(0)] = cljs$core$async$reduce_$_state_machine__13673__auto__);

(statearr_15291[(1)] = (1));

return statearr_15291;
});
var cljs$core$async$reduce_$_state_machine__13673__auto____1 = (function (state_15255){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_15255);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e15293){var ex__13676__auto__ = e15293;
var statearr_15294_18415 = state_15255;
(statearr_15294_18415[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_15255[(4)]))){
var statearr_15295_18417 = state_15255;
(statearr_15295_18417[(1)] = cljs.core.first((state_15255[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18422 = state_15255;
state_15255 = G__18422;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13673__auto__ = function(state_15255){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13673__auto____1.call(this,state_15255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13673__auto____0;
cljs$core$async$reduce_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13673__auto____1;
return cljs$core$async$reduce_$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_15296 = f__14189__auto__();
(statearr_15296[(6)] = c__14188__auto__);

return statearr_15296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));

return c__14188__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_15305){
var state_val_15306 = (state_15305[(1)]);
if((state_val_15306 === (1))){
var inst_15300 = cljs.core.async.reduce(f__$1,init,ch);
var state_15305__$1 = state_15305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15305__$1,(2),inst_15300);
} else {
if((state_val_15306 === (2))){
var inst_15302 = (state_15305[(2)]);
var inst_15303 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15302) : f__$1.call(null,inst_15302));
var state_15305__$1 = state_15305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15305__$1,inst_15303);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13673__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13673__auto____0 = (function (){
var statearr_15316 = [null,null,null,null,null,null,null];
(statearr_15316[(0)] = cljs$core$async$transduce_$_state_machine__13673__auto__);

(statearr_15316[(1)] = (1));

return statearr_15316;
});
var cljs$core$async$transduce_$_state_machine__13673__auto____1 = (function (state_15305){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_15305);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e15317){var ex__13676__auto__ = e15317;
var statearr_15318_18439 = state_15305;
(statearr_15318_18439[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_15305[(4)]))){
var statearr_15319_18440 = state_15305;
(statearr_15319_18440[(1)] = cljs.core.first((state_15305[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18445 = state_15305;
state_15305 = G__18445;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13673__auto__ = function(state_15305){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13673__auto____1.call(this,state_15305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13673__auto____0;
cljs$core$async$transduce_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13673__auto____1;
return cljs$core$async$transduce_$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_15322 = f__14189__auto__();
(statearr_15322[(6)] = c__14188__auto__);

return statearr_15322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));

return c__14188__auto__;
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
var G__15324 = arguments.length;
switch (G__15324) {
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
var c__14188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_15350){
var state_val_15351 = (state_15350[(1)]);
if((state_val_15351 === (7))){
var inst_15332 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15357_18467 = state_15350__$1;
(statearr_15357_18467[(2)] = inst_15332);

(statearr_15357_18467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (1))){
var inst_15326 = cljs.core.seq(coll);
var inst_15327 = inst_15326;
var state_15350__$1 = (function (){var statearr_15360 = state_15350;
(statearr_15360[(7)] = inst_15327);

return statearr_15360;
})();
var statearr_15361_18472 = state_15350__$1;
(statearr_15361_18472[(2)] = null);

(statearr_15361_18472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (4))){
var inst_15327 = (state_15350[(7)]);
var inst_15330 = cljs.core.first(inst_15327);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15350__$1,(7),ch,inst_15330);
} else {
if((state_val_15351 === (13))){
var inst_15344 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15365_18476 = state_15350__$1;
(statearr_15365_18476[(2)] = inst_15344);

(statearr_15365_18476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (6))){
var inst_15335 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
if(cljs.core.truth_(inst_15335)){
var statearr_15366_18481 = state_15350__$1;
(statearr_15366_18481[(1)] = (8));

} else {
var statearr_15367_18482 = state_15350__$1;
(statearr_15367_18482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (3))){
var inst_15348 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15350__$1,inst_15348);
} else {
if((state_val_15351 === (12))){
var state_15350__$1 = state_15350;
var statearr_15368_18486 = state_15350__$1;
(statearr_15368_18486[(2)] = null);

(statearr_15368_18486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (2))){
var inst_15327 = (state_15350[(7)]);
var state_15350__$1 = state_15350;
if(cljs.core.truth_(inst_15327)){
var statearr_15371_18495 = state_15350__$1;
(statearr_15371_18495[(1)] = (4));

} else {
var statearr_15372_18497 = state_15350__$1;
(statearr_15372_18497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (11))){
var inst_15341 = cljs.core.async.close_BANG_(ch);
var state_15350__$1 = state_15350;
var statearr_15373_18498 = state_15350__$1;
(statearr_15373_18498[(2)] = inst_15341);

(statearr_15373_18498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (9))){
var state_15350__$1 = state_15350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15374_18499 = state_15350__$1;
(statearr_15374_18499[(1)] = (11));

} else {
var statearr_15375_18500 = state_15350__$1;
(statearr_15375_18500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (5))){
var inst_15327 = (state_15350[(7)]);
var state_15350__$1 = state_15350;
var statearr_15377_18504 = state_15350__$1;
(statearr_15377_18504[(2)] = inst_15327);

(statearr_15377_18504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (10))){
var inst_15346 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15379_18506 = state_15350__$1;
(statearr_15379_18506[(2)] = inst_15346);

(statearr_15379_18506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (8))){
var inst_15327 = (state_15350[(7)]);
var inst_15337 = cljs.core.next(inst_15327);
var inst_15327__$1 = inst_15337;
var state_15350__$1 = (function (){var statearr_15387 = state_15350;
(statearr_15387[(7)] = inst_15327__$1);

return statearr_15387;
})();
var statearr_15388_18511 = state_15350__$1;
(statearr_15388_18511[(2)] = null);

(statearr_15388_18511[(1)] = (2));


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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_15390 = [null,null,null,null,null,null,null,null];
(statearr_15390[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_15390[(1)] = (1));

return statearr_15390;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_15350){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_15350);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e15392){var ex__13676__auto__ = e15392;
var statearr_15393_18524 = state_15350;
(statearr_15393_18524[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_15350[(4)]))){
var statearr_15395_18526 = state_15350;
(statearr_15395_18526[(1)] = cljs.core.first((state_15350[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18531 = state_15350;
state_15350 = G__18531;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_15350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_15350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_15398 = f__14189__auto__();
(statearr_15398[(6)] = c__14188__auto__);

return statearr_15398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));

return c__14188__auto__;
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
var G__15413 = arguments.length;
switch (G__15413) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18535 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18535(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18539 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18539(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18549 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18549(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18559 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18559(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15450 = (function (ch,cs,meta15451){
this.ch = ch;
this.cs = cs;
this.meta15451 = meta15451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15452,meta15451__$1){
var self__ = this;
var _15452__$1 = this;
return (new cljs.core.async.t_cljs$core$async15450(self__.ch,self__.cs,meta15451__$1));
}));

(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15452){
var self__ = this;
var _15452__$1 = this;
return self__.meta15451;
}));

(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15450.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15451","meta15451",-403044968,null)], null);
}));

(cljs.core.async.t_cljs$core$async15450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15450");

(cljs.core.async.t_cljs$core$async15450.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15450.
 */
cljs.core.async.__GT_t_cljs$core$async15450 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15450(ch__$1,cs__$1,meta15451){
return (new cljs.core.async.t_cljs$core$async15450(ch__$1,cs__$1,meta15451));
});

}

return (new cljs.core.async.t_cljs$core$async15450(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14188__auto___18571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_15619){
var state_val_15622 = (state_15619[(1)]);
if((state_val_15622 === (7))){
var inst_15602 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15623_18574 = state_15619__$1;
(statearr_15623_18574[(2)] = inst_15602);

(statearr_15623_18574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (20))){
var inst_15505 = (state_15619[(7)]);
var inst_15517 = cljs.core.first(inst_15505);
var inst_15519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15517,(0),null);
var inst_15520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15517,(1),null);
var state_15619__$1 = (function (){var statearr_15631 = state_15619;
(statearr_15631[(8)] = inst_15519);

return statearr_15631;
})();
if(cljs.core.truth_(inst_15520)){
var statearr_15636_18575 = state_15619__$1;
(statearr_15636_18575[(1)] = (22));

} else {
var statearr_15637_18576 = state_15619__$1;
(statearr_15637_18576[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (27))){
var inst_15556 = (state_15619[(9)]);
var inst_15551 = (state_15619[(10)]);
var inst_15549 = (state_15619[(11)]);
var inst_15468 = (state_15619[(12)]);
var inst_15556__$1 = cljs.core._nth(inst_15549,inst_15551);
var inst_15557 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15556__$1,inst_15468,done);
var state_15619__$1 = (function (){var statearr_15641 = state_15619;
(statearr_15641[(9)] = inst_15556__$1);

return statearr_15641;
})();
if(cljs.core.truth_(inst_15557)){
var statearr_15642_18579 = state_15619__$1;
(statearr_15642_18579[(1)] = (30));

} else {
var statearr_15643_18581 = state_15619__$1;
(statearr_15643_18581[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (1))){
var state_15619__$1 = state_15619;
var statearr_15644_18582 = state_15619__$1;
(statearr_15644_18582[(2)] = null);

(statearr_15644_18582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (24))){
var inst_15505 = (state_15619[(7)]);
var inst_15525 = (state_15619[(2)]);
var inst_15526 = cljs.core.next(inst_15505);
var inst_15477 = inst_15526;
var inst_15478 = null;
var inst_15479 = (0);
var inst_15480 = (0);
var state_15619__$1 = (function (){var statearr_15646 = state_15619;
(statearr_15646[(13)] = inst_15478);

(statearr_15646[(14)] = inst_15480);

(statearr_15646[(15)] = inst_15479);

(statearr_15646[(16)] = inst_15525);

(statearr_15646[(17)] = inst_15477);

return statearr_15646;
})();
var statearr_15647_18586 = state_15619__$1;
(statearr_15647_18586[(2)] = null);

(statearr_15647_18586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (39))){
var state_15619__$1 = state_15619;
var statearr_15653_18589 = state_15619__$1;
(statearr_15653_18589[(2)] = null);

(statearr_15653_18589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (4))){
var inst_15468 = (state_15619[(12)]);
var inst_15468__$1 = (state_15619[(2)]);
var inst_15469 = (inst_15468__$1 == null);
var state_15619__$1 = (function (){var statearr_15657 = state_15619;
(statearr_15657[(12)] = inst_15468__$1);

return statearr_15657;
})();
if(cljs.core.truth_(inst_15469)){
var statearr_15658_18591 = state_15619__$1;
(statearr_15658_18591[(1)] = (5));

} else {
var statearr_15659_18592 = state_15619__$1;
(statearr_15659_18592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (15))){
var inst_15478 = (state_15619[(13)]);
var inst_15480 = (state_15619[(14)]);
var inst_15479 = (state_15619[(15)]);
var inst_15477 = (state_15619[(17)]);
var inst_15496 = (state_15619[(2)]);
var inst_15500 = (inst_15480 + (1));
var tmp15650 = inst_15478;
var tmp15651 = inst_15479;
var tmp15652 = inst_15477;
var inst_15477__$1 = tmp15652;
var inst_15478__$1 = tmp15650;
var inst_15479__$1 = tmp15651;
var inst_15480__$1 = inst_15500;
var state_15619__$1 = (function (){var statearr_15662 = state_15619;
(statearr_15662[(13)] = inst_15478__$1);

(statearr_15662[(18)] = inst_15496);

(statearr_15662[(14)] = inst_15480__$1);

(statearr_15662[(15)] = inst_15479__$1);

(statearr_15662[(17)] = inst_15477__$1);

return statearr_15662;
})();
var statearr_15664_18597 = state_15619__$1;
(statearr_15664_18597[(2)] = null);

(statearr_15664_18597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (21))){
var inst_15529 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15677_18599 = state_15619__$1;
(statearr_15677_18599[(2)] = inst_15529);

(statearr_15677_18599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (31))){
var inst_15556 = (state_15619[(9)]);
var inst_15560 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15556);
var state_15619__$1 = state_15619;
var statearr_15678_18601 = state_15619__$1;
(statearr_15678_18601[(2)] = inst_15560);

(statearr_15678_18601[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (32))){
var inst_15551 = (state_15619[(10)]);
var inst_15548 = (state_15619[(19)]);
var inst_15550 = (state_15619[(20)]);
var inst_15549 = (state_15619[(11)]);
var inst_15562 = (state_15619[(2)]);
var inst_15563 = (inst_15551 + (1));
var tmp15665 = inst_15548;
var tmp15666 = inst_15550;
var tmp15667 = inst_15549;
var inst_15548__$1 = tmp15665;
var inst_15549__$1 = tmp15667;
var inst_15550__$1 = tmp15666;
var inst_15551__$1 = inst_15563;
var state_15619__$1 = (function (){var statearr_15684 = state_15619;
(statearr_15684[(10)] = inst_15551__$1);

(statearr_15684[(19)] = inst_15548__$1);

(statearr_15684[(20)] = inst_15550__$1);

(statearr_15684[(11)] = inst_15549__$1);

(statearr_15684[(21)] = inst_15562);

return statearr_15684;
})();
var statearr_15685_18603 = state_15619__$1;
(statearr_15685_18603[(2)] = null);

(statearr_15685_18603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (40))){
var inst_15575 = (state_15619[(22)]);
var inst_15579 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15575);
var state_15619__$1 = state_15619;
var statearr_15686_18604 = state_15619__$1;
(statearr_15686_18604[(2)] = inst_15579);

(statearr_15686_18604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (33))){
var inst_15566 = (state_15619[(23)]);
var inst_15568 = cljs.core.chunked_seq_QMARK_(inst_15566);
var state_15619__$1 = state_15619;
if(inst_15568){
var statearr_15687_18609 = state_15619__$1;
(statearr_15687_18609[(1)] = (36));

} else {
var statearr_15688_18610 = state_15619__$1;
(statearr_15688_18610[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (13))){
var inst_15490 = (state_15619[(24)]);
var inst_15493 = cljs.core.async.close_BANG_(inst_15490);
var state_15619__$1 = state_15619;
var statearr_15691_18617 = state_15619__$1;
(statearr_15691_18617[(2)] = inst_15493);

(statearr_15691_18617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (22))){
var inst_15519 = (state_15619[(8)]);
var inst_15522 = cljs.core.async.close_BANG_(inst_15519);
var state_15619__$1 = state_15619;
var statearr_15692_18623 = state_15619__$1;
(statearr_15692_18623[(2)] = inst_15522);

(statearr_15692_18623[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (36))){
var inst_15566 = (state_15619[(23)]);
var inst_15570 = cljs.core.chunk_first(inst_15566);
var inst_15571 = cljs.core.chunk_rest(inst_15566);
var inst_15572 = cljs.core.count(inst_15570);
var inst_15548 = inst_15571;
var inst_15549 = inst_15570;
var inst_15550 = inst_15572;
var inst_15551 = (0);
var state_15619__$1 = (function (){var statearr_15694 = state_15619;
(statearr_15694[(10)] = inst_15551);

(statearr_15694[(19)] = inst_15548);

(statearr_15694[(20)] = inst_15550);

(statearr_15694[(11)] = inst_15549);

return statearr_15694;
})();
var statearr_15696_18625 = state_15619__$1;
(statearr_15696_18625[(2)] = null);

(statearr_15696_18625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (41))){
var inst_15566 = (state_15619[(23)]);
var inst_15581 = (state_15619[(2)]);
var inst_15582 = cljs.core.next(inst_15566);
var inst_15548 = inst_15582;
var inst_15549 = null;
var inst_15550 = (0);
var inst_15551 = (0);
var state_15619__$1 = (function (){var statearr_15701 = state_15619;
(statearr_15701[(10)] = inst_15551);

(statearr_15701[(25)] = inst_15581);

(statearr_15701[(19)] = inst_15548);

(statearr_15701[(20)] = inst_15550);

(statearr_15701[(11)] = inst_15549);

return statearr_15701;
})();
var statearr_15702_18633 = state_15619__$1;
(statearr_15702_18633[(2)] = null);

(statearr_15702_18633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (43))){
var state_15619__$1 = state_15619;
var statearr_15703_18637 = state_15619__$1;
(statearr_15703_18637[(2)] = null);

(statearr_15703_18637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (29))){
var inst_15590 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15705_18638 = state_15619__$1;
(statearr_15705_18638[(2)] = inst_15590);

(statearr_15705_18638[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (44))){
var inst_15599 = (state_15619[(2)]);
var state_15619__$1 = (function (){var statearr_15707 = state_15619;
(statearr_15707[(26)] = inst_15599);

return statearr_15707;
})();
var statearr_15708_18648 = state_15619__$1;
(statearr_15708_18648[(2)] = null);

(statearr_15708_18648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (6))){
var inst_15539 = (state_15619[(27)]);
var inst_15538 = cljs.core.deref(cs);
var inst_15539__$1 = cljs.core.keys(inst_15538);
var inst_15540 = cljs.core.count(inst_15539__$1);
var inst_15541 = cljs.core.reset_BANG_(dctr,inst_15540);
var inst_15547 = cljs.core.seq(inst_15539__$1);
var inst_15548 = inst_15547;
var inst_15549 = null;
var inst_15550 = (0);
var inst_15551 = (0);
var state_15619__$1 = (function (){var statearr_15709 = state_15619;
(statearr_15709[(28)] = inst_15541);

(statearr_15709[(10)] = inst_15551);

(statearr_15709[(19)] = inst_15548);

(statearr_15709[(20)] = inst_15550);

(statearr_15709[(11)] = inst_15549);

(statearr_15709[(27)] = inst_15539__$1);

return statearr_15709;
})();
var statearr_15710_18666 = state_15619__$1;
(statearr_15710_18666[(2)] = null);

(statearr_15710_18666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (28))){
var inst_15566 = (state_15619[(23)]);
var inst_15548 = (state_15619[(19)]);
var inst_15566__$1 = cljs.core.seq(inst_15548);
var state_15619__$1 = (function (){var statearr_15711 = state_15619;
(statearr_15711[(23)] = inst_15566__$1);

return statearr_15711;
})();
if(inst_15566__$1){
var statearr_15712_18676 = state_15619__$1;
(statearr_15712_18676[(1)] = (33));

} else {
var statearr_15722_18678 = state_15619__$1;
(statearr_15722_18678[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (25))){
var inst_15551 = (state_15619[(10)]);
var inst_15550 = (state_15619[(20)]);
var inst_15553 = (inst_15551 < inst_15550);
var inst_15554 = inst_15553;
var state_15619__$1 = state_15619;
if(cljs.core.truth_(inst_15554)){
var statearr_15723_18689 = state_15619__$1;
(statearr_15723_18689[(1)] = (27));

} else {
var statearr_15726_18694 = state_15619__$1;
(statearr_15726_18694[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (34))){
var state_15619__$1 = state_15619;
var statearr_15731_18695 = state_15619__$1;
(statearr_15731_18695[(2)] = null);

(statearr_15731_18695[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (17))){
var state_15619__$1 = state_15619;
var statearr_15732_18702 = state_15619__$1;
(statearr_15732_18702[(2)] = null);

(statearr_15732_18702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (3))){
var inst_15604 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15619__$1,inst_15604);
} else {
if((state_val_15622 === (12))){
var inst_15534 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15733_18704 = state_15619__$1;
(statearr_15733_18704[(2)] = inst_15534);

(statearr_15733_18704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (2))){
var state_15619__$1 = state_15619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15619__$1,(4),ch);
} else {
if((state_val_15622 === (23))){
var state_15619__$1 = state_15619;
var statearr_15735_18705 = state_15619__$1;
(statearr_15735_18705[(2)] = null);

(statearr_15735_18705[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (35))){
var inst_15588 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15736_18706 = state_15619__$1;
(statearr_15736_18706[(2)] = inst_15588);

(statearr_15736_18706[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (19))){
var inst_15505 = (state_15619[(7)]);
var inst_15509 = cljs.core.chunk_first(inst_15505);
var inst_15510 = cljs.core.chunk_rest(inst_15505);
var inst_15511 = cljs.core.count(inst_15509);
var inst_15477 = inst_15510;
var inst_15478 = inst_15509;
var inst_15479 = inst_15511;
var inst_15480 = (0);
var state_15619__$1 = (function (){var statearr_15737 = state_15619;
(statearr_15737[(13)] = inst_15478);

(statearr_15737[(14)] = inst_15480);

(statearr_15737[(15)] = inst_15479);

(statearr_15737[(17)] = inst_15477);

return statearr_15737;
})();
var statearr_15738_18711 = state_15619__$1;
(statearr_15738_18711[(2)] = null);

(statearr_15738_18711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (11))){
var inst_15505 = (state_15619[(7)]);
var inst_15477 = (state_15619[(17)]);
var inst_15505__$1 = cljs.core.seq(inst_15477);
var state_15619__$1 = (function (){var statearr_15744 = state_15619;
(statearr_15744[(7)] = inst_15505__$1);

return statearr_15744;
})();
if(inst_15505__$1){
var statearr_15746_18712 = state_15619__$1;
(statearr_15746_18712[(1)] = (16));

} else {
var statearr_15747_18713 = state_15619__$1;
(statearr_15747_18713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (9))){
var inst_15536 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15752_18714 = state_15619__$1;
(statearr_15752_18714[(2)] = inst_15536);

(statearr_15752_18714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (5))){
var inst_15475 = cljs.core.deref(cs);
var inst_15476 = cljs.core.seq(inst_15475);
var inst_15477 = inst_15476;
var inst_15478 = null;
var inst_15479 = (0);
var inst_15480 = (0);
var state_15619__$1 = (function (){var statearr_15758 = state_15619;
(statearr_15758[(13)] = inst_15478);

(statearr_15758[(14)] = inst_15480);

(statearr_15758[(15)] = inst_15479);

(statearr_15758[(17)] = inst_15477);

return statearr_15758;
})();
var statearr_15761_18715 = state_15619__$1;
(statearr_15761_18715[(2)] = null);

(statearr_15761_18715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (14))){
var state_15619__$1 = state_15619;
var statearr_15762_18716 = state_15619__$1;
(statearr_15762_18716[(2)] = null);

(statearr_15762_18716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (45))){
var inst_15596 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15763_18717 = state_15619__$1;
(statearr_15763_18717[(2)] = inst_15596);

(statearr_15763_18717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (26))){
var inst_15539 = (state_15619[(27)]);
var inst_15592 = (state_15619[(2)]);
var inst_15593 = cljs.core.seq(inst_15539);
var state_15619__$1 = (function (){var statearr_15764 = state_15619;
(statearr_15764[(29)] = inst_15592);

return statearr_15764;
})();
if(inst_15593){
var statearr_15767_18719 = state_15619__$1;
(statearr_15767_18719[(1)] = (42));

} else {
var statearr_15768_18720 = state_15619__$1;
(statearr_15768_18720[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (16))){
var inst_15505 = (state_15619[(7)]);
var inst_15507 = cljs.core.chunked_seq_QMARK_(inst_15505);
var state_15619__$1 = state_15619;
if(inst_15507){
var statearr_15773_18721 = state_15619__$1;
(statearr_15773_18721[(1)] = (19));

} else {
var statearr_15774_18722 = state_15619__$1;
(statearr_15774_18722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (38))){
var inst_15585 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15775_18723 = state_15619__$1;
(statearr_15775_18723[(2)] = inst_15585);

(statearr_15775_18723[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (30))){
var state_15619__$1 = state_15619;
var statearr_15776_18725 = state_15619__$1;
(statearr_15776_18725[(2)] = null);

(statearr_15776_18725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (10))){
var inst_15478 = (state_15619[(13)]);
var inst_15480 = (state_15619[(14)]);
var inst_15489 = cljs.core._nth(inst_15478,inst_15480);
var inst_15490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15489,(0),null);
var inst_15491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15489,(1),null);
var state_15619__$1 = (function (){var statearr_15777 = state_15619;
(statearr_15777[(24)] = inst_15490);

return statearr_15777;
})();
if(cljs.core.truth_(inst_15491)){
var statearr_15778_18735 = state_15619__$1;
(statearr_15778_18735[(1)] = (13));

} else {
var statearr_15779_18736 = state_15619__$1;
(statearr_15779_18736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (18))){
var inst_15532 = (state_15619[(2)]);
var state_15619__$1 = state_15619;
var statearr_15780_18743 = state_15619__$1;
(statearr_15780_18743[(2)] = inst_15532);

(statearr_15780_18743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (42))){
var state_15619__$1 = state_15619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15619__$1,(45),dchan);
} else {
if((state_val_15622 === (37))){
var inst_15575 = (state_15619[(22)]);
var inst_15566 = (state_15619[(23)]);
var inst_15468 = (state_15619[(12)]);
var inst_15575__$1 = cljs.core.first(inst_15566);
var inst_15576 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15575__$1,inst_15468,done);
var state_15619__$1 = (function (){var statearr_15784 = state_15619;
(statearr_15784[(22)] = inst_15575__$1);

return statearr_15784;
})();
if(cljs.core.truth_(inst_15576)){
var statearr_15785_18745 = state_15619__$1;
(statearr_15785_18745[(1)] = (39));

} else {
var statearr_15786_18746 = state_15619__$1;
(statearr_15786_18746[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15622 === (8))){
var inst_15480 = (state_15619[(14)]);
var inst_15479 = (state_15619[(15)]);
var inst_15482 = (inst_15480 < inst_15479);
var inst_15483 = inst_15482;
var state_15619__$1 = state_15619;
if(cljs.core.truth_(inst_15483)){
var statearr_15802_18747 = state_15619__$1;
(statearr_15802_18747[(1)] = (10));

} else {
var statearr_15803_18749 = state_15619__$1;
(statearr_15803_18749[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13673__auto__ = null;
var cljs$core$async$mult_$_state_machine__13673__auto____0 = (function (){
var statearr_15826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15826[(0)] = cljs$core$async$mult_$_state_machine__13673__auto__);

(statearr_15826[(1)] = (1));

return statearr_15826;
});
var cljs$core$async$mult_$_state_machine__13673__auto____1 = (function (state_15619){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_15619);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e15828){var ex__13676__auto__ = e15828;
var statearr_15829_18750 = state_15619;
(statearr_15829_18750[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_15619[(4)]))){
var statearr_15833_18754 = state_15619;
(statearr_15833_18754[(1)] = cljs.core.first((state_15619[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18755 = state_15619;
state_15619 = G__18755;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13673__auto__ = function(state_15619){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13673__auto____1.call(this,state_15619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13673__auto____0;
cljs$core$async$mult_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13673__auto____1;
return cljs$core$async$mult_$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_15837 = f__14189__auto__();
(statearr_15837[(6)] = c__14188__auto___18571);

return statearr_15837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
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
var G__15842 = arguments.length;
switch (G__15842) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18764 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18764(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18767 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18767(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18769 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18769(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18770 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18770(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18773 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18773(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18777 = arguments.length;
var i__5770__auto___18778 = (0);
while(true){
if((i__5770__auto___18778 < len__5769__auto___18777)){
args__5775__auto__.push((arguments[i__5770__auto___18778]));

var G__18779 = (i__5770__auto___18778 + (1));
i__5770__auto___18778 = G__18779;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15935){
var map__15936 = p__15935;
var map__15936__$1 = cljs.core.__destructure_map(map__15936);
var opts = map__15936__$1;
var statearr_15937_18780 = state;
(statearr_15937_18780[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15941_18788 = state;
(statearr_15941_18788[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15943_18789 = state;
(statearr_15943_18789[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15921){
var G__15922 = cljs.core.first(seq15921);
var seq15921__$1 = cljs.core.next(seq15921);
var G__15923 = cljs.core.first(seq15921__$1);
var seq15921__$2 = cljs.core.next(seq15921__$1);
var G__15924 = cljs.core.first(seq15921__$2);
var seq15921__$3 = cljs.core.next(seq15921__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15922,G__15923,G__15924,seq15921__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15970 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15971){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15971 = meta15971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15972,meta15971__$1){
var self__ = this;
var _15972__$1 = this;
return (new cljs.core.async.t_cljs$core$async15970(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15971__$1));
}));

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15972){
var self__ = this;
var _15972__$1 = this;
return self__.meta15971;
}));

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15970.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15971","meta15971",-1925987822,null)], null);
}));

(cljs.core.async.t_cljs$core$async15970.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15970");

(cljs.core.async.t_cljs$core$async15970.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15970");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15970.
 */
cljs.core.async.__GT_t_cljs$core$async15970 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15970(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15971){
return (new cljs.core.async.t_cljs$core$async15970(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15971));
});

}

return (new cljs.core.async.t_cljs$core$async15970(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14188__auto___18800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_16100){
var state_val_16102 = (state_16100[(1)]);
if((state_val_16102 === (7))){
var inst_16044 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16044)){
var statearr_16107_18801 = state_16100__$1;
(statearr_16107_18801[(1)] = (8));

} else {
var statearr_16108_18802 = state_16100__$1;
(statearr_16108_18802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (20))){
var inst_16036 = (state_16100[(7)]);
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16100__$1,(23),out,inst_16036);
} else {
if((state_val_16102 === (1))){
var inst_16012 = calc_state();
var inst_16016 = cljs.core.__destructure_map(inst_16012);
var inst_16017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16016,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16016,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16016,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16021 = inst_16012;
var state_16100__$1 = (function (){var statearr_16114 = state_16100;
(statearr_16114[(8)] = inst_16019);

(statearr_16114[(9)] = inst_16017);

(statearr_16114[(10)] = inst_16018);

(statearr_16114[(11)] = inst_16021);

return statearr_16114;
})();
var statearr_16118_18806 = state_16100__$1;
(statearr_16118_18806[(2)] = null);

(statearr_16118_18806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (24))){
var inst_16026 = (state_16100[(12)]);
var inst_16021 = inst_16026;
var state_16100__$1 = (function (){var statearr_16120 = state_16100;
(statearr_16120[(11)] = inst_16021);

return statearr_16120;
})();
var statearr_16121_18808 = state_16100__$1;
(statearr_16121_18808[(2)] = null);

(statearr_16121_18808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (4))){
var inst_16039 = (state_16100[(13)]);
var inst_16036 = (state_16100[(7)]);
var inst_16034 = (state_16100[(2)]);
var inst_16036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16034,(0),null);
var inst_16038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16034,(1),null);
var inst_16039__$1 = (inst_16036__$1 == null);
var state_16100__$1 = (function (){var statearr_16126 = state_16100;
(statearr_16126[(13)] = inst_16039__$1);

(statearr_16126[(14)] = inst_16038);

(statearr_16126[(7)] = inst_16036__$1);

return statearr_16126;
})();
if(cljs.core.truth_(inst_16039__$1)){
var statearr_16127_18809 = state_16100__$1;
(statearr_16127_18809[(1)] = (5));

} else {
var statearr_16129_18811 = state_16100__$1;
(statearr_16129_18811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (15))){
var inst_16068 = (state_16100[(15)]);
var inst_16027 = (state_16100[(16)]);
var inst_16068__$1 = cljs.core.empty_QMARK_(inst_16027);
var state_16100__$1 = (function (){var statearr_16132 = state_16100;
(statearr_16132[(15)] = inst_16068__$1);

return statearr_16132;
})();
if(inst_16068__$1){
var statearr_16133_18812 = state_16100__$1;
(statearr_16133_18812[(1)] = (17));

} else {
var statearr_16134_18813 = state_16100__$1;
(statearr_16134_18813[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (21))){
var inst_16026 = (state_16100[(12)]);
var inst_16021 = inst_16026;
var state_16100__$1 = (function (){var statearr_16137 = state_16100;
(statearr_16137[(11)] = inst_16021);

return statearr_16137;
})();
var statearr_16138_18818 = state_16100__$1;
(statearr_16138_18818[(2)] = null);

(statearr_16138_18818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (13))){
var inst_16055 = (state_16100[(2)]);
var inst_16057 = calc_state();
var inst_16021 = inst_16057;
var state_16100__$1 = (function (){var statearr_16140 = state_16100;
(statearr_16140[(17)] = inst_16055);

(statearr_16140[(11)] = inst_16021);

return statearr_16140;
})();
var statearr_16143_18819 = state_16100__$1;
(statearr_16143_18819[(2)] = null);

(statearr_16143_18819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (22))){
var inst_16090 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16144_18820 = state_16100__$1;
(statearr_16144_18820[(2)] = inst_16090);

(statearr_16144_18820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (6))){
var inst_16038 = (state_16100[(14)]);
var inst_16042 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16038,change);
var state_16100__$1 = state_16100;
var statearr_16148_18822 = state_16100__$1;
(statearr_16148_18822[(2)] = inst_16042);

(statearr_16148_18822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (25))){
var state_16100__$1 = state_16100;
var statearr_16150_18823 = state_16100__$1;
(statearr_16150_18823[(2)] = null);

(statearr_16150_18823[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (17))){
var inst_16028 = (state_16100[(18)]);
var inst_16038 = (state_16100[(14)]);
var inst_16070 = (inst_16028.cljs$core$IFn$_invoke$arity$1 ? inst_16028.cljs$core$IFn$_invoke$arity$1(inst_16038) : inst_16028.call(null,inst_16038));
var inst_16071 = cljs.core.not(inst_16070);
var state_16100__$1 = state_16100;
var statearr_16153_18824 = state_16100__$1;
(statearr_16153_18824[(2)] = inst_16071);

(statearr_16153_18824[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (3))){
var inst_16094 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16100__$1,inst_16094);
} else {
if((state_val_16102 === (12))){
var state_16100__$1 = state_16100;
var statearr_16160_18826 = state_16100__$1;
(statearr_16160_18826[(2)] = null);

(statearr_16160_18826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (2))){
var inst_16026 = (state_16100[(12)]);
var inst_16021 = (state_16100[(11)]);
var inst_16026__$1 = cljs.core.__destructure_map(inst_16021);
var inst_16027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16026__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16026__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16026__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16100__$1 = (function (){var statearr_16166 = state_16100;
(statearr_16166[(18)] = inst_16028);

(statearr_16166[(12)] = inst_16026__$1);

(statearr_16166[(16)] = inst_16027);

return statearr_16166;
})();
return cljs.core.async.ioc_alts_BANG_(state_16100__$1,(4),inst_16029);
} else {
if((state_val_16102 === (23))){
var inst_16080 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16080)){
var statearr_16173_18828 = state_16100__$1;
(statearr_16173_18828[(1)] = (24));

} else {
var statearr_16180_18829 = state_16100__$1;
(statearr_16180_18829[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (19))){
var inst_16074 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16183_18830 = state_16100__$1;
(statearr_16183_18830[(2)] = inst_16074);

(statearr_16183_18830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (11))){
var inst_16038 = (state_16100[(14)]);
var inst_16052 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16038);
var state_16100__$1 = state_16100;
var statearr_16192_18831 = state_16100__$1;
(statearr_16192_18831[(2)] = inst_16052);

(statearr_16192_18831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (9))){
var inst_16038 = (state_16100[(14)]);
var inst_16065 = (state_16100[(19)]);
var inst_16027 = (state_16100[(16)]);
var inst_16065__$1 = (inst_16027.cljs$core$IFn$_invoke$arity$1 ? inst_16027.cljs$core$IFn$_invoke$arity$1(inst_16038) : inst_16027.call(null,inst_16038));
var state_16100__$1 = (function (){var statearr_16207 = state_16100;
(statearr_16207[(19)] = inst_16065__$1);

return statearr_16207;
})();
if(cljs.core.truth_(inst_16065__$1)){
var statearr_16208_18833 = state_16100__$1;
(statearr_16208_18833[(1)] = (14));

} else {
var statearr_16209_18834 = state_16100__$1;
(statearr_16209_18834[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (5))){
var inst_16039 = (state_16100[(13)]);
var state_16100__$1 = state_16100;
var statearr_16212_18835 = state_16100__$1;
(statearr_16212_18835[(2)] = inst_16039);

(statearr_16212_18835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (14))){
var inst_16065 = (state_16100[(19)]);
var state_16100__$1 = state_16100;
var statearr_16222_18836 = state_16100__$1;
(statearr_16222_18836[(2)] = inst_16065);

(statearr_16222_18836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (26))){
var inst_16086 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16227_18839 = state_16100__$1;
(statearr_16227_18839[(2)] = inst_16086);

(statearr_16227_18839[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (16))){
var inst_16076 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16076)){
var statearr_16239_18841 = state_16100__$1;
(statearr_16239_18841[(1)] = (20));

} else {
var statearr_16240_18842 = state_16100__$1;
(statearr_16240_18842[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (10))){
var inst_16092 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16246_18843 = state_16100__$1;
(statearr_16246_18843[(2)] = inst_16092);

(statearr_16246_18843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (18))){
var inst_16068 = (state_16100[(15)]);
var state_16100__$1 = state_16100;
var statearr_16249_18844 = state_16100__$1;
(statearr_16249_18844[(2)] = inst_16068);

(statearr_16249_18844[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (8))){
var inst_16036 = (state_16100[(7)]);
var inst_16048 = (inst_16036 == null);
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16048)){
var statearr_16255_18846 = state_16100__$1;
(statearr_16255_18846[(1)] = (11));

} else {
var statearr_16256_18848 = state_16100__$1;
(statearr_16256_18848[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13673__auto__ = null;
var cljs$core$async$mix_$_state_machine__13673__auto____0 = (function (){
var statearr_16258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16258[(0)] = cljs$core$async$mix_$_state_machine__13673__auto__);

(statearr_16258[(1)] = (1));

return statearr_16258;
});
var cljs$core$async$mix_$_state_machine__13673__auto____1 = (function (state_16100){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_16100);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e16267){var ex__13676__auto__ = e16267;
var statearr_16271_18853 = state_16100;
(statearr_16271_18853[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_16100[(4)]))){
var statearr_16273_18854 = state_16100;
(statearr_16273_18854[(1)] = cljs.core.first((state_16100[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18856 = state_16100;
state_16100 = G__18856;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13673__auto__ = function(state_16100){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13673__auto____1.call(this,state_16100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13673__auto____0;
cljs$core$async$mix_$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13673__auto____1;
return cljs$core$async$mix_$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_16278 = f__14189__auto__();
(statearr_16278[(6)] = c__14188__auto___18800);

return statearr_16278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18862 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18862(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18864 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18864(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18866 = (function() {
var G__18867 = null;
var G__18867__1 = (function (p){
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
var G__18867__2 = (function (p,v){
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
G__18867 = function(p,v){
switch(arguments.length){
case 1:
return G__18867__1.call(this,p);
case 2:
return G__18867__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18867.cljs$core$IFn$_invoke$arity$1 = G__18867__1;
G__18867.cljs$core$IFn$_invoke$arity$2 = G__18867__2;
return G__18867;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16378 = arguments.length;
switch (G__16378) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18866(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18866(p,v);
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
var G__16401 = arguments.length;
switch (G__16401) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16393_SHARP_){
if(cljs.core.truth_((p1__16393_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16393_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16393_SHARP_.call(null,topic)))){
return p1__16393_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16393_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16417 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16418){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16418 = meta16418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16419,meta16418__$1){
var self__ = this;
var _16419__$1 = this;
return (new cljs.core.async.t_cljs$core$async16417(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16418__$1));
}));

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16419){
var self__ = this;
var _16419__$1 = this;
return self__.meta16418;
}));

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16417.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16418","meta16418",-1216294703,null)], null);
}));

(cljs.core.async.t_cljs$core$async16417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16417");

(cljs.core.async.t_cljs$core$async16417.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16417.
 */
cljs.core.async.__GT_t_cljs$core$async16417 = (function cljs$core$async$__GT_t_cljs$core$async16417(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16418){
return (new cljs.core.async.t_cljs$core$async16417(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16418));
});

}

return (new cljs.core.async.t_cljs$core$async16417(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14188__auto___18873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_16547){
var state_val_16548 = (state_16547[(1)]);
if((state_val_16548 === (7))){
var inst_16543 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
var statearr_16561_18874 = state_16547__$1;
(statearr_16561_18874[(2)] = inst_16543);

(statearr_16561_18874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (20))){
var state_16547__$1 = state_16547;
var statearr_16564_18875 = state_16547__$1;
(statearr_16564_18875[(2)] = null);

(statearr_16564_18875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (1))){
var state_16547__$1 = state_16547;
var statearr_16566_18876 = state_16547__$1;
(statearr_16566_18876[(2)] = null);

(statearr_16566_18876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (24))){
var inst_16517 = (state_16547[(7)]);
var inst_16535 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16517);
var state_16547__$1 = state_16547;
var statearr_16568_18877 = state_16547__$1;
(statearr_16568_18877[(2)] = inst_16535);

(statearr_16568_18877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (4))){
var inst_16448 = (state_16547[(8)]);
var inst_16448__$1 = (state_16547[(2)]);
var inst_16449 = (inst_16448__$1 == null);
var state_16547__$1 = (function (){var statearr_16569 = state_16547;
(statearr_16569[(8)] = inst_16448__$1);

return statearr_16569;
})();
if(cljs.core.truth_(inst_16449)){
var statearr_16571_18878 = state_16547__$1;
(statearr_16571_18878[(1)] = (5));

} else {
var statearr_16572_18879 = state_16547__$1;
(statearr_16572_18879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (15))){
var inst_16507 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
var statearr_16573_18880 = state_16547__$1;
(statearr_16573_18880[(2)] = inst_16507);

(statearr_16573_18880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (21))){
var inst_16540 = (state_16547[(2)]);
var state_16547__$1 = (function (){var statearr_16576 = state_16547;
(statearr_16576[(9)] = inst_16540);

return statearr_16576;
})();
var statearr_16579_18881 = state_16547__$1;
(statearr_16579_18881[(2)] = null);

(statearr_16579_18881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (13))){
var inst_16479 = (state_16547[(10)]);
var inst_16481 = cljs.core.chunked_seq_QMARK_(inst_16479);
var state_16547__$1 = state_16547;
if(inst_16481){
var statearr_16584_18882 = state_16547__$1;
(statearr_16584_18882[(1)] = (16));

} else {
var statearr_16585_18883 = state_16547__$1;
(statearr_16585_18883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (22))){
var inst_16532 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
if(cljs.core.truth_(inst_16532)){
var statearr_16590_18887 = state_16547__$1;
(statearr_16590_18887[(1)] = (23));

} else {
var statearr_16594_18888 = state_16547__$1;
(statearr_16594_18888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (6))){
var inst_16519 = (state_16547[(11)]);
var inst_16517 = (state_16547[(7)]);
var inst_16448 = (state_16547[(8)]);
var inst_16517__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16448) : topic_fn.call(null,inst_16448));
var inst_16518 = cljs.core.deref(mults);
var inst_16519__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16518,inst_16517__$1);
var state_16547__$1 = (function (){var statearr_16596 = state_16547;
(statearr_16596[(11)] = inst_16519__$1);

(statearr_16596[(7)] = inst_16517__$1);

return statearr_16596;
})();
if(cljs.core.truth_(inst_16519__$1)){
var statearr_16600_18890 = state_16547__$1;
(statearr_16600_18890[(1)] = (19));

} else {
var statearr_16601_18891 = state_16547__$1;
(statearr_16601_18891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (25))){
var inst_16537 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
var statearr_16604_18892 = state_16547__$1;
(statearr_16604_18892[(2)] = inst_16537);

(statearr_16604_18892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (17))){
var inst_16479 = (state_16547[(10)]);
var inst_16497 = cljs.core.first(inst_16479);
var inst_16499 = cljs.core.async.muxch_STAR_(inst_16497);
var inst_16500 = cljs.core.async.close_BANG_(inst_16499);
var inst_16501 = cljs.core.next(inst_16479);
var inst_16458 = inst_16501;
var inst_16459 = null;
var inst_16460 = (0);
var inst_16461 = (0);
var state_16547__$1 = (function (){var statearr_16605 = state_16547;
(statearr_16605[(12)] = inst_16461);

(statearr_16605[(13)] = inst_16460);

(statearr_16605[(14)] = inst_16458);

(statearr_16605[(15)] = inst_16500);

(statearr_16605[(16)] = inst_16459);

return statearr_16605;
})();
var statearr_16606_18893 = state_16547__$1;
(statearr_16606_18893[(2)] = null);

(statearr_16606_18893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (3))){
var inst_16545 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16547__$1,inst_16545);
} else {
if((state_val_16548 === (12))){
var inst_16509 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
var statearr_16611_18898 = state_16547__$1;
(statearr_16611_18898[(2)] = inst_16509);

(statearr_16611_18898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (2))){
var state_16547__$1 = state_16547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16547__$1,(4),ch);
} else {
if((state_val_16548 === (23))){
var state_16547__$1 = state_16547;
var statearr_16623_18899 = state_16547__$1;
(statearr_16623_18899[(2)] = null);

(statearr_16623_18899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (19))){
var inst_16519 = (state_16547[(11)]);
var inst_16448 = (state_16547[(8)]);
var inst_16530 = cljs.core.async.muxch_STAR_(inst_16519);
var state_16547__$1 = state_16547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16547__$1,(22),inst_16530,inst_16448);
} else {
if((state_val_16548 === (11))){
var inst_16479 = (state_16547[(10)]);
var inst_16458 = (state_16547[(14)]);
var inst_16479__$1 = cljs.core.seq(inst_16458);
var state_16547__$1 = (function (){var statearr_16639 = state_16547;
(statearr_16639[(10)] = inst_16479__$1);

return statearr_16639;
})();
if(inst_16479__$1){
var statearr_16641_18900 = state_16547__$1;
(statearr_16641_18900[(1)] = (13));

} else {
var statearr_16642_18901 = state_16547__$1;
(statearr_16642_18901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (9))){
var inst_16511 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
var statearr_16643_18902 = state_16547__$1;
(statearr_16643_18902[(2)] = inst_16511);

(statearr_16643_18902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (5))){
var inst_16455 = cljs.core.deref(mults);
var inst_16456 = cljs.core.vals(inst_16455);
var inst_16457 = cljs.core.seq(inst_16456);
var inst_16458 = inst_16457;
var inst_16459 = null;
var inst_16460 = (0);
var inst_16461 = (0);
var state_16547__$1 = (function (){var statearr_16645 = state_16547;
(statearr_16645[(12)] = inst_16461);

(statearr_16645[(13)] = inst_16460);

(statearr_16645[(14)] = inst_16458);

(statearr_16645[(16)] = inst_16459);

return statearr_16645;
})();
var statearr_16647_18903 = state_16547__$1;
(statearr_16647_18903[(2)] = null);

(statearr_16647_18903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (14))){
var state_16547__$1 = state_16547;
var statearr_16655_18904 = state_16547__$1;
(statearr_16655_18904[(2)] = null);

(statearr_16655_18904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (16))){
var inst_16479 = (state_16547[(10)]);
var inst_16483 = cljs.core.chunk_first(inst_16479);
var inst_16484 = cljs.core.chunk_rest(inst_16479);
var inst_16486 = cljs.core.count(inst_16483);
var inst_16458 = inst_16484;
var inst_16459 = inst_16483;
var inst_16460 = inst_16486;
var inst_16461 = (0);
var state_16547__$1 = (function (){var statearr_16656 = state_16547;
(statearr_16656[(12)] = inst_16461);

(statearr_16656[(13)] = inst_16460);

(statearr_16656[(14)] = inst_16458);

(statearr_16656[(16)] = inst_16459);

return statearr_16656;
})();
var statearr_16657_18905 = state_16547__$1;
(statearr_16657_18905[(2)] = null);

(statearr_16657_18905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (10))){
var inst_16461 = (state_16547[(12)]);
var inst_16460 = (state_16547[(13)]);
var inst_16458 = (state_16547[(14)]);
var inst_16459 = (state_16547[(16)]);
var inst_16471 = cljs.core._nth(inst_16459,inst_16461);
var inst_16473 = cljs.core.async.muxch_STAR_(inst_16471);
var inst_16474 = cljs.core.async.close_BANG_(inst_16473);
var inst_16476 = (inst_16461 + (1));
var tmp16648 = inst_16460;
var tmp16649 = inst_16458;
var tmp16650 = inst_16459;
var inst_16458__$1 = tmp16649;
var inst_16459__$1 = tmp16650;
var inst_16460__$1 = tmp16648;
var inst_16461__$1 = inst_16476;
var state_16547__$1 = (function (){var statearr_16659 = state_16547;
(statearr_16659[(12)] = inst_16461__$1);

(statearr_16659[(13)] = inst_16460__$1);

(statearr_16659[(14)] = inst_16458__$1);

(statearr_16659[(17)] = inst_16474);

(statearr_16659[(16)] = inst_16459__$1);

return statearr_16659;
})();
var statearr_16660_18906 = state_16547__$1;
(statearr_16660_18906[(2)] = null);

(statearr_16660_18906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (18))){
var inst_16504 = (state_16547[(2)]);
var state_16547__$1 = state_16547;
var statearr_16661_18907 = state_16547__$1;
(statearr_16661_18907[(2)] = inst_16504);

(statearr_16661_18907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16548 === (8))){
var inst_16461 = (state_16547[(12)]);
var inst_16460 = (state_16547[(13)]);
var inst_16463 = (inst_16461 < inst_16460);
var inst_16464 = inst_16463;
var state_16547__$1 = state_16547;
if(cljs.core.truth_(inst_16464)){
var statearr_16662_18908 = state_16547__$1;
(statearr_16662_18908[(1)] = (10));

} else {
var statearr_16663_18909 = state_16547__$1;
(statearr_16663_18909[(1)] = (11));

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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_16665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16665[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_16665[(1)] = (1));

return statearr_16665;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_16547){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_16547);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e16674){var ex__13676__auto__ = e16674;
var statearr_16676_18917 = state_16547;
(statearr_16676_18917[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_16547[(4)]))){
var statearr_16678_18918 = state_16547;
(statearr_16678_18918[(1)] = cljs.core.first((state_16547[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18919 = state_16547;
state_16547 = G__18919;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_16547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_16547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_16683 = f__14189__auto__();
(statearr_16683[(6)] = c__14188__auto___18873);

return statearr_16683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
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
var G__16685 = arguments.length;
switch (G__16685) {
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
var G__16703 = arguments.length;
switch (G__16703) {
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
var G__16710 = arguments.length;
switch (G__16710) {
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
var c__14188__auto___18935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_16762){
var state_val_16763 = (state_16762[(1)]);
if((state_val_16763 === (7))){
var state_16762__$1 = state_16762;
var statearr_16766_18936 = state_16762__$1;
(statearr_16766_18936[(2)] = null);

(statearr_16766_18936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (1))){
var state_16762__$1 = state_16762;
var statearr_16768_18937 = state_16762__$1;
(statearr_16768_18937[(2)] = null);

(statearr_16768_18937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (4))){
var inst_16716 = (state_16762[(7)]);
var inst_16717 = (state_16762[(8)]);
var inst_16719 = (inst_16717 < inst_16716);
var state_16762__$1 = state_16762;
if(cljs.core.truth_(inst_16719)){
var statearr_16769_18942 = state_16762__$1;
(statearr_16769_18942[(1)] = (6));

} else {
var statearr_16770_18943 = state_16762__$1;
(statearr_16770_18943[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (15))){
var inst_16745 = (state_16762[(9)]);
var inst_16751 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16745);
var state_16762__$1 = state_16762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16762__$1,(17),out,inst_16751);
} else {
if((state_val_16763 === (13))){
var inst_16745 = (state_16762[(9)]);
var inst_16745__$1 = (state_16762[(2)]);
var inst_16747 = cljs.core.some(cljs.core.nil_QMARK_,inst_16745__$1);
var state_16762__$1 = (function (){var statearr_16771 = state_16762;
(statearr_16771[(9)] = inst_16745__$1);

return statearr_16771;
})();
if(cljs.core.truth_(inst_16747)){
var statearr_16772_18944 = state_16762__$1;
(statearr_16772_18944[(1)] = (14));

} else {
var statearr_16773_18945 = state_16762__$1;
(statearr_16773_18945[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (6))){
var state_16762__$1 = state_16762;
var statearr_16776_18946 = state_16762__$1;
(statearr_16776_18946[(2)] = null);

(statearr_16776_18946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (17))){
var inst_16753 = (state_16762[(2)]);
var state_16762__$1 = (function (){var statearr_16781 = state_16762;
(statearr_16781[(10)] = inst_16753);

return statearr_16781;
})();
var statearr_16782_18947 = state_16762__$1;
(statearr_16782_18947[(2)] = null);

(statearr_16782_18947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (3))){
var inst_16758 = (state_16762[(2)]);
var state_16762__$1 = state_16762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16762__$1,inst_16758);
} else {
if((state_val_16763 === (12))){
var _ = (function (){var statearr_16785 = state_16762;
(statearr_16785[(4)] = cljs.core.rest((state_16762[(4)])));

return statearr_16785;
})();
var state_16762__$1 = state_16762;
var ex16780 = (state_16762__$1[(2)]);
var statearr_16789_18948 = state_16762__$1;
(statearr_16789_18948[(5)] = ex16780);


if((ex16780 instanceof Object)){
var statearr_16794_18949 = state_16762__$1;
(statearr_16794_18949[(1)] = (11));

(statearr_16794_18949[(5)] = null);

} else {
throw ex16780;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (2))){
var inst_16715 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16716 = cnt;
var inst_16717 = (0);
var state_16762__$1 = (function (){var statearr_16809 = state_16762;
(statearr_16809[(7)] = inst_16716);

(statearr_16809[(8)] = inst_16717);

(statearr_16809[(11)] = inst_16715);

return statearr_16809;
})();
var statearr_16810_18950 = state_16762__$1;
(statearr_16810_18950[(2)] = null);

(statearr_16810_18950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (11))){
var inst_16723 = (state_16762[(2)]);
var inst_16724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16762__$1 = (function (){var statearr_16811 = state_16762;
(statearr_16811[(12)] = inst_16723);

return statearr_16811;
})();
var statearr_16812_18951 = state_16762__$1;
(statearr_16812_18951[(2)] = inst_16724);

(statearr_16812_18951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (9))){
var inst_16717 = (state_16762[(8)]);
var _ = (function (){var statearr_16815 = state_16762;
(statearr_16815[(4)] = cljs.core.cons((12),(state_16762[(4)])));

return statearr_16815;
})();
var inst_16730 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16717) : chs__$1.call(null,inst_16717));
var inst_16731 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16717) : done.call(null,inst_16717));
var inst_16732 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16730,inst_16731);
var ___$1 = (function (){var statearr_16816 = state_16762;
(statearr_16816[(4)] = cljs.core.rest((state_16762[(4)])));

return statearr_16816;
})();
var state_16762__$1 = state_16762;
var statearr_16817_18953 = state_16762__$1;
(statearr_16817_18953[(2)] = inst_16732);

(statearr_16817_18953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (5))){
var inst_16742 = (state_16762[(2)]);
var state_16762__$1 = (function (){var statearr_16820 = state_16762;
(statearr_16820[(13)] = inst_16742);

return statearr_16820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16762__$1,(13),dchan);
} else {
if((state_val_16763 === (14))){
var inst_16749 = cljs.core.async.close_BANG_(out);
var state_16762__$1 = state_16762;
var statearr_16828_18955 = state_16762__$1;
(statearr_16828_18955[(2)] = inst_16749);

(statearr_16828_18955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (16))){
var inst_16756 = (state_16762[(2)]);
var state_16762__$1 = state_16762;
var statearr_16834_18960 = state_16762__$1;
(statearr_16834_18960[(2)] = inst_16756);

(statearr_16834_18960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (10))){
var inst_16717 = (state_16762[(8)]);
var inst_16735 = (state_16762[(2)]);
var inst_16736 = (inst_16717 + (1));
var inst_16717__$1 = inst_16736;
var state_16762__$1 = (function (){var statearr_16837 = state_16762;
(statearr_16837[(14)] = inst_16735);

(statearr_16837[(8)] = inst_16717__$1);

return statearr_16837;
})();
var statearr_16839_18961 = state_16762__$1;
(statearr_16839_18961[(2)] = null);

(statearr_16839_18961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16763 === (8))){
var inst_16740 = (state_16762[(2)]);
var state_16762__$1 = state_16762;
var statearr_16848_18966 = state_16762__$1;
(statearr_16848_18966[(2)] = inst_16740);

(statearr_16848_18966[(1)] = (5));


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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_16852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16852[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_16852[(1)] = (1));

return statearr_16852;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_16762){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_16762);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e16853){var ex__13676__auto__ = e16853;
var statearr_16855_18967 = state_16762;
(statearr_16855_18967[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_16762[(4)]))){
var statearr_16860_18968 = state_16762;
(statearr_16860_18968[(1)] = cljs.core.first((state_16762[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18969 = state_16762;
state_16762 = G__18969;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_16762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_16762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_16871 = f__14189__auto__();
(statearr_16871[(6)] = c__14188__auto___18935);

return statearr_16871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
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
var G__16880 = arguments.length;
switch (G__16880) {
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
var c__14188__auto___18971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_16934){
var state_val_16935 = (state_16934[(1)]);
if((state_val_16935 === (7))){
var inst_16901 = (state_16934[(7)]);
var inst_16899 = (state_16934[(8)]);
var inst_16899__$1 = (state_16934[(2)]);
var inst_16901__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16899__$1,(0),null);
var inst_16902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16899__$1,(1),null);
var inst_16903 = (inst_16901__$1 == null);
var state_16934__$1 = (function (){var statearr_16948 = state_16934;
(statearr_16948[(7)] = inst_16901__$1);

(statearr_16948[(9)] = inst_16902);

(statearr_16948[(8)] = inst_16899__$1);

return statearr_16948;
})();
if(cljs.core.truth_(inst_16903)){
var statearr_16950_18972 = state_16934__$1;
(statearr_16950_18972[(1)] = (8));

} else {
var statearr_16955_18973 = state_16934__$1;
(statearr_16955_18973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (1))){
var inst_16887 = cljs.core.vec(chs);
var inst_16888 = inst_16887;
var state_16934__$1 = (function (){var statearr_16960 = state_16934;
(statearr_16960[(10)] = inst_16888);

return statearr_16960;
})();
var statearr_16964_18974 = state_16934__$1;
(statearr_16964_18974[(2)] = null);

(statearr_16964_18974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (4))){
var inst_16888 = (state_16934[(10)]);
var state_16934__$1 = state_16934;
return cljs.core.async.ioc_alts_BANG_(state_16934__$1,(7),inst_16888);
} else {
if((state_val_16935 === (6))){
var inst_16930 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16965_18975 = state_16934__$1;
(statearr_16965_18975[(2)] = inst_16930);

(statearr_16965_18975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (3))){
var inst_16932 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16934__$1,inst_16932);
} else {
if((state_val_16935 === (2))){
var inst_16888 = (state_16934[(10)]);
var inst_16890 = cljs.core.count(inst_16888);
var inst_16891 = (inst_16890 > (0));
var state_16934__$1 = state_16934;
if(cljs.core.truth_(inst_16891)){
var statearr_16974_18976 = state_16934__$1;
(statearr_16974_18976[(1)] = (4));

} else {
var statearr_16979_18977 = state_16934__$1;
(statearr_16979_18977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (11))){
var inst_16888 = (state_16934[(10)]);
var inst_16917 = (state_16934[(2)]);
var tmp16969 = inst_16888;
var inst_16888__$1 = tmp16969;
var state_16934__$1 = (function (){var statearr_16982 = state_16934;
(statearr_16982[(10)] = inst_16888__$1);

(statearr_16982[(11)] = inst_16917);

return statearr_16982;
})();
var statearr_16989_18978 = state_16934__$1;
(statearr_16989_18978[(2)] = null);

(statearr_16989_18978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (9))){
var inst_16901 = (state_16934[(7)]);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16934__$1,(11),out,inst_16901);
} else {
if((state_val_16935 === (5))){
var inst_16928 = cljs.core.async.close_BANG_(out);
var state_16934__$1 = state_16934;
var statearr_17005_18979 = state_16934__$1;
(statearr_17005_18979[(2)] = inst_16928);

(statearr_17005_18979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (10))){
var inst_16920 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_17006_18980 = state_16934__$1;
(statearr_17006_18980[(2)] = inst_16920);

(statearr_17006_18980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (8))){
var inst_16901 = (state_16934[(7)]);
var inst_16888 = (state_16934[(10)]);
var inst_16902 = (state_16934[(9)]);
var inst_16899 = (state_16934[(8)]);
var inst_16908 = (function (){var cs = inst_16888;
var vec__16895 = inst_16899;
var v = inst_16901;
var c = inst_16902;
return (function (p1__16876_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16876_SHARP_);
});
})();
var inst_16913 = cljs.core.filterv(inst_16908,inst_16888);
var inst_16888__$1 = inst_16913;
var state_16934__$1 = (function (){var statearr_17007 = state_16934;
(statearr_17007[(10)] = inst_16888__$1);

return statearr_17007;
})();
var statearr_17008_18985 = state_16934__$1;
(statearr_17008_18985[(2)] = null);

(statearr_17008_18985[(1)] = (2));


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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_17013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17013[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_17013[(1)] = (1));

return statearr_17013;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_16934){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_16934);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e17014){var ex__13676__auto__ = e17014;
var statearr_17015_18986 = state_16934;
(statearr_17015_18986[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_16934[(4)]))){
var statearr_17018_18987 = state_16934;
(statearr_17018_18987[(1)] = cljs.core.first((state_16934[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18988 = state_16934;
state_16934 = G__18988;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_16934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_16934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_17020 = f__14189__auto__();
(statearr_17020[(6)] = c__14188__auto___18971);

return statearr_17020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
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
var G__17025 = arguments.length;
switch (G__17025) {
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
var c__14188__auto___18991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_17058){
var state_val_17059 = (state_17058[(1)]);
if((state_val_17059 === (7))){
var inst_17040 = (state_17058[(7)]);
var inst_17040__$1 = (state_17058[(2)]);
var inst_17041 = (inst_17040__$1 == null);
var inst_17042 = cljs.core.not(inst_17041);
var state_17058__$1 = (function (){var statearr_17065 = state_17058;
(statearr_17065[(7)] = inst_17040__$1);

return statearr_17065;
})();
if(inst_17042){
var statearr_17066_18993 = state_17058__$1;
(statearr_17066_18993[(1)] = (8));

} else {
var statearr_17067_18994 = state_17058__$1;
(statearr_17067_18994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (1))){
var inst_17031 = (0);
var state_17058__$1 = (function (){var statearr_17068 = state_17058;
(statearr_17068[(8)] = inst_17031);

return statearr_17068;
})();
var statearr_17069_19000 = state_17058__$1;
(statearr_17069_19000[(2)] = null);

(statearr_17069_19000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (4))){
var state_17058__$1 = state_17058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17058__$1,(7),ch);
} else {
if((state_val_17059 === (6))){
var inst_17053 = (state_17058[(2)]);
var state_17058__$1 = state_17058;
var statearr_17070_19001 = state_17058__$1;
(statearr_17070_19001[(2)] = inst_17053);

(statearr_17070_19001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (3))){
var inst_17055 = (state_17058[(2)]);
var inst_17056 = cljs.core.async.close_BANG_(out);
var state_17058__$1 = (function (){var statearr_17071 = state_17058;
(statearr_17071[(9)] = inst_17055);

return statearr_17071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17058__$1,inst_17056);
} else {
if((state_val_17059 === (2))){
var inst_17031 = (state_17058[(8)]);
var inst_17035 = (inst_17031 < n);
var state_17058__$1 = state_17058;
if(cljs.core.truth_(inst_17035)){
var statearr_17072_19006 = state_17058__$1;
(statearr_17072_19006[(1)] = (4));

} else {
var statearr_17073_19007 = state_17058__$1;
(statearr_17073_19007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (11))){
var inst_17031 = (state_17058[(8)]);
var inst_17045 = (state_17058[(2)]);
var inst_17046 = (inst_17031 + (1));
var inst_17031__$1 = inst_17046;
var state_17058__$1 = (function (){var statearr_17078 = state_17058;
(statearr_17078[(8)] = inst_17031__$1);

(statearr_17078[(10)] = inst_17045);

return statearr_17078;
})();
var statearr_17079_19009 = state_17058__$1;
(statearr_17079_19009[(2)] = null);

(statearr_17079_19009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (9))){
var state_17058__$1 = state_17058;
var statearr_17080_19010 = state_17058__$1;
(statearr_17080_19010[(2)] = null);

(statearr_17080_19010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (5))){
var state_17058__$1 = state_17058;
var statearr_17081_19012 = state_17058__$1;
(statearr_17081_19012[(2)] = null);

(statearr_17081_19012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (10))){
var inst_17050 = (state_17058[(2)]);
var state_17058__$1 = state_17058;
var statearr_17082_19013 = state_17058__$1;
(statearr_17082_19013[(2)] = inst_17050);

(statearr_17082_19013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (8))){
var inst_17040 = (state_17058[(7)]);
var state_17058__$1 = state_17058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17058__$1,(11),out,inst_17040);
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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_17089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17089[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_17089[(1)] = (1));

return statearr_17089;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_17058){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_17058);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e17091){var ex__13676__auto__ = e17091;
var statearr_17093_19016 = state_17058;
(statearr_17093_19016[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_17058[(4)]))){
var statearr_17096_19021 = state_17058;
(statearr_17096_19021[(1)] = cljs.core.first((state_17058[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19022 = state_17058;
state_17058 = G__19022;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_17058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_17058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_17103 = f__14189__auto__();
(statearr_17103[(6)] = c__14188__auto___18991);

return statearr_17103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17108 = (function (f,ch,meta17109){
this.f = f;
this.ch = ch;
this.meta17109 = meta17109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17110,meta17109__$1){
var self__ = this;
var _17110__$1 = this;
return (new cljs.core.async.t_cljs$core$async17108(self__.f,self__.ch,meta17109__$1));
}));

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17110){
var self__ = this;
var _17110__$1 = this;
return self__.meta17109;
}));

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17116 = (function (f,ch,meta17109,_,fn1,meta17117){
this.f = f;
this.ch = ch;
this.meta17109 = meta17109;
this._ = _;
this.fn1 = fn1;
this.meta17117 = meta17117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17118,meta17117__$1){
var self__ = this;
var _17118__$1 = this;
return (new cljs.core.async.t_cljs$core$async17116(self__.f,self__.ch,self__.meta17109,self__._,self__.fn1,meta17117__$1));
}));

(cljs.core.async.t_cljs$core$async17116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17118){
var self__ = this;
var _17118__$1 = this;
return self__.meta17117;
}));

(cljs.core.async.t_cljs$core$async17116.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17105_SHARP_){
var G__17129 = (((p1__17105_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17105_SHARP_) : self__.f.call(null,p1__17105_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17129) : f1.call(null,G__17129));
});
}));

(cljs.core.async.t_cljs$core$async17116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17109","meta17109",161781377,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17108","cljs.core.async/t_cljs$core$async17108",-905702361,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17117","meta17117",-1312802265,null)], null);
}));

(cljs.core.async.t_cljs$core$async17116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17116");

(cljs.core.async.t_cljs$core$async17116.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17116.
 */
cljs.core.async.__GT_t_cljs$core$async17116 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17116(f__$1,ch__$1,meta17109__$1,___$2,fn1__$1,meta17117){
return (new cljs.core.async.t_cljs$core$async17116(f__$1,ch__$1,meta17109__$1,___$2,fn1__$1,meta17117));
});

}

return (new cljs.core.async.t_cljs$core$async17116(self__.f,self__.ch,self__.meta17109,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17133 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17133) : self__.f.call(null,G__17133));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17109","meta17109",161781377,null)], null);
}));

(cljs.core.async.t_cljs$core$async17108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17108");

(cljs.core.async.t_cljs$core$async17108.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17108.
 */
cljs.core.async.__GT_t_cljs$core$async17108 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17108(f__$1,ch__$1,meta17109){
return (new cljs.core.async.t_cljs$core$async17108(f__$1,ch__$1,meta17109));
});

}

return (new cljs.core.async.t_cljs$core$async17108(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17140 = (function (f,ch,meta17141){
this.f = f;
this.ch = ch;
this.meta17141 = meta17141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17142,meta17141__$1){
var self__ = this;
var _17142__$1 = this;
return (new cljs.core.async.t_cljs$core$async17140(self__.f,self__.ch,meta17141__$1));
}));

(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17142){
var self__ = this;
var _17142__$1 = this;
return self__.meta17141;
}));

(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17141","meta17141",-1821636776,null)], null);
}));

(cljs.core.async.t_cljs$core$async17140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17140");

(cljs.core.async.t_cljs$core$async17140.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17140.
 */
cljs.core.async.__GT_t_cljs$core$async17140 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17140(f__$1,ch__$1,meta17141){
return (new cljs.core.async.t_cljs$core$async17140(f__$1,ch__$1,meta17141));
});

}

return (new cljs.core.async.t_cljs$core$async17140(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17158 = (function (p,ch,meta17159){
this.p = p;
this.ch = ch;
this.meta17159 = meta17159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17160,meta17159__$1){
var self__ = this;
var _17160__$1 = this;
return (new cljs.core.async.t_cljs$core$async17158(self__.p,self__.ch,meta17159__$1));
}));

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17160){
var self__ = this;
var _17160__$1 = this;
return self__.meta17159;
}));

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17159","meta17159",-1426550520,null)], null);
}));

(cljs.core.async.t_cljs$core$async17158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17158");

(cljs.core.async.t_cljs$core$async17158.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17158.
 */
cljs.core.async.__GT_t_cljs$core$async17158 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17158(p__$1,ch__$1,meta17159){
return (new cljs.core.async.t_cljs$core$async17158(p__$1,ch__$1,meta17159));
});

}

return (new cljs.core.async.t_cljs$core$async17158(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17180 = arguments.length;
switch (G__17180) {
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
var c__14188__auto___19063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_17214){
var state_val_17217 = (state_17214[(1)]);
if((state_val_17217 === (7))){
var inst_17210 = (state_17214[(2)]);
var state_17214__$1 = state_17214;
var statearr_17227_19064 = state_17214__$1;
(statearr_17227_19064[(2)] = inst_17210);

(statearr_17227_19064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (1))){
var state_17214__$1 = state_17214;
var statearr_17229_19065 = state_17214__$1;
(statearr_17229_19065[(2)] = null);

(statearr_17229_19065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (4))){
var inst_17193 = (state_17214[(7)]);
var inst_17193__$1 = (state_17214[(2)]);
var inst_17194 = (inst_17193__$1 == null);
var state_17214__$1 = (function (){var statearr_17231 = state_17214;
(statearr_17231[(7)] = inst_17193__$1);

return statearr_17231;
})();
if(cljs.core.truth_(inst_17194)){
var statearr_17232_19076 = state_17214__$1;
(statearr_17232_19076[(1)] = (5));

} else {
var statearr_17233_19077 = state_17214__$1;
(statearr_17233_19077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (6))){
var inst_17193 = (state_17214[(7)]);
var inst_17200 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17193) : p.call(null,inst_17193));
var state_17214__$1 = state_17214;
if(cljs.core.truth_(inst_17200)){
var statearr_17234_19078 = state_17214__$1;
(statearr_17234_19078[(1)] = (8));

} else {
var statearr_17235_19079 = state_17214__$1;
(statearr_17235_19079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (3))){
var inst_17212 = (state_17214[(2)]);
var state_17214__$1 = state_17214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17214__$1,inst_17212);
} else {
if((state_val_17217 === (2))){
var state_17214__$1 = state_17214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17214__$1,(4),ch);
} else {
if((state_val_17217 === (11))){
var inst_17204 = (state_17214[(2)]);
var state_17214__$1 = state_17214;
var statearr_17242_19098 = state_17214__$1;
(statearr_17242_19098[(2)] = inst_17204);

(statearr_17242_19098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (9))){
var state_17214__$1 = state_17214;
var statearr_17243_19099 = state_17214__$1;
(statearr_17243_19099[(2)] = null);

(statearr_17243_19099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (5))){
var inst_17197 = cljs.core.async.close_BANG_(out);
var state_17214__$1 = state_17214;
var statearr_17245_19108 = state_17214__$1;
(statearr_17245_19108[(2)] = inst_17197);

(statearr_17245_19108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (10))){
var inst_17207 = (state_17214[(2)]);
var state_17214__$1 = (function (){var statearr_17247 = state_17214;
(statearr_17247[(8)] = inst_17207);

return statearr_17247;
})();
var statearr_17248_19125 = state_17214__$1;
(statearr_17248_19125[(2)] = null);

(statearr_17248_19125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17217 === (8))){
var inst_17193 = (state_17214[(7)]);
var state_17214__$1 = state_17214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17214__$1,(11),out,inst_17193);
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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_17257 = [null,null,null,null,null,null,null,null,null];
(statearr_17257[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_17257[(1)] = (1));

return statearr_17257;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_17214){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_17214);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e17264){var ex__13676__auto__ = e17264;
var statearr_17265_19133 = state_17214;
(statearr_17265_19133[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_17214[(4)]))){
var statearr_17272_19138 = state_17214;
(statearr_17272_19138[(1)] = cljs.core.first((state_17214[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19139 = state_17214;
state_17214 = G__19139;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_17214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_17214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_17274 = f__14189__auto__();
(statearr_17274[(6)] = c__14188__auto___19063);

return statearr_17274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17291 = arguments.length;
switch (G__17291) {
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
var c__14188__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_17396){
var state_val_17397 = (state_17396[(1)]);
if((state_val_17397 === (7))){
var inst_17392 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17410_19163 = state_17396__$1;
(statearr_17410_19163[(2)] = inst_17392);

(statearr_17410_19163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (20))){
var inst_17359 = (state_17396[(7)]);
var inst_17373 = (state_17396[(2)]);
var inst_17374 = cljs.core.next(inst_17359);
var inst_17336 = inst_17374;
var inst_17337 = null;
var inst_17338 = (0);
var inst_17339 = (0);
var state_17396__$1 = (function (){var statearr_17411 = state_17396;
(statearr_17411[(8)] = inst_17338);

(statearr_17411[(9)] = inst_17336);

(statearr_17411[(10)] = inst_17337);

(statearr_17411[(11)] = inst_17373);

(statearr_17411[(12)] = inst_17339);

return statearr_17411;
})();
var statearr_17414_19173 = state_17396__$1;
(statearr_17414_19173[(2)] = null);

(statearr_17414_19173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (1))){
var state_17396__$1 = state_17396;
var statearr_17417_19174 = state_17396__$1;
(statearr_17417_19174[(2)] = null);

(statearr_17417_19174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (4))){
var inst_17316 = (state_17396[(13)]);
var inst_17316__$1 = (state_17396[(2)]);
var inst_17317 = (inst_17316__$1 == null);
var state_17396__$1 = (function (){var statearr_17421 = state_17396;
(statearr_17421[(13)] = inst_17316__$1);

return statearr_17421;
})();
if(cljs.core.truth_(inst_17317)){
var statearr_17424_19176 = state_17396__$1;
(statearr_17424_19176[(1)] = (5));

} else {
var statearr_17426_19177 = state_17396__$1;
(statearr_17426_19177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (15))){
var state_17396__$1 = state_17396;
var statearr_17432_19178 = state_17396__$1;
(statearr_17432_19178[(2)] = null);

(statearr_17432_19178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (21))){
var state_17396__$1 = state_17396;
var statearr_17433_19179 = state_17396__$1;
(statearr_17433_19179[(2)] = null);

(statearr_17433_19179[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (13))){
var inst_17338 = (state_17396[(8)]);
var inst_17336 = (state_17396[(9)]);
var inst_17337 = (state_17396[(10)]);
var inst_17339 = (state_17396[(12)]);
var inst_17354 = (state_17396[(2)]);
var inst_17356 = (inst_17339 + (1));
var tmp17427 = inst_17338;
var tmp17428 = inst_17336;
var tmp17429 = inst_17337;
var inst_17336__$1 = tmp17428;
var inst_17337__$1 = tmp17429;
var inst_17338__$1 = tmp17427;
var inst_17339__$1 = inst_17356;
var state_17396__$1 = (function (){var statearr_17435 = state_17396;
(statearr_17435[(8)] = inst_17338__$1);

(statearr_17435[(9)] = inst_17336__$1);

(statearr_17435[(10)] = inst_17337__$1);

(statearr_17435[(12)] = inst_17339__$1);

(statearr_17435[(14)] = inst_17354);

return statearr_17435;
})();
var statearr_17436_19181 = state_17396__$1;
(statearr_17436_19181[(2)] = null);

(statearr_17436_19181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (22))){
var state_17396__$1 = state_17396;
var statearr_17437_19182 = state_17396__$1;
(statearr_17437_19182[(2)] = null);

(statearr_17437_19182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (6))){
var inst_17316 = (state_17396[(13)]);
var inst_17331 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17316) : f.call(null,inst_17316));
var inst_17332 = cljs.core.seq(inst_17331);
var inst_17336 = inst_17332;
var inst_17337 = null;
var inst_17338 = (0);
var inst_17339 = (0);
var state_17396__$1 = (function (){var statearr_17438 = state_17396;
(statearr_17438[(8)] = inst_17338);

(statearr_17438[(9)] = inst_17336);

(statearr_17438[(10)] = inst_17337);

(statearr_17438[(12)] = inst_17339);

return statearr_17438;
})();
var statearr_17439_19185 = state_17396__$1;
(statearr_17439_19185[(2)] = null);

(statearr_17439_19185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (17))){
var inst_17359 = (state_17396[(7)]);
var inst_17363 = cljs.core.chunk_first(inst_17359);
var inst_17367 = cljs.core.chunk_rest(inst_17359);
var inst_17368 = cljs.core.count(inst_17363);
var inst_17336 = inst_17367;
var inst_17337 = inst_17363;
var inst_17338 = inst_17368;
var inst_17339 = (0);
var state_17396__$1 = (function (){var statearr_17444 = state_17396;
(statearr_17444[(8)] = inst_17338);

(statearr_17444[(9)] = inst_17336);

(statearr_17444[(10)] = inst_17337);

(statearr_17444[(12)] = inst_17339);

return statearr_17444;
})();
var statearr_17449_19190 = state_17396__$1;
(statearr_17449_19190[(2)] = null);

(statearr_17449_19190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (3))){
var inst_17394 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17396__$1,inst_17394);
} else {
if((state_val_17397 === (12))){
var inst_17382 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17455_19193 = state_17396__$1;
(statearr_17455_19193[(2)] = inst_17382);

(statearr_17455_19193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (2))){
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17396__$1,(4),in$);
} else {
if((state_val_17397 === (23))){
var inst_17390 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17456_19195 = state_17396__$1;
(statearr_17456_19195[(2)] = inst_17390);

(statearr_17456_19195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (19))){
var inst_17377 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17457_19196 = state_17396__$1;
(statearr_17457_19196[(2)] = inst_17377);

(statearr_17457_19196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (11))){
var inst_17336 = (state_17396[(9)]);
var inst_17359 = (state_17396[(7)]);
var inst_17359__$1 = cljs.core.seq(inst_17336);
var state_17396__$1 = (function (){var statearr_17458 = state_17396;
(statearr_17458[(7)] = inst_17359__$1);

return statearr_17458;
})();
if(inst_17359__$1){
var statearr_17459_19197 = state_17396__$1;
(statearr_17459_19197[(1)] = (14));

} else {
var statearr_17460_19198 = state_17396__$1;
(statearr_17460_19198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (9))){
var inst_17384 = (state_17396[(2)]);
var inst_17385 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17396__$1 = (function (){var statearr_17461 = state_17396;
(statearr_17461[(15)] = inst_17384);

return statearr_17461;
})();
if(cljs.core.truth_(inst_17385)){
var statearr_17462_19199 = state_17396__$1;
(statearr_17462_19199[(1)] = (21));

} else {
var statearr_17463_19200 = state_17396__$1;
(statearr_17463_19200[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (5))){
var inst_17321 = cljs.core.async.close_BANG_(out);
var state_17396__$1 = state_17396;
var statearr_17464_19201 = state_17396__$1;
(statearr_17464_19201[(2)] = inst_17321);

(statearr_17464_19201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (14))){
var inst_17359 = (state_17396[(7)]);
var inst_17361 = cljs.core.chunked_seq_QMARK_(inst_17359);
var state_17396__$1 = state_17396;
if(inst_17361){
var statearr_17466_19205 = state_17396__$1;
(statearr_17466_19205[(1)] = (17));

} else {
var statearr_17467_19206 = state_17396__$1;
(statearr_17467_19206[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (16))){
var inst_17380 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17468_19207 = state_17396__$1;
(statearr_17468_19207[(2)] = inst_17380);

(statearr_17468_19207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (10))){
var inst_17337 = (state_17396[(10)]);
var inst_17339 = (state_17396[(12)]);
var inst_17348 = cljs.core._nth(inst_17337,inst_17339);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17396__$1,(13),out,inst_17348);
} else {
if((state_val_17397 === (18))){
var inst_17359 = (state_17396[(7)]);
var inst_17371 = cljs.core.first(inst_17359);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17396__$1,(20),out,inst_17371);
} else {
if((state_val_17397 === (8))){
var inst_17338 = (state_17396[(8)]);
var inst_17339 = (state_17396[(12)]);
var inst_17345 = (inst_17339 < inst_17338);
var inst_17346 = inst_17345;
var state_17396__$1 = state_17396;
if(cljs.core.truth_(inst_17346)){
var statearr_17469_19212 = state_17396__$1;
(statearr_17469_19212[(1)] = (10));

} else {
var statearr_17470_19213 = state_17396__$1;
(statearr_17470_19213[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13673__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13673__auto____0 = (function (){
var statearr_17481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17481[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13673__auto__);

(statearr_17481[(1)] = (1));

return statearr_17481;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13673__auto____1 = (function (state_17396){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_17396);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e17485){var ex__13676__auto__ = e17485;
var statearr_17488_19214 = state_17396;
(statearr_17488_19214[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_17396[(4)]))){
var statearr_17489_19215 = state_17396;
(statearr_17489_19215[(1)] = cljs.core.first((state_17396[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19216 = state_17396;
state_17396 = G__19216;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13673__auto__ = function(state_17396){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13673__auto____1.call(this,state_17396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13673__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13673__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_17499 = f__14189__auto__();
(statearr_17499[(6)] = c__14188__auto__);

return statearr_17499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));

return c__14188__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17529 = arguments.length;
switch (G__17529) {
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
var G__17542 = arguments.length;
switch (G__17542) {
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
var G__17548 = arguments.length;
switch (G__17548) {
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
var c__14188__auto___19236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_17576){
var state_val_17577 = (state_17576[(1)]);
if((state_val_17577 === (7))){
var inst_17571 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
var statearr_17587_19237 = state_17576__$1;
(statearr_17587_19237[(2)] = inst_17571);

(statearr_17587_19237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17577 === (1))){
var inst_17551 = null;
var state_17576__$1 = (function (){var statearr_17588 = state_17576;
(statearr_17588[(7)] = inst_17551);

return statearr_17588;
})();
var statearr_17589_19238 = state_17576__$1;
(statearr_17589_19238[(2)] = null);

(statearr_17589_19238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17577 === (4))){
var inst_17556 = (state_17576[(8)]);
var inst_17556__$1 = (state_17576[(2)]);
var inst_17557 = (inst_17556__$1 == null);
var inst_17558 = cljs.core.not(inst_17557);
var state_17576__$1 = (function (){var statearr_17591 = state_17576;
(statearr_17591[(8)] = inst_17556__$1);

return statearr_17591;
})();
if(inst_17558){
var statearr_17593_19239 = state_17576__$1;
(statearr_17593_19239[(1)] = (5));

} else {
var statearr_17595_19240 = state_17576__$1;
(statearr_17595_19240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17577 === (6))){
var state_17576__$1 = state_17576;
var statearr_17598_19241 = state_17576__$1;
(statearr_17598_19241[(2)] = null);

(statearr_17598_19241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17577 === (3))){
var inst_17573 = (state_17576[(2)]);
var inst_17574 = cljs.core.async.close_BANG_(out);
var state_17576__$1 = (function (){var statearr_17600 = state_17576;
(statearr_17600[(9)] = inst_17573);

return statearr_17600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17576__$1,inst_17574);
} else {
if((state_val_17577 === (2))){
var state_17576__$1 = state_17576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17576__$1,(4),ch);
} else {
if((state_val_17577 === (11))){
var inst_17556 = (state_17576[(8)]);
var inst_17565 = (state_17576[(2)]);
var inst_17551 = inst_17556;
var state_17576__$1 = (function (){var statearr_17603 = state_17576;
(statearr_17603[(10)] = inst_17565);

(statearr_17603[(7)] = inst_17551);

return statearr_17603;
})();
var statearr_17604_19251 = state_17576__$1;
(statearr_17604_19251[(2)] = null);

(statearr_17604_19251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17577 === (9))){
var inst_17556 = (state_17576[(8)]);
var state_17576__$1 = state_17576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17576__$1,(11),out,inst_17556);
} else {
if((state_val_17577 === (5))){
var inst_17551 = (state_17576[(7)]);
var inst_17556 = (state_17576[(8)]);
var inst_17560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17556,inst_17551);
var state_17576__$1 = state_17576;
if(inst_17560){
var statearr_17609_19257 = state_17576__$1;
(statearr_17609_19257[(1)] = (8));

} else {
var statearr_17612_19258 = state_17576__$1;
(statearr_17612_19258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17577 === (10))){
var inst_17568 = (state_17576[(2)]);
var state_17576__$1 = state_17576;
var statearr_17613_19259 = state_17576__$1;
(statearr_17613_19259[(2)] = inst_17568);

(statearr_17613_19259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17577 === (8))){
var inst_17551 = (state_17576[(7)]);
var tmp17608 = inst_17551;
var inst_17551__$1 = tmp17608;
var state_17576__$1 = (function (){var statearr_17615 = state_17576;
(statearr_17615[(7)] = inst_17551__$1);

return statearr_17615;
})();
var statearr_17618_19262 = state_17576__$1;
(statearr_17618_19262[(2)] = null);

(statearr_17618_19262[(1)] = (2));


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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_17620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17620[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_17620[(1)] = (1));

return statearr_17620;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_17576){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_17576);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e17621){var ex__13676__auto__ = e17621;
var statearr_17622_19264 = state_17576;
(statearr_17622_19264[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_17576[(4)]))){
var statearr_17623_19266 = state_17576;
(statearr_17623_19266[(1)] = cljs.core.first((state_17576[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19267 = state_17576;
state_17576 = G__19267;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_17576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_17576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_17628 = f__14189__auto__();
(statearr_17628[(6)] = c__14188__auto___19236);

return statearr_17628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17633 = arguments.length;
switch (G__17633) {
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
var c__14188__auto___19276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_17679){
var state_val_17680 = (state_17679[(1)]);
if((state_val_17680 === (7))){
var inst_17675 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17685_19277 = state_17679__$1;
(statearr_17685_19277[(2)] = inst_17675);

(statearr_17685_19277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (1))){
var inst_17638 = (new Array(n));
var inst_17639 = inst_17638;
var inst_17640 = (0);
var state_17679__$1 = (function (){var statearr_17686 = state_17679;
(statearr_17686[(7)] = inst_17640);

(statearr_17686[(8)] = inst_17639);

return statearr_17686;
})();
var statearr_17691_19278 = state_17679__$1;
(statearr_17691_19278[(2)] = null);

(statearr_17691_19278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (4))){
var inst_17643 = (state_17679[(9)]);
var inst_17643__$1 = (state_17679[(2)]);
var inst_17644 = (inst_17643__$1 == null);
var inst_17645 = cljs.core.not(inst_17644);
var state_17679__$1 = (function (){var statearr_17702 = state_17679;
(statearr_17702[(9)] = inst_17643__$1);

return statearr_17702;
})();
if(inst_17645){
var statearr_17703_19282 = state_17679__$1;
(statearr_17703_19282[(1)] = (5));

} else {
var statearr_17704_19284 = state_17679__$1;
(statearr_17704_19284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (15))){
var inst_17669 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17708_19285 = state_17679__$1;
(statearr_17708_19285[(2)] = inst_17669);

(statearr_17708_19285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (13))){
var state_17679__$1 = state_17679;
var statearr_17709_19287 = state_17679__$1;
(statearr_17709_19287[(2)] = null);

(statearr_17709_19287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (6))){
var inst_17640 = (state_17679[(7)]);
var inst_17665 = (inst_17640 > (0));
var state_17679__$1 = state_17679;
if(cljs.core.truth_(inst_17665)){
var statearr_17710_19289 = state_17679__$1;
(statearr_17710_19289[(1)] = (12));

} else {
var statearr_17711_19291 = state_17679__$1;
(statearr_17711_19291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (3))){
var inst_17677 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17679__$1,inst_17677);
} else {
if((state_val_17680 === (12))){
var inst_17639 = (state_17679[(8)]);
var inst_17667 = cljs.core.vec(inst_17639);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17679__$1,(15),out,inst_17667);
} else {
if((state_val_17680 === (2))){
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17679__$1,(4),ch);
} else {
if((state_val_17680 === (11))){
var inst_17658 = (state_17679[(2)]);
var inst_17659 = (new Array(n));
var inst_17639 = inst_17659;
var inst_17640 = (0);
var state_17679__$1 = (function (){var statearr_17724 = state_17679;
(statearr_17724[(7)] = inst_17640);

(statearr_17724[(10)] = inst_17658);

(statearr_17724[(8)] = inst_17639);

return statearr_17724;
})();
var statearr_17725_19293 = state_17679__$1;
(statearr_17725_19293[(2)] = null);

(statearr_17725_19293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (9))){
var inst_17639 = (state_17679[(8)]);
var inst_17656 = cljs.core.vec(inst_17639);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17679__$1,(11),out,inst_17656);
} else {
if((state_val_17680 === (5))){
var inst_17640 = (state_17679[(7)]);
var inst_17643 = (state_17679[(9)]);
var inst_17651 = (state_17679[(11)]);
var inst_17639 = (state_17679[(8)]);
var inst_17650 = (inst_17639[inst_17640] = inst_17643);
var inst_17651__$1 = (inst_17640 + (1));
var inst_17652 = (inst_17651__$1 < n);
var state_17679__$1 = (function (){var statearr_17726 = state_17679;
(statearr_17726[(11)] = inst_17651__$1);

(statearr_17726[(12)] = inst_17650);

return statearr_17726;
})();
if(cljs.core.truth_(inst_17652)){
var statearr_17730_19298 = state_17679__$1;
(statearr_17730_19298[(1)] = (8));

} else {
var statearr_17731_19299 = state_17679__$1;
(statearr_17731_19299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (14))){
var inst_17672 = (state_17679[(2)]);
var inst_17673 = cljs.core.async.close_BANG_(out);
var state_17679__$1 = (function (){var statearr_17740 = state_17679;
(statearr_17740[(13)] = inst_17672);

return statearr_17740;
})();
var statearr_17741_19300 = state_17679__$1;
(statearr_17741_19300[(2)] = inst_17673);

(statearr_17741_19300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (10))){
var inst_17662 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17745_19301 = state_17679__$1;
(statearr_17745_19301[(2)] = inst_17662);

(statearr_17745_19301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (8))){
var inst_17651 = (state_17679[(11)]);
var inst_17639 = (state_17679[(8)]);
var tmp17736 = inst_17639;
var inst_17639__$1 = tmp17736;
var inst_17640 = inst_17651;
var state_17679__$1 = (function (){var statearr_17750 = state_17679;
(statearr_17750[(7)] = inst_17640);

(statearr_17750[(8)] = inst_17639__$1);

return statearr_17750;
})();
var statearr_17751_19305 = state_17679__$1;
(statearr_17751_19305[(2)] = null);

(statearr_17751_19305[(1)] = (2));


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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_17754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17754[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_17754[(1)] = (1));

return statearr_17754;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_17679){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_17679);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e17755){var ex__13676__auto__ = e17755;
var statearr_17756_19307 = state_17679;
(statearr_17756_19307[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_17679[(4)]))){
var statearr_17759_19308 = state_17679;
(statearr_17759_19308[(1)] = cljs.core.first((state_17679[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19309 = state_17679;
state_17679 = G__19309;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_17679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_17679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_17760 = f__14189__auto__();
(statearr_17760[(6)] = c__14188__auto___19276);

return statearr_17760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17763 = arguments.length;
switch (G__17763) {
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
var c__14188__auto___19313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14189__auto__ = (function (){var switch__13672__auto__ = (function (state_17820){
var state_val_17821 = (state_17820[(1)]);
if((state_val_17821 === (7))){
var inst_17816 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17828_19317 = state_17820__$1;
(statearr_17828_19317[(2)] = inst_17816);

(statearr_17828_19317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (1))){
var inst_17765 = [];
var inst_17766 = inst_17765;
var inst_17767 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17820__$1 = (function (){var statearr_17829 = state_17820;
(statearr_17829[(7)] = inst_17766);

(statearr_17829[(8)] = inst_17767);

return statearr_17829;
})();
var statearr_17830_19318 = state_17820__$1;
(statearr_17830_19318[(2)] = null);

(statearr_17830_19318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (4))){
var inst_17772 = (state_17820[(9)]);
var inst_17772__$1 = (state_17820[(2)]);
var inst_17777 = (inst_17772__$1 == null);
var inst_17778 = cljs.core.not(inst_17777);
var state_17820__$1 = (function (){var statearr_17831 = state_17820;
(statearr_17831[(9)] = inst_17772__$1);

return statearr_17831;
})();
if(inst_17778){
var statearr_17832_19322 = state_17820__$1;
(statearr_17832_19322[(1)] = (5));

} else {
var statearr_17834_19323 = state_17820__$1;
(statearr_17834_19323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (15))){
var inst_17766 = (state_17820[(7)]);
var inst_17808 = cljs.core.vec(inst_17766);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17820__$1,(18),out,inst_17808);
} else {
if((state_val_17821 === (13))){
var inst_17803 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17835_19326 = state_17820__$1;
(statearr_17835_19326[(2)] = inst_17803);

(statearr_17835_19326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (6))){
var inst_17766 = (state_17820[(7)]);
var inst_17805 = inst_17766.length;
var inst_17806 = (inst_17805 > (0));
var state_17820__$1 = state_17820;
if(cljs.core.truth_(inst_17806)){
var statearr_17837_19328 = state_17820__$1;
(statearr_17837_19328[(1)] = (15));

} else {
var statearr_17838_19329 = state_17820__$1;
(statearr_17838_19329[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (17))){
var inst_17813 = (state_17820[(2)]);
var inst_17814 = cljs.core.async.close_BANG_(out);
var state_17820__$1 = (function (){var statearr_17840 = state_17820;
(statearr_17840[(10)] = inst_17813);

return statearr_17840;
})();
var statearr_17841_19330 = state_17820__$1;
(statearr_17841_19330[(2)] = inst_17814);

(statearr_17841_19330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (3))){
var inst_17818 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17820__$1,inst_17818);
} else {
if((state_val_17821 === (12))){
var inst_17766 = (state_17820[(7)]);
var inst_17791 = cljs.core.vec(inst_17766);
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17820__$1,(14),out,inst_17791);
} else {
if((state_val_17821 === (2))){
var state_17820__$1 = state_17820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17820__$1,(4),ch);
} else {
if((state_val_17821 === (11))){
var inst_17772 = (state_17820[(9)]);
var inst_17766 = (state_17820[(7)]);
var inst_17780 = (state_17820[(11)]);
var inst_17788 = inst_17766.push(inst_17772);
var tmp17842 = inst_17766;
var inst_17766__$1 = tmp17842;
var inst_17767 = inst_17780;
var state_17820__$1 = (function (){var statearr_17847 = state_17820;
(statearr_17847[(7)] = inst_17766__$1);

(statearr_17847[(12)] = inst_17788);

(statearr_17847[(8)] = inst_17767);

return statearr_17847;
})();
var statearr_17848_19332 = state_17820__$1;
(statearr_17848_19332[(2)] = null);

(statearr_17848_19332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (9))){
var inst_17767 = (state_17820[(8)]);
var inst_17784 = cljs.core.keyword_identical_QMARK_(inst_17767,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17820__$1 = state_17820;
var statearr_17849_19336 = state_17820__$1;
(statearr_17849_19336[(2)] = inst_17784);

(statearr_17849_19336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (5))){
var inst_17772 = (state_17820[(9)]);
var inst_17767 = (state_17820[(8)]);
var inst_17780 = (state_17820[(11)]);
var inst_17781 = (state_17820[(13)]);
var inst_17780__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17772) : f.call(null,inst_17772));
var inst_17781__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17780__$1,inst_17767);
var state_17820__$1 = (function (){var statearr_17852 = state_17820;
(statearr_17852[(11)] = inst_17780__$1);

(statearr_17852[(13)] = inst_17781__$1);

return statearr_17852;
})();
if(inst_17781__$1){
var statearr_17863_19339 = state_17820__$1;
(statearr_17863_19339[(1)] = (8));

} else {
var statearr_17864_19340 = state_17820__$1;
(statearr_17864_19340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (14))){
var inst_17772 = (state_17820[(9)]);
var inst_17780 = (state_17820[(11)]);
var inst_17793 = (state_17820[(2)]);
var inst_17799 = [];
var inst_17800 = inst_17799.push(inst_17772);
var inst_17766 = inst_17799;
var inst_17767 = inst_17780;
var state_17820__$1 = (function (){var statearr_17865 = state_17820;
(statearr_17865[(14)] = inst_17800);

(statearr_17865[(7)] = inst_17766);

(statearr_17865[(8)] = inst_17767);

(statearr_17865[(15)] = inst_17793);

return statearr_17865;
})();
var statearr_17867_19346 = state_17820__$1;
(statearr_17867_19346[(2)] = null);

(statearr_17867_19346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (16))){
var state_17820__$1 = state_17820;
var statearr_17871_19347 = state_17820__$1;
(statearr_17871_19347[(2)] = null);

(statearr_17871_19347[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (10))){
var inst_17786 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
if(cljs.core.truth_(inst_17786)){
var statearr_17874_19349 = state_17820__$1;
(statearr_17874_19349[(1)] = (11));

} else {
var statearr_17875_19353 = state_17820__$1;
(statearr_17875_19353[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (18))){
var inst_17810 = (state_17820[(2)]);
var state_17820__$1 = state_17820;
var statearr_17878_19355 = state_17820__$1;
(statearr_17878_19355[(2)] = inst_17810);

(statearr_17878_19355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17821 === (8))){
var inst_17781 = (state_17820[(13)]);
var state_17820__$1 = state_17820;
var statearr_17883_19356 = state_17820__$1;
(statearr_17883_19356[(2)] = inst_17781);

(statearr_17883_19356[(1)] = (10));


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
var cljs$core$async$state_machine__13673__auto__ = null;
var cljs$core$async$state_machine__13673__auto____0 = (function (){
var statearr_17886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17886[(0)] = cljs$core$async$state_machine__13673__auto__);

(statearr_17886[(1)] = (1));

return statearr_17886;
});
var cljs$core$async$state_machine__13673__auto____1 = (function (state_17820){
while(true){
var ret_value__13674__auto__ = (function (){try{while(true){
var result__13675__auto__ = switch__13672__auto__(state_17820);
if(cljs.core.keyword_identical_QMARK_(result__13675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13675__auto__;
}
break;
}
}catch (e17889){var ex__13676__auto__ = e17889;
var statearr_17890_19357 = state_17820;
(statearr_17890_19357[(2)] = ex__13676__auto__);


if(cljs.core.seq((state_17820[(4)]))){
var statearr_17893_19358 = state_17820;
(statearr_17893_19358[(1)] = cljs.core.first((state_17820[(4)])));

} else {
throw ex__13676__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19359 = state_17820;
state_17820 = G__19359;
continue;
} else {
return ret_value__13674__auto__;
}
break;
}
});
cljs$core$async$state_machine__13673__auto__ = function(state_17820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13673__auto____1.call(this,state_17820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13673__auto____0;
cljs$core$async$state_machine__13673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13673__auto____1;
return cljs$core$async$state_machine__13673__auto__;
})()
})();
var state__14190__auto__ = (function (){var statearr_17898 = f__14189__auto__();
(statearr_17898[(6)] = c__14188__auto___19313);

return statearr_17898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14190__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
