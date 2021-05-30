---
slug: azure-app-service-devcontainer
title: Running a devcontainer in an Azure App Service
author: Jamie McCrindle
author_title: foldr
author_url: https://github.com/jamiemccrindle
author_image_url: https://avatars.githubusercontent.com/u/909696?s=60&v=4
tags: [azure, bicep, app-service, docker, devcontainer]
---

I love Visual Studio Code devcontainers. I'm quite excited about CodeSpaces and I've applied for the beta but haven't got access yet. I could spin up a VM in Azure but I was curious if I could use an App Service with a custom container instead. 

What follows are instructions on how to get a remote devcontainer running in an App Service over SSH.

## Creating an app service compatible devcontainer image

In order to connect to your app service devcontainer via, you'll need to configure it's sshd as documented in the [Configure a custom container for Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/configure-custom-container?pivots=container-linux#detect-https-session) guide from Microsoft.

```sshd_config
Port 2222
ListenAddress 0.0.0.0
LoginGraceTime 180
X11Forwarding yes
Ciphers aes128-cbc,3des-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr
MACs hmac-sha1,hmac-sha1-96
StrictModes yes
SyslogFacility DAEMON
PasswordAuthentication yes
PermitEmptyPasswords no
PermitRootLogin yes
Subsystem sftp internal-sftp
```

In addition to the devcontainer setup, you'll need to add add some additional configuration to your image for it to work in an app service. Specifically you'll need to:

* Add your sshd_config
* Set the root password to Docker! Yes, this does feel wrong but it's inaccessible unless you use an Azure AD authenticated tunnel.
* Add a webserver for the app service to host, in this case I'm using nginx

```dockerfile
# use the default microsoft dotnet 5 devcontainer
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-5.0

# add required packages including openssh-server and nginx
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-transport-https curl ca-certificates lsb-release gnupg2 openssh-server nginx

RUN echo "root:Docker!" | chpasswd

# Copy the sshd_config file to the /etc/ssh/ directory
COPY sshd_config /etc/ssh/

# Open port 2222 for SSH access
EXPOSE 80 2222

# Start up nginx and ssh and then sleep to keep the container alive
CMD /usr/sbin/service nginx start && /usr/sbin/service ssh start && /usr/bin/sleep infinity
```

## Connecting to your devcontainer

First, you'll need to create a tunnel to your app service devcontainer using the following command. Include the -p option to select a fixed port as this will make it easier to connect in future.

```shell
az webapp create-remote-connection --resource-group RESOURCE_GROUP_NAME -n APP_SERVICE_NAME -p 61000
```

Visual Studio requires that you use a key based authentication. Copy your ssh public key to your devcontainer using the following:

```shell
# if you're on windows, use git bash for this
ssh-copy-id -i ~/.ssh/id_rsa.pub -p 61000 root@localhost
```

To be able to pull from your git repository over ssh, you'll want to use an ssh-agent and ssh-agent forwarding. On windows, you can start your ssh-agent with the following command in a PowerShell session running as Administrator

```PowerShell
start-ssh-agent.cmd
```

Install the [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) Visual Studio Code Extension.

Once it's installed, click the Remote Explorer icon on the left side of your Visual Studio Code window and click the + button to add a new SSH connection.

Type in `ssh -A root@localhost -p 61000`

Then right click on the new `localhost` target in the list and click `Connect to Host in New Window`

Once you're connected, open up a terminal window and run:

```shell
mkdir /workspaces
cd /workspaces
git clone SSH_URL_FOR_YOUR_REPOSITORY
```

Then click Open Folder on the left and selected /workspaces/NAME_OF_YOUR_REPO and you should be good to go.

To see a working example of the setup, have a look at https://github.com/jamiemccrindle/bicep-app-service-container

## How much will this cost?

I've picked a relatively snappy P1v3 which has 2 cores and 8GB of RAM. Assuming a working year of approximately 48 weeks, working for 5 days a week with the machine running for half the day, a devcontainer running in an app service would cost £30.95 per developer.

## Troubleshooting

### My app service has restarted and I can't connect

If your app service restarts, you'll need to copy your public ssh key again. Also, you'll have an old entry in your known_hosts file. If you try and ssh into your machine you'll see this delightful message:

```shell
$ ssh root@localhost -p 61000
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
```

Simply delete the offending line from your known hosts file. You could also switch off host key checking using `StrictHostKeyChecking no` in your ssh config file but you'd potentially open yourself up to man-in-the-middle attacks.