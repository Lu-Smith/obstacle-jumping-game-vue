import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` // just variables loaded globally
          @import "./src/styles/_base";
          @import "./src/styles/_mixins";
          @import "./src/styles/_variables";
        `
      }
    }
  }
});


