<template>
  <div id="app">
    <keep-alive>
      <component :is="currentFunction">

      </component>
    </keep-alive>
  </div>
</template>

<script>
import SuperResolution from './components/SuperResolution.vue';
import InpaitingUnit from './components/InpaitingUnit.vue';

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
    InpaitingUnit
  },
  computed:{
    currentFunction: function(){
      return this.attrs[this.index]
    }
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
