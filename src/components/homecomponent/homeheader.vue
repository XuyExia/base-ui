<template>
  <el-row class="headerrow">
    <el-col :span="4">
      <el-image style="width: 9em; height: 3em;padding-top: 0.3em" src="/static/longtenglogo.png"></el-image>
    </el-col>
    <el-col :span="17">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>


    </el-col>
    <el-col :span="3">
      <template>

        <div class="navOperater">
          <el-dropdown>
           <span class="el-dropdown-link">
             {{userInfo.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
           </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="navOperater">
          <img
            class="userImg"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></img>
        </div>
      </template>
    </el-col>
  </el-row>


</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        userInfo:{
          id:"",
          userName:"",
          loginName:"",
          imgUrl:""
        }
      };
    },
    created() {
      this.$api.userInfo.getCurrentUser().then(res =>{
            console.log(res);
           if (res.code==3000){
             this.$router.push({path: '/login'})
           }
        this.userInfo.id=res.data.id;
        this.userInfo.userName=res.data.userName;
        this.userInfo.loginName=res.data.loginName;
        this.userInfo.imgUrl=res.data.imgUrl;
      })
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .headerrow {
    background-color: white;
  }

  .userImg {
    margin-top: 7.5px;
    height: 45px;
    width: 45px;
    border-radius: 45px;
  }

  .navOperater {
    width: 80px;
    height: 60px;
    float: right;
    line-height: 60px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

