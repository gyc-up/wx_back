import { createRouter, createWebHashHistory } from 'vue-router'
/* import { useStore } from 'vuex' */
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/UserLogin.vue')
  },
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { 
        path: 'mainDashboard',
        component: () => import('@/views/MainDashboard.vue'),
        meta: { title: '仪表盘' }
      }
      ,{ 
        path: 'users',
        component: () => import('@/views/UserList.vue'),
        meta: { title: '用户表' }
      }
      ,{ 
        path: 'settings',
        component: () => import('@/views/UserSettings.vue'),
        meta: { title: '系统设置' }
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// 添加全局导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // 检查用户是否已登录

  if (to.path === '/') {
    if (isAuthenticated) {
      next('/mainDashboard'); // 已登录，跳转到首页
    } else {
      next('/login'); // 未登录，跳转到登录页面
    }
  } else {
    next(); // 继续导航
  }
})

export default router