(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),o=(a(0),a(330)),c=a(333),s=a(334),l={id:"network",title:"Network"},p={unversionedId:"network",id:"version-1.10.0/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.10.0/network.mdx",slug:"/network",permalink:"/python/docs/network",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Navigations",permalink:"/python/docs/navigations"},next:{title:"Page Object Models",permalink:"/python/docs/pom"}},b=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"HTTP Proxy",id:"http-proxy",children:[]},{value:"Network events",id:"network-events",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handle requests",id:"handle-requests",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"WebSockets",id:"websockets",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],u={toc:b};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright provides APIs to ",Object(o.b)("strong",{parentName:"p"},"monitor")," and ",Object(o.b)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#network-events"}),"Network events")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#websockets"}),"WebSockets"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"http-authentication"},"HTTP Authentication"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = context.new_page()\npage.goto("https://example.com")\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(\n    http_credentials={"username": "bill", "password": "pa55w0rd"}\n)\npage = await context.new_page()\nawait page.goto("https://example.com")\n')))),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)"))),Object(o.b)("h2",{id:"http-proxy"},"HTTP Proxy"),Object(o.b)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),Object(o.b)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),Object(o.b)("p",null,"Here is an example of a global proxy:"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'browser = chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "user": "usr",\n  "password": "pwd"\n})\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'browser = await chromium.launch(proxy={\n  "server": "http://myproxy.com:3128",\n  "user": "usr",\n  "password": "pwd"\n})\n')))),Object(o.b)("p",null,"When specifying proxy for each context individually, you need to give Playwright a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'browser = chromium.launch(proxy={"server": "per-context"})\ncontext = browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'browser = await chromium.launch(proxy={"server": "per-context"})\ncontext = await browser.new_context(proxy={"server": "http://myproxy.com:3128"})\n')))),Object(o.b)("h2",{id:"network-events"},"Network events"),Object(o.b)("p",null,"You can monitor all the requests and responses:"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    page.goto("https://example.com")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    # Subscribe to "request" and "response" events.\n    page.on("request", lambda request: print(">>", request.method, request.url))\n    page.on("response", lambda response: print("<<", response.status, response.url))\n    await page.goto("https://example.com")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),Object(o.b)("p",null,"Or wait for a network response after the button click:"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Use a glob url pattern\nwith page.expect_response("**/api/fetch_data") as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Use a glob url pattern\nasync with page.expect_response("**/api/fetch_data") as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),Object(o.b)("h4",{id:"variations"},"Variations"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Use a regular expression\nwith page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n\n# Use a predicate taking a response object\nwith page.expect_response(lambda response: token in response.url) as response_info:\n    page.click("button#update")\nresponse = response_info.value\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Use a regular expression\nasync with page.expect_response(re.compile(r"\\.jpeg$")) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n\n# Use a predicate taking a response object\nasync with page.expect_response(lambda response: token in response.url) as response_info:\n    await page.click("button#update")\nresponse = await response_info.value\n')))),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-request",title:"Request"}),"Request")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-response",title:"Response"}),"Response")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonrequest"}),'page.on("request")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonresponse"}),'page.on("response")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageexpect_requesturl_or_predicate-kwargs"}),"page.expect_request(url_or_predicate, **kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageexpect_responseurl_or_predicate-kwargs"}),"page.expect_response(url_or_predicate, **kwargs)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"handle-requests"},"Handle requests"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\npage.goto("https://example.com")\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.route(\n    "**/api/fetch_data",\n    lambda route: route.fulfill(status=200, body=test_data))\nawait page.goto("https://example.com")\n')))),Object(o.b)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),Object(o.b)("h4",{id:"variations-1"},"Variations"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\ncontext.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\npage.goto("https://example.com")\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Set up route on the entire browser context.\n# It will apply to popup windows and opened links.\nawait context.route(\n    "**/api/login",\n    lambda route: route.fulfill(status=200, body="accept"))\nawait page.goto("https://example.com")\n')))),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextrouteurl-handler"}),"browser_context.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextunrouteurl-kwargs"}),"browser_context.unroute(url, **kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagerouteurl-handler"}),"page.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageunrouteurl-kwargs"}),"page.unroute(url, **kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-route",title:"Route"}),"Route"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"modify-requests"},"Modify requests"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Delete header\ndef handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\npage.route("**/*", handle_route)\n\n# Continue requests as POST.\npage.route("**/*", lambda route: route.continue_(method="POST"))\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Delete header\nasync def handle_route(route):\n    headers = route.request.headers\n    del headers["x-secret"]\n    route.continue_(headers=headers)\nawait page.route("**/*", handle_route)\n\n# Continue requests as POST.\nawait page.route("**/*", lambda route: route.continue_(method="POST"))\n')))),Object(o.b)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),Object(o.b)("h2",{id:"abort-requests"},"Abort requests"),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\npage.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n'))),Object(o.b)(s.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.route("**/*.{png,jpg,jpeg}", lambda route: route.abort())\n\n# Abort based on the request type\nawait page.route("**/*", lambda route: route.abort() if route.request.resource_type == "image"  else route.continue_())\n')))),Object(o.b)("h3",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pagerouteurl-handler"}),"page.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextrouteurl-handler"}),"browser_context.route(url, handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-route#routeabortkwargs"}),"route.abort(**kwargs)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"websockets"},"WebSockets"),Object(o.b)("p",null,"Playwright supports ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageonwebsocket"}),'page.on("websocket")')," event is fired. This event contains the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'def on_web_socket(ws):\n    print(f"WebSocket opened: {ws.url}")\n    ws.on("framesent", lambda payload: print(payload))\n    ws.on("framereceived", lambda payload: print(payload))\n    ws.on("close", lambda payload: print("WebSocket closed"))\n\npage.on("websocket", on_web_socket)\n')),Object(o.b)("h3",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonwebsocket"}),'page.on("websocket")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonframesent"}),'web_socket.on("framesent")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonframereceived"}),'web_socket.on("framereceived")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonclose"}),'web_socket.on("close")'))),Object(o.b)("br",null))}i.isMDXComponent=!0},329:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},330:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||i[d]||o;return a?r.a.createElement(m,s(s({ref:t},p),{},{components:a})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},331:function(e,t,a){"use strict";var n=a(0),r=a(332);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},332:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},333:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(331),c=a(329),s=a(53),l=a.n(s),p=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,i=e.groupId,d=e.className,m=Object(o.a)(),y=m.tabGroupChoices,O=m.setTabGroupChoices,h=Object(n.useState)(s),j=h[0],f=h[1],g=n.Children.toArray(e.children);if(null!=i){var w=y[i];null!=w&&w!==j&&u.some((function(e){return e.value===w}))&&f(w)}var v=function(e){f(e),null!=i&&O(i,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},334:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);