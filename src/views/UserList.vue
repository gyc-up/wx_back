<template>
  <div>
    <el-card>



      <el-table :data="UserList" stripe>
        <el-table-column prop="userId" label="userId" />
        <!-- <el-table-column prop="admin" label="admin" /> -->
        <el-table-column prop="userName" label="昵称" />

        <el-table-column prop="likes" label="喜欢" />
        <el-table-column prop="reviews" label="评论" />
        <el-table-column prop="essay" label="文章" />
        <el-table-column prop="status" label="头像">
          <template #default="scope">
            <!-- 如果 userImg 是图片 URL -->

            <img :src="scope.row.userImg" alt="User Image" style="width: 40px; height: 40px; border-radius: 50%" />
          </template>
        </el-table-column>

        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">禁用</el-button>
          </template>
        </el-table-column>


      </el-table>

      <el-pagination class="mt-4" :current-page="currentPage" :page-size="pageSize" :total="total"
        layout="total, prev, pager, next" />
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

import { getUserList } from '@/api'
const currentPage = ref(1)
const pageSize = 10
const total = ref(100)
const dialogVisible = ref(false)
const dialogTitle = ref('新增用户')
const form = ref({})
let UserList = ref([])  // 修改默认值为 []

const pageSearch = async (page) => {
  const response = await getUserList({ page: page, pageSize: 10 });
  UserList.value = response.data.list;
}
pageSearch(1)

const handleEdit = (row) => {
  console.log(row.userId)
}

const submitForm = () => {
  // 提交表单逻辑
  dialogVisible.value = false
}
</script>
