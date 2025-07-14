<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../store'

const name = ref('')
const email = ref('')
const password = ref('')
const appStore = useAppStore()
const router = useRouter()

const handleRegister = async () => {
  await appStore.register(name.value, email.value, password.value)
  if (appStore.user) router.push('/')
}

watch(() => appStore.user, (user) => {
  if (user) router.push('/')
})
</script>

<template>
  <div class="max-w-sm mx-auto space-y-4">
    <h1 class="text-2xl font-bold">{{ $t('register') }}</h1>
    <form class="space-y-2" @submit.prevent="handleRegister">
      <input class="w-full p-2 border rounded" type="text" placeholder="Name" v-model="name" required />
      <input class="w-full p-2 border rounded" type="email" placeholder="Email" v-model="email" required />
      <input class="w-full p-2 border rounded" type="password" placeholder="Password" v-model="password" required />
      <button class="w-full bg-blue-600 text-white p-2 rounded" :disabled="appStore.loading">
        <span v-if="appStore.loading">Registering...</span>
        <span v-else>Register</span>
      </button>
      <div v-if="appStore.error" class="text-red-600 text-sm mt-2">{{ appStore.error }}</div>
    </form>
    <router-link to="/login" class="text-blue-600">Already have an account? Login</router-link>
  </div>
</template> 