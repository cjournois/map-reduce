function format(data) {
	const formattedData = data
		.join(' ')
		.replaceAll(/[^A-zÀ-ú']/gi, ' ')
		.split(/\s+/)
		.filter((word) => word !== ' ')
	console.log('word parsed:', formattedData.length)
	return formattedData
}

export default format
