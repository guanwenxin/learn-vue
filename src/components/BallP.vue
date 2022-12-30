<template>
    <div>
        <!-- <ball-c :ball="inner" @play-ball="getChild"></ball-c> -->
        <ball-c :ball="referenceData" :val="val" @val="getFromGrandson" :way="getFromGrandson"></ball-c>
        <ball-t :data-object="dataObj" :data-method="addPdataArr" @data="updateData"></ball-t>
        {{ dataObj.array }}
    </div>
</template>
<script>
import BallC from './BallC.vue'
import BallT from './BallT.vue'
export default {
    name: 'BallP',
    components: {
        BallC,
        BallT,
    },
    data: function () {
        return {
            inner: 0,
            referenceData: {
                name: 'pjw',
                age: 23
            },
            dataObj: {
                name: 'test',
                array: ['1']
            },
            val: 10000
        }
    },
    methods: {
        getChild(ball) {
            console.log('子级提给我的是', ball)
            this.inner = ball + 1;
        },
        // 方法一
        addPdataArr(param) {
            // 添加数据
            this.dataObj.array.push(param)
        },
        // 方法二
        updateData(param) {
            // vue官方的父子间通信方式
            // console.log(param)
            // this.dataObj.array.push(param)
        },
        getFromGrandson(val) {
            console.log('此数据来自于c1组件', val)
        }
    },
    mounted() {
    }
}
</script>