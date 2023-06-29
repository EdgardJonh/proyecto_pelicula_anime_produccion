(function(){"use strict";var e={286:function(e,t,n){var o=n(963),r=n(252);function i(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Inicio")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("Log In")])),_:1}),(0,r.Uk)("| "),(0,r.Wm)(n,{to:"/peliculas"},{default:(0,r.w5)((()=>[(0,r.Uk)("Peliculas")])),_:1}),(0,r.Uk)("| "),(0,r.Wm)(n,{to:"/fotos"},{default:(0,r.w5)((()=>[(0,r.Uk)("Fotos")])),_:1})]),(0,r.Wm)(o)],64)}var a=n(744);const s={},u=(0,a.Z)(s,[["render",i]]);var c=u,l=n(201);const d={class:"home"},f={class:"container border border-success p-2"},p={class:"row"},m={class:"col-md-12"},v=(0,r._)("h1",null,"Ingresa a Estudios Ghibli",-1),h=(0,r._)("p",null,"Has click en el boton Ingresar para ver peliculas de anime con estudios ghibli",-1);function g(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",f,[(0,r._)("div",p,[(0,r._)("div",m,[v,h,(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>a.ingresa&&a.ingresa(...e)),class:"btn btn-success"},"Ingresar")])])])])}var b={name:"HomeView",data:function(){return{ruta:"/about"}},methods:{ingresa:function(){this.$router.push(this.ruta)}},components:{}};const w=(0,a.Z)(b,[["render",g]]);var y=w;const _={id:"peliculas"},k=(0,r.uE)('<h1>Este es el padre de las peliculas</h1><div class="container border border-success p-2"><div class="row"><div class="col-md-12"><h1>Bienvenid@ </h1><p>Aquí podrás encontrar información de peliculas de anime de Studio Ghibli</p><button class="btn btn-warning">Limpiar informacion</button></div></div></div><div class="container p-2"><div class="row"><div class="col-md-12"><p>A continuación hay un listado con los nombres de las peliculas</p></div></div></div><div class="container"><div class="row"><div class="col-md-12"><select name="" id=""><option></option></select></div></div></div><div class="container"><div class="row"><div class="col-md-12"><p>card de la pelicula</p></div></div></div>',5),C={class:"container"},j={class:"row"},D={class:"col-md-12"};function E(e,t,n,o,i,a){const s=(0,r.up)("movie");return(0,r.wg)(),(0,r.iD)("div",_,[k,(0,r._)("div",C,[(0,r._)("div",j,[(0,r._)("div",D,[(0,r.Wm)(s,{onDesdehijo:a.atrapadatos,terminado:e.mensaje,datosPelicula:e.datosConsumidos},null,8,["onDesdehijo","terminado","datosPelicula"])])])])])}var O=n(577);const A={id:"movie"};function P(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("h3",null,(0,O.zw)(a.mensajeEspera),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.datosPelicula,((e,t)=>((0,r.wg)(),(0,r.iD)("ul",{key:t},[(0,r._)("li",null,(0,O.zw)(e.title),1)])))),128)),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>a.consumo&&a.consumo(...e))},"HasmeClick!")])}var S={name:"movie",props:{terminado:{type:String,required:!0},datosPelicula:{type:Array,required:!0}},data:function(){return{esperando:""}},methods:{consumo:function(){this.$emit("desdehijo",!0)}},computed:{mensajeEspera:function(){return this.terminado}}};const F=(0,a.Z)(S,[["render",P]]);var T=F,I={name:"peliculas",data:function(){return{mensaje:"",datosConsumidos:[]}},components:{movie:T},methods:{atrapadatos:function(e){if(this.mensaje="esperando datos de Api",1==e){let e="https://ghibliapi.vercel.app/films";fetch(e).then((e=>e.json())).then((e=>{let t=1e4;setTimeout((()=>{console.log(e),this.mensaje="Se termino de consumir el API",this.datosConsumidos=e}),t)})).catch((e=>console.log("error en consumir la api",e)))}else console.log("error desconocido")}}};const N=(0,a.Z)(I,[["render",E]]);var U=N;const $=e=>((0,r.dD)("data-v-5beefa22"),e=e(),(0,r.Cn)(),e),z={id:"fotos"},H={class:"grid_fotos"},L=["onClick"],x=["src"],W=$((()=>(0,r._)("p",null,"dedwe",-1)));function Z(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("div",H,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(6,(e=>(0,r._)("div",{key:e},[(0,r._)("a",{onClick:t=>a.redirect(e)},[(0,r._)("p",null,(0,O.zw)(e),1),(0,r._)("img",{src:a.cargaFoto(e),alt:""},null,8,x)],8,L)]))),64)),W])])}var q={name:"fotos",data:function(){return{}},methods:{cargaFoto:function(e){return`https://picsum.photos/200/300?grayscale/${e}`},redirect:function(e){this.$router.push(`/fotos/${e}`)}}};const B=(0,a.Z)(q,[["render",Z],["__scopeId","data-v-5beefa22"]]);var K=B;const Y={id:"foto"},G={key:0,class:"titulo"},M={key:1,class:"titulo bg-info"},R={key:2,class:"titulo bg-success"},V={key:3,class:"titulo2 bg-success"},J=["src"];function Q(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",Y,[1==a.id?((0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("p",null,"Foto "+(0,O.zw)(a.id),1)])):2==a.id?((0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("p",null,"Foto "+(0,O.zw)(a.id),1)])):3==a.id?((0,r.wg)(),(0,r.iD)("div",R,[(0,r._)("p",null,"Foto "+(0,O.zw)(a.id),1)])):((0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("p",null,"Foto "+(0,O.zw)(a.id),1)])),(0,r._)("img",{src:e.src,alt:""},null,8,J),(0,r._)("button",{class:"btn btn-warning",onClick:t[0]||(t[0]=(...e)=>a.regrsar&&a.regrsar(...e))},"Regresarr")])}var X={name:"foto",data:function(){return{src:"",ruta:"/fotos"}},methods:{regrsar:function(){return this.$router.push(this.ruta)}},computed:{id(){return this.$route.params.id}},created(){this.src=`https://picsum.photos/200/300?grayscale/${this.id}`}};const ee=(0,a.Z)(X,[["render",Q],["__scopeId","data-v-36d3d2c6"]]);var te=ee;const ne=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,732))}},{path:"/peliculas",name:"peliculas",component:U},{path:"/fotos",name:"fotos",component:K},{path:"/fotos/:id",name:"foto",component:te}],oe=(0,l.p7)({history:(0,l.PO)("./"),routes:ne});var re=oe;(0,o.ri)(c).use(re).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.39af0f8e.js"}}(),function(){n.miniCssF=function(e){return"css/about.11a7a7e2.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="proyecto_pelicula_anime:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="./"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode&&i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkproyecto_pelicula_anime"]=self["webpackChunkproyecto_pelicula_anime"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(286)}));o=n.O(o)})();
//# sourceMappingURL=app.24d5e1b0.js.map