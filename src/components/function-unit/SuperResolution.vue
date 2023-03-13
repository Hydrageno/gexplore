<template>
    <div class="superResolutionWorkingArea">
        <pre-img class="preImgSRArea"></pre-img>
        <div class="interval"></div>
        <div class="resultImgSRArea">
            <result-img></result-img>
        </div>
        <div class="paintImgSRArea">
            <paint-img></paint-img>
        </div>
        <div class="interval"></div>
        <div class="maskImgSRArea">
            <mask-img></mask-img>
        </div> 
        <div class="imgExapleContainerSRArea">
            <img-exaple-container></img-exaple-container>
        </div>    
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
    height: 1000px;  // limit height 
    width: 100%;  // succeed width from parent element
    @imgAreaWidth: 49%;  // each img area width 
    @imgAreaHeight: 37%;  // each img area height 
    @imgCrossIntervalHeight: 1%;  // each interval under img area
    .preImgSRArea, .resultImgSRArea, .paintImgSRArea, .maskImgSRArea{
        width: @imgAreaWidth;
        height: @imgAreaHeight;
        background-color: green;
        margin-bottom: @imgCrossIntervalHeight;
    }
    .interval{
        width: 100% - @imgAreaWidth * 2;
        height: @imgAreaHeight;
    }
    .imgExapleContainerSRArea{
        width: 100%;
        height: 100% - @imgAreaHeight * 2 - @imgCrossIntervalHeight * 3;
        background-color: red;
        color: black;
        img-exaple-container{  // set style of img exaple list
            width: 100%;
            height: 100%;
        }
    }
}
</style>