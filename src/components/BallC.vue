<template>
    <div> <ball-c1 :val="val" @val="send" :way="way"></ball-c1>
    </div>
</template>
<script>
import BallC1 from './BallC1.vue'
export default {
    name: 'BallC',
    components: {
        BallC1,
    },
    props: ['ball', 'val', 'way'],
    mounted() {
        this.ball.name = 'hello'
        console.log(this.ball)
        // 起点
        // this.$emit('play-ball', this.ball + 1)
    },
    methods: {
        send(val) {
            console.log('c组件触发了')
            this.$emit('val', val)
        }
    }
}
</script>