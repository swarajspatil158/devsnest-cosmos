(this.webpackJsonpday21=this.webpackJsonpday21||[]).push([[0],{12:function(e,o,a){},14:function(e,o,a){"use strict";a.r(o);var t=a(1),c=a(6),i=a.n(c),r=a(7),n=a(4),s=(a(12),[{foodName:"Pizza",foodType:"junk",protein:"chicken",calories:55},{foodName:"Burger",foodType:"junk",protein:"chicken",calories:100},{foodName:"Roti",foodType:"desi",protein:"somewhere",calories:59},{foodName:"Dahi Vada",foodType:"desi",protein:"somewhere",calories:37},{foodName:"Samosa",foodType:"desi",calories:63},{foodName:"Jalebi",foodType:"sweet",calories:44}]),d=a(0);var l=function(e){var o=e.name,a=e.calorie,t=e.list,c=e.update;return Object(d.jsxs)("div",{className:"calorie-card",children:[Object(d.jsx)("div",{className:"name",children:o}),Object(d.jsxs)("div",{className:"calories",children:["Contains ",a," calories"]}),Object(d.jsx)("div",{className:"delete",onClick:function(){c(t.filter((function(e){return e.foodName!==o})))},children:"drop"})]})};var u=function(){var e=Object(t.useState)(""),o=Object(n.a)(e,2),a=o[0],c=o[1],i=Object(t.useState)(""),u=Object(n.a)(i,2),j=u[0],f=u[1],m=Object(t.useState)(s),b=Object(n.a)(m,2),p=b[0],h=b[1];return Object(d.jsxs)("div",{className:"calorie-list",children:[Object(d.jsx)("input",{placeholder:"Add Food",onChange:function(e){return o=e.target.value,void c(o);var o},value:a}),Object(d.jsx)("input",{placeholder:"Add Calorie",onChange:function(e){return o=e.target.value,void f(o);var o},value:j,type:"number"}),Object(d.jsx)("button",{onClick:function(){if(""===a||""===j)alert("Add something");else{var e={food:a,callories:j},o=[].concat(Object(r.a)(p),[e]);h(o),f(""),c("")}},children:"Submit"}),p.map((function(e){return Object(d.jsx)(l,{name:e.foodName,calorie:e.calories,list:p,update:h},e.foodName)}))]})},j=document.getElementById("root");i.a.render(Object(d.jsx)(t.StrictMode,{children:Object(d.jsx)(u,{})}),j)}},[[14,1,2]]]);
//# sourceMappingURL=main.23ac992f.chunk.js.map