<template>
    <el-container class="h-screen">
      <el-aside :width="sidebarWidth" class="transition-all duration-300">
        <Sidebar />
      </el-aside>
  
      <el-container>
        <el-header height="auto">
          <TopNav />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import Sidebar from '@/components/UserSidebar.vue'
  import TopNav from '@/components/TopNav.vue'

  
  const store = useStore()
  const sidebarWidth = computed(() => 
    store.state.sidebarCollapsed ? '64px' : '200px'
  )
  </script>