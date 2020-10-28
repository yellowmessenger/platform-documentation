(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(174)),c={id:"app.prediction",title:"app.prediction",sidebar_label:"app.prediction"},i={unversionedId:"app.prediction",id:"app.prediction",isDocsHomePage:!1,title:"app.prediction",description:"Arrays",source:"@site/docs/app-prediction.md",slug:"/app.prediction",permalink:"/docs/app.prediction",editUrl:"https://github.com/yellowmessenger/ym-documentation/tree/master/docs/app-prediction.md",version:"current",sidebar_label:"app.prediction",sidebar:"docs",previous:{title:"app.libraryStartTime",permalink:"/docs/app.libraryStartTime"},next:{title:"app.predictionEndTime",permalink:"/docs/app.predictionEndTime"}},l=[{value:"Arrays",id:"arrays",children:[]},{value:"Objects",id:"objects",children:[]},{value:"Properties",id:"properties",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"arrays"},"Arrays"),Object(a.b)("p",null,"global_entities - This array contains global entity objects"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'global_entities: [\n      {\n        text: "Tomorrow",\n        label: "DATE"\n      }\n]\n')),Object(a.b)("h2",{id:"objects"},"Objects"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"intents")," - object contains all the predicted intents (matched intents)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'"intents": {\n      weather-report: 0.3,\n      trigger1: 0.111,\n      trigger2: 0.123,\n      get-function-data: 0.381\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"parser")," - This object contains parsed data i.e. noun_chunks, lemmas, sentence, tokens, entities, other_keywords, parsed_tree, lemma_list, "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I want to book movie tickets for tomorrow : parser objects")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"entities")," - This object contains entities trained for matching and global entities like date, city, etc."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'entities: {\n      date: [\n        {\n          text: "tomorrow",\n          value: {\n            grain: "day",\n            value: "2020-01-30T00:00:00.000Z",\n            others: [\n              {\n                grain: "day",\n                value: "2020-01-30T00:00:00.000Z"\n              }\n            ]\n          }\n        }\n      ]\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"global_model")," - This object contains confidence and intent values"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'global_model: {\n      confidence: 0.5346315503120422,\n      intent: "what"\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("p",null,"core | boolean - Has the boolean value "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"core" : false')),Object(a.b)("p",null,"language_defected | string - Has the value of detected langauge code"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"language_detected": "en"')),Object(a.b)("p",null,"sentiment | string - Has the sentiment value of entered text i.e. positive, negative and neutral."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"sentiment": "neutral"')),Object(a.b)("p",null,"text | string - Has the value of exact text entereed by the user"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"text": "i want to book movie tickets for tomorrow"')),Object(a.b)("p",null,"confidence | int - Has the max value of confidence among matched intents "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"confidence": 0.381')),Object(a.b)("p",null,"synonym_detected | boolean - Has the boolean value about synonyms detected or not"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"synonym_detected": false')),Object(a.b)("p",null,"intent | string - Has the slug name of highest confidence intent matched"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"intent": "get-function-data"')))}p.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return n?o.a.createElement(m,i(i({ref:t},b),{},{components:n})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);