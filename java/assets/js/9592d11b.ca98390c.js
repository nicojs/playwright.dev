"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1143],{14729:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=e(87462),i=e(63366),r=(e(67294),e(3905)),s=(e(26396),e(58215),["components"]),o={id:"class-tracing",title:"Tracing"},l=void 0,c={unversionedId:"api/class-tracing",id:"version-1.14/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs.",source:"@site/versioned_docs/version-1.14/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/java/docs/1.14/api/class-tracing",tags:[],version:"1.14",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.14/api",previous:{title:"Touchscreen",permalink:"/java/docs/1.14/api/class-touchscreen"},next:{title:"Video",permalink:"/java/docs/1.14/api/class-video"}},p=[{value:"Tracing.start(options)",id:"tracing-start",children:[],level:2},{value:"Tracing.stop(options)",id:"tracing-stop",children:[],level:2}],h={toc:p};function d(t){var a=t.components,e=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs."),(0,r.kt)("p",null,"Start with specifying the folder traces will be stored in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-tracing#tracing-start"},"Tracing.start([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-tracing#tracing-stop"},"Tracing.stop([options])"))),(0,r.kt)("h2",{id:"tracing-start"},"Tracing.start(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.StartOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setName"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,r.kt)("a",{parentName:"li",href:"/java/docs/1.14/api/class-browsertype#browser-type-launch"},"BrowserType.launch([options])"),".",(0,r.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setScreenshots"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,r.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setSnapshots"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Whether to capture DOM snapshot on every action.",(0,r.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Start tracing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'context.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,r.kt)("h2",{id:"tracing-stop"},"Tracing.stop(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"Tracing.StopOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setPath"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">"," Export trace into the file with the given name.",(0,r.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,r.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Stop tracing."))}d.isMDXComponent=!0}}]);