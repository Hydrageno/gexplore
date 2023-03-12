<template>
  <div id="app">
    <el-button type="success">Success Button</el-button>
    <el-row :gutter="20">
      <div class="box"></div>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="less">
@width: 100px;
@height: 100px;
.box{
  width: @width;
  height: @height;
  background-color: purple;
}
</style>
