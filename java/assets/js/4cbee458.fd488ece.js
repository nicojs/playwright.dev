"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4353],{73243:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return c},default:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=(a(26396),a(58215),["components"]),o={id:"multithreading",title:"Multithreading"},l=void 0,h={unversionedId:"multithreading",id:"version-1.14/multithreading",isDocsHomePage:!1,title:"Multithreading",description:"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as [BrowserContext], [Browser], [Page] etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread.",source:"@site/versioned_docs/version-1.14/threading.mdx",sourceDirName:".",slug:"/multithreading",permalink:"/java/docs/1.14/multithreading",tags:[],version:"1.14",frontMatter:{id:"multithreading",title:"Multithreading"},sidebar:"version-1.14/docs",previous:{title:"Multi-page scenarios",permalink:"/java/docs/1.14/multi-pages"},next:{title:"Navigations",permalink:"/java/docs/1.14/navigations"}},c=[],p={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-browser",title:"Browser"},"Browser"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.14/api/class-page",title:"Page"},"Page")," etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread."),(0,i.kt)("p",null,"Here is an example where three playwright instances are created each on its own thread. Each instance launches its own browser process and runs the test against it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.*;\n\nimport java.nio.file.Paths;\n\nimport static java.util.Arrays.asList;\n\npublic class PlaywrightThread extends Thread {\n  private final String browserName;\n\n  private PlaywrightThread(String browserName) {\n    this.browserName = browserName;\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    // Create separate playwright thread for each browser.\n    for (String browserName: asList("chromium", "webkit", "firefox")) {\n      Thread thread = new PlaywrightThread(browserName);\n      thread.start();\n    }\n  }\n\n  @Override\n  public void run() {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType browserType = getBrowserType(playwright, browserName);\n      Browser browser = browserType.launch();\n      Page page = browser.newPage();\n      page.navigate("http://whatsmyuseragent.org/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("user-agent-" + browserName + ".png")));\n    }\n  }\n\n  private static BrowserType getBrowserType(Playwright playwright, String browserName) {\n    switch (browserName) {\n      case "chromium":\n        return playwright.chromium();\n      case "webkit":\n        return playwright.webkit();\n      case "firefox":\n        return playwright.firefox();\n      default:\n        throw new IllegalArgumentException();\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);