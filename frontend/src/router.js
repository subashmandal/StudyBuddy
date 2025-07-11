import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/login', name: 'Login', component: () => import('./views/Login.vue') },
  { path: '/register', name: 'Register', component: () => import('./views/Register.vue') },
  { path: '/calendar', name: 'Calendar', component: () => import('./views/Calendar.vue') },
  { path: '/plan', name: 'DailyPlan', component: () => import('./views/DailyPlan.vue') },
  { path: '/stats', name: 'Stats', component: () => import('./views/Stats.vue') },
  { path: '/subjects', name: 'Subjects', component: () => import('./views/Subjects.vue') },
  { path: '/pomodoro', name: 'Pomodoro', component: () => import('./views/Pomodoro.vue') },
  { path: '/flashcards', name: 'Flashcards', component: () => import('./views/Flashcards.vue') },
  { path: '/ai-chat', name: 'AIChat', component: () => import('./views/AIChat.vue') },
  { path: '/study-room', name: 'StudyRoom', component: () => import('./views/StudyRoom.vue') },
  { path: '/settings', name: 'Settings', component: () => import('./views/Settings.vue') },
  { path: '/upgrade', name: 'Upgrade', component: () => import('./views/Upgrade.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 