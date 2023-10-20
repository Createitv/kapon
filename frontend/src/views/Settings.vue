<script setup lang="ts">
import { useCofigStore } from "@/store/config.ts";

// 数组对比去重
function unique(arr) {
  return arr.filter(function (item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}

const configStore = useCofigStore()
// console.log(Object.keys(configStore.config))
console.log("1", unique(Object.values(configStore.config)))


let options = []
unique(Object.values(configStore.config)).forEach((item: string) => {
  let empty = {
    value: '',
    label: ''
  }
  console.log(item)
  empty.label = item
  empty.value = item
  options.push(empty)
})
console.log("console.log(options)", options)
</script>

<template>
  <el-scrollbar height="700px">
    <div v-for="item in Object.keys(configStore.config)" :key="item" class="scrollbar-demo-item">{{ item }} :
      {{ configStore.config[item] }}
      <!-- <el-select v-model="configStore.config[item]" class="m-2" placeholder="Select" size="large" filterable>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select> -->
    </div>
  </el-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>