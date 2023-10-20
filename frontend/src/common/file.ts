import * as XLSX from 'xlsx'

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
  dataToExcel(d, '测试文件')
  console.log('test excel done')
}


export function readCompareExcel(path: string) {
  const workbook = XLSX.read(path, {})
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]
  const raw_data = XLSX.utils.sheet_to_json(worksheet, {header: 1})
  console.log(raw_data)
}
