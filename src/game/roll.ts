/** Returns the pins still available after a non-bonus ball in a frame. */
export function pinsRemaining(knockedDown: number): number {
  if (!Number.isInteger(knockedDown) || knockedDown < 0 || knockedDown > 10) {
    throw new RangeError('A bowling roll must knock down an integer from 0 to 10 pins.')
  }

  return 10 - knockedDown
}
