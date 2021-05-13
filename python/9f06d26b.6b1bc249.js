(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{276:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(393)),i=a(396),o=a(397),s={id:"class-tracing",title:"Tracing"},l={unversionedId:"api/class-tracing",id:"api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs.",source:"@site/docs/api/class-tracing.mdx",slug:"/api/class-tracing",permalink:"/python/docs/next/api/class-tracing",version:"current",sidebar:"api",previous:{title:"Touchscreen",permalink:"/python/docs/next/api/class-touchscreen"},next:{title:"Video",permalink:"/python/docs/next/api/class-video"}},p=[{value:"tracing.export(path)",id:"tracingexportpath",children:[]},{value:"tracing.start(**kwargs)",id:"tracingstartkwargs",children:[]},{value:"tracing.stop()",id:"tracingstop",children:[]}],b={toc:p};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs."),Object(c.b)("p",null,"Start with specifying the folder traces will be stored in:"),Object(c.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'browser = chromium.launch(traceDir=\'traces\')\ncontext = browser.new_context()\ncontext.tracing.start(name="trace", screenshots=True, snapshots=True)\npage.goto("https://playwright.dev")\ncontext.tracing.stop()\ncontext.tracing.export("trace.zip")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'browser = await chromium.launch(traceDir=\'traces\')\ncontext = await browser.new_context()\nawait context.tracing.start(name="trace", screenshots=True, snapshots=True)\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop()\nawait context.tracing.export("trace.zip")\n')))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-tracing#tracingexportpath"}),"tracing.export(path)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-tracing#tracingstartkwargs"}),"tracing.start(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-tracing#tracingstop"}),"tracing.stop()"))),Object(c.b)("h2",{id:"tracingexportpath"},"tracing.export(path)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"path")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","> File to save the trace into."),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">")),Object(c.b)("p",null,"Export trace into the file with the given name. Should be called after the tracing has stopped."),Object(c.b)("h2",{id:"tracingstartkwargs"},"tracing.start(**kwargs)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"name")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> If specified, the trace is going to be saved into the file with the given name inside the ",Object(c.b)("inlineCode",{parentName:"li"},"trace_dir")," folder specified in ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-browsertype#browser_typelaunchkwargs"}),"browser_type.launch(**kwargs)"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"screenshots")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),"> Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"snapshots")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),"> Whether to capture DOM snapshot on every action."),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">")),Object(c.b)("p",null,"Start tracing."),Object(c.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage.goto("https://playwright.dev")\ncontext.tracing.stop()\ncontext.tracing.export("trace.zip")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop()\nawait context.tracing.export("trace.zip")\n')))),Object(c.b)("h2",{id:"tracingstop"},"tracing.stop()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">")),Object(c.b)("p",null,"Stop tracing."))}u.isMDXComponent=!0},392:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,g=b["".concat(i,".").concat(h)]||b[h]||u[h]||c;return a?r.a.createElement(g,o(o({ref:t},l),{},{components:a})):r.a.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";var n=a(0),r=a(395);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},396:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(394),i=a(392),o=a(53),s=a.n(o),l=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,u=e.groupId,h=e.className,g=Object(c.a)(),d=g.tabGroupChoices,m=g.setTabGroupChoices,y=Object(n.useState)(o),f=y[0],O=y[1],j=n.Children.toArray(e.children);if(null!=u){var v=d[u];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&O(v)}var w=function(e){O(e),null!=u&&m(u,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},h)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},397:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);