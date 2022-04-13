<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')

</script>

<template>
  <div class="h-6" />
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" router=true>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/projects">Projects</el-menu-item>
    <el-menu-item index="/drawflow">DrawFlow</el-menu-item>
  </el-menu>
  <router-view />
</template>

<style>
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

}

html {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: transparent;
}

body {
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  margin: 20px;
  padding: 0;
  background: #181818;
  color: #f7f7f7;
}

#app {
  margin: 0px;
  border-radius: 8px;
  border: 1px solid #494949;

}

.el-main {
  padding: 0;
}
</style>
