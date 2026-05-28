import { Category } from './category'

const SHORT_MAX = 4
const MEDIUM_MAX = 10

export function map(words: readonly string[]): Uint8Array {
  const n = words.length
  const out = new Uint8Array(n)
  for (let i = 0; i < n; i++) {
    const len = words[i]!.length
    out[i] =
      len <= SHORT_MAX ? Category.Short : len > MEDIUM_MAX ? Category.Large : Category.Medium
  }
  return out
}
