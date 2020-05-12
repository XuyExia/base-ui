<!-- layout.vue -->
<template>
  <div id="homepage" style="width: 100%; height:100%">
    <el-container>
      <el-header class="homeheader">
        <Header/>
      </el-header>
      <el-container class="tl_aside_main_footer">
        <el-aside class="tlaside" style="width: 16.666%;" width="initial" mode="vertical">
          <Sider/>
        </el-aside>
        <el-container>

          <el-main class="elmain">
            <div class="app-wrap">
              <!-- 此处放置el-tabs代码 -->
              <div>
                <el-tabs
                  v-model="activeIndex"
                  type="border-card"
                  closable
                  v-if="options.length"
                  @tab-click='tabClick'
                  @tab-remove='tabRemove'
                >
                  <el-tab-pane
                    :key="item.name"
                    v-for="(item, index) in options"
                    :label="item.name"
                    :name="item.route"
                  >
                    <div class="content-wrap">
                      <router-view/>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>

            </div>
          </el-main>
          <el-footer class="headerFooter" style="height: 2em;text-align: center;">
            皖ICP备05001417号-62 皖公网安备 34019203563116号 中国龙腾集团股份有限公司 版权所有 龙腾服务条款
          </el-footer>

        </el-container>

      </el-container>

    </el-container>
  </div>
</template>

<script>
  // 导入组件
  import Sider from "@/components/homecomponent/sider.vue";
  import Header from "@/components/homecomponent/homeheader.vue";

  export default {
    name: "homepage",
    components: {
      Sider,
      Header
    },
    data() {
      return {};
    },
    computed: {
      options() {
        return this.$store.state.options;
      },
      //检查标签数组里面是否有该值
      activeIndex: {
        get() {
          return this.$store.state.activeIndex;
        },
        set(val) {
          this.$store.commit('set_active_index', val);
        }
      }
    },
    methods: {
      //tab标签点击时如果是当前路由则不做任何处理否则切换相应的路由
      tabClick(tab) {
        if (this.activeIndex != this.$route.path) {
          this.$router.push({path: this.activeIndex});
        }
      },
      //移除tab标签
      tabRemove(targetName) {
        //首页不删
        if (targetName == '/main') {
          return
        }

        //如果删除的路由是当前选择的路由则跳转到前一个路由
        if (this.activeIndex === targetName) {
          let index = 0;
          for (let opt of this.options) {
            if (opt.route === this.activeIndex) {
              break
            }
            index++;
          }
          this.$store.commit('set_active_index', this.options[index - 1].route);
          this.$router.push({path: this.activeIndex});
        }
        //删除数组标签中的路由
        this.$store.commit('delete_tabs', targetName);

      }


    },
    created() {
      // 刷新时以当前路由做为tab加入tabs
      // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
      // 当当前路由是首页时，添加首页到store，并设置激活状态
      let flag = false;
      for (let opt of this.options) {
        if (opt.route === val) {
          flag = true;
          break
        }
      }
      if (this.$route.path !== '/homepage' && this.$route.path !== '/main') {
        if (!flag) {
          this.$store.commit('add_tabs', {route: '/main', name: '首页'});
          this.$store.commit('set_active_index', '/main');
          this.$router.push({path: this.activeIndex});
        }
      } else {
        if (!flag) {
          this.$store.commit('add_tabs', {route: '/main', name: '首页'});
          this.$store.commit('set_active_index', '/main');
          this.$router.push({path: this.activeIndex});
        }
      }

    },
    watch: {
      '$route'(to, from) {
        //判断路由是否已经打开
        //已经打开的 ，将其置为active
        //未打开的，将其放入队列里
        let flag = false;
        for (let item of this.options) {
          if (item.route === to.path) {
            this.$store.commit('set_active_index', to.path)
            flag = true;
            break;
          }
        }
        if (!flag) {
          this.$store.commit('add_tabs', {route: to.path, name: to.name});
          this.$store.commit('set_active_index', to.path);
        }

      }


    }


  };
</script>
<style>
  /*
    找到html标签、body标签，和挂载的标签
    都给他们统一设置样式
  */
  html, body, #app, .el-container, .elmain {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }


  .tl_aside_main_footer {
    height: 43em;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .elmain {
    background-color: white;
    display: block;
  }

  .el-menu {
    border-right-width: 0;
  }

  .tlaside {
    height: 100%;
    background-color: #2e2e2e;
    overflow-x: hidden;
  }


  .homeheader {
    text-align: center;
    background-color: white;
    padding: 0px;
  }


  .headerFooter {
    background-color: #2e2e2e;
    color: white;
    bottom: 0;
    width: 100%;
    bottom: 0
  }

  .el-main {
    background-color: #e9eef3;
    text-align: center;
  }

  .app-wrap {
    height: 100%;
  }

  .el-tabs__content {
    height: 100%;
  }

</style>
