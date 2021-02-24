---
title: "Installation"
description: ""
lead: ""
date: 2021-02-23T19:21:31-08:00
lastmod: 2021-02-23T19:21:31-08:00
draft: false
images: []
menu: 
  docs:
    parent: "ebpp"
weight: 55
toc: true
---

## Singleplayer Install

This guide is for users who have little or no server administration experience and are trying to set things up for singleplayer use. This guide omits a lot of important information for multiplayer setups and includes a lot of unnecessary information on how to do every step on the install process. This is intended to make it as easy as possible for novices to get started. If you're an IT administrator trying to setup a multiplayer server, please navigate to the [Advanced Install](#advanced-install) guide. I'm sure you'll find it to be both more detailed and more concise.

***THIS SECTION IS UNDER CONSTRUCTION***

## Advanced Install

This guide covers installation for advanced users. If you're trying to setup EBPP for multiplayer servers then you're in the right place.

{{< alert icon="❌" text="Once you're done installing, make sure to read the advanced info section. There is a lot of important information that you should seriously consider." >}}

When installing this software you have two options. The first option uses docker to automate the process. This option is easier to do. I would pretty highly recommend using Docker over a bare metal installation. The second option is the manual installation.

### Docker Method

First make sure you have docker installed on your computer/server. Then build with this command:

```sh
docker build github.com/ElectricBlocks/ebpp -t ebpp
```

Once the docker image is finished building, you can run with the command:

```sh
docker run -d -p 1127:1127 ebpp
```

### Manual Method

To install manually, you will need to have Python 3.8+, pip, and Git.

```sh
git clone https://github.com/ElectricBlocks/ebpp.git
cd ebpp
pip install -r requirements.txt
```

Once the python packages are installed, you can run with the command:

```sh
python ebpp.py
```

## Advanced Information

### Configuration

EBPP uses environment variables for configuration. The easiest way to load these variables is to create a `.env` file in the EBPP directory. The environment file will not overwrite any environment variables and you may set them anyway you like. The option to use a `.env` file is provided for convenience. The file should contain the contents:

```sh
EBPP_HOST=0.0.0.0
EBPP_PORT=1127
```

These defaults should work fine, but you should change these to best fit your particular setup. Once you have configured and launched EBPP, you can test to ensure it is working and accessible by visiting `http://[EBPP_HOST]:[EBPP_PORT]`. The API endpoint is `http://[EBPP_HOST]:[EBPP_PORT]/api`.

### Security Considerations

EBPP is **NOT** designed for public facing scenarios and doesn't have any built-in security features. For this reason, we highly recommend that you install EBPP inside of a Docker container or some other virtualized environment. EBPP executes code based on packet input and so we it is highly probable that there is a remote code execution vulnerability somewhere in there. We have never been security audited nor are we likely to be any time soon.

The default configuration binds to `0.0.0.0` which accepts requests from any address regardless of source. This is the easiest to use, but also insecure. If you are running a Minecraft server, we recommend that you bind EBPP to the loopback address or an isolated Docker network address to ensure that EBPP is only accessible by the Minecraft server itself. We cannot make any kind of guarantees about the security of this software, especially if you don't take measures to isolate it from network access. If you are running EBPP on the same virtual machine as the Minecraft server, you must run EBPP as a different user that doesn't have file permissions to read or write from anything non-essential. The user will need read access to your normal system files and should not have write access to anything. 

If you install EBPP on a separate server than the one hosting the Minecraft server we recommend that you configure EBPP to only be accessible by LAN IP. Making EBPP only available through an institutional VPN is probably a good idea. We also recommend setting up strict firewall rules to ensure that communication only occurs between EBPP and your various Minecraft servers.

If you do choose to run EBPP in a public facing setting, you will need to take several measures to protect your security and performance. First of all, EBPP should be run in a virtual machine or other resource limited container. That virtual machine should be in a DMZ that doesn't have access to any other I/O or network resources. EBPP doesn't have any built in authentication, encryption, or scaling mechanisms. To deal with this, you should setup a standalone WSGI container such as Gunicorn or uWSGI which is only accessible through a reverse proxy like Apache, Nginx, or Caddy. You may want to also utilize some sort of rate limiting or even an intrusion detection system like Fail2ban. While EBPP can be easily setup to utilize SSL through a reverse proxy, the Electric Blocks mod is not currently designed to support this. While a MITM attack seems unlikely, it is possible that confidential information could be leaked since no encryption is in use. If this is a concern, do not setup EBPP in a public facing setting.