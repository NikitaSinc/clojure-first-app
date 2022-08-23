goog.provide('stylo.tailwind.border');
stylo.tailwind.border.rounded_size = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"none","none",1333468478),"0",new cljs.core.Keyword(null,"sm","sm",-1402575065),"0.125rem",new cljs.core.Keyword(null,"md","md",707286655),"0.375rem",new cljs.core.Keyword(null,"lg","lg",-80787836),"0.5rem",new cljs.core.Keyword(null,"xl","xl",-1689552936),"0.75rem",new cljs.core.Keyword(null,"full","full",436801220),"9999px"], null);
stylo.tailwind.border.rounded = (function stylo$tailwind$border$rounded(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42030 = arguments.length;
var i__5770__auto___42031 = (0);
while(true){
if((i__5770__auto___42031 < len__5769__auto___42030)){
args__5775__auto__.push((arguments[i__5770__auto___42031]));

var G__42032 = (i__5770__auto___42031 + (1));
i__5770__auto___42031 = G__42032;
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
(stylo.tailwind.border.rounded.cljs$lang$applyTo = (function (seq41980){
var G__41981 = cljs.core.first(seq41980);
var seq41980__$1 = cljs.core.next(seq41980);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41981,seq41980__$1);
}));

stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded","rounded",85415706),(function() {
var G__42033 = null;
var G__42033__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
var G__42033__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
G__42033 = function(_,x){
switch(arguments.length){
case 1:
return G__42033__1.call(this,_);
case 2:
return G__42033__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42033.cljs$core$IFn$_invoke$arity$1 = G__42033__1;
G__42033.cljs$core$IFn$_invoke$arity$2 = G__42033__2;
return G__42033;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-t","rounded-t",-2048541791),(function() {
var G__42034 = null;
var G__42034__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__42034__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__42034 = function(_,x){
switch(arguments.length){
case 1:
return G__42034__1.call(this,_);
case 2:
return G__42034__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42034.cljs$core$IFn$_invoke$arity$1 = G__42034__1;
G__42034.cljs$core$IFn$_invoke$arity$2 = G__42034__2;
return G__42034;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-r","rounded-r",-197111461),(function() {
var G__42035 = null;
var G__42035__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__42035__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__42035 = function(_,x){
switch(arguments.length){
case 1:
return G__42035__1.call(this,_);
case 2:
return G__42035__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42035.cljs$core$IFn$_invoke$arity$1 = G__42035__1;
G__42035.cljs$core$IFn$_invoke$arity$2 = G__42035__2;
return G__42035;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-b","rounded-b",-765352328),(function() {
var G__42036 = null;
var G__42036__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__42036__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__42036 = function(_,x){
switch(arguments.length){
case 1:
return G__42036__1.call(this,_);
case 2:
return G__42036__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42036.cljs$core$IFn$_invoke$arity$1 = G__42036__1;
G__42036.cljs$core$IFn$_invoke$arity$2 = G__42036__2;
return G__42036;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-l","rounded-l",1639486971),(function() {
var G__42037 = null;
var G__42037__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__42037__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__42037 = function(_,x){
switch(arguments.length){
case 1:
return G__42037__1.call(this,_);
case 2:
return G__42037__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42037.cljs$core$IFn$_invoke$arity$1 = G__42037__1;
G__42037.cljs$core$IFn$_invoke$arity$2 = G__42037__2;
return G__42037;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tl","rounded-tl",-649211256),(function() {
var G__42038 = null;
var G__42038__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
var G__42038__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
G__42038 = function(_,x){
switch(arguments.length){
case 1:
return G__42038__1.call(this,_);
case 2:
return G__42038__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42038.cljs$core$IFn$_invoke$arity$1 = G__42038__1;
G__42038.cljs$core$IFn$_invoke$arity$2 = G__42038__2;
return G__42038;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tr","rounded-tr",776020084),(function() {
var G__42039 = null;
var G__42039__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__42039__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__42039 = function(_,x){
switch(arguments.length){
case 1:
return G__42039__1.call(this,_);
case 2:
return G__42039__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42039.cljs$core$IFn$_invoke$arity$1 = G__42039__1;
G__42039.cljs$core$IFn$_invoke$arity$2 = G__42039__2;
return G__42039;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-br","rounded-br",1562597181),(function() {
var G__42040 = null;
var G__42040__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__42040__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__42040 = function(_,x){
switch(arguments.length){
case 1:
return G__42040__1.call(this,_);
case 2:
return G__42040__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42040.cljs$core$IFn$_invoke$arity$1 = G__42040__1;
G__42040.cljs$core$IFn$_invoke$arity$2 = G__42040__2;
return G__42040;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-bl","rounded-bl",1067689139),(function() {
var G__42041 = null;
var G__42041__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__42041__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__42041 = function(_,x){
switch(arguments.length){
case 1:
return G__42041__1.call(this,_);
case 2:
return G__42041__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42041.cljs$core$IFn$_invoke$arity$1 = G__42041__1;
G__42041.cljs$core$IFn$_invoke$arity$2 = G__42041__2;
return G__42041;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border","border",1444987323),(function() {
var G__42042 = null;
var G__42042__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border","border",1444987323),(1));
});
var G__42042__2 = (function() { 
var G__42045__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__42045 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__42047__i = 0, G__42047__a = new Array(arguments.length -  1);
while (G__42047__i < G__42047__a.length) {G__42047__a[G__42047__i] = arguments[G__42047__i + 1]; ++G__42047__i;}
  props = new cljs.core.IndexedSeq(G__42047__a,0,null);
} 
return G__42045__delegate.call(this,_,props);};
G__42045.cljs$lang$maxFixedArity = 1;
G__42045.cljs$lang$applyTo = (function (arglist__42048){
var _ = cljs.core.first(arglist__42048);
var props = cljs.core.rest(arglist__42048);
return G__42045__delegate(_,props);
});
G__42045.cljs$core$IFn$_invoke$arity$variadic = G__42045__delegate;
return G__42045;
})()
;
G__42042 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__42042__1.call(this,_);
default:
var G__42049 = null;
if (arguments.length > 1) {
var G__42050__i = 0, G__42050__a = new Array(arguments.length -  1);
while (G__42050__i < G__42050__a.length) {G__42050__a[G__42050__i] = arguments[G__42050__i + 1]; ++G__42050__i;}
G__42049 = new cljs.core.IndexedSeq(G__42050__a,0,null);
}
return G__42042__2.cljs$core$IFn$_invoke$arity$variadic(_, G__42049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42042.cljs$lang$maxFixedArity = 1;
G__42042.cljs$lang$applyTo = G__42042__2.cljs$lang$applyTo;
G__42042.cljs$core$IFn$_invoke$arity$1 = G__42042__1;
G__42042.cljs$core$IFn$_invoke$arity$variadic = G__42042__2.cljs$core$IFn$_invoke$arity$variadic;
return G__42042;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(function() {
var G__42051 = null;
var G__42051__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(1));
});
var G__42051__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__42051 = function(_,x){
switch(arguments.length){
case 1:
return G__42051__1.call(this,_);
case 2:
return G__42051__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42051.cljs$core$IFn$_invoke$arity$1 = G__42051__1;
G__42051.cljs$core$IFn$_invoke$arity$2 = G__42051__2;
return G__42051;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-r","border-r",1332650530),(function() {
var G__42052 = null;
var G__42052__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-r","border-r",1332650530),(1));
});
var G__42052__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__42052 = function(_,x){
switch(arguments.length){
case 1:
return G__42052__1.call(this,_);
case 2:
return G__42052__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42052.cljs$core$IFn$_invoke$arity$1 = G__42052__1;
G__42052.cljs$core$IFn$_invoke$arity$2 = G__42052__2;
return G__42052;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-b","border-b",-466456219),(function() {
var G__42056 = null;
var G__42056__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-b","border-b",-466456219),(1));
});
var G__42056__2 = (function() { 
var G__42057__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha(stylo.tailwind.color.colors(x),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__42057 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__42058__i = 0, G__42058__a = new Array(arguments.length -  1);
while (G__42058__i < G__42058__a.length) {G__42058__a[G__42058__i] = arguments[G__42058__i + 1]; ++G__42058__i;}
  props = new cljs.core.IndexedSeq(G__42058__a,0,null);
} 
return G__42057__delegate.call(this,_,props);};
G__42057.cljs$lang$maxFixedArity = 1;
G__42057.cljs$lang$applyTo = (function (arglist__42059){
var _ = cljs.core.first(arglist__42059);
var props = cljs.core.rest(arglist__42059);
return G__42057__delegate(_,props);
});
G__42057.cljs$core$IFn$_invoke$arity$variadic = G__42057__delegate;
return G__42057;
})()
;
G__42056 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__42056__1.call(this,_);
default:
var G__42060 = null;
if (arguments.length > 1) {
var G__42061__i = 0, G__42061__a = new Array(arguments.length -  1);
while (G__42061__i < G__42061__a.length) {G__42061__a[G__42061__i] = arguments[G__42061__i + 1]; ++G__42061__i;}
G__42060 = new cljs.core.IndexedSeq(G__42061__a,0,null);
}
return G__42056__2.cljs$core$IFn$_invoke$arity$variadic(_, G__42060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42056.cljs$lang$maxFixedArity = 1;
G__42056.cljs$lang$applyTo = G__42056__2.cljs$lang$applyTo;
G__42056.cljs$core$IFn$_invoke$arity$1 = G__42056__1;
G__42056.cljs$core$IFn$_invoke$arity$variadic = G__42056__2.cljs$core$IFn$_invoke$arity$variadic;
return G__42056;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-l","border-l",653108124),(function() {
var G__42062 = null;
var G__42062__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-l","border-l",653108124),(1));
});
var G__42062__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899))], null)], null)], null);
});
G__42062 = function(_,x){
switch(arguments.length){
case 1:
return G__42062__1.call(this,_);
case 2:
return G__42062__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42062.cljs$core$IFn$_invoke$arity$1 = G__42062__1;
G__42062.cljs$core$IFn$_invoke$arity$2 = G__42062__2;
return G__42062;
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
var G__42066 = null;
var G__42066__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(1));
});
var G__42066__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-x-reverse","--divide-x-reverse",149178366),(0),new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-x-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-x-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__42066 = function(_,x){
switch(arguments.length){
case 1:
return G__42066__1.call(this,_);
case 2:
return G__42066__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42066.cljs$core$IFn$_invoke$arity$1 = G__42066__1;
G__42066.cljs$core$IFn$_invoke$arity$2 = G__42066__2;
return G__42066;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(function() {
var G__42067 = null;
var G__42067__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(1));
});
var G__42067__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-y-reverse","--divide-y-reverse",1383963719),(0),new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-y-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-y-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__42067 = function(_,x){
switch(arguments.length){
case 1:
return G__42067__1.call(this,_);
case 2:
return G__42067__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42067.cljs$core$IFn$_invoke$arity$1 = G__42067__1;
G__42067.cljs$core$IFn$_invoke$arity$2 = G__42067__2;
return G__42067;
})()
);

//# sourceMappingURL=stylo.tailwind.border.js.map
