import excel4node from 'excel4node'
import fs from 'fs'

import { Category } from 'utils/enums'

function writeFileWithExcel4Node(data) {
	const xls = new excel4node.Workbook()
	const workSheet = xls.addWorksheet('Result')

	Object.keys(data).forEach((categoryKey, index) => {
		workSheet.cell(1, index + 1).string(String(Object.keys(Category)[categoryKey]))
		workSheet.cell(2, index + 1).number(data[categoryKey])
	})

	xls.write('./result/tlor.xlsx')
}

function writeFileWithFs(data) {
	const result = Object.keys(data).reduce((res, categoryKey, index) => {
		return `${res + String(Object.keys(Category)[categoryKey])}\t${data[categoryKey]}\n`
	}, '')

	fs.writeFile('result/tlor.xls', result, () => {
		console.log('file created')
	})
}


function write(data) {
	//writeFileWithExcel4Node(data)
	writeFileWithFs(data)
}

export default write
