<!-- layout.vue -->
<template>
  <div id="homepage" style="width: 100%; height: 100%" >
    <el-container >
      <el-header class="homeheader">
         <Header/>
      </el-header>
      <el-container  class="tl_aside_main_footer">
        <el-aside class="tlaside" style="width: 16.6em" width="initial">
          <Sider/>
        </el-aside>
        <el-container >

          <el-main class="elmain" >
            <transition name="main"  mode="out-in">
              <router-view></router-view>
            </transition>
          </el-main>
          <el-footer class="headerFooter" style="height: 2em">
            皖 入网 k343242224242454444444444444444444444444444
          </el-footer>

        </el-container>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  // 导入组件
  import Sider from "@/pages/homecomponent/sider.vue";
  import Header from "@/pages/homecomponent/homeheader.vue";
  export default {
    name: "home",
    components: {
      Sider,
      Header
    },
    data() {
      return {
        url: "@/assets/blogo.png",
        fits: ["fill", "contain", "cover", "none", "scale-down"]
      };
    }
  };
</script>
<style>
  /*
    找到html标签、body标签，和挂载的标签
    都给他们统一设置样式
  */
  html,body,#app,.el-container,.elmain{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
.tl_aside_main_footer{

}


  .elmain{
    background-color: #e0e0e0;
    display: block;


  }
  .tlaside {
    height:100%;
    background-color:#2e2e2e;

  }
  .headerrow {
    height: 60px;

  }


  .homeheader {
    padding: 0 20px;
    text-align: left;
    background-color: white;
    border: 1px solid #eee;
  }

  .logout {
    text-align: right;
  }

  .navOperater {
    width: 80px;
    height: 60px;
    float: right;
    line-height: 50px;
  }
 .headerFooter{
   background-color: #2e2e2e;
   color: white;
   bottom:0;width:100%;
   bottom:0
 }
  .el-main {
    background-color: #e9eef3;
    text-align: center;
  }
</style>
