<script setup lang="ts">
// 目前不需要特定的脚本逻辑
</script>

<template>
  <div id="app-layout">
    <header class="app-header">
      <nav>
        <router-link to="/">主页</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
    </header>
    <main class="app-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
/* 这些基础样式最好放在全局 CSS 文件中 (如 src/renderer/src/assets/css/main.css)
   并由 main.ts 导入，这里为了演示方便，暂时放在 App.vue */
html,
body,
#app,
#app-layout {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 16px;
  line-height: 1.5;
  background-color: #f8f9fa; /* 全局背景色 */
  color: #212529;
}

#app-layout {
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: #ffffff;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0 20px;
  z-index: 10;
  flex-shrink: 0; /* 防止 header 在内容多时被压缩 */
}

.app-header nav {
  display: flex;
  align-items: center;
  justify-content: center; /* 或 flex-start / flex-end */
  max-width: 1200px;
  margin: 0 auto;
  height: 60px;
}

.app-header nav a {
  padding: 0 15px;
  text-decoration: none;
  color: #515a6e;
  font-weight: 500;
  font-size: 15px;
  line-height: 60px;
  transition: color 0.2s ease-in-out;
}

.app-header nav a:hover {
  color: #409eff;
}

.app-header nav a.router-link-exact-active {
  color: #409eff;
  border-bottom: 2px solid #409eff;
}

.app-content {
  flex-grow: 1;
  overflow-y: auto;
  /* HomePage.vue 等页面可以有自己的 padding */
}
</style>
