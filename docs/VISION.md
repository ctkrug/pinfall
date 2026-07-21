# Pinfall vision

## The problem

Bowling scoring hides its most interesting rule: strike and spare frames cannot
be finalized until later balls are thrown. Conventional score calculators accept
rolls as form data, then reveal a number with little indication of what changed
or why.

## Who it is for

Pinfall is for casual bowlers, scorekeeping helpers, and anyone who wants a
quick, visual way to understand the rules while entering a real or imagined
game. It should be satisfying enough to use as a tiny toy, yet exact enough to
trust as a score calculator.

## Core idea

Visitors tap the pins they knocked down on a small Canvas lane. The scorecard
records each ball immediately but deliberately leaves strike and spare totals
pending until their bonus balls arrive. When they do, earlier frame cells roll
into their resolved totals. A strike is therefore a visible cause with a later,
visible consequence—not just an `X` in a table.

## Key design decisions

- Model bowling as a deterministic roll/state sequence, separate from Canvas
  rendering, so scoring remains fully testable.
- Keep the lane as the dominant interface; the scorecard explains it rather
  than replacing it with a form.
- Use generated Canvas visuals and synthesized Web Audio only—no binary art or
  sound assets are required for the tactile experience.
- Build a static Vite site with `base: './'`; its `dist/` output is portable to
  a subdomain or subpath without an application server.
- Follow the mid-century bowling-alley ticket-stub system in
  [`DESIGN.md`](DESIGN.md) for all future visual decisions.

## V1 done

V1 is done when a player can complete a valid ten-frame game by touch, mouse,
or keyboard; see accurate ball marks and delayed frame resolution; reset and
replay a game; and enjoy responsive, accessible lane feedback with optional
synth sound. The scoring engine, including tenth-frame bonus rules, has direct
automated coverage, and CI passes linting, tests, and the portable static build.
