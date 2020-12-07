import { Category } from 'utils/enums'

function map(data) {
	const map = {}
	data.forEach((word) => {
		if (word.length > 10) {
			map[word] = Category.Large
		} else if (word.length < 5) {
			map[word] = Category.Short
		} else {
			map[word] = Category.Medium
		}
	})

	return map
}

export default map
