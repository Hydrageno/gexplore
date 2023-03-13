<template>
    <div id="superResolutionWorkingArea">
        <div id="preImgSRArea">
            <pre-img></pre-img>
        </div>
        <div id="interval"></div>
        <div id="resultImgSRArea">
            <result-img></result-img>
        </div>
        <div id="paintImgSRArea">
            <paint-img></paint-img>
        </div>
        <div id="interval"></div>
        <div id="maskImgSRArea">
            <mask-img></mask-img>
        </div> 
        <div id="imgExapleContainerSRArea">
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
#superResolutionWorkingArea{
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    height: 1000px;
    width: 100%;
    @imgAreaWidth: 49%;
    @imgAreaHeight: 37%;
    @crossIntervalHeight: 1%;
    #preImgSRArea, #resultImgSRArea, #paintImgSRArea, #maskImgSRArea{
        width: @imgAreaWidth;
        height: @imgAreaHeight;
        background-color: green;
        margin-bottom: @crossIntervalHeight;
    }
    #interval{
        width: 100% - @imgAreaWidth * 2;
        height: @imgAreaHeight;
    }
    #imgExapleContainerSRArea{
        width: 100%;
        height: 100% - @imgAreaHeight * 2 - @crossIntervalHeight * 3;
        background-color: red;
        color: black;
        img-exaple-container{
            width: 100%;
            height: 100%;
        }
    }
}
</style>