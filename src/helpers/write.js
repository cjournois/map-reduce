import fs from 'fs'

import { Category } from 'utils/enums'

function writeFileWithFs(data) {
	console.log('result:', data)
	const result = Object.keys(data).reduce((res, categoryKey, index) => {
		return `${res + String(Object.keys(Category)[categoryKey])}\t${data[categoryKey]}\n`
	}, '')

	fs.writeFile('tlor.csv', result, () => {
		console.log('file created')
	})
}

function write(data) {
	writeFileWithFs(data)
}

export default write
