---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/systems/inventory-system/"}
---

**Inventory system** – This system shows how inventory works throughout its entire life cycle, from when the player enters the dungeon until they exit..

## Description
Players will be able to collect [[Game Design Document/System and Mechanics/Mechanincs/Item Mechanics/Consumable items\|items]] during the run through the [[Game Design Document/System and Mechanics/Systems/Dialogue system\|Dialogue system]]. Items collected by the player are stored inside his inventory.
The inventory is an infinite list of items collected by the player, so the player can take as many items as they want.
![InventorySystemExample.png](/img/user/Game%20Design%20Document/Images/InventorySystemExample.png)
All items inside the player's inventory are sold when the player [[Game Design Document/System and Mechanics/Mechanincs/Exploration Mechanics/Enter and exit the dungeon\|exits the dungeon]]. However, if the player dies, all items inside the inventory are lost.

## Included mechanics
- [[Game Design Document/System and Mechanics/Mechanincs/Item Mechanics/Consumable items\|Consumable items]]
- [[Game Design Document/System and Mechanics/Mechanincs/Item Mechanics/Picking up items\|Picking up items]]
- [[Game Design Document/System and Mechanics/Mechanincs/Item Mechanics/Selling items\|Selling items]]
