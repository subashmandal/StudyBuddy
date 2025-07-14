<template>
  <button @click="toggleDark" class="p-2 rounded focus:outline-none" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
    <span v-if="isDark">🌑</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
const isDark = ref(false)

function setDarkMode(val) {
  isDark.value = val
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
}

function toggleDark() {
  setDarkMode(!isDark.value)
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme === 'dark') setDarkMode(true)
  else if (theme === 'light') setDarkMode(false)
  else setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
})

watch(isDark, (val) => setDarkMode(val))
</script> 