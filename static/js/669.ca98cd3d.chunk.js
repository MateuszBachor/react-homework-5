"use strict";(self.webpackChunkreact_homework_5=self.webpackChunkreact_homework_5||[]).push([[669,302,842],{302:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(5861),i=t(8152),a=t(7757),s=t.n(a),c=t(2791),o=t(5221),u="MovieCast_castCard__D8cCW",f=t(184),l=function(n){var e=n.array,t=function(n){return null!==n};return e.map((function(n){return(0,f.jsxs)("div",{className:u,children:[" ",(0,f.jsx)("img",{style:{width:"200px",height:"200px"},src:t(n.profile_path)?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg",alt:n.name}),(0,f.jsxs)("span",{children:[n.character," - ",n.name]})]},n.id)}))},d=t(6871),v=function(n){n.id;var e=(0,c.useState)([]),t=(0,i.Z)(e,2),a=t[0],u=t[1],v=(0,d.UO)().movieId;return(0,c.useEffect)((function(){!function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(v,"/credits"));case 2:e=n.sent,u((function(){return e.cast}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}()})),(0,f.jsx)("div",{children:(0,f.jsx)(l,{array:a})})}},2669:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(5861),i=t(8152),a=t(7757),s=t.n(a),c=t(2791),o=t(5221),u=t(6871),f=t(3504),l=t(302),d=t(4842),v={MoviePageContainer:"MoviePage_MoviePageContainer__R1Yo2",infoCard:"MoviePage_infoCard__s79-W",info:"MoviePage_info__kAD6W",LinkContainer:"MoviePage_LinkContainer__g42ln"},h=t(184),p=function(n){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),a=t[0],p=t[1],m=(0,c.useState)([]),x=(0,i.Z)(m,2),_=x[0],j=x[1],g=(0,c.useState)(!1),w=(0,i.Z)(g,2),C=w[0],k=w[1],b=(0,c.useState)(!1),Z=(0,i.Z)(b,2),M=Z[0],N=Z[1],S=(0,u.UO)().movieId,R=function(){var n=(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(S));case 2:e=n.sent,console.log(e),p((function(){return e})),j((function(){return e.production_countries}));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){R()}));return(0,h.jsxs)("div",{className:v.MoviePageContainer,children:[(0,h.jsxs)("div",{className:v.infoCard,children:[(0,h.jsx)("img",{className:v.MoiveImg,src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path||a.backdrop_path)||0,alt:a.title||a.name}),(0,h.jsxs)("div",{className:v.info,children:[(0,h.jsx)("span",{children:a.title||a.name}),_.map((function(n){return(0,h.jsx)("span",{children:n.name})})),(0,h.jsxs)("span",{children:["User Score: ",10*a.vote_average,"%"]}),(0,h.jsx)("span",{children:a.overview})]})]}),(0,h.jsxs)("div",{className:v.LinkContainer,children:[(0,h.jsx)(f.rU,{to:"cast",children:(0,h.jsx)("button",{onClick:function(){k((function(){return!C})),N((function(){return!1}))},children:"Cast"})}),(0,h.jsx)(f.rU,{to:"reviews",children:(0,h.jsx)("button",{onClick:function(){N((function(){return!M})),k((function(){return!1}))},children:"Reviews"})})]}),C&&(0,h.jsx)(l.default,{id:S}),M&&(0,h.jsx)(d.default,{id:S})]})}},4842:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(5861),i=t(8152),a=t(7757),s=t.n(a),c=t(2791),o=t(5221),u=t(6871),f="MovieReviews_reviewCard__9fQK9",l="MovieReviews_author__ReSwE",d="Readmore_readmore__chhoW",v=t(184),h=function(n){var e=n.children,t=(0,c.useState)(!1),r=(0,i.Z)(t,2),a=r[0],s=r[1];return(0,v.jsxs)("div",{className:d,children:[a?e:e.substring(0,150),(0,v.jsxs)("button",{onClick:function(){s((function(n){return!n}))},children:[a?"Read less":"...Read More"," "]})]})},p=function(n){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),a=t[0],d=t[1],p=(0,u.UO)().movieId;return(0,c.useEffect)((function(){!function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(p,"/reviews"));case 2:e=n.sent,console.log(e),d((function(){return e.results}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}()})),a.length>=1?a.map((function(n){return(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("span",{className:l,children:[n.author," -"]}),(0,v.jsx)(h,{children:n.content})]})})):(0,v.jsx)("div",{children:"No reviews available"})}}}]);
//# sourceMappingURL=669.ca98cd3d.chunk.js.map