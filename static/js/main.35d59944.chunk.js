(this["webpackJsonpplant-book"]=this["webpackJsonpplant-book"]||[]).push([[0],{20:function(e,t,a){},23:function(e,t,a){e.exports={textColor:"plant-components_textColor__2HihW"}},27:function(e,t,a){e.exports={textColor:"car-components_textColor__3Mj-6"}},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),r=a.n(o),c=(a(37),a(29)),i=a(28),s=a(22),m=(a(38),a(20),a(64)),p=a(25),u=a.n(p),d=a(26),f=a.n(d),h=a(63),v=a(23),g=a.n(v),E=a(62),b=function(e){var t=e.isFav,a=e.onChangeFav,n=e.plant;return l.a.createElement(m.a,{style:{marginBottom:20,width:"400"}},l.a.createElement(E.a,null,l.a.createElement("div",{className:g.a.textColor},l.a.createElement("div",null,l.a.createElement("img",{src:n.imageUrl,style:{maxWidth:"100%"},className:"plantImage"}),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",null," Plant species: ",n.species),l.a.createElement("div",null," Species : ",n.species),l.a.createElement("div",null," leaf color: ",n.leafColor),l.a.createElement("div",null," life Span: ",n.lifeSpan),l.a.createElement("div",null," ",e.label),l.a.createElement("div",null," ",e.prop3)),l.a.createElement("div",null,l.a.createElement(h.a,{"aria-label":"fav",onClick:a},t&&l.a.createElement(u.a,{style:{color:"red"}}),!t&&l.a.createElement(f.a,null)))))))},x=a(27),w=a.n(x),C=function(e){var t=e.label;return l.a.createElement("div",{className:w.a.textColor}," My label is : ",t," ")},k=function e(t,a,n,l){Object(s.a)(this,e),this.species=t,this.imageUrl=a,this.leafColor=n,this.lifeSpan=l},y=new k("Moonlight Potho","https://images.squarespace-cdn.com/content/v1/59480bc7725e25bf7ae3ade9/1499276424141-L2POPWFQ7SR1JM0TYMOJ/ke17ZwdGBToddI8pDm48kMJE_oPqVDlYco0BmZZqKB17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URi4X8B9Krz2qQ9LtOQvf9tzTXvYGV_EBNca-TfE3VhzzrD36oouzk3SSBf3bbVhnA/Moonlight+6+inch.jpg?format=2500w","green","3 years"),M=new k("Montreal","https://img.crocdn.co.uk/images/products2/pl/20/00/03/20/pl2000032008.jpg?width=940&height=940","Dark green","5 years"),O=[new k("Purple Orchid","https://s3.amazonaws.com/finegardening.s3.tauntoncloud.com/app/uploads/2018/01/23173930/041082036-01_xlg.jpg","Purple Flower, Green leaves","1 years"),y,M];var S=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],r=l.a.createElement(C,{label:"Car A"});return l.a.createElement("div",{className:"App"},r,l.a.createElement(C,{label:"Car B"}),l.a.createElement("div",{style:{width:"600px",margin:"0 auto"}},l.a.createElement("h1",null,"My Favorite Plants"),O.map((function(e,t){return l.a.createElement(b,{key:t,plant:e,label:"lala",prop3:t,isFav:a.findIndex((function(t){return t==e.species}))>=0,onChangeFav:function(){a.findIndex((function(t){return t==e.species}))>=0?o(a.filter((function(t){return t!==e.species}))):o([].concat(Object(c.a)(a),[e.species]))}})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.35d59944.chunk.js.map