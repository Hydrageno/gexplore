<template>
  <div id="app">
    <div id="navigator"></div>
    <div id="body">
      <div id="leftBorder"></div>
      <div id="mainContainer">
        <el-tabs type="border-card">
          <el-tab-pane label="SuperResolution">
            <super-resolution></super-resolution>
          </el-tab-pane>
          <el-tab-pane label="Inpaiting">
            <inpaiting-unit></inpaiting-unit>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div id="rightBorder"></div>
    </div>
  </div>
</template>

<script>
import SuperResolution from './components/function-unit/SuperResolution.vue';
import InpaitingUnit from './components/function-unit/InpaitingUnit.vue';

export default {
  name: 'App',
  data(){
    return {
      index: 0,
      attrs:["SuperResolution", "InpaitingUnit"]
    }
  },
  components: {
    SuperResolution,
    InpaitingUnit,
  },
  computed:{
    currentFunction: function(){
      return this.attrs[this.index]
    }
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
#app{
  #navigator{
    height: 70px;
    width: 100%;
    background-color: black;
  }
  #body{
    display: flex;
    #leftBorder, #rightBorder{
      flex: 1;
    }
    #mainContainer{
      flex: 8;
    }
  }
}
</style>
