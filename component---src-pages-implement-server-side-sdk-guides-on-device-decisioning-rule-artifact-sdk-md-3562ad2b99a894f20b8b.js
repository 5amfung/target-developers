(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5657],{91863:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(15007),n(64983)),i=n(99536),s=["components"],d={},l={_frontmatter:d},p=i.Z;function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.mdx)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"downloading-storing-and-updating-the-rule-artifact-automatically-via-the-adobe-target-sdk"},"Downloading, Storing, and Updating the Rule Artifact Automatically via the Adobe Target SDK"),(0,o.mdx)("p",null,"This approach is best when you are able to initialize the Adobe Target SDK at the same time you initialize and start your web server. The rule artifact will be downloaded by the Adobe Target SDK and cached into memory before your web server application starts serving requests. Once your web application is up and running, all Adobe Target decisions will be executed using the in-memory rule artifact. The cached rule artifact will be updated based on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"pollingInterval")," you specify during the SDK initialization step."),(0,o.mdx)("h2",{id:"summary-of-steps"},"Summary of steps"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Install the SDK"),(0,o.mdx)("li",{parentName:"ol"},"Initialize the SDK"),(0,o.mdx)("li",{parentName:"ol"},"Store and Use the Rule Artifact")),(0,o.mdx)("h2",{id:"install-the-sdk"},"Install the SDK"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"NPM")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"npm i @adobe/target-nodejs-sdk -P\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"MVN")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.adobe.target</groupId>\n    <artifactId>java-sdk</artifactId>\n    <version>1.0</version>\n</dependency>\n")),(0,o.mdx)("h2",{id:"initialize-the-sdk"},"Initialize the SDK"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"First, import the SDK. Import to the same file from which you can control your server start-up.")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Node.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const TargetClient = require("@adobe/target-nodejs-sdk");\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"import com.adobe.target.edge.client.ClientConfig;\nimport com.adobe.target.edge.client.TargetClient;\n")),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"To configure the SDK, use the create method.")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Node.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const CONFIG = {\n    client: "<your target client code>",\n    organizationId: "your EC org id",\n    decisioningMethod: "on-device",\n    pollingInterval : 300000,\n    events: {\n        clientReady: startWebServer\n    }\n};\n\nconst TargetClient = TargetClient.create(CONFIG);\n\nfunction startWebServer() {\n    //Adobe Target SDK has now downloaded the JSON Artifacts and is available in the memory.\n    //You can start your web server now to serve requests now.\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'ClientConfig config = ClientConfig.builder()\n    .client("<you target client code>")\n    .organizationId("<your EC org id>")\n    .build();\nTargetClient targetClient = TargetClient.create(config);\n')),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Both client and organizationId can be retrieved from Adobe Target by navigating to ",(0,o.mdx)("strong",{parentName:"li"},"Administration")," > ",(0,o.mdx)("strong",{parentName:"li"},"Implementation"),", as shown here.")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/cb523/asset-rule-artifact-3.webp 320w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/797b9/asset-rule-artifact-3.webp 640w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/4b075/asset-rule-artifact-3.webp 1280w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/f3ff0/asset-rule-artifact-3.webp 1920w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/e672b/asset-rule-artifact-3.webp 2172w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/72799/asset-rule-artifact-3.png 320w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/6af66/asset-rule-artifact-3.png 640w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/21b4d/asset-rule-artifact-3.png 1280w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/29114/asset-rule-artifact-3.png 1920w","/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/6976b/asset-rule-artifact-3.png 2172w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/target-developers/static/6d87e92d7dd1d0784641f75f957dfbd9/21b4d/asset-rule-artifact-3.png",alt:"alt image",title:"alt image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"store-and-use-the-rule-artifact"},"Store and Use the Rule Artifact"),(0,o.mdx)("p",null,"You do not need to manage the rule artifact yourself and calling the SDK methods should be straightforward."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Node.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'//req is the request object from the server request listener method\nconst targetCookie = req.cookies[TargetClient.TargetCookieName];\nconst request = {\n    context: {\n        channel: "web"\n    },\n    execute: {\n        mboxes: [{\n            address: { url: req.headers.host + req.originalUrl },\n            name: "on-device-homepage-banner"\n        }],\n    },\n};\n\nTargetClient.getOffers({\n    request,\n    targetCookie\n}).then(function(response) {\n    //This Target response is coming from the In-memory Target artifact.\n    console.log("Target response", response);\n}).catch(function(err) {\n    console.error("Target:", err);\n})\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'MboxRequest mbox = new MboxRequest().name("homepage").index(0);\nTargetDeliveryRequest request = TargetDeliveryRequest.builder()\n    .context(new Context().channel(ChannelType.WEB))\n    .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))\n    .build();\nTargetDeliveryResponse response = targetClient.getOffers(request);\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"NOTE"),": In the code sample above, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TargetClient")," object holds a reference to the in-memory rule artifact. When you use this object for invoking standard SDK methods, it uses the in-memory rule artifact for decisioning. If your application is structured such that you need to call the SDK methods in files other than the one that initializes and listens to client requests, and if those files do not have access to the TargetClient object, then you can download the JSON payload and store it in a local JSON file to be consumed on other files, which need to initialize the SDK. This is explained in the next ",(0,o.mdx)("em",{parentName:"p"},"section"),"."),(0,o.mdx)("p",null,"Here is an example that starts a web application after initializing the Adobe Target SDK."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Node.js")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const express = require("express");\nconst cookieParser = require("cookie-parser");\nconst TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n    client: "<your target client code>",\n    organizationId: "your EC org id",\n    decisioningMethod: "on-device",\n    pollingInterval : 300000,\n    events: {\n        clientReady: startWebServer\n    }\n};\n\nconst app = express();\nconst targetClient = TargetClient.create(CONFIG);\n\napp.use(cookieParser());\n\nfunction saveCookie(res, cookie) {\n  if (!cookie) {\n    return;\n  }\n\n  res.cookie(cookie.name, cookie.value, {maxAge: cookie.maxAge * 1000});\n}\n\nconst getResponseHeaders = () => ({\n  "Content-Type": "text/html",\n  "Expires": new Date().toUTCString()\n});\n\nfunction sendSuccessResponse(res, response) {\n  res.set(getResponseHeaders());\n  saveCookie(res, response.targetCookie);\n  res.status(200).send(response);\n}\n\nfunction sendErrorResponse(res, error) {\n  res.set(getResponseHeaders());\n  res.status(500).send(error);\n}\n\nfunction startWebServer() {\n    app.get(\'/*\', async (req, res) => {\n    const targetCookie = req.cookies[TargetClient.TargetCookieName];\n    const request = {\n        execute: {\n        mboxes: [{\n            address: { url: req.headers.host + req.originalUrl },\n            name: "on-device-homepage-banner" // Ensure that you have a LIVE Activity running on this location\n        }]\n        }};\n\n    try {\n        const response = await targetClient.getOffers({ request, targetCookie });\n        sendSuccessResponse(res, response);\n    } catch (error) {\n        console.error("Target:", error);\n        sendErrorResponse(res, error);\n    }\n    });\n\n    app.listen(3000, function () {\n    console.log("Listening on port 3000 and watching!");\n    });\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Java")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'import com.adobe.target.edge.client.ClientConfig;\nimport com.adobe.target.edge.client.TargetClient;\nimport com.adobe.target.delivery.v1.model.ChannelType;\nimport com.adobe.target.delivery.v1.model.Context;\nimport com.adobe.target.delivery.v1.model.ExecuteRequest;\nimport com.adobe.target.delivery.v1.model.MboxRequest;\nimport com.adobe.target.edge.client.entities.TargetDeliveryRequest;\nimport com.adobe.target.edge.client.model.TargetDeliveryResponse;\n\n@Controller\npublic class TargetController {\n\n  private TargetClient targetClient;\n\n  TargetController() {\n    // You should instantiate TargetClient in a Bean and inject the instance into this class \n    // but we show the code here for demonstration purpose.\n    ClientConfig config = ClientConfig.builder()\n        .client("<you target client code>")\n        .organizationId("<your EC org id>")\n        .build();\n    targetClient = TargetClient.create(config);\n  }\n\n  @GetMapping("/")\n  public String homePage() {\n    MboxRequest mbox = new MboxRequest().name("homepage").index(0);\n    TargetDeliveryRequest request = TargetDeliveryRequest.builder()\n        .context(new Context().channel(ChannelType.WEB))\n        .execute(new ExecuteRequest().mboxes(Arrays.asList(mbox)))\n        .build();\n    TargetDeliveryResponse response = targetClient.getOffers(request);\n    // ...\n  }\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-server-side-sdk-guides-on-device-decisioning-rule-artifact-sdk-md-3562ad2b99a894f20b8b.js.map