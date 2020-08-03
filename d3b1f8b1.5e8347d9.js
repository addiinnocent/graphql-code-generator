(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(4),r=n(9),c=(n(0),n(318)),p={id:"schema-ast",title:"Schema AST"},i={unversionedId:"plugins/schema-ast",id:"plugins/schema-ast",isDocsHomePage:!1,title:"Schema AST",description:"{@import ../generated-config/schema-ast.md}",source:"@site/docs/plugins/schema-ast.md",permalink:"/docs/plugins/schema-ast",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/schema-ast.md",sidebar:"sidebar",previous:{title:"Introspection",permalink:"/docs/plugins/introspection"},next:{title:"JSDoc",permalink:"/docs/plugins/jsdoc"}},o=[{value:"Examples",id:"examples",children:[]}],s={rightToc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("p",{parentName:"p"},"This plugin prints the merged schema as string. If multiple schemas are provided, they will be merged and printed as one schema."),Object(c.b)("h2",{parentName:"p"},"Installation"),Object(c.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/schema-ast\n")))),Object(c.b)("h2",{parentName:"p"},"API Reference"),Object(c.b)("h3",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"h3"},"includeDirectives")),Object(c.b)("p",{parentName:"p"},"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",{parentName:"p"},"Include directives to Schema output."),Object(c.b)("h4",{parentName:"p"},"Usage Examples"),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  - './src/schema.graphql'\ngenerates:\n  path/to/file.graphql:\n    plugins:\n      - schema-ast\n    config:\n      includeDirectives: true\n")),Object(c.b)("h3",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"h3"},"commentDescriptions")),Object(c.b)("p",{parentName:"p"},"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("p",{parentName:"p"},'Set to true in order to print description as comments (using # instead of """)'),Object(c.b)("h4",{parentName:"p"},"Usage Examples"),Object(c.b)("pre",{parentName:"p"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\ngenerates:\n  schema.graphql:\n    plugins:\n      - schema-ast\n    config:\n      commentDescriptions: true\n")),Object(c.b)("h3",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"h3"},"federation")),Object(c.b)("p",{parentName:"p"},"type: ",Object(c.b)("inlineCode",{parentName:"p"},"boolean"))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\nschema:\n  - 'http://localhost:3000/graphql'\n  - './src/**/*.graphql'\n  - 'scalar MyCustomScalar'\ngenerates:\n  path/to/file.graphql:\n    plugins:\n      - schema-ast\n")))}m.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,u=l["".concat(p,".").concat(d)]||l[d]||b[d]||c;return n?r.a.createElement(u,i(i({ref:t},s),{},{components:n})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<c;s++)p[s]=n[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);