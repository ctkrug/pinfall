# Design direction — Pinfall

## Aesthetic direction

**Mid-century bowling-alley ticket stub.** Pinfall takes its cues from a warmly
lit alley score desk: deep blue-green enamel, maple lanes, cream pins, tomato-red
foul-line markings, and oversized condensed lettering. It deliberately avoids
the nearby paper, blueprint, Swiss-grid, risograph, editorial, and warm-library
directions; this is sporty, physical, and a little celebratory.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#182634` | midnight blue-green room and page ground |
| `--surface-1` | `#244052` | score desk and primary panels |
| `--surface-2` | `#31586a` | raised controls and active score cells |
| `--text` | `#fff3df` | warm cream primary text and pins |
| `--text-muted` | `#c5d1cc` | score hints and secondary labels |
| `--accent` | `#ef6c3e` | tomato-red throws, wordmark detail, and alerts |
| `--accent-support` | `#f2c14e` | lane gold, focus treatment, and score resolution |
| `--success` | `#74c69d` | complete-frame confirmation |
| `--danger` | `#e1514b` | invalid action and reset warning |

- **Display:** Racing Sans One, with `Impact, sans-serif` fallback, for the
  wordmark, score totals, and celebratory headlines.
- **UI:** Space Grotesk, with `system-ui, sans-serif` fallback, for controls,
  labels, and explanatory copy.
- **Spacing:** 8px scale (8, 16, 24, 32, 48, 64, 96).
- **Corners:** 10px on lane panels and controls; score cells are 4px.
- **Depth:** a dark `12px 12px 0 #0d161f` ticket-stub shadow plus a restrained
  amber inner glow on the active lane; no glass effects.
- **Motion:** UI transitions 160–200ms ease-out; game feedback 80–120ms
  ease-out. Reduced-motion mode keeps state changes but removes travel and
  particles.

## Layout intent

At **1440×900**, the responsive Canvas lane and scorecard share the main stage:
the lane occupies roughly two-thirds of the viewport width and at least 60vh,
with a compact score desk aligned alongside it. The explanation and controls
are attached to that stage, not placed in a separate marketing column.

At **390×844**, the score strip sits above a full-width, tall lane; the pin
controls dock below it with 44px targets. The game remains the first visible
thing and avoids side margins large enough to make it feel miniature.

## Signature detail

The **Pinfall** wordmark will make its leading lane-bar slide forward on load,
then settle like a mechanical score reel. Resolved frame numbers will use the
same short vertical roll, tying the title to the central scoring lesson.

## Juice plan

- **Movement tween:** each selected pin tilts and slides away over 100ms;
  remaining pins briefly lean back into place between balls.
- **Impact feedback:** a hit creates a 90ms lane flash, a tiny camera bump, and
  a ring expanding from the tapped pin.
- **Goal feedback:** strikes punch the frame cell with a gold pulse; spares get
  a smaller cream score-reel pop.
- **Win celebration:** after the tenth-frame result resolves, a scoreboard
  overlay presents final score and strike count amid red, gold, and cream pin
  confetti, with a clear “Roll again” control.
- **Synth SFX:** Web Audio oscillators/noise generate a soft wood *tap* for a
  pin selection, a clattery *crash* for a roll, a two-note *chime* for a score
  resolution, and a short *fanfare* for game completion. Effects are
  rate-limited and low-volume; a mute button persists in `localStorage`.
  AudioContext is created only after a user gesture and safely skipped where
  Web Audio is unavailable.
