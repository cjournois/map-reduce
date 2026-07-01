default:
    @just --list

install:
    bun install

ci:
    rm -rf node_modules && bun install --frozen-lockfile

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
