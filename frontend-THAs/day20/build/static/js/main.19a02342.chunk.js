(this.webpackJsonpday20=this.webpackJsonpday20||[]).push([[0],{11:function(e,o,a){"use strict";a.r(o);var i=a(1),c=a(3),r=a.n(c),s=a(4),t=(a(9),[{foodName:"Pizza",foodType:"junk",protein:"chicken",calories:55},{foodName:"Burger",foodType:"junk",protein:"chicken",calories:100},{foodName:"Roti",foodType:"desi",protein:"somewhere",calories:59},{foodName:"Dahi Vada",foodType:"desi",protein:"somewhere",calories:37},{foodName:"Samosa",foodType:"desi",calories:63},{foodName:"Jalebi",foodType:"sweet",calories:44}]),n=a(0);var d=function(e){var o=e.name,a=e.calorie,i=e.list,c=e.update;return Object(n.jsxs)("div",{className:"calorie-card",children:[Object(n.jsx)("div",{className:"name",children:o}),Object(n.jsxs)("div",{className:"calories",children:["Contains ",a," calories"]}),Object(n.jsx)("div",{className:"delete",onClick:function(){c(i.filter((function(e){return e.foodName!==o})))},children:"drop"})]})};var l=function(){var e=Object(i.useState)(t),o=Object(s.a)(e,2),a=o[0],c=o[1];return Object(n.jsx)("div",{className:"calorie-list",children:a.map((function(e){return Object(n.jsx)(d,{name:e.foodName,calorie:e.calories,list:a,update:c},e.foodName)}))})},f=document.getElementById("root");r.a.render(Object(n.jsx)(i.StrictMode,{children:Object(n.jsx)(l,{})}),f)},9:function(e,o,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.19a02342.chunk.js.map