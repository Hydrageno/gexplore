<template>
    <div class="imgArea preImgArea">  
        <user-guide>&nbsp;&nbsp;<img src="../../assets/picture.svg" height="17">input_image&nbsp;</user-guide>
        <el-upload class="imgUploader" drag action="https://jsonplaceholder.typicode.com/posts">
            <div class="descriptionArea">
                <i class="el-icon-upload"></i>
                <div class="descriptionTextArea">
                    "Click to Upload"
                        - - or - -
                    "Drop Image Here"
                </div>
            </div>
        </el-upload>     
    </div>
</template>

<script>
import UserGuide from './UserGuide.vue';
export default{
    name: 'PreImg',
    components: {
        UserGuide
    }
}
</script>

<style lang="less">
@import "../../assets/ContainerStyle.less";
.preImgArea{ 
    //position: relative;
    .imgUploader{
        height: 100%;  // succeed parent's height
        width: 100%;  // succeed parent's width
        .el-upload, 
        .el-upload-dragger{
            height: 100%;
            width: 100%;
            color: rgb(107,116,156);
            border-style: none;
        }
        .el-upload:hover, 
        .el-upload-dragger:hover{
            color: black;
        }
        .descriptionArea{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .descriptionTextArea{
                text-align: center;
            }
        }   
    }
}
</style>