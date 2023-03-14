<template>
    <div class="imgArea resultImgArea">
        <user-guide>
            &nbsp;
            <img src="../../assets/download.svg" height="17">
            result_image&nbsp;
        </user-guide>
    </div>
</template>

<script>
import UserGuide from './UserGuide.vue';
export default{
    name: 'ResultImg',
    components: {
        UserGuide
    },
}
</script>

<style lang="less">
@import "../../assets/ContainerStyle.less";
</style>