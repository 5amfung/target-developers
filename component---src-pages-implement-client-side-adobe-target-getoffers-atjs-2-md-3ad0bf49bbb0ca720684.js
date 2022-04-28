(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4821],{41728:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return x}});var a,r=n(22122),l=n(19756),d=(n(15007),n(64983)),m=n(99536),i=["components"],o={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:o},u=m.Z;function x(e){var t=e.components,n=(0,l.Z)(e,i);return(0,d.mdx)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adobetargetgetoffers---atjs-2x"},"adobe.target.getOffers() - at.js 2.x"),(0,d.mdx)("p",null,"This function lets you retrieve multiple offers by passing in multiple mboxes. Additionally, multiple offers can be retrieved for all views in active activities."),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"This function was introduced with at.js 2.x. This function is not available for at.js version 1.",(0,d.mdx)("em",{parentName:"p"},"x"),"."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Key"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required?"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"consumerId")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Default value is client's global mbox if not provided. This key is used to generate the supplemental data ID (SDID) used for A4T integration.",(0,d.mdx)("br",null),"When using ",(0,d.mdx)("inlineCode",{parentName:"td"},"getOffers()"),", each call generates a new SDID. If you have multiple mbox requests on the same page, and want to preserve the SDID (so that it matches the SDID from the target-global-mbox and the Adobe Analytics SDID), use the ",(0,d.mdx)("inlineCode",{parentName:"td"},"consumerId")," parameter.",(0,d.mdx)("br",null),"If ",(0,d.mdx)("inlineCode",{parentName:"td"},"getOffers()"),' includes three mboxes (named "mbox1", "mbox2", and "mbox3"), include: ',(0,d.mdx)("inlineCode",{parentName:"td"},'consumerId: "mbox1, mbox2, mbox3"')," in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"getOffers()")," call.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"decisioningMethod")),(0,d.mdx)("td",{parentName:"tr",align:null},"String"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"“server-side”, “on-device”, “hybrid”")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"request")),(0,d.mdx)("td",{parentName:"tr",align:null},"Object"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"See Requests table below.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"timeout")),(0,d.mdx)("td",{parentName:"tr",align:null},"Number"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Request timeout. If not specified the default at.js timeout is used.")))),(0,d.mdx)("h2",{id:"request"},"Request"),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Consult the ",(0,d.mdx)("a",{parentName:"p",href:"https://developers.adobetarget.com/api/delivery-api/#tag/Delivery-API"},"Delivery API documentation")," for information about the acceptable types for all fields listed below."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Field name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required?"),(0,d.mdx)("th",{parentName:"tr",align:null},"Limitations"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"request > id"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"One of ",(0,d.mdx)("inlineCode",{parentName:"td"},"tntId"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"thirdPartyId"),", or ",(0,d.mdx)("inlineCode",{parentName:"td"},"marketingCloudVisitorId")," is required.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > id > thirdPartyId"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum size = 128."),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > experienceCloud"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > experienceCloud > analytics"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null},"Adobe Analytics integration")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > experienceCloud > analytics > logging"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"The following must be implemented on page:",(0,d.mdx)("ul",null,(0,d.mdx)("li",null,"Visitor ID Service"),(0,d.mdx)("li",null,"Appmeasurement.js"))),(0,d.mdx)("td",{parentName:"tr",align:null},"The following values are supported:",(0,d.mdx)("br",null),(0,d.mdx)("strong",{parentName:"td"},"client_side"),": When specified, an analytics payload will be returned to the caller which should be used to send to Adobe Analytics via the Data Insertion API.",(0,d.mdx)("br",null),(0,d.mdx)("strong",{parentName:"td"},"server_side"),": This is the default value where the Target and Analytics backend will use the SDID to stitch the calls together for reporting purposes.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum count 50.",(0,d.mdx)("br",null),"Name not blank.",(0,d.mdx)("br",null),"Name length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 128.",(0,d.mdx)("br",null),"Value length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 5000.",(0,d.mdx)("br",null),'Name should not start with "profile".',(0,d.mdx)("br",null),'Not allowed names: "orderId", "orderTotal", "productPurchasedId".'),(0,d.mdx)("td",{parentName:"tr",align:null},"Pass in parameters to be used to retrieve relevant views in active activities.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > profileParameters"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximim count 50.",(0,d.mdx)("br",null),"Name not blank.",(0,d.mdx)("br",null),"Name length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 128.",(0,d.mdx)("br",null),"Value length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 5000.",(0,d.mdx)("br",null),"Accepts String values only.",(0,d.mdx)("br",null),'Name should not start with "profile".'),(0,d.mdx)("td",{parentName:"tr",align:null},"Pass in profile parameters to be used to retrieve relevant views in active activities.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > product"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > product -> id"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not blank.",(0,d.mdx)("br",null),"maximum size = 128."),(0,d.mdx)("td",{parentName:"tr",align:null},"Pass in product IDs to be used to retrieve relevant views in active activities.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > product > categoryId"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not blank.",(0,d.mdx)("br",null),"maximum size = 128."),(0,d.mdx)("td",{parentName:"tr",align:null},"Pass in product category IDs to be used to retrieve relevant views in activities.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > order"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > order > id"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum length = 250."),(0,d.mdx)("td",{parentName:"tr",align:null},"Pass in order IDs to be used to retrieve relevant views in in active activities.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > order > total"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Total ",(0,d.mdx)("inlineCode",{parentName:"td"},">=")," 0."),(0,d.mdx)("td",{parentName:"tr",align:null},"Pass in order totals to be used to retrieve relevant views in active activities.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > prefetch > views > order > purchasedProductIds"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"No blank values.",(0,d.mdx)("br",null),"Each value's max length 50.",(0,d.mdx)("br",null),"Concatenated and separated by comma.",(0,d.mdx)("br",null),"Product IDs total length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 250."),(0,d.mdx)("td",{parentName:"tr",align:null},"Pass in purchased product IDs to be used to retrieve relevant views in active activities.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > parameters"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum count 50.",(0,d.mdx)("br",null),"Name not blank.",(0,d.mdx)("br",null),"Name length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 128.",(0,d.mdx)("br",null),"Value length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 5000.",(0,d.mdx)("br",null),"Accepts String values only.",(0,d.mdx)("br",null),'Name should not start with "profile".',(0,d.mdx)("br",null),'Not allowed names: "orderId", "orderTotal", "productPurchasedId".'),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers with specified parameters when page loads.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > profileParameters"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum count 50.",(0,d.mdx)("br",null),"Name not blank.",(0,d.mdx)("br",null),"Name length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 128.",(0,d.mdx)("br",null),"Value length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<="),"256.",(0,d.mdx)("br",null),'Name should not start with "profile".',(0,d.mdx)("br",null),"Accepts String values only."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers with specified profile parameters when page loads.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > product"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > product -> id"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not blank.",(0,d.mdx)("br",null),"Maximum size = 128."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers with specified product IDs when page loads.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > product > categoryId"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not blank.",(0,d.mdx)("br",null),"Maximum size = 128."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers with specified product category IDs when page loads.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > order"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > order > id"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum length = 250."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers with specified order IDs when page loads.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > order > total"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},">=")," 0."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers with specified order totals when page loads.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > pageLoad > order > purchasedProductIds"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"No blank values.",(0,d.mdx)("br",null),"Each value's max length 50.",(0,d.mdx)("br",null),"Concatenated and separated by comma.",(0,d.mdx)("br",null),"Product IDs total length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 250."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers with specified purchased product IDs when page loads.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum size = 50.",(0,d.mdx)("br",null),"No null elements."),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes>mbox"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not blank.",(0,d.mdx)("br",null),"No '-clicked' suffix.",(0,d.mdx)("br",null),"Maximum size = 250.",(0,d.mdx)("br",null),"Allowed characters: `'-, .",(0,d.mdx)("em",{parentName:"td"},"\\/=:;&!@#$%^&*()"),"+"),(0,d.mdx)("td",{parentName:"tr",align:null},"?~[]{}'`")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes>mbox>index"),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not null.",(0,d.mdx)("br",null),"Unique.",(0,d.mdx)("br",null),(0,d.mdx)("inlineCode",{parentName:"td"},">=")," 0."),(0,d.mdx)("td",{parentName:"tr",align:null},"Note that the index does not represent the order in which the mboxes will be processed. Same as in a web page with several regional mboxes, the order in which they will be processed cannot be specified.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes > mbox > parameters"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum count = 50.",(0,d.mdx)("br",null),"Name not blank.",(0,d.mdx)("br",null),"Name length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 128.",(0,d.mdx)("br",null),"Accepts String values only.",(0,d.mdx)("br",null),"Value length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 5000.",(0,d.mdx)("br",null),'Name should not start with "profile."',(0,d.mdx)("br",null),'Not allowed names: "orderId", "orderTotal", "productPurchasedId".'),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers for a given mbox with the specified parameters.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes>mbox>profileParameters"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum count = 50.",(0,d.mdx)("br",null),"Name not blank.",(0,d.mdx)("br",null),"Name length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 128.",(0,d.mdx)("br",null),"Accepts String values only.",(0,d.mdx)("br",null),"Value length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<="),"256.",(0,d.mdx)("br",null),'Name should not start with "profile."'),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers for a given mbox with the specified profile parameters.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes>mbox > product"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes > mbox > product > id"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not blank.",(0,d.mdx)("br",null),"Maximum size = 128."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers for a given mbox with the specified product IDs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes > mbox > product > categoryId"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Not blank.",(0,d.mdx)("br",null),"Maximum size = 128."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers for a given mbox with the specified product category IDs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes > mbox > order"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null}),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes>mbox > order > id"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum length = 250."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers for a given mbox with the specified order IDs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes > mbox > order > total"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},">=")," 0."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers for a given mbox with the specified order totals.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Request > execute > mboxes > mbox > order > purchasedProductIds"),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"No blank values.",(0,d.mdx)("br",null),"Each value's maximum length = 50.",(0,d.mdx)("br",null),"Concatenated and separated by comma.",(0,d.mdx)("br",null),"Product ids total length ",(0,d.mdx)("inlineCode",{parentName:"td"},"<=")," 250."),(0,d.mdx)("td",{parentName:"tr",align:null},"Retrieve offers for a given mbox with the specified order purchased product IDs.")))),(0,d.mdx)("h2",{id:"call-getoffers-for-all-views"},"Call getOffers() for all views"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"adobe.target.getOffers({\n    request: {\n      prefetch: {\n        views: [{}]\n    }\n  }\n});\n")),(0,d.mdx)("h2",{id:"call-getoffers-to-make-an-on-device-decisioning"},"Call getOffers() to make an on-device decisioning"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'adobe.target.getOffers({ \n\n  decisioningMethod:"on-device", \n  request: { \n    execute: { \n      mboxes: [ \n        { \n          index: 0, \n          name: "homepage" \n        } \n      ] \n    } \n } \n}); \n')),(0,d.mdx)("h2",{id:"call-getoffers-to-retrieve-the-latest-views-with-the-passed-in-parameters-and-profile-parameters"},"Call getOffers() to retrieve the latest views with the passed-in parameters and profile parameters"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'adobe.target.getOffers({\n  request: {\n    "prefetch": {\n      "views": [\n        {\n          "parameters": {\n            "ad": "1"\n          },\n          "profileParameters": {\n            "age": 23\n          }\n        }\n      ]\n    }\n  }\n});\n')),(0,d.mdx)("h2",{id:"call-getoffers-to-retrieve-mboxes-with-parameters-and-profile-parameters-passed-in"},"Call getOffers() to retrieve mboxes with parameters and profile parameters passed-in."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'adobe.target.getOffers({\n  request: {\n    execute: {\n      mboxes: [\n        {\n          index: 0,\n          name: "first-mbox"\n        },\n        {\n          index: 1,\n          name: "second-mbox",\n          parameters: {\n            a: 1\n          },\n          profileParameters: {\n            b: 2\n          }\n        }\n      ]\n    }\n  }\n});\n')),(0,d.mdx)("h2",{id:"call-getoffers-to-retrieve-the-analytics-payload-from-the-client-side"},"Call getOffers() to retrieve the analytics payload from the client side"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'adobe.target.getOffers({\n      request: {\n        experienceCloud: {\n          analytics: {\n            logging: "client_side"\n          }\n        },\n        prefetch: {\n          mboxes: [{\n            index: 0,\n            name: "a1-serverside-xt"\n          }]\n        }\n      }\n    })\n    .then(console.log)\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Response"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "prefetch": {\n    "mboxes": [{\n      "index": 0,\n      "name": "a1-serverside-xt",\n      "options": [{\n        "content": "<img src=\\"http://s7d2.scene7.com/is/image/TargetAdobeTargetMobile/L4242-xt-usa?tm=1490025518668&fit=constrain&hei=491&wid=980&fmt=png-alpha\\"/>",\n        "type": "html",\n        "eventToken": "n/K05qdH0MxsiyH4gX05/2qipfsIHvVzTQxHolz2IpSCnQ9Y9OaLL2gsdrWQTvE54PwSz67rmXWmSnkXpSSS2Q==",\n        "responseTokens": {\n          "profile.memberlevel": "0",\n          "geo.city": "bucharest",\n          "activity.id": "167169",\n          "experience.name": "USA Experience",\n          "geo.country": "romania"\n        }\n      }],\n      "analytics": {\n        "payload": {\n          "pe": "tnt",\n          "tnta": "167169:0:0|0|100,167169:0:0|2|100,167169:0:0|1|100"\n        }\n      }\n    }]\n  }\n}\n')),(0,d.mdx)("p",null,"The payload can then be forwarded to Adobe Analytics via the ",(0,d.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/analytics/kb/data-insertion-api-post-method-adobe-analytics.html"},"Data Insertion API"),"."),(0,d.mdx)("h2",{id:"fetch-and-render-data-from-multiple-mboxes-via-getoffers-and-applyoffers-multiple"},"Fetch and render data from multiple mboxes via getOffers() and applyOffers() {#multiple}"),(0,d.mdx)("p",null,"at.js 2.x lets you fetch multiple mboxes via the ",(0,d.mdx)("inlineCode",{parentName:"p"},"getOffers()")," API. You can also fetch data for multiple mboxes and then use ",(0,d.mdx)("inlineCode",{parentName:"p"},"applyOffers()")," to render the data in different locations identified by a CSS selector."),(0,d.mdx)("p",null,"The following example shows a simple HTML page with at.js 2.x implemented:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>at.js 2.x, multiple selectors and multiple mboxes</title>\n  <script src="at.js"><\/script>\n</head>\n<body>\n  <div id="container1">Default content 1</div>\n  \n  <div id="container2">Default content 2</div>\n\n  <div id="container3">Default content 3</div>\n</body>\n</html>\n')),(0,d.mdx)("p",null,"Assume that you have three containers that you want to modify via content received from Target. You can construct a single request for three mboxes in which each mbox has some content to render into the respective container."),(0,d.mdx)("p",null,"The request and rendering code might look like the following example:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'adobe.target.getOffers({\n  request: {\n    prefetch: {\n      mboxes: [\n        {\n          index: 0,\n          name: "mbox1"\n        },\n        {\n          index: 1,\n          name: "mbox2"\n        },\n        {\n          index: 2,\n          name: "mbox3"\n        }\n      ]\n    }\n  }\n})\n.then(response => {\n  // get all mboxes from response\n  const mboxes = response.prefetch.mboxes;\n  let count = 1;\n\n  mboxes.forEach(el => {\n    adobe.target.applyOffers({\n      selector: "#container" + count,\n      response: {\n        prefetch: {\n          mboxes: [el]\n        }\n      }\n    });\n\n    count += 1;\n  });\n});\n')),(0,d.mdx)("p",null,"In the ",(0,d.mdx)("inlineCode",{parentName:"p"},"request > prefetch > mboxes")," section, there are three different mboxes. If the request completed successfully, you receive the response for each mbox from ",(0,d.mdx)("inlineCode",{parentName:"p"},"response > prefetch > mboxes"),". After you have the responses and the locations you want to use for rendering, you can invoke ",(0,d.mdx)("inlineCode",{parentName:"p"},"applyOffers()")," to render the content retrieved from Target. In this example we have the following mapping:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"mbox1 > CSS selector #container1"),(0,d.mdx)("li",{parentName:"ul"},"mbox2 > CSS selector #container2"),(0,d.mdx)("li",{parentName:"ul"},"mbox3 > CSS selector #container3")),(0,d.mdx)("p",null,"This example uses the count variable to construct the CSS selectors. In a real-life scenario you could use a different mapping between the CSS selector and mbox."),(0,d.mdx)("p",null,"Note that this example uses ",(0,d.mdx)("inlineCode",{parentName:"p"},"prefetch > mboxes"),", but you could also use ",(0,d.mdx)("inlineCode",{parentName:"p"},"execute > mboxes"),". Ensure that if you use prefetch in ",(0,d.mdx)("inlineCode",{parentName:"p"},"getOffers()"),", you should also use prefetch in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"applyOffers()")," invocation."),(0,d.mdx)("h2",{id:"call-getoffers-to-perform-a-pageload"},"Call getOffers() to perform a pageLoad"),(0,d.mdx)("p",null,"The following example shows you how to perform a pageLoad using getOffers() with at.js 2.",(0,d.mdx)("em",{parentName:"p"},"x")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"adobe.target.getOffers({\n    request: {\n        execute: {\n            pageLoad: {\n                parameters: {}\n            }\n        }\n    }\n});\n")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-adobe-target-getoffers-atjs-2-md-3ad0bf49bbb0ca720684.js.map