(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4700],{17375:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return i}});var t=n(22122),r=n(19756),o=(n(15007),n(64983)),m=n(99536),l=["components"],d={},s={_frontmatter:d},u=m.Z;function i(e){var a=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)(u,(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"targetpageparams"},"targetPageParams()"),(0,o.mdx)("p",null,"This method allows you to attach parameters to the global mbox from outside of the request code."),(0,o.mdx)("p",null,"This function is very useful for including the same set of parameters on multiple mbox calls. The function needs to be defined by the customer. It should return an array of parameters that will be passed only to the global mbox request. This function can be defined before at.js is loaded or in ",(0,o.mdx)("strong",{parentName:"p"},"Administration")," > ",(0,o.mdx)("strong",{parentName:"p"},"Implementation")," > ",(0,o.mdx)("strong",{parentName:"p"},"Edit")," > ",(0,o.mdx)("strong",{parentName:"p"},"Library Header"),"."),(0,o.mdx)("p",null,"You can pass in parameters to target-global-mbox using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"targetPageParams()")," function in any of the following ways:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"An ampersand-delimited list "),(0,o.mdx)("li",{parentName:"ul"},"An array "),(0,o.mdx)("li",{parentName:"ul"},"A JSON object")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)("p",null,"Ampersand-delimited list (values must be URL encoded):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'function targetPageParams() { \n    return "param1=value1&param2=value2&p3=hello%20world"; \n}\n')),(0,o.mdx)("p",null,"Array (values do not need to be URL encoded):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'targetPageParams = function() { \n     return ["a=1", "b=2", "c=hello world"]; \n};\n')),(0,o.mdx)("p",null,"JSON (values do not need to be URL encoded):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'targetPageParams = function() { \n  return { \n    "a": 1, \n    "b": 2, \n    "profile": { \n        "age": 26, \n        "country": { \n          "city": "San Francisco" \n        } \n      } \n  }; \n};\n')))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-implement-client-side-targetpageparams-md-8437cddb3554c1b9b80a.js.map