---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/systems/dungeon-exploration/"}
---

**Dungeon Exploration System** – a system that defines the layout of the dungeon and manages the player’s movement between rooms and it's content.
## Description
The dungeon is composed by rooms. Each room has a number of [[Game Design Document/System and Mechanics/Mechanincs/Exploration/Change Room\|paths]] that connect with other rooms (like Hades or Isaac). As the player traverses new rooms, the game becomes harder (look at [[Game Design Document/System and Mechanics/Systems/Difficulty\|Difficulty]]).
Rooms work like isolated scenes and are hand-crafted. Each room has [[Game Design Document/Genre and synopsis#Terminology\|room entities]] that the player can interact with.
Paths are predefined, although we would like to make a procedurally generated dungeon.
 ![[SmallEnemiesDraw.PNG]]

The dungeon could be represented as a graph, with each room being the nodes, and each path the edges:

![DungeonExample.png](/img/user/Game%20Design%20Document/Images/Examples/DungeonExample.png)

## Rooms
Each room is hand-crafted; therefore, its entities are defined in the design. 
Room entities are persistent. When a room is unloaded, the state of all its entities must be saved. For example, if the player kills all the enemies in a room and then exits, the enemies will still be dead when the player returns. The same applies to consumables and NPC dialogues.

¿El jugador tiene que matar a todos los enemigos para desbloquear los caminos? 
#TODO
## Dynamics
Each room will have a specialized purpose. For example, one room cannot be both a fighting room and an NPC room. This way, we can separate and encapsulate how the player interacts with each room. This allows the player to choose a path based on their desired strategy.
The player should be encouraged to clear each room before enter another one. This can be achieved by either blocking the paths or rewarding the player with valuable items after clearing the room.

## Included mechanics
- [[Game Design Document/System and Mechanics/Mechanincs/Exploration/Change Room\|Change Room]]
- [[Game Design Document/System and Mechanics/Mechanincs/Exploration/Enter and exit the dungeon\|Enter and exit the dungeon]]
