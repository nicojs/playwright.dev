(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(152)),o=(a(155),a(156),{id:"navigations",title:"Navigations"}),c={unversionedId:"navigations",id:"navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/docs/navigations.mdx",slug:"/navigations",permalink:"/dotnet/docs/navigations",version:"current",sidebar:"docs",previous:{title:"Multi-page scenarios",permalink:"/dotnet/docs/multi-pages"},next:{title:"Network",permalink:"/dotnet/docs/network"}},l=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),Object(r.b)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),Object(r.b)("p",null,"Playwright splits the process of showing a new document in a page into ",Object(r.b)("strong",{parentName:"p"},"navigation")," and ",Object(r.b)("strong",{parentName:"p"},"loading"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",Object(r.b)("strong",{parentName:"p"},"loading")," the document."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageurl"}),"Page.Url")," is set to the new url"),Object(r.b)("li",{parentName:"ul"},"document content is loaded over network and parsed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#eventpagedomcontentloaded"}),"event Page.DOMContentLoaded")," event is fired"),Object(r.b)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#eventpageload"}),"event Page.Load")," event is fired"),Object(r.b)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),Object(r.b)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),Object(r.b)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),Object(r.b)("h3",{id:"auto-wait"},"Auto-wait"),Object(r.b)("p",null,"Navigating to a URL auto-waits for the page to fire the ",Object(r.b)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",Object(r.b)("inlineCode",{parentName:"p"},"load"),", ",Object(r.b)("inlineCode",{parentName:"p"},"page.goto")," will auto-wait for the redirected page to fire the ",Object(r.b)("inlineCode",{parentName:"p"},"load")," event."),Object(r.b)("h3",{id:"custom-wait"},"Custom wait"),Object(r.b)("p",null,"Override the default behavior to wait until a specific event, like ",Object(r.b)("inlineCode",{parentName:"p"},"networkidle"),"."),Object(r.b)("h3",{id:"wait-for-element"},"Wait for element"),Object(r.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitforselectorasyncselector-"}),"Page.WaitForSelectorAsync(selector, \u2026)"),". Alternatively, page interactions like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageclickasyncselector-"}),"Page.ClickAsync(selector, \u2026)")," auto-wait for elements."),Object(r.b)("h3",{id:"api-reference"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagegotoasyncurl-"}),"Page.GoToAsync(url, \u2026)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagereloadasync"}),"Page.ReloadAsync(\u2026)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagegobackasync"}),"Page.GoBackAsync(\u2026)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagegoforwardasync"}),"Page.GoForwardAsync(\u2026)"))),Object(r.b)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),Object(r.b)("p",null,"In the scenarios below, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageclickasyncselector-"}),"Page.ClickAsync(selector, \u2026)")," initiates a navigation and then waits for the navigation to complete."),Object(r.b)("h3",{id:"auto-wait-1"},"Auto-wait"),Object(r.b)("p",null,"By default, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageclickasyncselector-"}),"Page.ClickAsync(selector, \u2026)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),Object(r.b)("h3",{id:"custom-wait-1"},"Custom wait"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitforloadstateasync"}),"Page.WaitForLoadStateAsync(\u2026)")," to wait for a loading event."),Object(r.b)("h3",{id:"wait-for-element-1"},"Wait for element"),Object(r.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitforselectorasyncselector-"}),"Page.WaitForSelectorAsync(selector, \u2026)"),". Alternatively, page interactions like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageclickasyncselector-"}),"Page.ClickAsync(selector, \u2026)")," auto-wait for elements."),Object(r.b)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),Object(r.b)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitfornavigationasync"}),"Page.WaitForNavigationAsync(\u2026)"),". For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigation is triggered from a ",Object(r.b)("inlineCode",{parentName:"li"},"setTimeout")),Object(r.b)("li",{parentName:"ul"},"Page waits for network requests before navigation")),Object(r.b)("h3",{id:"multiple-navigations"},"Multiple navigations"),Object(r.b)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitfornavigationasync"}),"Page.WaitForNavigationAsync(\u2026)")," to a specific url. For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Client-side redirects issued after the ",Object(r.b)("inlineCode",{parentName:"li"},"load")," event"),Object(r.b)("li",{parentName:"ul"},"Multiple pushes to history state")),Object(r.b)("h3",{id:"loading-a-popup"},"Loading a popup"),Object(r.b)("p",null,"When popup is opened, explicitly calling ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitforloadstateasync"}),"Page.WaitForLoadStateAsync(\u2026)")," ensures that popup is loaded to the desired state."),Object(r.b)("h3",{id:"api-reference-1"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageclickasyncselector-"}),"Page.ClickAsync(selector, \u2026)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagewaitforloadstateasync"}),"Page.WaitForLoadStateAsync(\u2026)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagewaitforselectorasyncselector-"}),"Page.WaitForSelectorAsync(selector, \u2026)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagewaitfornavigationasync"}),"Page.WaitForNavigationAsync(\u2026)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagewaitforfunctionasyncexpression-"}),"Page.WaitForFunctionAsync(expression, \u2026)"))),Object(r.b)("h2",{id:"advanced-patterns"},"Advanced patterns"),Object(r.b)("p",null,"For pages that have complicated loading patterns, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitforfunctionasyncexpression-"}),"Page.WaitForFunctionAsync(expression, \u2026)")," is a powerful and extensible approach to define a custom wait criteria."),Object(r.b)("h3",{id:"api-reference-2"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagewaitforfunctionasyncexpression-"}),"Page.WaitForFunctionAsync(expression, \u2026)"))))}p.isMDXComponent=!0},151:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,g=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return a?i.a.createElement(g,c(c({ref:t},s),{},{components:a})):i.a.createElement(g,c({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var n=a(0),i=a(154);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(53)},156:function(e,t,a){"use strict";a(3),a(0)}}]);