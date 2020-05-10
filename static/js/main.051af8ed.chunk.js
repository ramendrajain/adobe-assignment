(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{196:function(e,t,a){e.exports=a(436)},404:function(e,t,a){},409:function(e,t,a){},411:function(e,t,a){},433:function(e,t,a){},434:function(e,t,a){},436:function(e,t,a){"use strict";a.r(t);a(197),a(206);var n=a(0),c=a.n(n),r=a(93),i=a.n(r),l=(a(404),a(29)),o=a(74),s=a(50),m=function(e,t){return e-e*t/100},u={setSearchTerm:function(e){return{type:"SET_SEARCH_TERM",payload:e}}},d=Object(l.b)(null,u)((function(e){var t=function(e,t){var a;return function(){var n=this,c=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(n,c)}),t)}}(e.setSearchTerm,200);return c.a.createElement("div",{className:"search-container"},c.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){t(e.target.value)}}),c.a.createElement("span",{className:"glyphicon glyphicon-search"}))})),E=(a(409),Object(l.b)((function(e){return{cart:e.cart.items}}),null)((function(e){var t=0;return e.cart.forEach((function(e){t+=e.quantity})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header-bar"},c.a.createElement("div",{className:"header-left"},c.a.createElement(o.b,{to:"/"},c.a.createElement("span",{className:"glyphicon glyphicon-star"}))),c.a.createElement("div",{className:"header-right"},c.a.createElement(d,null),c.a.createElement(o.b,{to:"/checkout"},c.a.createElement("span",{className:"glyphicon glyphicon-shopping-cart"})),t?c.a.createElement("div",{className:"cart-count"},t):null)))})));a(411);function p(){return c.a.createElement("div",{className:"footer"},"\xa9Copyright")}var f=a(96),v=a(38),y=a(195),N=a.n(y),h=(a(427),function(e){var t=Object(n.useState)({min:100,max:400}),a=Object(v.a)(t,2),r=a[0],i=a[1];return c.a.createElement("div",{className:"filters"},c.a.createElement("div",{className:"range-container"},c.a.createElement("div",{className:"filter-scale"},"Filters"),c.a.createElement(N.a,{maxValue:1e3,minValue:100,step:50,value:r,onChange:function(e){return i(e)}}),c.a.createElement("div",{className:"price-range"},"Price")),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.filterByPrice(r)}},"Apply"))}),b=function(e){var t=function(t){e.sortProductByPrice(t)};return c.a.createElement("div",{className:"sort-options"},c.a.createElement("ul",null,c.a.createElement("li",{className:"filtersort"},"Sort By"),c.a.createElement("li",{onClick:function(){return t("HIGH_TO_LOW")},className:"HIGH_TO_LOW"===e.sortType?"active":""},"Price--High Low"),c.a.createElement("li",{onClick:function(){return t("LOW_TO_HIGH")},className:"LOW_TO_HIGH"===e.sortType?"active":""},"Price--Low High"),c.a.createElement("li",{onClick:function(){return t("DISCOUNT")},className:"DISCOUNT"===e.sortType?"active":""},"Discount")))},g=a(34),O={addToCart:function(e,t){return t.findIndex((function(t){return t.id===e.id}))>=0?{type:"INCREASE_QUANTITY",payload:e.id}:{type:"ADDED_TO_CART",payload:Object(g.a)({},e,{quantity:1})}}},T=Object(l.b)((function(e){return{cart:e.cart.items}}),O)((function(e){return c.a.createElement(c.a.Fragment,null,e.products.map((function(t){return c.a.createElement("div",{key:t.id,className:"col-md-3 col-sm-4  col-xs-6"},c.a.createElement("div",{className:"itmdetails"},c.a.createElement("img",{className:"img-responsive",src:t.img_url,alt:"product"}),c.a.createElement("div",{className:"itemname"},t.name),c.a.createElement("div",{className:"price-list"},c.a.createElement("div",{className:"itemprice"},c.a.createElement("div",null,"\u20b9",m(t.price,t.discount)),c.a.createElement("s",null,t.price)),c.a.createElement("div",{className:"discnt"},t.discount,"% off")),c.a.createElement("div",{className:"add-cart"},c.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.addToCart(t,e.cart)}},"Add to Cart"))))})))})),C=a(95),I=a.n(C),_=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),r=a[0],i=a[1],l=function(e){i(e.target.value)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{visible:e.visibleSortOption,width:"280",effect:"fadeInUp",onClickAway:function(){return e.closeSortDialog()}},c.a.createElement("div",{className:"mob-price-sort"},c.a.createElement("div",{className:"sort-option"},c.a.createElement("h1",null,"Sort Options"),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"sortType",value:"HIGH_TO_LOW",onChange:l}),"Price--High Low")),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"sortType",value:"LOW_TO_HIGH",onChange:l}),"Price--Low High")),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"sortType",value:"DISCOUNT",onChange:l}),"Discount")))),c.a.createElement("div",{className:"actions"},c.a.createElement("div",{onClick:function(){return e.closeSortDialog()},className:"action cancel"},"Cancel"),c.a.createElement("div",{className:"action",onClick:function(t){e.sortProductByPrice(r),e.closeSortDialog()}},"Apply"))))},j=(a(433),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{visible:e.visibleFilterOption,width:"280",effect:"fadeInUp",onClickAway:function(){return e.closeFilterDialog()}},c.a.createElement("div",{className:"mob-price-sort"},e.children,c.a.createElement("button",{className:"btn btn-cancel",onClick:function(){return e.closeFilterDialog()}},"Cancel"))))}),S=Object(l.b)((function(e){return{searchTerm:e.search.term}}),null)((function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)([]),o=Object(v.a)(l,2),s=o[0],u=o[1],d=Object(n.useState)(""),E=Object(v.a)(d,2),p=E[0],y=E[1],N=Object(n.useState)(!1),g=Object(v.a)(N,2),O=g[0],C=g[1],I=Object(n.useState)(!1),S=Object(v.a)(I,2),k=S[0],w=S[1];Object(n.useEffect)((function(){fetch("https://api.myjson.com/bins/qzuzi").then((function(e){return e.json()})).then((function(e){i(e),u(e)}))}),[]);var A=function(e){P();var t=r.filter((function(t){return m(t.price,t.discount)>=e.min&&m(t.price,t.discount)<=e.max}));p&&(t=H(p,t)),u(t)},D=function(e){y(e);var t=H(e,s);u(t)},H=function(e,t){var a=Object(f.a)(t);switch(e){case"HIGH_TO_LOW":a.sort((function(e,t){return m(e.price,e.discount)>m(t.price,t.discount)?-1:m(t.price,t.discount)>m(e.price,e.discount)?1:0}));break;case"LOW_TO_HIGH":a.sort((function(e,t){return m(e.price,e.discount)>m(t.price,t.discount)?1:m(t.price,t.discount)>m(e.price,e.discount)?-1:0}));break;case"DISCOUNT":a.sort((function(e,t){return e.discount>t.discount?-1:e.discount<t.discount?1:0}))}return a},P=function(){w(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"filter-container"},c.a.createElement("div",{className:"filter",onClick:function(){C(!0)}},c.a.createElement("span",{className:"glyphicon glyphicon-triangle-top"}),c.a.createElement("span",{className:"glyphicon glyphicon-triangle-top triangle-down"})," ","Sort"),c.a.createElement("div",{className:"filter",onClick:function(){w(!0)}},c.a.createElement("span",{className:"glyphicon glyphicon-filter"})," Filter")),c.a.createElement("div",{className:"container-fluid product-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2 col-sm-3 price-range-container"},c.a.createElement(h,{filterByPrice:A})),c.a.createElement("div",{className:"col-md-10 col-sm-9 col-xs-12 product-det"},c.a.createElement("div",{className:"sort-container"},c.a.createElement(b,{sortProductByPrice:D,sortType:p})),c.a.createElement("div",{className:"product-list"},c.a.createElement("div",{className:"row"},c.a.createElement(T,{products:e.searchTerm?s.filter((function(t){return t.name.toLowerCase().includes(e.searchTerm.toLowerCase())})):s})))))),c.a.createElement(_,{sortProductByPrice:D,closeSortDialog:function(){C(!1)},visibleSortOption:O}),c.a.createElement(j,{closeFilterDialog:P,visibleFilterOption:k},c.a.createElement(h,{filterByPrice:A})))})),k=function(e){var t=0,a=0,n=0;return e.cart.forEach((function(e){n+=e.quantity,t+=e.price*e.quantity,a+=e.price*e.quantity*e.discount/100})),c.a.createElement("div",{className:"col-sm-4 price-list"},c.a.createElement("div",{className:"pl-section"},c.a.createElement("h2",null,"PRICE DETAILS"),c.a.createElement("div",null,"Price (",n," item) :",c.a.createElement("span",null," \u20b9",t)),c.a.createElement("div",null,"Discount : ",c.a.createElement("span",null,"\u20b9",a)),c.a.createElement("div",{className:"tpayment"},"Total Payable : ",c.a.createElement("span",null,"\u20b9",t-a))))},w=function(e){return c.a.createElement("div",{className:"col-sm-8 product-list"},e.cart.map((function(t){return c.a.createElement("div",{className:"pd-section",key:t.id},c.a.createElement("div",{className:"fcnt"},c.a.createElement("img",{className:"img-responsive",src:t.img_url,alt:"product"})),c.a.createElement("div",{className:"scnt"},c.a.createElement("div",null,t.name," "),c.a.createElement("div",{className:"tcnt"},c.a.createElement("div",{className:"cart-sum"},c.a.createElement("div",{className:"itemprice"},c.a.createElement("div",null,c.a.createElement("div",{className:"itempric"},"\u20b9",m(t.price,t.discount)*t.quantity),c.a.createElement("s",null,t.price*t.quantity)),c.a.createElement("div",{className:"discnt"},t.discount,"% off"))),c.a.createElement("div",{className:"cart-sum"},c.a.createElement("div",{className:"productupdate"},c.a.createElement("span",{onClick:function(){return e.decreaseItemQuantity(t.id)},className:"glyphicon glyphicon-minus-sign ".concat(t.quantity<=1?"pointer-none":"")}),c.a.createElement("input",{type:"text",value:t.quantity,size:"2"}),c.a.createElement("span",{onClick:function(){return e.increaseItemQuantity(t.id)},className:"glyphicon glyphicon-plus-sign"}))),c.a.createElement("div",{className:"cart-sum remove",onClick:function(){return e.removeItemFromCart(t.id)}},"REMOVE"))))})))},A=(a(434),{increaseItemQuantity:function(e){return{type:"INCREASE_QUANTITY",payload:e}},decreaseItemQuantity:function(e){return{type:"DECREASE_QUANTITY",payload:e}},removeItemFromCart:function(e){return{type:"REMOVE_CART_ITEM",payload:e}}}),D=Object(l.b)((function(e){return{cart:e.cart.items}}),A)((function(e){return c.a.createElement("div",{className:"container-fluid"},e.cart.length>0?c.a.createElement("div",{className:"row checkout-cart"},c.a.createElement(w,{cart:e.cart,increaseItemQuantity:e.increaseItemQuantity,decreaseItemQuantity:e.decreaseItemQuantity,removeItemFromCart:e.removeItemFromCart}),c.a.createElement(k,{cart:e.cart})):c.a.createElement("h1",{className:"not-selected"},"No Item in cart"))})),H=a(59),P=Object(H.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[]},t=arguments.length>1?arguments[1]:void 0,a=[];switch(t.type){case"ADDED_TO_CART":return Object(g.a)({},e,{items:[].concat(Object(f.a)(e.items),[t.payload])});case"INCREASE_QUANTITY":return a=e.items.map((function(e){return e.id===t.payload?Object(g.a)({},e,{quantity:e.quantity+1}):e})),Object(g.a)({},e,{items:a});case"DECREASE_QUANTITY":return a=e.items.map((function(e){return e.id===t.payload?Object(g.a)({},e,{quantity:e.quantity-1}):e})),Object(g.a)({},e,{items:a});case"REMOVE_CART_ITEM":return a=e.items.filter((function(e){return e.id!==t.payload})),Object(g.a)({},e,{items:a});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{term:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_TERM":return Object(g.a)({},e,{term:t.payload});default:return e}}}),R=Object(H.c)(P);a(435);var F=function(){return c.a.createElement(l.a,{store:R},c.a.createElement(o.a,null,c.a.createElement(E,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:S}),c.a.createElement(s.a,{path:"/checkout",component:D}))),c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[196,1,2]]]);
//# sourceMappingURL=main.051af8ed.chunk.js.map