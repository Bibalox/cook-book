import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const darkTheme = window.matchMedia('(prefers-color-scheme: dark)')
if (darkTheme.matches) {
  document.documentElement.setAttribute('data-theme', 'dark')
} else {
  document.documentElement.setAttribute('data-theme', 'light')
}

try {
  await navigator.wakeLock.request('screen');
  console.info('Wake lock activated');
} catch (err) {
  console.error('Wakelock cannot be activated')
}