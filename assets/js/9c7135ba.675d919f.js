(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{112:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(112)),i={slug:"azure-app-service-devcontainer",title:"Running a devcontainer in an Azure App Service",author:"Jamie McCrindle",author_title:"foldr",author_url:"https://github.com/jamiemccrindle",author_image_url:"https://avatars.githubusercontent.com/u/909696?s=60&v=4",tags:["azure","bicep","app-service","docker","devcontainer"]},c={permalink:"/azure-app-service-devcontainer",editUrl:"https://github.com/jamiemccrindle/foldr.uk/tree/main/foldr-uk-website/blog/blog/2021-06-01-app-service-devcontainer.md",source:"@site/blog/2021-06-01-app-service-devcontainer.md",description:"Creating an app service compatible devcontainer image",date:"2021-06-01T00:00:00.000Z",formattedDate:"June 1, 2021",tags:[{label:"azure",permalink:"/tags/azure"},{label:"bicep",permalink:"/tags/bicep"},{label:"app-service",permalink:"/tags/app-service"},{label:"docker",permalink:"/tags/docker"},{label:"devcontainer",permalink:"/tags/devcontainer"}],title:"Running a devcontainer in an Azure App Service",readingTime:2.62,truncated:!1,nextItem:{title:"Building an Azure App Service with a customer container using Bicep",permalink:"/azure-bicep-app-service-custom-container"}},s=[{value:"Creating an app service compatible devcontainer image",id:"creating-an-app-service-compatible-devcontainer-image",children:[]},{value:"Connecting to your devcontainer",id:"connecting-to-your-devcontainer",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"creating-an-app-service-compatible-devcontainer-image"},"Creating an app service compatible devcontainer image"),Object(o.b)("p",null,"In order to connect to your app service devcontainer via, you'll need to configure it's sshd as documented in the ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/configure-custom-container?pivots=container-linux#detect-https-session"},"Configure a custom container for Azure App Service")," guide from Microsoft."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sshd_config"},"Port 2222\nListenAddress 0.0.0.0\nLoginGraceTime 180\nX11Forwarding yes\nCiphers aes128-cbc,3des-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr\nMACs hmac-sha1,hmac-sha1-96\nStrictModes yes\nSyslogFacility DAEMON\nPasswordAuthentication yes\nPermitEmptyPasswords no\nPermitRootLogin yes\nSubsystem sftp internal-sftp\n")),Object(o.b)("p",null,"In addition to the devcontainer setup, you'll need to add add some additional configuration to your image for it to work in an app service. Specifically you'll need to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add your sshd_config"),Object(o.b)("li",{parentName:"ul"},"Set the root password to Docker! Yes, this does feel wrong but it's inaccessible unless you use an Azure AD authenticated tunnel."),Object(o.b)("li",{parentName:"ul"},"Add a webserver for the app service to host, in this case I'm using nginx")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dockerfile"},'# use the default microsoft dotnet 5 devcontainer\nFROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-5.0\n\n# add required packages including openssh-server and nginx\nRUN apt-get update \\\n    && apt-get -y install --no-install-recommends apt-transport-https curl ca-certificates lsb-release gnupg2 openssh-server nginx\n\nRUN echo "root:Docker!" | chpasswd\n\n# Copy the sshd_config file to the /etc/ssh/ directory\nCOPY sshd_config /etc/ssh/\n\n# Open port 2222 for SSH access\nEXPOSE 80 2222\n\n# Start up nginx and ssh and then sleep to keep the container alive\nCMD /usr/sbin/service nginx start && /usr/sbin/service ssh start && /usr/bin/sleep infinity\n')),Object(o.b)("h2",{id:"connecting-to-your-devcontainer"},"Connecting to your devcontainer"),Object(o.b)("p",null,"First, you'll need to create a tunnel to your app service devcontainer using the following command. Include the -p option to select a fixed port as this will make it easier to connect in future."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"az webapp create-remote-connection --resource-group RESOURCE_GROUP_NAME -n APP_SERVICE_NAME -p 61000\n")),Object(o.b)("p",null,"Visual Studio requires that you use a key based authentication. Copy your ssh public key to your devcontainer using the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# if you're on windows, use git bash for this\nssh-copy-id -i ~/.ssh/id_rsa.pub -p 61000 root@localhost\n")),Object(o.b)("p",null,"To be able to pull from your git repository over ssh, you'll want to use an ssh-agent and ssh-agent forwarding. On windows, you can start your ssh-agent with the following command in a PowerShell session running as Administrator"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-PowerShell"},"start-ssh-agent.cmd\n")),Object(o.b)("p",null,"Install the ",Object(o.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh"},"Remote - SSH")," Visual Studio Code Extension."),Object(o.b)("p",null,"Once it's installed, click the Remote Explorer icon on the left side of your Visual Studio Code window and click the + button to add a new SSH connection."),Object(o.b)("p",null,"Type in ",Object(o.b)("inlineCode",{parentName:"p"},"ssh -A root@localhost -p 61000")),Object(o.b)("p",null,"Then right click on the new ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," target in the list and click ",Object(o.b)("inlineCode",{parentName:"p"},"Connect to Host in New Window")),Object(o.b)("p",null,"Once you're connected, open up a terminal window and run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"mkdir /workspaces\ncd /workspaces\ngit clone SSH_URL_FOR_YOUR_REPOSITORY\n")),Object(o.b)("p",null,"Then click Open Folder on the left and selected /workspaces/NAME_OF_YOUR_REPO and you should be good to go."),Object(o.b)("p",null,"To see a working example of the setup, have a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jamiemccrindle/bicep-app-service-container"},"https://github.com/jamiemccrindle/bicep-app-service-container")),Object(o.b)("h1",{id:"how-much-will-this-cost"},"How much will this cost?"),Object(o.b)("p",null,"I've picked a relatively snappy P1v3 which has 2 cores and 8GB of RAM. Assuming a working year of approximately 48 weeks, working for 5 days a week with the machine running for half the day, a devcontainer running in an app service would cost \xa330.95 per developer."))}p.isMDXComponent=!0}}]);