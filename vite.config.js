import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: [
        '/icons/favicon-32x32.png',
        '/icons/apple-touch-icon.png',
        '/icons/safari-pinned-tab.svg'
      ],
      manifest: {
        name: 'Cook Book',
        short_name: 'Cook Book',
        description: 'Un moyen simple de conserver mes recettes préférées',
        display: 'fullscreen',
        theme_color: '#FAFAFA',
        icons: [
          {
            src: '/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'esnext'
  }
})
