import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' 

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': { // it basically states that each timean address starts with /api then
        target: 'http://localhost:3000', // add 'http://localhost:3000' at the beginning of the /api.....to add at the beginning we use target attribute
        secure: false
      }
    }
  },
  // So basically we created a server and a proxy 
  plugins: [react()],
})
