<script lang="ts" setup>
import * as xlsx from 'xlsx'
import { dataMerge, groupedData } from "../common/collection.ts";
import { dataToExcel, ex } from "../common/file.ts";
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
import { useCofigStore } from '../store/config';

var excelData = {}
const fullscreenLoading = ref(false)

async function onChange(file) {
  ElNotification({
    title: '上传成功, 等待后台处理',
    type: 'success',
    duration: 1000,
    showClose: true,
  }),
    fullscreenLoading.value = true
  /**
   * 1. 使用原生api去读取好的文件
   */
  // console.log("原始上传的文件", file);
  // 读取文件不是立马能够读取到的，所以是异步的，使用Promise
  const dataBinary = await new Promise((resolve) => {
    // Web API构造函数FileReader，可实例化对象，去调用其身上方法，去读取解析文件信息
    const reader = new FileReader() // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
    // console.log("实例化对象有各种方法", reader);
    reader.readAsBinaryString(file.raw) // 读取raw的File文件
    reader.onload = (ev) => {
      // console.log("文件解析流程进度事件", ev);
      resolve(ev.target.result) // 将解析好的结果扔出去，以供使用
    }
  })
  // console.log("读取出的流文件", dataBinary);

  /**
   * 2. 使用xlsx插件去解析已经读取好的二进制excel流文件
   */
  const workBook = xlsx.read(dataBinary, { type: 'binary', cellDates: true })
  // excel中有很多的sheet，这里取了第一个sheet：workBook.SheetNames[0]
  const firstWorkSheet = workBook.Sheets[workBook.SheetNames[0]]
  // 分为第一行的数据，和第一行下方的数据
  const header = getHeaderRow(firstWorkSheet)
  ElNotification({
    title: '后台处理完成',
    type: 'success',
    duration: 1000,
    showClose: true,
  }),
    console.log('读取的excel表头数据（第一行）', header)
  // defval 给空的单元格赋值为空字符串
  // header 以那一行为开头
  const data = xlsx.utils.sheet_to_json(firstWorkSheet, { blankrows: true, defval: '' })
  excelData = groupedData(data, "使用部门")
  console.log(`读取所有excel数据${Object.keys(excelData).length} || ${Object.keys(excelData)}`, excelData)
  fullscreenLoading.value = false
}

function getHeaderRow(sheet) {
  const headers = [] // 定义数组，用于存放解析好的数据
  const range = xlsx.utils.decode_range(sheet['!ref']) // 读取sheet的单元格数据
  let C
  const R = range.s.r
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[xlsx.utils.encode_cell({ c: C, r: R })]
    /* find the cell in the first row */
    let hdr = `UNKNOWN ${C}` // <-- replace with your desired default
    if (cell && cell.t)
      hdr = xlsx.utils.format_cell(cell)
    headers.push(hdr)
  }
  return headers // 经过上方一波操作遍历，得到最终的第一行头数据
}

function sleep(n) {
  let b = true
  let timestamp = new Date().getTime()
  while (b) {
    if (new Date().getTime() - timestamp > n * 1000) {
      b = false
    } else {
      b = true;
    }
  }
}

function exportExcel() {
  console.log(excelData['健康管理中心'], excelData)
  Object.keys(excelData).forEach(function (key) {
    const excelWriteData = dataMerge(excelData[key])
    console.log(key, excelWriteData)
    if (key !== '') {
      dataToExcel(excelWriteData, key)
      sleep(0.2)
    }

  })
}

function exportExcelEx() {
  ex()
}

async function loadFile() {
  const useConfigStore = useCofigStore()
  const [hFile] = await window.showOpenFilePicker({
    types: [{
      description: 'Spreadsheets',
      accept: { 'application/vnd.ms-excel': ['.xlsx', '.xls', '.xlsb', /*...*/] }
    }],
    excludeAcceptAllOption: true,
    multiple: false
  });
  const ab = await (await hFile.getFile()).arrayBuffer();

  /* parse */
  const wb = xlsx.read(ab);

  /* do something with the workbook */
  const configArray: Object[] = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
  let emptyConfig = {}
  configArray.forEach(item => {
    emptyConfig[item['使用部门']] = item['对照部门']
  })
  console.log(emptyConfig)
  useConfigStore.init(emptyConfig)
}

// function exportExcelPDf() {
//   ep(
// }

const handleOnSuccess = () => []
</script>

<template>
  <el-upload action="#" :auto-upload="false" :on-change="onChange" :limit="1" drag accept=".xls,.xlsx"
    :on-success="handleOnSuccess" class="m-4 mt-10">
    <el-icon class="el-icon--upload">
      <upload-filled />
    </el-icon>

    <div class="el-upload__text">
      点我上传文件 <em>click to upload</em>
    </div>
  </el-upload>


  <el-button type="primary" @click="exportExcel" element-loading-background="rgba(192,192,192,0.3)"
    v-loading.fullscreen.lock="fullscreenLoading">导出Excel
  </el-button>
  <el-button type="primary" @click="exportExcelEx">下载测试 Excel 文件</el-button>
  <el-button type="primary" @click="loadFile">读取配置表文件</el-button>
  <!--    <el-button type="primary" @click="exportExcelPDf">下载测试 PDF 文件</el-button>-->
</template>
