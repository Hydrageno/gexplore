<template>
  <div id="app">
    <div id="functionSwitch">
      <switch-button value="Inpaiting"></switch-button>
      <switch-button value="Super-Resolution"></switch-button>
    </div>
    <div id="workingArea">
      <keep-alive>
        <component :is="currentFunction">

        </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SuperResolution from './components/SuperResolution.vue';
import InpaitingUnit from './components/InpaitingUnit.vue';
import SwitchButton from './components/SwitchButton.vue'

export default {
  name: 'App',
  data(){
    return {
      index: 0,
      attrs:["SuperResolution", "InpaitingUnit"]
    }
  },
  components: {
    SwitchButton,
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
@width: 100px;
@height: 100px;
.box{
  width: @width;
  height: @height;
  background-color: purple;
}
</style>
