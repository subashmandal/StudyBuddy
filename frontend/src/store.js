import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'en',
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  }),
  actions: {
    setLocale(locale) {
      this.locale = locale
      localStorage.setItem('locale', locale)
    },
    async login(email, password) {
      this.loading = true
      this.error = null
      try {
        const res = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Login failed')
        this.token = data.access_token
        localStorage.setItem('token', data.access_token)
        this.user = data.user
      } catch (e) {
        this.error = e.message
        this.token = null
        this.user = null
      } finally {
        this.loading = false
      }
    },
    async register(name, email, password) {
      this.loading = true
      this.error = null
      try {
        const res = await fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Registration failed')
        this.token = data.access_token
        localStorage.setItem('token', data.access_token)
        this.user = data.user
      } catch (e) {
        this.error = e.message
        this.token = null
        this.user = null
      } finally {
        this.loading = false
      }
    },
    async fetchProfile() {
      if (!this.token) return
      this.loading = true
      this.error = null
      try {
        const res = await fetch('http://127.0.0.1:8000/api/user', {
          headers: { 'Authorization': `Bearer ${this.token}` }
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Failed to fetch profile')
        this.user = data
      } catch (e) {
        this.error = e.message
        this.user = null
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  },
}) 