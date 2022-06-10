import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
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
      component: () => import('@/pages/Import/ChildTwo.vue')
    },
    {
      path: 'child3',
      meta: {title: 'Child - Three'},
      component: () => import('@/pages/Import/ChildThree.vue')
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
      component: () => import('@/pages/Export/ChildOne.vue')
    },
    {
      path: 'child2',
      meta: {title: 'Child - Two'},
      component: () => import('@/pages/Export/ChildTwo.vue')
    },
    {
      path: 'child3',
      meta: {title: 'Child - Three'},
      component: () => import('@/pages/Export/ChildThree.vue')
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
