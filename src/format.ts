const WORD = /[A-Za-zÀ-ÿ']+/g

export function format(text: string): string[] {
  return text.match(WORD) ?? []
}
