import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from './store'

const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue'), meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: () => import('./views/Login.vue') },
  { path: '/register', name: 'Register', component: () => import('./views/Register.vue') },
  { path: '/calendar', name: 'Calendar', component: () => import('./views/Calendar.vue'), meta: { requiresAuth: true } },
  { path: '/plan', name: 'DailyPlan', component: () => import('./views/DailyPlan.vue'), meta: { requiresAuth: true } },
  { path: '/stats', name: 'Stats', component: () => import('./views/Stats.vue'), meta: { requiresAuth: true } },
  { path: '/subjects', name: 'Subjects', component: () => import('./views/Subjects.vue'), meta: { requiresAuth: true } },
  { path: '/pomodoro', name: 'Pomodoro', component: () => import('./views/Pomodoro.vue'), meta: { requiresAuth: true } },
  { path: '/flashcards', name: 'Flashcards', component: () => import('./views/Flashcards.vue'), meta: { requiresAuth: true } },
  { path: '/ai-chat', name: 'AIChat', component: () => import('./views/AIChat.vue'), meta: { requiresAuth: true } },
  { path: '/study-room', name: 'StudyRoom', component: () => import('./views/StudyRoom.vue'), meta: { requiresAuth: true } },
  { path: '/settings', name: 'Settings', component: () => import('./views/Settings.vue'), meta: { requiresAuth: true } },
  { path: '/upgrade', name: 'Upgrade', component: () => import('./views/Upgrade.vue'), meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  if (to.meta.requiresAuth && !appStore.token) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/register') && appStore.token) {
    next('/')
  } else {
    next()
  }
})

export default router 