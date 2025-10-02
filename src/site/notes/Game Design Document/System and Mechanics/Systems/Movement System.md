---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/systems/movement-system/"}
---

**Movement System** – a core system that governs the player’s traversal through the In-game world, including running, dodging, and [[Game Design Document/System and Mechanics/Mechanincs/Use Ability\|using abilities]].

## Description
The player moves through the scenario in 2D, in a continuous way. Rooms have a defined size and the player will not be able to move beyond the room´s edge.
When the player traverses one of the room´s paths, they will go to another room.

Player movement is not accelerated, it is a constant velocity. Due to the keyboard limitations (the most commonly used input in web), the direction in which the player moves is discrete, and only within the values of: UP, UP-LEFT, LEFT, DOWN-LEFT, DOWN, DOWN-RIGHT, RIGHT, UP-RIGHT.

Player movement may be altered through the different player [[Game Design Document/System and Mechanics/Mechanincs/Use Ability\|abilities]].

## Dynamics 
The player must feel like his character is completely under his control, with precision and accuracy. Movement must feel responsive and fast, but especially satisfying, as it will be what the player does most often.


## Included mechanics
- [[Game Design Document/System and Mechanics/Mechanincs/Use Ability\|Use Ability]]