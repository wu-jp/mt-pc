<template>
  <el-container class="layout-default">
    <!-- 主页面头部 -->
    <el-header height>
      <my-header />
    </el-header>
    <!-- 主页面内容 -->
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- 主页面底部 -->
    <el-footer height>
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
import myHeader from '@/components/header/index.vue';
import myFooter from '@/components/footer/index.vue'

export default {
  name: "default",
  components: {
    myHeader,
    myFooter
  }
};
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>