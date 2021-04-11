(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),s=(r(0),r(87)),o={slug:"terraform-rotate-secrets",title:"Rotate secrets with terraform",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["terraform","secrets"]},i={permalink:"/terraform-rotate-secrets",editUrl:"https://github.com/jamiemccrindle/foldr.uk/foldr-uk-website/blog/blog/2021-04-10-terraform-rotate-secrets.md",source:"@site/blog/2021-04-10-terraform-rotate-secrets.md",description:"In this series, I'll be using this mechanism to safely rotate Azure Service Principal credentials stored in a GitHub Actions Secret",date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"secrets",permalink:"/tags/secrets"}],title:"Rotate secrets with terraform",readingTime:1.665,truncated:!1},l=[],c={toc:l};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In this series, I'll be using this mechanism to safely rotate Azure Service Principal credentials stored in a GitHub Actions Secret\nusing terraform."),Object(s.b)("p",null,"In this blog post, I'll focus on the secret rotation mechanism in terraform."),Object(s.b)("p",null,"Rotating secrets is a Good Thing","\u2122"," as it limits the length of a time a compromised set of credentials can be used for."),Object(s.b)("p",null,"If you do implement secret rotation with a single secret a different challenge is ensuring that the secret\nis rotated in the identity provider at the same time as in the services that use the secret or you may have authentication failures."),Object(s.b)("p",null,"The ideal is where the identity provider supports multiple secrets for a single identity e.g. Azure Service Principals. If that's\nthe case, you can have 2 secrets active at the same time and rotate them on offset time periods e.g.:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"password rotation",src:r(97).default,title:"Secret Rotation"})),Object(s.b)("p",null,"This mechanism should allow you to pick whatever password expiry window that suits your risk appetite but in this example,\nI'll work with passwords that are valid 60 days."),Object(s.b)("p",null,"I've set up 2 passwords, one called ",Object(s.b)("inlineCode",{parentName:"p"},"even")," and one called ",Object(s.b)("inlineCode",{parentName:"p"},"odd"),"."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"odd")," password rotates at the beginning of the odd months and is the current password for those months i.e.:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"January, March, May, July, September, November")),Object(s.b)("p",null,"And the ",Object(s.b)("inlineCode",{parentName:"p"},"even")," password rotates at the beginning of the even months and is the current password for those months i.e.:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"February, April, June, August, October, December")),Object(s.b)("p",null,"The following is the terraform that acheives this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-terraform"},'locals {\n  date        = tonumber(var.date)\n  odd_keeper  = floor((local.date + 1) / 2)\n  even_keeper = floor(local.date / 2)\n  use_even    = local.date % 2 == 0\n}\n\nresource "random_password" "odd" {\n  keepers = {\n    "date" = local.odd_keeper\n  }\n  length           = 32\n  special          = true\n  override_special = "_%@"\n}\n\nresource "random_password" "even" {\n  keepers = {\n    "date" = local.even_keeper\n  }\n  length           = 32\n  special          = true\n  override_special = "_%@"\n}\n\noutput "current_secret" {\n    value = local.date % 2 == 0 \n                ? random_password.even.result \n                : random_password.odd.result\n}\n')))}d.isMDXComponent=!0},97:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/rotation.drawio-2fa9fba363f4b1f1d7a40b82d61437e2.svg"}}]);