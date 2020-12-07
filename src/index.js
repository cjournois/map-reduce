import { format, map, read, reduce, write } from './helpers'

function main() {
	read()
	|> format
	|> map
	|> reduce
	|> write
}

console.time('main')
main()
console.timeEnd('main')
