"use strict";(self.webpackChunkreact_homework_5=self.webpackChunkreact_homework_5||[]).push([[641],{6641:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var a=t(5861),n=t(8152),c=t(7757),s=t.n(c),o=t(2791),u=t(4569),i=t.n(u),l="SearchMoviePage_MoviesGallery__gzRZ2",p="Searchbar_input__F75P0",h="Searchbar_SearchForm__ZwRok",m="Searchbar_button__RSRiR",f="Searchbar_Searchbar__PsVBh",v=t(8494),d=t(184),_=function(e){var r=e.submitForm;return(0,d.jsx)("header",{className:f,children:(0,d.jsxs)("form",{className:h,onSubmit:r,children:[(0,d.jsx)("button",{className:m,type:"submit",name:"submitBtn",children:(0,d.jsx)(v.Yfv,{})}),(0,d.jsx)("input",{className:p,name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})},b="MovieCard_MovieCard__1ZFm8",x=t(3504),g=function(e){var r=e.arrayMovie;return r.map((function(e){return(0,d.jsx)(x.rU,{to:(t=e.id,"/movies/".concat(t)),children:(0,d.jsx)("div",{className:b,children:(0,d.jsx)("img",{src:(r=e.backdrop_path||e.poster_path,null!==r?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path||e.backdrop_path):"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"),alt:""})})},e.id);var r,t}))},j=function(){var e=(0,o.useState)([]),r=(0,n.Z)(e,2),t=r[0],c=r[1],u=(0,o.useState)([]),p=(0,n.Z)(u,2),h=p[0],m=p[1];(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){var e=(0,a.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/search/movie?api_key=168c87e340b321f808dc48486f6cc30b&query=".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error: "+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),e.next=3,r(t);case 3:n=e.sent,console.log(n.results),m((function(){return n.results}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(_,{submitForm:function(e){e.preventDefault();var r=e.currentTarget,t=r.elements.query.value;console.log(t),c((function(){return t})),r.reset()}}),(0,d.jsx)("div",{className:l,children:(0,d.jsx)(g,{arrayMovie:h})})]})}}}]);
//# sourceMappingURL=641.baeda907.chunk.js.map