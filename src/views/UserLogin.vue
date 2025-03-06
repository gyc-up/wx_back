<template>
  <div :xl="6" :lg="7" class="bg-login">

    <!--标题-->
    <el-row type="flex" class="row-bg row-two" justify="center" align="middle">
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <!--标题-->
        <h1 class="title">小智后台管理系统</h1>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <!--form表单-->
    <el-row type="flex" class="row-bg card" justify="center" align="bottom">
      <el-col :span="7" class="login-card">
        <!--loginForm-->
        <el-form :model="loginForm" label-width="21%" class="loginForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="记住密码" prop="remember">
            <el-switch v-model="loginForm.remember"></el-switch>
          </el-form-item>
          <el-form-item class="btn-ground">
            <el-button type="primary" @click="submitForm">立即登陆</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '../api/login.js';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';  // 引入 useStore

// 初始化 vue-router
const router = useRouter();

// 初始化 loginForm 响应式数据
const loginForm = ref({
  username: '',
  password: '',
  code: '',
  remember: false,
  codeToken: ''
});

// 使用 Vuex store
const store = useStore();

// 登录表单提交
const submitForm = async () => {
  try {
    const res = await login({
      userId: loginForm.value.username,
      userPassword: loginForm.value.password
    });


    if (res.data.code === 1) {
      // 更新 Vuex 状态
      store.commit('updateUserInfo', {
        userId: res.data.data.id,
        userName: res.data.data.userName,
        userImg: res.data.data.userImg
      });

      // 跳转到主界面
      router.push({ path: '/mainDashboard' });
    } else {
      console.log('登录失败');
    }
  } catch (error) {
    console.log('登录请求失败:', error);
  }
};

// 重置表单
const resetForm = () => {
  loginForm.value.username = '';
  loginForm.value.password = '';
  loginForm.value.code = '';
  loginForm.value.remember = false;
  loginForm.value.codeToken = '';
};
</script>

<style scoped>
.codeImg {
  float: right;
  border-radius: 3px;
  width: 26%;
}

.bg-login {
  height: 100%;
  background: #5f565e;
  background-size: 50%;
}

.btn-ground {
  text-align: center;
}

.title {
  text-shadow: -3px 3px 1px #5f565e;
  text-align: center;
  margin-top: 60%;
  color: #41b9a6;
  font-size: 40px;
}

.login-card {
  background-color: #ffffff;
  opacity: 0.9;
  box-shadow: 0 0 20px #ffffff;
  border-radius: 10px;
  padding: 40px 40px 30px 15px;
  width: auto;
}
</style>
