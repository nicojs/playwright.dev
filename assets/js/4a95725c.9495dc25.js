"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[32371],{19870:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return r},toc:function(){return g},default:function(){return u}});var n=t(87462),p=t(63366),i=(t(67294),t(3905)),l=(t(26396),t(58215),["components"]),o={id:"pages",title:"Pages"},s=void 0,r={unversionedId:"pages",id:"version-1.17/pages",isDocsHomePage:!1,title:"Pages",description:"- Pages",source:"@site/versioned_docs/version-1.17/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/docs/pages",tags:[],version:"1.17",frontMatter:{id:"pages",title:"Pages"},sidebar:"version-1.17/docs",previous:{title:"Network",permalink:"/docs/network"},next:{title:"Page Object Models",permalink:"/docs/pom"}},g=[{value:"Pages",id:"pages",children:[],level:2},{value:"Multiple pages",id:"multiple-pages",children:[],level:2},{value:"Handling new pages",id:"handling-new-pages",children:[],level:2},{value:"Handling popups",id:"handling-popups",children:[],level:2}],c={toc:g};function u(e){var a=e.components,t=(0,p.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pages"},"Pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,i.kt)("h2",{id:"pages"},"Pages"),(0,i.kt)("p",null,"Each ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," can have multiple pages. A ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Create a page.\nconst page = await context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com');\n// Fill an input.\nawait page.locator('#search').fill('query');\n\n// Navigate implicitly by clicking a link.\nawait page.locator('#submit').click();\n// Expect a new url.\nconsole.log(page.url());\n")),(0,i.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,i.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,i.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a browser context\nconst allPages = context.pages();\n")),(0,i.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,i.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get page after a specific action (e.g. clicking a link)\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.click('a[target=\"_blank\"]') // Opens a new tab\n])\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());\n")),(0,i.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  console.log(await page.title());\n})\n")),(0,i.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,i.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,i.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,i.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,i.kt)("p",null,"This event is emitted in addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get popup after a specific action (e.g., click)\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\nawait popup.waitForLoadState();\nconsole.log(await popup.title());\n")),(0,i.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  await popup.title();\n})\n")))}u.isMDXComponent=!0}}]);