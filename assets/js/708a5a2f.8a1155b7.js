(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/enterprise-applications-05e63a1d48cebcbf37a8241215dcf691.png"},75:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var a=t(3),n=t(7),o=(t(0),t(93)),i={slug:"microsoft-graph-terraform-data-source",title:"Microsoft Graph API Terraform Data Source",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["terraform","azure"]},s={permalink:"/microsoft-graph-terraform-data-source",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-04-19-microsoft-graph-terraform-data-source.md",source:"@site/blog/2021-04-19-microsoft-graph-terraform-data-source.md",description:"Most Terraform examples that reference permissions from the Microsoft Graph use the GUIDs for the permissions. This makes",date:"2021-04-19T00:00:00.000Z",formattedDate:"April 19, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"azure",permalink:"/tags/azure"}],title:"Microsoft Graph API Terraform Data Source",readingTime:1.61,truncated:!1,prevItem:{title:"Install a specific version of Terraform in a Github Action using apt",permalink:"/how-to-install-a-specific-version-of-terraform-github-actions-using-apt-get"},nextItem:{title:"Bootstrap terraform state in azure",permalink:"/bootstrap-terraform-state-in-azure"}},c=[],p={toc:c};function l(e){var r=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Most Terraform examples that reference permissions from the Microsoft Graph use the GUIDs for the permissions. This makes\nit harder to write the Terraform config, as you have to look up the GUIDs for each permission. It also makes it harder\nto do code reviews where reviewers typically just believe the comment that describes what permission the GUID represents."),Object(o.b)("p",null,"This is what the code for the required_resource_access for an azure ad application for k8s looks like using just the GUIDs\n(this is from a real example online):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-terraform"},'required_resource_access {\n  resource_app_id = "00000003-0000-0000-c000-000000000000"\n  resource_access {\n    id   = "7ab1d382-f21e-4acd-a863-ba3e13f7da61"\n    type = "Role"\n  }\n  resource_access {\n    id   = "06da0dbc-49e2-44d2-8312-53f166ab848a"\n    type = "Scope"\n  }\n  resource_access {\n    id   = "e1fe6dd8-ba31-4d61-89e7-88639da4683d"\n    type = "Scope"\n  }\n}\n')),Object(o.b)("p",null,"Your AD tenant should have enterprise applications (service principals) for the various Microsoft services including\nthe Microsoft Graph."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Microsoft Graph Enterprise Application",src:t(106).default})),Object(o.b)("p",null,"You can look this up as a data source using Terraform as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-terraform"},'data "azuread_service_principal" "graph" {\n    # graph api application id\n    application_id = "00000003-0000-0000-c000-000000000000"\n}\n')),Object(o.b)("p",null,"This will return a data source that has all of the oauth2 permissions and app roles for the Microsoft Graph. They can be awkward to\nwork with, so I'll usually create a new object that maps the permission name to the permission id e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-terraform"},"locals {\n    graph = {\n        application_id = data.azuread_service_principal.graph.application_id\n        app_roles = {for app_role in data.azuread_service_principal.graph.app_roles : app_role.value => app_role.id}\n        oauth2_permissions = {for oauth2_permission in data.azuread_service_principal.graph.oauth2_permissions : oauth2_permission.value => oauth2_permission.id}\n    }\n}\n")),Object(o.b)("p",null,"Using this, the example above would look like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-terraform"},'required_resource_access {\n  resource_app_id = local.graph.application_id\n  resource_access {\n    id   = local.graph.app_roles["Directory.Read.All"]\n    type = "Role"\n  }\n  resource_access {\n    id   = local.graph.oauth2_permissions["Directory.Read.All"]\n    type = "Scope"\n  }\n  resource_access {\n    id   = local.graph.oauth2_permissions["User.Read"]\n    type = "Scope"\n  }\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note: this works for more than just the Microsoft Graph, you can use the same technique to look up app roles and permissions from any of your\nenterprise applications."))))}l.isMDXComponent=!0},93:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),l=function(e){var r=n.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?n.a.createElement(f,s(s({ref:r},p),{},{components:t})):n.a.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);