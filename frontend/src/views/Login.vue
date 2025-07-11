<template>
  <div class="max-w-sm mx-auto space-y-4">
    <h1 class="text-2xl font-bold">{{ $t('login') }}</h1>
    <form class="space-y-2">
      <input class="w-full p-2 border rounded" type="email" placeholder="Email" />
      <input class="w-full p-2 border rounded" type="password" placeholder="Password" />
      <button class="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
    <router-link to="/register" class="text-blue-600">Don't have an account? Register</router-link>
  </div>
</template> 