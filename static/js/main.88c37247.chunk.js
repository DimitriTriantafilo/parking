(this["webpackJsonpparking-air-garage"]=this["webpackJsonpparking-air-garage"]||[]).push([[0],{32:function(e,t,r){},33:function(e,t,r){},53:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(4),s=r.n(a),i=r(3),o=(r(32),r(33),r(10)),l=r.n(o),d=r(20),u=r(24),j=r(21),b=r.n(j),h="GET_SLOTS",f="mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx";function p(e){var t="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=".concat(e,"&term=parking&limit=50");return console.log(f),function(e){return b.a.get(t,{headers:{Authorization:"Bearer ".concat(f)}}).then((function(t){var r=t.data.businesses.sort((function(e,t){return t.rating-e.rating})).reverse();e({type:h,payload:r})}))}}r(53);var m=r(1);var O=function(e){var t=e.reference,r=(e.click,Object(i.b)()),c=Object(n.useState)(""),a=Object(u.a)(c,2),s=a[0],o=a[1],j=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r(p(s));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{ref:t,children:[Object(m.jsx)("h2",{children:"Find the worst parking lots from: "}),Object(m.jsxs)("form",{onSubmit:function(e){return j(e)},children:[Object(m.jsx)("input",{className:"input-text",placeholder:"City or State",onChange:function(e){return function(e){e.preventDefault(),o(e.target.value)}(e)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"search-button",type:"submit",value:"Search"})]})]})},g=r(22),v=r.n(g);r(57);var x=function(e){var t=e.slot,r={height:"150px",width:"150px",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(  ".concat(t.image_url||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcA2y2n6aIXXb41hcgB7q81sD6uP-P_HEs_7aaq1GNFYWupeAOyyz3E9EF1VYXDQzilQ&usqp=CAU","  )"),border:"solid 2px black",borderRadius:"5rem"},n=(t.review_count*t.rating/(t.review_count+1)).toFixed(2);return Object(m.jsxs)("div",{className:"card-wrap",children:[Object(m.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(m.jsxs)("div",{style:{"text-decoration":"none"},children:[Object(m.jsx)("h2",{className:"slot-name",children:t.name}),Object(m.jsxs)("div",{className:"card-info",children:[Object(m.jsxs)("div",{className:"info-column",children:[Object(m.jsxs)("span",{className:"adress",children:[" ",t.location.address1?"adress: "+t.location.address1:"missing adress"," "]}),Object(m.jsxs)("p",{children:[" reviews: ",t.review_count]}),Object(m.jsx)("div",{className:"stars",children:Object(m.jsx)(v.a,{count:5,size:24,edit:!1,value:t.rating,activeColor:"#ffd700"})})]}),Object(m.jsx)("div",{style:r})]})]})}),Object(m.jsxs)("footer",{className:"score",children:["score: ",n]})]})};r(58);var w=function(e){var t=e.reference,r=e.click,c=Object(i.c)((function(e){return e.currentSlots}));return Object(n.useEffect)((function(){c.length>1&&r()}),[c]),c.length>1&&r(),Object(m.jsx)("div",{className:"cards-container",ref:t,children:c.map((function(e){return Object(m.jsx)(x,{slot:e})}))})},k=r.p+"static/media/AirGarage.8e250db5.png",N=r.p+"static/media/gitHubP.69ffd9cd.png",y=(r(59),r.p+"static/media/linkedInP.6211bd58.png");var _=function(){return Object(m.jsxs)("div",{className:"about-me",children:[Object(m.jsx)("a",{href:"https://github.com/DimitriTriantafilo",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{width:"40rem",src:N,alt:""})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/dimitri-triantafilo/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{width:"110rem",src:y,alt:""})})]})};var S=function(){var e=function(e){return window.setTimeout(window.scrollTo({top:750,behavior:"smooth"}),9e4)},t=Object(n.useRef)(),r=Object(n.useRef)();return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"v-header container",children:["x",Object(m.jsx)("div",{className:"fullscreen-video-wrap",children:Object(m.jsx)("video",{src:"https://media.istockphoto.com/videos/car-parking-video-id1046709420",autoplay:"true",loop:"true",muted:"true",type:"video/mp4"})}),Object(m.jsx)("div",{className:"header-overlay"}),Object(m.jsxs)("div",{className:"header-content",children:[Object(m.jsx)("h1",{children:"Parking Operations for the 21st Century "}),Object(m.jsx)("img",{className:"logo",src:k,width:"850rem",alt:"-"}),Object(m.jsx)(O,{reference:t,click:function(){return e()}})]})]}),Object(m.jsx)(w,{reference:r,click:function(){return e()}}),Object(m.jsx)("footer",{children:Object(m.jsx)(_,{className:"Footer"})})]})},E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,61)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))},q=r(5),T=r(6),C={currentSlots:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(T.a)(Object(T.a)({},e),{},{currentSlots:t.payload});default:return Object(T.a)({},e)}},P=r(23),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.b,D=Object(q.c)(F,A(Object(q.a)(P.a)));s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{store:D,children:Object(m.jsx)(S,{})})}),document.getElementById("root")),E()}},[[60,1,2]]]);
//# sourceMappingURL=main.88c37247.chunk.js.map