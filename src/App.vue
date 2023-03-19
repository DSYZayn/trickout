<script setup>
import MyNav from  "@/view/MyNav.vue"
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="bg-blue-100">
        <div class="grid grid-rows-3 gap-10">
          <div class="avatar w-1/2 justify-self-center mt-5"><img src="./assets/img/avatar.svg" alt=""></div>
          <div class="nav  flex-col space-y-5 justify-center row-span-2">
            <MyNav/>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="bg-blue-300">
          <router-view class="view headerView" name="HeaderView">

          </router-view>
        </el-header>
        <el-main class="bg-blue-400">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>
.el-container{
  height: 100vh;
}


</style>
