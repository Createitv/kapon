/** @format */

import * as XLSX from 'xlsx'
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'

export function dataToExcel(data: any, filename: string) {
	// 函数实现，参数 delay 单位 毫秒 ；
	const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
	const workbook: XLSX.WorkBook = XLSX.utils.book_new()
	XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
	XLSX.writeFileXLSX(workbook, filename + '.xlsx', {
		type: 'buffer',
		bookType: 'xlsx',
	})
}

export function ex() {
	console.log('test excel done')
}

const workbook = new ExcelJS.Workbook()
workbook.creator = '在路上'
workbook.lastModifiedBy = '在路上'
workbook.created = new Date(2023, 10, 20)
workbook.modified = new Date()
workbook.lastPrinted = new Date(2023, 10, 20)
// 将工作簿日期设置为 1904 年日期系统
workbook.properties.date1904 = true
// 在加载时强制工作簿计算属性
workbook.calcProperties.fullCalcOnLoad = true
const worksheet = workbook.addWorksheet('Sheet1', {
	properties: {
		tabColor: { argb: 'BFCA000' },
		defaultColWidth: 50,
		defaultRowHeight: 18,
	},
	pageSetup: {
		paperSize: 9,
		orientation: 'landscape',
		fitToPage: true,
		fitToHeight: 5,
		fitToWidth: 7,
		showGridLines: true,
		// horizontalCentered: true,
		// verticalCentered: true,
	},
})

// worksheet.headerFooter.evenHeader = '&L对照部门: 变态反应科 &C&"Arial,Regular"盘点人\n\n 填表说明: 黄色是必填项，其他部分不要修改 &R&B科主任签名\n\t&D';
worksheet.headerFooter.evenFooter = '第 &P 页，共 &N 页'
worksheet.headerFooter.oddFooter = '第 &P 页，共 &N 页'

// 添加列标题并定义列键和宽度
// 注意：这些列结构仅是构建工作簿的方便之处，除了列宽之外，它们不会完全保留。
worksheet.columns = [
	{
		header: '序号',
		key: '序号',
		width: 5,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			font: {
				bold: true,
			},
		},
	},
	{
		header: '固定资产编号',
		key: '固定资产编号',
		width: 16,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '固定资产名称',
		key: '固定资产名称',
		width: 35,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '规格型号',
		key: '规格型号',
		width: 14,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			font: {
				bold: true,
			},
		},
	},
	{
		header: '增加方式',
		key: '增加方式',
		width: 8,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
				wrapText: true,
			},
			font: {
				bold: true,
			},
		},
	},
	{
		header: '实盘数量',
		key: '实盘数量',
		width: 8,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
				wrapText: true,
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '盘亏数量',
		key: '盘亏数量',
		width: 8,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
				wrapText: true,
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: `使用状况（在用/闲置）`,
		key: `使用状况（在用/闲置）`,
		width: 12,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
				wrapText: true,
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: `使用效率（正常/较低）`,
		key: `使用效率（正常/较低）`,
		width: 12,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
				wrapText: true,
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '保养状况',
		key: '保养状况',
		width: 8,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
				wrapText: true,
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '是否属收费设备',
		key: '是否属收费设备',
		width: 10,
		style: {
			alignment: {
				wrapText: true,
				horizontal: 'center',
				vertical: 'middle',
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '收费次数',
		key: '收费次数',
		width: 8,
		style: {
			alignment: {
				horizontal: 'center',
				wrapText: true,
				vertical: 'middle',
			},
			//  fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: {
			// 		argb: 'FFFFFF00',
			// 	},
			// 	bgColor: {
			// 		theme: 64,
			// 	},
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '收费单价',
		key: '收费单价',
		width: 10,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
				wrapText: true,
			},
			// fill: {
			// 	type: 'pattern',
			// 	pattern: 'solid',
			// 	fgColor: { argb: 'fab023' },
			// },
			font: {
				bold: true,
			},
		},
	},
	{
		header: '使用部门',
		key: '使用部门',
		width: 16,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			font: {
				bold: true,
			},
		},
	},
	{
		header: '存放地点',
		key: '存放地点',
		width: 30,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			font: {
				bold: true,
			},
		},
	},
	{
		header: '备注',
		key: '备注',
		width: 12,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			font: {
				bold: true,
			},
		},
	},
	{
		header: '汇总',
		key: '汇总',
		width: 5,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			font: {
				bold: true,
			},
		},
	},
	{
		header: '其他备注',
		key: '其他备注',
		width: 10,
		style: {
			alignment: {
				horizontal: 'center',
				vertical: 'middle',
			},
			font: {
				bold: true,
			},
		},
	},
]
worksheet.getRow(1).height = 40
const heightLightRows = ['F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1']
heightLightRows.forEach((item: string) => {
	worksheet.getCell(item).style = {
		alignment: {
			horizontal: 'center',
			wrapText: true,
			vertical: 'middle',
		},
		border: {
			left: {
				style: 'thin',
			},
			right: {
				style: 'thin',
			},
			top: {
				style: 'thin',
			},
			bottom: {
				style: 'thin',
			},
		},
		fill: {
			type: 'pattern',
			pattern: 'solid',
			fgColor: {
				argb: 'FFFFFF00',
			},
			bgColor: {
				theme: 64,
			},
		},
		font: {
			bold: true,
		},
	}
})

// 创建带有红色标签颜色的工作表
export async function exceljsToExcel(data: Object[], filename: string) {
	worksheet.headerFooter.differentFirst = true
	// 或者可以设置自定义内容的页眉
	worksheet.headerFooter.firstHeader = `&L对照部门: ${filename} &C&"Arial,Regular"盘点人\n\n 填表说明: 黄色是必填项，其他部分不要修改 &R&B科主任签名\n\t&D`
	worksheet.addRows(data)
	await download(filename, workbook)
}

async function download(excelFileName, workbook: ExcelJS.Workbook) {
	const EXCEL_TYPE =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
	let blob: Blob
	// console.log(workbook.creator)
	const buffer = await workbook.xlsx.writeBuffer()
	console.log('buffer', buffer)
	blob = new Blob([buffer], {
		type: EXCEL_TYPE,
	})
	// console.log(blob.size)

	saveAs(blob, excelFileName + '.xlsx')
	console.log(excelFileName + '成功')
}
