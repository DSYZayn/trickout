<script setup>
import {ref} from "vue";
import MyNav from "@/components/myNav.vue";
import MyMusic from "@/components/myMusic.vue";
import MySlider from '@/components/mySlider.vue';


let hitokoto = ref('')
//定时一言
yiYan()
setInterval(yiYan, 3500)

function yiYan() {
  fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        hitokoto.value = data.hitokoto
      })
      .catch(console.error)
}

//获取导航栏信息
let nav = [
  {title: '主&ensp;&ensp;&ensp;&ensp;页', icon: 'icon-zhuye'},
  {title: '项目推荐', icon: 'icon-xiangmu'},
  {title: '实&ensp;验&ensp;室', icon: 'icon-shiyanshi'},
  {title: '关&ensp;&ensp;&ensp;&ensp;于', icon: 'icon-guanyuwomen'},
  {title: '更&ensp;&ensp;&ensp;&ensp;多', icon: 'icon-gengduo-hengxiang'}]
</script>

<template>
  <div class="common-layout bg-amber-200">
    <el-container class="el-container text-5xl text-center">
      <el-aside width="15vw" class="bg-blue-100 flex-col sm:flex hidden">
        <img src="./assets/img/avatar.svg" alt="" class="w-24 h-24 flex m-auto mb-40 mt-5">
          <my-nav :items="nav"/>


      </el-aside>
      <el-container>
        <el-header class="bg-blue-300 fangSong">{{ hitokoto }}</el-header>
        <el-main class="bg-amber-50 relative">
          <my-music/>
<!--          <my-book/>-->
          <el-row :gutter="20" class="absolute bottom-5 sm:left-1/3 sm:w-1/3">
            <el-col :span="4">
              <div class="rounded-md min-h-min "></div>
            </el-col>
            <el-col :span="16">
              <my-slider/> <!--滑动块-->
            </el-col>
            <el-col :span="4">
              <div class="rounded-md min-h-min "></div>
            </el-col>
          </el-row>

        </el-main>
        <el-footer>底部</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

.fangSong {
  font-family: 宋体 ExtraLight, sans-serif;
  line-height: 3rem;
  font-size: 1rem;
}

.el-container {
  height: 100vh;
}

</style>
