(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7131],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(67294),i=a(80944),r=a(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,p=39;var s=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,d=e.groupId,h=e.className,m=(0,i.Z)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,k=(0,n.useState)(s),w=k[0],b=k[1],g=n.Children.toArray(e.children),N=[];if(null!=d){var x=f[d];null!=x&&x!==w&&u.some((function(e){return e.value===x}))&&b(x)}var y=function(e){var t=e.currentTarget,a=N.indexOf(t),n=u[a].value;b(n),null!=d&&(v(d,n),setTimeout((function(){var e,a,n,i,r,l,c,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,l=window,c=l.innerHeight,p=l.innerWidth,a>=0&&r<=p&&i<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:y,onClick:y},a)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),i=a(79443);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},406:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return s}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),l=(a(41395),a(58215),{id:"class-electronapplication",title:"ElectronApplication"}),o={unversionedId:"api/class-electronapplication",id:"api/class-electronapplication",isDocsHomePage:!1,title:"ElectronApplication",description:"Electron application representation. You can use electron.launch([options]) to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:",source:"@site/docs/api/class-electronapplication.mdx",sourceDirName:"api",slug:"/api/class-electronapplication",permalink:"/docs/next/api/class-electronapplication",version:"current",frontMatter:{id:"class-electronapplication",title:"ElectronApplication"},sidebar:"api",previous:{title:"Electron",permalink:"/docs/next/api/class-electron"}},c=[{value:"electronApplication.on(&#39;close&#39;)",id:"electron-application-event-close",children:[]},{value:"electronApplication.on(&#39;window&#39;)",id:"electron-application-event-window",children:[]},{value:"electronApplication.browserWindow(page)",id:"electron-application-browser-window",children:[]},{value:"electronApplication.close()",id:"electron-application-close",children:[]},{value:"electronApplication.context()",id:"electron-application-context",children:[]},{value:"electronApplication.evaluate(pageFunction, arg)",id:"electron-application-evaluate",children:[]},{value:"electronApplication.evaluateHandle(pageFunction, arg)",id:"electron-application-evaluate-handle",children:[]},{value:"electronApplication.firstWindow()",id:"electron-application-first-window",children:[]},{value:"electronApplication.waitForEvent(event, optionsOrPredicate)",id:"electron-application-wait-for-event",children:[]},{value:"electronApplication.windows()",id:"electron-application-windows",children:[]}],p={toc:c};function s(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Electron application representation. You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electron#electron-launch"},"electron.launch([options])")," to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { _electron: electron } = require('playwright');\n\n(async () => {\n  // Launch Electron app.\n  const electronApp = await electron.launch({ args: ['main.js'] });\n\n  // Evaluation expression in the Electron context.\n  const appPath = await electronApp.evaluate(async ({ app }) => {\n    // This runs in the main Electron process, parameter here is always\n    // the result of the require('electron') in the main app script.\n    return app.getAppPath();\n  });\n  console.log(appPath);\n\n  // Get the first window that the app opens, wait if necessary.\n  const window = await electronApp.firstWindow();\n  // Print the title.\n  console.log(await window.title());\n  // Capture a screenshot.\n  await window.screenshot({ path: 'intro.png' });\n  // Direct Electron console to Node terminal.\n  window.on('console', console.log);\n  // Click button.\n  await window.click('text=Click me');\n  // Exit app.\n  await electronApp.close();\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-event-close"},"electronApplication.on('close')")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-event-window"},"electronApplication.on('window')")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-browser-window"},"electronApplication.browserWindow(page)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-close"},"electronApplication.close()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-context"},"electronApplication.context()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-first-window"},"electronApplication.firstWindow()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-wait-for-event"},"electronApplication.waitForEvent(event[, optionsOrPredicate])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication#electron-application-windows"},"electronApplication.windows()"))),(0,r.kt)("h2",{id:"electron-application-event-close"},"electronApplication.on('close')"),(0,r.kt)("p",null,"This event is issued when the application closes."),(0,r.kt)("h2",{id:"electron-application-event-window"},"electronApplication.on('window')"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">")),(0,r.kt)("p",null,"This event is issued for every window that is created ",(0,r.kt)("strong",{parentName:"p"},"and loaded")," in Electron. It contains a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," that can be used for Playwright automation."),(0,r.kt)("h2",{id:"electron-application-browser-window"},"electronApplication.browserWindow(page)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-browser-window-param-page"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">"," Page to retrieve the window for.",(0,r.kt)("a",{href:"#electron-application-browser-window-param-page",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-browser-window-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,r.kt)("a",{href:"#electron-application-browser-window-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the BrowserWindow object that corresponds to the given Playwright page."),(0,r.kt)("h2",{id:"electron-application-close"},"electronApplication.close()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-close-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,r.kt)("a",{href:"#electron-application-close-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Closes Electron application."),(0,r.kt)("h2",{id:"electron-application-context"},"electronApplication.context()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-context-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),">",(0,r.kt)("a",{href:"#electron-application-context-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"This method returns browser context that can be used for setting up context-wide routing, etc."),(0,r.kt)("h2",{id:"electron-application-evaluate"},"electronApplication.evaluate(pageFunction","[, arg]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-param-expression"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electron",title:"Electron"},"Electron"),">"," Function to be evaluated in the worker context.",(0,r.kt)("a",{href:"#electron-application-evaluate-param-expression",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-param-arg"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,r.kt)("inlineCode",{parentName:"li"},"pageFunction"),".",(0,r.kt)("a",{href:"#electron-application-evaluate-param-arg",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",">",(0,r.kt)("a",{href:"#electron-application-evaluate-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,r.kt)("p",null,"If the function passed to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,r.kt)("p",null,"If the function passed to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns a non-",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,r.kt)("h2",{id:"electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageFunction"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-param-expression"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-electron",title:"Electron"},"Electron"),">"," Function to be evaluated in the worker context.",(0,r.kt)("a",{href:"#electron-application-evaluate-handle-param-expression",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-param-arg"})," ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">",(0,r.kt)("a",{href:"#electron-application-evaluate-handle-param-arg",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-evaluate-handle-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",">",(0,r.kt)("a",{href:"#electron-application-evaluate-handle-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,r.kt)("p",null,"The only difference between ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate"},"electronApplication.evaluate(pageFunction[, arg])")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," is that ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," returns ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,r.kt)("p",null,"If the function passed to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," returns a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-electronapplication#electron-application-evaluate-handle"},"electronApplication.evaluateHandle(pageFunction, arg)")," would wait for the promise to resolve and return its value."),(0,r.kt)("h2",{id:"electron-application-first-window"},"electronApplication.firstWindow()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-first-window-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">",">",(0,r.kt)("a",{href:"#electron-application-first-window-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Convenience method that waits for the first application window to be opened. Typically your script will start with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const electronApp = await electron.launch({\n    args: ['main.js']\n  });\n  const window = await electronApp.firstWindow();\n  // ...\n")),(0,r.kt)("h2",{id:"electron-application-wait-for-event"},"electronApplication.waitForEvent(event","[, optionsOrPredicate]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-param-event"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Event name, same one typically passed into ",(0,r.kt)("inlineCode",{parentName:"li"},"*.on(event)"),".",(0,r.kt)("a",{href:"#electron-application-wait-for-event-param-event",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"optionsOrPredicate"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-param-options-or-predicate"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Either a predicate that receives an event or an options object. Optional.",(0,r.kt)("a",{href:"#electron-application-wait-for-event-param-options-or-predicate",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"predicate")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),">"," receives the event data and resolves to truthy value when the waiting should resolve."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," maximum time to wait for in milliseconds. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-set-default-timeout"},"browserContext.setDefaultTimeout(timeout)"),"."))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-wait-for-event-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,r.kt)("a",{href:"#electron-application-wait-for-event-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the application is closed before the event is fired. Returns the event data value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const [window] = await Promise.all([\n  electronApp.waitForEvent('window'),\n  mainWindow.click('button')\n]);\n")),(0,r.kt)("h2",{id:"electron-application-windows"},"electronApplication.windows()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-application-windows-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">",">",(0,r.kt)("a",{href:"#electron-application-windows-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Convenience method that returns all the opened windows."))}s.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);