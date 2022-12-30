<template>
    <div ref="nb">受控数字：{{ number }},子组件绑定注入的字符串{{ injectVal.msg }}</div>
</template>
<script>
import { EventBus, EventType } from './EventBus'
import { MittBus, MittType } from './MittEvent'
export default {
    name: "ParentControl",
    props: ['refresh'],
    inject:['injectVal'],
    data: function () {
        return {
            number: 0
        }
    },
    watch: {
        refresh: function () {
            this.addOne()
        }
    },
    methods: {
        addOne() {
            this.number = this.number + 1;
        }
    },
    mounted() {
        console.log(this.$refs.nb)
        // EventBus.$on(EventType.DATA_TYPE, (msg) => {
        //     console.log(msg)
        //     this.addOne()
        // })
        MittBus.on(MittType.DATA_TYPE, (msg) => {
            console.log(msg)
            this.addOne()
        })
        console.log('this.injectVal',this.injectVal)
    }
}
</script>