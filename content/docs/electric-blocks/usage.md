---
title: "Usage"
description: "Basic usage of the Electric Blocks mod."
lead: "Basic usage ofthe Electric Blocks mod."
date: 2021-02-22T17:27:44-08:00
lastmod: 2021-02-22T17:27:44-08:00
draft: false
images: []
menu: 
  docs:
    parent: "electric-blocks"
weight: 40
toc: true
---

This guide assumes you already have a working Electric Blocks mod installation. If not, please go back to the installation guides.

## Blocks and Items

Unlike other items in Minecraft, Electric Blocks cannot be crafted using in-game materials (yet). The only way to obtain these blocks is through the creative menu or commands. We recommend that you use creative mode. When you're in creative mode, press `E` on your keyboard to open up the block selection menu (this may vary if you have alternative keybindings or control schemes). Then click on the arrow in the top right.

{{< img src="creative-menu.png" alt="Minecraft Creative Menu" caption="<em>Minecraft Creative Menu</em>" class="border-0" >}}

If you have mods other than Electric Blocks installed, you may need to search the other creative tab pages, but eventually you should find a tab that looks like the one marked in this image (**UPDATE ME**):

{{< img src="creative-menu-ebtab.png" alt="Minecraft Creative Menu Tabs" caption="<em>Minecraft Creative Menu Tabs</em>" class="border-0" >}}

Click on that tab to open it and you should see the menu for all Electric Blocks that looks like this (**UPDATE ME**):

{{< img src="creative-menu-ebtab-opened.png" alt="Electric Blocks Creative Tab" caption="<em>Electric Blocks Creative Tab</em>" class="border-0" >}}

You can drag the blocks from that tab into your inventory hotbar at the bottom of the menu. With the blocks in your inventory, you can build an electrical network in the Minecraft world. Below is an animated GIF showing you how you can create a very simple network consisting of an external grid, several wires, and a lamp block (**UPDATE ME**):

<img src="../basic-network.webp" alt="Electric Blocks Creative Tab" caption="<em>Electric Blocks Creative Tab</em>" class="border-0" style="width:100%;">

## Multimeter Tool

Now you've built a network, but to interact with it and run simulations, you'll need a Multimeter. There are three different Multimeters - Intro, Intermediate, and Advanced - each of which display a certain amount of information for each block. The images below use the Grid block as an example.
- Intro Multimeter: Displays the bare basics (usually just Active Power).
- Intermediate Multimeter: Displays a little more (usually just adds Reactive Power).
- Advanced Multimeter: Displays everything (adds Bus Voltage, and everything else).

Certain blocks may display more information with the Intro Multimeter depending on their function. For example, the Battery block necessarily displays Maximum Energy and Charge Percent values.

For the purposes of this usage guide, we'll be using the Advanced Multimeter. When holding the Multimeter, you can perform two different actions. Left clicking on a block with it will toggle it on or off. Right clicking a block allows you to view and modify the block's values through a GUI.

### Toggle (Left Click)

Each block (excluding wires) has a variable called `In Service` which indicates whether or not that particular block is enabled. Left clicking on the block will toggle this value and request a new simulation. This function is like flipping a light switch.

Below is a demo showing this feature in action. At the start of this clip the lamp is turned on, but the external grid is turned off. This means the lamp is ready to receive power but isn't supplied any. When the external grid is left clicked, it is toggled into the enabled state and the lamp now receives power. After this, we left click on the lamp again to turn it off. While the external grid is on and capable of sending power, the lamp is off and so will not utilize any power. (**UPDATE ME**)

<img src="../multimeter-toggle.webp" alt="Toggling With Multimeter" caption="<em>Toggling With Multimeter</em>" class="border-0" style="width:100%;">

### Interact (Right Click)

All blocks, except wires, have specific inputs and outputs such as voltage, wattage, etc. Right clicking on the block will open up the specific GUI for that block. This menu allows you to set the inputs, view the outputs, and request a simulation for the network that block is in. Here is an example of what the GUI looks like (**UPDATE ME (and show intro/intermediate/advanced GUIs)**):

{{< img src="gui-ext-grid.png" alt="External Grid GUI" caption="<em>External Grid GUI</em>" class="border-0" >}}

Below the name of the block is a list of all the inputs and outputs for it. The inputs are at the top of the list, separated from the outputs below by a dashed line. Each entry in the input or output contains a label, a field for the numeric value, and the units of measure. At the very bottom are two buttons. The top button toggles whether or not the current block is enabled or not (the same as if you left-clicked it with the multimeter). The bottom button will submit any changes made and close the GUI. Here is an example of a different block (**UPDATE ME**):

{{< img src="gui-lamp.png" alt="Lamp GUI" caption="<em>Lamp GUI</em>" class="border-0" >}}

As you can see, the specific inputs and outputs are different, but the fundamental layout is the same. Whenever you open up a GUI, you can close it by either hitting your escape key (`ESC`) or by clicking the `Done` button. If you press escape, any changes you made will be discarded and no simulation updates will occur. If you hit the Done button, a simulation will only occur if you made changes to the inputs or the `In Service` status. The text of the bottom button will change depending on whether or not a change was made. Here is a demonstration of GUIs in action (**UPDATE ME**):

<img src="../multimeter-interact.webp" alt="Toggling With Multimeter" caption="<em>Toggling With Multimeter</em>" class="border-0" style="width:100%;"><br>

(**UPDATE ME**)The lamp block is right-clicked to pull up the GUI. The block currently has `Max Power` set to `0` and `In Service` set to `false`. The lamp is off and unpowered in its current state. You can see this in the outputs. The `Result Power` field is `0` and the `Light` percentage is not a positive value. We want to change this though. The `Max Power` input is set to `0.1 MW`, the `In Service` button is toggled to `true` and the submit button is pressed to close the menu.

Once the menu is closed, a simulation request is processed. We right click on the block again to pull up the new information. As you can see, the outputs have now been updated indicating the lamp is now powered and working!
