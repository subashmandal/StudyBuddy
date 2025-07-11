<template>
  <div class="max-w-sm mx-auto space-y-4">
    <h1 class="text-2xl font-bold">{{ $t('register') }}</h1>
    <form class="space-y-2">
      <input class="w-full p-2 border rounded" type="text" placeholder="Name" />
      <input class="w-full p-2 border rounded" type="email" placeholder="Email" />
      <input class="w-full p-2 border rounded" type="password" placeholder="Password" />
      <button class="w-full bg-blue-600 text-white p-2 rounded">Register</button>
    </form>
    <router-link to="/login" class="text-blue-600">Already have an account? Login</router-link>
  </div>
</template> 