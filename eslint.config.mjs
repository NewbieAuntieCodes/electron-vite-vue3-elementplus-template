// eslint.config.mjs
import tseslint from '@electron-toolkit/eslint-config-ts'
import eslintConfigPrettier from '@electron-toolkit/eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

// 导入 Node.js 模块和 ESLint 官方的全局变量定义
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import globals from 'globals' // 用于标准全局变量，如 browser, node

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 读取 .eslintrc-auto-import.json 文件
let autoImportedGlobals = {}
try {
  const autoImportConfigPath = path.resolve(__dirname, '.eslintrc-auto-import.json')
  if (fs.existsSync(autoImportConfigPath)) {
    const autoImportConfigFile = fs.readFileSync(autoImportConfigPath, 'utf-8')
    autoImportedGlobals = JSON.parse(autoImportConfigFile).globals || {}
    console.log(
      'ESLint: Successfully loaded auto-imported ESLint globals from .eslintrc-auto-import.json'
    )
    if (Object.keys(autoImportedGlobals).length === 0) {
      console.warn(
        'ESLint: No globals found in .eslintrc-auto-import.json. Ensure pnpm dev has run and the file is not empty.'
      )
    }
  } else {
    console.warn(
      `ESLint: .eslintrc-auto-import.json not found at: ${autoImportConfigPath}. Run 'pnpm dev' to generate it.`
    )
  }
} catch (error) {
  console.error('ESLint: Error loading .eslintrc-auto-import.json:', error)
}

export default tseslint.config(
  { ignores: ['**/node_modules', '**/dist', '**/out'] },
  tseslint.configs.recommended,
  eslintPluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        extraFileExtensions: ['.vue'],
        parser: tseslint.parser
      }
      // 我们也可以尝试把 globals 加在这里，如果只想针对 Vue 文件
      // globals: {
      //   ...globals.browser,
      //   ...globals.es2021,
      //   ...autoImportedGlobals
      // }
    }
  },
  {
    // 这是你已有的特定规则配置
    files: ['**/*.{ts,mts,tsx,vue}'], // 这个 files 模式包含了 .vue 和 .ts
    // 将 globals 合并到这个配置块的 languageOptions 中
    languageOptions: {
      // <--- 新增/修改 languageOptions
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...autoImportedGlobals
      }
    },
    rules: {
      // 你原有的 rules 保持不变
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts'
          }
        }
      ]
    }
  },
  eslintConfigPrettier
)
