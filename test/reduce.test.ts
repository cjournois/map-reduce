import { describe, expect, it } from 'bun:test'

import { Category } from '../src/category'
import { reduce } from '../src/reduce'

describe('reduce', () => {
  it('should count occurrences per category', () => {
    const input = Uint8Array.of(
      Category.Short,
      Category.Short,
      Category.Medium,
      Category.Large,
      Category.Large,
      Category.Large,
    )

    const counts = reduce(input)

    expect(counts).toEqual({
      [Category.Short]: 2,
      [Category.Medium]: 1,
      [Category.Large]: 3,
    })
  })

  it('should return zero counts for empty input', () => {
    const counts = reduce(new Uint8Array(0))

    expect(counts).toEqual({
      [Category.Short]: 0,
      [Category.Medium]: 0,
      [Category.Large]: 0,
    })
  })

  it('should preserve the total count across categories', () => {
    const input = Uint8Array.of(Category.Short, Category.Medium, Category.Medium, Category.Large)

    const counts = reduce(input)

    const total = counts[Category.Short] + counts[Category.Medium] + counts[Category.Large]
    expect(total).toBe(input.length)
  })
})
