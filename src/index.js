import { format, map, read, reduce, write } from './helpers'

function init() {
	let data = read()
	data = format(data)
	data = map(data)
	data = reduce(data)
	write(data)
}

console.time('init')
init()
console.timeEnd('init')
