<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../store'

const email = ref('')
const password = ref('')
const appStore = useAppStore()
const router = useRouter()

const handleLogin = async () => {
  await appStore.login(email.value, password.value)
  if (appStore.user) router.push('/')
}

watch(() => appStore.user, (user) => {
  if (user) router.push('/')
})
</script>

<template>
  <div class="max-w-sm mx-auto space-y-4">
    <h1 class="text-2xl font-bold">{{ $t('login') }}</h1>
    <form class="space-y-2" @submit.prevent="handleLogin">
      <input class="w-full p-2 border rounded" type="email" placeholder="Email" v-model="email" required />
      <input class="w-full p-2 border rounded" type="password" placeholder="Password" v-model="password" required />
      <button class="w-full bg-blue-600 text-white p-2 rounded" :disabled="appStore.loading">
        <span v-if="appStore.loading">Logging in...</span>
        <span v-else>Login</span>
      </button>
      <div v-if="appStore.error" class="text-red-600 text-sm mt-2">{{ appStore.error }}</div>
    </form>
    <router-link to="/register" class="text-blue-600">Don't have an account? Register</router-link>
  </div>
</template> 