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
          <el-form-item label="验证码" prop="code">
            <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
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


    const loginForm = ref({
      username: '',
      password: '',
      code: '',
      remember: false,
      codeToken: ''
    });





    const submitForm = () => {
     
      // 表单验证逻辑
      // ... existing validation logic ...
      if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
        // 表单验证成功，跳转到首页
        this.$router.push({ path: '/' }); // 添加此行代码
        alert('submit');
      } else {
        console.log('error submit!!');
        return false;
      }
    };

    const resetForm = () => {
      // 重置表单逻辑
      
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
  background :#5f565e;
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
