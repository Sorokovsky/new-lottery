import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*.{js,css,html}'],
          cleanupOutdatedCaches: true
        },
        includeAssets: ['./images/pwa/favicon.ico',],
        manifest: {
          name: 'Розіграж призів',
          short_name: 'Лотерея',
          description: "Програма для розіграша призів",
          theme_color: '#ffffff',
          orientation: 'landscape',
          icons: [
          {
            src: "images/pwa/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "images/pwa/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
          screenshots: [
            {
              form_factor: 'wide',
              sizes: '1917x923',
              platform: 'pc',
              src: 'images/pwa/pc.png'
            },
            {
              form_factor: 'narrow',
              sizes: '361x737',
              platform: 'mobile',
              src: 'images/pwa/mobile.png',
            }
          ],
        },
        strategies: 'injectManifest',
        filename: './sw.ts',
        devOptions: {
          enabled: true,
          type: 'module'
        },
      }
    )
  ],
})
