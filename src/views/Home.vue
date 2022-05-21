<template>
  <div class="about">
    This is Home Page
    <el-button type="primary">Primary</el-button>
  </div>
</template>
<script lang="ts" setup>
interface MyType{
  name: String,
  age: Number
}
const person: MyType={
  name: '123',
  age: 43
}
let str: string = "12"
</script>
