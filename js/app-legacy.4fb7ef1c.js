(function(){"use strict";var n={4427:function(n,e,t){t(752),t(3964),t(429),t(6409);var o=t(9242),s=t(3396),a={class:"wrapper"},i={class:"item"},r={class:"item"};function c(n,e,t,o,c,l){var u=(0,s.up)("Header"),d=(0,s.up)("Body"),m=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",i,[(0,s.Wm)(u,{img:"alex",name:"Александр",status:"Онлайн"}),(0,s.Wm)(d,{messeges:c.messeges,id:1},null,8,["messeges"]),(0,s.Wm)(m,{id:1,onSend:l.send},null,8,["onSend"])]),(0,s._)("div",r,[(0,s.Wm)(u,{img:"jane",name:"Евгений",status:"Онлайн"}),(0,s.Wm)(d,{messeges:c.messeges,id:2},null,8,["messeges"]),(0,s.Wm)(m,{id:2,onSend:l.send},null,8,["onSend"])])])}t(9358),t(560),t(8324),t(4284);var l=t(7139),u={class:"header"},d=["src"],m={class:"header__info"},f={class:"header__info-name"},A={class:"header__info-status"};function g(n,e,t,o,a,i){return(0,s.wg)(),(0,s.iD)("header",u,[(0,s._)("img",{src:a.images[t.img],alt:"",class:"header__avatar"},null,8,d),(0,s._)("div",m,[(0,s._)("h3",f,(0,l.zw)(t.name),1),(0,s._)("span",A,(0,l.zw)(t.status),1)])])}var h={props:["img","name","status"],data:function(){return{images:{alex:t(5306),jane:t(1530)}}}},p=t(89);const b=(0,p.Z)(h,[["render",g]]);var v=b,w={class:"main"},S={class:"main__chatitem-time"},C={class:"main__chatitem-text"},x=["src"];function G(n,e,t,a,i,r){return(0,s.wg)(),(0,s.iD)("main",w,[(0,s.Wm)(o.W3,{name:"list"},{default:(0,s.w5)((function(){return[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.messeges,(function(n,e){return(0,s.wg)(),(0,s.iD)("div",{class:"main__chatitem",key:e},[(0,s._)("div",{class:(0,l.C_)(["main__chatitem-body",{send:n.id==t.id,get:n.id!=t.id}])},[(0,s._)("span",S,(0,l.zw)(n.time),1),(0,s._)("div",C,[n.photo?((0,s.wg)(),(0,s.iD)("img",{key:0,src:n.photo,alt:""},null,8,x)):(0,s.kq)("",!0),(0,s._)("p",null,(0,l.zw)(n.text),1)])],2)])})),128))]})),_:1})])}var k={props:["messeges","id"]};const U=(0,p.Z)(k,[["render",G],["__scopeId","data-v-263e27be"]]);var D=U,I=t.p+"img/photo.2ab0d0a5.svg",H=t.p+"img/send.e8776971.svg",Y=function(n){return(0,s.dD)("data-v-bc201baa"),n=n(),(0,s.Cn)(),n},T={class:"footer"},F=Y((function(){return(0,s._)("img",{src:I,alt:""},null,-1)})),B=[F],K=Y((function(){return(0,s._)("img",{src:H,alt:""},null,-1)})),R=[K],j=Y((function(){return(0,s._)("h2",{class:"modal__block-title"}," Добавить фото ",-1)})),y={class:"modal__block-inputs"},M={for:"inp"},E=Y((function(){return(0,s._)("span",null,"URL",-1)})),P={for:"area"},V=Y((function(){return(0,s._)("span",null,"Comment",-1)})),z={class:"modal__block-btns"};function Q(n,e,t,a,i,r){return(0,s.wg)(),(0,s.iD)("footer",T,[(0,s.wy)((0,s._)("textarea",{placeholder:"Написать сообщение...",type:"text",class:"footer__input",rows:"1","onUpdate:modelValue":e[0]||(e[0]=function(n){return i.message=n}),onInput:e[1]||(e[1]=function(){return r.inputHeight&&r.inputHeight.apply(r,arguments)})},null,544),[[o.nr,i.message]]),""==i.message?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"footer__btn",onClick:e[2]||(e[2]=function(n){return i.closeModal=!0})},B)):((0,s.wg)(),(0,s.iD)("button",{key:1,class:"footer__btn",onClick:e[3]||(e[3]=function(){return r.send&&r.send.apply(r,arguments)})},R)),(0,s.Wm)(o.uT,{name:"modal"},{default:(0,s.w5)((function(){return[1==i.closeModal?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"modal",onClick:e[9]||(e[9]=function(n){return i.closeModal=!1})},[(0,s._)("div",{class:"modal__block",onClick:e[8]||(e[8]=(0,o.iM)((function(){}),["stop"]))},[j,(0,s._)("div",y,[(0,s._)("label",M,[E,(0,s.wy)((0,s._)("input",{type:"text",id:"inp","onUpdate:modelValue":e[4]||(e[4]=function(n){return i.photo=n})},null,512),[[o.nr,i.photo]])]),(0,s._)("label",P,[V,(0,s.wy)((0,s._)("textarea",{id:"area","onUpdate:modelValue":e[5]||(e[5]=function(n){return i.comment=n})},null,512),[[o.nr,i.comment]])])]),(0,s._)("div",z,[(0,s._)("button",{class:"modal__block-btns-btn del",onClick:e[6]||(e[6]=function(n){return i.closeModal=!1})}," Отмена "),(0,s._)("button",{class:"modal__block-btns-btn edit",onClick:e[7]||(e[7]=function(){return r.sendPhoto&&r.sendPhoto.apply(r,arguments)})}," Добавить ")])])])):(0,s.kq)("",!0)]})),_:1})])}t(228),t(7522),t(8436),t(4338);var W={props:["id"],data:function(){return{message:"",closeModal:!1,photo:"",comment:""}},methods:{inputHeight:function(){var n=document.querySelectorAll(".footer__input");n.forEach((function(n){n.style.height="auto",n.style.height="".concat(n.scrollHeight,"px")}))},send:function(){if(this.message.trim().length>0){var n={id:this.id,text:this.message,time:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())};this.$emit("send",n),this.message=""}},sendPhoto:function(){if(this.photo.trim().length>0){var n={id:this.id,text:this.comment,photo:this.photo,time:"".concat((new Date).getHours(),":").concat((new Date).getMinutes())};this.$emit("send",n),this.photo=this.comment=this.closeModal=""}}}};const O=(0,p.Z)(W,[["render",Q],["__scopeId","data-v-bc201baa"]]);var q=O,J={components:{Header:v,Body:D,Footer:q},data:function(){return{messeges:[]}},mounted:function(){var n=localStorage.messeges;this.messeges=n?JSON.parse(n):[]},methods:{send:function(n){this.messeges.push(n),localStorage.messeges=JSON.stringify(this.messeges)}}};const X=(0,p.Z)(J,[["render",c]]);var L=X;(0,o.ri)(L).mount("#app")},5306:function(n){n.exports="data:image/png;base64,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"},1530:function(n){n.exports="data:image/png;base64,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"}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return n[o].call(a.exports,a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,o,s,a){if(!o){var i=1/0;for(u=0;u<n.length;u++){o=n[u][0],s=n[u][1],a=n[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(r=!1,a<i&&(i=a));if(r){n.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=n.length;u>0&&n[u-1][2]>a;u--)n[u]=n[u-1];n[u]=[o,s,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/chat/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var s,a,i=o[0],r=o[1],c=o[2],l=0;if(i.some((function(e){return 0!==n[e]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(c)var u=c(t)}for(e&&e(o);l<i.length;l++)a=i[l],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(u)},o=self["webpackChunkcli"]=self["webpackChunkcli"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4427)}));o=t.O(o)})();
//# sourceMappingURL=app-legacy.4fb7ef1c.js.map