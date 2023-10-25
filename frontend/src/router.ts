/** @format */

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// 引入components单体文件

const router = createRouter({
  history: createWebHashHistory(),
  // 用哈希模式
  routes: [
    {
      path: '/', // 路径
      name: 'home',
      component: Home, // 引入的components单体文件
    },
  ],
})

export default router // 暴露router路由
