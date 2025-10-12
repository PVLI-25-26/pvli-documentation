---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/mechanincs/item-mechanics/consumable-items/"}
---

**Consumable item** – A mechanic that allows players to interact with consumables during a run.
## Description
The only thing the player can loot in a run are consumable items (The only type of item in the game). Items are held inside the player's [[Game Design Document/System and Mechanics/Systems/Inventory system\|Inventory]].
All items are consumables, and consuming them will give the player a buff (either temporary or for the entire run) or increase their stats.
All items have a price associated with them. When the player exits the run, any items that haven't been consumed become coins. ([[Game Design Document/System and Mechanics/Mechanincs/Item Mechanics/Selling items\|Selling items]]).
You can use items in [[Game Design Document/System and Mechanics/Systems/Missions system\|missions]]. This allows the player to lend items to NPCs. This doesn't consume the item or apply a bonus to the player. It makes the item disappear from the player's inventory, and the item can't be sold.
The player will be able to interact with objects by asking to grab them. If the player grabs the object, it disappears from the world and appears in the player's [[Game Design Document/System and Mechanics/Mechanincs/Item Mechanics/Picking up items\|Picking up items]].
## Related Systems
- [[Game Design Document/System and Mechanics/Systems/Inventory system\|Inventory system]]
