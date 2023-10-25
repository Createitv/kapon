<template>
  <div class="m-15 ml-20 ">
    <el-row :gutter="10" class="flex items-center">
      <el-col :span="20">
        <el-input v-model="input" placeholder="直接粘贴下载链接" size="large" :autosize="{ minRows: 2, maxRows: 4 }" clearable>
          <template #prefix>
            <el-icon class="el-input__icon">
              <search />
            </el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">解析</el-button>
      </el-col>
    </el-row>


  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
