!function(e,t){var n=function(a,m,s){"use strict";var y,h;if(function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in h=a.lazySizesConfig||a.lazysizesConfig||{},t)e in h||(h[e]=t[e])}(),!m||!m.getElementsByClassName)return{init:function(){},cfg:h,noSupport:!0};var z=m.documentElement,i=a.HTMLPictureElement,o="addEventListener",v="getAttribute",e=a[o].bind(a),u=a.setTimeout,n=a.requestAnimationFrame||u,r=a.requestIdleCallback,f=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],c={},g=Array.prototype.forEach,d=function(e,t){return c[t]||(c[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),c[t].test(e[v]("class")||"")&&c[t]},p=function(e,t){d(e,t)||e.setAttribute("class",(e[v]("class")||"").trim()+" "+t)},C=function(e,t){var n;(n=d(e,t))&&e.setAttribute("class",(e[v]("class")||"").replace(n," "))},b=function(t,n,e){var a=e?o:"removeEventListener";e&&b(t,n),l.forEach(function(e){t[a](e,n)})},A=function(e,t,n,a,i){var s=m.createEvent("Event");return n||(n={}),n.instance=y,s.initEvent(t,!a,!i),s.detail=n,e.dispatchEvent(s),s},E=function(e,t){var n;!i&&(n=a.picturefill||h.pf)?(t&&t.src&&!e[v]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},_=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<h.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},N=(Ae=[],Ee=[],_e=Ae,we=function(){var e=_e;for(_e=Ae.length?Ee:Ae,be=!(Ce=!0);e.length;)e.shift()();Ce=!1},Ne=function(e,t){Ce&&!t?e.apply(this,arguments):(_e.push(e),be||(be=!0,(m.hidden?u:n)(we)))},Ne._lsFlush=we,Ne),t=function(n,e){return e?function(){N(n)}:function(){var e=this,t=arguments;N(function(){n.apply(e,t)})}},M=function(e){var t,n,a=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?u(i,99-e):(r||a)(a)};return function(){n=s.now(),t||(t=u(i,99))}},x=(ee=/^img$/i,te=/^iframe$/i,ne="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),ae=0,ie=0,se=-1,oe=function(e){ie--,(!e||ie<0||!e.target)&&(ie=0)},re=function(e){return null==G&&(G="hidden"==_(m.body,"visibility")),G||!("hidden"==_(e.parentNode,"visibility")&&"hidden"==_(e,"visibility"))},le=function(e,t){var n,a=e,i=re(e);for(q-=t,j+=t,I-=t,U+=t;i&&(a=a.offsetParent)&&a!=m.body&&a!=z;)(i=0<(_(a,"opacity")||1))&&"visible"!=_(a,"overflow")&&(n=a.getBoundingClientRect(),i=U>n.left&&I<n.right&&j>n.top-1&&q<n.bottom+1);return i},ce=function(){var e,t,n,a,i,s,o,r,l,c,d,u,f=y.elements;if((H=h.loadMode)&&ie<8&&(e=f.length)){for(t=0,se++;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(!ne||y.prematureUnveil&&y.prematureUnveil(f[t]))ze(f[t]);else if((r=f[t][v]("data-expand"))&&(s=1*r)||(s=ae),c||(c=!h.expand||h.expand<1?500<z.clientHeight&&500<z.clientWidth?500:370:h.expand,y._defEx=c,d=c*h.expFactor,u=h.hFac,G=null,ae<d&&ie<1&&2<se&&2<H&&!m.hidden?(ae=d,se=0):ae=1<H&&1<se&&ie<6?c:0),l!==s&&(P=innerWidth+s*u,$=innerHeight+s,o=-1*s,l=s),n=f[t].getBoundingClientRect(),(j=n.bottom)>=o&&(q=n.top)<=$&&(U=n.right)>=o*u&&(I=n.left)<=P&&(j||U||I||q)&&(h.loadHidden||re(f[t]))&&(D&&ie<3&&!r&&(H<3||se<4)||le(f[t],s))){if(ze(f[t]),i=!0,9<ie)break}else!i&&D&&!a&&ie<4&&se<4&&2<H&&(R[0]||h.preloadAfterLoad)&&(R[0]||!r&&(j||U||I||q||"auto"!=f[t][v](h.sizesAttr)))&&(a=R[0]||f[t]);a&&!i&&ze(a)}},J=ce,Q=0,V=h.throttleDelay,X=h.ricTimeout,Y=function(){K=!1,Q=s.now(),J()},Z=r&&49<X?function(){r(Y,{timeout:X}),X!==h.ricTimeout&&(X=h.ricTimeout)}:t(function(){u(Y)},!0),de=function(e){var t;(e=!0===e)&&(X=33),K||(K=!0,(t=V-(s.now()-Q))<0&&(t=0),e||t<9?Z():u(Z,t))},ue=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(oe(e),p(t,h.loadedClass),C(t,h.loadingClass),b(t,me),A(t,"lazyloaded"))},fe=t(ue),me=function(e){fe({target:e.target})},ye=function(e){var t,n=e[v](h.srcsetAttr);(t=h.customMedia[e[v]("data-media")||e[v]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},he=t(function(t,e,n,a,i){var s,o,r,l,c,d;(c=A(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?p(t,h.autosizesClass):t.setAttribute("sizes",a)),o=t[v](h.srcsetAttr),s=t[v](h.srcAttr),i&&(r=t.parentNode,l=r&&f.test(r.nodeName||"")),d=e.firesLoad||"src"in t&&(o||s||l),c={target:t},p(t,h.loadingClass),d&&(clearTimeout(k),k=u(oe,2500),b(t,me,!0)),l&&g.call(r.getElementsByTagName("source"),ye),o?t.setAttribute("srcset",o):s&&!l&&(te.test(t.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(t,s):t.src=s),i&&(o||l)&&E(t,{src:s})),t._lazyRace&&delete t._lazyRace,C(t,h.lazyClass),N(function(){var e=t.complete&&1<t.naturalWidth;d&&!e||(e&&p(t,"ls-is-cached"),ue(c),t._lazyCache=!0,u(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&ie--},!0)}),ze=function(e){if(!e._lazyRace){var t,n=ee.test(e.nodeName),a=n&&(e[v](h.sizesAttr)||e[v]("sizes")),i="auto"==a;(!i&&D||!n||!e[v]("src")&&!e.srcset||e.complete||d(e,h.errorClass)||!d(e,h.lazyClass))&&(t=A(e,"lazyunveilread").detail,i&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ie++,he(e,t,i,a,n))}},ve=M(function(){h.loadMode=3,de()}),ge=function(){3==h.loadMode&&(h.loadMode=2),ve()},pe=function(){D||(s.now()-O<999?u(pe,999):(D=!0,h.loadMode=3,de(),e("scroll",ge,!0)))},{_:function(){O=s.now(),y.elements=m.getElementsByClassName(h.lazyClass),R=m.getElementsByClassName(h.lazyClass+" "+h.preloadClass),e("scroll",de,!0),e("resize",de,!0),e("pageshow",function(e){if(e.persisted){var t=m.querySelectorAll("."+h.loadingClass);t.length&&t.forEach&&n(function(){t.forEach(function(e){e.complete&&ze(e)})})}}),a.MutationObserver?new MutationObserver(de).observe(z,{childList:!0,subtree:!0,attributes:!0}):(z[o]("DOMNodeInserted",de,!0),z[o]("DOMAttrModified",de,!0),setInterval(de,999)),e("hashchange",de,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){m[o](e,de,!0)}),/d$|^c/.test(m.readyState)?pe():(e("load",pe),m[o]("DOMContentLoaded",de),u(pe,2e4)),y.elements.length?(ce(),N._lsFlush()):de()},checkElems:de,unveil:ze,_aLSL:ge}),W=(L=t(function(e,t,n,a){var i,s,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),f.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,o=i.length;s<o;s++)i[s].setAttribute("sizes",a);n.detail.dataAttr||E(e,n.detail)}),T=function(e,t,n){var a,i=e.parentNode;i&&(n=w(e,i,n),(a=A(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&L(e,i,a,n))},F=M(function(){var e,t=B.length;if(t)for(e=0;e<t;e++)T(B[e])}),{_:function(){B=m.getElementsByClassName(h.autosizesClass),e("resize",F)},checkElems:F,updateElem:T}),S=function(){!S.i&&m.getElementsByClassName&&(S.i=!0,W._(),x._())};var B,L,T,F;var R,D,k,H,O,P,$,q,I,U,j,G,J,K,Q,V,X,Y,Z,ee,te,ne,ae,ie,se,oe,re,le,ce,de,ue,fe,me,ye,he,ze,ve,ge,pe;var Ce,be,Ae,Ee,_e,we,Ne;return u(function(){h.init&&S()}),y={cfg:h,autoSizer:W,loader:x,init:S,uP:E,aC:p,rC:C,hC:d,fire:A,gW:w,rAF:N}}(e,e.document,Date);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}("undefined"!=typeof window?window:{});