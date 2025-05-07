<template>
  <div class="home-page-container">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <h1>欢迎使用！</h1>
        </div>
      </template>
      <div class="card-content">
        <p>这是一个基于 Electron-Vite-Vue3-ElementPlus 模板创建的应用。</p>
        <p>你可以开始编辑 <code>src/renderer/src/views/HomePage.vue</code> 来构建你的主页内容。</p>
        <el-divider />
        <p>主要技术栈包括：</p>
        <ul>
          <li>Electron</li>
          <li>Vite</li>
          <li>Vue 3</li>
          <li>Vue Router</li>
          <li>Element Plus (按需导入)</li>
          <li>TypeScript (如果你的项目使用)</li>
          <li>ESLint + Prettier (已配置)</li>
        </ul>
        <el-alert
          title="开始你的项目"
          type="success"
          description="修改此页面，并根据你的需求添加新的路由和组件吧！"
          show-icon
          style="margin-top: 20px"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
// 你可以在这里保留或添加一些通用的脚本逻辑，或者保持为空
// 例如，可以保留 Element Plus 的 ElMessage 示例，但对于模板，保持简洁可能更好
// import { ElMessage } from 'element-plus'; // 如果需要，确保自动导入或手动导入

// const showWelcomeMessage = () => {
//   ElMessage.success('模板加载成功！');
// };

// onMounted(() => {
//   showWelcomeMessage();
// });
</script>

<style scoped>
.home-page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 改为 flex-start 让卡片从顶部开始 */
  padding: 40px;
  min-height: calc(100vh - 100px); /* 假设你有大约100px的头部或导航栏空间 */
  box-sizing: border-box;
}

.box-card {
  width: 100%;
  max-width: 800px;
}

.card-header h1 {
  margin: 0;
  font-size: 24px;
  color: #303133;
}

.card-content p {
  line-height: 1.8;
  color: #606266;
  margin-bottom: 10px;
}

.card-content ul {
  list-style-type: disc;
  padding-left: 20px;
  color: #606266;
}

.card-content li {
  margin-bottom: 8px;
}
</style>
