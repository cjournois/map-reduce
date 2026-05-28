default:
    @just --list

ci:
    bun install --frozen-lockfile

install:
    bun install

lint:
    bun run lint

lint-fix:
    bun run lint-fix

test:
    bun run test

test-coverage:
    bun run test-coverage

build:
    bun run build
