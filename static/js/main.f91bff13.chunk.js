(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{24:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s,a=c(38),i=c.n(a),n=(c(33),c(45),c(6)),r=c(5),l=c(4),o=c(10),d=c.n(o),j=(c(46),c(1)),b=c.n(j),u=c(11),m=c(9),O=c(39),h=c.n(O);function x(e,t){return void 0!==e.find((function(e){return e.id===t.id}))}function v(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,s=+t*+c,a=s-+c,i=e.slice(a,s);return i}function g(){var e=Object(n.d)(),t=Object(l.a)(e,2),c=t[0],s=t[1],a=new URLSearchParams(c);return function(e,t){a.set(t,String(e)),s(a)}}function f(e,t){return e.age<t.age?-1:e.age>t.age?1:0}function p(e){for(var t=[],c=function(c){void 0===t.find((function(t){return t.id===e[c].id}))&&t.push(e[c])},s=0;s<=e.length-1;s++)c(s);return t}function N(){var e=Object(j.useContext)(D),t=e.state,c=e.dispatch,a=h.a.cloneDeep(t.card);return function e(t){for(;void 0!==a.find((function(e){return e.id===t.id}));)a.forEach((function(e){if(e.id===t.id){var i=a.findIndex((function(e){return e.id===t.id}));a.splice(i,1),c({type:s.DELETE_FROM_CARD,payload:t})}})),e(t)}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="";return"/phones"===e&&(t="Mobile phones"),"/tablets"===e&&(t="Tablets"),"/accessoires"===e&&(t="Accessoires"),t}function E(e){return e.filter((function(e){return 0===e.discount}))}function C(e,t){var c=+e,s=+t;return c<s?-1:c>s?1:0}!function(e){e[e.SET_ITEMS_PER_PAGE=0]="SET_ITEMS_PER_PAGE",e[e.SET_SEARCH_QUERY=1]="SET_SEARCH_QUERY",e[e.SET_FAVOUTITES=2]="SET_FAVOUTITES",e[e.SET_PRODUCTS=3]="SET_PRODUCTS",e[e.ADD_TO_CARD=4]="ADD_TO_CARD",e[e.DELETE_FROM_CARD=5]="DELETE_FROM_CARD",e[e.DELETE_FROM_FAVOURITES=6]="DELETE_FROM_FAVOURITES",e[e.RENDER_PAGE=7]="RENDER_PAGE"}(s||(s={}));var k=c(66),_=c(0);function S(e){var t=Object(n.d)(),c=Object(l.a)(t,1)[0].get("sort")||"",s=Object(m.a)(e.sort(f));switch(c){case"age":default:s=e.sort(f);break;case"ageDesc":s.reverse();break;case"name":s.sort((function(e,t){return function(e,t){var c=e.toLocaleLowerCase(),s=t.toLocaleLowerCase();return c<s?-1:c>s?1:0}(e.name,t.name)}));break;case"price":s.sort((function(e,t){return C(+e.price.slice(1),+t.price.slice(1))}))}return s}function T(e,t){switch(t.type){case s.SET_ITEMS_PER_PAGE:return Object(u.a)(Object(u.a)({},e),{},{itemsPerPage:t.payload});case s.RENDER_PAGE:return Object(u.a)(Object(u.a)({},e),{},{render:!e.render});case s.SET_FAVOUTITES:return Object(u.a)(Object(u.a)({},e),{},{favourites:[].concat(Object(m.a)(e.favourites),[t.payload])});case s.ADD_TO_CARD:var c=JSON.parse(localStorage.getItem("cart")||"[]");localStorage.setItem("cart",JSON.stringify([].concat(Object(m.a)(c),[t.payload])));var a=JSON.parse(localStorage.getItem("cart")||"[]");return Object(u.a)(Object(u.a)({},e),{},{card:a});case s.DELETE_FROM_CARD:var i=JSON.parse(localStorage.getItem("cart")||"[]"),n=Object(m.a)(i),r=n.findIndex((function(e){return e.id===t.payload.id}));return-1!==r&&n.splice(r,1),localStorage.setItem("cart",JSON.stringify(n)),Object(u.a)(Object(u.a)({},e),{},{card:n});case s.DELETE_FROM_FAVOURITES:var l=e.favourites.indexOf(t.payload),o=Object(m.a)(e.favourites);return o.splice(l,1),Object(u.a)(Object(u.a)({},e),{},{favourites:o});case s.SET_PRODUCTS:return Object(u.a)(Object(u.a)({},e),{},{products:t.payload})}}var A={state:{itemsPerPage:"4",favourites:[],products:[],card:[],render:!1},dispatch:function(){}},D=b.a.createContext(A),w=function(e){var t=e.children,c=Object(j.useReducer)(T,A.state),a=Object(l.a)(c,2),i=a[0],n=a[1],r=k.a.create({baseURL:"https://ro.sms.destiny4you.com/",withCredentials:!1});return Object(j.useEffect)((function(){r.get("test").then((function(e){return n({type:s.SET_PRODUCTS,payload:e.data.message})}))}),[]),Object(_.jsx)(D.Provider,{value:{state:Object(u.a)(Object(u.a)({},i),{},{products:S(i.products),card:JSON.parse(localStorage.getItem("cart")||"[]")}),dispatch:n},children:t})},R=c(40),I=c.n(R),P=(c(54),function(e){var t,c=e.onClick,s=Object(n.d)(),a=Object(l.a)(s,2),i=a[0],o=a[1],b=new URLSearchParams(i),u=function(e){var t=e.isActive;return d()("text-navbar",{"selected-link-mob":t})},m=function(e){var t=e.isActive;return d()("centrum",{"selected-icons-mob ":t})},O=Object(r.n)(),h=Object(j.useContext)(D).state;return Object(j.useEffect)((function(){b.delete("search"),o(b)}),[O.pathname]),Object(_.jsxs)("div",{className:"navbar-total-mob",children:[Object(_.jsxs)("div",{className:"logo-box-mob mb-32",children:[Object(_.jsx)("div",{className:"ml-24 centrum",children:Object(_.jsx)("img",{src:"./img/icons/logo2.svg",alt:"img"})}),Object(_.jsx)("div",{className:"centrum close-button",children:Object(_.jsx)("img",{src:"./img/icons/closeBlack.svg",alt:"img",onClick:function(){return c(!1)}})})]}),Object(_.jsxs)("div",{className:"links-icons",children:[Object(_.jsx)("div",{className:"navbar-mob",children:Object(_.jsx)("div",{className:"navbar--flex-mob",children:Object(_.jsxs)("div",{className:"navbar-mob",children:[Object(_.jsx)("div",{className:d()("navbar-box-item-mob",{"selected-nav-mob":"/"===O.pathname}),children:Object(_.jsx)(n.c,{to:"/",className:u,children:"Home"})}),Object(_.jsx)("div",{className:d()("navbar-box-item-mob",{"selected-nav-mob":(t="phones",O.pathname.includes(t))}),children:Object(_.jsx)(n.c,{to:"/phones",className:u,children:"Phones"})}),Object(_.jsx)("div",{className:"navbar-box-item-mob",children:Object(_.jsx)(n.c,{to:"/tablets",className:u,children:"Tablets"})}),Object(_.jsx)("div",{className:"navbar-box-item-mob",children:Object(_.jsx)(n.c,{to:"/accessoires",className:u,children:"Accessoires"})})]})})}),Object(_.jsxs)("div",{className:"navbar-icons-mob",children:[Object(_.jsx)("div",{className:"navbar_icon-mob",children:Object(_.jsx)("div",{className:"half",children:Object(_.jsxs)(n.c,{to:"/favourites",className:m,children:[Object(_.jsx)("img",{src:"./img/icons/icon_1.svg",alt:"img"}),h.favourites.length>0&&Object(_.jsx)("div",{className:"red-circle-box-mob",children:Object(_.jsx)("div",{className:"red-circle-mob",children:h.favourites.length})})]})})}),Object(_.jsx)("div",{className:"navbar_icon-mob line-between-icons",children:Object(_.jsx)("div",{className:"half ",children:Object(_.jsxs)(n.c,{to:"/cart",className:m,children:[Object(_.jsx)("img",{src:"./img/icons/icon_2.svg",alt:"img"}),h.card.length>0&&Object(_.jsx)("div",{className:"red-circle-box-mob",children:Object(_.jsx)("div",{className:"red-circle-mob",children:h.card.length})})]})})})]})]})]})}),M=(c(55),function(){return Object(_.jsx)(n.c,{to:"/",children:Object(_.jsx)("div",{className:"logo ml-24",children:Object(_.jsx)("img",{src:"./img/icons/logo2.svg",alt:"img"})})})}),L=function(){var e=Object(n.d)(),t=Object(l.a)(e,2),c=t[0],s=t[1],a=new URLSearchParams(c),i=Object(j.useState)(!1),o=Object(l.a)(i,2),b=o[0],u=o[1],m=Object(j.useState)(""),O=Object(l.a)(m,2),h=O[0],x=O[1],v=function(e){var t=e.isActive;return d()("text-navbar",{"selected-link":t})},g=function(e){var t=e.isActive;return d()({"selected-icons":t})},f=Object(r.n)(),p=Object(j.useContext)(D).state,N=Object(r.r)().productId;Object(j.useEffect)((function(){a.delete("search"),s(a)}),[]),Object(j.useEffect)((function(){x("")}),[f.pathname]);var y,E=Object(j.useCallback)(I()((function(e){e?a.set("search",e):a.delete("search"),s(a)}),1e3),[f.pathname]);return b?Object(_.jsx)(P,{onClick:u}):Object(_.jsxs)("div",{className:"navbar-total",children:[console.count(),Object(_.jsxs)("div",{className:"navbar",children:[Object(_.jsx)(M,{}),Object(_.jsx)("div",{className:"navbar--flex",children:"/cart"!==f.pathname&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:d()("navbar-box-item",{"selected-nav":"/"===f.pathname}),children:Object(_.jsx)(n.c,{to:"/",className:v,children:"Home"})}),Object(_.jsx)("div",{className:d()("navbar-box-item",{"selected-nav":(y="phones",f.pathname.includes(y))}),children:Object(_.jsx)(n.c,{to:"/phones",className:v,children:"Phones"})}),Object(_.jsx)("div",{className:"navbar-box-item",children:Object(_.jsx)(n.c,{to:"tablets",className:v,children:"Tablets"})}),Object(_.jsx)("div",{className:"navbar-box-item",children:Object(_.jsx)(n.c,{to:"/accessoires",className:v,children:"Accessoires"})})]})})]}),Object(_.jsxs)("div",{className:"navbar-icons",children:["/"!==f.pathname&&"/cart"!==f.pathname&&!N&&Object(_.jsxs)("div",{className:"navbar_icon navbar_icon--search navbar-icons",children:[Object(_.jsx)("div",{className:"search_box search-align search-align--input",children:Object(_.jsx)("input",{className:"search--input",placeholder:"Search in ".concat(f.pathname.slice(1),"..."),value:h,onChange:function(e){return function(e){E(e.target.value),x(e.target.value)}(e)}})}),Object(_.jsx)("div",{className:"search-align search-align--search",children:h.length>0?Object(_.jsx)("img",{src:"./img/icons/closeBlack.svg",alt:"img",onClick:function(){a.delete("search"),s(a),x("")}}):Object(_.jsx)("img",{src:"./img/icons/search.svg",alt:"img"})})]}),"/cart"!==f.pathname&&Object(_.jsx)(n.c,{to:"/favourites",className:g,children:Object(_.jsxs)("div",{className:"navbar_icon navbar-icons",children:[Object(_.jsx)("img",{src:"./img/icons/icon_1.svg",alt:"img"}),p.favourites.length>0&&Object(_.jsx)("div",{className:"red-circle-box",children:Object(_.jsx)("div",{className:"red-circle",children:p.favourites.length})})]})}),Object(_.jsx)(n.c,{to:"/cart",className:g,children:Object(_.jsxs)("div",{className:"navbar_icon navbar-icons",children:[Object(_.jsx)("img",{src:"./img/icons/icon_2.svg",alt:"img"}),p.card.length>0&&Object(_.jsx)("div",{className:"red-circle-box",children:Object(_.jsx)("div",{className:"red-circle",children:p.card.length})})]})})]}),Object(_.jsx)("div",{className:"navbar_icon navbar-icons-small-screen",onClick:function(){return u(!0)},children:Object(_.jsx)("img",{src:"./img/icons/burger.svg",alt:"img"})})]})},F=(c(56),function(e){var t=e.onClick;return Object(_.jsxs)("div",{className:"footer",children:[Object(_.jsx)(M,{}),Object(_.jsxs)("div",{className:"footer-arrow-block",children:[Object(_.jsx)(n.c,{to:"https://github.com/mate-academy/react_phone-catalog/pull/361",className:"footer-center-text mr-64",target:"_blank",children:"Github"}),Object(_.jsx)(n.c,{to:"https://github.com/mate-academy/react_phone-catalog/pull/361",className:"footer-center-text mr-64",target:"_blank",children:"Contacts"}),Object(_.jsx)(n.c,{to:"https://github.com/mate-academy/react_phone-catalog/pull/361",className:"footer-center-text mr-64",target:"_blank",children:"Rights"})]}),Object(_.jsxs)("div",{className:"footer-arrow-block",onClick:t,onKeyDown:t,role:"button",tabIndex:0,children:[Object(_.jsx)("div",{className:"footer-arrow-text",children:"Back to top"}),Object(_.jsx)("div",{className:"footer-arrow",style:{marginRight:24},children:Object(_.jsx)("img",{src:"./img/icons/arrowTop.svg",alt:"img"})})]})]})}),B=(c(57),function(e){var t=e.path.split("/"),c=t[1].substring(1),s=t[1].charAt(0).toLocaleUpperCase()+c,a=Object(j.useContext)(D).state.products.find((function(e){return e.id===+t[2]}));return Object(_.jsxs)("div",{className:"navigation-block",children:[Object(_.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return d()("text-navbar",{"selected-link":t})},children:Object(_.jsx)("div",{className:"mr-8 navigator-image",children:Object(_.jsx)("img",{src:"./img/icons/Home.svg",className:"bottom-range",alt:"img"})})}),Object(_.jsx)("div",{className:"mr-8 navigator-image",children:Object(_.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"img"})}),Object(_.jsx)(n.c,{className:"mr-8 navigator-text",to:t[1],children:s}),a&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"mr-8 navigator-image",children:Object(_.jsx)("img",{src:"./img/icons/arrowRight.svg",alt:"img"})}),Object(_.jsx)("div",{className:"navigator-text navigator-text-second",children:null===a||void 0===a?void 0:a.name})]})]})}),U=function(){var e=Object(j.useRef)(null),t=Object(r.n)(),c=Object(r.r)().productId,s="/"!==t.pathname&&"/cart"!==t.pathname;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{ref:e}),Object(_.jsx)(L,{}),Object(_.jsxs)("div",{className:"commonPage-container ",children:[s&&Object(_.jsx)("div",{className:void 0===c?"breadcrumbs":"",children:Object(_.jsx)(B,{path:t.pathname})}),Object(_.jsx)(r.a,{})]}),Object(_.jsx)(F,{onClick:function(){e.current&&e.current.scrollIntoView({behavior:"smooth"})}})]})},G=(c(34),function(e){var t=e.action;return Object(_.jsx)("div",{className:"button-square ml-16",onClick:t,"data-cy":"paginationRight",children:Object(_.jsx)("img",{src:"./img/icons/arrowLeftBlack.svg",alt:"img"})})}),V=function(e){var t=e.action;return Object(_.jsx)("div",{className:"button-square mr-16",onClick:t,"data-cy":"paginationLeft",children:Object(_.jsx)("img",{src:"./img/icons/arrow3.svg",alt:"img"})})},q=function(e){for(var t=e.pages,c=Object(n.d)(),s=Object(l.a)(c,1)[0],a=s.get("itemsPerPage")||"4",i=Math.ceil(t/+a),r=s.get("page")||"1",o=[],j=1;j<=i;j++)o.push(j);var b=g();return Object(_.jsxs)("div",{className:"pagination-total",children:[Object(_.jsx)(V,{action:function(){return b(+r>1?+r-1:+r,"page")}}),Object(_.jsx)("div",{className:"page-block ",children:o.map((function(e){return Object(_.jsx)("div",{className:d()("button-square page mr-8",{"selected-page":e===+(s.get("page")||"1")}),onClick:function(){return b(+e,"page")},children:e},e)}))}),Object(_.jsx)(G,{action:function(){return b(+r<o.length?+r+1:+r,"page")}})]})},K=(c(58),function(e){var t=e.headline,c=void 0===t?"Page not found":t;return Object(_.jsx)("div",{className:"font-header page-not-found",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"68vh"},children:c})}),J=(c(59),function(e){var t=e.product,c=Object(j.useContext)(D),a=c.state,i=c.dispatch,r=N();return Object(_.jsxs)("div",{className:"list-item",children:[Object(_.jsx)(n.b,{to:"".concat("phone"===t.type?"/phones":"/tablets","/").concat(t.id),className:"list-item-title",children:Object(_.jsx)("div",{className:"list-item-image",children:Object(_.jsx)("img",{src:t.picsArray[0]})})}),Object(_.jsxs)("div",{className:"list-item-text",children:[Object(_.jsx)("div",{className:"list-item-title",children:Object(_.jsx)("p",{children:Object(_.jsx)(n.b,{to:"".concat("phone"===t.type?"/phones":"/tablets","/").concat(t.id),className:"list-item-title",children:t.name})})}),Object(_.jsxs)("div",{className:"list-item-price pb-8",children:[Object(_.jsx)("div",{style:{paddingRight:"8px"},children:t.price}),Object(_.jsx)("div",{className:"grey done",children:t.price})]}),Object(_.jsx)("div",{className:"list-item-line "}),Object(_.jsxs)("div",{className:"character-block pb-8",children:[Object(_.jsx)("div",{className:"character-text grey",children:"Screen"}),Object(_.jsx)("div",{className:"character-data",children:t.screen.replace("inches",'"')+" & "+t.age})]}),Object(_.jsxs)("div",{className:"character-block pb-8",children:[Object(_.jsx)("div",{className:"character-text grey",children:"Capacity"}),Object(_.jsx)("div",{className:"character-data",children:t.capacity})]}),Object(_.jsxs)("div",{className:"character-block pb-16",children:[Object(_.jsx)("div",{className:"character-text grey",children:"RAM"}),Object(_.jsx)("div",{className:"character-data",children:t.ram+"  "+t.type})]}),Object(_.jsxs)("div",{className:"button-block",children:[Object(_.jsx)("div",{className:d()("item-button",{"item-button-added":x(a.card,t)}),onClick:function(){var e=localStorage.getItem("cart")||"[{}]";x(JSON.parse(e),t)?r(t):i({type:s.ADD_TO_CARD,payload:t})},"data-cy":"addToFavorite",children:x(a.card,t)?"Added to card":"Add to card"}),Object(_.jsx)("div",{onClick:function(){x(a.favourites,t)?i({type:s.DELETE_FROM_FAVOURITES,payload:t}):i({type:s.SET_FAVOUTITES,payload:t})},className:"cp heart-square",children:x(a.favourites,t)?Object(_.jsx)("img",{src:"./img/icons/red.svg",alt:"img"}):Object(_.jsx)("img",{src:"./img/icons/bigHeart2.svg",alt:"img"})})]})]})]})}),W=function(){var e=Object(j.useContext)(D),t=e.state,c=e.dispatch,a=Object(n.d)(),i=Object(l.a)(a,2),o=i[0],d=i[1],b=new URLSearchParams(o),u=o.get("page")||"1",O=o.get("itemsPerPage")||"4",h=o.get("search")||"",x=o.get("sort")||"age",g=Object(j.useState)(x),f=Object(l.a)(g,2),p=f[0],N=f[1],E=Object(r.n)(),C=[],k=[];if(Object(j.useEffect)((function(){window.scrollTo(-10,-10)}),[]),t.products){var S=E.pathname,T=S.slice(1,S.length-1);if(k=Object(m.a)(t.products.filter((function(e){return e.type===T}))),h.length>0){var A=Object(m.a)(k);if(0===(k=Object(m.a)(A.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})))).length)return Object(_.jsx)(K,{headline:"Nothing was found"});C=v(k,u,+O)}else C="All"===O?k:v(k,u,+O)}return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"list-container",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{className:"font-header",children:y(E.pathname)}),Object(_.jsxs)("div",{className:"font-models-amount",children:[k.length," models"]}),Object(_.jsxs)("div",{className:"select-block",children:[Object(_.jsxs)("div",{className:"select-left",children:[Object(_.jsx)("div",{className:"select-text",children:"Sort by"}),Object(_.jsxs)("select",{value:p,className:"textField",onChange:function(e){return function(e){b.set("sort",e.target.value),d(b),N(e.target.value)}(e)},children:[Object(_.jsx)("option",{value:"age",children:"Newest"}),Object(_.jsx)("option",{value:"ageDesc",children:"Oldest"}),Object(_.jsx)("option",{value:"name",children:"Alphabetically"}),Object(_.jsx)("option",{value:"price",children:"Cheap first"})]})]}),Object(_.jsxs)("div",{className:"select-right",children:[Object(_.jsx)("div",{className:"select-text",children:"Items on page"}),Object(_.jsxs)("select",{className:"textField",defaultValue:O,onChange:function(e){return function(e){var t=Math.ceil(k.length/+e.target.value);+e.target.value>+O&&+u>t?(c({type:s.SET_ITEMS_PER_PAGE,payload:e.target.value}),b.set("itemsPerPage",e.target.value),b.set("page","1"),d(b)):(c({type:s.SET_ITEMS_PER_PAGE,payload:e.target.value}),b.set("itemsPerPage",e.target.value),d(b))}(e)},children:[Object(_.jsx)("option",{value:"4",children:"4"}),Object(_.jsx)("option",{value:"8",children:"8"}),Object(_.jsx)("option",{value:"16",children:"16"}),Object(_.jsx)("option",{value:"All",children:"All"})]})]})]})]})}),Object(_.jsx)("div",{className:"list-container","data-cy":"productList",children:C.map((function(e){return Object(_.jsx)(J,{product:e},e.id)}))}),"All"!==O&&Object(_.jsx)(q,{pages:k.length})]})},H=(c(35),c(36),function(e){var t=e.pageName,c=e.headline,s=e.array,a=g(),i=Object(n.d)(),r=Object(l.a)(i,1)[0].get(t)||"1",o=Math.ceil(s.length/4),d=v(s,r,4);return Object(_.jsxs)("div",{className:"hot-prices-block",children:[Object(_.jsxs)("div",{className:"header-block",children:[Object(_.jsx)("h1",{className:"home-page-header-text",children:c}),Object(_.jsxs)("div",{className:"arrow-box",children:[Object(_.jsx)(V,{action:function(){return a(+r>1?+r-1:1,t)}}),Object(_.jsx)(G,{action:function(){return a(+r<o?+r+1:+r,t)}})]})]}),Object(_.jsx)("div",{className:"chunk-container",children:d.map((function(e){return Object(_.jsx)(J,{product:e},e.id)}))})]})}),$=function(e){var t,c,s=e.render,a=Object(j.useState)(0),i=Object(l.a)(a,2),n=i[0],r=i[1],o=Object(j.useState)(0),d=Object(l.a)(o,2),b=d[0],u=d[1],m=Object(j.useRef)(null),O=Object(j.useState)(!1),h=Object(l.a)(O,2),x=h[0],v=(h[1],(null===(t=document.getElementById("root"))||void 0===t?void 0:t.offsetWidth)||{});Object(j.useEffect)((function(){m.current&&+v<=639?r(1):r(0);var e,t=document.getElementById("buttonToClick");return e=setInterval((function(){null===t||void 0===t||t.click()}),5e3),function(){clearInterval(e)}}),[x,null===(c=m.current)||void 0===c?void 0:c.offsetWidth]),Object(j.useEffect)((function(){var e=document.getElementById("buttonToClick");null===e||void 0===e||e.click()}),[s]);function g(){b<0&&u((function(e){return e+100}))}function f(){b<=-100&&u(100),u((function(e){return e+-100}))}return Object(_.jsxs)("div",{className:"banner-block",children:[Object(_.jsx)("div",{className:"banner-button banner-button--left banner-block",onClick:g,onKeyDown:g,role:"button",tabIndex:0,style:{height:Math.trunc(m.current?+m.current.offsetWidth/2.6:0)},children:Object(_.jsx)("img",{src:"./img/icons/arrow3.svg",alt:"img"})}),Object(_.jsx)("div",{className:"images-container",ref:m,children:[[{image:"./img/icons/Banner.svg"},{image:"./img/icons/Banner2jpg.jpg"}],[{image:"./img/icons/image16.png"},{image:"./img/icons/image16_2.png"}]][n].map((function(e){return Object(_.jsx)("img",{className:"image",src:e.image,style:{width:Math.trunc(m.current?+m.current.offsetWidth:0),height:Math.trunc(m.current?+v>=640?+m.current.offsetWidth/2.6:+m.current.offsetWidth:0),transform:"translateX(".concat(b,"%)")}},e.image)}))}),Object(_.jsx)("div",{id:"buttonToClick",className:"banner-button banner-button--right banner-block",onClick:f,onKeyDown:f,role:"button",tabIndex:0,style:{height:Math.trunc(m.current?+m.current.offsetWidth/2.6:0)},children:Object(_.jsx)("img",{src:"./img/icons/arrowLeftBlack.svg",alt:"img"})})]})},Y=function(){Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]);var e,t=Object(j.useContext)(D).state;return Object(_.jsxs)("div",{children:[Object(_.jsx)($,{render:location.pathname}),Object(_.jsx)(H,{pageName:"pageTop",headline:"Hot prices",array:(e=t.products,e.filter((function(e){return e.discount>0})),e.sort((function(e,t){return C(+e.price.slice(1)*(1-e.discount/100),+t.price.slice(1)*(1-t.discount/100))})))}),Object(_.jsx)("h1",{className:"home-page-header-text",children:"Shop by category"}),Object(_.jsxs)("div",{className:"chunk-container-category chunk-container-big category-box",children:[Object(_.jsxs)(n.b,{to:"/phones",className:"link",replace:!0,children:[Object(_.jsx)("div",{className:"square left mb-24",children:Object(_.jsx)("img",{className:"category-img",src:"./img/covers/image6.png",alt:"img",style:{float:"right"}})}),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"big-title",children:"Mobile phones"}),Object(_.jsx)("div",{className:"small-title",children:t.products.filter((function(e){return"phone"===e.type})).length+" models"})]})})]}),Object(_.jsxs)(n.b,{to:"/tablets",className:"link",children:[Object(_.jsx)("div",{className:"square left mb-24",children:Object(_.jsx)("img",{className:"category-img",src:"./img/covers/image5.png",alt:"img",style:{float:"right"}})}),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"big-title",children:"Tablets"}),Object(_.jsx)("div",{className:"small-title",children:t.products.filter((function(e){return"tablet"===e.type})).length+" models"})]})})]}),Object(_.jsxs)(n.b,{to:"/accessories",className:"link",children:[Object(_.jsx)("div",{className:"square left mb-24",children:Object(_.jsx)("img",{className:"category-img",src:"./img/covers/image7.png",alt:"img",style:{float:"right"}})}),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"big-title",children:"Accessories"}),Object(_.jsx)("div",{className:"small-title",children:t.products.filter((function(e){return"accessoire"===e.type})).length+" models"})]})})]})]}),Object(_.jsx)(H,{pageName:"pageDown",headline:"Brand new models",array:E(t.products)})]})},Q=(c(24),c(67)),z=function(e){var t=e.selectedColor,c=e.id,s=e.color,a=e.onClick;return Object(_.jsx)("div",{id:c,className:d()("color-cirlce mr-8",{selected:t===c}),onClick:function(e){return a(e.currentTarget.id)},children:Object(_.jsx)("div",{className:"color-cirlce-small",style:{backgroundColor:s}})})},X=function(e){var t=e.capacity,c=e.selectedCapacity,s=e.onClick;return Object(_.jsx)("div",{id:t,className:d()("capacity-square mr-8",{"capacity-selected":c===t}),onClick:function(e){return s(e.currentTarget.id)},children:t})},Z=function(e){var t=e.fieldName,c=e.fieldDescription;return Object(_.jsxs)("div",{className:"dflex mb-8",style:{justifyContent:"space-between"},children:[Object(_.jsx)("div",{children:t}),Object(_.jsx)("div",{style:{color:"#313237"},children:c.replace(" inches",'"')})]})},ee=(c(60),function(){var e=Object(r.p)();return Object(_.jsxs)("div",{className:"back-button-box mb-16 ",onClick:function(){return e(-1)},onKeyDown:function(){return e(-1)},role:"button",tabIndex:0,children:[Object(_.jsx)("div",{className:"back-button-align mr-4",children:Object(_.jsx)("img",{src:"./img/icons/arrowBackBlack.svg",alt:"img"})}),Object(_.jsx)("div",{className:"back-button",children:"Back"})]})}),te=function(){var e=Object(j.useState)("yellow"),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(j.useState)("64 GB"),n=Object(l.a)(i,2),o=n[0],b=n[1],m=Object(r.r)().productId,O=Object(j.useRef)(null),h=Object(j.useState)(),v=Object(l.a)(h,2),g=v[0],f=v[1],p=Object(j.useState)(""),N=Object(l.a)(p,2),y=N[0],E=N[1],C=Object(j.useContext)(D),k=C.state,S=C.dispatch,T=Object(j.useState)([]),A=Object(l.a)(T,2),w=A[0],R=A[1],I=Object(j.useState)([]),P=Object(l.a)(I,2),M=P[0],L=P[1],F=Object(j.useState)(),B=Object(l.a)(F,2),U=B[0],G=B[1],V=Object(j.useState)(""),q=Object(l.a)(V,2),J=q[0],W=q[1],$=Object(j.useState)(""),Y=Object(l.a)($,2),te=Y[0],ce=Y[1],se=Object(j.useState)([]),ae=Object(l.a)(se,2),ie=ae[0],ne=ae[1];if(Object(j.useEffect)((function(){ne(function(e){for(var t,c=e.length;c>0;){c--;var s=[e[t=Math.floor(Math.random()*e.length)],e[c]];e[c]=s[0],e[t]=s[1]}return e}(k.products)),m&&(f(k.products.find((function(e){return e.id===+m}))),G(k.products.find((function(e){return e.id===+m}))),g&&(R(g.picsArray),L(g.description.split("/")))),a("yellow")}),[k.products,m,null===g||void 0===g?void 0:g.description]),Object(j.useEffect)((function(){!function(e){if(g)switch(e){case"yellow":default:R(g.picsArray);break;case"green":g.picsArray2&&R(g.picsArray2);break;case"brown":g.picsArray3&&R(g.picsArray3);break;case"grey":g.picsArray4&&R(g.picsArray4)}}(c),O.current&&O.current.scrollIntoView({behavior:"smooth"})}),[O.current,g,c]),Object(j.useEffect)((function(){E(w[0])}),[w,O.current,g,c]),Object(j.useEffect)((function(){var e=Object(u.a)({},U),t=Number(null===U||void 0===U?void 0:U.price.slice(1));null!==g&&void 0!==g&&g.price&&("64 GB"===o&&(e.price="$"+Math.round(t)),"256 GB"===o&&(e.price="$"+Math.round(1.2*t)),"512 GB"===o&&(e.price="$"+Math.round(1.3*t)),f(e),W("$".concat(Number(+e.price.slice(1)*(1-e.discount/100)).toFixed(2))),ce("$".concat(Number(+e.price.slice(1)*(1-e.discount/100)).toFixed(2))))}),[o,U]),void 0===g)return Object(_.jsx)(K,{});return Object(_.jsxs)("div",{className:"",children:[Object(_.jsx)(ee,{}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"font-header",ref:O,children:null===g||void 0===g?void 0:g.name}),Object(_.jsxs)("div",{className:"upper-block mb-80",style:{justifyContent:"space-between"},children:[Object(_.jsxs)("div",{className:"pictures-block",children:[Object(_.jsx)("div",{className:"picture-column",children:w.map((function(e){return Object(_.jsx)("div",{className:"small-picbox",onClick:function(){return E(e)},children:Object(_.jsx)("img",{src:e,alt:"img",className:"small-pic"})},Object(Q.a)())}))}),Object(_.jsx)("div",{className:"big-picture-box",children:Object(_.jsx)("img",{src:y,alt:"img",className:"big-picture"})})]}),Object(_.jsx)("div",{className:"dflexcolumn tech-specs",children:Object(_.jsx)("div",{className:"dflex space-between grey id-text ",children:Object(_.jsxs)("div",{className:"",style:{width:"100%"},children:[Object(_.jsxs)("div",{className:"space-between",children:[Object(_.jsx)("div",{className:"mb-8",children:"Avalaible colors"}),Object(_.jsxs)("div",{children:["ID: ",null===g||void 0===g?void 0:g.id]})]}),Object(_.jsxs)("div",{className:"down",children:[Object(_.jsxs)("div",{className:"dflex mb-24",children:[Object(_.jsx)(z,{id:"yellow",onClick:a,color:"#fcdbc1",selectedColor:c}),Object(_.jsx)(z,{id:"green",color:"#5f7170",onClick:a,selectedColor:c}),Object(_.jsx)(z,{id:"brown",color:"#4c4c4c",onClick:a,selectedColor:c}),Object(_.jsx)(z,{id:"grey",color:"#f0f0f0",onClick:a,selectedColor:c})]}),Object(_.jsx)("div",{className:"grey-line mb-24"}),Object(_.jsx)("div",{className:"mb-8",children:"Select capacity"}),Object(_.jsxs)("div",{className:"capacity-box dflex mb-24",children:[Object(_.jsx)(X,{capacity:"64 GB",onClick:b,selectedCapacity:o}),Object(_.jsx)(X,{capacity:"256 GB",onClick:b,selectedCapacity:o}),Object(_.jsx)(X,{capacity:"512 GB",onClick:b,selectedCapacity:o})]}),Object(_.jsx)("div",{className:"grey-line mb-32"}),Object(_.jsx)("div",{className:"upper-box-text mb-16",children:Object(_.jsxs)("div",{className:"dflex",children:[Object(_.jsx)("div",{className:"product-card-price mr-8",children:te}),Object(_.jsx)("div",{className:"done grey font22",children:J})]})}),Object(_.jsxs)("div",{className:"dflex mb-32",style:{justifyContent:"space-between"},children:[Object(_.jsx)("div",{className:d()("button-add-to-card mr-8",{"button-added":x(k.card,g)}),onClick:function(){x(k.card,g)?S({type:s.DELETE_FROM_CARD,payload:g}):S({type:s.ADD_TO_CARD,payload:g})},"data-cy":"addToFavorite",children:x(k.card,g)?"Added to card":"Add to card"}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:"favourite cp",onClick:function(){x(k.favourites,g)?S({type:s.DELETE_FROM_FAVOURITES,payload:g}):S({type:s.SET_FAVOUTITES,payload:g})},children:x(k.favourites,g)?Object(_.jsx)("img",{src:"./img/icons/red.svg",alt:"img"}):Object(_.jsx)("img",{src:"./img/icons//icon_1.svg",alt:"img"})})})]}),Object(_.jsxs)("div",{className:"tech-details-block",children:[Object(_.jsx)(Z,{fieldName:"Screen",fieldDescription:null===g||void 0===g?void 0:g.screen}),Object(_.jsx)(Z,{fieldName:"Resolution",fieldDescription:null===g||void 0===g?void 0:g.screenResolution}),Object(_.jsx)(Z,{fieldName:"Processor",fieldDescription:null===g||void 0===g?void 0:g.processor}),Object(_.jsx)(Z,{fieldName:"RAM",fieldDescription:null===g||void 0===g?void 0:g.ram})]})]})]})})})]}),Object(_.jsxs)("div",{className:"lower-block dflex mb-80",style:{justifyContent:"space-between"},children:[Object(_.jsxs)("div",{className:"about","data-cy":"productDescription",children:[Object(_.jsx)("div",{className:"about-header mb-16",children:"About"}),Object(_.jsx)("div",{className:"grey-line mb-32"}),Object(_.jsx)("div",{className:"header-small",children:M[0]}),Object(_.jsx)("p",{className:"grey-text",children:M[1]}),Object(_.jsx)("p",{className:"grey-text",children:M[2]}),Object(_.jsx)("div",{className:"header-small",children:M[3]}),Object(_.jsx)("p",{className:"grey-text",children:M[4]}),Object(_.jsx)("div",{className:"header-small",children:M[5]}),Object(_.jsx)("p",{className:"grey-text",style:{marginBottom:0},children:M[6]})]}),Object(_.jsxs)("div",{className:"tech-specs",children:[Object(_.jsx)("div",{className:"about-header mb-16",children:"Tech specs"}),Object(_.jsx)("div",{className:"grey-line mb-32"}),Object(_.jsxs)("div",{className:"tech-details-block grey",children:[Object(_.jsx)(Z,{fieldName:"Screen",fieldDescription:null===g||void 0===g?void 0:g.screen}),Object(_.jsx)(Z,{fieldName:"Resolution",fieldDescription:null===g||void 0===g?void 0:g.screenResolution}),Object(_.jsx)(Z,{fieldName:"Processor",fieldDescription:null===g||void 0===g?void 0:g.processor}),Object(_.jsx)(Z,{fieldName:"RAM",fieldDescription:null===g||void 0===g?void 0:g.ram}),Object(_.jsx)(Z,{fieldName:"Buit in memory",fieldDescription:null===g||void 0===g?void 0:g.builtInMemory}),Object(_.jsx)(Z,{fieldName:"Camera",fieldDescription:null===g||void 0===g?void 0:g.camera}),Object(_.jsx)(Z,{fieldName:"Zoom",fieldDescription:null===g||void 0===g?void 0:g.zoom}),Object(_.jsx)(Z,{fieldName:"Cell",fieldDescription:null===g||void 0===g?void 0:g.cell})]})]})]})]}),Object(_.jsx)(H,{pageName:"suggested",headline:"You may also like",array:ie})]})},ce=(c(61),function(){var e=Object(j.useContext)(D).state,t=Object(n.d)(),c=Object(l.a)(t,1)[0].get("search")||"",s=Object(m.a)(e.favourites);return Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]),0===e.favourites.length?Object(_.jsx)(K,{headline:"Nothing was found"}):(c.length>0&&(s=Object(m.a)(s.filter((function(e){return e.name.toLocaleLowerCase().includes(c.toLocaleLowerCase())})))),Object(_.jsx)("div",{className:"list-container",children:s.map((function(e){return Object(_.jsx)(J,{product:e},e.id)}))}))}),se=(c(37),function(e){var t=e.summary,c=e.reduce,a=e.phone,i=Object(j.useContext)(D),n=i.state,r=i.dispatch,l=N();function o(){r({type:s.ADD_TO_CARD,payload:a})}function d(){n.card.filter((function(e){return e.id===a.id})).length>0&&(c(+a.price.slice(1)),r({type:s.DELETE_FROM_CARD,payload:a}))}var b=Number(null===a||void 0===a?void 0:a.price.slice(1))*n.card.filter((function(e){return e.id===a.id})).length;return Object(_.jsx)("div",{className:"item-container mb-16",children:Object(_.jsxs)("div",{className:"cart-element",children:[Object(_.jsxs)("div",{className:"cart-button-box-chunk",children:[Object(_.jsx)("div",{className:"close",onClick:function(){return l(a)},onKeyDown:function(){return r({type:s.DELETE_FROM_CARD,payload:a})},role:"button",tabIndex:0,"data-cy":"cartDeleteButton",children:Object(_.jsx)("img",{src:"./img/icons/close.svg",alt:"img"})}),Object(_.jsx)("div",{className:"",children:a&&Object(_.jsx)("img",{src:a.picsArray[0],alt:"img",className:"cart-image"})}),Object(_.jsx)("div",{className:"cart-name ",children:a&&a.name})]}),Object(_.jsxs)("div",{className:"cart-button-box-chunk ",children:[Object(_.jsxs)("div",{className:"cart-button-box",children:[Object(_.jsx)("div",{className:"cart-square-border",onClick:d,onKeyDown:d,role:"button",tabIndex:0,children:"-"}),Object(_.jsx)("div",{className:"cart-square",children:n.card.filter((function(e){return e.id===a.id})).length}),Object(_.jsx)("div",{className:"cart-square-border",onClick:function(){o(),t(+a.price.slice(1))},role:"button",tabIndex:0,onKeyDown:o,children:"+"})]}),Object(_.jsx)("div",{className:"cart-price ","data-cy":"productQauntity",children:"$".concat(b)})]})]})})}),ae=(c(62),function(e){var t=e.closePopUp,c=Object(j.useContext)(D).dispatch;function a(){localStorage.removeItem("cart"),t(!1),c({type:s.RENDER_PAGE})}return Object(_.jsxs)("div",{className:"popup-box",children:[Object(_.jsx)("div",{className:"mb-24",children:" Would you like to wipe the cart?"}),Object(_.jsxs)("div",{className:"popup-button-box",children:[Object(_.jsx)("div",{role:"button",tabIndex:0,className:"popup-button",onClick:function(){return t(!1)},onKeyDown:function(){return t(!1)},children:"Cancel"}),Object(_.jsx)("div",{role:"button",tabIndex:0,className:"popup-button ml-30",onClick:a,onKeyDown:a,children:"Wipe the cart"})]})]})}),ie=function(){var e=Object(j.useState)(0),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(j.useContext)(D).state,i=Object(j.useState)(),n=Object(l.a)(i,2),r=n[0],o=n[1],d=p(a.card),b=Object(j.useState)(!1),u=Object(l.a)(b,2),m=u[0],O=u[1];Object(j.useEffect)((function(){o(d)}),[p(a.card).length]),Object(j.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.useEffect)((function(){var e=0;a.card.map((function(t){return e+=+t.price.slice(1)})),s(e)}),[a.card,a.render]);var h=function(e){s((function(t){return+t+e}))},x=function(e){s((function(t){return+t-e}))};return Object(_.jsxs)("div",{className:"mb-80 mt-24 parent",children:[Object(_.jsxs)("div",{className:"",children:[Object(_.jsx)(ee,{}),Object(_.jsxs)("div",{className:"cart-box",children:[Object(_.jsx)("div",{children:a.card.length>0?null===r||void 0===r?void 0:r.map((function(e){return Object(_.jsx)(se,{summary:h,reduce:x,phone:e},e.id)})):Object(_.jsx)("div",{className:"empty-cart-box",children:Object(_.jsx)("div",{children:"Your cart is empty"})})}),Object(_.jsxs)("div",{className:"summary",children:[c>0&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{children:"$".concat(c)}),Object(_.jsx)("div",{className:"",children:"Total"}),Object(_.jsxs)("div",{className:"mb-24",children:[a.card.length,"\xa0 item",a.card.length>1&&"s"]})]}),Object(_.jsx)("div",{className:"grey-line mb-24",style:{width:"90%"}}),Object(_.jsx)("div",{className:"summary-button",onClick:function(){return O(!0)},onKeyDown:function(){return O(!0)},role:"button",tabIndex:0,children:"Checkout"})]})]})]}),m&&Object(_.jsx)(ae,{closePopUp:O})]})},ne=function(){return Object(_.jsx)(n.a,{children:Object(_.jsx)(w,{children:Object(_.jsx)(r.d,{children:Object(_.jsxs)(r.b,{path:"/",element:Object(_.jsx)(U,{}),children:[Object(_.jsx)(r.b,{index:!0,element:Object(_.jsx)(Y,{})}),Object(_.jsxs)(r.b,{path:"phones",children:[Object(_.jsx)(r.b,{index:!0,element:Object(_.jsx)(W,{})}),Object(_.jsx)(r.b,{path:":productId?",element:Object(_.jsx)(te,{})})]}),Object(_.jsxs)(r.b,{path:"/tablets",children:[Object(_.jsx)(r.b,{index:!0,element:Object(_.jsx)(W,{})}),Object(_.jsx)(r.b,{path:":productId?",element:Object(_.jsx)(te,{})})]}),Object(_.jsx)(r.b,{path:"favourites",element:Object(_.jsx)(ce,{})}),Object(_.jsx)(r.b,{path:"cart",element:Object(_.jsx)(ie,{})}),Object(_.jsx)(r.b,{path:"*",element:Object(_.jsx)(K,{})})]})})})})};i.a.render(Object(_.jsx)(ne,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.f91bff13.chunk.js.map