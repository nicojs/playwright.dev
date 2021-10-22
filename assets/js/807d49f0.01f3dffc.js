"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2330],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(79443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=r(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=i(),f=h.tabGroupChoices,y=h.setTabGroupChoices,g=(0,n.useState)(a),w=g[0],v=g[1],k=n.Children.toArray(e.children),b=[];if(null!=d){var N=f[d];null!=N&&N!==w&&u.some((function(e){return e.value===N}))&&v(N)}var O=function(e){var t=e.currentTarget,r=b.indexOf(t),n=u[r].value;v(n),null!=d&&(y(d,n),setTimeout((function(){var e,r,n,a,i,o,s,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,r>=0&&i<=c&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case p:var n=b.indexOf(e.target)+1;r=b[n]||b[0];break;case c:var a=b.indexOf(e.target)-1;r=b[a]||b[b.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},27887:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=(r(55064),r(58215),{id:"library",title:"Overview"}),s=void 0,l={unversionedId:"library",id:"version-1.16/library",isDocsHomePage:!1,title:"Overview",description:"Playwright can either be used as a part of the Playwright Test, or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on.",source:"@site/versioned_docs/version-1.16/library.mdx",sourceDirName:".",slug:"/library",permalink:"/docs/library",version:"1.16",frontMatter:{id:"library",title:"Overview"},sidebar:"version-1.16/docs",previous:{title:"Advanced: TypeScript",permalink:"/docs/test-typescript"},next:{title:"Assertions",permalink:"/docs/assertions"}},c=[{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"TypeScript support",id:"typescript-support",children:[{value:"In JavaScript",id:"in-javascript",children:[]},{value:"In TypeScript",id:"in-typescript",children:[]}]},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]}]}],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright can either be used as a part of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/intro"},"Playwright Test"),", or as a Playwright Library (this guide). If you are working on an application that utilizes Playwright capabilities or you are using Playwright with another test runner, read on."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-script"},"First script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#typescript-support"},"TypeScript support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/release-notes"},"Release notes"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Use npm or Yarn to install Playwright library in your Node.js project. See ",(0,i.kt)("a",{parentName:"p",href:"#system-requirements"},"system requirements"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D playwright\n")),(0,i.kt)("p",null,"This single command downloads the Playwright NPM package and browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,i.kt)("a",{parentName:"p",href:"/docs/browsers#managing-browser-binaries"},"managing browsers"),"."),(0,i.kt)("p",null,"Once installed, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",(0,i.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"},"the async/await pattern")," to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),(0,i.kt)("h2",{id:"first-script"},"First script"),(0,i.kt)("p",null,"In our first script, we will navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution. Learn more in the debugging tools ",(0,i.kt)("a",{parentName:"p",href:"/docs/debug"},"section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"firefox.launch({ headless: false, slowMo: 50 });\n")),(0,i.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/cli"},"Command line tools")," can be used to record user interactions and generate JavaScript code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright codegen wikipedia.org\n")),(0,i.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,i.kt)("p",null,"Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience."),(0,i.kt)("h3",{id:"in-javascript"},"In JavaScript"),(0,i.kt)("p",null,"Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//@ts-check\n// ...\n")),(0,i.kt)("p",null,"Alternatively, you can use JSDoc to set types for variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('playwright').Page} */\nlet page;\n")),(0,i.kt)("h3",{id:"in-typescript"},"In TypeScript"),(0,i.kt)("p",null,"TypeScript support will work out-of-the-box. Types can also be imported explicitly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let page: import('playwright').Page;\n")),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Playwright requires Node.js version 12 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,i.kt)("p",null,"See also in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}u.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);