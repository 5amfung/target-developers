(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6096],{774:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var r,o=a(22122),n=a(19756),i=(a(15007),a(64983)),d=a(99536),m=["components"],l={},s=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:l},c=d.Z;function u(e){var t=e.components,a=(0,n.Z)(e,m);return(0,i.mdx)(c,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"work-with-redirectors"},"Work with redirectors"),(0,i.mdx)("p",null,"Use a Redirector similarly to how you use an mbox in your tests."),(0,i.mdx)("p",null,"Redirectors are created with a special Redirector URL that loads a Redirector mbox (Redirector) into your account. Use this Redirector similarly to how you use an mbox in your tests. Submit the Redirector URL to your Ad Network as the ad's destination link."),(0,i.mdx)("p",null,"Use the Redirector to do the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Track clicks from your display ads to your site ")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Create a single centralized report to track clicks to display ads on multiple ad networks ")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Vary display ad destinations"),(0,i.mdx)("p",{parentName:"li"},"For example the same banner lands on your home page, category page and product page. ")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Find which landing page leads to the most conversions"))),(0,i.mdx)("p",null,"For help deciding the right setup see ",(0,i.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-non-javascript-based-implementation/non-javascript-based-implementation.md#concept_4799C58B081A43F6B3B8CC25A8D5D7C4"},"Non-JavaScript-Based Implementations"),". "),(0,i.mdx)("h2",{id:"create-a-redirector-redirector"},"Create a redirector {#redirector}"),(0,i.mdx)("p",null,"Before you can use a redirector, you must create it."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Determine the ad's destination variations, including the default destination.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Create the Redirector URL."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre"},"https://<your_testandtarget_clientcode>.tt.omtrdc.net/​m2/yourclientcode/ubox\n/​page?mbox=redirectorlink_456\n&mboxDefault=http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2Fusualdestination%2Ehtm\n")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Where ",(0,i.mdx)("inlineCode",{parentName:"p"},"yourclientcode")," is your company's client code. Your company's client code is all lower case and has no special characters."),(0,i.mdx)("p",{parentName:"li"},"Your client code is available at the top of the ",(0,i.mdx)("strong",{parentName:"p"},"Administration > Implementation")," page of the Target interface.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"redirectorlink_456")," is the name of the Redirector mbox that appears in your account to use in campaigns and tests."),(0,i.mdx)("p",{parentName:"li"}," Redirectors function differently from other mboxes, but appear just as any other mbox in your account. Name the redirector so it is easily distinguished them from the standard type mboxes in your account.  As best practice, begin the mbox name with 'redirectorlink'.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Where ",(0,i.mdx)("inlineCode",{parentName:"p"},"http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2Fusualdestination%2Ehtm")," is the default destination."),(0,i.mdx)("p",{parentName:"li"},"This must be URL encoded and must be an absolute reference. You can use the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.w3schools.com/tags/ref_urlencode.asp"},"HTML URL Encoding Reference")," to quickly encodes your URLs."),(0,i.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",{parentName:"li"},'Note that with Redirector you can be exposed to a risk of an Open Redirect Vulnerability. To avoid the unauthorized use of Redirector links by third parties, Adobe recommends you use "authorized hosts" to allowlist the default redirect URL domains. Target uses hosts to allowlist domains to which you want to allow redirects. For more information, see ',(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/administer/hosts.html#allowlist"},"Create Allowlists that specify hosts that are authorized to send mbox calls to Target")," in ",(0,i.mdx)("em",{parentName:"p"},"Hosts"),".")))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Validate the Redirector."),(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("em",{parentName:"li"},"Security best practice"),": Ensure that the domain used in the Redirector is allowlisted, as indicated above. If you use a domain that is not allowlisted, Adobe will block any calls to that domain to prevent malicious actors from using the Redirector to redirect to potentially malicious domains."),(0,i.mdx)("li",{parentName:"ol"},"Insert the Redirector URL into a browser and refresh."),(0,i.mdx)("li",{parentName:"ol"},"Log in to your account, refresh your mbox list and verify the new Redirector is listed as an mbox."))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"If you will test different destinations for one ad, create ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.corp.adobe.com/docs/target/using/experiences/vec/redirect-offer.html"},"Redirect Offers")," for each version.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Create the campaign."),(0,i.mdx)("p",{parentName:"li"},"See ",(0,i.mdx)("a",{parentName:"p",href:"/target-developers/help/c-implementing-target/c-non-javascript-based-implementation/non-javascript-based-implementation.md#concept_4799C58B081A43F6B3B8CC25A8D5D7C4"},"Non-JavaScript-Based Implementations")," for the right setup to meet your goals. ")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Complete QA on the campaign."),(0,i.mdx)("p",{parentName:"li"},"Create a dummy page with an ",(0,i.mdx)("inlineCode",{parentName:"p"},"<a href>")," containing the Redirector URL. Example:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre"},"<a href=https://<your_clientcode>.tt.omtrdc.net/​m2/yourclientcode/ubox/​page?mbox=\n\nredirectorlink_456&mboxDefault=http%3A%2F%2Fwww%2Eyourcompany%2Ecom%2F​usualdestination%2Ehtm>\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Verify that all experiences, default content, and reports act as expected on all browser types, for all of your environments."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",{parentName:"li"},"Redirectors are not supported by Offer Preview or Browse for mbox. Preview experiences directly in a browser. Also, ",(0,i.mdx)("inlineCode",{parentName:"p"},"mboxDebug")," does not work with Redirectors.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Submit the full Redirector URL to your Display Ad Network as the ad destination."))),(0,i.mdx)("h2",{id:"use-a-redirector-to-pass-costs-per-click-and-revenue-per-click-concept_3078ef48e9c44b34992d62aab9628853"},"Use a redirector to pass Costs per Click and Revenue Per Click {#concept_3078EF48E9C44B34992D62AAB9628853}"),(0,i.mdx)("p",null,"Information about using a redirector to pas costs per click and revenue per click."),(0,i.mdx)("h3",{id:"passing-costs-per-click-section_deb889470f7d4360b5cea85fd05dedfa"},"Passing Costs per Click {#section_DEB889470F7D4360B5CEA85FD05DEDFA}"),(0,i.mdx)("p",null,"Use a redirector to pass the costs per click."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Best practice is to determine the cost value using the ",(0,i.mdx)("strong",{parentName:"p"},"Score per visit")," engagement metric."),(0,i.mdx)("p",null,"Add ",(0,i.mdx)("inlineCode",{parentName:"p"},"&mboxPageValue=-value")," to the URL. Note the negative value."),(0,i.mdx)("p",null,"Example: For a .10 cents cost per click:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"https://<your_clientcode>.tt.omtrdc.net/​m2/yourclientcode/ubox/​page?mbox=redirectorlink_456\n&mboxPageValue=-0.1&mboxDefault=​https://www.yourcompany.com/usualdestination.htm\n")),(0,i.mdx)("h3",{id:"passing-revenue-per-click-section_3e48ac465e7d42daac51b4bff83f64b1"},"Passing Revenue per Click {#section_3E48AC465E7D42DAAC51B4BFF83F64B1}"),(0,i.mdx)("p",null,"Use a redirector to pass the revenue per click."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Best practice is to determine the revenue value using the ",(0,i.mdx)("strong",{parentName:"p"},"Score per visit")," engagement metric."),(0,i.mdx)("p",null,"Add ",(0,i.mdx)("inlineCode",{parentName:"p"},"&mboxPageValue=value")," to the URL."),(0,i.mdx)("p",null,"Example: For a .10 cents revenue per click."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"https://<​your_clientcode>​​​​.tt​​.omtrdc​.net/​​m2/​yourclientcode/​ubox/​​​page?mbox=redirectorlink_456\n&mboxPageValue=0.1​&mbox​Default=​​http%3A%2F%2Fwww%2E​yourcompany%2Ecom​%2Fusualdestination%2Ehtm\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-email-working-with-redirectors-md-b1534eb25668e975afbd.js.map