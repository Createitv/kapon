<script setup lang="ts">
import NavHeader from './components/navbar/NavHeader.vue'
// import {useCofigStore} from "@/store/config.ts";
// import { ref } from 'vue'
// const configStore = useCofigStore()
// const len = ref(Object.keys(configStore.config).length)
</script>

<template>
  <NavHeader />
  <router-view></router-view>
  <!-- <text>{{ len}}</text> -->
  <!--  <ExcelFileUploader />-->
</template>

<style scoped></style>
