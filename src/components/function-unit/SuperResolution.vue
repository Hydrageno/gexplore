<template>
    <div class="superResolutionArea">
        <div class="PRPair">
            <pre-img class="preImgSRArea"></pre-img>
            <div class="rowInterval"></div>
            <result-img class="resultImgSRArea"></result-img>
        </div>
        <div class="columnInterval">
            <div class="preImgDescriptionText">① click to upload  or drop image</div>
            <div class="resultImgDescriptionText">
                ④ click
                <el-button size="mini" @click="resultGenerator()">INPAINT</el-button>
                to inpaint,
                <el-button size="mini" @click="downloadResult()">DOWNLOAD</el-button>
                 to download </div>
        </div>
        <div class="PMPair">
            <paint-img class="paintImgSRArea" v-bind:eraseMode="eraseModeChecked" v-bind:lineWidth="customlineWidth"></paint-img>
            <div class="rowInterval"></div>
            <mask-img class="maskImgSRArea"></mask-img>
        </div>
        <div class="columnInterval">
            <div class="paintImgDescriptionText">
                ② custom thickness by 
                <!--custom handwriting line width
                    pass this value to custom line width.
                -->
                <input class="lineWidthArea" v-model.number="customlineWidth" style="border: none; border-bottom: 1px solid black; width: 22px; text-align: right;">
                ,check 
                <!--draw mode key value: 
                    eraseMode
                    pass this value to select draw or erase function.
                -->
                <el-checkbox  v-model="eraseModeChecked" @change="activateErase()">ERASE</el-checkbox>
                to erase
            </div>
            <div class="resultImgDescriptionText">
                ③ click the 
                <el-button size="mini" @click="maskGenerator()">MASK</el-button>
                to mask image 
            </div>
        </div>
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
            eraseModeChecked: false, // pass the value to <paint-img> to activate erase mode or deactivate.
            customlineWidth: 1, // pass the value to <paint-img> to custom line width.
      }
    },
    methods: {
        resultGenerator: function(){ 
            console.log("result")
        },
        downloadResult: function(){
            console.log("download")
        },
        activateErase(){
            //test function
            //simply examine the ${eraseModeChecked} value
            console.log(this.eraseModeChecked);
        },
        maskGenerator:function(){
            console.log("mask")
        }
    }
}
</script>

<style lang="less">
.superResolutionArea{
    display: flex;  //using flex layout
    flex-direction: column;
    height: 900px;  // limit height 
    width: 100%;  // succeed width from parent element 'border-card'
    @imgAreaWidth: 49.5;  // each img area width 
    @imgAreaHeight: 37;  // each img area height 
    //formula:
    /**formula:
    * PRPair_Height + PMPair_Height + 2 * columnInterval + imgExapleContainerSRArea_Height = superResolutionArea_Height
    * preImgSRArea_Width + rowInterval + resultImgSRArea_Width = PRPair_Width
    * paintImgSRArea_Width + rowInterval + maskImgSRArea_Width = PMPair_Width
    */
    .PRPair{
        flex: @imgAreaHeight;
        display: flex;
        flex-direction: row;
        .preImgSRArea, .resultImgSRArea{
            flex: @imgAreaWidth;
        }
        .rowInterval{
            flex: 100 - 2 * @imgAreaWidth;
        }
    }
    .PMPair{
        flex: @imgAreaHeight;
        display: flex;
        flex-direction: row;
        .paintImgSRArea, .maskImgSRArea{
            flex: @imgAreaWidth;
        }
        .rowInterval{
            flex: 100 - 2 * @imgAreaWidth;
        }
        
    }
    .columnInterval{
        color: rgb(107,116,156);
        flex: 5;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        .preImgDescriptionText, .resultImgDescriptionText, .paintImgDescriptionText, .maskImgDescriptionText{
            flex: 1;
        }
    }
    .imgExapleContainerSRArea{
        flex:  100 - 2 * @imgAreaHeight - 2 * 5;
        width: 100%;
    }
}
</style>