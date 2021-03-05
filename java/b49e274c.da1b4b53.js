(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),l=(a(0),a(151)),i=(a(154),a(155),{id:"input",title:"Input"}),r={unversionedId:"input",id:"input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/docs/input.mdx",slug:"/input",permalink:"/java/docs/input",version:"current",sidebar:"docs",previous:{title:"Extensibility",permalink:"/java/docs/extensibility"},next:{title:"Inspector",permalink:"/java/docs/inspector"}},o=[{value:"Text input",id:"text-input",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Select options",id:"select-options",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Mouse click",id:"mouse-click",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Type characters",id:"type-characters",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Upload files",id:"upload-files",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Focus element",id:"focus-element",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],s={toc:o};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#text-input"}),"Text input")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#checkboxes-and-radio-buttons"}),"Checkboxes and radio buttons")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#select-options"}),"Select options")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#mouse-click"}),"Mouse click")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#type-characters"}),"Type characters")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#keys-and-shortcuts"}),"Keys and shortcuts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#upload-files"}),"Upload files")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#focus-element"}),"Focus element"))),Object(l.b)("h2",{id:"text-input"},"Text input"),Object(l.b)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",Object(l.b)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",Object(l.b)("inlineCode",{parentName:"p"},"<input>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<textarea>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",Object(l.b)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Text input\npage.fill("#name", "Peter");\n\n// Date input\npage.fill("#date", "2020-02-02");\n\n// Time input\npage.fill("#time", "13-15");\n\n// Local datetime input\npage.fill("#local", "2020-03-02T05:15");\n\n// Input through label\npage.fill("text=First Name", "Peter");\n')),Object(l.b)("h3",{id:"api-reference"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagefillselector-value-options"}),"Page.fill(selector, value[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#framefillselector-value-options"}),"Frame.fill(selector, value[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandlefillvalue-options"}),"ElementHandle.fill(value[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"checkboxes-and-radio-buttons"},"Checkboxes and radio buttons"),Object(l.b)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",Object(l.b)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",Object(l.b)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",Object(l.b)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",Object(l.b)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Check the checkbox\npage.check("#agree");\n\n// Assert the checked state\nassertTrue(page.isChecked("#agree"));\n\n// Uncheck by input <label>.\npage.uncheck("#subscribe-label");\n\n// Select the radio button\npage.check("text=XL");\n')),Object(l.b)("h3",{id:"api-reference-1"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagecheckselector-options"}),"Page.check(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageischeckedselector-options"}),"Page.isChecked(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageuncheckselector-options"}),"Page.uncheck(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandlecheckoptions"}),"ElementHandle.check([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandleischecked"}),"ElementHandle.isChecked()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandleuncheckoptions"}),"ElementHandle.uncheck([options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"select-options"},"Select options"),Object(l.b)("p",null,"Selects one or multiple options in the ",Object(l.b)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",Object(l.b)("inlineCode",{parentName:"p"},"value"),", ",Object(l.b)("inlineCode",{parentName:"p"},"label")," or ",Object(l.b)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Single selection matching the value\npage.selectOption("select#colors", "blue");\n\n// Single selection matching the label\npage.selectOption("select#colors", new SelectOption().setLabel("Blue"));\n\n// Multiple selected items\npage.selectOption("select#colors", new String[] {"red", "green", "blue"});\n\n// Select the option via element handle\nElementHandle option = page.querySelector("#best-option");\npage.selectOption("select#colors", option);\n')),Object(l.b)("h3",{id:"api-reference-2"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageselectoptionselector-values-options"}),"Page.selectOption(selector, values[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#frameselectoptionselector-values-options"}),"Frame.selectOption(selector, values[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandleselectoptionvalues-options"}),"ElementHandle.selectOption(values[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"mouse-click"},"Mouse click"),Object(l.b)("p",null,"Performs a simple human click."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Generic click\npage.click("button#submit");\n\n// Double click\npage.dblclick("#item");\n\n// Right click\npage.click("#item", new Page.ClickOptions().setButton(MouseButton.RIGHT));\n\n// Shift + click\npage.click("#item", new Page.ClickOptions().setModifiers(Arrays.asList(KeyboardModifier.SHIFT)));\n\n// Hover over element\npage.hover("#item");\n\n// Click the top left corner\npage.click("#item", new Page.ClickOptions().setPosition(0, 0));\n')),Object(l.b)("p",null,"Under the hood, this and other pointer-related methods:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),Object(l.b)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",Object(l.b)("inlineCode",{parentName:"li"},"display:none"),", no ",Object(l.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(l.b)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),Object(l.b)("li",{parentName:"ul"},"scroll the element into view"),Object(l.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),Object(l.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(l.b)("h4",{id:"forcing-the-click"},"Forcing the click"),Object(l.b)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/actionability"}),"actionability")," checks and force the click:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.click("button#submit", new Page.ClickOptions().setForce(true));\n')),Object(l.b)("h4",{id:"programmatic-click"},"Programmatic click"),Object(l.b)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"}),Object(l.b)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.dispatchEvent("button#submit", "click");\n')),Object(l.b)("h3",{id:"api-reference-3"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageclickselector-options"}),"Page.click(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#frameclickselector-options"}),"Frame.click(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandleclickoptions"}),"ElementHandle.click([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagedblclickselector-options"}),"Page.dblclick(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#framedblclickselector-options"}),"Frame.dblclick(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandledblclickoptions"}),"ElementHandle.dblclick([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagehoverselector-options"}),"Page.hover(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#framehoverselector-options"}),"Frame.hover(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandlehoveroptions"}),"ElementHandle.hover([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagedispatcheventselector-type-eventinit-options"}),"Page.dispatchEvent(selector, type[, eventInit, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#framedispatcheventselector-type-eventinit-options"}),"Frame.dispatchEvent(selector, type[, eventInit, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandledispatcheventtype-eventinit"}),"ElementHandle.dispatchEvent(type[, eventInit])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"type-characters"},"Type characters"),Object(l.b)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Type character by character\npage.type("#area", "Hello World!");\n')),Object(l.b)("p",null,"This method will emit all the necessary keyboard events, with all the ",Object(l.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(l.b)("inlineCode",{parentName:"p"},"keyup"),", ",Object(l.b)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",Object(l.b)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Most of the time, ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pagefillselector-value-options"}),"Page.fill(selector, value[, options])")," will just work. You only need to type characters if there is special keyboard handling on the page."))),Object(l.b)("h3",{id:"api-reference-4"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagetypeselector-text-options"}),"Page.type(selector, text[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#frametypeselector-text-options"}),"Frame.type(selector, text[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandletypetext-options"}),"ElementHandle.type(text[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-keyboard#keyboardtypetext-options"}),"Keyboard.type(text[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Hit Enter\npage.press("#submit", "Enter");\n\n// Dispatch Control+Right\npage.press("#name", "Control+ArrowRight");\n\n// Press $ sign on keyboard\npage.press("#value", "$");\n')),Object(l.b)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," property of the keyboard events:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",Object(l.b)("inlineCode",{parentName:"li"},'"a"')," or ",Object(l.b)("inlineCode",{parentName:"li"},'"#"'),"."),Object(l.b)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",Object(l.b)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),Object(l.b)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",Object(l.b)("inlineCode",{parentName:"p"},'"a"')," and ",Object(l.b)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// <input id=name>\npage.press("#name", "Shift+A");\n\n// <input id=name>\npage.press("#name", "Shift+ArrowLeft");\n')),Object(l.b)("p",null,"Shortcuts such as ",Object(l.b)("inlineCode",{parentName:"p"},'"Control+o"')," or ",Object(l.b)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(l.b)("p",null,"Note that you still need to specify the capital ",Object(l.b)("inlineCode",{parentName:"p"},"A")," in ",Object(l.b)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",Object(l.b)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",Object(l.b)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),Object(l.b)("h3",{id:"api-reference-5"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagepressselector-key-options"}),"Page.press(selector, key[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#framepressselector-key-options"}),"Frame.press(selector, key[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandlepresskey-options"}),"ElementHandle.press(key[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-keyboard#keyboardpresskey-options"}),"Keyboard.press(key[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"upload-files"},"Upload files"),Object(l.b)("p",null,"You can select input files for upload using the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pagesetinputfilesselector-files-options"}),"Page.setInputFiles(selector, files[, options])")," method. It expects first argument to point to an ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," with the type ",Object(l.b)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// Select one file\npage.setInputFiles("input#upload", Paths.get("myfile.pdf"));\n\n// Select multiple files\npage.setInputFiles("input#upload", new Path[] {Paths.get("file1.txt"), Paths.get("file2.txt")});\n\n// Remove all the selected files\npage.setInputFiles("input#upload", new Path[0]);\n\n// Upload buffer from memory\npage.setInputFiles("input#upload", new FilePayload(\n  "file.txt", "text/plain", "this is test".getBytes(StandardCharsets.UTF_8)));\n')),Object(l.b)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageonfilechooserhandler"}),"Page.onFileChooser(handler)")," event or use a corresponding waiting method upon your action:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'FileChooser fileChooser = page.waitForFileChooser(() -> {\n  page.click("upload");\n});\nfileChooser.setFiles(Paths.get("myfile.pdf"));\n')),Object(l.b)("h3",{id:"api-reference-6"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-filechooser",title:"FileChooser"}),"FileChooser")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagesetinputfilesselector-files-options"}),"Page.setInputFiles(selector, files[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#framesetinputfilesselector-files-options"}),"Frame.setInputFiles(selector, files[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandlesetinputfilesfiles-options"}),"ElementHandle.setInputFiles(files[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"focus-element"},"Focus element"),Object(l.b)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'page.focus("input#name");\n')),Object(l.b)("h3",{id:"api-reference-7"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-page#pagefocusselector-options"}),"Page.focus(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-frame#framefocusselector-options"}),"Frame.focus(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle#elementhandlefocus"}),"ElementHandle.focus()"))),Object(l.b)("br",null))}p.isMDXComponent=!0},150:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return a?c.a.createElement(m,r(r({ref:t},s),{},{components:a})):c.a.createElement(m,r({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var s=2;s<l;s++)i[s]=a[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},152:function(e,t,a){"use strict";var n=a(0),c=a(153);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},153:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},154:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(152),i=a(150),r=a(55),o=a.n(r),s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(l.a)(),j=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(n.useState)(r),f=O[0],v=O[1],g=n.Children.toArray(e.children);if(null!=u){var N=j[u];null!=N&&N!==f&&b.some((function(e){return e.value===N}))&&v(N)}var y=function(e){v(e),null!=u&&h(u,e)},k=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},155:function(e,t,a){"use strict";var n=a(3),c=a(0),l=a.n(c);t.a=function(e){var t=e.children,a=e.hidden,c=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:c}),t)}}}]);