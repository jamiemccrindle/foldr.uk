(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,h=p["".concat(r,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),i=(n(0),n(118)),r={slug:"azure-app-service-devcontainer",title:"Running a devcontainer in an Azure App Service",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["azure","bicep","app-service","docker","devcontainer"]},c={permalink:"/azure-app-service-devcontainer",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-06-01-app-service-devcontainer.md",source:"@site/blog/2021-06-01-app-service-devcontainer.md",description:"I love Visual Studio Code devcontainers. I was curious if you could use an App Service with a custom container as a remote devcontainer.",date:"2021-06-01T00:00:00.000Z",formattedDate:"June 1, 2021",tags:[{label:"azure",permalink:"/tags/azure"},{label:"bicep",permalink:"/tags/bicep"},{label:"app-service",permalink:"/tags/app-service"},{label:"docker",permalink:"/tags/docker"},{label:"devcontainer",permalink:"/tags/devcontainer"}],title:"Running a devcontainer in an Azure App Service",readingTime:3.77,truncated:!1,prevItem:{title:"Exploiting Visual Studio Code Devcontainers",permalink:"/exploiting-visual-studio-code-devcontainers"},nextItem:{title:"Building an Azure App Service with a custom container using Bicep",permalink:"/azure-bicep-app-service-custom-container"}},s=[{value:"Creating an app service compatible devcontainer image",id:"creating-an-app-service-compatible-devcontainer-image",children:[]},{value:"Connecting to your devcontainer",id:"connecting-to-your-devcontainer",children:[]},{value:"How much will this cost?",id:"how-much-will-this-cost",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"My app service has restarted and I can&#39;t connect",id:"my-app-service-has-restarted-and-i-cant-connect",children:[]},{value:"I&#39;m having trouble getting SSH and Visual Studio Code working together",id:"im-having-trouble-getting-ssh-and-visual-studio-code-working-together",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I love Visual Studio Code devcontainers. I was curious if you could use an App Service with a custom container as a remote devcontainer."),Object(i.b)("p",null,"What follows are instructions on how to get a remote devcontainer running in an App Service over SSH."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"While this does appear to work, it seems a little fragile. The connection times out sporadically and I haven't used it to do development in earnest yet, so caveat emptor."))),Object(i.b)("h2",{id:"creating-an-app-service-compatible-devcontainer-image"},"Creating an app service compatible devcontainer image"),Object(i.b)("p",null,"In order to connect to your app service devcontainer via, you'll need to configure it's sshd as documented in the ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/configure-custom-container?pivots=container-linux#detect-https-session"},"Configure a custom container for Azure App Service")," guide from Microsoft."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sshd_config"},"Port 2222\nListenAddress 0.0.0.0\nLoginGraceTime 180\nX11Forwarding yes\nCiphers aes128-cbc,3des-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr\nMACs hmac-sha1,hmac-sha1-96\nStrictModes yes\nSyslogFacility DAEMON\nPasswordAuthentication yes\nPermitEmptyPasswords no\nPermitRootLogin yes\nSubsystem sftp internal-sftp\n")),Object(i.b)("p",null,"In addition to the devcontainer setup, you'll need to add add some additional configuration to your image for it to work in an app service. Specifically you'll need to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add your sshd_config"),Object(i.b)("li",{parentName:"ul"},"Set the root password to Docker! Yes, this does feel wrong but it's inaccessible unless you use an Azure AD authenticated tunnel."),Object(i.b)("li",{parentName:"ul"},"Add a webserver for the app service to host, in this case I'm using nginx")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dockerfile"},'# use the default microsoft dotnet 5 devcontainer\nFROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-5.0\n\n# add required packages including openssh-server and nginx\nRUN apt-get update \\\n    && apt-get -y install --no-install-recommends apt-transport-https curl ca-certificates lsb-release gnupg2 openssh-server nginx\n\nRUN echo "root:Docker!" | chpasswd\n\n# Copy the sshd_config file to the /etc/ssh/ directory\nCOPY sshd_config /etc/ssh/\n\n# Open port 2222 for SSH access\nEXPOSE 80 2222\n\n# Start up nginx and ssh and then sleep to keep the container alive\nCMD /usr/sbin/service nginx start && /usr/sbin/service ssh start && /usr/bin/sleep infinity\n')),Object(i.b)("h2",{id:"connecting-to-your-devcontainer"},"Connecting to your devcontainer"),Object(i.b)("p",null,"First, you'll need to create a tunnel to your app service devcontainer using the following command. Include the -p option to select a fixed port as this will make it easier to connect in future."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"az webapp create-remote-connection --resource-group RESOURCE_GROUP_NAME -n APP_SERVICE_NAME -p 61000\n")),Object(i.b)("p",null,"Visual Studio requires that you use a key based authentication. Copy your ssh public key to your devcontainer using the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# if you're on windows, use git bash for this\nssh-copy-id -i ~/.ssh/id_rsa.pub -p 61000 root@localhost\n")),Object(i.b)("p",null,"To be able to pull from your git repository over ssh, you'll want to use an ssh-agent and ssh-agent forwarding. On windows, you can start your ssh-agent with the following command in a PowerShell session running as Administrator"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-PowerShell"},"start-ssh-agent.cmd\n")),Object(i.b)("p",null,"Install the ",Object(i.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh"},"Remote - SSH")," Visual Studio Code Extension."),Object(i.b)("p",null,"Once it's installed, click the Remote Explorer icon on the left side of your Visual Studio Code window and click the + button to add a new SSH connection."),Object(i.b)("p",null,"Type in ",Object(i.b)("inlineCode",{parentName:"p"},"ssh -A root@localhost -p 61000")),Object(i.b)("p",null,"Then right click on the new ",Object(i.b)("inlineCode",{parentName:"p"},"localhost")," target in the list and click ",Object(i.b)("inlineCode",{parentName:"p"},"Connect to Host in New Window")),Object(i.b)("p",null,"Once you're connected, open up a terminal window and run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"mkdir /workspaces\ncd /workspaces\ngit clone SSH_URL_FOR_YOUR_REPOSITORY\n")),Object(i.b)("p",null,"Then click Open Folder on the left and selected /workspaces/NAME_OF_YOUR_REPO and you should be good to go."),Object(i.b)("p",null,"To see a working example of the setup, have a look at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jamiemccrindle/bicep-app-service-container"},"https://github.com/jamiemccrindle/bicep-app-service-container")),Object(i.b)("h2",{id:"how-much-will-this-cost"},"How much will this cost?"),Object(i.b)("p",null,"I've picked a relatively snappy P1v3 which has 2 cores and 8GB of RAM. Assuming a working year of approximately 48 weeks, working for 5 days a week with the machine running for half the day, a devcontainer running in an app service would cost \xa330.95 per developer."),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("h3",{id:"my-app-service-has-restarted-and-i-cant-connect"},"My app service has restarted and I can't connect"),Object(i.b)("p",null,"If your app service restarts, you'll need to copy your public ssh key again. Also, you'll have an old entry in your known_hosts file. If you try and ssh into your machine you'll see this delightful message:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ ssh root@localhost -p 61000\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\n")),Object(i.b)("p",null,"Simply delete the offending line from your known hosts file. You could also switch off host key checking using ",Object(i.b)("inlineCode",{parentName:"p"},"StrictHostKeyChecking no")," and ",Object(i.b)("inlineCode",{parentName:"p"},"UserKnownHostsFile /dev/null")," in your ssh config file but you'd potentially open yourself up to man-in-the-middle attacks."),Object(i.b)("h3",{id:"im-having-trouble-getting-ssh-and-visual-studio-code-working-together"},"I'm having trouble getting SSH and Visual Studio Code working together"),Object(i.b)("p",null,"Have a look here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/ssh"},"https://code.visualstudio.com/docs/remote/ssh")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/troubleshooting#_ssh-tips"},"https://code.visualstudio.com/docs/remote/troubleshooting#_ssh-tips"))))}u.isMDXComponent=!0}}]);