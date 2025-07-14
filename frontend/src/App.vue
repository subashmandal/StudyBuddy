<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LanguageSelector, DarkModeToggle } from './components/index.js'
import { useAppStore } from './store'
import { HomeIcon, CalendarIcon, ClipboardDocumentListIcon, ChartBarIcon, BookOpenIcon, ClockIcon, Squares2X2Icon, ChatBubbleLeftRightIcon, UsersIcon, Cog6ToothIcon, ArrowUpCircleIcon } from '@heroicons/vue/24/outline'

const navLinks = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/calendar', label: 'Calendar', icon: CalendarIcon },
  { to: '/plan', label: 'Daily Plan', icon: ClipboardDocumentListIcon },
  { to: '/stats', label: 'Stats', icon: ChartBarIcon },
  { to: '/subjects', label: 'Subjects', icon: BookOpenIcon },
  { to: '/pomodoro', label: 'Pomodoro', icon: ClockIcon },
  { to: '/flashcards', label: 'Flashcards', icon: Squares2X2Icon },
  { to: '/ai-chat', label: 'AI Chat', icon: ChatBubbleLeftRightIcon },
  { to: '/study-room', label: 'Study Room', icon: UsersIcon },
  { to: '/settings', label: 'Settings', icon: Cog6ToothIcon },
  { to: '/upgrade', label: 'Upgrade', icon: ArrowUpCircleIcon, special: true },
]
const route = useRoute()
const showSidebar = ref(false)
const appStore = useAppStore()
const router = useRouter()
const handleLogout = () => {
  appStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors">
    <!-- Header -->
    <header class="flex items-center justify-between p-4 shadow bg-white/80 dark:bg-gray-900/80 backdrop-blur z-10">
      <div class="flex items-center gap-2">
        <img src="/logo.svg" alt="StudyBuddy Logo" class="h-8 w-8 rounded-full bg-blue-200 dark:bg-gray-800" />
        <span class="font-bold text-2xl tracking-tight">StudyBuddy</span>
      </div>
      <div class="flex items-center gap-4">
        <template v-if="appStore.user">
          <span class="text-sm text-gray-700 dark:text-gray-200">Hi, {{ appStore.user.name }}</span>
          <button @click="handleLogout" class="text-xs px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-red-200 dark:hover:bg-red-700 text-gray-800 dark:text-gray-100">Logout</button>
        </template>
        <template v-else>
          <router-link to="/login" class="text-xs px-3 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">Login</router-link>
        </template>
        <LanguageSelector />
        <DarkModeToggle />
        <button class="md:hidden p-2" @click="showSidebar = !showSidebar" aria-label="Open menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </header>
    <!-- Sidebar for desktop -->
    <aside class="hidden md:flex flex-col w-56 bg-white/80 dark:bg-gray-900/80 shadow h-full fixed top-0 left-0 pt-20 z-20">
      <nav class="flex flex-col gap-1 p-4">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition hover:bg-blue-100 dark:hover:bg-gray-800" :class="{ 'bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300': route.path === link.to, 'text-gray-700 dark:text-gray-200': route.path !== link.to, 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300': link.special }">
          <component :is="link.icon" class="w-5 h-5" />
          <span>{{ link.label }}</span>
        </RouterLink>
      </nav>
    </aside>
    <!-- Overlay sidebar for mobile -->
    <transition name="fade">
      <aside v-if="showSidebar" class="fixed inset-0 z-30 bg-black/40 md:hidden" @click="showSidebar = false">
        <nav class="absolute left-0 top-0 w-64 h-full bg-white dark:bg-gray-900 shadow p-4 flex flex-col gap-1">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition hover:bg-blue-100 dark:hover:bg-gray-800" :class="{ 'bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300': route.path === link.to, 'text-gray-700 dark:text-gray-200': route.path !== link.to, 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300': link.special }" @click="showSidebar = false">
            <component :is="link.icon" class="w-5 h-5" />
            <span>{{ link.label }}</span>
          </RouterLink>
        </nav>
      </aside>
    </transition>
    <!-- Main content -->
    <main class="flex-1 md:ml-56 pt-8 px-4 max-w-4xl mx-auto w-full">
      <router-view />
    </main>
    <!-- Bottom nav for mobile -->
    <nav class="fixed bottom-0 left-0 right-0 z-20 flex md:hidden bg-white/90 dark:bg-gray-900/90 shadow divide-x divide-gray-200 dark:divide-gray-800">
      <RouterLink v-for="link in navLinks.slice(0, 5)" :key="link.to" :to="link.to" class="flex-1 flex flex-col items-center justify-center py-2 text-xs" :class="{ 'text-blue-600 dark:text-blue-300': route.path === link.to, 'text-gray-500 dark:text-gray-300': route.path !== link.to }">
        <component :is="link.icon" class="w-6 h-6 mb-1" />
        <span>{{ link.label }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
