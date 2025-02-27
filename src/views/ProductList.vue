<template>
    <div>
      <el-card>
        <template #header>
          <div class="flex justify-between items-center">
            <span>用户列表</span>
            <el-button type="primary" @click="handleAdd">新增用户</el-button>
          </div>
        </template>
  
        <el-table :data="tableData" stripe>
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="email" label="邮箱" />
          <el-table-column prop="role" label="角色" />
          <el-table-column label="操作" width="180">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
  
        <el-pagination
          class="mt-4"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          layout="total, prev, pager, next"
        />
      </el-card>
  
      <!-- 新增/编辑对话框 -->
      <el-dialog v-model="dialogVisible" :title="dialogTitle">
        <el-form :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="form.role">
              <el-option label="管理员" value="admin" />
              <el-option label="普通用户" value="user" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">确认</el-button>
        </template>
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const tableData = ref([
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: 'admin' },
    { id: 2, name: '李四', email: 'lisi@example.com', role: 'user' }
  ])
  
  const currentPage = ref(1)
  const pageSize = 10
  const total = ref(100)
  const dialogVisible = ref(false)
  const dialogTitle = ref('新增用户')
  const form = ref({})
  
  const handleAdd = () => {
    dialogTitle.value = '新增用户'
    form.value = {}
    dialogVisible.value = true
  }
  
  const handleEdit = (row) => {
    dialogTitle.value = '编辑用户'
    form.value = { ...row }
    dialogVisible.value = true
  }
  
  const submitForm = () => {
    // 提交表单逻辑
    dialogVisible.value = false
  }
  </script>