(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3063],{25295:function(e,n,o){"use strict";o.r(n),o.d(n,{_frontmatter:function(){return l},default:function(){return g}});var t,i=o(22122),r=o(19756),a=(o(15007),o(64983)),d=o(99536),s=["components"],l={},p=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),m={_frontmatter:l},c=d.Z;function g(e){var n=e.components,o=(0,r.Z)(e,s);return(0,a.mdx)(c,(0,i.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"logger"},"Logger"),(0,a.mdx)("h2",{id:"description"},"Description"),(0,a.mdx)("p",null,"When ",(0,a.mdx)("a",{parentName:"p",href:"../initialize-sdk.md"},"initializing the SDK"),", the ",(0,a.mdx)("inlineCode",{parentName:"p"},"options.logger")," object is an optional object. However, in order to debug effectively when an issue occurs, a ",(0,a.mdx)("inlineCode",{parentName:"p"},"logger")," object should be provided when initializing the SDK."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"logger")," object is expected to have a ",(0,a.mdx)("inlineCode",{parentName:"p"},"debug()")," and an ",(0,a.mdx)("inlineCode",{parentName:"p"},"error()")," method. When an appropriate logger is provided, such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"console"),", Target requests and responses will be logged."),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(p,{slots:"heading, code",repeat:"1",languages:"js",mdxType:"CodeBlock"}),(0,a.mdx)("h3",{id:"nodejs"},"Node.js"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'const TargetClient = require("@adobe/target-nodejs-sdk");\nconst CONFIG = {\n  client: "acmeclient",\n  organizationId: "1234567890@AdobeOrg",\n  logger: console\n};\n\nconst targetClient = TargetClient.create(CONFIG);\n\nconst request = {\n    execute: {\n        mboxes: [{\n            name: "a1-serverside-ab",\n            index: 1\n        }]\n    }\n};\n\nconst response = await targetClient.getOffers({ request, targetCookie });\n')),(0,a.mdx)("p",null,"You should see requests and responses being printed in the console."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-node-js-logger-md-bbd18a69e6de7eed5b88.js.map