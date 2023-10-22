<template>
  <el-select v-model="value" class="m-2" placeholder="打字检索" size="large" filterable autocomplete="true"
    @change="handleChage" @click="visibleChange">
    <el-option v-for="item in options.slice(0, showOptionsCount)" :key="item.value" :label="item.label"
      :value="item.value" />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCofigStore } from "@/store/config.ts";
import { unique } from "@/common/collection.ts";
import { setLocalStorageKey } from '../../common/parser';

const configStore = useCofigStore()
const showOptionsCount = ref(0)
const props = defineProps({
  configKey: String,
})
const cfigKey = props.configKey
function visibleChange() {
  showOptionsCount.value = options.length
}
function handleChage() {
  setLocalStorageKey(cfigKey, value.value)
}

const value = ref('')
let options = []
unique(Object.values(configStore.config)).forEach((item: string) => {
  let empty = {
    value: '',
    label: ''
  }
  empty.label = item
  empty.value = item
  options.push(empty)
})
</script>