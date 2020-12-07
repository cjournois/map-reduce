function format(data) {
	return data
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
}

export default format
