"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4575],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,d=f["".concat(l,".").concat(p)]||f[p]||m[p]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(9443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,m=e.values,f=e.groupId,p=e.className,d=o(),v=d.tabGroupChoices,b=d.setTabGroupChoices,g=(0,n.useState)(a),h=g[0],y=g[1],k=n.Children.toArray(e.children),j=[];if(null!=f){var O=v[f];null!=O&&O!==h&&m.some((function(e){return e.value===O}))&&y(O)}var w=function(e){var t=e.currentTarget,r=j.indexOf(t),n=m[r].value;y(n),null!=f&&(b(f,n),setTimeout((function(){var e,r,n,a,o,i,c,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,r>=0&&o<=s&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var n=j.indexOf(e.target)+1;r=j[n]||j[0];break;case s:var a=j.indexOf(e.target)-1;r=j[a]||j[j.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},p)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":h===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:w,onClick:w},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},5614:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=(r(5064),r(8215),{id:"frames",title:"Pages and frames"}),c=void 0,l={unversionedId:"frames",id:"frames",isDocsHomePage:!1,title:"Pages and frames",description:"- Frames",source:"@site/docs/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/java/docs/next/frames",version:"current",frontMatter:{id:"frames",title:"Pages and frames"},sidebar:"docs",previous:{title:"Extensibility",permalink:"/java/docs/next/extensibility"},next:{title:"Handles",permalink:"/java/docs/next/handles"}},s=[{value:"Frames",id:"frames",children:[]},{value:"Frame objects",id:"frame-objects",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frames"},"Frames")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frame-objects"},"Frame objects"))),(0,o.kt)("h2",{id:"frames"},"Frames"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page",title:"Page"},"Page")," can have one or more ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,o.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,o.kt)("p",null,"A page can have additional frames attached with the ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Locate element inside frame\nLocator username = page.frameLocator(".frame-class").locator("#username-input");\nusername.fill("John");\n')),(0,o.kt)("h2",{id:"frame-objects"},"Frame objects"),(0,o.kt)("p",null,"One can access frame objects using the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-frame"},"Page.frame(name)")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Get frame using the frame"s name attribute\nFrame frame = page.frame("frame-login");\n\n// Get frame using frame"s URL\nFrame frame = page.frameByUrl(Pattern.compile(".*domain.*"));\n\n// Interact with the frame\nframe.fill("#username-input", "John");\n')))}m.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);