<template>
  <select class="bg-transparent border rounded px-2 py-1" v-model="locale" @change="changeLocale">
    <option value="en">English</option>
    <option value="es">Español</option>
    <option value="fr">Français</option>
    <!-- Add more languages as needed -->
  </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useAppStore } from '../store'
import { watch } from 'vue'

const { locale: i18nLocale } = useI18n()
const appStore = useAppStore()
const { locale } = storeToRefs(appStore)

function changeLocale() {
  i18nLocale.value = locale.value
  appStore.setLocale(locale.value)
}

// Ensure i18n and store are always in sync
watch(locale, (val) => {
  i18nLocale.value = val
  appStore.setLocale(val)
})
</script> 