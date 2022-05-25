<template>
  <div class="about">
    This is Home Page
    <el-button type="primary">Primary</el-button>
  </div>
</template>
<script lang="ts" setup>
import { login } from '@/api/index'
interface MyType{
  name: String,
  age: Number
}
const person: MyType={
  name: '123',
  age: 43
}
let str: string = "12"

const Login = async () => {
  const data = await login({
    username: 'xiongyan',
    password: '123456'
  })
  if(data){
    console.log('登陆成功')
  }
}

// Login()

</script>
