import { describe, expect, it } from 'bun:test'

import { format } from '../src/format'

describe('format', () => {
  it('should extract words from a simple sentence', () => {
    const words = format('Hello world')

    expect(words).toEqual(['Hello', 'world'])
  })

  it('should drop punctuation and digits', () => {
    const words = format('hello, world! 2026 — foo.bar')

    expect(words).toEqual(['hello', 'world', 'foo', 'bar'])
  })

  it('should preserve apostrophes inside words', () => {
    const words = format("don't can't won't")

    expect(words).toEqual(["don't", "can't", "won't"])
  })

  it('should keep accented Latin characters', () => {
    const words = format('café déjà vu naïve')

    expect(words).toEqual(['café', 'déjà', 'vu', 'naïve'])
  })

  it('should collapse runs of whitespace and return no empty entries', () => {
    const words = format('  one\t two\n\nthree   ')

    expect(words).toEqual(['one', 'two', 'three'])
  })

  it('should return an empty array for input with no words', () => {
    expect(format('')).toEqual([])
    expect(format('  \n\t  ')).toEqual([])
    expect(format('123 !!! ???')).toEqual([])
  })
})
