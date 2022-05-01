---
title: "Help"
description: "General help for various issues."
lead: "General help for various issues."
date: 2021-02-23T18:08:06-08:00
lastmod: 2021-02-23T18:08:06-08:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 25
toc: true
---

## FAQ

### What's this mod for? Why would I use it?

Electric Blocks is a Minecraft mod designed to aid in power engineering research and instruction. This mod simplifies the process of constructing an electrical network and running a power flow study on it. If you don't know what that means, this mod might not be for you. This mod only minimally supplements normal Minecraft gameplay - it's mostly an academic tool. If you want to find out more about the mod, we recommend that you read the [Project](/docs/project/overview/) section to find out why we made this mod and how it works.

### The Electric Blocks mod fails to load when I launch Minecraft, and the error says something about "IComponentProvider"!

You don't have HWYLA installed. See step 4 in the [Quick-Start](/docs/prologue/quick-start/) section.

### How do I fix the error "ElectricBlocks could not connect to simulation server!"?

If you're in single-player, make sure that you followed all the instructions for single-player installation. The mod requires a connection to an EBPP (local or remote) server to function properly. If you don't have EBPP installed, you will need to install it.

If you're connecting to a multiplayer server, then you should notify your server administrator and have them look into this.

If you're a multiplayer server administrator, make sure you followed the instructions for installing Electric Blocks on a multiplayer Minecraft server. EBPP will need to be correctly configured as well. If you have both the mod and simulation server correctly configured and you still get this error, try the following:

1. Enable `logJSONRequests` in your server configuration file.
2. Restart the Minecraft server so the config change will take effect.
3. Try to run a simulation in-game.
4. Check the console output for both the request and any errors.

Those errors should hopefully help you narrow down whats causing the issue. If not, [Contact](#contact) us and we'll see if we can help.

### How do I stop getting convergence errors?

All power flow studies are done using an iterative approach with attempts to converge on a solution. A network can fail to converge for a wide variety of reasons. The most common reasons include:

* There is no external grid or slack bus in the network or it is not in service.
* There are buses with more than one generator or external grid.
* The scale of input values are too high or too low to be accurately processed.
* There are open switches which need to be closed for the network to work.
* There are lines that directly connect inconsistent voltage levels.
* There are lines with zero impedance.
* There are components whose nominal voltages differ from the nominal voltages of the buses they're connected to.
* Usage of wrong reference system for power values of loads and generators.

Check to make sure that none of these conditions apply to your network. We plan to include a diagnostic feature in the future that will try to help you identify what the issue is in the system. For now, we recommend having someone knowledgeable in power engineering examine your network to identify potential issues.

### Does Electric Blocks mod support isolated microgrids?

Electric Blocks is based on PandaPower which *can* be used to model isolated microgrids, but this is not a core feature. PandaPower requires an external grid connection to serve as a slack bus for the network and so our mod does as well. Special considerations will need to be made to ensure that the model behaves correctly. We recommend consulting an experienced power engineer regarding isolated microgrids. You can read more about PandaPower and isolated microgrids in this masters thesis: [http://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=8937880&fileOId=8937884](http://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=8937880&fileOId=8937884)

### How do I file a bug report?

Thanks for your help hunting bugs! Please visit our [Contact](#contact) section and open an issue report.

### How do I request an enhancement or feature addition?

We appreciate any insight we can get on improving our software. Our project is entirely free and developed on a volunteer basis, but if we like your idea we might implement it. Please visit our [Contact](#contact) section and open an issue for an enhancement.

## Contact

Before contacting us, please make sure that you've thoroughly read the relevant documentation. Most questions should be answered there. Remember that we made this project on a volunteer basis. We aren't part of any company or organization. We will try to help, but we aren't going to be your IT admins. With that out of the way, here is how you can contact us.

For bug reports or feature requests for the Electric Blocks Minecraft mod, open an issue here: [https://github.com/ElectricBlocks/electricblocks/issues](https://github.com/ElectricBlocks/electricblocks/issues)

For bug reports or feature requests for the EBPP simulation server, open an issue here: [https://github.com/ElectricBlocks/ebpp/issues](https://github.com/ElectricBlocks/ebpp/issues)

If you're unsure if your report is for Electric Blocks or EBPP, use the Electric Blocks link.

For technical support, start a new thread on our discussion board: [https://github.com/ElectricBlocks/electricblocks/discussions/categories/q-a](https://github.com/ElectricBlocks/electricblocks/discussions/categories/q-a)

For all other inquiries, please email the project sponsor, Dr. Conte de Leon, at [dcontedeleon@uidaho.edu](mailto:dcontedeleon@uidaho.edu)
