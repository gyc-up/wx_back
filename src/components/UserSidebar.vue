<template>
    <el-menu
      router
      default-active="/mainDashboard"
      class="h-full"
    >
      <el-menu-item index="/mainDashboard">
        <el-icon><icon-menu /></el-icon>
        <span>Dashboard</span>
      </el-menu-item>
      
      <el-sub-menu index="1">
        <template #title>
          <el-icon><user /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/users">用户列表</el-menu-item>
      </el-sub-menu>
      
      <el-menu-item index="/products">
        <el-icon><goods /></el-icon>
        <span>商品管理</span>
      </el-menu-item>
      
      <el-menu-item index="/settings">
        <el-icon><setting /></el-icon>
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
  import {
    Menu as IconMenu,
    User,
    Goods,
    Setting
  } from '@element-plus/icons-vue'
  </script>