(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(175)),a={},c={unversionedId:"getSupportSettings",id:"getSupportSettings",isDocsHomePage:!1,title:"getSupportSettings",description:"getSupportSettings Returns support settings for the bot. Useful for getting the names of custom fields.",source:"@site/docs/getSupportSettings.md",slug:"/getSupportSettings",permalink:"/ym-documentation/docs/getSupportSettings",editUrl:"https://github.com/yellowmessenger/ym-documentation/docs/getSupportSettings.md",version:"current",sidebar:"docs",previous:{title:"createEmailTicket",permalink:"/ym-documentation/docs/createEmailTicket"},next:{title:"uploadWhatsappMedia",permalink:"/ym-documentation/docs/uploadWhatsappMedia"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"getSupportSettings Returns support settings for the bot. Useful for getting the names of custom fields."),Object(i.b)("p",null,"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'app.getSupportSettings().then(app.log)\n\n//output\n\n{\n     "customFieldsValidationFn": null,\n     "closeTicketOptionsRequiredTocloseTicket": false,\n     "tags": [],\n     "csatRatingType": "numbers",\n     "csatEnabled": false,\n     "enableCollaboration": false,\n     "ticketRatingQuestion": "Did we resolve your case?",\n     "agentRatingQuestion": "How would you rate your agent?",\n     "askTicketRating": true,\n     "askAgentRating": true,\n     "solved": "solved",\n     "unsolved": "unsolved",\n     "emailChatLogsToUser": false,\n     "allowDuplicateAgentSessions": true,\n     "ticketUpdateEventSettings": {\n         "assignedFromQueue": true,\n         "ticketClosed": true,\n         "tagUpdate": false,\n         "noteUpdate": false,\n         "customFieldUpdate": false,\n         "ticketTransfer": false,\n         "ticketInactivity": false,\n         "ticketAssignedUI": false,\n         "_id": "5f8b1d8215ed390010ede226"\n     },\n     "_id": "5eb94eec7b8b900010da8cb2",\n     "closeTicketOptions": [],\n     "botId": "x1588565299602",\n     "createdDate": "2020-05-11T13:11:08.227Z",\n     "updatedDate": "2020-05-11T13:11:08.227Z",\n     "ticketsQueueConfig": [\n         {\n             "allowTicketsQueue": false,\n             "maxQueueLimit": 50,\n             "_id": "5eb94eec7b8b900010da8cb3",\n             "groupCode": "default"\n         }\n     ],\n     "agentUiConfiguration": [\n         {\n             "ticketReportDownloadVisibility": true,\n             "enableAttachments": true,\n             "publicChatUrlVisibility": true,\n             "chatTranscriptDownloadVisibility": true,\n             "userActivityVisibility": true,\n             "userLocationVisibility": true,\n             "enableEmoji": true,\n             "enablePauseBot": true,\n             "showBotAttachments": true,\n             "_id": "5eb94eec7b8b900010da8cb4"\n         }\n     ],\n     "__v": 0\n }\n')))}l.isMDXComponent=!0}}]);