import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        vue: 'vue/dist/vue.esm-bundler.js'
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // (可选) 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', 'vue-router'], // 可以加上 vue-router
        dts: 'src/renderer/src/auto-imports.d.ts', // 生成类型声明文件 (如果是TS项目)
        eslintrc: {
          enabled: true, // 确保开启，默认为 false
          filepath: './.eslintrc-auto-import.json', // 指定生成的 ESLint 配置文件的路径和名称
          globalsPropValue: true // 或者 'readonly'。这会让 ESLint 认为这些全局变量是只读的
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'src/renderer/src/components.d.ts' // 生成类型声明文件 (如果是TS项目)
      })
    ]
  }
})
