import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
//引入components单体文件

const router = createRouter({
  history: createWebHashHistory(),
  //用哈希模式
  routes: [
    {
      path: '/home', //路径
      name: 'home',
      component: Home //引入的components单体文件
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
});

export default router; //暴露router路由
