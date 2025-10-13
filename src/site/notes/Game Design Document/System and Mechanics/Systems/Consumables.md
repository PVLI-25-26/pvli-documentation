---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/systems/consumables/"}
---

**Consumables System** – a system responsible for managing all logic related to consumable items in the game.
## Description
#TODO
This system defines the types of consumables, their effects, durations, and interactions with the player and other gameplay systems. It handles:

- Buffs applied by consumables (temporary or lasting for the entire run)
- Stat modifications
- Rules for lending items to NPCs in [[Game Design Document/System and Mechanics/Systems/Missions\|Missions]]
- [[Game Design Document/System and Mechanics/Mechanincs/Items/Sell item\|Conversion]] of unused consumables into currency 
- Interaction with inventory and item usage mechanics

The system ensures consistency in how consumables behave and how their effects are applied, providing a central point for balancing and extending consumable functionality.

## Item progression
[[Game Design Document/System and Mechanics/Mechanincs/Items/Use Item\|Use Items]] increase its effect's value as the player [[Game Design Document/System and Mechanics/Systems/Difficulty#Description\|explores the dungeon]]. This increased value is represented as an increase in the item's statistics and associated gold value.
This ensures that the player is rewarded if they are capable of surviving for longer. As the enemies also increase in strength, the items will give the player stronger buffs when consumed, making them still worth the consumption even if their value is higher.

The value of items increases in three levels (`I`, `II` and `III`)  with `I` being the lowest and `III` the highest.
![ItemProgressionExample.png](/img/user/Game%20Design%20Document/Images/Examples/ItemProgressionExample.png)
## Consumable types
#TODO `List of consumables`
## Related Systems
- [[Game Design Document/System and Mechanics/Systems/Inventory\|Inventory]]
- [[Game Design Document/System and Mechanics/Systems/Missions\|Missions]]