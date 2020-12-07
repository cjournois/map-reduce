import { Category } from 'utils/enums'

function getWordResult(map, word, category) {
	if (typeof map[word] === 'object') {
		return map[word].concat(category)
	}
	return [].concat(category)
}

function map(data) {
	const map = {}
	const dataLength = data.length
	for (let i = 0; i < dataLength; i++) {
		if (data[i].length > 10) {
			map[data[i]] = getWordResult(map, data[i], Category.Large)
		} else if (data[i].length < 5) {
			map[data[i]] = getWordResult(map, data[i], Category.Short)
		} else {
			map[data[i]] = getWordResult(map, data[i], Category.Medium)
		}
	}
	return map
}

export default map
