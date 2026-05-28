import { describe, expect, it } from 'bun:test'

import { Category } from '../src/category'
import { map } from '../src/map'

describe('map', () => {
  it.each([
    ['a', Category.Short],
    ['four', Category.Short],
    ['fives', Category.Medium],
    ['categorize', Category.Medium],
    ['elevenchars', Category.Large],
  ])('should classify "%s" as category %i', (word, expected) => {
    const out = map([word])

    expect(out[0]).toBe(expected)
  })

  it('should return a Uint8Array sized to the input', () => {
    const out = map(['a', 'bb', 'ccc'])

    expect(out).toBeInstanceOf(Uint8Array)
    expect(out.length).toBe(3)
  })

  it('should preserve word order in the output', () => {
    const out = map(['elevenchars', 'a', 'fives'])

    expect(Array.from(out)).toEqual([Category.Large, Category.Short, Category.Medium])
  })

  it('should return an empty Uint8Array for empty input', () => {
    const out = map([])

    expect(out.length).toBe(0)
  })
})
