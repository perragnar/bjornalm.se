!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,z,g){"use strict";if(e.addEventListener){var c=g.cfg,y=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,r=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,s=/\(|\)|'/,n={contain:1,cover:1},v=function(e,t){if(t){var a=t.match(r);a&&a[1]?e.setAttribute("type",a[1]):e.setAttribute("media",c.customMedia[t]||t)}},m=function(e){if(e.target._lazybgset){var t=e.target,a=t._lazybgset,r=t.currentSrc||t.src;if(r){var i=g.fire(a,"bgsetproxy",{src:r,useSrc:s.test(r)?JSON.stringify(r):r});i.defaultPrevented||(a.style.backgroundImage="url("+i.detail.useSrc+")")}t._lazybgsetLoading&&(g.fire(a,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var t,a,r,i,s,n,l,d,u,o;!e.defaultPrevented&&(t=e.target.getAttribute("data-bgset"))&&(r=e.target,(a=z.createElement("img")).alt="",a._lazybgsetLoading=!0,e.detail.firesLoad=!0,i=t,s=r,n=a,l=z.createElement("picture"),d=s.getAttribute(c.sizesAttr),u=s.getAttribute("data-ratio"),o=s.getAttribute("data-optimumx"),s._lazybgset&&s._lazybgset.parentNode==s&&s.removeChild(s._lazybgset),Object.defineProperty(n,"_lazybgset",{value:s,writable:!0}),Object.defineProperty(s,"_lazybgset",{value:l,writable:!0}),i=i.replace(y," ").split(b),l.style.display="none",n.className=c.lazyClass,1!=i.length||d||(d="auto"),i.forEach(function(e){var t,a=z.createElement("source");d&&"auto"!=d&&a.setAttribute("sizes",d),(t=e.match(f))?(a.setAttribute(c.srcsetAttr,t[1]),v(a,t[2]),v(a,t[3])):a.setAttribute(c.srcsetAttr,e),l.appendChild(a)}),d&&(n.setAttribute(c.sizesAttr,d),s.removeAttribute(c.sizesAttr),s.removeAttribute("sizes")),o&&n.setAttribute("data-optimumx",o),u&&n.setAttribute("data-ratio",u),l.appendChild(n),s.appendChild(l),setTimeout(function(){g.loader.unveil(a),g.rAF(function(){g.fire(a,"_lazyloaded",{},!0,!0),a.complete&&m({target:a})})}))}),z.addEventListener("load",m,!0),e.addEventListener("lazybeforesizes",function(e){var t,a;if(e.detail.instance==g&&(e.target._lazybgset&&e.detail.dataAttr)){var r=e.target._lazybgset,i=(t=r,a=(getComputedStyle(t)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!n[a]&&n[t.style.backgroundSize]&&(a=t.style.backgroundSize),a);n[i]&&(e.target._lazysizesParentFit=i,g.rAF(function(){e.target.setAttribute("data-parent-fit",i),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),z.documentElement.addEventListener("lazybeforesizes",function(e){var t,a;!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==g&&(e.detail.width=(t=e.target._lazybgset,a=g.gW(t,t.parentNode),(!t._lazysizesWidth||a>t._lazysizesWidth)&&(t._lazysizesWidth=a),t._lazysizesWidth))})}});