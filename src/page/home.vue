<script setup>
import MyMusic from "@/components/Home/MyMusic.vue"
import MyBook from "@/components/Home/MyBook.vue";
import MyVideo from "@/components/Home/MyVideo.vue"



</script>

<template>
  <el-carousel :autoplay="false" :loop="true" type="card" height="635px">
    <el-carousel-item :key="1" class="bg-transparent">
      <my-music/>
    </el-carousel-item>
    <el-carousel-item :key="2" class="bg-transparent book">
      <my-book/>
    </el-carousel-item>
    <el-carousel-item :key="3" class="bg-transparent video">
      <my-video />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.book{
  height: 490px;
  width: 760px;
  margin-top: 4rem;
}
.video{
  height: 466px;
  width: 800px;
  margin-top: 4rem;
}
</style>