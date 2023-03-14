<template>
    <div class="superResolutionArea">
        <div class="PRPair">
            <pre-img class="preImgSRArea"></pre-img>
            <div class="rowInterval"></div>
            <result-img class="resultImgSRArea"></result-img>
        </div>
        <div class="columnInterval">
            <div class="preImgDescriptionText">① click to upload - - or - - drop image</div>
            <div class="resultImgDescriptionText">④ select the checkbox to download image</div>
        </div>
        <div class="PMPair">
            <paint-img class="paintImgSRArea"></paint-img>
            <div class="rowInterval"></div>
            <mask-img class="maskImgSRArea"></mask-img>
        </div>
        <div class="columnInterval">
            <div class="paintImgDescriptionText">② custom thickness & select checkbox to erase</div>
            <div class="resultImgDescriptionText">③ click the checkbox to create mask image </div>
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
.superResolutionArea{
    display: flex;  //using flex layout
    flex-direction: column;
    height: 800px;  // limit height 
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
        flex: 3;
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
        flex:  100 - 2 * @imgAreaHeight - 2 * 3;
        width: 100%;
    }
}
</style>