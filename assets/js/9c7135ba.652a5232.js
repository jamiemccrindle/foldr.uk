(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return t?o.a.createElement(h,c(c({ref:n},l),{},{components:t})):o.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),r=(t(0),t(112)),i={slug:"azure-app-service-devcontainer",title:"Running a devcontainer in an Azure App Service",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["azure","bicep","app-service","docker","devcontainer"]},c={permalink:"/azure-app-service-devcontainer",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-06-01-app-service-devcontainer.md",source:"@site/blog/2021-06-01-app-service-devcontainer.md",description:"I love Visual Studio Code devcontainers. I was curious if you could use an App Service with a custom container as a remote devcontainer.",date:"2021-06-01T00:00:00.000Z",formattedDate:"June 1, 2021",tags:[{label:"azure",permalink:"/tags/azure"},{label:"bicep",permalink:"/tags/bicep"},{label:"app-service",permalink:"/tags/app-service"},{label:"docker",permalink:"/tags/docker"},{label:"devcontainer",permalink:"/tags/devcontainer"}],title:"Running a devcontainer in an Azure App Service",readingTime:3.67,truncated:!1,nextItem:{title:"Building an Azure App Service with a custom container using Bicep",permalink:"/azure-bicep-app-service-custom-container"}},s=[{value:"Creating an app service compatible devcontainer image",id:"creating-an-app-service-compatible-devcontainer-image",children:[]},{value:"Connecting to your devcontainer",id:"connecting-to-your-devcontainer",children:[]},{value:"How much will this cost?",id:"how-much-will-this-cost",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"My app service has restarted and I can&#39;t connect",id:"my-app-service-has-restarted-and-i-cant-connect",children:[]}]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I love Visual Studio Code devcontainers. I was curious if you could use an App Service with a custom container as a remote devcontainer."),Object(r.b)("p",null,"What follows are instructions on how to get a remote devcontainer running in an App Service over SSH."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"While this does appear to work, it seems a little fragile. The connection times out sporadically and I haven't used it to do development in earnest yet, so caveat emptor."))),Object(r.b)("h2",{id:"creating-an-app-service-compatible-devcontainer-image"},"Creating an app service compatible devcontainer image"),Object(r.b)("p",null,"In order to connect to your app service devcontainer via, you'll need to configure it's sshd as documented in the ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/configure-custom-container?pivots=container-linux#detect-https-session"},"Configure a custom container for Azure App Service")," guide from Microsoft."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sshd_config"},"Port 2222\nListenAddress 0.0.0.0\nLoginGraceTime 180\nX11Forwarding yes\nCiphers aes128-cbc,3des-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr\nMACs hmac-sha1,hmac-sha1-96\nStrictModes yes\nSyslogFacility DAEMON\nPasswordAuthentication yes\nPermitEmptyPasswords no\nPermitRootLogin yes\nSubsystem sftp internal-sftp\n")),Object(r.b)("p",null,"In addition to the devcontainer setup, you'll need to add add some additional configuration to your image for it to work in an app service. Specifically you'll need to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add your sshd_config"),Object(r.b)("li",{parentName:"ul"},"Set the root password to Docker! Yes, this does feel wrong but it's inaccessible unless you use an Azure AD authenticated tunnel."),Object(r.b)("li",{parentName:"ul"},"Add a webserver for the app service to host, in this case I'm using nginx")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dockerfile"},'# use the default microsoft dotnet 5 devcontainer\nFROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-5.0\n\n# add required packages including openssh-server and nginx\nRUN apt-get update \\\n    && apt-get -y install --no-install-recommends apt-transport-https curl ca-certificates lsb-release gnupg2 openssh-server nginx\n\nRUN echo "root:Docker!" | chpasswd\n\n# Copy the sshd_config file to the /etc/ssh/ directory\nCOPY sshd_config /etc/ssh/\n\n# Open port 2222 for SSH access\nEXPOSE 80 2222\n\n# Start up nginx and ssh and then sleep to keep the container alive\nCMD /usr/sbin/service nginx start && /usr/sbin/service ssh start && /usr/bin/sleep infinity\n')),Object(r.b)("h2",{id:"connecting-to-your-devcontainer"},"Connecting to your devcontainer"),Object(r.b)("p",null,"First, you'll need to create a tunnel to your app service devcontainer using the following command. Include the -p option to select a fixed port as this will make it easier to connect in future."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"az webapp create-remote-connection --resource-group RESOURCE_GROUP_NAME -n APP_SERVICE_NAME -p 61000\n")),Object(r.b)("p",null,"Visual Studio requires that you use a key based authentication. Copy your ssh public key to your devcontainer using the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# if you're on windows, use git bash for this\nssh-copy-id -i ~/.ssh/id_rsa.pub -p 61000 root@localhost\n")),Object(r.b)("p",null,"To be able to pull from your git repository over ssh, you'll want to use an ssh-agent and ssh-agent forwarding. On windows, you can start your ssh-agent with the following command in a PowerShell session running as Administrator"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-PowerShell"},"start-ssh-agent.cmd\n")),Object(r.b)("p",null,"Install the ",Object(r.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh"},"Remote - SSH")," Visual Studio Code Extension."),Object(r.b)("p",null,"Once it's installed, click the Remote Explorer icon on the left side of your Visual Studio Code window and click the + button to add a new SSH connection."),Object(r.b)("p",null,"Type in ",Object(r.b)("inlineCode",{parentName:"p"},"ssh -A root@localhost -p 61000")),Object(r.b)("p",null,"Then right click on the new ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," target in the list and click ",Object(r.b)("inlineCode",{parentName:"p"},"Connect to Host in New Window")),Object(r.b)("p",null,"Once you're connected, open up a terminal window and run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"mkdir /workspaces\ncd /workspaces\ngit clone SSH_URL_FOR_YOUR_REPOSITORY\n")),Object(r.b)("p",null,"Then click Open Folder on the left and selected /workspaces/NAME_OF_YOUR_REPO and you should be good to go."),Object(r.b)("p",null,"To see a working example of the setup, have a look at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jamiemccrindle/bicep-app-service-container"},"https://github.com/jamiemccrindle/bicep-app-service-container")),Object(r.b)("h2",{id:"how-much-will-this-cost"},"How much will this cost?"),Object(r.b)("p",null,"I've picked a relatively snappy P1v3 which has 2 cores and 8GB of RAM. Assuming a working year of approximately 48 weeks, working for 5 days a week with the machine running for half the day, a devcontainer running in an app service would cost \xa330.95 per developer."),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h3",{id:"my-app-service-has-restarted-and-i-cant-connect"},"My app service has restarted and I can't connect"),Object(r.b)("p",null,"If your app service restarts, you'll need to copy your public ssh key again. Also, you'll have an old entry in your known_hosts file. If you try and ssh into your machine you'll see this delightful message:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ ssh root@localhost -p 61000\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\n")),Object(r.b)("p",null,"Simply delete the offending line from your known hosts file. You could also switch off host key checking using ",Object(r.b)("inlineCode",{parentName:"p"},"StrictHostKeyChecking no")," and ",Object(r.b)("inlineCode",{parentName:"p"},"UserKnownHostsFile /dev/null")," in your ssh config file but you'd potentially open yourself up to man-in-the-middle attacks."))}p.isMDXComponent=!0}}]);