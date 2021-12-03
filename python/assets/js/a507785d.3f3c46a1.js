"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5737],{2031:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=(a(26396),a(58215),["components"]),s={id:"release-notes",title:"Release notes"},o=void 0,p={unversionedId:"release-notes",id:"version-1.14/release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.14",source:"@site/versioned_docs/version-1.14/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/python/docs/1.14/release-notes",tags:[],version:"1.14",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"version-1.14/docs",previous:{title:"Supported languages",permalink:"/python/docs/1.14/languages"},next:{title:"Pytest plugin",permalink:"/python/docs/1.14/test-runners"}},c=[{value:"Version 1.14",id:"version-114",children:[{value:"\u26a1\ufe0f New &quot;strict&quot; mode",id:"\ufe0f-new-strict-mode",children:[],level:4},{value:"\ud83d\udccd New Locators API",id:"-new-locators-api",children:[],level:4},{value:"\ud83e\udde9 Experimental React and Vue selector engines",id:"-experimental-react-and-vue-selector-engines",children:[],level:4},{value:"\u2728 New nth and visible selector engines",id:"-new-nth-and-visible-selector-engines",children:[],level:4},{value:"Browser Versions",id:"browser-versions",children:[],level:3}],level:2},{value:"Version 1.13",id:"version-113",children:[{value:"Playwright",id:"playwright",children:[],level:4},{value:"Tools",id:"tools",children:[],level:4},{value:"New and Overhauled Guides",id:"new-and-overhauled-guides",children:[],level:4},{value:"Browser Versions",id:"browser-versions-1",children:[],level:4},{value:"New Playwright APIs",id:"new-playwright-apis",children:[],level:4}],level:2},{value:"Version 1.12",id:"version-112",children:[{value:"\ud83e\udddf\u200d\u2642\ufe0f Introducing Playwright Trace Viewer",id:"\ufe0f-introducing-playwright-trace-viewer",children:[],level:4},{value:"Browser Versions",id:"browser-versions-2",children:[],level:4},{value:"New APIs",id:"new-apis",children:[],level:4}],level:2},{value:"Version 1.11",id:"version-111",children:[{value:"Browser Versions",id:"browser-versions-3",children:[],level:4},{value:"New APIs",id:"new-apis-1",children:[],level:4}],level:2},{value:"Version 1.10",id:"version-110",children:[{value:"Bundled Browser Versions",id:"bundled-browser-versions",children:[],level:4},{value:"New APIs",id:"new-apis-2",children:[],level:4}],level:2},{value:"Version 1.9",id:"version-19",children:[{value:"Browser Versions",id:"browser-versions-4",children:[],level:4},{value:"New APIs",id:"new-apis-3",children:[],level:4}],level:2},{value:"Version 1.8",id:"version-18",children:[{value:"New APIs",id:"new-apis-4",children:[],level:4},{value:"Browser Versions",id:"browser-versions-5",children:[],level:4}],level:2},{value:"Version 1.7",id:"version-17",children:[{value:"New APIs",id:"new-apis-5",children:[],level:4},{value:"Browser Versions",id:"browser-versions-6",children:[],level:4}],level:2}],h={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-114"},"Version 1.14")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-113"},"Version 1.13")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-112"},"Version 1.12")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-111"},"Version 1.11")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-110"},"Version 1.10")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-19"},"Version 1.9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-18"},"Version 1.8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#version-17"},"Version 1.7"))),(0,l.kt)("h2",{id:"version-114"},"Version 1.14"),(0,l.kt)("h4",{id:"\ufe0f-new-strict-mode"},'\u26a1\ufe0f New "strict" mode'),(0,l.kt)("p",null,"Selector ambiguity is a common problem in automation testing. ",(0,l.kt)("strong",{parentName:"p"},'"strict" mode')," ensures that your selector points to a single element and throws otherwise."),(0,l.kt)("p",null,"Pass ",(0,l.kt)("inlineCode",{parentName:"p"},"strict=true")," into your action calls to opt in."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# This will throw if you have more than one button!\npage.click("button", strict=true)\n')),(0,l.kt)("h4",{id:"-new-locators-api"},"\ud83d\udccd New ",(0,l.kt)("a",{parentName:"h4",href:"./api/class-locator"},(0,l.kt)("strong",{parentName:"a"},"Locators API"))),(0,l.kt)("p",null,"Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment."),(0,l.kt)("p",null,"The difference between the ",(0,l.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," and ",(0,l.kt)("a",{parentName:"p",href:"./api/class-elementhandle"},"ElementHandle")," is that the latter points to a particular element, while ",(0,l.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," captures the logic of how to retrieve that element."),(0,l.kt)("p",null,"Also, locators are ",(0,l.kt)("strong",{parentName:"p"},'"strict" by default'),"!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'locator = page.locator("button")\nlocator.click()\n')),(0,l.kt)("p",null,"Learn more in the ",(0,l.kt)("a",{parentName:"p",href:"./api/class-locator"},"documentation"),"."),(0,l.kt)("h4",{id:"-experimental-react-and-vue-selector-engines"},"\ud83e\udde9 Experimental ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#react-selectors"},(0,l.kt)("strong",{parentName:"a"},"React"))," and ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#vue-selectors"},(0,l.kt)("strong",{parentName:"a"},"Vue"))," selector engines"),(0,l.kt)("p",null,"React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"},"attribute selectors")," and supports all attribute selector operators."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'page.click("_react=SubmitButton[enabled=true]");\npage.click("_vue=submit-button[enabled=true]");\n')),(0,l.kt)("p",null,"Learn more in the ",(0,l.kt)("a",{parentName:"p",href:"./selectors#react-selectors"},"react selectors documentation")," and the ",(0,l.kt)("a",{parentName:"p",href:"./selectors#vue-selectors"},"vue selectors documentation"),"."),(0,l.kt)("h4",{id:"-new-nth-and-visible-selector-engines"},"\u2728 New ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#n-th-element-selector"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"nth")))," and ",(0,l.kt)("a",{parentName:"h4",href:"./selectors#selecting-visible-elements"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"visible")))," selector engines"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./selectors#n-th-element-selector"},(0,l.kt)("inlineCode",{parentName:"a"},"nth"))," selector engine is equivalent to the ",(0,l.kt)("inlineCode",{parentName:"li"},":nth-match")," pseudo class, but could be combined with other selector engines."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./selectors#selecting-visible-elements"},(0,l.kt)("inlineCode",{parentName:"a"},"visible"))," selector engine is equivalent to the ",(0,l.kt)("inlineCode",{parentName:"li"},":visible")," pseudo class, but could be combined with other selector engines.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# select the first button among all buttons\nbutton.click("button >> nth=0")\n# or if you are using locators, you can use first, nth() and last\npage.locator("button").first.click()\n\n# click a visible button\nbutton.click("button >> visible=true")\n')),(0,l.kt)("h3",{id:"browser-versions"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 94.0.4595.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 91.0"),(0,l.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,l.kt)("h2",{id:"version-113"},"Version 1.13"),(0,l.kt)("h4",{id:"playwright"},"Playwright"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83d\udd96 Programmatic drag-and-drop support")," via the ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-drag-and-drop"},"page.drag_and_drop(source, target, **kwargs)")," API."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\ud83d\udd0e Enhanced HAR")," with body sizes for requests and responses. Use via ",(0,l.kt)("inlineCode",{parentName:"li"},"recordHar")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"),".")),(0,l.kt)("h4",{id:"tools"},"Tools"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Playwright Trace Viewer now shows parameters, returned values and ",(0,l.kt)("inlineCode",{parentName:"li"},"console.log()")," calls.")),(0,l.kt)("h4",{id:"new-and-overhauled-guides"},"New and Overhauled Guides"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/intro"},"Intro")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/auth"},"Authentication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/chrome-extensions"},"Chome Extensions"))),(0,l.kt)("h4",{id:"browser-versions-1"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 93.0.4576.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 90.0"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("h4",{id:"new-playwright-apis"},"New Playwright APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("inlineCode",{parentName:"li"},"baseURL")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-response#response-security-details"},"response.security_details()")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-response#response-server-addr"},"response.server_addr()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-drag-and-drop"},"page.drag_and_drop(source, target, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-frame#frame-drag-and-drop"},"frame.drag_and_drop(source, target, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-cancel"},"download.cancel()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-input-value"},"page.input_value(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-frame#frame-input-value"},"frame.input_value(selector, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-input-value"},"element_handle.input_value(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-fill"},"page.fill(selector, value, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-frame#frame-fill"},"frame.fill(selector, value, **kwargs)"),", and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-fill"},"element_handle.fill(value, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-select-option"},"page.select_option(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-frame#frame-select-option"},"frame.select_option(selector, **kwargs)"),", and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-select-option"},"element_handle.select_option(**kwargs)"))),(0,l.kt)("h2",{id:"version-112"},"Version 1.12"),(0,l.kt)("h4",{id:"\ufe0f-introducing-playwright-trace-viewer"},"\ud83e\udddf\u200d\u2642\ufe0f Introducing Playwright Trace Viewer"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/trace-viewer"},"Playwright Trace Viewer")," is a new GUI tool that helps exploring recorded Playwright traces after the script ran. Playwright traces let you examine:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"page DOM before and after each Playwright action"),(0,l.kt)("li",{parentName:"ul"},"page rendering before and after each Playwright action"),(0,l.kt)("li",{parentName:"ul"},"browser network during script execution")),(0,l.kt)("p",null,"Traces are recorded using the new ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-browsercontext#browser-context-tracing"},"browser_context.tracing")," API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\n\n# Start tracing before creating / navigating a page.\ncontext.tracing.start(screenshots=True, snapshots=True)\n\npage.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\ncontext.tracing.stop(path = "trace.zip")\n')),(0,l.kt)("p",null,"Traces are examined later with the Playwright CLI:"),(0,l.kt)("p",null,"That will open the following GUI:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/746130/121109654-d66c4480-c7c0-11eb-8d4d-eb70d2b03811.png",alt:"image"})),(0,l.kt)("p",null,"\ud83d\udc49 Read more in ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/trace-viewer"},"trace viewer documentation"),"."),(0,l.kt)("h4",{id:"browser-versions-2"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,l.kt)("li",{parentName:"ul"},"Microsoft Edge 91")),(0,l.kt)("h4",{id:"new-apis"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reducedMotion")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-emulate-media"},"page.emulate_media(**kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-event-request"},'browser_context.on("request")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-event-request-failed"},'browser_context.on("requestfailed")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-event-request-finished"},'browser_context.on("requestfinished")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-event-response"},'browser_context.on("response")')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tracesDir")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsertype#browser-type-launch-persistent-context"},"browser_type.launch_persistent_context(user_data_dir, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-tracing"},"browser_context.tracing")," API namespace"),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-download#download-page"},"download.page")," method")),(0,l.kt)("h2",{id:"version-111"},"Version 1.11"),(0,l.kt)("p",null,"\ud83c\udfa5  New video: ",(0,l.kt)("a",{parentName:"p",href:"https://youtu.be/_Jla6DyuEu4"},"Playwright: A New Test Automation Framework for the Modern Web")," (",(0,l.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1xFhZIJrdHkVe2CuMKOrni92HoG2SWslo0DhJJQMR1DI/edit?usp=sharing"},"slides"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We talked about Playwright"),(0,l.kt)("li",{parentName:"ul"},"Showed engineering work behind the scenes"),(0,l.kt)("li",{parentName:"ul"},"Did live demos with new features \u2728"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Special thanks")," to ",(0,l.kt)("a",{parentName:"li",href:"http://applitools.com/"},"applitools")," for hosting the event and inviting us!")),(0,l.kt)("h4",{id:"browser-versions-3"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 92.0.4498.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0b6"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("h4",{id:"new-apis-1"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"support for ",(0,l.kt)("strong",{parentName:"li"},"async predicates")," across the API in methods such as ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-wait-for-request"},"page.expect_request(url_or_predicate, **kwargs)")," and others"),(0,l.kt)("li",{parentName:"ul"},"new ",(0,l.kt)("strong",{parentName:"li"},"emulation devices"),": Galaxy S8, Galaxy S9+, Galaxy Tab S4, Pixel 3, Pixel 4"),(0,l.kt)("li",{parentName:"ul"},"new methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-wait-for-url"},"page.wait_for_url(url, **kwargs)")," to await navigations to URL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-video#video-delete"},"video.delete()")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-video#video-save-as"},"video.save_as(path)")," to manage screen recording"))),(0,l.kt)("li",{parentName:"ul"},"new options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"screen")," option in the ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," method to emulate ",(0,l.kt)("inlineCode",{parentName:"li"},"window.screen")," dimensions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"position")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-check"},"page.check(selector, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-uncheck"},"page.uncheck(selector, **kwargs)")," methods"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trial")," option to dry-run actions in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-check"},"page.check(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-uncheck"},"page.uncheck(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-click"},"page.click(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-dblclick"},"page.dblclick(selector, **kwargs)"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-hover"},"page.hover(selector, **kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-tap"},"page.tap(selector, **kwargs)"))))),(0,l.kt)("h2",{id:"version-110"},"Version 1.10"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java v1.10")," is ",(0,l.kt)("strong",{parentName:"li"},"now stable"),"!"),(0,l.kt)("li",{parentName:"ul"},"Run Playwright against ",(0,l.kt)("strong",{parentName:"li"},"Google Chrome")," and ",(0,l.kt)("strong",{parentName:"li"},"Microsoft Edge")," stable channels with the ",(0,l.kt)("a",{parentName:"li",href:"./browsers"},"new channels API"),"."),(0,l.kt)("li",{parentName:"ul"},"Chromium screenshots are ",(0,l.kt)("strong",{parentName:"li"},"fast")," on Mac & Windows.")),(0,l.kt)("h4",{id:"bundled-browser-versions"},"Bundled Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 90.0.4430.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 87.0b10"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,l.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Google Chrome 89"),(0,l.kt)("li",{parentName:"ul"},"Microsoft Edge 89")),(0,l.kt)("h4",{id:"new-apis-2"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./api/class-browsertype#browsertypelaunchoptions"},(0,l.kt)("inlineCode",{parentName:"a"},"browserType.launch()"))," now accepts the new ",(0,l.kt)("inlineCode",{parentName:"li"},"'channel'")," option. Read more in ",(0,l.kt)("a",{parentName:"li",href:"./browsers"},"our documentation"),".")),(0,l.kt)("h2",{id:"version-19"},"Version 1.9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/inspector"},"Playwright Inspector")," is a ",(0,l.kt)("strong",{parentName:"li"},"new GUI tool")," to author and debug your tests.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Line-by-line debugging")," of your Playwright scripts, with play, pause and step-through."),(0,l.kt)("li",{parentName:"ul"},"Author new scripts by ",(0,l.kt)("strong",{parentName:"li"},"recording user actions"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Generate element selectors")," for your script by hovering over elements."),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable to launch the Inspector"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Pause script execution")," with ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-pause"},"page.pause()")," in headed mode. Pausing the page launches ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/inspector"},"Playwright Inspector")," for debugging."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New has-text pseudo-class")," for CSS selectors. ",(0,l.kt)("inlineCode",{parentName:"li"},':has-text("example")')," matches any element containing ",(0,l.kt)("inlineCode",{parentName:"li"},'"example"')," somewhere inside, possibly in a child or a descendant element. See ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/selectors#text-selector"},"more examples"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Page dialogs are now auto-dismissed")," during execution, unless a listener for ",(0,l.kt)("inlineCode",{parentName:"li"},"dialog")," event is configured. ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/dialogs"},"Learn more")," about this."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Playwright for Python")," is ",(0,l.kt)("strong",{parentName:"li"},"now stable")," with an idiomatic snake case API and pre-built ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/docker"},"Docker image")," to run tests in CI/CD.")),(0,l.kt)("h4",{id:"browser-versions-4"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 90.0.4421.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 86.0b10"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,l.kt)("h4",{id:"new-apis-3"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-pause"},"page.pause()"),".")),(0,l.kt)("h2",{id:"version-18"},"Version 1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/selectors#selecting-elements-based-on-layout"},"Selecting elements based on layout")," with ",(0,l.kt)("inlineCode",{parentName:"p"},":left-of()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":right-of()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":above()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},":below()"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Playwright now includes ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/cli"},"command line interface"),", former playwright-cli."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"playwright --help\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-page#page-select-option"},"page.select_option(selector, **kwargs)")," now waits for the options to be present.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New methods to ",(0,l.kt)("a",{parentName:"p",href:"./actionability#assertions"},"assert element state")," like ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.14/api/class-page#page-is-editable"},"page.is_editable(selector, **kwargs)"),"."))),(0,l.kt)("h4",{id:"new-apis-4"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-is-checked"},"element_handle.is_checked()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-is-disabled"},"element_handle.is_disabled()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-is-editable"},"element_handle.is_editable()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-is-enabled"},"element_handle.is_enabled()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-is-hidden"},"element_handle.is_hidden()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-is-visible"},"element_handle.is_visible()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-is-checked"},"page.is_checked(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-is-disabled"},"page.is_disabled(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-is-editable"},"page.is_editable(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-is-enabled"},"page.is_enabled(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-is-hidden"},"page.is_hidden(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-page#page-is-visible"},"page.is_visible(selector, **kwargs)"),"."),(0,l.kt)("li",{parentName:"ul"},"New option ",(0,l.kt)("inlineCode",{parentName:"li"},"'editable'")," in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-elementhandle#element-handle-wait-for-element-state"},"element_handle.wait_for_element_state(state, **kwargs)"),".")),(0,l.kt)("h4",{id:"browser-versions-5"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.1")),(0,l.kt)("h2",{id:"version-17"},"Version 1.7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New Java SDK"),": ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"Playwright for Java")," is now on par with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"JavaScript"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"Python")," and ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},".NET bindings"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/selectors"},"new CSS extensions")," and there's more coming soon."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New website"),": The docs website at ",(0,l.kt)("a",{parentName:"li",href:"https://playwright.dev/"},"playwright.dev")," has been updated and is now built with ",(0,l.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/"},"Docusaurus"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),(0,l.kt)("h4",{id:"new-apis-5"},"New APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browsercontext#browser-context-storage-state"},"browser_context.storage_state(**kwargs)")," to get current state for later reuse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"storageState")," option in ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)")," and ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.14/api/class-browser#browser-new-page"},"browser.new_page(**kwargs)")," to setup browser context state.")),(0,l.kt)("h4",{id:"browser-versions-6"},"Browser Versions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),(0,l.kt)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),(0,l.kt)("li",{parentName:"ul"},"WebKit 14.1")))}d.isMDXComponent=!0}}]);