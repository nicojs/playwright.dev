"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2961],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return f}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},s=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(t),f=n,d=s["".concat(p,".").concat(f)]||s[f]||c[f]||l;return t?r.createElement(d,i(i({ref:a},m),{},{components:t})):r.createElement(d,i({ref:a},m))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8215:function(e,a,t){var r=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return c}});var r=t(7294),n=t(9443);var l=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),o="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,m=39;var c=function(e){var a=e.lazy,t=e.block,n=e.defaultValue,c=e.values,s=e.groupId,f=e.className,d=l(),h=d.tabGroupChoices,k=d.setTabGroupChoices,v=(0,r.useState)(n),g=v[0],y=v[1],b=r.Children.toArray(e.children),N=[];if(null!=s){var w=h[s];null!=w&&w!==g&&c.some((function(e){return e.value===w}))&&y(w)}var O=function(e){var a=e.currentTarget,t=N.indexOf(a),r=c[t].value;y(r),null!=s&&(k(s,r),setTimeout((function(){var e,t,r,n,l,i,o,u;(e=a.getBoundingClientRect(),t=e.top,r=e.left,n=e.bottom,l=e.right,i=window,o=i.innerHeight,u=i.innerWidth,t>=0&&l<=u&&n<=o&&r>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(p),setTimeout((function(){return a.classList.remove(p)}),2e3))}),150))},j=function(e){var a,t;switch(e.keyCode){case m:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case u:var n=N.indexOf(e.target)-1;t=N[n]||N[N.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},f)},c.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:g===a?0:-1,"aria-selected":g===a,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:O,onClick:O},t)}))),a?(0,r.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==g})}))))}},9443:function(e,a,t){var r=(0,t(7294).createContext)(void 0);a.Z=r},9912:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=t(2122),n=t(9756),l=(t(7294),t(3905)),i=(t(5064),t(8215),{id:"cheat-sheet",title:"Cheat Sheet"}),o=void 0,p={unversionedId:"cheat-sheet",id:"version-1.13.0/cheat-sheet",isDocsHomePage:!1,title:"Cheat Sheet",description:"- Download & Upload",source:"@site/versioned_docs/version-1.13.0/cheat-sheet.mdx",sourceDirName:".",slug:"/cheat-sheet",permalink:"/java/docs/cheat-sheet",version:"1.13.0",frontMatter:{id:"cheat-sheet",title:"Cheat Sheet"}},u=[{value:"Download &amp; Upload",id:"download--upload",children:[{value:"Download file",id:"download-file",children:[]},{value:"Upload file",id:"upload-file",children:[]},{value:"Upload multiple files",id:"upload-multiple-files",children:[]},{value:"Upload from memory",id:"upload-from-memory",children:[]},{value:"Remove selected files",id:"remove-selected-files",children:[]},{value:"Handle file picker",id:"handle-file-picker",children:[]}]},{value:"Manage &lt;iframe&gt;s",id:"manage-iframes",children:[{value:"List frames",id:"list-frames",children:[]},{value:"Frame by <code>name</code> attribute",id:"frame-by-name-attribute",children:[]},{value:"Frame by URL",id:"frame-by-url",children:[]},{value:"Frame by selector",id:"frame-by-selector",children:[]}]}],m={toc:u};function c(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#download--upload"},"Download & Upload"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#download-file"},"Download file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-file"},"Upload file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-multiple-files"},"Upload multiple files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-from-memory"},"Upload from memory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#remove-selected-files"},"Remove selected files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handle-file-picker"},"Handle file picker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#manage-60iframe62s"},"Manage ","<","iframe",">","s"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#list-frames"},"List frames")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-name-attribute"},"Frame by ",(0,l.kt)("inlineCode",{parentName:"a"},"name")," attribute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-url"},"Frame by URL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-selector"},"Frame by selector"))))),(0,l.kt)("h2",{id:"download--upload"},"Download & Upload"),(0,l.kt)("h3",{id:"download-file"},"Download file"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/java/docs/downloads"},"Learn more")),(0,l.kt)("h3",{id:"upload-file"},"Upload file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", Paths.get("myfile.pdf"));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"upload-multiple-files"},"Upload multiple files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", new Path[] {Paths.get("file1.txt"), Paths.get("file2.txt")});\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"upload-from-memory"},"Upload from memory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", new FilePayload(\n  "file.txt", "text/plain", "this is test".getBytes(StandardCharsets.UTF_8)));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"remove-selected-files"},"Remove selected files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", new Path[0]);\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"handle-file-picker"},"Handle file picker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'FileChooser fileChooser = page.waitForFileChooser(() -> {\n  page.click("upload");\n});\nfileChooser.setFiles(Paths.get("myfile.pdf"));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h2",{id:"manage-iframes"},"Manage ","<","iframe",">","s"),(0,l.kt)("h3",{id:"list-frames"},"List frames"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Frame> frames = page.frames();\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-name-attribute"},"Frame by ",(0,l.kt)("inlineCode",{parentName:"h3"},"name")," attribute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Frame frame = page.frame("frame-login");\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-url"},"Frame by URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Frame frame = page.frameByUrl(Pattern.compile(".*domain.*"));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-selector"},"Frame by selector"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ElementHandle frameElementHandle = page.querySelector(".frame-class");\nFrame frame = frameElementHandle.contentFrame();\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")))}c.isMDXComponent=!0},6010:function(e,a,t){function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}function n(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}t.d(a,{Z:function(){return n}})}}]);