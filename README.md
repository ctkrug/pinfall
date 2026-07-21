# Pinfall

Pinfall is a tactile bowling score calculator that turns pin entry into a
tiny playable lane. Tap the pins you knocked down, watch them react, and see a
real scorecard resolve as bowling's delayed bonuses become known.

## Why Pinfall

Bowling scores are easy to record but surprisingly hard to explain. A strike
does not settle until its next two balls; a spare waits for one. Pinfall makes
that state visible: the lane handles the input, while the scorecard shows
which frames are still waiting and why.

## Planned v1

- A responsive Canvas lane with tap-to-knock-down pins
- Complete ten-frame scoring, including strikes, spares, and tenth-frame fills
- Delayed scorecard resolution for bonus balls
- Pin-flight, impact, and score-update feedback
- Synthesized Web Audio effects with a persistent mute control
- Keyboard and touch support, reduced-motion support, and automated tests

## Stack

- TypeScript
- HTML Canvas
- Vite for local development and static production builds
- Vitest and ESLint for verification

## Development

```sh
npm install
npm run dev
```

Build the static site with `npm run build`. The deployable output is written to
`dist/` and uses relative asset paths so it can be hosted under a subpath.

## Status

This repository is in its planning and scaffold phase. See
[`docs/VISION.md`](docs/VISION.md), [`docs/DESIGN.md`](docs/DESIGN.md), and
[`docs/BACKLOG.md`](docs/BACKLOG.md) for the implementation plan.
