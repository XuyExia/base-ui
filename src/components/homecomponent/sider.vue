<template>

    <!-- 菜单组件 -->
  <el-scrollbar class="SideBar-scrollbar" >
    <el-menu
      :default-active="$route.path"
      default-active="1"
      background-color="#2e2e2e"
      active-text-color="#4091df"
      text-color="white"
      :unique-opened="true"
      router
    >
  <template>

</template>
      <!-- 子菜单：用户管理 -->
      <el-submenu v-for="(item,index) in menuList" :key="index" :index='item.id'>
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group >
          <el-menu-item v-for="child in item.children" :key="child.id" :index='child.index'>{{child.childtitle}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        menuList:[
          {
            id:'1',
            title: '导航1',
            icon:'el-icon-location',
            children:[
              {
                index:'/page1',
                childtitle:'导航1page1'
              },
              {
                index:'/page2',
                childtitle:'导航1page2'
              },
            ]
          },
          {
            id:'2',
            title: '导航2',
            icon:'el-icon-location',
            children:[
              {
                index:'/page3',
                childtitle:'导航2page3'
              },
              {
                index:'/page4',
                childtitle:'导航2page4'
              },
            ]
          }
        ]

      };
    },
    mounted(){

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  };
</script>

<style scoped>
  .SideBar-scrollbar{
    height: 100%;
  }
  .SideBar-scrollbar .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .el-scrollbar__thumb{
    background-color: #3a8ee6;
  }

</style>
