(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{279:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(4),a=n(9),o=(n(0),n(318)),i={id:"typed-document-node",title:"TypedDocumentNode"},p={unversionedId:"plugins/typed-document-node",id:"plugins/typed-document-node",isDocsHomePage:!1,title:"TypedDocumentNode",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typed-document-node.md",permalink:"/docs/plugins/typed-document-node",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typed-document-node.md",sidebar:"sidebar",previous:{title:"TypeScript Resolvers",permalink:"/docs/plugins/typescript-resolvers"},next:{title:"TypeScript GraphQL-Request",permalink:"/docs/plugins/typescript-graphql-request"}},c=[{value:"Usage example",id:"usage-example",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("div",Object(r.a)({parentName:"p"},{className:"admonition admonition-caution alert alert--warning"}),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Usage Requirements")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",Object(o.b)("inlineCode",{parentName:"p"},"query")," / ",Object(o.b)("inlineCode",{parentName:"p"},"mutation")," / ",Object(o.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fragment"),") set as ",Object(o.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(o.b)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),Object(o.b)("p",null,"This plugins generates a ready-to-use ",Object(o.b)("inlineCode",{parentName:"p"},"TypedDocumentNode")," (a combination of pre-compiled ",Object(o.b)("inlineCode",{parentName:"p"},"DocumentNode")," and the TypeScript signature it represents)."),Object(o.b)("p",null,"For information about the setup and usage of ",Object(o.b)("inlineCode",{parentName:"p"},"TypedDocumentNode"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-typed-document-node"}),"please refer to the library's documentation"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This plugins requires ",Object(o.b)("inlineCode",{parentName:"p"},"typescript")," and ",Object(o.b)("inlineCode",{parentName:"p"},"typescript-operations")," as siblings.")),Object(o.b)("h3",{id:"usage-example"},"Usage example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'schema: SCHEMA_FILE_OR_ENDPOINT_HERE\ndocuments: "./src/**/*.graphql"\ngenerates:\n  ./src/graphql-operations.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typed-document-node\n')),Object(o.b)("p",null,"The example about will generate ",Object(o.b)("inlineCode",{parentName:"p"},"TypedDocumentNode")," with the needed types built-in, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'// Represents the variables type of the operation - generated by `typescript` + `typescript-operations` plugins\nexport type RatesQueryVariables = Exact<{\n  currency: Scalars[\'String\'];\n}>;\n\n// Represents the result type of the operation - generated by `typescript` + `typescript-operations` plugins\nexport type RatesQuery = (\n  { __typename?: \'Query\' }\n  & { rates?: Maybe<Array<Maybe<(\n    { __typename?: \'ExchangeRate\' }\n    & Pick<ExchangeRate, \'currency\' | \'rate\'>\n  )>>> }\n);\n\n// Generated by this plugin - creates a pre-compiled `DocumentNode` and passes result type and variables type as generics\nexport const ratesQuery: TypedDocumentNode<RatesQuery, RatesQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{ ... ]};\n')))}u.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,p(p({ref:t},s),{},{components:n})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);