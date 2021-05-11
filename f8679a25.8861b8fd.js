(window.webpackJsonp=window.webpackJsonp||[]).push([[782],{852:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var a=t(3),n=t(7),o=(t(0),t(889)),c=(t(893),t(894),{id:"class-chromiumbrowser",title:"ChromiumBrowser"}),s={unversionedId:"api/class-chromiumbrowser",id:"version-1.8.0/api/class-chromiumbrowser",isDocsHomePage:!1,title:"ChromiumBrowser",description:"* extends: [Browser]",source:"@site/versioned_docs/version-1.8.0/api/class-chromiumbrowser.mdx",slug:"/api/class-chromiumbrowser",permalink:"/docs/1.8.0/api/class-chromiumbrowser",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"CDPSession",permalink:"/docs/1.8.0/api/class-cdpsession"},next:{title:"ChromiumBrowserContext",permalink:"/docs/1.8.0/api/class-chromiumbrowsercontext"}},i=[{value:"chromiumBrowser.newBrowserCDPSession()",id:"chromiumbrowsernewbrowsercdpsession",children:[]},{value:"chromiumBrowser.startTracing(page, options)",id:"chromiumbrowserstarttracingpage-options",children:[]},{value:"chromiumBrowser.stopTracing()",id:"chromiumbrowserstoptracing",children:[]}],b={toc:i};function l(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"extends: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser",title:"Browser"}),"Browser"))),Object(o.b)("p",null,"Chromium-specific features including Tracing, service worker support, etc. You can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-chromiumbrowser#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()")," to create a trace file which can be opened in Chrome DevTools or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://chromedevtools.github.io/timeline-viewer/"}),"timeline viewer"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await browser.startTracing(page, {path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait browser.stopTracing();\n")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-chromiumbrowser",title:"ChromiumBrowser"}),"ChromiumBrowser")," can also be used for testing Chrome Extensions."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Extensions in Chrome / Chromium currently only work in non-headless mode."))),Object(o.b)("p",null,"The following is code for getting a handle to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.chrome.com/extensions/background_pages"}),"background page")," of an extension whose source is located in ",Object(o.b)("inlineCode",{parentName:"p"},"./my-extension"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  const pathToExtension = require('path').join(__dirname, 'my-extension');\n  const userDataDir = '/tmp/test-user-data-dir';\n  const browserContext = await chromium.launchPersistentContext(userDataDir,{\n    headless: false,\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`\n    ]\n  });\n  const backgroundPage = browserContext.backgroundPages()[0];\n  // Test the background page as you would any other page.\n  await browserContext.close();\n})();\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-chromiumbrowser#chromiumbrowsernewbrowsercdpsession"}),"chromiumBrowser.newBrowserCDPSession()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-chromiumbrowser#chromiumbrowserstarttracingpage-options"}),"chromiumBrowser.startTracing([page, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-chromiumbrowser#chromiumbrowserstoptracing"}),"chromiumBrowser.stopTracing()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browserondisconnected"}),"browser.on('disconnected')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browserclose"}),"browser.close()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browserisconnected"}),"browser.isConnected()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-browser#browserversion"}),"browser.version()"))),Object(o.b)("h2",{id:"chromiumbrowsernewbrowsercdpsession"},"chromiumBrowser.newBrowserCDPSession()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-cdpsession",title:"CDPSession"}),"CDPSession"),">>")),Object(o.b)("p",null,"Returns the newly created browser session."),Object(o.b)("h2",{id:"chromiumbrowserstarttracingpage-options"},"chromiumBrowser.startTracing(","[page, options]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"page")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page",title:"Page"}),"Page"),"> Optional, if specified, tracing includes screenshots of the given page."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"categories")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">> specify custom categories to use instead of default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A path to write the trace file to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"screenshots")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> captures screenshots in the trace.")))),Object(o.b)("p",null,"Only one trace can be active at a time per browser."),Object(o.b)("h2",{id:"chromiumbrowserstoptracing"},"chromiumBrowser.stopTracing()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">>")),Object(o.b)("p",null,"Returns the buffer with trace data."))}l.isMDXComponent=!0},889:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return O}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),l=function(e){var r=n.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.a.createElement(b.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},u=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,O=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return t?n.a.createElement(O,s(s({ref:r},b),{},{components:t})):n.a.createElement(O,s({ref:r},b))}));function O(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var b=2;b<o;b++)c[b]=t[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},890:function(e,r,t){"use strict";function a(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=a(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}r.a=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=a(e))&&(n&&(n+=" "),n+=r);return n}},891:function(e,r,t){"use strict";var a=t(0),n=t(892);r.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,r,t){"use strict";var a=t(0),n=Object(a.createContext)(void 0);r.a=n},893:function(e,r,t){"use strict";t(0),t(891),t(890),t(55)},894:function(e,r,t){"use strict";t(3),t(0)}}]);