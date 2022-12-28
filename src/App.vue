<template>
  <!-- 0.v-bind -->
  <div class="page">
    <div class="bg-video">
      <video src="https://s3plus.meituan.net/zhaopin-official-website-prod/video/campusTV/zippedHomeVideo.mp4" autoplay
        loop></video>
    </div>
    <div class="container">
      <div class="desc"></div>
      <div class="login">
        <div class="login-wrapper">
          <el-form :model="form" label-width="80px">
            <el-form-item label="用户名：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="form.passwd" show-password></el-input>
            </el-form-item>
          </el-form>
          <div class="operator">
            <el-button size="small" @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 预定义属性
  name: 'App',
  // 组件当中所有的响应式数据
  data: function () {
    return {
      form: {
        name: '',
        passwd: ''
      },
    }
  },
  // 方法
  methods: {
    createHelloMsg() {
      console.log(this.info)
    },
    checkParams() {
      return this.form.name && this.form.passwd;
    },
    login() {
      // 参数校验
      if (!this.checkParams()) {
        this.$notify({
          title: '错误',
          message: '登录参数不完整',
          type: 'error'
        });
      } else {
        // TODO: 网络请求
        // const res = axios.get('url');
        this.$notify({
          title: '成功',
          message: `登录成功, 用户名：${this.form.name}；密码：${this.form.passwd}`,
          type: 'success'
        });
      }
    },
  },
  // 生命周期函数之一
  mounted() {
    // 当 当前组件 被挂载时，触发执行，只执行一次
    setTimeout(() => {
      this.isShow = false,
        this.isHighLight = true
    }, 3000)
  },
}
</script>


<style lang="scss">
/**
使用了scoped关键字，当前样式只应用于此组件以及子组件，不会影响父组件
*/
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
}
.operator {
  display: flex;
  justify-content: center;
}
.desc {
  width: 60%;
}
.login {
  padding-top: 150px;
  .login-wrapper {
    background-color: #fff;
    width: 300px;
    padding: 40px;
    border-radius: 10px;
  }
}
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  video {
    width: 100%;
  }
}
</style>