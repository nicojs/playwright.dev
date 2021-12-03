"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[34894],{4233:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=(a(26396),a(58215),["components"]),o={id:"protractor",title:"Migrating from Protractor"},p=void 0,s={unversionedId:"protractor",id:"version-1.15/protractor",isDocsHomePage:!1,title:"Migrating from Protractor",description:"- Migration Principes",source:"@site/versioned_docs/version-1.15/protractor.mdx",sourceDirName:".",slug:"/protractor",permalink:"/docs/1.15/protractor",tags:[],version:"1.15",frontMatter:{id:"protractor",title:"Migrating from Protractor"},sidebar:"version-1.15/docs",previous:{title:"Videos",permalink:"/docs/1.15/videos"},next:{title:"Docker",permalink:"/docs/1.15/docker"}},c=[{value:"Migration Principes",id:"migration-principes",children:[],level:2},{value:"Cheat Sheet",id:"cheat-sheet",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Polyfilling <code>waitForAngular</code>",id:"polyfilling-waitforangular",children:[],level:2},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],u={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#migration-principes"},"Migration Principes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cheat-sheet"},"Cheat Sheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#polyfilling-waitforangular"},"Polyfilling ",(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#playwright-test-super-powers"},"Playwright Test Super Powers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-reading"},"Further Reading"))),(0,i.kt)("h2",{id:"migration-principes"},"Migration Principes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'No need for "webdriver-manager" / Selenium.'),(0,i.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ElementFinder"},"ElementFinder")," \u21c4 ",(0,i.kt)("a",{parentName:"li",href:"./api/class-locator"},"Playwright Test Locator")),(0,i.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," \u21c4 Playwright Test ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/actionability"},"auto-waiting")),(0,i.kt)("li",{parentName:"ul"},"Don\u2019t forget to await in Playwright Test")),(0,i.kt)("h2",{id:"cheat-sheet"},"Cheat Sheet"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Protractor"),(0,i.kt)("th",{parentName:"tr",align:null},"Playwright Test"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.model('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-model=\"...\"]')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.css('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('...')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.repeater('...'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-repeat=\"...\"]')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element(by.cssContainingText('..1..', '..2..'))")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator('..1.. >> text=\"..2..\"')"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"element.all")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.locator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"browser.get(url)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"await page.goto(url)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"browser.getCurrentUrl()")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"page.url()"))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Protractor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('angularjs homepage todo list', function() {\n  it('should add a todo', function() {\n    browser.get('https://angularjs.org');\n\n    element(by.model('todoList.todoText')).sendKeys('first test');\n    element(by.css('[value=\"add\"]')).click();\n\n    var todoList = element.all(by.repeater('todo in todoList.todos'));\n    expect(todoList.count()).toEqual(3);\n    expect(todoList.get(2).getText()).toEqual('first test');\n\n    // You wrote your first test, cross it off the list\n    todoList.get(2).element(by.css('input')).click();\n    var completedAmount = element.all(by.css('.done-true'));\n    expect(completedAmount.count()).toEqual(2);\n  });\n});\n")),(0,i.kt)("p",null,"Line-by-line migration to Playwright Test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test'); // 1\n\ntest.describe('angularjs homepage todo list', function() {\n  test('should add a todo', async function({page}) { // 2, 3\n    await page.goto('https://angularjs.org'); // 4\n\n    await page.locator('[ng-model=\"todoList.todoText\"]').fill('first test');\n    await page.locator('[value=\"add\"]').click();\n\n    var todoList = page.locator('[ng-repeat=\"todo in todoList.todos\"]'); // 5\n    await expect(todoList).toHaveCount(3);\n    await expect(todoList.nth(2)).toHaveText('first test', {\n      useInnerText: true,\n    });\n\n    // You wrote your first test, cross it off the list\n    await todoList.nth(2).locator('input').click();\n    var completedAmount = page.locator('.done-true');\n    await expect(completedAmount).toHaveCount(2);\n  });\n}\n")),(0,i.kt)("p",null,"Migration highlights (see inline comments in the Playwright Test code snippet):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each Playwright Test file has explicit import of the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"expect")," functions"),(0,i.kt)("li",{parentName:"ol"},"Test function is marked with ",(0,i.kt)("inlineCode",{parentName:"li"},"async")),(0,i.kt)("li",{parentName:"ol"},"Playwright Test is given a ",(0,i.kt)("inlineCode",{parentName:"li"},"page")," as one of its parameters. This is one of the many ",(0,i.kt)("a",{parentName:"li",href:"./api/class-fixtures"},"useful fixtures")," in Playwright Test."),(0,i.kt)("li",{parentName:"ol"},"Almost all Playwright calls are prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"await")),(0,i.kt)("li",{parentName:"ol"},"Locator creation with ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.15/api/class-page#page-locator"},"page.locator(selector)")," is one of the few methods that is sync.")),(0,i.kt)("h2",{id:"polyfilling-waitforangular"},"Polyfilling ",(0,i.kt)("inlineCode",{parentName:"h2"},"waitForAngular")),(0,i.kt)("p",null,"Playwright Test has built-in ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.15/actionability"},"auto-waiting")," that makes protractor's ",(0,i.kt)("a",{parentName:"p",href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"},(0,i.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," unneeded in general case."),(0,i.kt)("p",null,"However, it might come handy in some edge cases. Here's how to polyfill ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForAngular")," function in Playwright Test:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure you have protractor installed in your package.json")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polyfill function"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function waitForAngular(page) {\n\u200bconst clientSideScripts = require('protractor/built/clientsidescripts.js');\n\n\u200basync function executeScriptAsync(page, script, ...scriptArgs) {\n  \u200bawait page.evaluate(`\n    \u200bnew Promise((resolve, reject) => {\n      \u200bconst callback = (errMessage) => {\n        \u200bif (errMessage)\n          \u200breject(new Error(errMessage));\n        \u200belse\n          \u200bresolve();\n      \u200b};\n      \u200b(function() {${script}}).apply(null, [...${JSON.stringify(scriptArgs)}, callback]);\n    \u200b})\n  \u200b`);\n\u200b}\n\n\u200bawait executeScriptAsync(page, clientSideScripts.waitForAngular, '');\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Polyfill usage"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const page = await context.newPage();\nawait page.goto('https://example.org');\nawait waitForAngular(page);\n")))),(0,i.kt)("h2",{id:"playwright-test-super-powers"},"Playwright Test Super Powers"),(0,i.kt)("p",null,"Once you're on Playwright Test, you get a lot!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Full zero-configuration TypeScript support"),(0,i.kt)("li",{parentName:"ul"},"Run tests across ",(0,i.kt)("strong",{parentName:"li"},"all web engines")," (Chrome, Firefox, Safari) on ",(0,i.kt)("strong",{parentName:"li"},"any popular operating system")," (Windows, MacOS, Ubuntu)"),(0,i.kt)("li",{parentName:"ul"},"Full support for multiple origins, ",(0,i.kt)("a",{parentName:"li",href:"./api/class-frame"},"(i)frames"),", ",(0,i.kt)("a",{parentName:"li",href:"./multi-pages"},"tabs and contexts")),(0,i.kt)("li",{parentName:"ul"},"Run tests in parallel across multiple browsers"),(0,i.kt)("li",{parentName:"ul"},"Built-in test artifact collection: ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#record-video"},"video recording"),", ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#automatic-screenshots"},"screenshots")," and ",(0,i.kt)("a",{parentName:"li",href:"./test-configuration#record-test-trace"},"playwright traces"))),(0,i.kt)("p",null,"Also you get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./inspector"},"Playwright Inspector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./auth#code-generation"},"Playwright Test Code generation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./trace-viewer"},"Playwright Tracing")," for post-mortem debugging")),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"Learn more about Playwright Test runner:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./intro"},"Getting Started")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./test-fixtures"},"Fixtures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./api/class-locator"},"Locators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./selectors"},"Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./test-assertions"},"Assertions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./actionability"},"Auto-waiting"))))}m.isMDXComponent=!0}}]);