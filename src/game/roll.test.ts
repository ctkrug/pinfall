import { describe, expect, it } from 'vitest'

import { pinsRemaining } from './roll'

describe('pinsRemaining', () => {
  it('leaves no pins after a strike', () => {
    expect(pinsRemaining(10)).toBe(0)
  })

  it('rejects impossible rolls', () => {
    expect(() => pinsRemaining(11)).toThrow(RangeError)
  })
})
