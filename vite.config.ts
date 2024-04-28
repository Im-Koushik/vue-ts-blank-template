import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers'
import { URL, fileURLToPath } from 'node:url';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    AutoImport({
      imports:[
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/core',
        '@vueuse/head',
        'vee-validate',
      ],
      dts:true,
      eslintrc:{
        enabled:true,
      },
      dirs:['./src/composables/**'],
      vueTemplate:true,
    }),
    Components(
      {
        dts:true,
        directoryAsNamespace:true,
        deep:true,
        resolvers:[PrimeVueResolver({})]
      }
    )
  ],
  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
