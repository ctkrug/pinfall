# Pinfall backlog

All stories start unchecked. Acceptance criteria are the build and QA contract.

## Epic 1 — Make bowling scoring visible

- [ ] **Show the strike’s delayed bonus resolution (wow moment).**
  - Tapping all ten pins records an `X` and leaves that frame total visibly pending.
  - The next two valid balls animate the earlier strike cell from pending to its exact total.
  - A unit test verifies a strike followed by rolls `3, 4` resolves to `17`.

- [ ] **Model legal rolls through ten frames.**
  - The engine rejects a two-ball non-tenth frame whose pins exceed ten.
  - The engine accepts one fill ball after a spare and two after a strike in frame ten.
  - A perfect game returns `300` and all-gutter game returns `0` in tests.

- [ ] **Render an understandable live scorecard.**
  - Ten frame cells display ball marks, pending state, and resolved cumulative totals.
  - A spare resolves only after its following ball is entered.
  - The current ball/frame is exposed as text to assistive technology.

- [ ] **Apply the score-desk design polish.**
  - The scorecard uses the tokens, fonts, depth, and rolling-number detail in `DESIGN.md`.
  - Pending, resolved, and invalid states remain distinguishable without color alone.

## Epic 2 — Make pin entry feel like play

- [ ] **Build tap-to-select pins on the Canvas lane.**
  - Ten pins render in a standard triangle and each can be selected by pointer or touch.
  - A roll control submits exactly the selected count and then clears the rack as rules require.
  - The lane redraws at device-pixel-ratio resolution after a resize.

- [ ] **Support keyboard and accessible controls.**
  - Keyboard users can select a pin count, submit a roll, and start a new game without a pointer.
  - Every actionable control has a visible focus state and at least a 44px touch target.
  - Status changes announce the entered roll and newly resolved frames in a live region.

- [ ] **Add immediate lane feedback.**
  - Selected pins move with an 80–120ms tween and a roll produces an impact flash.
  - A strike and spare each produce distinct scorecard pulses.
  - With reduced motion enabled, scoring remains functional while travel and shake are removed.

- [ ] **Apply the lane design polish.**
  - The lane is the primary 60vh-plus desktop hero and stays composed at 390px and 768px.
  - The maple lane, enamel desk, ticket-stub shadows, and wordmark match `DESIGN.md`.

## Epic 3 — Finish a replayable score session

- [ ] **Synthesize gameplay sound with persistent mute.**
  - Pin selection, roll impact, frame resolution, and game completion each trigger a distinct synthesized effect.
  - AudioContext is created only from a user gesture and missing Web Audio does not throw.
  - Mute state persists after reload and the mute control reflects it.

- [ ] **Celebrate a completed game and enable replay.**
  - Completing the final legal ball opens a final-score overlay with final score and strike count.
  - The overlay includes a “Roll again” action that restores a clean first frame.
  - Confetti is disabled under reduced motion while the completion summary remains visible.

- [ ] **Add resilient session controls.**
  - A new-game control asks for confirmation only after at least one roll exists.
  - Reset clears rolls, pending scores, selected pins, and completion state.
  - Invalid actions show inline guidance rather than throwing or corrupting the scorecard.

- [ ] **Apply final responsive design polish.**
  - The finished page has no horizontal scroll or overlap at 390px, 768px, and 1440px.
  - Hover, active, disabled, and focus-visible treatments are themed for every control.
  - The favicon, wordmark, background treatment, and final overlay read as one brand.
