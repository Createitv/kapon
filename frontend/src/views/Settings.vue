<script setup lang="ts">
import {useCofigStore} from "@/store/config.ts";
import SelectV from "@/components/Setting/SelectV.vue";

const configStore = useCofigStore()

</script>

<template>
    <el-scrollbar height="1000px">
        <div v-for="item in Object.keys(configStore.config)" :key="item" class="scrollbar-demo-item">{{ item }} :
            {{ configStore.config[item] }}
            <SelectV></SelectV>
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