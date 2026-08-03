> CUDA is just resource management.

Okay, of course there's a lot more to squeezing CUDA kernel performance than *just resource management*, but occupancy is very often the simplest thing to strive for, once you know how. And usually, if you've hit 100% occupancy, then unless you've done something heinous in your code, further optimizations are unlikely to budge your performance by large factors (aside from an entire algorithmic shift, but we won't discuss that here).
# Starcraft and unit compositions

For those who are too uncultured to have played Starcraft before, the goal of the game is essentially to construct a base, gather resources, and then build an assortment of units to destroy your enemy.

> I'm going to use Protoss units and buildings here, because *Protoss master race*. Also because **pylon** sounds better than **bunker**(boring) and **overlord**(ew). Facts, not biased at all.

There's a few things to keep in mind during a game:

- **Supply**: this is the maximum *army count* you can have. You increase this by *building more pylons*.
- **Minerals**: this is the base resource. It's generally the more common resource, and you have more of it than gas.
- **Vespene gas**: this is the secondary resource. It's harder to get, but is used to build more *advanced units*.

Imagine you have some limited amount of the above 3 at some point in the game. Your goal is to maximize the use of your resources. Let's say you have

- 16 supply
- 400 gas
- 1500 minerals

We'll choose from a small subset of possible units to make it simple:

| Unit Name | Mineral Cost | Gas Cost | Supply Cost |
| :--- | :--- | :--- | :--- |
| **Zealot** | 100 | 0 | 2 |
| **Stalker** | 125 | 50 | 2 |
| **Immortal** | 275 | 100 | 4 |
| **Colossus** | 300 | 200 | 6 |
| **Carrier** | 350 | 250 | 6 |

# What (theoretical) occupancy is



# I can't link everything to Starcraft

Register allocation granularity is at the warp level, 256 registers per unit size! 40 vs 41 reg per thread has a 256 register increase!