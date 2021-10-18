"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8327],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(7294),o=t(9443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var f=function(e){var r=e.lazy,t=e.block,o=e.defaultValue,f=e.values,p=e.groupId,d=e.className,m=a(),k=m.tabGroupChoices,v=m.setTabGroupChoices,w=(0,n.useState)(o),h=w[0],b=w[1],g=n.Children.toArray(e.children),y=[];if(null!=p){var N=k[p];null!=N&&N!==h&&f.some((function(e){return e.value===N}))&&b(N)}var I=function(e){var r=e.currentTarget,t=y.indexOf(r),n=f[t].value;b(n),null!=p&&(v(p,n),setTimeout((function(){var e,t,n,o,a,i,l,c;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&a<=c&&o<=l&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},x=function(e){var r,t;switch(e.keyCode){case u:var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case c:var o=y.indexOf(e.target)-1;t=y[o]||y[y.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},d)},f.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===r?0:-1,"aria-selected":h===r,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":h===r}),key:r,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:I,onClick:I},t)}))),r?(0,n.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},9443:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},3355:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return d}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=t(5064),l=t(8215),s={id:"class-workerinfo",title:"WorkerInfo"},c=void 0,u={unversionedId:"api/class-workerinfo",id:"version-1.14/api/class-workerinfo",isDocsHomePage:!1,title:"WorkerInfo",description:"WorkerInfo contains information about the worker that is running tests. It is available to test.beforeAll(hookFunction) and test.afterAll(hookFunction) hooks and worker-scoped fixtures.",source:"@site/versioned_docs/version-1.14/api/class-workerinfo.mdx",sourceDirName:"api",slug:"/api/class-workerinfo",permalink:"/docs/1.14/api/class-workerinfo",version:"1.14",frontMatter:{id:"class-workerinfo",title:"WorkerInfo"}},f=[{value:"workerInfo.config",id:"worker-info-config",children:[]},{value:"workerInfo.project",id:"worker-info-project",children:[]},{value:"workerInfo.workerIndex",id:"worker-info-worker-index",children:[]}],p={toc:f};function d(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WorkerInfo")," contains information about the worker that is running tests. It is available to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-test#test-before-all"},"test.beforeAll(hookFunction)")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/api/class-test#test-after-all"},"test.afterAll(hookFunction)")," hooks and worker-scoped fixtures."),(0,a.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n"))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-workerinfo#worker-info-config"},"workerInfo.config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-workerinfo#worker-info-project"},"workerInfo.project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-workerinfo#worker-info-worker-index"},"workerInfo.workerIndex"))),(0,a.kt)("h2",{id:"worker-info-config"},"workerInfo.config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-testconfig",title:"TestConfig"},"TestConfig"),">")),(0,a.kt)("p",null,"Processed configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-project"},"workerInfo.project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/1.14/api/class-testproject",title:"TestProject"},"TestProject"),">")),(0,a.kt)("p",null,"Processed project configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-worker-index"},"workerInfo.workerIndex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,a.kt)("p",null,"The unique index of the worker process that is running the test. Also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX"),". Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.14/test-parallel"},"parallelism and sharding")," with Playwright Test."))}d.isMDXComponent=!0},6010:function(e,r,t){function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);