(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(4),r=a(9),l=(a(0),a(318)),b={id:"index",title:"All Plugins"},c={unversionedId:"plugins/index",id:"plugins/index",isDocsHomePage:!1,title:"All Plugins",description:"The general purpose of GraphQL Code Generator is to parse GraphQL syntax, transform it into an AST and then output it into desired formats which can vary. Since there can potentially be an infinite number of formats, we can't predict them all. However, some formats are more likely to be used, thus, we've prepared pre-defined code generation plugins which are built for these formats.",source:"@site/docs/plugins/index.md",permalink:"/docs/plugins/index",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/index.md",sidebar:"sidebar",previous:{title:"Further Reading",permalink:"/docs/getting-started/further-reading"},next:{title:"TypeScript",permalink:"/docs/plugins/typescript"}},p=[{value:"Available Plugins",id:"available-plugins",children:[]},{value:"How to use Plugins",id:"how-to-use-plugins",children:[]},{value:"Configure Plugins",id:"configure-plugins",children:[]}],i={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The general purpose of GraphQL Code Generator is to parse GraphQL syntax, transform it into an AST and then output it into desired formats which can vary. Since there can potentially be an infinite number of formats, we can't predict them all. However, some formats are more likely to be used, thus, we've prepared pre-defined code generation plugins which are built for these formats."),Object(l.b)("h2",{id:"available-plugins"},"Available Plugins"),Object(l.b)("p",null,"Below is a table that lists all available plugins which can be installed via NPM, along with a short description. If you're looking for anything specific, we might already have the solution:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Format"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Package Name & Docs"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate types for TypeScript - those are usually relevant for both client side and server side code"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-operations")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate client specific TypeScript types (query, mutation, subscription, fragment)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-operations"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-operations")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-resolvers")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript signature for server-side resolvers"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-resolvers"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-resolvers")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-apollo-angular")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript types, and Apollo-Angular Services"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-apollo-angular"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-apollo-angular")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-react-apollo")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript types, and React-Apollo Components"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-react-apollo"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-react-apollo")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-vue-apollo")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript types, and Vue Apollo composition functions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-vue-apollo"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-vue-apollo")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-urql")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript types, and Urql Components"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-urql"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-urql")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-graphql-request")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates fully-typed ready-to-use SDK for graphql-request"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-graphql-request"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-graphql-request")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-stencil-apollo")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript types, and Stencil Apollo Components"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-stencil-apollo"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-stencil-apollo")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-mongodb")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate server-side TypeScript types, with MongoDB models"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-mongodb"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-mongodb")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-graphql-files-modules")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate ",Object(l.b)("inlineCode",{parentName:"td"},"declare module")," for ",Object(l.b)("inlineCode",{parentName:"td"},".graphql")," files"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-graphql-files-modules"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-graphql-files-modules")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-document-nodes")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript source files files that use ",Object(l.b)("inlineCode",{parentName:"td"},"graphql-tag")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-document-nodes"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-document-nodes")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-type-graphql")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate TypeScript types compatible with TypeGraphQL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-type-graphql"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-type-graphql")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typescript-oclif")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate commands for oclif command line interfaces"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/typescript-oclif"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-oclif")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"add")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add any string that you wish to the output file"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/add"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/add")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"schema-ast")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Prints the merged schemas as AST"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/schema-ast"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/schema-ast")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"fragment-matcher")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates an introspection result with only Unions and Interfaces"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/fragment-matcher"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/fragment-matcher")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"named-operations-object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates a type-safe list of all your available GraphQL operations and fragments"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/named-operations-object"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/named-operations-object")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"introspection")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates an introspection result"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/introspection"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/introspection")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"time")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add the generation time to the output file"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/time"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/time")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flow")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate types for Flow type based on your GraphQL schema"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/flow"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/flow")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flow-resolvers")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate resolvers signature for Flow"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/flow-resolvers"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/flow-resolvers")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"flow-operations")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate types for Flow type based on your GraphQL operations"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/flow-operations"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/flow-operations")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"reason-client")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generate ReasonML types based on your GraphQL schema for use in a client application"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/reason-client"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/reason-client")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"kotlin")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"generates Kotlin backend ",Object(l.b)("inlineCode",{parentName:"td"},"classes")," for Enums and Input types"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/kotlin"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/kotlin")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"java")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"generates Java backend ",Object(l.b)("inlineCode",{parentName:"td"},"classes")," for Enums and Input types"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/java"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/java")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"java-resolvers")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"generates Java backend resolvers signature"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/java-resolvers"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/java-resolvers")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"java-apollo-android")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"generates Apollo Android parsers and mappers"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/plugins/java-apollo-android"}),Object(l.b)("inlineCode",{parentName:"a"},"@graphql-codegen/java-apollo-android")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scala Plugins"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"generates types for schema and operations, maintained by ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/aappddeevv"}),Object(l.b)("inlineCode",{parentName:"a"},"aappddeevv"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/aappddeevv/graphql-codegen-scala"}),Object(l.b)("inlineCode",{parentName:"a"},"@aappddeevvv/graphql-code-scala-operations"),",",Object(l.b)("inlineCode",{parentName:"a"},"@aappddeevvv/graphql-code-scala-schema")))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"apollo-typed-documents")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Generates ",Object(l.b)("inlineCode",{parentName:"td"},"declare module")," for ",Object(l.b)("inlineCode",{parentName:"td"},".graphql")," files with generic ",Object(l.b)("inlineCode",{parentName:"td"},"TypedDocumentNode<TVariables, TData>"),". Also generates helper function to create mocks for Apollo Client ",Object(l.b)("inlineCode",{parentName:"td"},"MockedProvider"),". Maintained by ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/rubengrill/apollo-typed-documents"}),Object(l.b)("inlineCode",{parentName:"a"},"rubengrill"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/rubengrill/apollo-typed-documents"}),Object(l.b)("inlineCode",{parentName:"a"},"apollo-typed-documents/lib/codegenTypedDocuments"),",",Object(l.b)("inlineCode",{parentName:"a"},"apollo-typed-documents/lib/codegenApolloMock")))))),Object(l.b)("p",null,"In addition, you can build your own code generating plugins based on your specific needs. For more information, check ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/custom-codegen/index"}),"this doc page"),"."),Object(l.b)("h2",{id:"how-to-use-plugins"},"How to use Plugins"),Object(l.b)("p",null,"To use a plugin, install its package from ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),", then add it to your YML config file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: my-schema.graphql\ngenerates:\n  output.ts:\n    - plugin-name-here\n")),Object(l.b)("h2",{id:"configure-plugins"},"Configure Plugins"),Object(l.b)("p",null,"To pass configuration to a plugin, do the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: my-schema.graphql\ngenerates:\n  output.ts:\n    - plugin-name-here:\n        configKey: configValue\n")),Object(l.b)("p",null,"You can also pass the same configuration value to multiple plugins:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema: my-schema.graphql\ngenerates:\n  output.ts:\n    config:\n      configKey: configValue\n    plugins:\n      - plugin1-name-here\n      - plugin2-name-here\n")),Object(l.b)("p",null,"You can find the supported configuration for each plugin in its page / ",Object(l.b)("inlineCode",{parentName:"p"},"README")," file."))}o.isMDXComponent=!0},318:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=o(a),j=n,O=d["".concat(b,".").concat(j)]||d[j]||s[j]||l;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=j;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);