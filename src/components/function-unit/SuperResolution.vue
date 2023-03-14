<template>
    <div class="superResolutionWorkingArea">
        <pre-img class="preImgSRArea"></pre-img>
        <div class="interval"></div>
        <result-img class="resultImgSRArea"></result-img>
        <paint-img class="paintImgSRArea"></paint-img>
        <div class="interval"></div>
        <mask-img class="maskImgSRArea"></mask-img>
        <img-exaple-container class="imgExapleContainerSRArea"></img-exaple-container>  
    </div>
</template>

<script>
import PreImg from '../img-container/PreImg.vue'
import ResultImg from '../img-container/ResultImg.vue'
import PaintImg from '../img-container/PaintImg.vue'
import MaskImg from '../img-container/MaskImg.vue'
import ImgExapleContainer from '../ImgExapleContainer.vue'

export default{
    name: 'SuperResolution',
    components: {
        PreImg,
        ResultImg,
        PaintImg,
        MaskImg,
        ImgExapleContainer
    },
    data(){
        return {
        tableData: [{
          date: '2016-05-02',
          name: 'seven',
          address: 'German'
        }]
      }
    }
}
</script>

<style lang="less">
.superResolutionWorkingArea{
    display: flex;  //using flex layout
    flex-direction: row;
    flex-flow: wrap;
    height: 800px;  // limit height 
    width: 100%;  // succeed width from parent element
    @imgAreaWidth: 49%;  // each img area width 
    @imgAreaHeight: 37%;  // each img area height 
    @imgCrossIntervalHeight: 1%;  // each interval under img area
    .preImgSRArea, .resultImgSRArea, .paintImgSRArea, .maskImgSRArea{
        width: @imgAreaWidth - 1%;
        height: @imgAreaHeight;
        background-color: white;
        margin-bottom: @imgCrossIntervalHeight;
        box-sizing: border-box;
    }
    .interval{
        width: 100% - @imgAreaWidth * 2 + 2%;
        height: @imgAreaHeight;
    }
    .imgExapleContainerSRArea{
        width: 100%;
        height: 100% - @imgAreaHeight * 2 - @imgCrossIntervalHeight * 3;
        background-color: red;
        color: black;
    }
}
</style>