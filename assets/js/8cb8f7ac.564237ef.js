(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rotation.drawio-74132fb1c49e6242631f86f6761209c4.svg"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(91)),s={slug:"terraform-rotate-secrets",title:"Safely rotate secrets with terraform",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["terraform","secrets","security"]},i={permalink:"/terraform-rotate-secrets",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-04-10-terraform-rotate-secrets.md",source:"@site/blog/2021-04-10-terraform-rotate-secrets.md",description:"Rotating secrets is a Good Thing&trade; as it limits the length of a time a compromised set of credentials can be used for.",date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"secrets",permalink:"/tags/secrets"},{label:"security",permalink:"/tags/security"}],title:"Safely rotate secrets with terraform",readingTime:1.955,truncated:!1,prevItem:{title:"Bootstrap terraform state in azure",permalink:"/bootstrap-terraform-state-in-azure"}},c=[],l={toc:c};function d(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rotating secrets is a Good Thing","\u2122"," as it limits the length of a time a compromised set of credentials can be used for."),Object(o.b)("p",null,"It's quite difficult to make secret rotation atomic i.e. changing a secret in your identity provider at exactly the same\ntime you change the secret in the system that uses it for authentication. Mismatches between the values will result in\nauthentication failures."),Object(o.b)("p",null,"The ideal is where the identity provider supports multiple valid secrets for a single identity e.g. Azure Service Principals. If that's\nthe case, you can have 2 secrets active at the same time and rotate them on offset time periods e.g.:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"password rotation",src:a(100).default,title:"Secret Rotation"})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This example uses secrets that expire after 60 days and rotates them each month. The mechanism supports rotating secrets more frequently\nso pick an expiry window that meets your risk appetite. The limiting factor is often when infrastructure needs to be redeployed after\na secret is rotated."))),Object(o.b)("p",null,"In the terraform below, I've set up 2 passwords, one called ",Object(o.b)("inlineCode",{parentName:"p"},"even")," and one called ",Object(o.b)("inlineCode",{parentName:"p"},"odd"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"odd")," password rotates at the beginning of the odd months and is the current password for those months i.e.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"January, March, May, July, September, November")),Object(o.b)("p",null,"And the ",Object(o.b)("inlineCode",{parentName:"p"},"even")," password rotates at the beginning of the even months and is the current password for those months i.e.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"February, April, June, August, October, December")),Object(o.b)("p",null,"And now for the terraform:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-terraform"},'variable "date" {\n    type = string\n}\n\nlocals {\n  date        = tonumber(var.date)\n  odd_keeper  = floor((local.date + 1) / 2)\n  even_keeper = floor(local.date / 2)\n  use_even    = local.date % 2 == 0\n}\n\nresource "random_password" "odd" {\n  keepers = {\n    "date" = local.odd_keeper\n  }\n  length           = 64\n  special          = true\n}\n\nresource "random_password" "even" {\n  keepers = {\n    "date" = local.even_keeper\n  }\n  length           = 64\n  special          = true\n}\n\n# this example just outputs the password\n# but you\'d typically use this as a property of\n# the system(s) that need the password.\noutput "current_secret" {\n    value = local.use_even \n                ? random_password.even.result \n                : random_password.odd.result\n}\n')),Object(o.b)("p",null,"For this to work, you need to supply a ",Object(o.b)("inlineCode",{parentName:"p"},"date")," variable when you call terraform that contains the current year and month e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'terraform apply -auto-approve -var="date=`date +%Y%m`"\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Terraform will store these secrets in terraform state, so make sure you're ",Object(o.b)("a",{parentName:"p",href:"https://www.terraform.io/docs/language/state/sensitive-data.html"},"using a backend that is appropriately secured"),"."))))}d.isMDXComponent=!0}}]);