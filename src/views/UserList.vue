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
        <el-table-column label="状态">
          <template #default="scope">
            <!-- 如果 userImg 是图片 URL -->

            <div v-if="!scope.row.status"
              style=" width: 40px;border: solid 1px ; display: flex;justify-content: center;background-color: red;color: white;"
              @click="disableUserClick(scope.row)">
              禁用
            </div>
            <div v-else
              style=" width: 40px;border: solid 1px ; display: flex;justify-content: center;background-color: skyblue;color: white;"
              @click="enableUserClick(scope.row)">
              启用
            </div>
          </template>
        </el-table-column>
        <el-table-column label="头像">
          <template #default="scope">
            <!-- 如果 userImg 是图片 URL -->

            <img :src="scope.row.userImg" alt="User Image" style="width: 40px; height: 40px; border-radius: 50%" />
          </template>
        </el-table-column>

        <!-- <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">禁用</el-button>
          </template>
        </el-table-column> -->


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
import { ElMessage, ElMessageBox } from 'element-plus'
import { disableUser, getUserList } from '@/api'
const currentPage = ref(1)
const pageSize = 10
const total = ref(100)
const dialogVisible = ref(false)
const dialogTitle = ref('新增用户')
const form = ref({})
let UserList = ref([])  // 修改默认值为 []
import { useStore } from 'vuex';  // 引入 useStore
const store = useStore()

const pageSearch = async (page) => {
  const response = await getUserList({ page: page, pageSize: 10 });
  UserList.value = response.data.list;
}
pageSearch(1)
disableUser()
const disableUserClick = async (row) => {
  console.log(row)

  ElMessageBox.confirm(
    '确定要禁用此用户？',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(async () => {
      const response = await disableUser({ userId: row.userId, adminId: store.state.adminId })
      if (response.data.code === 1) {
        row.status = 1
        ElMessage({
          type: 'success',
          message: '禁用成功',
        })
      }

    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '用户取消操作',
      })
    })
  console.log(row)

}
const enableUserClick = () => {

}
const submitForm = () => {
  // 提交表单逻辑
  dialogVisible.value = false
}
</script>
