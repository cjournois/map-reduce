import { Category } from 'utils/enums'

function getWordResult(map, word, category) {
	if (typeof map[word] === 'object') {
		return map[word].concat(category)
	}
	return [].concat(category)
}

function map(data) {
	const map = {}
	data.forEach((word) => {
		if (word.length > 10) {
			map[word] = getWordResult(map, word, Category.Large)
		} else if (word.length < 5) {
			map[word] = getWordResult(map, word, Category.Short)
		} else {
			map[word] = getWordResult(map, word, Category.Medium)
		}
	})
	return map
}

export default map
