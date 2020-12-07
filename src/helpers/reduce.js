import { Category } from 'utils/enums'

function reduce(data) {
	const reduce = {
		[Category.Short]: 0,
		[Category.Medium]: 0,
		[Category.Large]: 0
	}
	Object.keys(data).forEach((key) => {
		reduce[data[key][0]] = reduce[data[key][0]] + data[key].length
	})
	return reduce
}

export default reduce
