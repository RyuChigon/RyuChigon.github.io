(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{6055:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(4112)}])},4112:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return i}});var e=t(1976),i=!0;r.default=e.default},1976:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return N},default:function(){return y}});var e=t(7297),i=t(5893),u=t(2125),o=t(1664),c=t.n(o);function f(){var n=(0,e.Z)(["\n  width: calc(80% - 60px);\n  background: ",";\n  border: 1px solid #d9dcff;\n  border-radius: 10px;\n  padding: 10px 30px;\n  margin: 10px;\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    box-shadow: 0px 0px 5px 1px ",";\n  }\n"]);return f=function(){return n},n}function a(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return a=function(){return n},n}function s(){var n=(0,e.Z)(["\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0.5rem 0;\n  color: #000000;\n"]);return s=function(){return n},n}function l(){var n=(0,e.Z)(["\n  font-size: 0.8rem;\n  color: #484848;\n"]);return l=function(){return n},n}function d(){var n=(0,e.Z)(["\n  font-size: 0.8rem;\n  color: #888888;\n  font-style: italic;\n"]);return d=function(){return n},n}var p=function(n){var r=n.title,t=n.des,e=n.date,u=n.slug;return(0,i.jsx)(c(),{href:"/blog/"+u,passHref:!0,children:(0,i.jsxs)(x,{children:[(0,i.jsx)(g,{children:r}),(0,i.jsxs)(h,{children:[(0,i.jsx)(v,{children:t}),(0,i.jsx)(m,{children:e})]})]})})},x=u.ZP.div(f(),(function(n){return n.theme.postBox}),(function(n){return n.theme.postBoxBorder})),h=u.ZP.div(a()),g=u.ZP.p(s()),v=u.ZP.p(l()),m=u.ZP.p(d());function _(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n"]);return _=function(){return n},n}function j(){var n=(0,e.Z)(["\n  margin: 0 10px;\n  cursor: pointer;\n  ",";\n"]);return j=function(){return n},n}var Z=function(n){var r=n.currentPage,t=n.pageNumber,e=10*Math.floor((r-1)/10)+1,u=Array.from({length:10},(function(n,r){return r+e})).filter((function(n){return n<=t})),o=1!==e,f=u[u.length-1]+1<=t;return(0,i.jsxs)(b,{children:[o&&(0,i.jsx)(c(),{href:"/blog/page/".concat(u[0]-1),children:(0,i.jsx)(w,{children:"\uc774\uc804"})}),u.map((function(n,t){return(0,i.jsx)(c(),{href:"/blog/page/".concat(n),children:(0,i.jsx)(w,{current:n===r,children:n})},t)})),f&&(0,i.jsx)(c(),{href:"/blog/page/".concat(u[0]+10),children:(0,i.jsx)(w,{children:"\ub2e4\uc74c"})})]})},b=u.ZP.div(_()),w=u.ZP.span(j(),(function(n){return n.current&&"font-weight: 800"}));function P(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return P=function(){return n},n}var N=!0,y=function(n){var r=n.posts,t=n.currentPage,e=n.pageNumber;return(0,i.jsxs)(k,{children:[r&&r.map((function(n,r){return(0,i.jsx)(p,{title:n.frontMatter.title,des:n.frontMatter.description,date:n.frontMatter.date,slug:n.slug},r)})),(0,i.jsx)(Z,{currentPage:t,pageNumber:e})]})},k=u.ZP.div(P())}},function(n){n.O(0,[774,888,179],(function(){return r=6055,n(n.s=r);var r}));var r=n.O();_N_E=r}]);