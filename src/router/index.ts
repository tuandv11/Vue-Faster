import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/Dashboard/DashboardLayout.vue'),
      redirect: '/import/child1'
    }
  ]
})

const importRoute = {
  path: '/import',
  name: 'import',
  component: () => import('@/components/Dashboard/DashboardLayout.vue'),
  children: [
    {
      path: 'child1',
      meta: {title: 'Child - One'},
      component: () => import('@/pages/Import/ChildOne.vue')
    },
    {
      path: 'child2',
      meta: {title: 'Child - Two'},
      component: () => import('@/pages/Import/Child2.vue')
    },
    {
      path: 'child3',
      meta: {title: 'Child - Three'},
      component: () => import('@/pages/Import/Child3.vue')
    }
  ]
}

const exportRoute = {
  path: '/export',
  name: 'export',
  component: () => import('@/components/Dashboard/DashboardLayout.vue'),
  children: [
    {
      path: 'child1',
      meta: {title: 'Child - One'},
      component: () => import('@/pages/Export/Child1.vue')
    },
    {
      path: 'child2',
      meta: {title: 'Child - Two'},
      component: () => import('@/pages/Export/Child2.vue')
    },
    {
      path: 'child3',
      meta: {title: 'Child - Three'},
      component: () => import('@/pages/Export/Child3.vue')
    }
  ]
}

router.addRoute(importRoute)
router.addRoute(exportRoute)

function setTitle (to: any) {
  document.title = to.meta.title || 'App'
}

router.afterEach((to, from) => {
  setTitle(to)
})

export default router
