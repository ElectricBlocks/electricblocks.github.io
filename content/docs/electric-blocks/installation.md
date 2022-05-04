---
title: "Installation"
description: "How to get Electric Blocks running."
lead: "How to get Electric Blocks running."
date: 2021-02-23T17:32:56-08:00
lastmod: 2021-02-23T17:32:56-08:00
draft: false
images: []
menu: 
  docs:
    parent: "electric-blocks"
weight: 35
toc: true
---

Electric Blocks can be run in both single and multiplayer, and consists of two components - the Electric Blocks Minecraft mod itself, and the EBPP simulation server software. Here's how to install both.

{{< alert icon="⚠️" text="Running Electric Blocks and EBPP on the same computer will increase the workload on it. We recommend that you use a reasonably modern computer while using the Electric Blocks mod and EBPP at the same time. If this is not an option, check with your educational institution to see if they can setup a multiplayer server and public EBPP instance." >}}

### 1. Install Minecraft

Minecraft Java Edition is required to use this mod. If you have Minecraft installed already, you can skip this step.

Otherwise go to the Minecraft website and download and install it: <https://www.minecraft.net/download>

After downloading the client, double-click the icon to run it.

### 2. Install Forge

Once Minecraft is finished installing, make sure all Minecraft windows are closed. Then go to the Forge website and download the recommended 1.15.2 installer here: <http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html>

Once the Forge installer is done downloading, open the file to run it. The Forge installer will pop up. Make sure that the `Install client` button is selected. Click `OK` and the installer will start installation.

### 3. Install Electric Blocks

Once the Forge installer has completed, you will need to install the Electric Blocks mod. You can find an official release on our downloads page here: <https://github.com/ElectricBlocks/electricblocks/releases>

Download the `.jar` file and place it in your mods folder. This will vary based on your system but it can usually be found here:

Windows: `C:\Users\Your Username\AppData\Roaming\.minecraft`

Mac: `/Users/Your Username/Library/Application Support/minecraft`

Linux: `	~/.minecraft`

### 4. Install HWYLA

Electric Blocks **requires** the mod "Here's What You're Looking At" to run. A download link for Minecraft 1.15.2 can be found here: <https://curseforge.com/minecraft/mc-mods/hwyla/files/2880069>

Download the `.jar` file (it should be along the lines of `Hwyla-forge-1.10.8-B72_1.15.2.jar`) and place it in your mods folder, as in step 3.

### 5. Install and Launch EBPP

All power systems created in Minecraft are processed externally by a simulation server called EBPP. To install EBPP, go to the [EBPP Installation](</docs/ebpp/installation>) page and follow the instructions. Unless you know what you're doing, we **highly** recommend that you go with the `Docker Installation` and install EBPP on the same computer that you plan to use the Electric Blocks mod on. Docker will minimize the amount of extra configuration that you need to do.

If you're setting up a multiplayer server, you'll need to read some of the advanced EBPP installation documentation, as well as set up a multiplayer Forge server with both Electric Blocks and HWYLA installed.

### 6. Launch Minecraft

Now that everything is installed, you can launch Minecraft. Make sure you have `Minecraft: Java Edition` selected in the Minecraft client. Before pressing `Play`, verify that `Forge 1.15.2` is selected. The option is located to the left of the `Play` button. Once selected, press `Play` and Minecraft, with the Electric Blocks mod, should launch. You should now be good to hop into a Creative map and start doing power flow simulation!
