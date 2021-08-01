(this["webpackJsonpcocktail-list"]=this["webpackJsonpcocktail-list"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(10),a=n.n(r),i=(n(16),n(3)),l=n.n(i),j=n(5),o=n(4),u=n(8),b=n(2),h=(n(18),n(0)),d=function(e){var t=e.onTabChange,n=e.setCocktails,c=Object(s.useState)(""),r=Object(b.a)(c,2),a=r[0],i=r[1],j=function(){var e=Object(o.a)(l.a.mark((function e(t){var s,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(a),e.prev=2,e.next=5,fetch(s);case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,n(r.drinks),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{className:"form",onSubmit:j,children:[Object(h.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"i.e. Margarita",autoComplete:"off",value:a,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("button",{className:"button",type:"submit",onClick:function(){return t(3)},children:"Search"})]})},O=function(e){e.activeTab;var t=e.onTabChange,n=e.handleRefresh,s=e.setCocktails;return Object(h.jsxs)("div",{className:"nav",children:[Object(h.jsx)("h2",{className:"title",children:"Cocktail List"}),Object(h.jsx)("h2",{className:"nav-item",onClick:function(){t(2),n()},children:"Generate Random Cocktails"}),Object(h.jsx)("h2",{className:"nav-item",onClick:function(){return t(4)},children:"Filter"}),Object(h.jsx)(d,{onTabChange:t,setCocktails:s})]})},p=function(e){var t=e.data,n=e.onTabChange,s=e.setCocktail;return Object(h.jsxs)("div",{className:"item",onClick:function(){n(1),s(t)},children:[Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h2",{className:"drink-name",children:t.strDrink}),Object(h.jsxs)("div",{className:"type",children:[Object(h.jsx)("p",{children:t.strAlcoholic}),Object(h.jsx)("p",{children:t.strCategory}),Object(h.jsx)("p",{children:t.strGlass})]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"thumbnail",alt:t.strDrink,src:t.strDrinkThumb})})]})},x=function(e){var t=e.items,n=e.onTabChange,s=e.setCocktail;return Object(h.jsx)("div",{className:"item-list",children:t?t.map((function(e){return Object(h.jsx)(p,{data:e,alt:e.strDrink,onTabChange:n,setCocktail:s},e.idDrink)})):Object(h.jsx)("p",{children:"No results found"})})},m=function(e){var t=e.data;return Object(h.jsxs)("div",{className:"item-page",children:[Object(h.jsxs)("div",{className:"item-page-info",children:[Object(h.jsx)("h2",{className:"item-page-title",children:t.strDrink}),Object(h.jsxs)("div",{className:"item-page-desc",children:[Object(h.jsx)("p",{children:t.strCategory}),Object(h.jsx)("p",{children:t.strAlcoholic}),Object(h.jsx)("p",{children:t.strGlass})]}),Object(h.jsxs)("div",{className:"item-page-text",children:[Object(h.jsx)("h2",{className:"item-page-subtitle",children:"Ingredients:"}),Object(h.jsxs)("ul",{children:[t.strMeasure1?Object(h.jsxs)("li",{children:[t.strMeasure1," ",t.strIngredient1]}):null,t.strMeasure2?Object(h.jsxs)("li",{children:[t.strMeasure2," ",t.strIngredient2]}):null,t.strMeasure3?Object(h.jsxs)("li",{children:[t.strMeasure3," ",t.strIngredient3]}):null,t.strMeasure4?Object(h.jsxs)("li",{children:[t.strMeasure4," ",t.strIngredient4]}):null,t.strMeasure5?Object(h.jsxs)("li",{children:[t.strMeasure5," ",t.strIngredient5]}):null,t.strMeasure6?Object(h.jsxs)("li",{children:[t.strMeasure6," ",t.strIngredient6]}):null,t.strMeasure7?Object(h.jsxs)("li",{children:[t.strMeasure7," ",t.strIngredient7]}):null,t.strMeasure8?Object(h.jsxs)("li",{children:[t.strMeasure8," ",t.strIngredient8]}):null,t.strMeasure9?Object(h.jsxs)("li",{children:[t.strMeasure9," ",t.strIngredient9]}):null,t.strMeasure10?Object(h.jsxs)("li",{children:[t.strMeasure10," ",t.strIngredient10]}):null,t.strMeasure11?Object(h.jsxs)("li",{children:[t.strMeasure11," ",t.strIngredient11]}):null,t.strMeasure12?Object(h.jsxs)("li",{children:[t.strMeasure12," ",t.strIngredient12]}):null,t.strMeasure13?Object(h.jsxs)("li",{children:[t.strMeasure13," ",t.strIngredient13]}):null,t.strMeasure14?Object(h.jsxs)("li",{children:[t.strMeasure14," ",t.strIngredient14]}):null,t.strMeasure15?Object(h.jsxs)("li",{children:[t.strMeasure15," ",t.strIngredient15]}):null]}),Object(h.jsx)("h2",{className:"item-page-subtitle",children:"Directions:"}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:t.strInstructions})})]})]}),Object(h.jsx)("div",{className:"item-page-image",children:Object(h.jsx)("img",{alt:t.strDrink,src:t.strDrinkThumb})})]})},f=function(e){for(var t=e.itemsPerPage,n=e.totalItems,s=e.paginate,c=[],r=1;r<=Math.ceil(n/t);r++)c.push(r);return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(h.jsx)("li",{className:"page-item",children:Object(h.jsx)("a",{href:"/#",onClick:function(){return s(e)},className:"page-link",children:e})},e)}))})})},g=function(e){var t=e.onTabChange,n=e.setCocktail,c=e.setCocktails,r=e.cocktails,a=e.url,i=e.filterName,u=Object(s.useState)(!1),d=Object(b.a)(u,2),O=(d[0],d[1]),p=Object(s.useState)(1),m=Object(b.a)(p,2),g=m[0],k=m[1],v=Object(s.useState)(8),C=Object(b.a)(v,1)[0];Object(s.useEffect)((function(){c([]),function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,fetch(a+i);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,s=l.a.mark((function e(t){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(n.drinks[t].idDrink));case 2:return s=e.sent,e.next=5,s.json();case 5:r=e.sent,c((function(e){return[].concat(Object(j.a)(e),Object(j.a)(r.drinks))}));case 7:case"end":return e.stop()}}),e)})),r=0;case 10:if(!(r<n.drinks.length)){e.next=15;break}return e.delegateYield(s(r),"t0",12);case 12:r++,e.next=10;break;case 15:O(!1),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),console.log(e.t1);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var w=g*C,N=w-C,M=r.slice(N,w);return Object(h.jsx)("div",{children:M?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{items:M,onTabChange:t,setCocktail:n}),Object(h.jsx)(f,{itemsPerPage:C,totalItems:r.length,paginate:function(e){return k(e)}})]}):null})},k=n(11),v=n.n(k),C=function(e){var t=e.onTabChange,n=e.setUrl,c=e.setFilterName,r=Object(s.useState)([]),a=Object(b.a)(r,2),i=a[0],j=a[1],u=Object(s.useState)([]),d=Object(b.a)(u,2),O=d[0],p=d[1],x=Object(s.useState)([]),m=Object(b.a)(x,2),f=m[0],g=m[1],k=Object(s.useState)(!0),C=Object(b.a)(k,2),w=C[0],N=C[1],M=function(){var e=Object(o.a)(l.a.mark((function e(t,n){var s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,n(c.drinks),N(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){M("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",j),M("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",p),M("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",g)}),[]),Object(h.jsx)("div",{children:w?Object(h.jsx)(v.a,{type:"balls",color:"#ccc"}):Object(h.jsxs)("div",{className:"filters",children:[Object(h.jsx)("h3",{children:"Alcoholic:"}),Object(h.jsx)("ul",{className:"filter",children:i.map((function(e,s){return Object(h.jsx)("li",{onClick:function(){c(e.strAlcoholic.replace(/ /g,"_")),n("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a="),t(5)},children:e.strAlcoholic},s)}))}),Object(h.jsx)("h3",{children:"Category:"}),Object(h.jsx)("ul",{className:"filter",children:O.map((function(e,s){return Object(h.jsx)("li",{onClick:function(){c(e.strCategory.replace(/ /g,"_")),n("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="),t(5)},children:e.strCategory},s)}))}),Object(h.jsx)("h3",{children:"Ingredient:"}),Object(h.jsx)("ul",{className:"filter",children:f.map((function(e,s){return Object(h.jsx)("li",{onClick:function(){c(e.strIngredient1.replace(/ /g,"_")),n("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="),t(5)},children:e.strIngredient1},s)}))})]})})};var w=function(){var e=Object(s.useState)(0),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([]),a=Object(b.a)(r,2),i=a[0],d=a[1],p=Object(s.useState)(""),f=Object(b.a)(p,2),k=f[0],v=f[1],w=Object(s.useState)(""),N=Object(b.a)(w,2),M=N[0],I=N[1],T=function(e){c(e)},y=Object(s.useState)([]),S=Object(b.a)(y,2),F=S[0],D=S[1],A=function(){F.length>=8&&D([]);for(var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,D((function(e){return[].concat(Object(j.a)(e),Object(j.a)(n.drinks))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),t=0;t<8;t++)e()};return Object(s.useEffect)((function(){A()}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{activeTab:n,onTabChange:T,handleRefresh:function(){D([]),A()},setCocktails:D}),function(){var e;switch(n){default:case 0:return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{style:{textAlign:"center"},children:"Cocktails"}),Object(h.jsx)(x,{items:F,onTabChange:T,setCocktail:d})]});case 1:return Object(h.jsx)(m,{data:i});case 2:return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"page-title",style:{textAlign:"center"},children:"Random Cocktails"}),Object(h.jsx)(x,{items:F,onTabChange:T,setCocktail:d})]});case 3:return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{items:F,onTabChange:T,setCocktail:d})});case 4:return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(C,{onTabChange:T,setUrl:v,setFilterName:I})});case 5:return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g,(e={onTabChange:T,setCocktail:d,cocktails:F,setCocktails:D},Object(u.a)(e,"cocktails",F),Object(u.a)(e,"url",k),Object(u.a)(e,"filterName",M),e))})}}()]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),N()}},[[20,1,2]]]);
//# sourceMappingURL=main.720b3a76.chunk.js.map