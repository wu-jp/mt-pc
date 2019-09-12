<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
        {{name}}
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
        <h1 class="select-title">{{name}}</h1>
        <span v-for="(item, index) in list" :key="index">{{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["name", "list"],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
</style>
