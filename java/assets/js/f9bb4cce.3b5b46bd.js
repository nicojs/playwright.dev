"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3306],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(9443);var s=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,c=e.values,d=e.groupId,h=e.className,m=s(),f=m.tabGroupChoices,k=m.setTabGroupChoices,v=(0,r.useState)(n),b=v[0],y=v[1],g=r.Children.toArray(e.children),N=[];if(null!=d){var x=f[d];null!=x&&x!==b&&c.some((function(e){return e.value===x}))&&y(x)}var j=function(e){var t=e.currentTarget,a=N.indexOf(t),r=c[a].value;y(r),null!=d&&(k(d,r),setTimeout((function(){var e,a,r,n,s,i,o,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,s=e.right,i=window,o=i.innerHeight,p=i.innerWidth,a>=0&&s<=p&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},P=function(e){var t,a;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;a=N[r]||N[0];break;case p:var n=N.indexOf(e.target)-1;a=N[n]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},h)},c.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:j,onClick:j},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},7228:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"class-apiresponse",title:"APIResponse"}),o=void 0,l={unversionedId:"api/class-apiresponse",id:"api/class-apiresponse",isDocsHomePage:!1,title:"APIResponse",description:"APIResponse] class represents responses returned by [APIRequestContext.get(url[, options]) and similar methods.",source:"@site/docs/api/class-apiresponse.mdx",sourceDirName:"api",slug:"/api/class-apiresponse",permalink:"/java/docs/next/api/class-apiresponse",version:"current",frontMatter:{id:"class-apiresponse",title:"APIResponse"}},p=[{value:"APIResponse.body()",id:"api-response-body",children:[]},{value:"APIResponse.dispose()",id:"api-response-dispose",children:[]},{value:"APIResponse.headers()",id:"api-response-headers",children:[]},{value:"APIResponse.headersArray()",id:"api-response-headers-array",children:[]},{value:"APIResponse.ok()",id:"api-response-ok",children:[]},{value:"APIResponse.status()",id:"api-response-status",children:[]},{value:"APIResponse.statusText()",id:"api-response-status-text",children:[]},{value:"APIResponse.text()",id:"api-response-text",children:[]},{value:"APIResponse.url()",id:"api-response-url",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"},"APIResponse")," class represents responses returned by ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-apirequestcontext#api-request-context-get"},"APIRequestContext.get(url[, options])")," and similar methods."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-body"},"APIResponse.body()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-dispose"},"APIResponse.dispose()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-headers"},"APIResponse.headers()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-headers-array"},"APIResponse.headersArray()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-ok"},"APIResponse.ok()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-status"},"APIResponse.status()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-status-text"},"APIResponse.statusText()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-text"},"APIResponse.text()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-apiresponse#api-response-url"},"APIResponse.url()"))),(0,s.kt)("h2",{id:"api-response-body"},"APIResponse.body()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-body-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">",(0,s.kt)("a",{href:"#api-response-body-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the buffer with response body."),(0,s.kt)("h2",{id:"api-response-dispose"},"APIResponse.dispose()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-dispose-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,s.kt)("a",{href:"#api-response-dispose-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Disposes the body of this response. If not called then the body will stay in memory until the context closes."),(0,s.kt)("h2",{id:"api-response-headers"},"APIResponse.headers()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,s.kt)("a",{href:"#api-response-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,s.kt)("h2",{id:"api-response-headers-array"},"APIResponse.headersArray()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-array-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"},"List"),"<",(0,s.kt)("inlineCode",{parentName:"li"},"HttpHeader"),">",">",(0,s.kt)("a",{href:"#api-response-headers-array-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Name of the header."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Value of the header.")))),(0,s.kt)("p",null,"An array with all the request HTTP headers associated with this response. Header names are not lower-cased. Headers with multiple entries, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,s.kt)("h2",{id:"api-response-ok"},"APIResponse.ok()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-ok-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">",(0,s.kt)("a",{href:"#api-response-ok-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,s.kt)("h2",{id:"api-response-status"},"APIResponse.status()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">",(0,s.kt)("a",{href:"#api-response-status-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,s.kt)("h2",{id:"api-response-status-text"},"APIResponse.statusText()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-text-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#api-response-status-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,s.kt)("h2",{id:"api-response-text"},"APIResponse.text()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-text-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#api-response-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the text representation of response body."),(0,s.kt)("h2",{id:"api-response-url"},"APIResponse.url()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#api-response-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the URL of the response."))}c.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);