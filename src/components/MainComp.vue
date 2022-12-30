<template>
    <div>
        <el-card class="box-card">
            <div slot="header">
                <el-button @click="fresh">控制子组件</el-button>
            </div>
            <parent-control ref="child" :refresh="refresh"/>
        </el-card>
    </div>
</template>
<script>
import {EventBus, EventType} from './util/EventBus'
import {MittBus, MittType} from './util/MittEvent'
import ParentControl from './util/ParentControl.vue'
export default {
    name: 'MainComp',
    components: {
        ParentControl
    },
    provide:{
        // provide不会转变成响应式，与data不同，只是把对象提供出去
        injectVal:{
            msg:'本消息来自于provide'
        }
    },
    data: function() {
        return {
            refresh: false,
            msg:'本消息来自于provide'
        }
    },
    methods: {
        fresh() {
            // 方法三
            EventBus.$emit(EventType.DATA_TYPE, '童叟无欺')
            MittBus.emit(MittType.DATA_TYPE, 'mitt童叟无欺')
//             // 方法二
            // this.$refs.child.addOne()
            // console.log(this.$refs)
            // console.log(this.$refs.child.addOne())
            // 方法一
            // this.refresh = !this.refresh;
        }
    },

    mounyed(){
        setTimeout(() => {
            this.injectVal.msg = 'hhh ,我变了',
            console.log(this.injectVal)
        },3000)
    }

}
</script>