import * as XLSX from 'xlsx'


export function dataToExcel(data: any, filename: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFileXLSX(workbook, filename+'.xlsx', {type: 'buffer', bookType: 'xlsx'});
}

export function ex() {
    const d = [
        {
            "卡片编号": "19692",
            "固定资产编号": "051900100230",
            "固定资产名称": "X线胶片观察灯",
            "规格型号": "双联",
            "增加方式": "直接购入",
            "原值": "1,680.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼103诊室",
            "供应商名称": "新乡市金环医疗器械有限公司",
            "生产厂家": "广东粤华医疗器械厂有限公司",
            "序列号": "",
            "合同号": "",
            "保修期": "",
            "开始使用日期": "2016.11.30",
            "注册证编码": "粤汕食药监械（准）字2013第1310006号",
            "使用年限(月)": "60",
            "净值": "84.00",
            "已计提月份": "60",
            "累计折旧": "1,596.00",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "84.00",
            "部门编号": "H010504",
            "保管人": "孙丽华",
            "类别名称": "其他医用设备",
            "类别编号": "0519001",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "30717",
            "固定资产编号": "060201300058",
            "固定资产名称": "换鞋凳",
            "规格型号": "1200*450*420",
            "增加方式": "直接购入",
            "原值": "530.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼106诊室中医治疗室",
            "供应商名称": "鞍山同济建筑工程有限公司",
            "生产厂家": "",
            "序列号": "",
            "合同号": "",
            "保修期": "",
            "开始使用日期": "2017.08.21",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "0.00",
            "已计提月份": "60",
            "累计折旧": "530.00",
            "本月计提折旧额": "0.00",
            "净残值率": "",
            "净残值": "0.00",
            "部门编号": "H010504",
            "保管人": "孙丽华",
            "类别名称": "换鞋凳",
            "类别编号": "0602013",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "038615",
            "固定资产编号": "051700280007",
            "固定资产名称": "治疗车",
            "规格型号": "YC-31-J-0300337",
            "增加方式": "直接购入",
            "原值": "2,990.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼中医门诊",
            "供应商名称": "南京天奥医疗仪器制造有限公司",
            "生产厂家": "南京天奥",
            "序列号": "",
            "合同号": "HG-20180703-012",
            "保修期": "3年 至2021-07-02止",
            "开始使用日期": "2018.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "291.53",
            "已计提月份": "57",
            "累计折旧": "2,698.47",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "149.50",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "推车",
            "类别编号": "0517002",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "039442",
            "固定资产编号": "060200180229",
            "固定资产名称": "诊室桌",
            "规格型号": "1400*1450*760",
            "增加方式": "直接购入",
            "原值": "1,380.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼105诊室",
            "供应商名称": "沈阳市黎明家俱制造有限公司",
            "生产厂家": "黎明",
            "序列号": "",
            "合同号": "HG-20180608-009",
            "保修期": "3年 至2021-06-07止",
            "开始使用日期": "2018.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "134.55",
            "已计提月份": "57",
            "累计折旧": "1,245.45",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "69.00",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "桌子",
            "类别编号": "0602001",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "039617",
            "固定资产编号": "060200280097",
            "固定资产名称": "诊室椅、护士站椅、医生办公椅",
            "规格型号": "常规",
            "增加方式": "直接购入",
            "原值": "480.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼103诊室",
            "供应商名称": "沈阳市黎明家俱制造有限公司",
            "生产厂家": "",
            "序列号": "",
            "合同号": "HG-20180608-009",
            "保修期": "3年 至2021-06-07止",
            "开始使用日期": "2018.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "46.80",
            "已计提月份": "57",
            "累计折旧": "433.20",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "24.00",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "椅子",
            "类别编号": "0602002",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "039626",
            "固定资产编号": "060200280106",
            "固定资产名称": "诊室椅、护士站椅、医生办公椅",
            "规格型号": "常规",
            "增加方式": "直接购入",
            "原值": "480.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼105诊室",
            "供应商名称": "沈阳市黎明家俱制造有限公司",
            "生产厂家": "",
            "序列号": "",
            "合同号": "HG-20180608-009",
            "保修期": "3年 至2021-06-07止",
            "开始使用日期": "2018.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "46.80",
            "已计提月份": "57",
            "累计折旧": "433.20",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "24.00",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "椅子",
            "类别编号": "0602002",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "040258",
            "固定资产编号": "060200580045",
            "固定资产名称": "三门更衣柜",
            "规格型号": "900*500*1850mm",
            "增加方式": "直接购入",
            "原值": "530.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼103诊室",
            "供应商名称": "辽宁亿方营房教学办公设备有限公司",
            "生产厂家": "亿方营房",
            "序列号": "",
            "合同号": "HG-20180608-002",
            "保修期": "3年 至2021-06-08",
            "开始使用日期": "2018.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "51.68",
            "已计提月份": "57",
            "累计折旧": "478.32",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "26.50",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "柜",
            "类别编号": "0602005",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "040369",
            "固定资产编号": "060200580156",
            "固定资产名称": "两屉文件柜",
            "规格型号": "900*400*1850mm",
            "增加方式": "直接购入",
            "原值": "470.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼110诊室",
            "供应商名称": "辽宁亿方营房教学办公设备有限公司",
            "生产厂家": "亿方营房",
            "序列号": "",
            "合同号": "",
            "保修期": "3年 至2021-12-19止",
            "开始使用日期": "2018.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "45.84",
            "已计提月份": "57",
            "累计折旧": "424.16",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "23.50",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "柜",
            "类别编号": "0602005",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "041648",
            "固定资产编号": "060200980100",
            "固定资产名称": "实木美容床（折叠按摩床）",
            "规格型号": "",
            "增加方式": "直接购入",
            "原值": "1,200.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "中医科门诊",
            "供应商名称": "沈阳壹诺医药商贸有限公司",
            "生产厂家": "",
            "序列号": "",
            "合同号": "皇姑院区-中医康复编号2019001",
            "保修期": "",
            "开始使用日期": "2019.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "345.00",
            "已计提月份": "45",
            "累计折旧": "855.00",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "60.00",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "床",
            "类别编号": "0602009",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "041649",
            "固定资产编号": "060200980101",
            "固定资产名称": "实木美容床（折叠按摩床）",
            "规格型号": "",
            "增加方式": "直接购入",
            "原值": "1,200.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "中医科门诊",
            "供应商名称": "沈阳壹诺医药商贸有限公司",
            "生产厂家": "",
            "序列号": "",
            "合同号": "皇姑院区-中医康复编号2019001",
            "保修期": "",
            "开始使用日期": "2019.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "345.00",
            "已计提月份": "45",
            "累计折旧": "855.00",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "60.00",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "床",
            "类别编号": "0602009",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "041650",
            "固定资产编号": "060200980102",
            "固定资产名称": "实木美容床（折叠按摩床）",
            "规格型号": "",
            "增加方式": "直接购入",
            "原值": "1,200.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "中医科门诊",
            "供应商名称": "沈阳壹诺医药商贸有限公司",
            "生产厂家": "",
            "序列号": "",
            "合同号": "皇姑院区-中医康复编号2019001",
            "保修期": "",
            "开始使用日期": "2019.12.19",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "345.00",
            "已计提月份": "45",
            "累计折旧": "855.00",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "60.00",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "床",
            "类别编号": "0602009",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "043360",
            "固定资产编号": "051700180392",
            "固定资产名称": "钢制喷塑诊查床",
            "规格型号": "",
            "增加方式": "直接购入",
            "原值": "780.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区一楼105诊室",
            "供应商名称": "沈阳市铁西区艺馨家具经销处",
            "生产厂家": "艺馨",
            "序列号": "",
            "合同号": "皇姑-门诊集团 2020-071",
            "保修期": "1年 至2021-08-16止",
            "开始使用日期": "2020.08.17",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "323.05",
            "已计提月份": "37",
            "累计折旧": "456.95",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "39.00",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "病床",
            "类别编号": "0517001",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "043367",
            "固定资产编号": "060200280650",
            "固定资产名称": "就诊椅",
            "规格型号": "无背/无轮",
            "增加方式": "直接购入",
            "原值": "245.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区一楼105诊室",
            "供应商名称": "沈阳市铁西区艺馨家具经销处",
            "生产厂家": "艺馨",
            "序列号": "",
            "合同号": "皇姑-门诊集团 2020-071",
            "保修期": "1年 至2021-08-16止",
            "开始使用日期": "2020.08.17",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "101.44",
            "已计提月份": "37",
            "累计折旧": "143.56",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "12.25",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "椅子",
            "类别编号": "0602002",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "043600",
            "固定资产编号": "040100480010",
            "固定资产名称": "一体机电脑",
            "规格型号": "ThinkCentere M820Z",
            "增加方式": "直接购入",
            "原值": "4,210.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼105诊室",
            "供应商名称": "沈阳远诺网络科技有限公司",
            "生产厂家": "联想",
            "序列号": "",
            "合同号": "",
            "保修期": "",
            "开始使用日期": "2020.09.04",
            "注册证编码": "",
            "使用年限(月)": "36",
            "净值": "210.50",
            "已计提月份": "36",
            "累计折旧": "3,999.50",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "210.50",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "计算机",
            "类别编号": "0401004",
            "使用状况": "在用",
            "减少方式": ""
        },
        {
            "卡片编号": "043990",
            "固定资产编号": "060200180333",
            "固定资产名称": "诊室桌",
            "规格型号": "1400*1450*760",
            "增加方式": "直接购入",
            "原值": "1,250.00",
            "使用部门": "(H)中医科门诊",
            "存放地点": "A区1楼103诊室",
            "供应商名称": "沈阳市鑫德新家具厂",
            "生产厂家": "沈阳市鑫德新家具厂",
            "序列号": "",
            "合同号": "皇姑-门诊 集团 2020-071",
            "保修期": "3年 至2023-11-12止",
            "开始使用日期": "2020.11.04",
            "注册证编码": "",
            "使用年限(月)": "60",
            "净值": "577.14",
            "已计提月份": "34",
            "累计折旧": "672.86",
            "本月计提折旧额": "0.00",
            "净残值率": "0.05",
            "净残值": "62.50",
            "部门编号": "H010504",
            "保管人": "",
            "类别名称": "桌子",
            "类别编号": "0602001",
            "使用状况": "在用",
            "减少方式": ""
        }
    ]
    dataToExcel(d, 'example')
    console.log("done")
}