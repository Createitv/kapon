/** @format */

export function groupedData(data: any[], key: string) {
	return data.reduce((result, item) => {
		let usageDepartment = item[key]
		if (!result[usageDepartment]) {
			result[usageDepartment] = []
		}
		result[usageDepartment].push(item)
		return result
	}, {})
}
// 数组对比去重
export function unique(arr) {
	return arr.filter(function (item, index, arr) {
		//当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
		return arr.indexOf(item, 0) === index
	})
}

export function dataMerge(dataOne: any[]) {
	let arrayMerge = []
	let rank = 1
	const lastOneSum = {}
	const remainKey = [
		'序号',
		'固定资产编号',
		'固定资产名称',
		'规格型号',
		'增加方式',
		'实盘数量',
		'盘亏数量',
		'使用状况（在用/闲置）',
		'使用效率（正常/较低）',
		'保养状况',
		'是否属收费设备',
		'收费次数',
		'收费单价',
		'使用部门',
		'存放地点',
		'备注',
		'汇总',
		'其他备注',
	]
	remainKey.forEach((item) => {
		if (item === '序号' || item === '汇总') {
			lastOneSum[item] = null
		} else if (item === '固定资产编号') {
			lastOneSum[item] = '总计'
		}
		lastOneSum[item] = ''
	})
	dataOne.forEach((element) => {
		const emptyObject = {}
		const keys = Object.keys(element)

		for (let i = 0; i < remainKey.length; i++) {
			// 如果key是序号累加
			if (remainKey[i] === '序号') {
				emptyObject[remainKey[i]] = rank
				rank += 1
			} else if (remainKey[i] === '汇总') {
				emptyObject[remainKey[i]] = 1
				// 还有很多空的没法匹配
			} else if (remainKey[i] === '使用部门2') {
				// 使用部门对应调换
				// console.log(configStore.config[element[remainKey[i]]])
				// emptyObject[remainKey[i]] = configStore.config[element[remainKey[i]]]
				// 如果key在已经有的数据中添加数据
			} else if (keys.indexOf(remainKey[i]) !== -1) {
				emptyObject[remainKey[i]] = element[remainKey[i]]
				// 如果没有数据为空
			} else {
				emptyObject[remainKey[i]] = ''
			}
			// 汇总数据
			if (i === remainKey.length - 1) {
				lastOneSum['序号'] = rank
				lastOneSum['固定资产编号'] = '总计'
				lastOneSum['汇总'] = rank - 1
			}
		}
		arrayMerge.push(emptyObject)
	})
	arrayMerge.push(lastOneSum)
	return arrayMerge
}

