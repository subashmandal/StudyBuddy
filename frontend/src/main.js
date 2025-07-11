import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import router from './router'
import { useAppStore } from './store'
import './style.css'
import App from './App.vue'

const messages = {
  en: {
    home: 'Home Dashboard',
    login: 'Login',
    register: 'Register',
    calendar: 'Study Calendar',
    plan: 'Daily Plan Overview',
    stats: 'Productivity Stats',
    subjects: 'Subjects & Smart Planner',
    pomodoro: 'Pomodoro Timer',
    flashcards: 'Flashcards Viewer',
    ai_chat: 'AI Chat (Ask Doubt)',
    study_room: 'Study Room Chat',
    settings: 'Settings',
    upgrade: 'Upgrade Your Plan',
  },
  es: {
    home: 'Panel Principal',
    login: 'Iniciar sesión',
    register: 'Registrarse',
    calendar: 'Calendario de Estudio',
    plan: 'Resumen Diario',
    stats: 'Estadísticas de Productividad',
    subjects: 'Materias y Planificador',
    pomodoro: 'Temporizador Pomodoro',
    flashcards: 'Tarjetas de Memoria',
    ai_chat: 'Chat IA (Duda)',
    study_room: 'Sala de Estudio',
    settings: 'Configuración',
    upgrade: 'Mejorar Plan',
  },
  fr: {
    home: 'Tableau de Bord',
    login: 'Connexion',
    register: 'Inscription',
    calendar: 'Calendrier d\'étude',
    plan: 'Aperçu du Jour',
    stats: 'Statistiques de Productivité',
    subjects: 'Sujets & Planificateur',
    pomodoro: 'Minuteur Pomodoro',
    flashcards: 'Cartes Mémo',
    ai_chat: 'Chat IA (Question)',
    study_room: 'Salle d\'étude',
    settings: 'Paramètres',
    upgrade: 'Améliorer le Plan',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')
