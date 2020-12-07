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
		.replaceAll('  ', ' ')
		.replaceAll('  ', ' ')
		.replaceAll('  ', ' ')
		.split(' ')
}

export default format
