---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/systems/inventory/"}
---

**Inventory System** – a system that manages the player’s inventory throughout its entire lifecycle, from entering the dungeon to exiting it.
## Description
Players will be able to collect [[Game Design Document/System and Mechanics/Mechanincs/Items/Use Item\|items]] during the run through the [[Game Design Document/System and Mechanics/Systems/Interaction\|interaction system]]. Items collected by the player are stored inside his inventory.
The inventory is an infinite list of items collected by the player, so the player can take as many items as they want.
![InventorySystemExample.png](/img/user/Game%20Design%20Document/Images/Examples/InventorySystemExample.png)
All items inside the player's inventory are sold when the player [[Game Design Document/System and Mechanics/Mechanincs/Exploration/Enter and exit the dungeon\|exits the dungeon]]. However, if the player dies, all items inside the inventory are lost.
## Included mechanics
- [[Game Design Document/System and Mechanics/Mechanincs/Items/Use Item\|Use Item]]
- [[Game Design Document/System and Mechanics/Mechanincs/Items/Pick up items\|Pick up items]]
- [[Game Design Document/System and Mechanics/Mechanincs/Items/Sell item\|Sell item]]
