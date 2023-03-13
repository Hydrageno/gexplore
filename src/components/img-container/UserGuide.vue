<template>
    <div class="userGuideArea">
        <slot></slot>
    </div>
</template>

<script>
export default{
    name: 'UserGuide'
}
</script>

<style lang="less">
.userGuideArea{
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    border-style: groove;
    border-color: #E5E7EB;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: rgb(107,116,156);
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
