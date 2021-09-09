"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=i(),y=h.tabGroupChoices,g=h.setTabGroupChoices,w=(0,a.useState)(r),f=w[0],k=w[1],v=a.Children.toArray(e.children),b=[];if(null!=d){var N=y[d];null!=N&&N!==f&&u.some((function(e){return e.value===N}))&&k(N)}var P=function(e){var t=e.currentTarget,n=b.indexOf(t),a=u[n].value;k(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,i,o,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,p=o.innerWidth,n>=0&&i<=p&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case p:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":f===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:P,onClick:P},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1046:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"intro",title:"Getting started"}),s=void 0,l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started",description:"- Installation",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/python/docs/next/intro",version:"current",frontMatter:{id:"intro",title:"Getting started"},sidebar:"docs",previous:{title:"Why Playwright?",permalink:"/python/docs/next/why-playwright"},next:{title:"Debugging tools",permalink:"/python/docs/next/debug"}},p=[{value:"Installation",id:"installation",children:[{value:"Pip",id:"pip",children:[]},{value:"Conda",id:"conda",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"With Pytest",id:"with-pytest",children:[]},{value:"Interactive mode (REPL)",id:"interactive-mode-repl",children:[]},{value:"Pyinstaller",id:"pyinstaller",children:[]},{value:"Known issues",id:"known-issues",children:[{value:"<code>time.sleep()</code> leads to outdated state",id:"timesleep-leads-to-outdated-state",children:[]},{value:"incompatible with <code>SelectorEventLoop</code> of <code>asyncio</code> on Windows",id:"incompatible-with-selectoreventloop-of-asyncio-on-windows",children:[]}]},{value:"System requirements",id:"system-requirements",children:[{value:"Windows",id:"windows",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-script"},"First script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#record-scripts"},"Record scripts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#with-pytest"},"With Pytest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#interactive-mode-repl"},"Interactive mode (REPL)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pyinstaller"},"Pyinstaller")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#known-issues"},"Known issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/release-notes"},"Release notes"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#system-requirements"},"system requirements"),"."),(0,i.kt)("h3",{id:"pip"},"Pip"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/playwright/"},(0,i.kt)("img",{parentName:"a",src:"https://badge.fury.io/py/playwright.svg",alt:"PyPI version"}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade pip\npip install playwright\nplaywright install\n")),(0,i.kt)("h3",{id:"conda"},"Conda"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://anaconda.org/Microsoft/playwright"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/conda/v/microsoft/playwright",alt:"Anaconda version"}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda config --add channels conda-forge\nconda config --add channels microsoft\nconda install playwright\nplaywright install\n")),(0,i.kt)("p",null,"These commands download the Playwright package and install browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/browsers#installing-browsers"},"installation parameters"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once installed, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," Playwright in a Python script, and launch any of the 3 browsers (",(0,i.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://playwright.dev")\n    print(page.title())\n    browser.close()\n')),(0,i.kt)("p",null,"Playwright supports two variations of the API: synchronous and asynchronous. If your modern project uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},"asyncio"),", you should use async API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch()\n        page = await browser.new_page()\n        await page.goto("http://playwright.dev")\n        print(await page.title())\n        await browser.close()\n\nasyncio.run(main())\n')),(0,i.kt)("h2",{id:"first-script"},"First script"),(0,i.kt)("p",null,"In our first script, we will navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.webkit.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),(0,i.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless=False")," flag while launching the browser. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"slow_mo")," to slow down execution. Learn more in the debugging tools ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/debug"},"section"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"firefox.launch(headless=False, slow_mo=50)\n")),(0,i.kt)("h2",{id:"record-scripts"},"Record scripts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/cli"},"Command line tools")," can be used to record user interactions and generate Python code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"playwright codegen wikipedia.org\n")),(0,i.kt)("h2",{id:"with-pytest"},"With Pytest"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/test-runners"},"here")," for Pytest instructions and examples."),(0,i.kt)("h2",{id:"interactive-mode-repl"},"Interactive mode (REPL)"),(0,i.kt)("p",null,"Blocking REPL, as in CLI via Python directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'>>> from playwright.sync_api import sync_playwright\n>>> playwright = sync_playwright().start()\n# Use playwright.chromium, playwright.firefox or playwright.webkit\n# Pass headless=False to launch() to see the browser UI\n>>> browser = playwright.chromium.launch()\n>>> page = browser.new_page()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n>>> playwright.stop()\n')),(0,i.kt)("p",null,"Async REPL such as ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncio")," REPL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python -m asyncio\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'>>> from playwright.async_api import async_playwright\n>>> playwright = await async_playwright().start()\n>>> browser = await playwright.chromium.launch()\n>>> page = await browser.new_page()\n>>> await page.goto("http://whatsmyuseragent.org/")\n>>> await page.screenshot(path="example.png")\n>>> await browser.close()\n>>> await playwright.stop()\n')),(0,i.kt)("h2",{id:"pyinstaller"},"Pyinstaller"),(0,i.kt)("p",null,"You can use Playwright with ",(0,i.kt)("a",{parentName:"p",href:"https://www.pyinstaller.org/"},"Pyinstaller")," to create standalone executables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# main.py\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://whatsmyuseragent.org/")\n    page.screenshot(path="example.png")\n    browser.close()\n')),(0,i.kt)("p",null,"If you want to bundle browsers with the executables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=0 playwright install chromium\npyinstaller -F main.py\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=0\nplaywright install chromium\npyinstaller -F main.py\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="0"\nplaywright install chromium\npyinstaller -F main.py\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bundling the browsers with the executables will generate bigger binaries. It is recommended to only bundle the browsers you use."))),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("h3",{id:"timesleep-leads-to-outdated-state"},(0,i.kt)("inlineCode",{parentName:"h3"},"time.sleep()")," leads to outdated state"),(0,i.kt)("p",null,"You should use ",(0,i.kt)("inlineCode",{parentName:"p"},"page.wait_for_timeout(5000)")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"time.sleep(5)")," and it is better to not wait for a timeout at all, but sometimes it is useful for debugging. In these cases, use our wait method instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," module. This is because we internally rely on asynchronous operations and when using ",(0,i.kt)("inlineCode",{parentName:"p"},"time.sleep(5)")," they can't get processed correctly."),(0,i.kt)("h3",{id:"incompatible-with-selectoreventloop-of-asyncio-on-windows"},"incompatible with ",(0,i.kt)("inlineCode",{parentName:"h3"},"SelectorEventLoop")," of ",(0,i.kt)("inlineCode",{parentName:"h3"},"asyncio")," on Windows"),(0,i.kt)("p",null,"Playwright runs the driver in a subprocess, so it requires ",(0,i.kt)("inlineCode",{parentName:"p"},"ProactorEventLoop")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncio")," on Windows because ",(0,i.kt)("inlineCode",{parentName:"p"},"SelectorEventLoop")," does not supports async subprocesses."),(0,i.kt)("p",null,"On Windows Python 3.7, Playwright sets the default event loop to ",(0,i.kt)("inlineCode",{parentName:"p"},"ProactorEventLoop")," as it is default on Python 3.8+."),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Playwright requires Python 3.7 or above. The browser binaries for Chromium, Firefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,"Works with Windows and Windows Subsystem for Linux (WSL)."),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("p",null,"Requires 10.14 (Mojave) or above."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Depending on your Linux distribution, you might need to install additional dependencies to run the browsers."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported."))),(0,i.kt)("p",null,"See also in the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."))}u.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);