(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],f=0,v=[];f<i.length;f++)c=i[f],a[c]&&v.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(v.length)v.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/fractalcaravan.com/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0189":function(e,t,n){"use strict";var r=n("9874"),a=n.n(r);a.a},"0239":function(e,t,n){"use strict";var r=n("61f4"),a=n.n(r);a.a},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"36f4":function(e,t,n){},"39fc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("AboveTheFold"),n("About"),n("Music"),n("Shows"),n("Photos"),n("Lyrics"),n("Contact"),n("Footer")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:[{menuIsOpen:e.menuIsOpen}]},[e._m(0),n("nav",[n("a",{attrs:{href:"#about"},on:{click:e.delayedToggleMenu}},[n("h2",[e._v("ABOUT")])]),n("a",{attrs:{href:"#music"},on:{click:e.delayedToggleMenu}},[n("h2",[e._v("MUSIC")])]),n("a",{attrs:{href:"#shows"},on:{click:e.delayedToggleMenu}},[n("h2",[e._v("SHOWS")])]),n("a",{attrs:{href:"#photos"},on:{click:e.delayedToggleMenu}},[n("h2",[e._v("PHOTOS")])]),n("a",{attrs:{href:"#lyrics"},on:{click:e.delayedToggleMenu}},[n("h2",[e._v("LYRICS")])]),n("a",{attrs:{href:"#contact"},on:{click:e.delayedToggleMenu}},[n("h2",[e._v("CONTACT")])])]),n("div",{attrs:{id:"menu-button"},on:{click:e.toggleMenu}},[n("svg",{attrs:{x:"0px",y:"0px",width:"90px",height:"90px",viewBox:"0 0 90 90"}},[n("rect",{attrs:{x:"24",y:"29",width:"46",height:"4"}}),n("rect",{attrs:{x:"24",y:"44",width:"46",height:"4"}}),n("rect",{attrs:{x:"24",y:"59",width:"46",height:"4"}})])])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{attrs:{id:"logo"}},[r("a",{attrs:{href:"//fractalcaravan.com"}},[r("img",{attrs:{src:n("cf05"),alt:"Fractal Caravan"}})])])}],s={name:"Header",data:function(){return{menuIsOpen:!1}},methods:{toggleMenu:function(){this.menuIsOpen=!this.menuIsOpen},delayedToggleMenu:function(){var e=this;window.setTimeout(function(){e.toggleMenu()},300)}}},u=s,l=(n("cae9"),n("2877")),f=Object(l["a"])(u,c,i,!1,null,"0e16b95e",null);f.options.__file="Header.vue";var v=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"above-the-fold"}})},h=[],p={name:"AboveTheFold"},_=p,m=(n("e279"),Object(l["a"])(_,d,h,!1,null,"325c317c",null));m.options.__file="AboveTheFold.vue";var b=m.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"about"}},[n("div",{attrs:{id:"text-container"}},[n("p",{attrs:{id:"lead"}},[e._v("\n      Funkified rock & roll with a sci-fi sound\n    ")]),n("p",[e._v("\n      Formed in 2012 in New York City by Edwin Quirk (guitar/vocals), with Fabio Montenegro (bass) and David Cornejo (drums), Fractal Caravan connects rock & roll and funk with reggae & world rhythms to craft modern pop songs about striving to stay human in these surreal times.\n    ")])])])}],O={name:"About"},w=O,x=(n("b8ab"),Object(l["a"])(w,g,y,!1,null,null,null));x.options.__file="About.vue";var T=x.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"music"}},[n("h2",[e._v("MUSIC")])])}],j={name:"Music"},k=j,S=(n("0239"),Object(l["a"])(k,M,E,!1,null,"344c0b8d",null));S.options.__file="Music.vue";var $=S.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"shows"}},[n("h2",[e._v("SHOWS")])])}],A={name:"Shows"},P=A,I=(n("ea9c"),Object(l["a"])(P,C,F,!1,null,"04674210",null));I.options.__file="Shows.vue";var H=I.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"photos"}},[n("h2",[e._v("PHOTOS")])])}],U={name:"Photos"},Y=U,B=(n("7120"),Object(l["a"])(Y,L,N,!1,null,"103e96de",null));B.options.__file="Photos.vue";var J=B.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"lyrics"}},[n("h2",[e._v("LYRICS")])])}],W={name:"Lyrics"},q=W,D=(n("f862"),Object(l["a"])(q,Q,R,!1,null,"7541c6be",null));D.options.__file="Lyrics.vue";var z=D.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"contact"}},[n("h2",[e._v("CONTACT")]),n("main",[n("p",[e._v("For booking, press, or any other inquiries, please contact:")])]),n("a",{attrs:{href:"mailto:edwin@fractalcaravan.com"}},[e._v("edwin@fractalcaravan.com")])])}],V={name:"Contact"},X=V,Z=(n("0189"),Object(l["a"])(X,G,K,!1,null,"1a0059a0",null));Z.options.__file="Contact.vue";var ee=Z.exports,te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{attrs:{id:"social-links"}}),n("small",[e._v("All content © 2012–2019 Edwin Quirk")])])}],re={name:"Footer"},ae=re,oe=(n("760c"),Object(l["a"])(ae,te,ne,!1,null,null,null));oe.options.__file="Footer.vue";var ce=oe.exports,ie={name:"app",components:{Header:v,AboveTheFold:b,About:T,Music:$,Shows:H,Photos:J,Lyrics:z,Contact:ee,Footer:ce}},se=ie,ue=(n("034f"),Object(l["a"])(se,a,o,!1,null,null,null));ue.options.__file="App.vue";var le=ue.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(le)}}).$mount("#app")},"61f4":function(e,t,n){},"64a9":function(e,t,n){},"6aab":function(e,t,n){},7120:function(e,t,n){"use strict";var r=n("cd0a"),a=n.n(r);a.a},"760c":function(e,t,n){"use strict";var r=n("b675"),a=n.n(r);a.a},9874:function(e,t,n){},b675:function(e,t,n){},b8ab:function(e,t,n){"use strict";var r=n("36f4"),a=n.n(r);a.a},cae9:function(e,t,n){"use strict";var r=n("6aab"),a=n.n(r);a.a},cd0a:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.8dd50ef2.png"},dd41:function(e,t,n){},e279:function(e,t,n){"use strict";var r=n("39fc"),a=n.n(r);a.a},ea9c:function(e,t,n){"use strict";var r=n("dd41"),a=n.n(r);a.a},f862:function(e,t,n){"use strict";var r=n("ff4c"),a=n.n(r);a.a},ff4c:function(e,t,n){}});
//# sourceMappingURL=app.b722c679.js.map