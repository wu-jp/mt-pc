<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from "./topBar.vue";
import searchBar from "./searchBar.vue";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    topBar,
    searchBar
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
