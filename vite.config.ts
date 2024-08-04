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
        includeAssets: ['./images/favicon.ico',],
        manifest: {
          name: 'Розіграж призів',
          short_name: 'Лотерея',
          description: "Програма для розіграша призів",
          theme_color: '#ffffff',
          orientation: 'landscape',
          icons: [
            {
              src: './images/logo.svg',
              sizes: '50x50',
              type: 'image/svg'
            }
          ],
          screenshots: [
            {
              form_factor: 'wide',
              sizes: '1917x923',
              platform: 'all',
              src: 'images/pc.png'
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
