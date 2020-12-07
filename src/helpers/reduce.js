import { Category } from 'utils/enums'

function reduce(data) {
	const reduce = {
		[Category.Short]: 0,
		[Category.Medium]: 0,
		[Category.Large]: 0
	}
	const keys = Object.keys(data)
	const keysLength = keys.length
	for (let i = 0; i < keysLength; i++) {
		reduce[data[keys[i]][0]] = reduce[data[keys[i]][0]] + data[keys[i]].length
	}
	return reduce
}

export default reduce
