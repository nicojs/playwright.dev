"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1914],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,d=m["".concat(s,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(67294),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var f=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,f=e.values,m=e.groupId,p=e.className,d=o(),v=d.tabGroupChoices,b=d.setTabGroupChoices,g=(0,n.useState)(a),h=g[0],y=g[1],k=n.Children.toArray(e.children),O=[];if(null!=m){var w=v[m];null!=w&&w!==h&&f.some((function(e){return e.value===w}))&&y(w)}var j=function(e){var t=e.currentTarget,r=O.indexOf(t),n=f[r].value;y(n),null!=m&&(b(m,n),setTimeout((function(){var e,r,n,a,o,i,c,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,r>=0&&o<=l&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case l:var a=O.indexOf(e.target)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:j,onClick:j},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},17780:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=(r(55064),r(58215),{id:"frames",title:"Pages and frames"}),c=void 0,s={unversionedId:"frames",id:"version-1.17-rc.1/frames",isDocsHomePage:!1,title:"Pages and frames",description:"- Frames",source:"@site/versioned_docs/version-1.17-rc.1/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/docs/frames",version:"1.17-rc.1",frontMatter:{id:"frames",title:"Pages and frames"},sidebar:"version-1.17-rc.1/docs",previous:{title:"Extensibility",permalink:"/docs/extensibility"},next:{title:"Handles",permalink:"/docs/handles"}},l=[{value:"Frames",id:"frames",children:[]},{value:"Frame objects",id:"frame-objects",children:[]}],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frames"},"Frames")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#frame-objects"},"Frame objects"))),(0,o.kt)("h2",{id:"frames"},"Frames"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-page",title:"Page"},"Page")," can have one or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,o.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,o.kt)("p",null,"A page can have additional frames attached with the ",(0,o.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Locate element inside frame\nconst username = await page.frameLocator('.frame-class').locator('#username-input');\nawait username.fill('John');\n")),(0,o.kt)("h2",{id:"frame-objects"},"Frame objects"),(0,o.kt)("p",null,"One can access frame objects using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/class-page#page-frame"},"page.frame(frameSelector)")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get frame using the frame's name attribute\nconst frame = page.frame('frame-login');\n\n// Get frame using frame's URL\nconst frame = page.frame({ url: /.*domain.*/ });\n\n// Interact with the frame\nawait frame.fill('#username-input', 'John');\n")))}f.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);