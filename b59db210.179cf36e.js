(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{196:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return p})),a.d(n,"rightToc",(function(){return l})),a.d(n,"default",(function(){return s}));var t=a(4),c=a(9),r=(a(0),a(318)),i={},p={unversionedId:"generated-config/c-sharp",id:"generated-config/c-sharp",isDocsHomePage:!1,title:"c-sharp",description:"This plugin generates C# class identifier for your schema types.",source:"@site/docs/generated-config/c-sharp.md",permalink:"/docs/generated-config/c-sharp",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/c-sharp.md"},l=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>namespaceName</code>",id:"namespacename",children:[]},{value:"<code>className</code>",id:"classname",children:[]},{value:"<code>listType</code>",id:"listtype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],o={rightToc:l};function s(e){var n=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},o,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This plugin generates C# ",Object(r.b)("inlineCode",{parentName:"p"},"class")," identifier for your schema types."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("div",{className:"admonition admonition-shell"},Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(t.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(t.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/c-sharp\n")))),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)("h3",{id:"enumvalues"},Object(r.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(r.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema."),Object(r.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(r.b)("h5",{id:"with-custom-values"},"With Custom Values"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(r.b)("h3",{id:"namespacename"},Object(r.b)("inlineCode",{parentName:"h3"},"namespaceName")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLCodeGen")),Object(r.b)("p",null,"Allow you to customize the namespace name."),Object(r.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/c-sharp/my-org/my-app/MyTypes.cs:\n    plugins:\n      - c-sharp\n    config:\n      namespaceName: MyCompany.MyNamespace\n")),Object(r.b)("h3",{id:"classname"},Object(r.b)("inlineCode",{parentName:"h3"},"className")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Types")),Object(r.b)("p",null,"Allow you to customize the parent class name."),Object(r.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/c-sharp/my-org/my-app/MyGeneratedTypes.cs:\n    plugins:\n      - c-sharp\n    config:\n      className: MyGeneratedTypes\n")),Object(r.b)("h3",{id:"listtype"},Object(r.b)("inlineCode",{parentName:"h3"},"listType")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"IEnumberable")),Object(r.b)("p",null,"Allow you to customize the list type"),Object(r.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/c-sharp/my-org/my-app/Types.cs:\n    plugins:\n      - c-sharp\n    config:\n      listType: Map\n")),Object(r.b)("h3",{id:"scalars"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{id:"namingconvention"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(r.b)("h5",{id:"override-all-names"},"Override All Names"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{id:"typesprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"Prefixes all the generated types."),Object(r.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{id:"skiptypename"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{id:"nonoptionaltypename"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{id:"usetypeimports"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}s.isMDXComponent=!0},318:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return u}));var t=a(0),c=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,c=function(e,n){if(null==e)return{};var a,t,c={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),s=function(e){var n=c.a.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},b=function(e){var n=s(e.components);return c.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=t,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||r;return a?c.a.createElement(u,p(p({ref:n},o),{},{components:a})):c.a.createElement(u,p({ref:n},o))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);