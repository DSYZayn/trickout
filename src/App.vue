<script setup >
import  './components/myNav.vue'
import {ref} from "vue";

let hitokoto = ref('')
//定时一言
yiYan()
setInterval(yiYan,3500)
function yiYan(){
  fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        hitokoto.value = data.hitokoto
      })
      .catch(console.error)
}

</script>

<template>
  <div class="common-layout bg-amber-200">
    <el-container class="el-container text-5xl text-center">
      <el-aside width="15vw" class="bg-blue-100 flex-col" >
        <img src="./assets/avatar.svg" alt="" class="w-24 h-24 flex m-auto mb-40 mt-5">
        <my-nav />


      </el-aside>
      <el-container>
        <el-header class="bg-blue-300 fangSong">{{ hitokoto }}</el-header>
        <el-main class="bg-blue-400">主体部分</el-main>
        <el-footer>底部</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.fangSong{
  font-family: 华文仿宋,sans-serif;
  line-height: 1em;
}
.el-container{
  height: 100vh;
}


</style>
