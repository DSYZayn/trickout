<script setup>
import MyNav from  "@/view/MyNav.vue"






</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="bg-transparent">
        <div class="grid grid-rows-5 gap-10">
          <router-link to="/about" class="avatar w-1/2 justify-self-center mt-5">
            <img src="./assets/img/avatar.svg" alt="">
          </router-link>
          <div class="nav  flex-col space-y-5 justify-center row-start-2 row-end-5">
            <MyNav/>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="bg-transparent">

          <router-view class="view headerView" name="HeaderView">

          </router-view>
        </el-header>
        <el-main class="bg-transparent">
          <router-view v-slot="{ Component, route }">

            <transition :name="route.meta.transition || 'fade'">
              <component :is="Component" :key="route.path"/>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>
.common-layout{
  background-image: url('@/assets/img/bg.jpg');
  object-fit: scale-down;
}
.el-container{
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
