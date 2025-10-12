---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/systems/health-system/"}
---

**Health system** - An important system in combat, indicates player what range of error he has left before the run ends.

## Description
Health is implemented as a bar with generally larger values (e.g. 160/250). This allows designers to choose from more damage values in enemies, therefore making health and damage easier to correct and adjust.
When enemies hit the player (through contact or projectiles), the player's health is reduced a certain amount of heath points. This will be represented with the bar swiftly reducing until it's adjusted to the new value. 
When the player's health reaches 0, the player dies and returns to the HUB, loosing all items obtained during the run.

![HealthSystemExample.png](/img/user/Game%20Design%20Document/Images/HealthSystemExample.png)

Health is recovered when the player returns to the HUB, by dying or [[Game Design Document/System and Mechanics/Mechanincs/Exploration Mechanics/Enter and exit the dungeon\|exiting the dungeon]].
Health can also be recovered by consuming items which recover the player's health.

## Dynamics 
The health bar must show the player the range of error he has until his run ends because he dies. This means that when the health is full, the player must fill like he can take risks and explore. But as health decreases, the health must very clearly show the player how he can die at any moment.
Therefore, high health would make the player feel secure and adventurous, and low health bar must make the player feel scared and insecure with his possibilities.


## Related systems
- [[Game Design Document/System and Mechanics/Systems/Combat System\|Combat System]]