(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(175)),i={id:"app.profile",title:"app.profile",sidebar_label:"app.profile"},l={unversionedId:"app.profile",id:"app.profile",isDocsHomePage:!1,title:"app.profile",description:"This object contains all about the user data i.e. userAgent, payload (anything passed using ym.payload)",source:"@site/docs/app-profile.md",slug:"/app.profile",permalink:"/docs/app.profile",editUrl:"https://github.com/yellowmessenger/ym-documentation/docs/app-profile.md",version:"current",sidebar_label:"app.profile",sidebar:"docs",previous:{title:"app.predictionEndTime",permalink:"/docs/app.predictionEndTime"},next:{title:"app.soap",permalink:"/docs/app.soap"}},p=[{value:"Objects",id:"objects",children:[]},{value:"Properties",id:"properties",children:[]},{value:"More Properties",id:"more-properties",children:[]},{value:"Store Values",id:"store-values",children:[]}],c={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This object contains all about the user data i.e. userAgent, payload (anything passed using ym.payload)"),Object(a.b)("p",null,"The Update Profile functionality is used when we have to add some parameters to user profile"),Object(a.b)("p",null,"Most of the information is stored in app.profile is -"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Ip"),Object(a.b)("li",{parentName:"ol"},"Timezone, country_code, latitude, longitude, region, country, city,"),Object(a.b)("li",{parentName:"ol"},"Device type, os, browser"),Object(a.b)("li",{parentName:"ol"},"UserId to uniquely identify the user"),Object(a.b)("li",{parentName:"ol"},"UTM parameters (",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/UTM_parameters"}),"https://en.wikipedia.org/wiki/UTM_parameters"),")"),Object(a.b)("li",{parentName:"ol"},"Name: Anonymous unique name")),Object(a.b)("p",null,"Typical app.profile object looks like this"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "userAgent": {\n        "browser": "Chrome",\n        "os": "OS X",\n        "platform": "Apple Mac",\n        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",\n        "device": "Desktop"\n    },\n    "city": "Bangalore",\n    "country": "India",\n    "region": "Karnataka",\n    "longitude": "77.603290",\n    "latitude": "12.976230",\n    "end_ip": 736141311,\n    "value": "560018",\n    "country_code": "IN",\n    "start_ip": 736140288,\n    "timezone": "+05:30",\n    "ip": "43.224.157.81",\n    "userId": null,\n    "userToken": null,\n    "name": "Nervous Destruction",\n    "utm_source": null,\n    "utm_campaign": null,\n    "utm_medium": null,\n    "utm_term": null,\n    "utm_content": null,\n}\n')),Object(a.b)("h2",{id:"objects"},"Objects"),Object(a.b)("p",null,"userAgent - This object contains about the user browser, device, platform, os, and source"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'"userAgent": {\n        "browser": "Chrome",\n        "os": "OS X",\n        "platform": "Apple Mac",\n        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",\n        "device": "Desktop"\n},\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("p",null,"city | string - Has the value user city name"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"city": "Bangalore"')),Object(a.b)("p",null,"country | string - Has the value of user country name"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"country": "India"')),Object(a.b)("h2",{id:"more-properties"},"More Properties"),Object(a.b)("p",null,"It has the following properties along with the above"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"region"),Object(a.b)("li",{parentName:"ol"},"longitude"),Object(a.b)("li",{parentName:"ol"},"latitude"),Object(a.b)("li",{parentName:"ol"},"end_ip"),Object(a.b)("li",{parentName:"ol"},"value"),Object(a.b)("li",{parentName:"ol"},"country_code"),Object(a.b)("li",{parentName:"ol"},"start_ip"),Object(a.b)("li",{parentName:"ol"},"timezone"),Object(a.b)("li",{parentName:"ol"},"ip"),Object(a.b)("li",{parentName:"ol"},"userId"),Object(a.b)("li",{parentName:"ol"},"userToken"),Object(a.b)("li",{parentName:"ol"},"name (Anonymous unique name )"),Object(a.b)("li",{parentName:"ol"},"utm_source"),Object(a.b)("li",{parentName:"ol"},"utm_campaign"),Object(a.b)("li",{parentName:"ol"},"utm_medium"),Object(a.b)("li",{parentName:"ol"},"utm_content"),Object(a.b)("li",{parentName:"ol"},"utm_term")),Object(a.b)("h2",{id:"store-values"},"Store Values"),Object(a.b)("p",null,"We can also store values in app.profile object as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"app.profile.variable_name = varible_value;\n//example app.profile.mobileNum = '9876543210';\napp.updateProfile(); //call this method to update profile object\n")))}u.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||s[m]||a;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);