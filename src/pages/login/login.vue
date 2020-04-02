<template>
    <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2"
                 status-icon
                 ref="ruleForm2"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="ruleForm2.username"
                          autocomplete="off"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm2.password"
                          autocomplete="off"
                          placeholder="密码"
                ></el-input>
            </el-form-item>
            <el-checkbox
                    v-model="checked"
                    class="rememberme"
            >记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      logining: false,
      ruleForm2: {
        username: 'xuyifan',
        password: '111111'
      },
      rules2: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: false
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleSubmit (event) {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          console.log(valid)
          this.logining = true
          let usernames = this.$api.login.loginByUsername(this.ruleForm2)
          console.log(usernames)
          if (usernames.code==this.ProjectParam.SUCCESS_CODE) {
            this.logining = false
            sessionStorage.setItem('user', usernames.data.id)
            this.$router.push({path: '/'})
          } else {
            this.logining = false
            this.$alert('用户名和密码错误', '警告', {
              confirmButtonText: 'ok'
            })
          }
        } else {
          this.$alert('用户名和密码没有填写', '警告', {
            confirmButtonText: 'ok'
          })
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
    .title{
        text-align: center;
    }
    .login-container {
        width: 100%;
        height: 100%;
    }
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .rememberme {
        margin: 0px 0px 15px;
        text-align: center;
    }
</style>
