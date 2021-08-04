"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7003],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,d=e.groupId,g=e.className,m=o(),f=m.tabGroupChoices,y=m.setTabGroupChoices,w=(0,a.useState)(r),h=w[0],k=w[1],b=a.Children.toArray(e.children),v=[];if(null!=d){var _=f[d];null!=_&&_!==h&&u.some((function(e){return e.value===_}))&&k(_)}var x=function(e){var t=e.currentTarget,n=v.indexOf(t),a=u[n].value;k(a),null!=d&&(y(d,a),setTimeout((function(){var e,n,a,r,o,p,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,p=window,l=p.innerHeight,c=p.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case s:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case c:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":n},g)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,p.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:N,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},40711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),p=n(55064),l=n(58215),i={id:"multi-pages",title:"Multi-page scenarios"},c=void 0,s={unversionedId:"multi-pages",id:"version-1.9.0/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/versioned_docs/version-1.9.0/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/python/docs/1.9.0/multi-pages",version:"1.9.0",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"version-1.9.0/docs",previous:{title:"Installation",permalink:"/python/docs/1.9.0/installation"},next:{title:"Navigations",permalink:"/python/docs/1.9.0/navigations"}},u=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[]}]}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,o.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,o.kt)(p.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = browser.new_context()\n    admin_context = browser.new_context()\n\n    # load user and admin cookies\n    user_context.add_cookies(user_cookies)\n    admin_context.add_cookies(admin_cookies)\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = await browser.new_context()\n    admin_context = await browser.new_context()\n\n    # load user and admin cookies\n    await user_context.add_cookies(user_cookies)\n    await admin_context.add_cookies(admin_cookies)\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"},"browser.new_context(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextadd_cookiescookies"},"browser_context.add_cookies(cookies)"))),(0,o.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,o.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,o.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,o.kt)(p.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = context.new_page()\npage_two = context.new_page()\n\n# get pages of a brower context\nall_pages = context.pages()\n"))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# create two pages\npage_one = await context.new_page()\npage_two = await context.new_page()\n\n# get pages of a brower context\nall_pages = context.pages()\n")))),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextnew_page"},"browser_context.new_page()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextpages"},"browser_context.pages"))),(0,o.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,o.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,o.kt)(p.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nwith context.expect_page() as new_page_info:\n    page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = new_page_info.value\n\nnew_page.wait_for_load_state()\nprint(new_page.title())\n"))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Get page after a specific action (e.g. clicking a link)\nasync with context.expect_page() as new_page_info:\n    await page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = await new_page_info.value\n\nawait new_page.wait_for_load_state()\nprint(await new_page.title())\n")))),(0,o.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,o.kt)(p.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\ndef handle_page(page):\n    page.wait_for_load_state()\n    print(page.title())\n\ncontext.on("page", handle_page)\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Get all new pages (including popups) in the context\nasync def handle_page(page):\n    await page.wait_for_load_state()\n    print(await page.title())\n\ncontext.on("page", handle_page)\n')))),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextonpage"},'browser_context.on("page")'))),(0,o.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,o.kt)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the ",(0,o.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,o.kt)("p",null,"This event is emitted in addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,o.kt)(p.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nwith page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n\npopup.wait_for_load_state()\nprint(popup.title())\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Get popup after a specific action (e.g., click)\nasync with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n\nawait popup.wait_for_load_state()\nprint(await popup.title())\n')))),(0,o.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,o.kt)(p.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\ndef handle_popup(popup):\n    popup.wait_for_load_state()\n    print(popup.title())\n\npage.on("popup", handle_popup)\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Get all popups when they open\nasync def handle_popup(popup):\n    await popup.wait_for_load_state()\n    print(await popup.title())\n\npage.on("popup", handle_popup)\n')))),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-page#pageonpopup"},'page.on("popup")'))))}g.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);