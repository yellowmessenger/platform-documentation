(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),s=n(6),o=(n(0),n(189)),a={},i={unversionedId:"getSessionMessageLogUrl",id:"getSessionMessageLogUrl",isDocsHomePage:!1,title:"getSessionMessageLogUrl",description:"This function will give you a encrypted link to the messages logs of current user's session.",source:"@site/docs/getSessionMessageLogUrl.md",slug:"/getSessionMessageLogUrl",permalink:"/ym-documentation/docs/getSessionMessageLogUrl",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getSessionMessageLogUrl.md",version:"current",sidebar:"docs",previous:{title:"getMultipleJourneysBySlug",permalink:"/ym-documentation/docs/getMultipleJourneysBySlug"},next:{title:"getTargetLanguage",permalink:"/ym-documentation/docs/getTargetLanguage"}},l=[{value:"This function will give you a encrypted link to the messages logs of current user&#39;s session.",id:"this-function-will-give-you-a-encrypted-link-to-the-messages-logs-of-current-users-session",children:[]},{value:"Input Parameters",id:"input-parameters",children:[{value:"baseUrl (String)",id:"baseurl-string",children:[]}]},{value:"Output (String)",id:"output-string",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"this-function-will-give-you-a-encrypted-link-to-the-messages-logs-of-current-users-session"},"This function will give you a encrypted link to the messages logs of current user's session."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(o.b)("h3",{id:"baseurl-string"},"baseUrl (String)"),Object(o.b)("p",null,'Default to "app.yellowmessenger.com"'),Object(o.b)("p",null,"The base url aka the web url with out the path. this will be prefixed to logs link. 99% of the time this doesn't need to be passed as it's always going to be app.yellowmessenger.com. In a scenario where platform is deployed on-premise, developer might want to pass a baseUrl."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"output-string"},"Output (String)"),Object(o.b)("p",null,"encrypted link to the current user's session messages logs."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"app.log(app.getSessionMessageLogUrl());\n\n//output: https://app.yellowmessenger.com/#/public/messages/a9c9874bd596b9a9b1af9e8fd232322333c37e17a5f56a0c4634519ad1ac722d78c2383317c79/a9c9874bd596b9a9b1a\n")))}u.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),u=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||g[b]||o;return n?s.a.createElement(d,i(i({ref:t},c),{},{components:n})):s.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);