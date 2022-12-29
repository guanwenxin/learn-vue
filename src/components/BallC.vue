<template>
    <div></div>
</template>
<script>
export default {
    name: 'BallC',
    props: ['ball'],
    mounted() {
        // 起点
        this.$emit('play-ball', this.ball + 1)
    },
    watch: {
        ball: function(newVale) {
            // 减速
            console.log('BallC减速一下，三秒后再次踢球')
            console.log('父级提给我的是', newVale)
            setTimeout(() => {
                this.$emit('play-ball', newVale + 1)
            }, 3000)
        }
    }
}
</script>