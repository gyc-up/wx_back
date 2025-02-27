<template>
    <div class="top-nav-container">
        
      <!-- 左侧导航控制区 -->
      <div class="nav-left">
        <el-button
          class="collapse-btn"
          text
          @click="toggleCollapse"
        >
          <el-icon :size="20">
            <component :is="isCollapsed ? Expand : Fold" />
          </el-icon>
        </el-button>
        <span class="system-title">后台管理系统</span>
      </div>

      <!-- 右侧用户信息区 -->
      <div class="nav-right">
        <el-dropdown trigger="click" placement="bottom-end">
          <div class="user-profile">
            <!-- 头像部分 -->
            <div class="avatar-wrapper">
              <el-avatar
                :size="36"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              />
            </div>
            
            <!-- 文字信息 -->
            <div class="user-info">
              <span class="user-name">管理员</span>
              <span class="user-role">超级管理员</span>
            </div>
            
            <!-- 下拉图标 -->
            <el-icon class="dropdown-icon">
              <arrow-down />
            </el-icon>
          </div>
  
          <!-- 下拉菜单 -->
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon><user /></el-icon>个人中心
              </el-dropdown-item>
              <el-dropdown-item divided @click="handleLogout">
                <el-icon><switch-button /></el-icon>退出登录
              </el-dropdown-item>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    Fold,
    Expand,
    ArrowDown,
    User,
    SwitchButton
  } from '@element-plus/icons-vue'








  

  const handleLogout = () => {
    // 退出登录逻辑
    console.log('执行退出操作')
  }
  </script>
  
  <style lang="scss" scoped>
  .top-nav-container {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    background: #ffffff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    border-bottom: 1px solid #e8e8e8;
  
    .nav-left {
      display: flex;
      align-items: center;
      gap: 16px;
  
      .collapse-btn {
        padding: 8px;
        transition: all 0.3s;
  
        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
  
      .system-title {
        font-size: 18px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
      }
    }
  
    .nav-right {
      .user-profile {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s;
  
        &:hover {
          background: rgba(0, 0, 0, 0.025);
  
          .dropdown-icon {
            transform: translateY(1px);
          }
        }
  
        .avatar-wrapper {
          margin-right: 12px;
          flex-shrink: 0;
  
          :deep(.el-avatar) {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #f0f0f0;
          }
        }
  
        .user-info {
          display: flex;
          flex-direction: column;
          line-height: 1.4;
  
          .user-name {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.85);
          }
  
          .user-role {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.45);
          }
        }
  
        .dropdown-icon {
          margin-left: 8px;
          color: rgba(0, 0, 0, 0.45);
          transition: transform 0.3s;
        }
      }
    }
  }
  
  // 移动端适配
  @media (max-width: 768px) {
    .top-nav-container {
      padding: 0 12px;
  
      .system-title {
        display: none;
      }
  
      .user-info {
        display: none !important;
      }
  
      .dropdown-icon {
        display: none;
      }
    }
  }
  </style>