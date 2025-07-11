import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'en',
    user: null, // Placeholder for user info
  }),
  actions: {
    setLocale(locale) {
      this.locale = locale
      localStorage.setItem('locale', locale)
    },
    setUser(user) {
      this.user = user
    },
    logout() {
      this.user = null
      // Clear tokens, etc.
    }
  },
}) 