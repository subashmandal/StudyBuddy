<script setup>
// Placeholder for logo import
// import Logo from './assets/logo.svg'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
    <header class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-center gap-2">
        <span class="font-bold text-xl">StudyBuddy</span>
      </div>
      <div class="flex items-center gap-4">
        <!-- Language Selector -->
        <LanguageSelector />
        <!-- Dark Mode Toggle -->
        <DarkModeToggle />
      </div>
    </header>
    <nav class="flex gap-2 p-2 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
      <!-- Navigation links will go here -->
      <RouterLink to="/" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Home</RouterLink>
      <RouterLink to="/calendar" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Calendar</RouterLink>
      <RouterLink to="/plan" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Daily Plan</RouterLink>
      <RouterLink to="/stats" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Stats</RouterLink>
      <RouterLink to="/subjects" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Subjects</RouterLink>
      <RouterLink to="/pomodoro" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Pomodoro</RouterLink>
      <RouterLink to="/flashcards" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Flashcards</RouterLink>
      <RouterLink to="/ai-chat" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">AI Chat</RouterLink>
      <RouterLink to="/study-room" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Study Room</RouterLink>
      <RouterLink to="/settings" class="px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Settings</RouterLink>
      <RouterLink to="/upgrade" class="px-3 py-1 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900 text-yellow-700 dark:text-yellow-300">Upgrade</RouterLink>
    </nav>
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script>
// Register global components (for manual use if needed)
import LanguageSelector from './components/LanguageSelector.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'
export default {
  components: { LanguageSelector, DarkModeToggle }
}
</script>

<style scoped>
/* Add any global styles here */
</style>
