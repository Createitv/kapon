<template>
    <div class="content">
        <el-select
                v-model="chooseValue" clearable filterable :filter-method="filterMethod"
                v-el-select-loadmore="loadMore(rangeNumber)"
                @visible-change="visibleChange">
            <el-option
                    v-for="(item, index) in options.slice(0, rangeNumber)"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script lang="ts">
import {_debounce} from './loadmore.ts'
import {unique} from "@/common/collection.js";
import {useCofigStore} from "@/store/config.js";

export default {
  data() {
    return {
      chooseValue: "",
      options: [],
      rangeNumber: 10,
      resOptions: [],
    };
  },
  methods: {
    // 模拟获取大量数据
    getList() {
      // 测试数据15000条数据, 这里数据多少条无所谓,options.slice(0, rangeNumber)方法只会默认加载初始的10条数据
      // for (let i = 0; i < 25; i++) {
      //     this.resOptions.push({label: "选择" + i, value: "选择" + i});
      // }
      const configStore = useCofigStore()

      unique(Object.values(configStore.config)).forEach((item: string) => {
        let empty = {
          value: '',
          label: ''
        }
        empty.label = item
        empty.value = item
        this.resOptions.push(empty)
      })
    },
    loadMore(n) {
      // n是默认初始展示的条数会在渲染的时候就可以获取,具体可以打log查看
      // elementui下拉超过7条才会出滚动条,如果初始不出滚动条无法触发loadMore方法
      return () => (this.rangeNumber += 5); // 每次滚动到底部可以新增条数  可自定义
    },
    // 筛选方法
    filterMethod: _debounce(function (filterVal) {
      if (filterVal) {
        let filterArr = this.resOptions.filter((item) => {
          return item.label.toLowerCase().includes(filterVal.toLowerCase())
        })
        this.options = filterArr;
      } else {
        this.options = this.resOptions;
      }
    }, 500),
    // 下拉框出现时，调用过滤方法
    visibleChange(flag) {
      if (flag) {
        this.filterMethod()
      }
    },
  },
  beforeMount() {
    this.getList();
  },
  directives: {
    'el-select-loadmore': (el, binding) => {
      // 获取element-ui定义好的scroll盒子
      const SELECTWRAP_DOM = el.querySelector(".el-select-dropdown .el-select-dropdown__wrap");
      if (SELECTWRAP_DOM) {
        SELECTWRAP_DOM.addEventListener("scroll", function () {
          /**
           * scrollHeight 获取元素内容高度(只读)
           * scrollTop 获取或者设置元素的偏移值,
           *  常用于:计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
           * clientHeight 读取元素的可见高度(只读)
           * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
           * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
           */
          const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
          if (condition) binding.value();
        });
      }
    },
  }
};
</script>
