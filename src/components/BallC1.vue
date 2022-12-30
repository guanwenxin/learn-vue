<template>
    <div>这是我们的c1组件{{ val }}<el-button @click="send">发送数据给爷爷组件</el-button></div>
</template>
<script>
export default {
    name: 'BallC1',
    props: ['val', 'way'],
    methods: {
        send() {
            // 方法1：
            // console.log('c1组件触发了')
            // this.$emit('val', this.val - 1)

            // 方法2：
            this.way(this.val - 1)
        }
    }
}
</script>