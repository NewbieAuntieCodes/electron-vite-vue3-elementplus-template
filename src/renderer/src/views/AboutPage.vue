<template>
  <div class="about-page-container">
    <el-card shadow="hover">
      <template #header>
        <h2>关于页面</h2>
      </template>
      <p>这里是关于页面。</p>
      <p>你可以在这里填写关于你的应用程序、版本信息或许可协议等内容。</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
// About 页面通常不需要太多逻辑
</script>

<style scoped>
.about-page-container {
  padding: 40px;
  text-align: center;
}
.el-card {
  max-width: 600px;
  margin: 0 auto;
}
p {
  line-height: 1.8;
  color: #606266;
}
</style>
