(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[884],{59683:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return x}});var n,r=a(22122),d=a(19756),l=(a(15007),a(64983)),m=a(99536),i=["components"],o={},p=(n="CodeBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),u={_frontmatter:o},s=m.Z;function x(e){var t=e.components,a=(0,d.Z)(e,i);return(0,l.mdx)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"get-offers"},"Get Offers"),(0,l.mdx)("h2",{id:"description"},"Description"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"GetOffers()")," is used to execute a decision and retrieve an experience from Adobe Target."),(0,l.mdx)("h2",{id:"method"},"Method"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"TargetClient.GetOffers")," method signature."),(0,l.mdx)(p,{slots:"heading, code",repeat:"1",languages:"dotnet",mdxType:"CodeBlock"}),(0,l.mdx)("h2",{id:"net"},".","NET"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dotnet"},"TargetDeliveryResponse TargetClient.GetOffers(TargetDeliveryRequest request)\n")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"TargetDeliveryRequest")," is created using ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetDeliveryRequest.Builder"),"."),(0,l.mdx)(p,{slots:"heading, code",repeat:"1",languages:"dotnet",mdxType:"CodeBlock"}),(0,l.mdx)("h2",{id:"net-1"},".","NET"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dotnet"},"TargetDeliveryRequest.Builder TargetDeliveryRequest.Builder()\n")),(0,l.mdx)("h2",{id:"parameters"},"Parameters"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetDeliveryRequest.Builder")," object has the following structure:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Required"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"context"),(0,l.mdx)("td",{parentName:"tr",align:null},"Context"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Specifies the context for the request")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sessionId"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Used for linking multiple Target requests")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thirdPartyId"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Your company’s identifier for the user that you can send with every call")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"cookies"),(0,l.mdx)("td",{parentName:"tr",align:null},"List"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"List of cookies returned in previous Target request of same user.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"customerIds"),(0,l.mdx)("td",{parentName:"tr",align:null},"Map"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Customer Ids in VisitorId-compatible format")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"execute"),(0,l.mdx)("td",{parentName:"tr",align:null},"ExecuteRequest"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"PageLoad or mboxes request to execute. Will be evaluated on server side immediately")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"prefetch"),(0,l.mdx)("td",{parentName:"tr",align:null},"PrefetchRequest"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Views, PageLoad or mboxes request to prefetch. Returns with notification token to be returned on conversion.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"notifications"),(0,l.mdx)("td",{parentName:"tr",align:null},"List"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Used to sent notifications regarding what prefetched content was displayed")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"requestId"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"The request ID that will be returned in the response. Generated automatically if not present.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"impressionId"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"If present,  second and subsequent requests with the same id will not increment impressions to activities/metrics. Generated automatically if not present.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"environmentId"),(0,l.mdx)("td",{parentName:"tr",align:null},"Long"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Valid client environment id. If not specified host will be determined base on the provided host.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"property"),(0,l.mdx)("td",{parentName:"tr",align:null},"Property"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Specifies the at_property via the token field. It can be used to control the scope for the delivery.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"trace"),(0,l.mdx)("td",{parentName:"tr",align:null},"Trace"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Enables trace for delivery API.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"qaMode"),(0,l.mdx)("td",{parentName:"tr",align:null},"QAMode"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Use this object to enable the QA mode in the request.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"locationHint"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Target edge cluster location hint. Used to target given edge cluster for this request.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"visitor"),(0,l.mdx)("td",{parentName:"tr",align:null},"Visitor"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Used to provide custom Visitor API object.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"id"),(0,l.mdx)("td",{parentName:"tr",align:null},"VisitorId"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Object that contains the identifiers for the visitor. Eg. tntId, thirdParyId, mcId, customerIds.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"experienceCloud"),(0,l.mdx)("td",{parentName:"tr",align:null},"ExperienceCloud"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Specifies integrations with Audience Manager and Analytics. Automatically populated using cookies, if not provided.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"tntId"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Primary identifier in Target for a user. Fetched from targetCookies. Auto-generated if not provided.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"mcId"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Used to merge and share data between different Adobe solutions(ECID). Fetched from targetCookies. Auto-generated if not provided.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"trackingServer"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"The Adobe Analytics Server in order for Adobe Target and Adobe Analytics to correctly stitch the data together.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"trackingServerSecure"),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"The Adobe Analytics Secure Server in order for Adobe Target and Adobe Analytics to correctly stitch the data together.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"decisioningMethod"),(0,l.mdx)("td",{parentName:"tr",align:null},"DecisioningMethod"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Can be used to explicitly set ON_DEVICE or HYBRID decisioning method for on-device decisioning")))),(0,l.mdx)("p",null,"The values of each field should conform to ",(0,l.mdx)("a",{parentName:"p",href:"../../api/delivery-api/index.md"},"Target View Delivery API")," request specification."),(0,l.mdx)("h2",{id:"response"},"Response"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetDeliveryResponse")," returned by ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetClient.GetOffers()")," has the following structure:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Request"),(0,l.mdx)("td",{parentName:"tr",align:null},"TargetDeliveryRequest​"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"../../api/delivery-api/index.md"},"Target View Delivery API")," request")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Response"),(0,l.mdx)("td",{parentName:"tr",align:null},"DeliveryResponse​"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"../../api/delivery-api/index.md"},"Target View Delivery API"),"* response")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Status"),(0,l.mdx)("td",{parentName:"tr",align:null},"HttpStatusCode"),(0,l.mdx)("td",{parentName:"tr",align:null},"Response HTTP status code")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Message"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Response status message or error message")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Locations"),(0,l.mdx)("td",{parentName:"tr",align:null},"Locations"),(0,l.mdx)("td",{parentName:"tr",align:null},"Target location names, including global mbox name and mboxes/views for which only remote decisioning is available")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"GetCookies"),(0,l.mdx)("td",{parentName:"tr",align:null},"Dictionary"),(0,l.mdx)("td",{parentName:"tr",align:null},"Returns a dictionary of session metadata for this user. This needs to be passed in next Target request for this user.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"VisitorState"),(0,l.mdx)("td",{parentName:"tr",align:null},"IDictionary"),(0,l.mdx)("td",{parentName:"tr",align:null},"Visitor state to be set on client side for Visitor API Javascript library initialization")))),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"TargetCookie")," object used for saving data for user session has the following structure:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Name"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cookie name")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Value"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cookie value")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"MaxAge"),(0,l.mdx)("td",{parentName:"tr",align:null},"int"),(0,l.mdx)("td",{parentName:"tr",align:null},"The ",(0,l.mdx)("inlineCode",{parentName:"td"},"MaxAge")," option is a convenience for setting Expires relative to the current time in seconds")))),(0,l.mdx)("p",null,"You don't have to worry about expiring the cookies. Target handles ",(0,l.mdx)("inlineCode",{parentName:"p"},"MaxAge")," inside the SDK."),(0,l.mdx)("h2",{id:"example"},"Example"),(0,l.mdx)(p,{slots:"heading, code",repeat:"1",languages:"dotnet",mdxType:"CodeBlock"}),(0,l.mdx)("h2",{id:"net-2"},".","NET"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dotnet"},'var targetClientConfig = new TargetClientConfig.Builder("acmeClient", "ABCDEF012345677890ABCDEF0@AdobeOrg")\n    .Build();\n\nvar targetClient = TargetClient.Create(targetClientConfig);\n\nvar mboxRequests = new List<MboxRequest> { new (index: 1, name: "a1-serverside-ab") };\n\nvar targetDeliveryRequest = new TargetDeliveryRequest.Builder()\n    .SetExecute(new ExecuteRequest(mboxes: mboxRequests))\n    .Build();\n\nvar targetResponse = targetClient.GetOffers(targetDeliveryRequest);\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-net-get-offers-md-a7066489af345144da9f.js.map