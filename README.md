# map-reduce

Fast map-reduce helper library. Tokenizes text, classifies words by length, and counts occurrences per category.

## Pipeline

| Step | Input | Output |
|---|---|---|
| `format(text)` | `string` | `string[]` words |
| `map(words)` | `readonly string[]` | `Uint8Array` of `Category` |
| `reduce(categories)` | `Uint8Array` | `Record<Category, number>` |

Categories: `Short` (≤4 chars), `Medium` (5–10), `Large` (≥11).

## Usage

```ts
import { format, map, reduce } from 'map-reduce'

const counts = reduce(map(format('The quick brown fox jumps over the lazy dog')))
// { 0: 6, 1: 3, 2: 0 }  // Short, Medium, Large
```

## Requirements

Tool versions are pinned in `mise.toml`. With [mise](https://mise.jdx.dev) installed:

```sh
mise trust
mise install
```

Or install manually: [bun](https://bun.sh) and [just](https://github.com/casey/just).

## Commands

| Recipe | Action |
|---|---|
| `just install` | Install dependencies |
| `just ci` | Frozen install (CI) |
| `just lint` | Run ESLint |
| `just lint-fix` | Run ESLint with autofix |
| `just test` | Run tests |
| `just test-coverage` | Run tests with coverage |
| `just build` | Build to `dist/` |

## Design

`format` uses a single regex match. `map` returns a `Uint8Array` (no boxing). `reduce` is a single pass over a typed array with three local counters — no object key lookups in the hot loop.
