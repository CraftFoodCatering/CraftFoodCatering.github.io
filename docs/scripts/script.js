(()=>{/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var t="(prefers-reduced-motion: reduce)";function n(t){t.length=0}function e(t,n,e){return Array.prototype.slice.call(t,n,e)}function i(t){return t.bind.apply(t,[null].concat(e(arguments,1)))}var o=setTimeout,r=function(){};function u(t){return requestAnimationFrame(t)}function s(t,n){return typeof n===t}function a(t){return null!==t&&s("object",t)}var c=Array.isArray,l=i(s,"function"),d=i(s,"string"),f=i(s,"undefined");function v(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function g(t){return c(t)?t:[t]}function h(t,n){g(t).forEach(n)}function p(t,n){return t.indexOf(n)>-1}function m(t,n){return t.push.apply(t,g(n)),t}function y(t,n,e){t&&h(n,function(n){n&&t.classList[e?"add":"remove"](n)})}function b(t,n){y(t,d(n)?n.split(" "):n,!0)}function E(t,n){h(n,t.appendChild.bind(t))}function w(t,n){h(t,function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)})}function S(t,n){return v(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function x(t,n){var i=t?e(t.children):[];return n?i.filter(function(t){return S(t,n)}):i}function C(t,n){return n?x(t,n)[0]:t.firstElementChild}var L=Object.keys;function k(t,n,e){return t&&(e?L(t).reverse():L(t)).forEach(function(e){"__proto__"!==e&&n(t[e],e)}),t}function P(t){return e(arguments,1).forEach(function(n){k(n,function(e,i){t[i]=n[i]})}),t}function A(t){return e(arguments,1).forEach(function(n){k(n,function(n,e){c(n)?t[e]=n.slice():a(n)?t[e]=A({},a(t[e])?t[e]:{},n):t[e]=n})}),t}function _(t,n){h(n||L(t),function(n){delete t[n]})}function M(t,n){h(t,function(t){h(n,function(n){t&&t.removeAttribute(n)})})}function D(t,n,e){a(n)?k(n,function(n,e){D(t,e,n)}):h(t,function(t){null===e||""===e?M(t,n):t.setAttribute(n,String(e))})}function z(t,n,e){var i=document.createElement(t);return n&&(d(n)?b(i,n):D(i,n)),e&&E(e,i),i}function I(t,n,e){if(f(e))return getComputedStyle(t)[n];null!==e&&(t.style[n]=""+e)}function O(t,n){I(t,"display",n)}function N(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function T(t,n){return t.getAttribute(n)}function F(t,n){return t&&t.classList.contains(n)}function B(t){return t.getBoundingClientRect()}function j(t){h(t,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function q(t){return C(new DOMParser().parseFromString(t,"text/html").body)}function R(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function W(t,n){return t&&t.querySelector(n)}function X(t,n){return n?e(t.querySelectorAll(n)):[]}function G(t,n){y(t,n,!1)}function H(t){return t.timeStamp}function Y(t){return d(t)?t:t?t+"px":""}var U="splide",V="data-"+U;function K(t,n){if(!t)throw Error("["+U+"] "+(n||""))}var J=Math.min,Q=Math.max,Z=Math.floor,$=Math.ceil,tt=Math.abs;function tn(t,n,e,i){var o=J(n,e),r=Q(n,e);return i?o<t&&t<r:o<=t&&t<=r}function te(t,n,e){var i=J(n,e),o=Q(n,e);return J(Q(i,t),o)}function ti(t){return+(t>0)-+(t<0)}function to(t,n){return h(n,function(n){t=t.replace("%s",""+n)}),t}function tr(t){return t<10?"0"+t:""+t}var tu={};function ts(){var t=[];function e(t,n,e){h(t,function(t){t&&h(n,function(n){n.split(" ").forEach(function(n){var i=n.split(".");e(t,i[0],i[1])})})})}return{bind:function(n,i,o,r){e(n,i,function(n,e,i){var u="addEventListener"in n,s=u?n.removeEventListener.bind(n,e,o,r):n.removeListener.bind(n,o);u?n.addEventListener(e,o,r):n.addListener(o),t.push([n,e,i,o,s])})},unbind:function(n,i,o){e(n,i,function(n,e,i){t=t.filter(function(t){return t[0]!==n||t[1]!==e||t[2]!==i||!!o&&t[3]!==o||(t[4](),!1)})})},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach(function(t){t[4]()}),n(t)}}}var ta="mounted",tc="ready",tl="move",td="moved",tf="click",tv="refresh",tg="updated",th="resize",tp="resized",tm="scroll",ty="scrolled",tb="destroy",tE="navigation:mounted",tw="autoplay:play",tS="autoplay:pause",tx="lazyload:loaded";function tC(t){var n=t?t.event.bus:document.createDocumentFragment(),o=ts();return t&&t.event.on(tb,o.destroy),P(o,{bus:n,on:function(t,e){o.bind(n,g(t).join(" "),function(t){e.apply(e,c(t.detail)?t.detail:[])})},off:i(o.unbind,n),emit:function(t){o.dispatch(n,t,e(arguments,1))}})}function tL(t,n,e,i){var o,r,s=Date.now,a=0,c=!0,l=0;function d(){if(!c){if(a=t?J((s()-o)/t,1):1,e&&e(a),a>=1&&(n(),o=s(),i&&++l>=i))return f();r=u(d)}}function f(){c=!0}function v(){r&&cancelAnimationFrame(r),a=0,r=0,c=!0}return{start:function(n){n||v(),o=s()-(n?a*t:0),c=!1,r=u(d)},rewind:function(){o=s(),a=0,e&&e(a)},pause:f,cancel:v,set:function(n){t=n},isPaused:function(){return c}}}var tk="Arrow",tP=tk+"Left",tA=tk+"Right",t_=tk+"Up",tM=tk+"Down",tD={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[t_,tA],ArrowRight:[tM,tP]},tz="role",tI="tabindex",tO="aria-",tN=tO+"controls",tT=tO+"current",tF=tO+"selected",tB=tO+"label",tj=tO+"labelledby",tq=tO+"hidden",tR=tO+"orientation",tW=tO+"roledescription",tX=tO+"live",tG=tO+"busy",tH=tO+"atomic",tY=[tz,tI,"disabled",tN,tT,tB,tj,tq,tR,tW],tU=U+"__",tV=tU+"track",tK=tU+"list",tJ=tU+"slide",tQ=tJ+"--clone",tZ=tJ+"__container",t$=tU+"arrows",t0=tU+"arrow",t1=t0+"--prev",t4=t0+"--next",t3=tU+"pagination",t5=t3+"__page",t6=tU+"progress__bar",t2=tU+"toggle",t8=tU+"sr",t7="is-active",t9="is-prev",nt="is-next",nn="is-visible",ne="is-loading",ni="is-focus-in",no="is-overflow",nr=[t7,nn,t9,nt,ne,ni,no],nu="touchstart mousedown",ns="touchmove mousemove",na="touchend touchcancel mouseup click",nc="slide",nl="loop",nd="fade",nf=V+"-interval",nv={passive:!1,capture:!0},ng={Spacebar:" ",Right:tA,Left:tP,Up:t_,Down:tM};function nh(t){return ng[t=d(t)?t:t.key]||t}var np="keydown",nm=V+"-lazy",ny=nm+"-srcset",nb="["+nm+"], ["+ny+"]",nE=[" ","Enter"],nw=Object.freeze({__proto__:null,Media:function(n,e,i){var o=n.state,r=i.breakpoints||{},u=i.reducedMotion||{},s=ts(),a=[];function c(t){t&&s.destroy()}function l(t,n){var e=matchMedia(n);s.bind(e,"change",d),a.push([t,e])}function d(){var t=o.is(7),e=i.direction,r=a.reduce(function(t,n){return A(t,n[1].matches?n[0]:{})},{});_(i),f(r),i.destroy?n.destroy("completely"===i.destroy):t?(c(!0),n.mount()):e!==i.direction&&n.refresh()}function f(t,e,r){A(i,t),e&&A(Object.getPrototypeOf(i),t),(r||!o.is(1))&&n.emit(tg,i)}return{setup:function(){var n="min"===i.mediaQuery;L(r).sort(function(t,e){return n?+t-+e:+e-+t}).forEach(function(t){l(r[t],"("+(n?"min":"max")+"-width:"+t+"px)")}),l(u,t),d()},destroy:c,reduce:function(n){matchMedia(t).matches&&(n?A(i,u):_(i,L(u)))},set:f}},Direction:function(t,n,e){return{resolve:function(t,n,i){var o="rtl"!==(i=i||e.direction)||n?"ttb"===i?0:-1:1;return tD[t]&&tD[t][o]||t.replace(/width|left|right/i,function(t,n){var e=tD[t.toLowerCase()][o]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e})},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,e,i){var o,r,u,s=tC(t),a=s.on,c=s.bind,d=t.root,f=i.i18n,v={},g=[],h=[],p=[];function E(){var t,n;r=C(o=A("."+tV),"."+tK),K(o&&r,"A track/list element is missing."),m(g,x(r,"."+tJ+":not(."+tQ+")")),k({arrows:t$,pagination:t3,prev:t1,next:t4,bar:t6,toggle:t2},function(t,n){v[n]=A("."+t)}),P(v,{root:d,track:o,list:r,slides:g}),t=d.id||""+U+tr(tu[U]=(tu[U]||0)+1),n=i.role,d.id=t,o.id=o.id||t+"-track",r.id=r.id||t+"-list",!T(d,tz)&&"SECTION"!==d.tagName&&n&&D(d,tz,n),D(d,tW,f.carousel),D(r,tz,"presentation"),L()}function w(t){var e=tY.concat("style");n(g),G(d,h),G(o,p),M([o,r],e),M(d,t?e:["style",tW])}function L(){G(d,h),G(o,p),h=_(U),p=_(tV),b(d,h),b(o,p),D(d,tB,i.label),D(d,tj,i.labelledby)}function A(t){var n=W(d,t);return n&&function(t,n){if(l(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!S(e,n);)e=e.parentElement;return e}(n,"."+U)===d?n:void 0}function _(t){return[t+"--"+i.type,t+"--"+i.direction,i.drag&&t+"--draggable",i.isNavigation&&t+"--nav",t===U&&t7]}return P(v,{setup:E,mount:function(){a(tv,w),a(tv,E),a(tg,L),c(document,nu+" keydown",function(t){u="keydown"===t.type},{capture:!0}),c(d,"focusin",function(){y(d,ni,!!u)})},destroy:w})},Slides:function(t,e,o){var r=tC(t),u=r.on,s=r.emit,a=r.bind,c=e.Elements,f=c.slides,m=c.list,x=[];function L(){f.forEach(function(t,n){P(t,n,-1)})}function k(){_(function(t){t.destroy()}),n(x)}function P(n,e,o){var r=function(t,n,e,o){var r,u=tC(t),s=u.on,a=u.emit,c=u.bind,l=t.Components,d=t.root,f=t.options,v=f.isNavigation,g=f.updateOnMove,h=f.i18n,p=f.pagination,m=f.slideFocus,b=l.Direction.resolve,E=T(o,"style"),w=T(o,tB),S=e>-1,x=C(o,"."+tZ);function L(){var i=t.splides.map(function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""}).join(" ");D(o,tB,to(h.slideX,(S?e:n)+1)),D(o,tN,i),D(o,tz,m?"button":""),m&&M(o,tW)}function k(){r||P()}function P(){if(!r){var e,i=t.index;(e=A())!==F(o,t7)&&(y(o,t7,e),D(o,tT,v&&e||""),a(e?"active":"inactive",_)),function(){var n=function(){if(t.is(nd))return A();var n=B(l.Elements.track),e=B(o),i=b("left",!0),r=b("right",!0);return Z(n[i])<=$(e[i])&&Z(e[r])<=$(n[r])}(),e=!n&&(!A()||S);if(t.state.is([4,5])||D(o,tq,e||""),D(X(o,f.focusableNodes||""),tI,e?-1:""),m&&D(o,tI,e?-1:0),n!==F(o,nn)&&(y(o,nn,n),a(n?"visible":"hidden",_)),!n&&document.activeElement===o){var i=l.Slides.getAt(t.index);i&&N(i.slide)}}(),y(o,t9,n===i-1),y(o,nt,n===i+1)}}function A(){var i=t.index;return i===n||f.cloneStatus&&i===e}var _={index:n,slideIndex:e,slide:o,container:x,isClone:S,mount:function(){S||(o.id=d.id+"-slide"+tr(n+1),D(o,tz,p?"tabpanel":"group"),D(o,tW,h.slide),D(o,tB,w||to(h.slideLabel,[n+1,t.length]))),c(o,"click",i(a,tf,_)),c(o,"keydown",i(a,"sk",_)),s([td,"sh",ty],P),s(tE,L),g&&s(tl,k)},destroy:function(){r=!0,u.destroy(),G(o,nr),M(o,tY),D(o,"style",E),D(o,tB,w||"")},update:P,style:function(t,n,e){I(e&&x||o,t,n)},isWithin:function(e,i){var o=tt(e-n);return!S&&(f.rewind||t.is(nl))&&(o=J(o,t.length-o)),o<=i}};return _}(t,e,o,n);r.mount(),x.push(r),x.sort(function(t,n){return t.index-n.index})}function A(t){return t?z(function(t){return!t.isClone}):x}function _(t,n){A(n).forEach(t)}function z(t){return x.filter(l(t)?t:function(n){return d(t)?S(n.slide,t):p(g(t),n.index)})}return{mount:function(){L(),u(tv,k),u(tv,L)},destroy:k,update:function(){_(function(t){t.update()})},register:P,get:A,getIn:function(t){var n=e.Controller,i=n.toIndex(t),r=n.hasFocus()?1:o.perPage;return z(function(t){return tn(t.index,i,i+r-1)})},getAt:function(t){return z(t)[0]},add:function(t,n){h(t,function(t){if(d(t)&&(t=q(t)),v(t)){var e,r,u,c,l=f[n];l?w(t,l):E(m,t),b(t,o.classes.slide),e=t,r=i(s,th),(c=(u=X(e,"img")).length)?u.forEach(function(t){a(t,"load error",function(){--c||r()})}):r()}}),s(tv)},remove:function(t){j(z(t).map(function(t){return t.slide})),s(tv)},forEach:_,filter:z,style:function(t,n,e){_(function(i){i.style(t,n,e)})},getLength:function(t){return t?f.length:x.length},isEnough:function(){return x.length>o.perPage}}},Layout:function(t,n,e){var o,r,u,s=tC(t),c=s.on,l=s.bind,d=s.emit,f=n.Slides,v=n.Direction.resolve,g=n.Elements,h=g.root,p=g.track,m=g.list,b=f.getAt,E=f.style;function w(){o="ttb"===e.direction,I(h,"maxWidth",Y(e.width)),I(p,v("paddingLeft"),x(!1)),I(p,v("paddingRight"),x(!0)),S(!0)}function S(t){var n,i=B(h);(t||r.width!==i.width||r.height!==i.height)&&(I(p,"height",(n="",o&&(K(n=C(),"height or heightRatio is missing."),n="calc("+n+" - "+x(!1)+" - "+x(!0)+")"),n)),E(v("marginRight"),Y(e.gap)),E("width",e.autoWidth?null:Y(e.fixedWidth)||(o?"":L())),E("height",Y(e.fixedHeight)||(o?e.autoHeight?null:L():C()),!0),r=i,d(tp),u!==(u=D())&&(y(h,no,u),d("overflow",u)))}function x(t){var n=e.padding,i=v(t?"right":"left");return n&&Y(n[i]||(a(n)?0:n))||"0px"}function C(){return Y(e.height||B(m).width*e.heightRatio)}function L(){var t=Y(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function k(){return B(m)[v("width")]}function P(t,n){var e=b(t||0);return e?B(e.slide)[v("width")]+(n?0:M()):0}function A(t,n){var e=b(t);return e?tt(B(e.slide)[v("right")]-B(m)[v("left")])+(n?0:M()):0}function _(n){return A(t.length-1)-A(0)+P(0,n)}function M(){var t=b(0);return t&&parseFloat(I(t.slide,v("marginRight")))||0}function D(){return t.is(nd)||_(!0)>k()}return{mount:function(){var t;w(),l(window,"resize load",(t=tL(0,i(d,th),null,1),function(){t.isPaused()&&t.start()})),c([tg,tv],w),c(th,S)},resize:S,listSize:k,slideSize:P,sliderSize:_,totalSize:A,getPadding:function(t){return parseFloat(I(p,v("padding"+(t?"Right":"Left"))))||0},isOverflow:D}},Clones:function(t,e,i){var o,r=tC(t),u=r.on,s=e.Elements,a=e.Slides,c=e.Direction.resolve,l=[];function d(){u(tv,v),u([tg,th],h),(o=p())&&(function(n){var e=a.get().slice(),o=e.length;if(o){for(;e.length<n;)m(e,e);m(e.slice(-n),e.slice(0,n)).forEach(function(r,u){var c,d=u<n,f=(b(c=r.slide.cloneNode(!0),i.classes.clone),c.id=t.root.id+"-clone"+tr(u+1),c);d?w(f,e[0].slide):E(s.list,f),m(l,f),a.register(f,u-n+(d?0:o),r.index)})}}(o),e.Layout.resize(!0))}function v(){g(),d()}function g(){j(l),n(l),r.destroy()}function h(){var t=p();o!==t&&(o<t||!t)&&r.emit(tv)}function p(){var n=i.clones;if(t.is(nl)){if(f(n)){var o=i[c("fixedWidth")]&&e.Layout.slideSize(0);n=o&&$(B(s.track)[c("width")]/o)||i[c("autoWidth")]&&t.length||2*i.perPage}}else n=0;return n}return{mount:d,destroy:g}},Move:function(t,n,e){var i,o=tC(t),r=o.on,u=o.emit,s=t.state.set,a=n.Layout,c=a.slideSize,l=a.getPadding,d=a.totalSize,v=a.listSize,g=a.sliderSize,h=n.Direction,p=h.resolve,m=h.orient,y=n.Elements,b=y.list,E=y.track;function w(){n.Controller.isBusy()||(n.Scroll.cancel(),S(t.index),n.Slides.update())}function S(t){x(P(t,!0))}function x(e,i){if(!t.is(nd)){var o=i?e:function(e){if(t.is(nl)){var i=k(e),o=i>n.Controller.getEnd();(i<0||o)&&(e=C(e,o))}return e}(e);I(b,"transform","translate"+p("X")+"("+o+"px)"),e!==o&&u("sh")}}function C(t,n){var e=t-_(n),i=g();return t-m(i*($(tt(e)/i)||1))*(n?1:-1)}function L(){x(A(),!0),i.cancel()}function k(t){for(var e=n.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,s=tt(P(u,!0)-t);if(s<=o)o=s,i=u;else break}return i}function P(n,i){var o,r,u=m(d(n-1)-("center"===(o=e.focus)?(v()-c(n,!0))/2:+o*c(n)||0));return i?(r=u,e.trimSpace&&t.is(nc)&&(r=te(r,0,m(g(!0)-v()))),r):u}function A(){var t=p("left");return B(b)[t]-B(E)[t]+m(l(!1))}function _(t){return P(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=n.Transition,r([ta,tp,tg,tv],w)},move:function(t,n,e,o){var r,a;t!==n&&(r=t>e,a=m(C(A(),r)),r?a>=0:a<=b[p("scrollWidth")]-B(E)[p("width")])&&(L(),x(C(A(),t>e),!0)),s(4),u(tl,n,e,t),i.start(n,function(){s(3),u(td,n,e,t),o&&o()})},jump:S,translate:x,shift:C,cancel:L,toIndex:k,toPosition:P,getPosition:A,getLimit:_,exceededLimit:function(t,n){n=f(n)?A():n;var e=!0!==t&&m(n)<m(_(!1)),i=!1!==t&&m(n)>m(_(!0));return e||i},reposition:w}},Controller:function(t,n,e){var o,r,u,s,a=tC(t),c=a.on,l=a.emit,v=n.Move,g=v.getPosition,h=v.getLimit,p=v.toPosition,m=n.Slides,y=m.isEnough,b=m.getLength,E=e.omitEnd,w=t.is(nl),S=t.is(nc),x=i(_,!1),C=i(_,!0),L=e.start||0,k=L;function P(){r=b(!0),u=e.perMove,s=e.perPage,o=z();var t=te(L,0,E?o:r-1);t!==L&&(L=t,v.reposition())}function A(){o!==z()&&l("ei")}function _(t,n){var e=u||(T()?1:s),i=M(L+e*(t?-1:1),L,!(u||T()));return -1===i&&S&&!(1>tt(g()-h(!t)))?t?0:o:n?i:D(i)}function M(n,i,a){if(y()||T()){var c=function(n){if(S&&"move"===e.trimSpace&&n!==L)for(var i=g();i===p(n,!0)&&tn(n,0,t.length-1,!e.rewind);)n<L?--n:++n;return n}(n);c!==n&&(i=n,n=c,a=!1),n<0||n>o?n=!u&&(tn(0,n,i,!0)||tn(o,i,n,!0))?I(O(n)):w?a?n<0?-(r%s||s):r:n:e.rewind?n<0?o:0:-1:a&&n!==i&&(n=I(O(i)+(n<i?-1:1)))}else n=-1;return n}function D(t){return w?(t+r)%r||0:t}function z(){for(var t=r-(T()||w&&u?1:s);E&&t-- >0;)if(p(r-1,!0)!==p(t,!0)){t++;break}return te(t,0,r-1)}function I(t){return te(T()?t:s*t,0,o)}function O(t){return T()?J(t,o):Z((t>=o?r-1:t)/s)}function N(t){t!==L&&(k=L,L=t)}function T(){return!f(e.focus)||e.isNavigation}function F(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){P(),c([tg,tv,"ei"],P),c(tp,A)},go:function(t,n,e){if(!F()){var i=function(t){var n=L;if(d(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],i=e[1],r=e[2];"+"===i||"-"===i?n=M(L+ +(""+i+(+r||1)),L):">"===i?n=r?I(+r):x(!0):"<"===i&&(n=C(!0))}else n=w?t:te(t,0,o);return n}(t),r=D(i);r>-1&&(n||r!==L)&&(N(r),v.move(i,r,k,e))}},scroll:function(t,e,i,r){n.Scroll.scroll(t,e,i,function(){var t=D(v.toIndex(g()));N(E?J(t,o):t),r&&r()})},getNext:x,getPrev:C,getAdjacent:_,getEnd:z,setIndex:N,getIndex:function(t){return t?k:L},toIndex:I,toPage:O,toDest:function(t){var n=v.toIndex(t);return S?te(n,0,o):n},hasFocus:T,isBusy:F}},Arrows:function(t,n,e){var o,r,u=tC(t),s=u.on,a=u.bind,c=u.emit,l=e.classes,d=e.i18n,f=n.Elements,v=n.Controller,g=f.arrows,h=f.track,p=g,m=f.prev,y=f.next,S={};function x(){var t;(t=e.arrows)&&!(m&&y)&&(p=g||z("div",l.arrows),m=A(!0),y=A(!1),o=!0,E(p,[m,y]),g||w(p,h)),m&&y&&(P(S,{prev:m,next:y}),O(p,t?"":"none"),b(p,r=t$+"--"+e.direction),t&&(s([ta,td,tv,ty,"ei"],_),a(y,"click",i(k,">")),a(m,"click",i(k,"<")),_(),D([m,y],tN,h.id),c("arrows:mounted",m,y))),s(tg,C)}function C(){L(),x()}function L(){u.destroy(),G(p,r),o?(j(g?[m,y]:p),m=y=null):M([m,y],tY)}function k(t){v.go(t,!0)}function A(t){return q('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function _(){if(m&&y){var n=t.index,e=v.getPrev(),i=v.getNext(),o=e>-1&&n<e?d.last:d.prev,r=i>-1&&n>i?d.first:d.next;m.disabled=e<0,y.disabled=i<0,D(m,tB,o),D(y,tB,r),c("arrows:updated",m,y,e,i)}}return{arrows:S,mount:x,destroy:L,update:_}},Autoplay:function(t,n,e){var i,o,r=tC(t),u=r.on,s=r.bind,a=r.emit,c=tL(e.interval,t.go.bind(t,">"),function(t){var n=d.bar;n&&I(n,"width",100*t+"%"),a("autoplay:playing",t)}),l=c.isPaused,d=n.Elements,f=n.Elements,v=f.root,g=f.toggle,h=e.autoplay,p="pause"===h;function m(){l()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=p=!1,w(),a(tw))}function b(t){void 0===t&&(t=!0),p=!!t,w(),l()||(c.pause(),a(tS))}function E(){p||(i||o?b(!1):m())}function w(){g&&(y(g,t7,!p),D(g,tB,e.i18n[p?"play":"pause"]))}function S(t){var i=n.Slides.getAt(t);c.set(i&&+T(i.slide,nf)||e.interval)}return{mount:function(){h&&(e.pauseOnHover&&s(v,"mouseenter mouseleave",function(t){i="mouseenter"===t.type,E()}),e.pauseOnFocus&&s(v,"focusin focusout",function(t){o="focusin"===t.type,E()}),g&&s(g,"click",function(){p?m():b(!0)}),u([tl,tm,tv],c.rewind),u(tl,S),g&&D(g,tN,d.track.id),p||m(),w())},destroy:c.cancel,play:m,pause:b,isPaused:l}},Cover:function(t,n,e){var o=tC(t).on;function r(t){n.Slides.forEach(function(n){var e=C(n.container||n.slide,"img");e&&e.src&&u(t,e,n)})}function u(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),O(n,t?"none":"")}return{mount:function(){e.cover&&(o(tx,i(u,!0)),o([ta,tg,tv],i(r,!0)))},destroy:i(r,!1)}},Scroll:function(t,n,e){var o,r,u=tC(t),s=u.on,a=u.emit,c=t.state.set,l=n.Move,d=l.getPosition,f=l.getLimit,v=l.exceededLimit,g=l.translate,h=t.is(nc),p=1;function m(t,e,u,s,f){var g=d();if(E(),u&&(!h||!v())){var m=n.Layout.sliderSize(),w=ti(t)*m*Z(tt(t)/m)||0;t=l.toPosition(n.Controller.toDest(t%m))+w}var S=1>tt(g-t);p=1,e=S?0:e||Q(tt(t-g)/1.5,800),r=s,o=tL(e,y,i(b,g,t,f),1),c(5),a(tm),o.start()}function y(){c(3),r&&r(),a(ty)}function b(t,n,i,o){var u,s=d(),a=(t+(n-t)*((u=e.easingFunc)?u(o):1-Math.pow(1-o,4))-s)*p;g(s+a),h&&!i&&v()&&(p*=.6,10>tt(a)&&m(f(v(!0)),600,!1,r,!0))}function E(){o&&o.cancel()}function w(){o&&!o.isPaused()&&(E(),y())}return{mount:function(){s(tl,E),s([tg,tv],w)},destroy:E,scroll:m,cancel:w}},Drag:function(t,n,e){var i,o,u,s,c,l,d,f,v=tC(t),g=v.on,h=v.emit,p=v.bind,m=v.unbind,y=t.state,b=n.Move,E=n.Scroll,w=n.Controller,x=n.Elements.track,C=n.Media.reduce,L=n.Direction,k=L.resolve,P=L.orient,A=b.getPosition,_=b.exceededLimit,M=!1;function D(){var t=e.drag;d=!t,s="free"===t}function z(t){if(l=!1,!d){var n,i,o=q(t);n=t.target,i=e.noDrag,S(n,"."+t5+", ."+t0)||i&&S(n,i)||!o&&t.button||(w.isBusy()?R(t,!0):(f=o?x:window,c=y.is([4,5]),u=null,p(f,ns,I,nv),p(f,na,O,nv),b.cancel(),E.cancel(),T(t)))}}function I(n){if(y.is(6)||(y.set(6),h("drag")),n.cancelable){if(c){b.translate(i+F(n)/(M&&t.is(nc)?5:1));var o,r,u,s,d=B(n)>200,f=M!==(M=_());(d||f)&&T(n),l=!0,h("dragging"),R(n)}else tt(F(n))>tt(F(n,!0))&&(u=(r=a(o=e.dragMinThreshold))&&o.mouse||0,s=(r?o.touch:+o)||10,c=tt(F(n))>(q(n)?s:u),R(n))}}function O(i){var o,r,u,a;y.is(6)&&(y.set(3),h("dragged")),c&&(o=r=function(n){if(t.is(nl)||!M){var e=B(n);if(e&&e<200)return F(n)/e}return 0}(i),u=A()+ti(o)*J(tt(o)*(e.flickPower||600),s?1/0:n.Layout.listSize()*(e.flickMaxPages||1)),a=e.rewind&&e.rewindByDrag,C(!1),s?w.scroll(u,0,e.snap):t.is(nd)?w.go(0>P(ti(r))?a?"<":"-":a?">":"+"):t.is(nc)&&M&&a?w.go(_(!0)?">":"<"):w.go(w.toDest(u),!0),C(!0),R(i)),m(f,ns,I),m(f,na,O),c=!1}function N(t){!d&&l&&R(t,!0)}function T(t){u=o,o=t,i=A()}function F(t,n){return j(t,n)-j(o===t&&u||o,n)}function B(t){return H(t)-H(o===t&&u||o)}function j(t,n){return(q(t)?t.changedTouches[0]:t)["page"+k(n?"Y":"X")]}function q(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}return{mount:function(){p(x,ns,r,nv),p(x,na,r,nv),p(x,nu,z,nv),p(x,"click",N,{capture:!0}),p(x,"dragstart",R),g([ta,tg],D)},disable:function(t){d=t},isDragging:function(){return c}}},Keyboard:function(t,n,e){var i,r,u=tC(t),s=u.on,a=u.bind,c=u.unbind,l=t.root,d=n.Direction.resolve;function f(){var t=e.keyboard;t&&a(i="global"===t?window:l,np,h)}function v(){c(i,np)}function g(){var t=r;r=!0,o(function(){r=t})}function h(n){if(!r){var e=nh(n);e===d(tP)?t.go("<"):e===d(tA)&&t.go(">")}}return{mount:function(){f(),s(tg,v),s(tg,f),s(tl,g)},destroy:v,disable:function(t){r=t}}},LazyLoad:function(t,e,o){var r=tC(t),u=r.on,s=r.off,a=r.bind,c=r.emit,l="sequential"===o.lazyLoad,d=[td,ty],f=[];function v(){n(f),e.Slides.forEach(function(t){X(t.slide,nb).forEach(function(n){var e=T(n,nm),i=T(n,ny);if(e!==n.src||i!==n.srcset){var r=o.classes.spinner,u=n.parentElement,s=C(u,"."+r)||z("span",r,u);f.push([n,t,s]),n.src||O(n,"none")}})}),l?m():(s(d),u(d,g),g())}function g(){(f=f.filter(function(n){var e=o.perPage*((o.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,e)||h(n)})).length||s(d)}function h(t){var n=t[0];b(t[1].slide,ne),a(n,"load error",i(p,t)),D(n,"src",T(n,nm)),D(n,"srcset",T(n,ny)),M(n,nm),M(n,ny)}function p(t,n){var e=t[0],i=t[1];G(i.slide,ne),"error"!==n.type&&(j(t[2]),O(e,""),c(tx,e,i),c(th)),l&&m()}function m(){f.length&&h(f.shift())}return{mount:function(){o.lazyLoad&&(v(),u(tv,v))},destroy:i(n,f),check:g}},Pagination:function(t,o,r){var u,s,a=tC(t),c=a.on,l=a.emit,d=a.bind,f=o.Slides,v=o.Elements,g=o.Controller,h=g.hasFocus,p=g.getIndex,m=g.go,y=o.Direction.resolve,E=v.pagination,w=[];function S(){u&&(j(E?e(u.children):u),G(u,s),n(w),u=null),a.destroy()}function x(t){m(">"+t,!0)}function C(t,n){var e=w.length,i=nh(n),o=L(),r=-1;i===y(tA,!1,o)?r=++t%e:i===y(tP,!1,o)?r=(--t+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(N(u.button),m(">"+r),R(n,!0))}function L(){return r.paginationDirection||r.direction}function k(t){return w[g.toPage(t)]}function P(){var t=k(p(!0)),n=k(p());if(t){var e=t.button;G(e,t7),M(e,tF),D(e,tI,-1)}if(n){var i=n.button;b(i,t7),D(i,tF,!0),D(i,tI,"")}l("pagination:updated",{list:u,items:w},t,n)}return{items:w,mount:function n(){S(),c([tg,tv,"ei"],n);var e=r.pagination;E&&O(E,e?"":"none"),e&&(c([tl,tm,ty],P),function(){var n=t.length,e=r.classes,o=r.i18n,a=r.perPage,c=h()?g.getEnd()+1:$(n/a);b(u=E||z("ul",e.pagination,v.track.parentElement),s=t3+"--"+L()),D(u,tz,"tablist"),D(u,tB,o.select),D(u,tR,"ttb"===L()?"vertical":"");for(var l=0;l<c;l++){var p=z("li",null,u),m=z("button",{class:e.page,type:"button"},p),y=f.getIn(l).map(function(t){return t.slide.id}),S=!h()&&a>1?o.pageX:o.slideX;d(m,"click",i(x,l)),r.paginationKeyboard&&d(m,"keydown",i(C,l)),D(p,tz,"presentation"),D(m,tz,"tab"),D(m,tN,y.join(" ")),D(m,tB,to(S,l+1)),D(m,tI,-1),w.push({li:p,button:m,page:l})}}(),P(),l("pagination:mounted",{list:u,items:w},k(t.index)))},destroy:S,getAt:k,update:P}},Sync:function(t,e,o){var r=o.isNavigation,u=o.slideFocus,s=[];function a(){var n,e;t.splides.forEach(function(n){n.isParent||(l(t,n.splide),l(n.splide,t))}),r&&((e=(n=tC(t)).on)(tf,v),e("sk",g),e([ta,tg],d),s.push(n),n.emit(tE,t.splides))}function c(){s.forEach(function(t){t.destroy()}),n(s)}function l(t,n){var e=tC(t);e.on(tl,function(t,e,i){n.go(n.is(nl)?i:t)}),s.push(e)}function d(){D(e.Elements.list,tR,"ttb"===o.direction?"vertical":"")}function v(n){t.go(n.index)}function g(t,n){p(nE,nh(n))&&(v(t),R(n))}return{setup:i(e.Media.set,{slideFocus:f(u)?r:u},!0),mount:a,destroy:c,remount:function(){c(),a()}}},Wheel:function(t,n,e){var i=tC(t).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,u=r<0,s=H(i),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;tt(r)>a&&s-o>c&&(t.go(u?"<":">"),o=s),(!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(u))&&R(i)}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",r,nv)}}},Live:function(t,n,e){var o=tC(t).on,r=n.Elements.track,u=e.live&&!e.isNavigation,s=z("span",t8),a=tL(90,i(c,!1));function c(t){D(r,tG,t),t?(E(r,s),a.start()):(j(s),a.cancel())}function l(t){u&&D(r,tX,t?"off":"polite")}return{mount:function(){u&&(l(!n.Autoplay.isPaused()),D(r,tH,!0),s.textContent="…",o(tw,i(l,!0)),o(tS,i(l,!1)),o([td,ty],i(c,!0)))},disable:l,destroy:function(){M(r,[tX,tH,tG]),j(s)}}}}),nS={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:tJ,clone:tQ,arrows:t$,arrow:t0,prev:t1,next:t4,pagination:t3,page:t5,spinner:tU+"spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function nx(t,n,e){var i=n.Slides;function u(){i.forEach(function(t){t.style("transform","translateX(-"+100*t.index+"%)")})}return{mount:function(){tC(t).on([ta,tv],u)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),o(n)},cancel:r}}function nC(t,n,e){var o,r=n.Move,u=n.Controller,s=n.Scroll,a=n.Elements.list,c=i(I,a,"transition");function l(){c(""),s.cancel()}return{mount:function(){tC(t).bind(a,"transitionend",function(t){t.target===a&&o&&(l(),o())})},start:function(n,i){var a=r.toPosition(n,!0),l=r.getPosition(),d=function(n){var i=e.rewindSpeed;if(t.is(nc)&&i){var o=u.getIndex(!0),r=u.getEnd();if(0===o&&n>=r||o>=r&&0===n)return i}return e.speed}(n);tt(a-l)>=1&&d>=1?e.useScroll?s.scroll(a,d,!1,i):(c("transform "+d+"ms "+e.easing),r.translate(a,!0),o=i):(r.jump(n),i())},cancel:l}}var nL=function(){function t(n,e){this.event=tC(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return p(g(t),i)}}),this.splides=[],this._o={},this._E={};var i,o=d(n)?W(document,n):n;K(o,o+" is invalid."),this.root=o,e=A({label:T(o,tB)||"",labelledby:T(o,tj)||""},nS,t.defaults,e||{});try{A(e,JSON.parse(T(o,V)))}catch(t){K(!1,"Invalid JSON")}this._o=Object.create(A({},e))}var i,o=t.prototype;return o.mount=function(t,n){var e=this,i=this.state,o=this.Components;return K(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=n||this._T||(this.is(nd)?nx:nC),this._E=t||this._E,k(P({},nw,this._E,{Transition:this._T}),function(t,n){var i=t(e,o,e._o);o[n]=i,i.setup&&i.setup()}),k(o,function(t){t.mount&&t.mount()}),this.emit(ta),b(this.root,"is-initialized"),i.set(3),this.emit(tc),this},o.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},o.go=function(t){return this._C.Controller.go(t),this},o.on=function(t,n){return this.event.on(t,n),this},o.off=function(t){return this.event.off(t),this},o.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(e(arguments,1))),this},o.add=function(t,n){return this._C.Slides.add(t,n),this},o.remove=function(t){return this._C.Slides.remove(t),this},o.is=function(t){return this._o.type===t},o.refresh=function(){return this.emit(tv),this},o.destroy=function(t){void 0===t&&(t=!0);var e=this.event,i=this.state;return i.is(1)?tC(this).on(tc,this.destroy.bind(this,t)):(k(this._C,function(n){n.destroy&&n.destroy(t)},!0),e.emit(tb),e.destroy(),t&&n(this.splides),i.set(7)),this},i=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}],function(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),t}();nL.defaults={},nL.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7},document.addEventListener("DOMContentLoaded",function(){for(var t,n=new nL("#main-carousel",{pagination:!1,height:"300px"}),e=document.getElementsByClassName("thumbnail"),i=0;i<e.length;i++)!function(t,e){t.addEventListener("click",function(){n.go(e)})}(e[i],i);n.on("mounted move",function(){var i=e[n.index];i&&(t&&t.classList.remove("is-active"),i.classList.add("is-active"),t=i)}),n.mount();let o=new Date().getFullYear(),r=document.getElementById("current-year");r&&(r.textContent=o.toString());let u=new IntersectionObserver(t=>{t.forEach(t=>{let n=t.target;t.isIntersecting?n.classList.add("active"):n.classList.remove("active")})},{root:null,rootMargin:"0px",threshold:.1});document.querySelectorAll(".fade-in-up").forEach(t=>{u.observe(t)});let s=document.getElementById("modal"),a=document.getElementById("modal-body"),c=document.querySelector(".close-button");s&&a&&c&&(document.querySelectorAll(".modal-link").forEach(t=>{t.addEventListener("click",function(t){t.preventDefault();let n=this.getAttribute("data-modal");n&&fetch(n).then(t=>t.text()).then(t=>{a.innerHTML=t,s.style.display="block"}).catch(t=>console.error("Error loading modal content:",t))})}),c.addEventListener("click",function(){s.style.display="none"}),window.addEventListener("click",function(t){t.target===s&&(s.style.display="none")}));let l=document.querySelector("form");if(!l)return;let d=document.getElementById("submit-button");l.addEventListener("submit",function(t){d.disabled=!0,d.value="Wird gesendet..."}),l.querySelectorAll("input, textarea").forEach(t=>{t.addEventListener("invalid",function(){let n=t.nextElementSibling;n&&n.classList.contains("error-message")&&(t.validity.valueMissing?n.textContent="Dieses Feld ist erforderlich.":t.validity.typeMismatch?n.textContent="Bitte geben Sie eine gültige E-Mail-Adresse ein.":t.validity.patternMismatch?n.textContent="Bitte halten Sie sich an das geforderte Format.":n.textContent="Ungültige Eingabe.")}),t.addEventListener("input",function(){t.setCustomValidity("");let n=t.nextElementSibling;n.classList.contains("error-message")&&n&&(n.textContent="")})}),l.querySelectorAll(".radio-group").forEach(t=>{let n=t.querySelectorAll("input[type='radio']"),e=t.querySelector(".radio-error-message");n.forEach(t=>{t.addEventListener("invalid",function(){Array.from(n).some(t=>t.checked)||(e.textContent="Bitte wählen Sie eine Option.")}),t.addEventListener("change",function(){e.textContent=""})})});let f=l.querySelector("#gdpr"),v=l.querySelector(".gdpr-error-message");f&&v&&(f.addEventListener("invalid",()=>{f.checked||(v.textContent="Bitte akzeptieren Sie die Datenschutzerklärung")}),f.addEventListener("change",()=>{f.setCustomValidity(""),v.textContent=""}))})})();
//# sourceMappingURL=script.js.map
