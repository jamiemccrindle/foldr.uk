(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{90:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return c})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(98)),i={slug:"how-to-install-a-specific-version-of-terraform-github-actions-using-apt-get",title:"Install a specific version of Terraform in a Github Action using apt",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["terraform","github"]},c={permalink:"/how-to-install-a-specific-version-of-terraform-github-actions-using-apt-get",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-04-20-how-to-install-a-specific-version-of-terraform-github-actions-using-apt-get.md",source:"@site/blog/2021-04-20-how-to-install-a-specific-version-of-terraform-github-actions-using-apt-get.md",description:"The standard way to install Terraform on ubuntu is via apt but the instructions typically don't show how to",date:"2021-04-20T00:00:00.000Z",formattedDate:"April 20, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"github",permalink:"/tags/github"}],title:"Install a specific version of Terraform in a Github Action using apt",readingTime:.51,truncated:!1,prevItem:{title:"How to rotate your AZURE_CREDENTIALS in GitHub with Terraform",permalink:"/rotating-azure-credentials-in-github-with-terraform"},nextItem:{title:"Microsoft Graph API Terraform Data Source",permalink:"/microsoft-graph-terraform-data-source"}},s=[],u={toc:s};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The standard way to install Terraform on ubuntu is via ",Object(o.b)("inlineCode",{parentName:"p"},"apt")," but the instructions typically don't show how to\nselect a specific version. Most examples of how to install a specific version of terraform in a GitHub action\njust pull the binary directly."),Object(o.b)("p",null,"This is how you can install a specific version of Terraform for use in a GitHub action using ",Object(o.b)("inlineCode",{parentName:"p"},"apt"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: install-terraform-example\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n\n  install-terraform:\n    runs-on: ubuntu-latest\n    steps:\n    - run: |\n        curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\n        sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\n        sudo apt-get update\n        sudo apt-get install terraform=0.14.10\n')))}l.isMDXComponent=!0},98:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=a.a.createContext({}),l=function(t){var e=a.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?a.a.createElement(b,c(c({ref:e},u),{},{components:r})):a.a.createElement(b,c({ref:e},u))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);