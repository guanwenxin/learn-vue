import Vue from 'vue'
import App from './App.vue'
import BallP from './components/BallP.vue'
import MainComp from './components/MainComp.vue'

// 引入elementui
import ElementUI from 'element-ui';
// 引入elementui css
import 'element-ui/lib/theme-chalk/index.css';
// 安装至vue应用中
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(BallP),
}).$mount('#ball')

new Vue({
  render: h => h(MainComp),
}).$mount('#main')




{/* <div :id="idName">
<!-- 1.v-html -->
<span v-html="message"></span>
<!-- <span>{{ msg }}</span> -->
<el-button :disabled="false" v-on:click="createHelloMsg">确定</el-button>
<!-- 4.v-on -->
<el-button @click="createHelloMsg">确定（简写）</el-button>
<!-- 2.v-if/v-show -->
<div v-if="isShow">😄</div>
<div v-else>😂</div>
<!-- 2.v-if/v-show -->
<div v-show="isShow">😄</div>
<!-- 3.v-for -->
<div :class="{ 'high-light': isHighLight }" :style="{ 'font-size': '28px'}" v-for="(names, index) in nameArr" :key="index">
  {{ index + 1 }} . {{ names }}
</div>
<!-- 5.v-model 创建双向绑定-->
<el-input v-model="info"></el-input>
<!-- 页面 -->
</div> */}