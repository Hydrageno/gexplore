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
    </div>
</template>

<script>
import PreImg from '../img-container/PreImg.vue'
import ResultImg from '../img-container/ResultImg.vue'
import PaintImg from '../img-container/PaintImg.vue'
import MaskImg from '../img-container/MaskImg.vue'

export default{
    name: 'SuperResolution',
    components: {
        PreImg,
        ResultImg,
        PaintImg,
        MaskImg,
    }
}
</script>

<style lang="less">

#superResolutionWorkingArea{
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    height: 800px;
    width: 100%;
    @imgAreaWidth: 46%;
    @imgAreaHeight: 46%;
    #preImgSRArea{
        width: @imgAreaWidth;
        height: @imgAreaHeight;
        background-color: green;
    }
    #resultImgSRArea{
        width: @imgAreaWidth;
        height: @imgAreaHeight;
        background-color: purple;
    }
    #interval{
        width: 100% - @imgAreaWidth * 2;
        height: @imgAreaHeight;
    }
    #paintImgSRArea{
        width: @imgAreaWidth;
        height: @imgAreaHeight;
        background-color: yellow;
    }
    #maskImgSRArea{
        width: @imgAreaWidth;
        height: @imgAreaHeight;
        background-color: red;
    }
}
</style>