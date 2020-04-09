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
            <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
              <el-tab-pane
                v-for="(item, index) in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
              >
                {{item.content}}
              </el-tab-pane>
            </el-tabs>
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
        clientHeight: "",
        url: "@/assets/blogo.png",
        fits: ["fill", "contain", "cover", "none", "scale-down"],
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      };
    },
    methods: {
      /*添加标签页*/
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      /*删除标签页*/
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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
</style>
