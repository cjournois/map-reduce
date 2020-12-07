function format(data) {
	const formattedData = data
		.join(' ')
		.replaceAll('\n', ' ')
		.replaceAll('.', ' ')
		.replaceAll('!', ' ')
		.replaceAll('?', ' ')
		.replaceAll(',', ' ')
		.replaceAll('-', ' ')
		.replaceAll('"', ' ')
		.replaceAll('«', ' ')
		.replaceAll('»', ' ')
		.replaceAll('  ', ' ')
		.split(' ')
		.filter((word) => word !== '')
	console.log(formattedData.length)
	return formattedData
}

export default format
