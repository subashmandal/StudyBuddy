<template>
  <div class="space-y-8">
    <section class="text-center mb-8">
      <h1 class="text-3xl font-extrabold mb-2">Welcome to <span class="text-blue-600 dark:text-blue-400">StudyBuddy</span>!</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">Ready to crush your study goals today?</p>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-start">
        <h2 class="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Today's Plan</h2>
        <p class="text-gray-700 dark:text-gray-200">3 tasks, 2 Pomodoros</p>
        <router-link to="/plan" class="mt-4 text-blue-600 hover:underline">View Plan</router-link>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-start">
        <h2 class="font-bold text-lg mb-2 text-indigo-600 dark:text-indigo-400">Productivity Stats</h2>
        <p class="text-gray-700 dark:text-gray-200">Focus: 85% | Streak: 5 days</p>
        <router-link to="/stats" class="mt-4 text-indigo-600 hover:underline">View Stats</router-link>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-start">
        <h2 class="font-bold text-lg mb-2 text-green-600 dark:text-green-400">Calendar</h2>
        <p class="text-gray-700 dark:text-gray-200">Next event: Math Study Group at 4pm</p>
        <router-link to="/calendar" class="mt-4 text-green-600 hover:underline">View Calendar</router-link>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-start">
        <h2 class="font-bold text-lg mb-2 text-pink-600 dark:text-pink-400">Quick Actions</h2>
        <div class="flex gap-2 flex-wrap">
          <router-link to="/pomodoro" class="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 px-3 py-1 rounded">Pomodoro</router-link>
          <router-link to="/flashcards" class="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 px-3 py-1 rounded">Flashcards</router-link>
          <router-link to="/ai-chat" class="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded">AI Chat</router-link>
        </div>
      </div>
    </div>
  </div>
</template> 