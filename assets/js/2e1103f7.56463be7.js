"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[62909],{6723:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return f},default:function(){return d}});var s=a(87462),r=a(63366),n=(a(67294),a(3905)),i=a(26396),l=a(58215),o=["components"],p={id:"class-fixtures",title:"Fixtures"},u=void 0,c={unversionedId:"api/class-fixtures",id:"api/class-fixtures",isDocsHomePage:!1,title:"Fixtures",description:"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else.",source:"@site/docs/api/class-fixtures.mdx",sourceDirName:"api",slug:"/api/class-fixtures",permalink:"/docs/next/api/class-fixtures",tags:[],version:"current",frontMatter:{id:"class-fixtures",title:"Fixtures"},sidebar:"api",previous:{title:"Worker",permalink:"/docs/next/api/class-worker"},next:{title:"Playwright Test",permalink:"/docs/next/api/class-test"}},f=[{value:"fixtures.browser",id:"fixtures-browser",children:[],level:2},{value:"fixtures.browserName",id:"fixtures-browser-name",children:[],level:2},{value:"fixtures.context",id:"fixtures-context",children:[],level:2},{value:"fixtures.page",id:"fixtures-page",children:[],level:2},{value:"fixtures.request",id:"fixtures-request",children:[],level:2}],x={toc:f};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,s.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Playwright Test is based on the concept of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/test-fixtures"},"test fixtures"),". Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else."),(0,n.kt)("p",null,"Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test. Values prepared by the fixtures are merged into a single object that is available to the ",(0,n.kt)("inlineCode",{parentName:"p"},"test"),", hooks, annotations and other fixtures as a first parameter."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  // ...\n});\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  // ...\n});\n")))),(0,n.kt)("p",null,"Given the test above, Playwright Test will set up the ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," fixture before running the test, and tear it down after the test has finished. ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," fixture provides a ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," object that is available to the test."),(0,n.kt)("p",null,"Playwright Test comes with builtin fixtures listed below, and you can add your own fixtures as well. Playwright Test also ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions",title:"TestOptions"},"provides options")," to  configure ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-browser"},"fixtures.browser"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-context"},"fixtures.context")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-page"},"fixtures.page"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-browser"},"fixtures.browser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-browser-name"},"fixtures.browserName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-context"},"fixtures.context")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-page"},"fixtures.page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-fixtures#fixtures-request"},"fixtures.request"))),(0,n.kt)("h2",{id:"fixtures-browser"},"fixtures.browser"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser",title:"Browser"},"Browser"),">")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser",title:"Browser"},"Browser")," instance is shared between all tests in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/test-parallel"},"same worker")," - this makes testing efficient. However, each test runs in an isolated ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),"  and gets a fresh environment."),(0,n.kt)("p",null,"Learn how to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configure browser")," and see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions",title:"TestOptions"},"available options"),"."),(0,n.kt)("h2",{id:"fixtures-browser-name"},"fixtures.browserName"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",'"chromium"|"firefox"|"webkit"',">")),(0,n.kt)("p",null,"Name of the browser that runs tests. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"'chromium'"),". Useful to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/test-annotations"},"annotate tests")," based on the browser."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"test('skip this test in Firefox', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n  // ...\n});\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"test('skip this test in Firefox', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n  // ...\n});\n")))),(0,n.kt)("h2",{id:"fixtures-context"},"fixtures.context"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),">")),(0,n.kt)("p",null,"Isolated ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," instance, created for each test. Since contexts are isolated between each other, every test gets a fresh environment, even when multiple tests run in a single ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-browser",title:"Browser"},"Browser")," for maximum efficiency."),(0,n.kt)("p",null,"Learn how to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configure context")," and see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-testoptions",title:"TestOptions"},"available options"),"."),(0,n.kt)("p",null,"Default ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-page"},"fixtures.page")," belongs to this context."),(0,n.kt)("h2",{id:"fixtures-page"},"fixtures.page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page"),">")),(0,n.kt)("p",null,"Isolated ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-page",title:"Page"},"Page")," instance, created for each test. Pages are isolated between tests due to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-fixtures#fixtures-context"},"fixtures.context")," isolation."),(0,n.kt)("p",null,"This is the most common fixture used in a test."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('/signin');\n  await page.fill('#username', 'User');\n  await page.fill('#password', 'pwd');\n  await page.click('text=Sign in');\n  // ...\n});\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('/signin');\n  await page.fill('#username', 'User');\n  await page.fill('#password', 'pwd');\n  await page.click('text=Sign in');\n  // ...\n});\n")))),(0,n.kt)("h2",{id:"fixtures-request"},"fixtures.request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type: ","<",(0,n.kt)("a",{parentName:"li",href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext"),">")),(0,n.kt)("p",null,"Isolated ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext"},"APIRequestContext")," instance for each test."),(0,n.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ request }) => {\n  await request.post('/signin', {\n    data: {\n      username: 'user',\n      password: 'password'\n    }\n  });\n  // ...\n});\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ request }) => {\n  await request.post('/signin', {\n    data: {\n      username: 'user',\n      password: 'password'\n    }\n  });\n});\n")))))}d.isMDXComponent=!0}}]);