(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7715],{36219:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return u}});var n,r=a(22122),i=a(19756),o=(a(15007),a(64983)),d=a(99536),l=["components"],m={},s=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:m},c=d.Z;function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.mdx)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"implement-target-without-a-tag-manager"},"Implement Target without a tag manager"),(0,o.mdx)("p",null,"Information about implementing Adobe Target without using a tag manager or tags in Adobe Experience Platform."),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Tags in ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/cmp-implementing-target-using-adobe-launch.md#topic_5234DDAEB0834333BD6BA1B05892FC25"},"Adobe Experience Platform")," are the preferred method for implementing Target and the at.js library. The following information is not applicable when using tags in Adobe Experience Platform to implement Target."),(0,o.mdx)("p",null,"To access the Implementation page, click ",(0,o.mdx)("strong",{parentName:"p"},"Administration")," > ",(0,o.mdx)("strong",{parentName:"p"},"Implementation"),"."),(0,o.mdx)("p",null,"You can specify the following settings on this page:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Account details"),(0,o.mdx)("li",{parentName:"ul"},"Implementation methods"),(0,o.mdx)("li",{parentName:"ul"},"Profile API"),(0,o.mdx)("li",{parentName:"ul"},"Debugger tools"),(0,o.mdx)("li",{parentName:"ul"},"Privacy")),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You can override settings in the at.js library, rather than configuring them in the Target Standard/Premium UI or by using REST APIs. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md"},"targetGlobalSettings()"),"."),(0,o.mdx)("h2",{id:"account-details"},"Account details"),(0,o.mdx)("p",null,"You can view the following account details. These settings cannot be changed."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Setting"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Client Code"),(0,o.mdx)("td",{parentName:"tr",align:null},"The client code is a client-specific sequence of characters often required when using the Target APIs.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"IMS Organization ID"),(0,o.mdx)("td",{parentName:"tr",align:null},"This ID ties your implementation to your Adobe Experience Cloud account.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"On-Device Decisioning"),(0,o.mdx)("td",{parentName:"tr",align:null},'To enable on-device decisioning, slide the toggle to the "on" position.',(0,o.mdx)("br",null),"On-device decisioning lets you cache your A/B and Experience Targeting (XT) campaigns on your server and perform in-memory decisioning at near-zero latency. For more information, see ",(0,o.mdx)("a",{parentName:"td",href:"https://adobetarget-sdks.gitbook.io/docs/on-device-decisioning/introduction-to-on-device-decisioning"},"Introduction to on-device decisioning")," in the ",(0,o.mdx)("em",{parentName:"td"},"Adobe Target SDKs")," guide.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Include all existing on-device decisioning qualified activities in the artifact"),(0,o.mdx)("td",{parentName:"tr",align:null},"(Conditional) This option displays if you enable on-device decisioning.",(0,o.mdx)("br",null),'Slide the toggle to the "on" position if you want all your live Target activities that qualify for on-device decisioning to be automatically included in the artifact.',(0,o.mdx)("br",null),"Leaving this toggle off means you must re-create and activate any on-device decisioning activities in order for them to be included in the generated rules artifact.")))),(0,o.mdx)("h2",{id:"implementation-methods"},"Implementation methods"),(0,o.mdx)("p",null,"The following settings can be configured in the Implementation methods panel:"),(0,o.mdx)("h3",{id:"global-settings"},"Global settings"),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"These settings are applied to all Target .js libraries. After performing changes in the Implementation methods section, you must download the library and update it in your implementation."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Setting"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Page load enabled (Auto-create global mbox"),(0,o.mdx)("td",{parentName:"tr",align:null},"Select whether to embed the global mbox call in the at.js file to automatically fire on each page load.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Global mbox"),(0,o.mdx)("td",{parentName:"tr",align:null},"Select a name for the global mbox. By default, this name is  target-global-mbox.",(0,o.mdx)("br",null),"Special characters, including ampersands (&), can be used in mbox names with at.js.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Timeout (seconds)"),(0,o.mdx)("td",{parentName:"tr",align:null},"If Target does not respond with content within the defined period, the server call times out and default content is displayed. Additional calls continue to be attempted during the visitor's session. The default is 5 seconds.",(0,o.mdx)("br",null),"The at.js library uses the timeout setting in ",(0,o.mdx)("inlineCode",{parentName:"td"},"XMLHttpRequest"),". The timeout starts when the request is fired and stops when Target gets a response from the server. For more information, see ",(0,o.mdx)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout"},"XMLHttpRequest.timeout")," on the Mozilla Developer Network.",(0,o.mdx)("br",null),"If the specified timeout occurs before receiving the response, default content is shown and the visitor might be counted as a participant in an activity because all data collection happens on the Target edge. If the request reaches the Target edge, the visitor is counted.",(0,o.mdx)("br",null),"Consider the following when configuring the timeout setting:",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"If the value is too low, users might see default content most of the time, although the visitor could be counted as a participant in the activity."),(0,o.mdx)("li",null,"If the value is too high, visitors might see blank regions on your web page or blank pages if you use body hiding for extended periods of time.")),"To get a better understanding of mbox response times, look at the Network tab in your browser's Developer Tools. You can also use third-party web performance monitoring tools, such as Catchpoint.",(0,o.mdx)("br",null),(0,o.mdx)("strong",{parentName:"td"},"Note"),": The ",(0,o.mdx)("a",{parentName:"td",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/targetgobalsettings.md"},"visitorApiTimeout")," setting ensures that Target doesn't wait for the Visitor API response for too long. This setting and the Timeout setting for at.js described here do not affect each other.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Profile Lifetime"),(0,o.mdx)("td",{parentName:"tr",align:null},"This setting determines how long visitor profiles are stored. By default, profiles are stored for two weeks. This setting can be increased up to 90 days.",(0,o.mdx)("br",null),"To change the  Profile Lifetime  setting, contact ",(0,o.mdx)("a",{parentName:"td",href:"https://experienceleague.corp.adobe.com/docs/target/using/cmp-resources-and-contact-information.html#reference_ACA3391A00EF467B87930A450050077C"},"Client Care"),".")))),(0,o.mdx)("h3",{id:"main-implementation-method"},"Main implementation method"),(0,o.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Adobe Target supports both at.js 1.",(0,o.mdx)("em",{parentName:"p"},"x")," and at.js 2.",(0,o.mdx)("em",{parentName:"p"},"x"),". Upgrade to the most recent update of either major version of at.js to ensure that you are running a supported version."),(0,o.mdx)("p",null,"To download the desired at.js version, click the appropriate ",(0,o.mdx)("strong",{parentName:"p"},"Download")," button."),(0,o.mdx)("p",null,"To edit at.js settings, click ",(0,o.mdx)("strong",{parentName:"p"},"Edit")," next to the desired at.js version. "),(0,o.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Before changing these default settings, please consult with ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/cmp-resources-and-contact-information.html#reference_ACA3391A00EF467B87930A450050077C"},"Client Care")," so you don't affect your current implementation."),(0,o.mdx)("p",null,"In addition to the settings explained above, the following specific at.js settings are also available:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Setting"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Custom Library Header"),(0,o.mdx)("td",{parentName:"tr",align:null},"Add any custom JavaScript to include at the top of the library.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Custom Library Footer"),(0,o.mdx)("td",{parentName:"tr",align:null},"Add any custom JavaScript to include at the bottom of the library.")))),(0,o.mdx)("h3",{id:"profile-api"},"Profile API"),(0,o.mdx)("p",null,"Enable or disable authentication for batch updates via API and generate a profile authentication token."),(0,o.mdx)("p",null,"For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-considerations-before-you-implement-target/methods-to-get-data-into-target/profile-api-settings.md"},"Profile API settings"),"."),(0,o.mdx)("h3",{id:"debugger-tools"},"Debugger tools"),(0,o.mdx)("p",null,"Generate an authorization token to use advanced Target debugging tools. Click ",(0,o.mdx)("strong",{parentName:"p"},"Generate New Authentication Token"),"."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/cb523/debugger-auth-token.webp 320w","/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/797b9/debugger-auth-token.webp 640w","/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/4b075/debugger-auth-token.webp 1280w","/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/a0d74/debugger-auth-token.webp 1296w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/72799/debugger-auth-token.png 320w","/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/6af66/debugger-auth-token.png 640w","/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/21b4d/debugger-auth-token.png 1280w","/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/86a1e/debugger-auth-token.png 1296w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/a0a086d849a16b8d2310499b5691d0fe/21b4d/debugger-auth-token.png",alt:"Generate New Authentication Token",title:"Generate New Authentication Token",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"privacy"},"Privacy"),(0,o.mdx)("p",null,"These settings allow you to use Target in compliance with applicable data privacy laws."),(0,o.mdx)("p",null,"Choose the desired setting from the Obfuscate Visitor IP address drop-down list:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Last octet obfuscation"),(0,o.mdx)("li",{parentName:"ul"},"Entire IP obfuscation"),(0,o.mdx)("li",{parentName:"ul"},"None")),(0,o.mdx)("p",null,"For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-considerations-before-you-implement-target/privacy/privacy.md"},"Privacy"),"."),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The Legacy Browser Support option was available in at.js version 0.9.3 and earlier. This option was removed in at.js version 0.9.4. For a list of browsers supported by at.js, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-considerations-before-you-implement-target/supported-browsers.md"},"Supported Browsers"),".",(0,o.mdx)("br",null),"Legacy browsers are older browsers that do not fully support CORS (Cross Origin Resource Sharing). These browsers include: Internet Explorer browsers earlier than version 11 and Safari versions 6 and below. If Legacy Browser Support was disabled, Target did not deliver content or count visitors in reports on these browsers. If this option was enabled, it is recommended to do quality assurance across older browsers to ensure a good customer experience."),(0,o.mdx)("h2",{id:"download-atjs"},"Download at.js"),(0,o.mdx)("p",null,"Instructions to download the library using the Target interface or the Download API."),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null," ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/cmp-implementing-target-using-adobe-launch.md#topic_5234DDAEB0834333BD6BA1B05892FC25"},"Adobe Experience Platform")," is the preferred method for implementing Target and the at.js library. The following information is not applicable when using tags in Adobe Experience Platform to implement Target."),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null," Adobe Target supports both at.js 1.",(0,o.mdx)("em",{parentName:"p"},"x")," and at.js 2.",(0,o.mdx)("em",{parentName:"p"},"x"),". Please upgrade to the most recent update of either major version of at.js to ensure that you are running a supported version. For more information about what's in each version, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md#reference_DBB5EDB79EC44E558F9E08D4774A0F7A"},"at.js Version Details"),"."),(0,o.mdx)("h3",{id:"download-atjs-using-the-target-interface"},"Download at.js using the Target interface"),(0,o.mdx)("p",null,"To download at.js from the Target interface:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Click ",(0,o.mdx)("strong",{parentName:"li"},"Administration")," > ",(0,o.mdx)("strong",{parentName:"li"},"Implementation"),". "),(0,o.mdx)("li",{parentName:"ol"},"From the Implementation Methods section, click the ",(0,o.mdx)("strong",{parentName:"li"},"Download")," button next to the desired at.js version.")),(0,o.mdx)("h3",{id:"download-atjs-using-the-target-download-api"},"Download at.js using the Target Download API"),(0,o.mdx)("p",null,"To download at.js using the API."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Get your client code."),(0,o.mdx)("p",{parentName:"li"},"Your client code is available at the top of the ",(0,o.mdx)("strong",{parentName:"p"},"Administration")," > ",(0,o.mdx)("strong",{parentName:"p"},"Implementation")," page of the Target interface. ")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Get your admin number."),(0,o.mdx)("p",{parentName:"li"},"Load this URL:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"https://admin.testandtarget.omniture.com/rest/v1/endpoint/<varname>client code</varname>\n")),(0,o.mdx)("p",{parentName:"li"},"Replace ",(0,o.mdx)("inlineCode",{parentName:"p"},"client code")," with the client code from Step 1."),(0,o.mdx)("p",{parentName:"li"},"The result of loading this URL should look similar to the following example:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'{ \n  "api": "https://admin6.testandtarget.omniture.com/admin/rest/v1" \n}\n')),(0,o.mdx)("p",{parentName:"li"},'In this example, "6" is the admin number. ')),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Download at.js."),(0,o.mdx)("p",{parentName:"li"},"Load this URL with the following structure:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},"https://admin<varname>admin number</varname>.testandtarget.omniture.com/admin/rest/v1/libraries/atjs/download?client=<varname>client code</varname>&version=<version number>\n")),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Replace ",(0,o.mdx)("inlineCode",{parentName:"p"},"admin number")," with your admin number. ")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Replace ",(0,o.mdx)("inlineCode",{parentName:"p"},"client code")," with the client code from Step 1. ")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Replace ",(0,o.mdx)("inlineCode",{parentName:"p"},"version number")," with the desired at.js version number (for example, 2.2)."),(0,o.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",{parentName:"li"},"The Target team maintains only two versions of at.js—the current version and the second-latest version. Please upgrade at.js as necessary to ensure that you are running a supported version. For more information about what's in each version, see ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/target-atjs-versions.md#reference_DBB5EDB79EC44E558F9E08D4774A0F7A"},"at.js Version Details"),"."))),(0,o.mdx)("p",{parentName:"li"},"Loading this URL starts the download of your customized at.js file."))),(0,o.mdx)("h2",{id:"atjs-implementation"},"at.js implementation"),(0,o.mdx)("p",null,"at.js should be implemented in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<head>")," element of every page of your website. "),(0,o.mdx)("p",null,"A typical implementation of Target not using a tag manager, such as tags in ",(0,o.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/atjs/how-to-deployatjs/cmp-implementing-target-using-adobe-launch.md#topic_5234DDAEB0834333BD6BA1B05892FC25"},"Adobe Experience Platform")," looks like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'<!doctype html> \n<html> \n<head> \n    <meta charset="utf-8"> \n    <title>Title of the Page</title> \n    \x3c!--Preconnect and DNS-Prefetch to improve page load time--\x3e \n    <link rel="preconnect" href="//<client code>.tt.omtrdc.net"> \n    <link rel="dns-prefetch" href="//<client code>.tt.omtrdc.net"> \n    \x3c!--/Preconnect and DNS-Prefetch--\x3e \n    \x3c!--Data Layer to enable rich data collection and targeting--\x3e \n    <script> \n        var digitalData = { \n            "page": { \n                "pageInfo": { \n                    "pageName": "Home" \n                } \n            } \n        }; \n    <\/script> \n    \x3c!--/Data Layer--\x3e \n    \x3c!-- targetPageParams(), targetPageParamsAll(), Data Providers or targetGlobalSettings() functions to enrich the visitor profile or modify the library settings--\x3e \n    <script> \n        targetPageParams = function() { \n            return { \n                "a": 1, \n                "b": 2, \n                "pageName": digitalData.page.pageInfo.pageName, \n                "profile": { \n                    "age": 26, \n                    "country": { \n                        "city": "San Francisco" \n                    } \n                } \n            }; \n        }; \n    <\/script> \n    \x3c!--/targetPageParams()--\x3e \n \n    \x3c!--jQuery or other helper libraries should be implemented before at.js if you would like to use their methods in Target--\x3e \n    <script src="jquery-3.3.1.min.js"><\/script> \n    \x3c!--/jQuery--\x3e \n    \x3c!--Target\'s JavaScript SDK, at.js--\x3e \n    <script src="at.js"><\/script> \n    \x3c!--/at.js--\x3e \n</head>\n<body> \n    The default content of the page \n</body> \n</html>\n')),(0,o.mdx)("p",null,"Consider the following important notes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The HTML5 Doctype (for example, ",(0,o.mdx)("inlineCode",{parentName:"li"},"<!doctype html>"),") should be used. Unsupported or older doctypes could result in Target not being able to make a request. "),(0,o.mdx)("li",{parentName:"ul"},"Preconnect and Prefetch are options that might help your web pages load faster. If you use these configurations, ensure that you replace ",(0,o.mdx)("inlineCode",{parentName:"li"},"<client code>")," with your own client code, which you can obtain from the ",(0,o.mdx)("strong",{parentName:"li"},"Administration")," > **Implementation page. "),(0,o.mdx)("li",{parentName:"ul"},"If you have a data layer, it is optimal to define as much of it as possible in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"<head>")," of your pages before at.js loads. This placement provides the maximum ability to use this information in Target for personalization. "),(0,o.mdx)("li",{parentName:"ul"},"Special Target functions, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"targetPageParams()"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"targetPageParamsAll()"),", Data Providers, and ",(0,o.mdx)("inlineCode",{parentName:"li"},"targetGlobalSettings()")," should be defined after your data layer and before at.js loads. Alternatively, these functions could be saved in the Library Header section of the Edit at.js Settings page and saved as part of the at.js library itself. For more information on these functions, see ",(0,o.mdx)("a",{parentName:"li",href:"/target-developers/help/c-implementing-target/c-implementing-target-for-client-side-web/cmp-atjs-functions.md"},"at.js functions"),". "),(0,o.mdx)("li",{parentName:"ul"},"If you use JavaScript helper libraries, such as jQuery, include them before Target so you can use their syntax and methods when building Target experiences. "),(0,o.mdx)("li",{parentName:"ul"},"Include at.js in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"<head>")," of your pages.")),(0,o.mdx)("h2",{id:"track-conversions"},"Track conversions"),(0,o.mdx)("p",null,'The Order Confirmation mbox records details about orders on your site and allows reporting based on revenue and orders. The Order Confirmation mbox can also drive recommendation algorithms, such as "People who bought product x also bought product y."'),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"If users make purchases on your website, Adobe recommends implementing an Order Confirmation mbox even if you use Analytics for Target (A4T) for your reporting."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In your order details page, insert the mbox script following the model below.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Replace the WORDS IN CAPITAL LETTERS with either dynamic or static values from your catalog."),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",{parentName:"li"},"Use comma delimiting to separate multiple product IDs."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Tip:")," You can also pass order information in any mbox (it does not need to be named ",(0,o.mdx)("inlineCode",{parentName:"p"},"orderConfirmPage"),"). You can also pass order information in multiple mboxes within the same campaign."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre"},'<script type="text/javascript"> \nadobe.target.trackEvent({ \n    "mbox": "orderConfirmPage", \n    "params":{  \n        "orderId": "ORDER ID FROM YOUR ORDER PAGE",  \n        "orderTotal": "ORDER TOTAL FROM YOUR ORDER PAGE",  \n        "productPurchasedId": "PRODUCT ID FROM YOUR ORDER PAGE, PRODUCT ID2, PRODUCT ID3"  \n    } \n}); \n<\/script> \n')))),(0,o.mdx)("p",null,"The Order Confirmation mbox uses the following parameters:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"orderId"),(0,o.mdx)("td",{parentName:"tr",align:null},"Unique value to identify an order for conversion counting.",(0,o.mdx)("br",null),"The ",(0,o.mdx)("inlineCode",{parentName:"td"},"orderId")," must be unique. Duplicate orders are ignored in reports.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"orderTotal"),(0,o.mdx)("td",{parentName:"tr",align:null},"Monetary value of the purchase.",(0,o.mdx)("br",null),"Do not pass the currency symbol. Use a decimal point (not a comma) to indicate decimal values.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"productPurchasedId  (Optional)"),(0,o.mdx)("td",{parentName:"tr",align:null},"Comma-separated list of product IDs purchased in the order.",(0,o.mdx)("br",null),"These product IDs display in the audit report to support additional reporting analysis.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-atjs-how-to-deployatjs-implement-target-without-a-tag-manager-md-03fcbd92b77d457a9a6c.js.map