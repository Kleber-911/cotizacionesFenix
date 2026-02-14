import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: './',   // 👈 OBLIGATORIO para Electron
  plugins: [react()],
  server: {
    host: true
  }
})