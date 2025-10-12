---
{"dg-publish":true,"permalink":"/game-design-document/system-and-mechanics/systems/combat-system/"}
---

**Combat System** – a core system that encompasses all mechanics related to dealing damage to enemies and avoiding damage from them.

## Description
The Combat System governs how the player interacts with hostile entities in the magical realm. It includes aiming and shooting projectiles, managing consumable arrows, modifying arrow trajectories, and strategically selecting projectile types. Combat is entirely ranged, with no melee interactions, and emphasizes positioning, timing, and resource management.

Players must consider their movement, the type of arrows equipped, and active arrow path modifiers to overcome various enemy patterns. Stronger arrows or modifiers provide tactical advantages but are limited in supply, making planning and adaptability crucial. The system also incorporates movement-based survivability mechanics such as invulnerability frames from jumping or using abilities, allowing the player to avoid incoming attacks and environmental hazards.

Combat encounters are designed to be dynamic, with enemy placement, mini-boss behaviors, and environmental traps requiring players to make real-time decisions while balancing offensive output and resource conservation. Strategic exploration and observation of points of interest often provide opportunities to prepare for encounters, such as finding consumables, positioning, and scouting enemy types before engagement.![Combat diagram.png](/img/user/Game%20Design%20Document/Images/Combat%20diagram.png)

## Dynamics
From the perspective of the MDA framework, the Combat System shapes the player’s experience by creating meaningful choices and tension. Players feel a sense of **challenge and mastery** as they balance resource management ([[Game Design Document/System and Mechanics/Mechanincs/Managing Quiver#Description\|arrow quantity]], [[Game Design Document/System and Mechanics/Mechanincs/Managing Quiver#Arrow Effects\|special arrows]]), spatial awareness (positioning and dodging), and tactical adaptation (choosing the right [[Game Design Document/System and Mechanics/Mechanincs/Setting Arrow path modifier#Available Modifiers\|path modifiers]] and [[Game Design Document/System and Mechanics/Mechanincs/Managing Quiver#Arrow Effects\|arrow types]]). The system encourages experimentation with different strategies, such as using [[Game Design Document/System and Mechanics/Mechanincs/Setting Arrow path modifier#Ricochet\|Ricochet]] arrows to hit hidden targets, or [[Game Design Document/System and Mechanics/Mechanincs/Setting Arrow path modifier#Wave Shot\|Wave Shot]] to cover multiple enemies simultaneously.

The risk-reward loop is central: overextending with rare arrows may lead to running out of resources mid-expedition, forcing retreat to the hub. Conversely, careful planning and effective use of abilities and arrow types reward skillful play and provide a satisfying sense of progression and empowerment.

## Included mechanics
- [[Game Design Document/System and Mechanics/Mechanincs/Shooting\|Shooting]]
- [[Game Design Document/System and Mechanics/Mechanincs/Setting Arrow path modifier\|Setting Arrow Path Modifier]]
- [[Game Design Document/System and Mechanics/Mechanincs/Managing Quiver\|Managing Quiver]]
- [[Game Design Document/System and Mechanics/Mechanincs/Use Ability\|Use Ability]]
