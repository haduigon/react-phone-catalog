(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{24:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},54:function(e,c,t){},55:function(e,c,t){},56:function(e,c,t){},57:function(e,c,t){},58:function(e,c,t){},59:function(e,c,t){},60:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){"use strict";t.r(c);var s,a=t(38),i=t.n(a),n=(t(33),t(45),t(6)),r=t(4),l=t(5),o=t(10),d=t.n(o),j=(t(46),t(1)),b=t.n(j),m=t(13),u=t(9),O=t(39),h=t.n(O);function x(e,c){return void 0!==e.find((function(e){return e.id===c.id}))}function v(e,c){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,s=+c*+t,a=s-+t,i=e.slice(a,s);return i}function g(){var e=Object(n.d)(),c=Object(l.a)(e,2),t=c[0],s=c[1],a=new URLSearchParams(t);return function(e,c){a.set(c,String(e)),s(a)}}function f(e,c){return e.age<c.age?-1:e.age>c.age?1:0}function p(e){for(var c=[],t=function(t){void 0===c.find((function(c){return c.id===e[t].id}))&&c.push(e[t])},s=0;s<=e.length-1;s++)t(s);return c}function N(){var e=Object(j.useContext)(R),c=e.state,t=e.dispatch,a=h.a.cloneDeep(c.card);return function e(c){for(;void 0!==a.find((function(e){return e.id===c.id}));)a.forEach((function(e){if(e.id===c.id){var i=a.findIndex((function(e){return e.id===c.id}));a.splice(i,1),t({type:s.DELETE_FROM_CARD,payload:c})}})),e(c)}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c="";return"/phones"===e&&(c="Mobile phones"),"/tablets"===e&&(c="Tablets"),"/accessoires"===e&&(c="Accessoires"),c}function E(e){for(var c,t=e.length;t>0;){t--;var s=[e[c=Math.floor(Math.random()*e.length)],e[t]];e[t]=s[0],e[c]=s[1]}return e}function C(e){return e.filter((function(e){return 0===e.discount}))}function k(e,c){var t=+e,s=+c;return t<s?-1:t>s?1:0}!function(e){e[e.SET_ITEMS_PER_PAGE=0]="SET_ITEMS_PER_PAGE",e[e.SET_SEARCH_QUERY=1]="SET_SEARCH_QUERY",e[e.SET_FAVOUTITES=2]="SET_FAVOUTITES",e[e.SET_PRODUCTS=3]="SET_PRODUCTS",e[e.ADD_TO_CARD=4]="ADD_TO_CARD",e[e.DELETE_FROM_CARD=5]="DELETE_FROM_CARD",e[e.DELETE_FROM_FAVOURITES=6]="DELETE_FROM_FAVOURITES",e[e.RENDER_PAGE=7]="RENDER_PAGE"}(s||(s={}));var _=t(66),S=t(0);function T(e){var c=Object(n.d)(),t=Object(l.a)(c,1)[0].get("sort")||"",s=Object(u.a)(e.sort(f));switch(t){case"age":default:s=e.sort(f);break;case"ageDesc":s.reverse();break;case"name":s.sort((function(e,c){return function(e,c){var t=e.toLocaleLowerCase(),s=c.toLocaleLowerCase();return t<s?-1:t>s?1:0}(e.name,c.name)}));break;case"price":s.sort((function(e,c){return k(+e.price.slice(1),+c.price.slice(1))}))}return s}function A(e,c){switch(c.type){case s.SET_ITEMS_PER_PAGE:return Object(m.a)(Object(m.a)({},e),{},{itemsPerPage:c.payload});case s.RENDER_PAGE:return Object(m.a)(Object(m.a)({},e),{},{render:!e.render});case s.SET_FAVOUTITES:return Object(m.a)(Object(m.a)({},e),{},{favourites:[].concat(Object(u.a)(e.favourites),[c.payload])});case s.ADD_TO_CARD:var t=JSON.parse(localStorage.getItem("cart")||"[]");localStorage.setItem("cart",JSON.stringify([].concat(Object(u.a)(t),[c.payload])));var a=JSON.parse(localStorage.getItem("cart")||"[]");return Object(m.a)(Object(m.a)({},e),{},{card:a});case s.DELETE_FROM_CARD:var i=JSON.parse(localStorage.getItem("cart")||"[]"),n=Object(u.a)(i),r=n.findIndex((function(e){return e.id===c.payload.id}));return-1!==r&&n.splice(r,1),localStorage.setItem("cart",JSON.stringify(n)),Object(m.a)(Object(m.a)({},e),{},{card:n});case s.DELETE_FROM_FAVOURITES:var l=e.favourites.indexOf(c.payload),o=Object(u.a)(e.favourites);return o.splice(l,1),Object(m.a)(Object(m.a)({},e),{},{favourites:o});case s.SET_PRODUCTS:return Object(m.a)(Object(m.a)({},e),{},{products:c.payload})}}var D={state:{itemsPerPage:"4",favourites:[],products:[],card:[],render:!1},dispatch:function(){}},R=b.a.createContext(D),w=function(e){var c=e.children,t=Object(j.useReducer)(A,D.state),a=Object(l.a)(t,2),i=a[0],n=a[1],r=_.a.create({baseURL:"https://ro.sms.destiny4you.com/",withCredentials:!1});return Object(j.useEffect)((function(){r.get("test").then((function(e){return n({type:s.SET_PRODUCTS,payload:e.data.message})}))}),[]),Object(S.jsx)(R.Provider,{value:{state:Object(m.a)(Object(m.a)({},i),{},{products:T(i.products),card:JSON.parse(localStorage.getItem("cart")||"[]")}),dispatch:n},children:c})},I=t(40),P=t.n(I),M=(t(54),function(e){var c,t=e.onClick,s=Object(n.d)(),a=Object(l.a)(s,2),i=a[0],o=a[1],b=new URLSearchParams(i),m=function(e){var c=e.isActive;return d()("text-navbar",{"selected-link-mob":c})},u=function(e){var c=e.isActive;return d()("centrum",{"selected-icons-mob ":c})},O=Object(r.n)(),h=Object(j.useContext)(R).state;return Object(j.useEffect)((function(){b.delete("search"),o(b)}),[O.pathname]),Object(S.jsxs)("div",{className:"navbar-total-mob",children:[Object(S.jsxs)("div",{className:"logo-box-mob mb-32",children:[Object(S.jsx)("div",{className:"ml-24 centrum",children:Object(S.jsx)("img",{src:"./img/icons/logo2.svg",alt:"img"})}),Object(S.jsx)("div",{className:"centrum close-button",children:Object(S.jsx)("img",{src:"./img/icons/closeBlack.svg",alt:"img",onClick:function(){return t(!1)}})})]}),Object(S.jsxs)("div",{className:"links-icons",children:[Object(S.jsx)("div",{className:"navbar-mob",children:Object(S.jsx)("div",{className:"navbar--flex-mob",children:Object(S.jsxs)("div",{className:"navbar-mob",children:[Object(S.jsx)("div",{className:d()("navbar-box-item-mob",{"selected-nav-mob":"/"===O.pathname}),children:Object(S.jsx)(n.c,{to:"/",className:m,children:"Home"})}),Object(S.jsx)("div",{className:d()("navbar-box-item-mob",{"selected-nav-mob":(c="phones",O.pathname.includes(c))}),children:Object(S.jsx)(n.c,{to:"/phones",className:m,children:"Phones"})}),Object(S.jsx)("div",{className:"navbar-box-item-mob",children:Object(S.jsx)(n.c,{to:"/tablets",className:m,children:"Tablets"})}),Object(S.jsx)("div",{className:"navbar-box-item-mob",children:Object(S.jsx)(n.c,{to:"/accessoires",className:m,children:"Accessoires"})})]})})}),Object(S.jsxs)("div",{className:"navbar-icons-mob",children:[Object(S.jsx)("div",{className:"navbar_icon-mob",children:Object(S.jsx)("div",{className:"half",children:Object(S.jsxs)(n.c,{to:"/favourites",className:u,children:[Object(S.jsx)("img",{src:"./img/icons/icon_1.svg",alt:"img"}),h.favourites.length>0&&Object(S.jsx)("div",{className:"red-circle-box-mob",children:Object(S.jsx)("div",{className:"red-circle-mob",children:h.favourites.length})})]})})}),Object(S.jsx)("div",{className:"navbar_icon-mob line-between-icons",children:Object(S.jsx)("div",{className:"half ",children:Object(S.jsxs)(n.c,{to:"/cart",className:u,children:[Object(S.jsx)("img",{src:"./img/icons/icon_2.svg",alt:"img"}),h.card.length>0&&Object(S.jsx)("div",{className:"red-circle-box-mob",children:Object(S.jsx)("div",{className:"red-circle-mob",children:h.card.length})})]})})})]})]})]})}),L=(t(55),function(){return Object(S.jsx)(n.c,{to:"/",children:Object(S.jsx)("div",{className:"logo ml-24",children:Object(S.jsx)("img",{src:"./img/icons/logo2.svg",alt:"img"})})})}),F=function(){var e=Object(n.d)(),c=Object(l.a)(e,2),t=c[0],s=c[1],a=new URLSearchParams(t),i=Object(j.useState)(!1),o=Object(l.a)(i,2),b=o[0],m=o[1],u=Object(j.useState)(""),O=Object(l.a)(u,2),h=O[0],x=O[1],v=function(e){var c=e.isActive;return d()("text-navbar",{"selected-link":c})},g=function(e){var c=e.isActive;return d()({"selected-icons":c})},f=Object(r.n)(),p=Object(j.useContext)(R).state,N=Object(r.r)().productId;Object(j.useEffect)((function(){a.delete("search"),s(a)}),[]),Object(j.useEffect)((function(){x("")}),[f.pathname]);var y,E=Object(j.useCallback)(P()((function(e){e?a.set("search",e):a.delete("search"),s(a)}),1e3),[f.pathname]);return b?Object(S.jsx)(M,{onClick:m}):Object(S.jsxs)("div",{className:"navbar-total",children:[console.count(),Object(S.jsxs)("div",{className:"navbar",children:[Object(S.jsx)(L,{}),Object(S.jsx)("div",{className:"navbar--flex",children:"/cart"!==f.pathname&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:d()("navbar-box-item",{"selected-nav":"/"===f.pathname}),children:Object(S.jsx)(n.c,{to:"/",className:v,children:"Home"})}),Object(S.jsx)("div",{className:d()("navbar-box-item",{"selected-nav":(y="phones",f.pathname.includes(y))}),children:Object(S.jsx)(n.c,{to:"/phones",className:v,children:"Phones"})}),Object(S.jsx)("div",{className:"navbar-box-item",children:Object(S.jsx)(n.c,{to:"tablets",className:v,children:"Tablets"})}),Object(S.jsx)("div",{className:"navbar-box-item",children:Object(S.jsx)(n.c,{to:"/accessoires",className:v,children:"Accessoires"})})]})})]}),Object(S.jsxs)("div",{className:"navbar-icons",children:["/"!==f.pathname&&"/cart"!==f.pathname&&!N&&Object(S.jsxs)("div",{className:"navbar_icon navbar_icon--search navbar-icons",children:[Object(S.jsx)("div",{className:"search_box search-align search-align--input",children:Object(S.jsx)("input",{className:"search--input",placeholder:"Search in ".concat(f.pathname.slice(1),"..."),value:h,onChange:function(e){return function(e){E(e.target.value),x(e.target.value)}(e)}})}),Object(S.jsx)("div",{className:"search-align search-align--search",children:h.length>0?Object(S.jsx)("img",{src:"./img/icons/closeBlack.svg",alt:"img",onClick:function(){a.delete("search"),s(a),x("")}}):Object(S.jsx)("img",{src:"./img/icons/search.svg",alt:"img"})})]}),"/cart"!==f.pathname&&Object(S.jsx)(n.c,{to:"/favourites",className:g,children:Object(S.jsxs)("div",{className:"navbar_icon navbar-icons",children:[Object(S.jsx)("img",{src:"./img/icons/icon_1.svg",alt:"img"}),p.favourites.length>0&&Object(S.jsx)("div",{className:"red-circle-box",children:Object(S.jsx)("div",{className:"red-circle",children:p.favourites.length})})]})}),Object(S.jsx)(n.c,{to:"/cart",className:g,children:Object(S.jsxs)("div",{className:"navbar_icon navbar-icons",children:[Object(S.jsx)("img",{src:"./img/icons/icon_2.svg",alt:"img"}),p.card.length>0&&Object(S.jsx)("div",{className:"red-circle-box",children:Object(S.jsx)("div",{className:"red-circle",children:p.card.length})})]})})]}),Object(S.jsx)("div",{className:"navbar_icon navbar-icons-small-screen",onClick:function(){return m(!0)},children:Object(S.jsx)("img",{src:"./img/icons/burger.svg",alt:"img"})})]})},U=(t(56),function(e){var c=e.onClick;return Object(S.jsxs)("div",{className:"footer",children:[Object(S.jsx)(L,{}),Object(S.jsxs)("div",{className:"footer-arrow-block",children:[Object(S.jsx)(n.c,{to:"https://github.com/mate-academy/react_phone-catalog/pull/361",className:"footer-center-text mr-64",target:"_blank",children:"Github"}),Object(S.jsx)(n.c,{to:"https://github.com/mate-academy/react_phone-catalog/pull/361",className:"footer-center-text mr-64",target:"_blank",children:"Contacts"}),Object(S.jsx)(n.c,{to:"https://github.com/mate-academy/react_phone-catalog/pull/361",className:"footer-center-text mr-64",target:"_blank",children:"Rights"})]}),Object(S.jsxs)("div",{className:"footer-arrow-block",onClick:c,onKeyDown:c,role:"button",tabIndex:0,children:[Object(S.jsx)("div",{className:"footer-arrow-text",children:"Back to top"}),Object(S.jsx)("div",{className:"footer-arrow",style:{marginRight:24},children:Object(S.jsx)("img",{src:"./img/icons/arrowTop.svg",alt:"img"})})]})]})}),B=(t(57),function(e){var c=e.path.split("/"),t=c[1].substring(1),s=c[1].charAt(0).toLocaleUpperCase()+t,a=Object(j.useContext)(R).state.products.find((function(e){return e.id===+c[2]}));return Object(S.jsxs)("div",{className:"navigation-block",children:[Object(S.jsx)(n.c,{to:"/",className:function(e){var c=e.isActive;return d()("text-navbar",{"selected-link":c})},children:Object(S.jsx)("div",{className:"mr-8 navigator-image",children:Object(S.jsx)("img",{src:"./img/icons/Home.svg",className:"bottom-range",alt:"img"})})}),Object(S.jsx)("div",{className:"mr-8 navigator-image",children:Object(S.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"img"})}),Object(S.jsx)(n.c,{className:"mr-8 navigator-text",to:c[1],children:s}),a&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"mr-8 navigator-image",children:Object(S.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"img"})}),Object(S.jsx)("div",{className:"navigator-text navigator-text-second",children:null===a||void 0===a?void 0:a.name})]})]})}),G=function(){var e=Object(j.useRef)(null),c=Object(r.n)(),t=Object(r.r)().productId,s="/"!==c.pathname&&"/cart"!==c.pathname;return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("div",{ref:e}),Object(S.jsx)(F,{}),Object(S.jsxs)("div",{className:"commonPage-container ",children:[s&&Object(S.jsx)("div",{className:void 0===t?"breadcrumbs":"",children:Object(S.jsx)(B,{path:c.pathname})}),Object(S.jsx)(r.a,{})]}),Object(S.jsx)(U,{onClick:function(){e.current&&e.current.scrollIntoView({behavior:"smooth"})}})]})},V=(t(34),function(e){var c=e.action;return Object(S.jsx)("div",{className:"button-square ml-16",onClick:c,"data-cy":"paginationRight",children:Object(S.jsx)("img",{src:"./img/icons/arrowLeftBlack.svg",alt:"img"})})}),q=function(e){var c=e.action;return Object(S.jsx)("div",{className:"button-square mr-16",onClick:c,"data-cy":"paginationLeft",children:Object(S.jsx)("img",{src:"./img/icons/arrow3.svg",alt:"img"})})},K=function(e){for(var c=e.pages,t=Object(n.d)(),s=Object(l.a)(t,1)[0],a=s.get("itemsPerPage")||"4",i=Math.ceil(c/+a),r=s.get("page")||"1",o=[],j=1;j<=i;j++)o.push(j);var b=g();return Object(S.jsxs)("div",{className:"pagination-total",children:[Object(S.jsx)(q,{action:function(){return b(+r>1?+r-1:+r,"page")}}),Object(S.jsx)("div",{className:"page-block ",children:o.map((function(e){return Object(S.jsx)("div",{className:d()("button-square page mr-8",{"selected-page":e===+(s.get("page")||"1")}),onClick:function(){return b(+e,"page")},children:e},e)}))}),Object(S.jsx)(V,{action:function(){return b(+r<o.length?+r+1:+r,"page")}})]})},J=(t(58),function(e){var c=e.headline,t=void 0===c?"Page not found":c;return Object(S.jsx)("div",{className:"font-header page-not-found",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"68vh"},children:t})}),W=(t(59),function(e){var c=e.product,t=Object(j.useContext)(R),a=t.state,i=t.dispatch,r=N();return Object(S.jsxs)("div",{className:"list-item",children:[Object(S.jsx)(n.b,{to:"".concat("phone"===c.type?"/phones":"/tablets","/").concat(c.id),className:"list-item-title",children:Object(S.jsx)("div",{className:"list-item-image",children:Object(S.jsx)("img",{src:c.picsArray[0]})})}),Object(S.jsxs)("div",{className:"list-item-text",children:[Object(S.jsx)("div",{className:"list-item-title",children:Object(S.jsx)("p",{children:Object(S.jsx)(n.b,{to:"".concat("phone"===c.type?"/phones":"/tablets","/").concat(c.id),className:"list-item-title",children:c.name})})}),Object(S.jsxs)("div",{className:"list-item-price pb-8",children:[Object(S.jsx)("div",{style:{paddingRight:"8px"},children:c.price}),Object(S.jsx)("div",{className:"grey done",children:c.price})]}),Object(S.jsx)("div",{className:"list-item-line "}),Object(S.jsxs)("div",{className:"character-block pb-8",children:[Object(S.jsx)("div",{className:"character-text grey",children:"Screen"}),Object(S.jsx)("div",{className:"character-data",children:c.screen.replace("inches",'"')+" & "+c.age})]}),Object(S.jsxs)("div",{className:"character-block pb-8",children:[Object(S.jsx)("div",{className:"character-text grey",children:"Capacity"}),Object(S.jsx)("div",{className:"character-data",children:c.capacity})]}),Object(S.jsxs)("div",{className:"character-block pb-16",children:[Object(S.jsx)("div",{className:"character-text grey",children:"RAM"}),Object(S.jsx)("div",{className:"character-data",children:c.ram+"  "+c.type})]}),Object(S.jsxs)("div",{className:"button-block",children:[Object(S.jsx)("div",{className:d()("item-button",{"item-button-added":x(a.card,c)}),onClick:function(){var e=localStorage.getItem("cart")||"[{}]";x(JSON.parse(e),c)?r(c):i({type:s.ADD_TO_CARD,payload:c})},"data-cy":"addToFavorite",children:x(a.card,c)?"Added to card":"Add to card"}),Object(S.jsx)("div",{onClick:function(){x(a.favourites,c)?i({type:s.DELETE_FROM_FAVOURITES,payload:c}):i({type:s.SET_FAVOUTITES,payload:c})},className:"cp heart-square",children:x(a.favourites,c)?Object(S.jsx)("img",{src:"./img/icons/red.svg",alt:"img"}):Object(S.jsx)("img",{src:"./img/icons/bigHeart2.svg",alt:"img"})})]})]})]})}),H=function(){var e=Object(j.useContext)(R),c=e.state,t=e.dispatch,a=Object(n.d)(),i=Object(l.a)(a,2),o=i[0],d=i[1],b=new URLSearchParams(o),m=o.get("page")||"1",O=o.get("itemsPerPage")||"4",h=o.get("search")||"",x=o.get("sort")||"age",g=Object(j.useState)(x),f=Object(l.a)(g,2),p=f[0],N=f[1],E=Object(r.n)(),C=[],k=[];if(Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]),c.products){var _=E.pathname,T=_.slice(1,_.length-1);if(k=Object(u.a)(c.products.filter((function(e){return e.type===T}))),h.length>0){var A=Object(u.a)(k);if(0===(k=Object(u.a)(A.filter((function(e){return e.name.includes(h)})))).length)return Object(S.jsx)(J,{headline:"Nothing was found"});C=v(k,m,+O)}else C="All"===O?k:v(k,m,+O)}return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"list-container",children:Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{className:"font-header",children:y(E.pathname)}),Object(S.jsxs)("div",{className:"font-models-amount",children:[k.length," models"]}),console.count(),Object(S.jsxs)("div",{className:"select-block",children:[Object(S.jsxs)("div",{className:"select-left",children:[Object(S.jsx)("div",{className:"select-text",children:"Sort by"}),Object(S.jsxs)("select",{value:p,className:"textField",onChange:function(e){return function(e){b.set("sort",e.target.value),d(b),N(e.target.value)}(e)},children:[Object(S.jsx)("option",{value:"age",children:"Newest"}),Object(S.jsx)("option",{value:"ageDesc",children:"Oldest"}),Object(S.jsx)("option",{value:"name",children:"Alphabetically"}),Object(S.jsx)("option",{value:"price",children:"Cheap first"})]})]}),Object(S.jsxs)("div",{className:"select-right",children:[Object(S.jsx)("div",{className:"select-text",children:"Items on page"}),Object(S.jsxs)("select",{className:"textField",defaultValue:O,onChange:function(e){return function(e){var c=Math.ceil(k.length/+e.target.value);+e.target.value>+O&&+m>c?(t({type:s.SET_ITEMS_PER_PAGE,payload:e.target.value}),b.set("itemsPerPage",e.target.value),b.set("page","1"),d(b)):(t({type:s.SET_ITEMS_PER_PAGE,payload:e.target.value}),b.set("itemsPerPage",e.target.value),d(b))}(e)},children:[Object(S.jsx)("option",{value:"4",children:"4"}),Object(S.jsx)("option",{value:"8",children:"8"}),Object(S.jsx)("option",{value:"16",children:"16"}),Object(S.jsx)("option",{value:"All",children:"All"})]})]})]})]})}),Object(S.jsx)("div",{className:"list-container","data-cy":"productList",children:C.map((function(e){return Object(S.jsx)(W,{product:e},e.id)}))}),"All"!==O&&Object(S.jsx)(K,{pages:k.length})]})},Y=(t(35),t(36),function(e){var c=e.pageName,t=e.headline,s=e.array,a=g(),i=Object(n.d)(),r=Object(l.a)(i,1)[0].get(c)||"1",o=Math.ceil(s.length/4),d=v(s,r,4);return Object(S.jsxs)("div",{className:"hot-prices-block",children:[Object(S.jsxs)("div",{className:"header-block",children:[Object(S.jsx)("h1",{className:"home-page-header-text",children:t}),Object(S.jsxs)("div",{className:"arrow-box",children:[Object(S.jsx)(q,{action:function(){return a(+r>1?+r-1:1,c)}}),Object(S.jsx)(V,{action:function(){return a(+r<o?+r+1:+r,c)}})]})]}),Object(S.jsx)("div",{className:"chunk-container",children:d.map((function(e){return Object(S.jsx)(W,{product:e},e.id)}))})]})}),Q=function(e){var c,t,s=e.render,a=Object(j.useState)(0),i=Object(l.a)(a,2),n=i[0],r=i[1],o=Object(j.useState)(0),d=Object(l.a)(o,2),b=d[0],m=d[1],u=Object(j.useRef)(null),O=Object(j.useState)(!1),h=Object(l.a)(O,2),x=h[0],v=(h[1],(null===(c=document.getElementById("root"))||void 0===c?void 0:c.offsetWidth)||{});Object(j.useEffect)((function(){u.current&&+v<=639?r(1):r(0);var e,c=document.getElementById("buttonToClick");return e=setInterval((function(){null===c||void 0===c||c.click()}),5e3),function(){clearInterval(e)}}),[x,null===(t=u.current)||void 0===t?void 0:t.offsetWidth]),Object(j.useEffect)((function(){var e=document.getElementById("buttonToClick");null===e||void 0===e||e.click()}),[s]);function g(){b<0&&m((function(e){return e+100}))}function f(){b<=-100&&m(100),m((function(e){return e+-100}))}return Object(S.jsxs)("div",{className:"banner-block",children:[Object(S.jsx)("div",{className:"banner-button banner-button--left banner-block",onClick:g,onKeyDown:g,role:"button",tabIndex:0,style:{height:Math.trunc(u.current?+u.current.offsetWidth/2.6:0)},children:Object(S.jsx)("img",{src:"./img/icons/arrow3.svg",alt:"img"})}),Object(S.jsx)("div",{className:"images-container",ref:u,children:[[{image:"./img/icons/Banner.svg"},{image:"./img/icons/Banner2jpg.jpg"}],[{image:"./img/icons/image16.png"},{image:"./img/icons/image16_2.png"}]][n].map((function(e){return Object(S.jsx)("img",{className:"image",src:e.image,style:{width:Math.trunc(u.current?+u.current.offsetWidth:0),height:Math.trunc(u.current?+v>=640?+u.current.offsetWidth/2.6:+u.current.offsetWidth:0),transform:"translateX(".concat(b,"%)")}},e.image)}))}),Object(S.jsx)("div",{id:"buttonToClick",className:"banner-button banner-button--right banner-block",onClick:f,onKeyDown:f,role:"button",tabIndex:0,style:{height:Math.trunc(u.current?+u.current.offsetWidth/2.6:0)},children:Object(S.jsx)("img",{src:"./img/icons/arrowLeftBlack.svg",alt:"img"})})]})},z=function(){Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]);var e,c=Object(j.useContext)(R).state;return Object(S.jsxs)("div",{children:[Object(S.jsx)(Q,{render:location.pathname}),Object(S.jsx)(Y,{pageName:"pageTop",headline:"Hot prices",array:(e=c.products,e.filter((function(e){return e.discount>0})),e.sort((function(e,c){return k(+e.price.slice(1)*(1-e.discount/100),+c.price.slice(1)*(1-c.discount/100))})))}),Object(S.jsx)("h1",{className:"home-page-header-text",children:"Shop by category"}),Object(S.jsxs)("div",{className:"chunk-container-category chunk-container-big category-box",children:[Object(S.jsxs)(n.b,{to:"/phones",className:"link",replace:!0,children:[Object(S.jsx)("div",{className:"square left mb-24",children:Object(S.jsx)("img",{className:"category-img",src:"./img/covers/image6.png",alt:"img",style:{float:"right"}})}),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"big-title",children:"Mobile phones"}),Object(S.jsx)("div",{className:"small-title",children:c.products.filter((function(e){return"phone"===e.type})).length+" models"})]})})]}),Object(S.jsxs)(n.b,{to:"/tablets",className:"link",children:[Object(S.jsx)("div",{className:"square left mb-24",children:Object(S.jsx)("img",{className:"category-img",src:"./img/covers/image5.png",alt:"img",style:{float:"right"}})}),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"big-title",children:"Tablets"}),Object(S.jsx)("div",{className:"small-title",children:c.products.filter((function(e){return"tablet"===e.type})).length+" models"})]})})]}),Object(S.jsxs)(n.b,{to:"/accessories",className:"link",children:[Object(S.jsx)("div",{className:"square left mb-24",children:Object(S.jsx)("img",{className:"category-img",src:"./img/covers/image7.png",alt:"img",style:{float:"right"}})}),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"big-title",children:"Accessories"}),Object(S.jsx)("div",{className:"small-title",children:c.products.filter((function(e){return"accessoire"===e.type})).length+" models"})]})})]})]}),Object(S.jsx)(Y,{pageName:"pageDown",headline:"Brand new models",array:C(c.products)})]})},X=(t(24),t(67)),Z=function(e){var c=e.selectedColor,t=e.id,s=e.color,a=e.onClick;return Object(S.jsx)("div",{id:t,className:d()("color-cirlce mr-8",{selected:c===t}),onClick:function(e){return a(e.currentTarget.id)},children:Object(S.jsx)("div",{className:"color-cirlce-small",style:{backgroundColor:s}})})},$=function(e){var c=e.capacity,t=e.selectedCapacity,s=e.onClick;return Object(S.jsx)("div",{id:c,className:d()("capacity-square mr-8",{"capacity-selected":t===c}),onClick:function(e){return s(e.currentTarget.id)},children:c})},ee=function(e){var c=e.fieldName,t=e.fieldDescription;return Object(S.jsxs)("div",{className:"dflex mb-8",style:{justifyContent:"space-between"},children:[Object(S.jsx)("div",{children:c}),Object(S.jsx)("div",{style:{color:"#313237"},children:t.replace(" inches",'"')})]})},ce=(t(60),function(){var e=Object(r.p)();return Object(S.jsxs)("div",{className:"back-button-box mb-16 ",onClick:function(){return e("..")},onKeyDown:function(){return e("..")},role:"button",tabIndex:0,children:[Object(S.jsx)("div",{className:"back-button-align mr-4",children:Object(S.jsx)("img",{src:"./img/icons/arrowBackBlack.svg",alt:"img"})}),Object(S.jsx)("div",{className:"back-button",children:"Back"})]})}),te=function(){var e=Object(j.useState)("yellow"),c=Object(l.a)(e,2),t=c[0],a=c[1],i=Object(j.useState)("64 GB"),n=Object(l.a)(i,2),o=n[0],b=n[1],m=Object(r.r)().productId,u=Object(j.useRef)(null),O=Object(j.useState)(),h=Object(l.a)(O,2),v=h[0],g=h[1],f=Object(j.useState)(""),p=Object(l.a)(f,2),N=p[0],y=p[1],C=Object(j.useContext)(R),k=C.state,_=C.dispatch,T=Object(j.useState)([]),A=Object(l.a)(T,2),D=A[0],w=A[1],I=Object(j.useState)([]),P=Object(l.a)(I,2),M=P[0],L=P[1];if(Object(j.useEffect)((function(){m&&(g(k.products.find((function(e){return e.id===+m}))),v&&(w(v.picsArray),L(v.description.split("/")))),a("yellow")}),[k.products,m,null===v||void 0===v?void 0:v.description]),Object(j.useEffect)((function(){!function(e){if(v)switch(e){case"yellow":default:w(v.picsArray);break;case"green":v.picsArray2&&w(v.picsArray2);break;case"brown":v.picsArray3&&w(v.picsArray3);break;case"grey":v.picsArray4&&w(v.picsArray4)}}(t),u.current&&u.current.scrollIntoView({behavior:"smooth"})}),[u.current,v,t]),Object(j.useEffect)((function(){y(D[0])}),[D,u.current,v,t]),void 0===v)return Object(S.jsx)(J,{});return Object(S.jsxs)("div",{className:"",children:[Object(S.jsx)(ce,{}),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"font-header",ref:u,children:null===v||void 0===v?void 0:v.name}),Object(S.jsxs)("div",{className:"upper-block mb-80",style:{justifyContent:"space-between"},children:[Object(S.jsxs)("div",{className:"pictures-block",children:[Object(S.jsx)("div",{className:"picture-column",children:D.map((function(e){return Object(S.jsx)("div",{className:"small-picbox",onClick:function(){return y(e)},children:Object(S.jsx)("img",{src:e,alt:"img",className:"small-pic"})},Object(X.a)())}))}),Object(S.jsx)("div",{className:"big-picture-box",children:Object(S.jsx)("img",{src:N,alt:"img",className:"big-picture"})})]}),Object(S.jsx)("div",{className:"dflexcolumn tech-specs",children:Object(S.jsx)("div",{className:"dflex space-between grey id-text ",children:Object(S.jsxs)("div",{className:"",style:{width:"100%"},children:[Object(S.jsxs)("div",{className:"space-between",children:[Object(S.jsx)("div",{className:"mb-8",children:"Avalaible colors"}),Object(S.jsxs)("div",{children:["ID: ",null===v||void 0===v?void 0:v.id]})]}),Object(S.jsxs)("div",{className:"down",children:[Object(S.jsxs)("div",{className:"dflex mb-24",children:[Object(S.jsx)(Z,{id:"yellow",onClick:a,color:"#fcdbc1",selectedColor:t}),Object(S.jsx)(Z,{id:"green",color:"#5f7170",onClick:a,selectedColor:t}),Object(S.jsx)(Z,{id:"brown",color:"#4c4c4c",onClick:a,selectedColor:t}),Object(S.jsx)(Z,{id:"grey",color:"#f0f0f0",onClick:a,selectedColor:t})]}),Object(S.jsx)("div",{className:"grey-line mb-24"}),Object(S.jsx)("div",{className:"mb-8",children:"Select capacity"}),Object(S.jsxs)("div",{className:"capacity-box dflex mb-24",children:[Object(S.jsx)($,{capacity:"64 GB",onClick:b,selectedCapacity:o}),Object(S.jsx)($,{capacity:"256 GB",onClick:b,selectedCapacity:o}),Object(S.jsx)($,{capacity:"512 GB",onClick:b,selectedCapacity:o})]}),Object(S.jsx)("div",{className:"grey-line mb-32"}),Object(S.jsx)("div",{className:"upper-box-text mb-16",children:Object(S.jsxs)("div",{className:"dflex",children:[Object(S.jsx)("div",{className:"product-card-price mr-8",children:null===v||void 0===v?void 0:v.price}),Object(S.jsx)("div",{className:"done grey font22",children:null===v||void 0===v?void 0:v.price})]})}),Object(S.jsxs)("div",{className:"dflex mb-32",style:{justifyContent:"space-between"},children:[Object(S.jsx)("div",{className:d()("button-add-to-card mr-8",{"button-added":x(k.card,v)}),onClick:function(){x(k.card,v)?_({type:s.DELETE_FROM_CARD,payload:v}):_({type:s.ADD_TO_CARD,payload:v})},"data-cy":"addToFavorite",children:x(k.card,v)?"Added to card":"Add to card"}),Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:"favourite cp",onClick:function(){x(k.favourites,v)?_({type:s.DELETE_FROM_FAVOURITES,payload:v}):_({type:s.SET_FAVOUTITES,payload:v})},children:x(k.favourites,v)?Object(S.jsx)("img",{src:"./img/icons/red.svg",alt:"img"}):Object(S.jsx)("img",{src:"./img/icons//icon_1.svg",alt:"img"})})})]}),Object(S.jsxs)("div",{className:"tech-details-block",children:[Object(S.jsx)(ee,{fieldName:"Screen",fieldDescription:null===v||void 0===v?void 0:v.screen}),Object(S.jsx)(ee,{fieldName:"Resolution",fieldDescription:null===v||void 0===v?void 0:v.screenResolution}),Object(S.jsx)(ee,{fieldName:"Processor",fieldDescription:null===v||void 0===v?void 0:v.processor}),Object(S.jsx)(ee,{fieldName:"RAM",fieldDescription:null===v||void 0===v?void 0:v.ram})]})]})]})})})]}),Object(S.jsxs)("div",{className:"lower-block dflex mb-80",style:{justifyContent:"space-between"},children:[Object(S.jsxs)("div",{className:"about","data-cy":"productDescription",children:[Object(S.jsx)("div",{className:"about-header mb-16",children:"About"}),Object(S.jsx)("div",{className:"grey-line mb-32"}),Object(S.jsx)("div",{className:"header-small",children:M[0]}),Object(S.jsx)("p",{className:"grey-text",children:M[1]}),Object(S.jsx)("p",{className:"grey-text",children:M[2]}),Object(S.jsx)("div",{className:"header-small",children:M[3]}),Object(S.jsx)("p",{className:"grey-text",children:M[4]}),Object(S.jsx)("div",{className:"header-small",children:M[5]}),Object(S.jsx)("p",{className:"grey-text",style:{marginBottom:0},children:M[6]})]}),Object(S.jsxs)("div",{className:"tech-specs",children:[Object(S.jsx)("div",{className:"about-header mb-16",children:"Tech specs"}),Object(S.jsx)("div",{className:"grey-line mb-32"}),Object(S.jsxs)("div",{className:"tech-details-block grey",children:[Object(S.jsx)(ee,{fieldName:"Screen",fieldDescription:null===v||void 0===v?void 0:v.screen}),Object(S.jsx)(ee,{fieldName:"Resolution",fieldDescription:null===v||void 0===v?void 0:v.screenResolution}),Object(S.jsx)(ee,{fieldName:"Processor",fieldDescription:null===v||void 0===v?void 0:v.processor}),Object(S.jsx)(ee,{fieldName:"RAM",fieldDescription:null===v||void 0===v?void 0:v.ram}),Object(S.jsx)(ee,{fieldName:"Buit in memory",fieldDescription:null===v||void 0===v?void 0:v.builtInMemory}),Object(S.jsx)(ee,{fieldName:"Camera",fieldDescription:null===v||void 0===v?void 0:v.camera}),Object(S.jsx)(ee,{fieldName:"Zoom",fieldDescription:null===v||void 0===v?void 0:v.zoom}),Object(S.jsx)(ee,{fieldName:"Cell",fieldDescription:null===v||void 0===v?void 0:v.cell})]})]})]})]}),Object(S.jsx)(Y,{pageName:"suggested",headline:"You may also like",array:E(k.products)})]})},se=(t(61),function(){var e=Object(j.useContext)(R).state,c=Object(n.d)(),t=Object(l.a)(c,1)[0].get("search")||"",s=Object(u.a)(e.favourites);return Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]),0===e.favourites.length?Object(S.jsx)(J,{headline:"Nothing was found"}):(t.length>0&&(s=Object(u.a)(s.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})))),Object(S.jsx)("div",{className:"list-container",children:s.map((function(e){return Object(S.jsx)(W,{product:e},e.id)}))}))}),ae=(t(37),function(e){var c=e.summary,t=e.reduce,a=e.phone,i=Object(j.useContext)(R),n=i.state,r=i.dispatch,l=N();function o(){r({type:s.ADD_TO_CARD,payload:a})}function d(){n.card.filter((function(e){return e.id===a.id})).length>0&&(t(+a.price.slice(1)),r({type:s.DELETE_FROM_CARD,payload:a}))}return Object(S.jsx)("div",{className:"item-container mb-16",children:Object(S.jsxs)("div",{className:"cart-element",children:[Object(S.jsxs)("div",{className:"cart-button-box-chunk",children:[Object(S.jsx)("div",{className:"close",onClick:function(){return l(a)},onKeyDown:function(){return r({type:s.DELETE_FROM_CARD,payload:a})},role:"button",tabIndex:0,"data-cy":"cartDeleteButton",children:Object(S.jsx)("img",{src:"./img/icons/close.svg",alt:"img"})}),Object(S.jsx)("div",{className:"",children:a&&Object(S.jsx)("img",{src:a.picsArray[0],alt:"img",className:"cart-image"})}),Object(S.jsx)("div",{className:"cart-name ",children:a&&a.name})]}),Object(S.jsxs)("div",{className:"cart-button-box-chunk ",children:[Object(S.jsxs)("div",{className:"cart-button-box",children:[Object(S.jsx)("div",{className:"cart-square-border",onClick:d,onKeyDown:d,role:"button",tabIndex:0,children:"-"}),Object(S.jsx)("div",{className:"cart-square",children:n.card.filter((function(e){return e.id===a.id})).length}),Object(S.jsx)("div",{className:"cart-square-border",onClick:function(){o(),c(+a.price.slice(1))},role:"button",tabIndex:0,onKeyDown:o,children:"+"})]}),Object(S.jsx)("div",{className:"cart-price ","data-cy":"productQauntity",children:Number(null===a||void 0===a?void 0:a.price.slice(1))*n.card.filter((function(e){return e.id===a.id})).length})]})]})})}),ie=(t(62),function(e){var c=e.closePopUp,t=Object(j.useContext)(R).dispatch;function a(){localStorage.removeItem("cart"),c(!1),t({type:s.RENDER_PAGE})}return Object(S.jsxs)("div",{className:"popup-box",children:[Object(S.jsx)("div",{className:"mb-24",children:" Would you like to wipe the cart?"}),Object(S.jsxs)("div",{className:"popup-button-box",children:[Object(S.jsx)("div",{role:"button",tabIndex:0,className:"popup-button",onClick:function(){return c(!1)},onKeyDown:function(){return c(!1)},children:"Cancel"}),Object(S.jsx)("div",{role:"button",tabIndex:0,className:"popup-button ml-30",onClick:a,onKeyDown:a,children:"Wipe the cart"})]})]})}),ne=function(){var e=Object(j.useState)(0),c=Object(l.a)(e,2),t=c[0],s=c[1],a=Object(j.useContext)(R).state,i=Object(j.useState)(),n=Object(l.a)(i,2),r=n[0],o=n[1],d=p(a.card),b=Object(j.useState)(!1),m=Object(l.a)(b,2),u=m[0],O=m[1];Object(j.useEffect)((function(){o(d)}),[p(a.card).length]),Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.useEffect)((function(){var e=0;a.card.map((function(c){return e+=+c.price.slice(1)})),s(e)}),[a.card,a.render]);var h=function(e){s((function(c){return+c+e}))},x=function(e){s((function(c){return+c-e}))};return Object(S.jsxs)("div",{className:"mb-80 mt-24 parent",children:[Object(S.jsxs)("div",{className:"",children:[Object(S.jsx)(ce,{}),Object(S.jsxs)("div",{className:"cart-box",children:[Object(S.jsx)("div",{children:a.card.length>0?null===r||void 0===r?void 0:r.map((function(e){return Object(S.jsx)(ae,{summary:h,reduce:x,phone:e},e.id)})):Object(S.jsx)("div",{className:"empty-cart-box",children:Object(S.jsx)("div",{children:"Your cart is empty"})})}),Object(S.jsxs)("div",{className:"summary",children:[Object(S.jsx)("div",{children:t}),Object(S.jsx)("div",{className:"mb-24",children:"Total"}),Object(S.jsx)("div",{className:"grey-line mb-24",style:{width:"90%"}}),Object(S.jsx)("div",{className:"summary-button",onClick:function(){return O(!0)},onKeyDown:function(){return O(!0)},role:"button",tabIndex:0,children:"Checkout"})]})]})]}),u&&Object(S.jsx)(ie,{closePopUp:O})]})},re=function(){return Object(S.jsx)(n.a,{children:Object(S.jsx)(w,{children:Object(S.jsx)(r.d,{children:Object(S.jsxs)(r.b,{path:"/",element:Object(S.jsx)(G,{}),children:[Object(S.jsx)(r.b,{index:!0,element:Object(S.jsx)(z,{})}),Object(S.jsxs)(r.b,{path:"phones",children:[Object(S.jsx)(r.b,{index:!0,element:Object(S.jsx)(H,{})}),Object(S.jsx)(r.b,{path:":productId?",element:Object(S.jsx)(te,{})})]}),Object(S.jsxs)(r.b,{path:"/tablets",children:[Object(S.jsx)(r.b,{index:!0,element:Object(S.jsx)(H,{})}),Object(S.jsx)(r.b,{path:":productId?",element:Object(S.jsx)(te,{})})]}),Object(S.jsx)(r.b,{path:"favourites",element:Object(S.jsx)(se,{})}),Object(S.jsx)(r.b,{path:"cart",element:Object(S.jsx)(ne,{})}),Object(S.jsx)(r.b,{path:"*",element:Object(S.jsx)(J,{})})]})})})})};i.a.render(Object(S.jsx)(re,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.7b7144ef.chunk.js.map