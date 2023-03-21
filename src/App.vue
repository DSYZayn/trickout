<script setup>
import MyNav from  "@/view/MyNav.vue"


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="bg-blue-100">
        <div class="grid grid-rows-5 gap-10">
          <div class="avatar w-1/2 justify-self-center mt-5"><img src="./assets/img/avatar.svg" alt=""></div>
          <div class="nav  flex-col space-y-5 justify-center row-start-3 row-end-5">
            <MyNav/>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="bg-amber-50">
          <router-view class="view headerView" name="HeaderView">

          </router-view>
        </el-header>
        <el-main class="bg-lime-100">

          <router-view v-slot="{component}">



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
