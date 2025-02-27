<template>
  <el-card>
    <template #header>
      <span>系统设置</span>
    </template>

    <el-form :model="form" label-width="120px">
      <el-form-item label="系统名称">
        <el-input v-model="form.systemName" />
      </el-form-item>
      
      <el-form-item label="系统logo">
        <el-upload
          action="#"
          :show-file-list="false"
          :auto-upload="false"
        >
          <el-button type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label="启用注册">
        <el-switch v-model="form.allowRegister" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">保存设置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  systemName: '后台管理系统',
  allowRegister: true
})

const submit = () => {
  console.log('保存设置', form)
}
</script>