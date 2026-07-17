import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import Sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = [
  '/services/housekeeping',
  '/services/pest-control',
  '/services/manpower-supply',
  '/services/guest-house',
  '/services/staffing'
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://direct2drive.com', // Placeholder domain
      dynamicRoutes,
      readable: true
    })
  ],
})
