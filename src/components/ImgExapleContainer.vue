<template>
    <div id="imgExapleContainerArea" :data="imgExample">
        <el-table :data="tableData" stripe>
            <el-table-column prop="date" label="date" width="180"></el-table-column>
            <el-table-column prop="name" label="name" width="180"></el-table-column>
            <el-table-column prop="address" label="address"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default{
    name: 'ImgExapleContainer',
    components:{
    },
    data(){
        return {
        tableData: [{
            date: '2016-05-02',
            name: 'sev',
            address: 'German'
        },{
            date: '2017-05-08',
            name: 'well',
            address: 'China'
        },{
            date: '2017-05-08',
            name: 'well',
            address: 'China'
        },{
            date: '2017-05-08',
            name: 'well',
            address: 'China'
        }]
      }
    }
}
</script>

<style lang="less">
</style>
