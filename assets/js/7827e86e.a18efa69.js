(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{110:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/rotation.drawio-74132fb1c49e6242631f86f6761209c4.svg"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(96)),i={slug:"terraform-rotate-secrets",title:"Safely rotate secrets with terraform",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["terraform","secrets","security"]},s={permalink:"/terraform-rotate-secrets",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-04-10-terraform-rotate-secrets.md",source:"@site/blog/2021-04-10-terraform-rotate-secrets.md",description:"Rotating secrets is a Good Thing&trade; as it limits the length of a time a compromised set of credentials can be used for.",date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"secrets",permalink:"/tags/secrets"},{label:"security",permalink:"/tags/security"}],title:"Safely rotate secrets with terraform",readingTime:1.955,truncated:!1,prevItem:{title:"Bootstrap terraform state in azure",permalink:"/bootstrap-terraform-state-in-azure"}},c=[],l={toc:c};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rotating secrets is a Good Thing","\u2122"," as it limits the length of a time a compromised set of credentials can be used for."),Object(o.b)("p",null,"It's quite difficult to make secret rotation atomic i.e. changing a secret in your identity provider at exactly the same\ntime you change the secret in the system that uses it for authentication. Mismatches between the values will result in\nauthentication failures."),Object(o.b)("p",null,"The ideal is where the identity provider supports multiple valid secrets for a single identity e.g. Azure Service Principals. If that's\nthe case, you can have 2 secrets active at the same time and rotate them on offset time periods e.g.:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"password rotation",src:r(110).default,title:"Secret Rotation"})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This example uses secrets that expire after 60 days and rotates them each month. The mechanism supports rotating secrets more frequently\nso pick an expiry window that meets your risk appetite. The limiting factor is often when infrastructure needs to be redeployed after\na secret is rotated."))),Object(o.b)("p",null,"In the terraform below, I've set up 2 passwords, one called ",Object(o.b)("inlineCode",{parentName:"p"},"even")," and one called ",Object(o.b)("inlineCode",{parentName:"p"},"odd"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"odd")," password rotates at the beginning of the odd months and is the current password for those months i.e.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"January, March, May, July, September, November")),Object(o.b)("p",null,"And the ",Object(o.b)("inlineCode",{parentName:"p"},"even")," password rotates at the beginning of the even months and is the current password for those months i.e.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"February, April, June, August, October, December")),Object(o.b)("p",null,"And now for the terraform:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-hcl"},'variable "date" {\n    type = string\n}\n\nlocals {\n  date        = tonumber(var.date)\n  odd_keeper  = floor((local.date + 1) / 2)\n  even_keeper = floor(local.date / 2)\n  use_even    = local.date % 2 == 0\n}\n\nresource "random_password" "odd" {\n  keepers = {\n    "date" = local.odd_keeper\n  }\n  length           = 64\n  special          = true\n}\n\nresource "random_password" "even" {\n  keepers = {\n    "date" = local.even_keeper\n  }\n  length           = 64\n  special          = true\n}\n\n# this example just outputs the password\n# but you\'d typically use this as a property of\n# the system(s) that need the password.\noutput "current_secret" {\n    value = local.use_even \n                ? random_password.even.result \n                : random_password.odd.result\n}\n')),Object(o.b)("p",null,"For this to work, you need to supply a ",Object(o.b)("inlineCode",{parentName:"p"},"date")," variable when you call terraform that contains the current year and month e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'terraform apply -auto-approve -var="date=`date +%Y%m`"\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Terraform will store these secrets in terraform state, so make sure you're ",Object(o.b)("a",{parentName:"p",href:"https://www.terraform.io/docs/language/state/sensitive-data.html"},"using a backend that is appropriately secured"),"."))))}p.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.a.createElement(b,s(s({ref:t},l),{},{components:r})):n.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);