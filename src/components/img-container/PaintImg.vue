<template>
    <div ref="paintImgArea" 
        class="imgWorkingArea paintImgArea">
        <user-guide>&nbsp;&nbsp;
            <img src="../../assets/pen.svg" height="17">
            paint_area&nbsp;
            <input v-model.number="lineWidth"
                style="border: none; border-bottom: 1px solid black; width: 20px; text-align: right;">
            px
        </user-guide>
        <canvas ref="canvas" 
            @mousedown="startDrawing" 
            @mousemove="draw" 
            @mouseup="stopDrawing" 
            class="drawingCanvas"></canvas>
    </div>
</template>

<script>
import UserGuide from './UserGuide.vue';
export default{
    name: 'PaintImg',
    components: {
        UserGuide
    },
    data() {
        return {
            drawing: false,
            context: null,
            lastX: 0,
            lastY: 0,
            hue: 0,
            lineWidth: 3,
            picPath: '../../assets/logo.png',
        }
    },
    mounted() {
        this.context = this.$refs.canvas.getContext('2d');
        this.$refs.canvas.width = "549";
        this.$refs.canvas.height = "294";
        
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
    },
    methods: {
        startDrawing(e) {
            this.$refs.paintImgArea.style.background = `url(${this.picPath})`;
            this.drawing = true;
            [this.lastX, this.lastY] = [e.offsetX, e.offsetY];  // define starting point('sp')
        },
        draw(e) {
            if (!this.drawing) return;
            this.context.strokeStyle = `black`;
            this.context.lineWidth = this.lineWidth;
            this.context.beginPath();
            this.context.moveTo(this.lastX, this.lastY); // move the pen to exact location
            this.context.lineTo(e.offsetX, e.offsetY);  //  define ending point('ep'), and create line which from 'sp' to 'ep'
            this.context.stroke();  // paint the path 
            [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        },
        stopDrawing() {
            this.drawing = false;
        },
    }
}
</script>

<style lang="less">
@import "../../assets/ContainerStyle.less";
.paintImgArea{
    cursor: crosshair;
    // background: url("../../assets/logo.png"); // test mode: test background image style
    background-repeat: no-repeat;  
    background-size: 100% 100%;
    background-attachment: cover;  // self-stretch
    user-guide{
        user-select: none;
    }
}
</style>