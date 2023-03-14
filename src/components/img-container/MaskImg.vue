<template>
    <div class="imgArea maskImgArea">
        <user-guide>
            &nbsp;&nbsp;
            <img src="../../assets/mask.svg" height="17">
            mask_image&nbsp;
        </user-guide>
    </div>
</template>

<script>
import UserGuide from './UserGuide.vue';
export default{
    name: 'MaskImg',
    components: {
        UserGuide
    },
}
</script>

<style lang="less">
@import "../../assets/ContainerStyle.less";
user-guide{
    overflow: hidden;
}
</style>