export const Category = {
  Short: 0,
  Medium: 1,
  Large: 2,
} as const

export type Category = (typeof Category)[keyof typeof Category]

export type CategoryCounts = Record<Category, number>
