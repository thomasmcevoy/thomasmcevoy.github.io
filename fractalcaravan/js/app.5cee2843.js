(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)s=c[d],r[s]&&f.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/fractalcaravan/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},1902:function(t,e,a){},"1d6a":function(t,e,a){"use strict";var n=a("77ae"),r=a.n(n);r.a},3561:function(t,e,a){"use strict";var n=a("5a4f"),r=a.n(n);r.a},4383:function(t,e,a){},"51a6":function(t,e,a){"use strict";var n=a("4383"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("AboveTheFold"),a("Shows"),a("Videos"),a("Pix"),a("Bio"),a("Music"),a("Contact"),a("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:[{menuIsOpen:t.menuIsOpen}]},[t._m(0),a("nav",[a("a",{on:{click:function(e){t.smoothScroll("shows")}}},[a("h2",[t._v("SHOWS")])]),a("a",{on:{click:function(e){t.smoothScroll("videos")}}},[a("h2",[t._v("VIDEOS")])]),a("a",{on:{click:function(e){t.smoothScroll("pix")}}},[a("h2",[t._v("PIX")])]),a("a",{on:{click:function(e){t.smoothScroll("bio")}}},[a("h2",[t._v("BIO")])]),a("a",{on:{click:function(e){t.smoothScroll("music")}}},[a("h2",[t._v("MUSIC")])]),t._m(1),a("a",{on:{click:function(e){t.smoothScroll("contact")}}},[a("h2",[t._v("CONTACT")])])]),a("div",{attrs:{id:"menu-button"},on:{click:t.toggleMenu}},[a("svg",{attrs:{x:"0px",y:"0px",width:"90px",height:"90px",viewBox:"0 0 90 90"}},[a("rect",{attrs:{x:"24",y:"29",width:"46",height:"4"}}),a("rect",{attrs:{x:"24",y:"44",width:"46",height:"4"}}),a("rect",{attrs:{x:"24",y:"59",width:"46",height:"4"}})])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{attrs:{id:"logo"}},[n("a",{attrs:{href:"//fractalcaravan.com"}},[n("img",{attrs:{src:a("cf05"),alt:"Fractal Caravan"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{target:"_blank",href:"//fractalcaravan.bandcamp.com"}},[a("h2",[t._v("STORE")])])}],o={name:"Header",data:function(){return{menuIsOpen:!1}},methods:{toggleMenu:function(){this.menuIsOpen=!this.menuIsOpen},closeMenu:function(){this.menuIsOpen=!1},smoothScroll:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}}},l=o,u=(a("3561"),a("2877")),d=Object(u["a"])(l,s,c,!1,null,"03701e47",null);d.options.__file="Header.vue";var f=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"above-the-fold"}},[a("div",{staticClass:"bandcamp"},[a("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:"https://bandcamp.com/EmbeddedPlayer/track=2663319777/size=large/bgcol=333333/linkcol=0f91ff//tracklist=false/transparent=true/",seamless:""}},[a("a",{attrs:{href:"http://fractalcaravan.bandcamp.com/track/now-or-never"}},[t._v("\n        Now or Never by Fractal Caravan\n      ")])])])])}],p={name:"AboveTheFold"},v=p,b=(a("7820"),Object(u["a"])(v,m,h,!1,null,"71c2606a",null));b.options.__file="AboveTheFold.vue";var _=b.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"shows"}},[a("h2",[t._v("SHOWS")]),a("a",{staticClass:"songkick-widget",attrs:{href:"//www.songkick.com/artists/7923928","data-theme":"dark","data-detect-style":"true","data-background-color":"transparent"}},[t._v("\n    Tour dates\n  ")])])}],w={name:"Shows",created:function(){var t=document.createElement("script");t.setAttribute("src","//widget.songkick.com/widget.js"),document.head.appendChild(t)}},x=w,k=(a("51a6"),Object(u["a"])(x,g,y,!1,null,"a65f57c6",null));k.options.__file="Shows.vue";var S=k.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"videos"}},[a("h2",[t._v("VIDEOS")]),a("div",{staticClass:"video"},[a("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:"//www.youtube.com/embed/5sij0V0OiEE",allow:"encrypted-media",allowfullscreen:""}})]),a("div",{staticClass:"video"},[a("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:"//www.youtube.com/embed/dlpSl-0i334",allow:"encrypted-media",allowfullscreen:""}})])])}],C={name:"Videos"},j=C,F=(a("e2dc"),Object(u["a"])(j,E,O,!1,null,"43ebdb06",null));F.options.__file="Videos.vue";var I=F.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"pix"}},[a("h2",[t._v("PIX")]),a("main",[a("div",{attrs:{id:"featured"}},[a("img",{staticClass:"featured",attrs:{src:t.featured}})]),a("ol",{attrs:{id:"thumbnails"}},t._l(t.pix,function(e,n){return a("li",{key:n},[a("img",{staticClass:"thumbnail",attrs:{src:e.src},on:{click:function(e){t.setFeatured(n)}}})])}),0)])])},T=[],$={name:"Pix",methods:{setFeatured:function(t){this.featured="pix/".concat(t,".jpg")}},data:function(){return{featured:"pix/0.jpg",pix:[{src:"pix/0.jpg"},{src:"pix/1.jpg"},{src:"pix/2.jpg"},{src:"pix/3.jpg"},{src:"pix/4.jpg"},{src:"pix/5.jpg"},{src:"pix/6.jpg"},{src:"pix/7.jpg"}]}}},M=$,A=(a("dc8d"),Object(u["a"])(M,P,T,!1,null,"763b53bc",null));A.options.__file="Pix.vue";var B=A.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"bio"}},[a("h2",[t._v("BIO")]),a("p",{attrs:{id:"lead"}},[t._v("\n    Funkified rock & roll with a sci-fi sound\n  ")]),a("p",[t._v("\n    With members from around the globe, and over 20 countries travelled between them, \n    Fractal Caravan are planetary rockers. Funk-charged global rhythms, garage-rock \n    guitar grooves, and philosophical wordplay about the new dystopian reality are this\n    band’s modus operandi. Reggae follows punk, and bluesy Latin soul transforms into \n    Afro-funk. No genre is safe, no territory off-limits on their musical map.\n  ")]),a("p",[t._v("\n    Formed in 2012 by Edwin Quirk (guitar/vocals), and joined soon after by Fabio \n    Montenegro (bass) and David Alegre Cornejo (drums), this power trio has honed their\n    electrifying live show from Brooklyn to Bogotá, from Rockwood Music Hall to the \n    Bitter End.\n  ")]),a("p",[t._v("\n    Their debut LP Paradox Lust was self-released in 2014, followed shortly after by The\n    Secret Ingredient EP, mixed by Daniel Boyle of Lee “Scratch” Perry fame. After taking\n    2 years to write, record, and self-produce all their own new music, they had all \n    their final mixes mastered by the legendary Greg Calbi (The Ramones, David Bowie, John \n    Lennon).\n  ")]),a("p",[t._v("\n    The new songs are odes to staying true to your analog dreams, in a world increasingly \n    enslaving us to algorithms & digital machines. Released in early 2019, their first\n     new single in two years, Viajero is a psychedelic rocker with a Bo Didley beat. The \n     new sound of Fractal Caravan is sincere & swaggering rock and roll, with a 21st \n     century soul.\n  ")])])}],H={name:"Bio"},D=H,N=(a("c9ca"),Object(u["a"])(D,V,L,!1,null,null,null));N.options.__file="Bio.vue";var R=N.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"music"}},[a("h2",[t._v("MUSIC")]),a("div",{staticClass:"bandcamp"},[a("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:"https://bandcamp.com/EmbeddedPlayer/track=409829889/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",seamless:""}},[a("a",{attrs:{href:"http://fractalcaravan.bandcamp.com/track/rogue-agent-16"}},[t._v("\n        Rogue Agent '16 by Fractal Caravan\n      ")])])]),a("div",{staticClass:"bandcamp bandcamp-tall"},[a("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:"https://bandcamp.com/EmbeddedPlayer/album=118691780/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/",seamless:""}},[a("a",{attrs:{href:"http://fractalcaravan.bandcamp.com/album/the-secret-ingredient-ep"}},[t._v("\n        The Secret Ingredient EP by Fractal Caravan\n      ")])])]),a("div",{staticClass:"bandcamp bandcamp-extra-tall"},[a("iframe",{staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:"https://bandcamp.com/EmbeddedPlayer/album=294522241/size=large/bgcol=333333/linkcol=0f91ff/transparent=true/",seamless:""}},[a("a",{attrs:{href:"http://fractalcaravan.bandcamp.com/album/the-secret-ingredient-ep"}},[t._v("\n        The Secret Ingredient EP by Fractal Caravan\n      ")])])])])}],U={name:"Music"},W=U,G=(a("1d6a"),Object(u["a"])(W,z,J,!1,null,"1175086b",null));G.options.__file="Music.vue";var X=G.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"contact"}},[a("h2",[t._v("CONTACT")]),a("main",[a("p",[t._v("All booking & press:")]),a("a",{attrs:{href:"mailto:edwin@fractalcaravan.com"}},[a("span",{attrs:{id:"contact-email"}},[t._v("edwin@fractalcaravan.com")])]),a("link",{attrs:{type:"text/css",rel:"stylesheet",href:"//cdn-images.mailchimp.com/embedcode/slim-10_7.css"}}),a("div",{attrs:{id:"mc_embed_signup"}},[a("form",{staticClass:"validate",attrs:{action:"//fractalcaravan.us7.list-manage.com/subscribe/post?u=ca48592ac5ccda454686d8047&id=d176c70824",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[a("div",{attrs:{id:"mc_embed_signup_scroll"}},[a("label",{attrs:{for:"mce-EMAIL"}},[t._v("Subscribe to the Fractal Caravan newsletter!")]),a("div",{attrs:{id:"input-container"}},[a("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:""}}),a("input",{staticClass:"button",attrs:{type:"submit",value:"SIGN UP",name:"subscribe",id:"mc-embedded-subscribe"}})]),a("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[a("input",{attrs:{type:"text",name:"b_ca48592ac5ccda454686d8047_d176c70824",tabindex:"-1",value:""}})])])])])])])}],K={name:"Contact"},Y=K,Z=(a("5924"),Object(u["a"])(Y,q,Q,!1,null,"7f828368",null));Z.options.__file="Contact.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{attrs:{id:"social-links"}},[a("div",{attrs:{id:"youtube"}}),a("div",{attrs:{id:"twitter"}}),a("div",{attrs:{id:"instagram"}}),a("div",{attrs:{id:"soundcloud"}})]),a("small",[t._v("All rights reserved © 2019 Fractal Caravan")])])}],nt={name:"Footer"},rt=nt,it=(a("760c"),Object(u["a"])(rt,et,at,!1,null,null,null));it.options.__file="Footer.vue";var st=it.exports,ct={name:"app",components:{Header:f,AboveTheFold:_,Shows:S,Videos:I,Pix:B,Bio:R,Music:X,Contact:tt,Footer:st}},ot=ct,lt=(a("034f"),Object(u["a"])(ot,r,i,!1,null,null,null));lt.options.__file="App.vue";var ut=lt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(ut)}}).$mount("#app")},5924:function(t,e,a){"use strict";var n=a("5b8c"),r=a.n(n);r.a},"5a4f":function(t,e,a){},"5b8c":function(t,e,a){},"64a9":function(t,e,a){},"760c":function(t,e,a){"use strict";var n=a("b675"),r=a.n(n);r.a},"77ae":function(t,e,a){},7820:function(t,e,a){"use strict";var n=a("9a0a"),r=a.n(n);r.a},"842e":function(t,e,a){},"9a0a":function(t,e,a){},"9afd":function(t,e,a){},b675:function(t,e,a){},c9ca:function(t,e,a){"use strict";var n=a("9afd"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.8dd50ef2.png"},dc8d:function(t,e,a){"use strict";var n=a("1902"),r=a.n(n);r.a},e2dc:function(t,e,a){"use strict";var n=a("842e"),r=a.n(n);r.a}});
//# sourceMappingURL=app.5cee2843.js.map