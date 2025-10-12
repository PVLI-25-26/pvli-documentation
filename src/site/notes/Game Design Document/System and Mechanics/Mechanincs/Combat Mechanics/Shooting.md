---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/mechanincs/combat-mechanics/shooting/"}
---

**Shooting** – a mechanic that allows the player to perform ranged attacks using a bow. It is used for engaging enemies from a distance, applying status effects, and interacting with certain elements of the environment.  
## Description
The player aims [[Game Design Document/Controls\|using his input device]] and presses the [[Game Design Document/Controls\|shoot button]] to release the [[Game Design Document/System and Mechanics/Mechanincs/Combat Mechanics/Managing Quiver\|equipped projectile]] projectile in the [[Game Design Document/System and Mechanics/Mechanincs/Combat Mechanics/Setting Arrow path modifier\|chosen direction]].  
To control the projectile’s force, the player must **hold** the shoot button for a certain duration. The longer the button is held, the stronger the shot will be.

Projectiles (arrows) follow an arched trajectory. The curvature of the arch depends on the force applied by the player. If the player barely charges the shot, the arrow travels in a steep arc with limited distance. If the player charges the shot to maximum, the arrow flies in a near-straight line*, covering more distance and having a flatter trajectory.

![ShootingArrowsExample.png](/img/user/Game%20Design%20Document/Images/ShootingArrowsExample.png)

When an arrow is shot, it is removed from the player inventory. To recover it, the player must go to where the player has landed to pick it up.
## Related Systems
- [[Game Design Document/System and Mechanics/Systems/Combat System\|Combat System]]