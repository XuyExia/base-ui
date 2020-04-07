<template>

    <!-- 菜单组件 -->
  <el-scrollbar class="SideBar-scrollbar" >
    <el-menu
      default-active="1"
      background-color="#2e2e2e"
      class="el-menu-vertical-left"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#4091df"
      text-color="white"
      unique-opened="true"
      :collapse="isCollapse"
    >
      <!-- 子菜单：用户管理 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="11" >用户管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
        <el-menu-item index="12" >密码重置</el-menu-item>
      </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="12" >密码重置</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="12" >密码重置</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="12" >密码重置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 子菜单：商品管理 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="21">商品分类</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="22">商品管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 子菜单：订单管理 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="31">订单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 子菜单：会员管理 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="41">会员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false


      };
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
  .list-itema {
    list-style-type: none;
  }

</style>
