---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/mechanincs/rooms-entities/"}
---

**Rooms** – A mechanic that describes how entities are displaced in the rooms.
## Description
Each room is hand-crafted; therefore, its entities are defined in the design. 
Room entities are persistent. When a room is unloaded, the state of all its entities must be saved. For example, if the player kills all the enemies in a room and then exits, the enemies will still be dead when the player returns. The same applies to consumables and NPC dialogues.

¿El jugador tiene que matar a todos los enemigos para desbloquear los caminos? 
#TODO
## Entities list
- [[Game Design Document/System and Mechanics/Mechanincs/Mission Mechanics/NPCs\|NPCs]]
- [[Game Design Document/System and Mechanics/Mechanincs/Enemy Mechanics/Small Enemies\|Small Enemies]]
- [[Game Design Document/System and Mechanics/Mechanincs/Enemy Mechanics/Boss fight\|Boss]]
- [[Game Design Document/System and Mechanics/Mechanincs/Item Mechanics/Consumable items\|Consumable items]]
## Related Systems
- [[Game Design Document/System and Mechanics/Systems/Dungeon exploration system\|Dungeon exploration system]]