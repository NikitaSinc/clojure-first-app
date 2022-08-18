goog.provide('stylo.tailwind.border');
stylo.tailwind.border.rounded_size = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"none","none",1333468478),"0",new cljs.core.Keyword(null,"sm","sm",-1402575065),"0.125rem",new cljs.core.Keyword(null,"md","md",707286655),"0.375rem",new cljs.core.Keyword(null,"lg","lg",-80787836),"0.5rem",new cljs.core.Keyword(null,"xl","xl",-1689552936),"0.75rem",new cljs.core.Keyword(null,"full","full",436801220),"9999px"], null);
stylo.tailwind.border.rounded = (function stylo$tailwind$border$rounded(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41944 = arguments.length;
var i__5770__auto___41945 = (0);
while(true){
if((i__5770__auto___41945 < len__5769__auto___41944)){
args__5775__auto__.push((arguments[i__5770__auto___41945]));

var G__41946 = (i__5770__auto___41945 + (1));
i__5770__auto___41945 = G__41946;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic = (function (x,keys){
var x__$1 = (((x == null))?"0.25rem":((cljs.core.int_QMARK_(x))?stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)):(stylo.tailwind.border.rounded_size.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.border.rounded_size.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.border.rounded_size.call(null,x))
));
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x__$1));
}));

(stylo.tailwind.border.rounded.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylo.tailwind.border.rounded.cljs$lang$applyTo = (function (seq41928){
var G__41929 = cljs.core.first(seq41928);
var seq41928__$1 = cljs.core.next(seq41928);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41929,seq41928__$1);
}));

stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded","rounded",85415706),(function() {
var G__41947 = null;
var G__41947__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
var G__41947__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
G__41947 = function(_,x){
switch(arguments.length){
case 1:
return G__41947__1.call(this,_);
case 2:
return G__41947__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41947.cljs$core$IFn$_invoke$arity$1 = G__41947__1;
G__41947.cljs$core$IFn$_invoke$arity$2 = G__41947__2;
return G__41947;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-t","rounded-t",-2048541791),(function() {
var G__41948 = null;
var G__41948__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__41948__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__41948 = function(_,x){
switch(arguments.length){
case 1:
return G__41948__1.call(this,_);
case 2:
return G__41948__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41948.cljs$core$IFn$_invoke$arity$1 = G__41948__1;
G__41948.cljs$core$IFn$_invoke$arity$2 = G__41948__2;
return G__41948;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-r","rounded-r",-197111461),(function() {
var G__41949 = null;
var G__41949__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__41949__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__41949 = function(_,x){
switch(arguments.length){
case 1:
return G__41949__1.call(this,_);
case 2:
return G__41949__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41949.cljs$core$IFn$_invoke$arity$1 = G__41949__1;
G__41949.cljs$core$IFn$_invoke$arity$2 = G__41949__2;
return G__41949;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-b","rounded-b",-765352328),(function() {
var G__41950 = null;
var G__41950__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__41950__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__41950 = function(_,x){
switch(arguments.length){
case 1:
return G__41950__1.call(this,_);
case 2:
return G__41950__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41950.cljs$core$IFn$_invoke$arity$1 = G__41950__1;
G__41950.cljs$core$IFn$_invoke$arity$2 = G__41950__2;
return G__41950;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-l","rounded-l",1639486971),(function() {
var G__41951 = null;
var G__41951__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__41951__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__41951 = function(_,x){
switch(arguments.length){
case 1:
return G__41951__1.call(this,_);
case 2:
return G__41951__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41951.cljs$core$IFn$_invoke$arity$1 = G__41951__1;
G__41951.cljs$core$IFn$_invoke$arity$2 = G__41951__2;
return G__41951;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tl","rounded-tl",-649211256),(function() {
var G__41952 = null;
var G__41952__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
var G__41952__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
G__41952 = function(_,x){
switch(arguments.length){
case 1:
return G__41952__1.call(this,_);
case 2:
return G__41952__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41952.cljs$core$IFn$_invoke$arity$1 = G__41952__1;
G__41952.cljs$core$IFn$_invoke$arity$2 = G__41952__2;
return G__41952;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tr","rounded-tr",776020084),(function() {
var G__41953 = null;
var G__41953__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__41953__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__41953 = function(_,x){
switch(arguments.length){
case 1:
return G__41953__1.call(this,_);
case 2:
return G__41953__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41953.cljs$core$IFn$_invoke$arity$1 = G__41953__1;
G__41953.cljs$core$IFn$_invoke$arity$2 = G__41953__2;
return G__41953;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-br","rounded-br",1562597181),(function() {
var G__41954 = null;
var G__41954__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__41954__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__41954 = function(_,x){
switch(arguments.length){
case 1:
return G__41954__1.call(this,_);
case 2:
return G__41954__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41954.cljs$core$IFn$_invoke$arity$1 = G__41954__1;
G__41954.cljs$core$IFn$_invoke$arity$2 = G__41954__2;
return G__41954;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-bl","rounded-bl",1067689139),(function() {
var G__41955 = null;
var G__41955__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__41955__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__41955 = function(_,x){
switch(arguments.length){
case 1:
return G__41955__1.call(this,_);
case 2:
return G__41955__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41955.cljs$core$IFn$_invoke$arity$1 = G__41955__1;
G__41955.cljs$core$IFn$_invoke$arity$2 = G__41955__2;
return G__41955;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border","border",1444987323),(function() {
var G__41956 = null;
var G__41956__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border","border",1444987323),(1));
});
var G__41956__2 = (function() { 
var G__41957__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__41957 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__41958__i = 0, G__41958__a = new Array(arguments.length -  1);
while (G__41958__i < G__41958__a.length) {G__41958__a[G__41958__i] = arguments[G__41958__i + 1]; ++G__41958__i;}
  props = new cljs.core.IndexedSeq(G__41958__a,0,null);
} 
return G__41957__delegate.call(this,_,props);};
G__41957.cljs$lang$maxFixedArity = 1;
G__41957.cljs$lang$applyTo = (function (arglist__41959){
var _ = cljs.core.first(arglist__41959);
var props = cljs.core.rest(arglist__41959);
return G__41957__delegate(_,props);
});
G__41957.cljs$core$IFn$_invoke$arity$variadic = G__41957__delegate;
return G__41957;
})()
;
G__41956 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__41956__1.call(this,_);
default:
var G__41960 = null;
if (arguments.length > 1) {
var G__41961__i = 0, G__41961__a = new Array(arguments.length -  1);
while (G__41961__i < G__41961__a.length) {G__41961__a[G__41961__i] = arguments[G__41961__i + 1]; ++G__41961__i;}
G__41960 = new cljs.core.IndexedSeq(G__41961__a,0,null);
}
return G__41956__2.cljs$core$IFn$_invoke$arity$variadic(_, G__41960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41956.cljs$lang$maxFixedArity = 1;
G__41956.cljs$lang$applyTo = G__41956__2.cljs$lang$applyTo;
G__41956.cljs$core$IFn$_invoke$arity$1 = G__41956__1;
G__41956.cljs$core$IFn$_invoke$arity$variadic = G__41956__2.cljs$core$IFn$_invoke$arity$variadic;
return G__41956;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(function() {
var G__41962 = null;
var G__41962__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(1));
});
var G__41962__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__41962 = function(_,x){
switch(arguments.length){
case 1:
return G__41962__1.call(this,_);
case 2:
return G__41962__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41962.cljs$core$IFn$_invoke$arity$1 = G__41962__1;
G__41962.cljs$core$IFn$_invoke$arity$2 = G__41962__2;
return G__41962;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-r","border-r",1332650530),(function() {
var G__41963 = null;
var G__41963__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-r","border-r",1332650530),(1));
});
var G__41963__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__41963 = function(_,x){
switch(arguments.length){
case 1:
return G__41963__1.call(this,_);
case 2:
return G__41963__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41963.cljs$core$IFn$_invoke$arity$1 = G__41963__1;
G__41963.cljs$core$IFn$_invoke$arity$2 = G__41963__2;
return G__41963;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-b","border-b",-466456219),(function() {
var G__41964 = null;
var G__41964__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-b","border-b",-466456219),(1));
});
var G__41964__2 = (function() { 
var G__41965__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__41965 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__41966__i = 0, G__41966__a = new Array(arguments.length -  1);
while (G__41966__i < G__41966__a.length) {G__41966__a[G__41966__i] = arguments[G__41966__i + 1]; ++G__41966__i;}
  props = new cljs.core.IndexedSeq(G__41966__a,0,null);
} 
return G__41965__delegate.call(this,_,props);};
G__41965.cljs$lang$maxFixedArity = 1;
G__41965.cljs$lang$applyTo = (function (arglist__41967){
var _ = cljs.core.first(arglist__41967);
var props = cljs.core.rest(arglist__41967);
return G__41965__delegate(_,props);
});
G__41965.cljs$core$IFn$_invoke$arity$variadic = G__41965__delegate;
return G__41965;
})()
;
G__41964 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__41964__1.call(this,_);
default:
var G__41968 = null;
if (arguments.length > 1) {
var G__41969__i = 0, G__41969__a = new Array(arguments.length -  1);
while (G__41969__i < G__41969__a.length) {G__41969__a[G__41969__i] = arguments[G__41969__i + 1]; ++G__41969__i;}
G__41968 = new cljs.core.IndexedSeq(G__41969__a,0,null);
}
return G__41964__2.cljs$core$IFn$_invoke$arity$variadic(_, G__41968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41964.cljs$lang$maxFixedArity = 1;
G__41964.cljs$lang$applyTo = G__41964__2.cljs$lang$applyTo;
G__41964.cljs$core$IFn$_invoke$arity$1 = G__41964__1;
G__41964.cljs$core$IFn$_invoke$arity$variadic = G__41964__2.cljs$core$IFn$_invoke$arity$variadic;
return G__41964;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-l","border-l",653108124),(function() {
var G__41970 = null;
var G__41970__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-l","border-l",653108124),(1));
});
var G__41970__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__41970 = function(_,x){
switch(arguments.length){
case 1:
return G__41970__1.call(this,_);
case 2:
return G__41970__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41970.cljs$core$IFn$_invoke$arity$1 = G__41970__1;
G__41970.cljs$core$IFn$_invoke$arity$2 = G__41970__2;
return G__41970;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-opacity","border-opacity",-1046826610),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"percent","percent",2031453817))], null)], null)], null);
}));
stylo.tailwind.border.border_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-solid","border-solid",-1844392314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid"], null),new cljs.core.Keyword(null,"border-dashed","border-dashed",-1823201978),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dashed"], null),new cljs.core.Keyword(null,"border-dotted","border-dotted",-2061093096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dotted"], null),new cljs.core.Keyword(null,"border-double","border-double",500673849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"double"], null),new cljs.core.Keyword(null,"border-none","border-none",1383902613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none"], null)], null);
stylo.rule.defrules.cljs$core$IFn$_invoke$arity$1(stylo.tailwind.border.border_style);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide","divide",2108946657),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810)),new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810),(1)], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-opacity","divide-opacity",1994371723),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"percent","percent",2031453817))], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(function() {
var G__41971 = null;
var G__41971__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(1));
});
var G__41971__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-x-reverse","--divide-x-reverse",149178366),(0),new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-x-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-x-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__41971 = function(_,x){
switch(arguments.length){
case 1:
return G__41971__1.call(this,_);
case 2:
return G__41971__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41971.cljs$core$IFn$_invoke$arity$1 = G__41971__1;
G__41971.cljs$core$IFn$_invoke$arity$2 = G__41971__2;
return G__41971;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(function() {
var G__41973 = null;
var G__41973__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(1));
});
var G__41973__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-y-reverse","--divide-y-reverse",1383963719),(0),new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-y-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-y-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__41973 = function(_,x){
switch(arguments.length){
case 1:
return G__41973__1.call(this,_);
case 2:
return G__41973__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41973.cljs$core$IFn$_invoke$arity$1 = G__41973__1;
G__41973.cljs$core$IFn$_invoke$arity$2 = G__41973__2;
return G__41973;
})()
);

//# sourceMappingURL=stylo.tailwind.border.js.map
