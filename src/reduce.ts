import { Category, type CategoryCounts } from './category'

export function reduce(categories: Uint8Array): CategoryCounts {
  const counts = new Uint32Array(3)
  const n = categories.length
  for (let i = 0; i < n; i++) {
    counts[categories[i]!]!++
  }
  return {
    [Category.Short]: counts[Category.Short]!,
    [Category.Medium]: counts[Category.Medium]!,
    [Category.Large]: counts[Category.Large]!,
  }
}
