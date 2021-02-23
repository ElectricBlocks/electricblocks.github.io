---
title: "Usage"
description: "How to use the Electric Blocks mod."
lead: "How to use the Electric Blocks mod."
date: 2021-02-22T17:27:44-08:00
lastmod: 2021-02-22T17:27:44-08:00
draft: false
images: []
menu: 
  docs:
    parent: "electric-blocks"
weight: 999
toc: true
---

This guide assumes you already have a working Electric Blocks mod installation. If not, please go back to the installation guides.

## Blocks and Items

Unlike other items in Minecraft, Electric Blocks cannot be crafted using in-game materials. The only way to obtain these blocks is through the creative menu or commands. We recommend that you use creative mode. When you're in creative mode, press `E` on your keyboard to open up the menu (this may vary if you have alternative keybindings or control schemes). Then click on the arrow in the top right.

{{< img src="creative-menu.png" alt="Minecraft Creative Menu" caption="<em>Minecraft Creative Menu</em>" class="border-0" >}}

If you have many mods enabled other than Electric Blocks, you may need to search the other creative tab pages, but eventually you should find a tab that looks like the one marked in this image:

{{< img src="creative-menu-ebtab.png" alt="Minecraft Creative Menu Tabs" caption="<em>Minecraft Creative Menu Tabs</em>" class="border-0" >}}

Click on this tab to open it and you should see the menu for all Electric Blocks that looks like this:

{{< img src="creative-menu-ebtab-opened.png" alt="Electric Blocks Creative Tab" caption="<em>Electric Blocks Creative Tab</em>" class="border-0" >}}

You can now drag the blocks from that tab into your inventory hotbar at the bottom of the menu. You can hover over the block to get the name of the block. Once the blocks are in your inventory, you can use these to build an electrical network in the Minecraft world. Here is an animated GIF showing you how you can create a very simple network consisting of an external grid, several wires, and a lamp block.

<img src="../basic-network.webp" alt="Electric Blocks Creative Tab" caption="<em>Electric Blocks Creative Tab</em>" class="border-0" style="width:100%;">

## Multimeter Tool

Now you've built a network, but how do you interact with it and how do you run simulations? By using the Multimeter! This item is a core part of how this mod works. First you're going to want to equip the Multimeter item from the Electric Blocks creative menu tab. This procedure is very similar to the previous section. Make sure that the item is in your hand. You can use the scrollwheel or number keys to select the item slot containing the Multimeter. Once you're weilding the Multimeter, you can perform two different operations. Left clicking on a block will toggle it on or off. Right clicking a block allows you to view and modify the block's values through a GUI.

### Toggle (Left Click)

All the main blocks (exlcuding wires), have a variable called `In Service` which indicates whether or not that particular block is enabled. Left clicking on the block will toggle this value to the opposite of its current state and then request a simulation with this new value. This function is kind of like flipping a light switch.

Speaking of which, here is a demo showing this feature in action. At the start of this clip the lamp is turned on, but the external grid is turned off. This means the lamp isn't receiving any power. When the external grid is left clicked, it is toggled into the enabled state and the lamp now receives power. After this, we left click on the lamp again to turn it off. While the external grid is on and capable of sending power, the lamp is off and so will not utilize any power.

<img src="../multimeter-toggle.webp" alt="Toggling With Multimeter" caption="<em>Toggling With Multimeter</em>" class="border-0" style="width:100%;">