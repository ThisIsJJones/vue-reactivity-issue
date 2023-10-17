import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import { VuexModule } from 'vuex-class-modules';

VuexModule.__useHotUpdate = true; // default false


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()]

})
