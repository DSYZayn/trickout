<script setup>
import MyMusic from "@/components/Home/MyMusic.vue"
import MyBook from "@/components/Home/MyBook.vue";
import MyVideo from "@/components/Home/MyVideo.vue"
import MyCode from "@/components/Home/MyCode.vue";

</script>

<template>
  <el-carousel :autoplay="false" :loop="true" type="card" height="635px" class="overflow-hidden">
    <el-carousel-item :key="1" class="bg-transparent">
      <my-music/>
    </el-carousel-item>
    <el-carousel-item :key="2" class="bg-transparent book">
      <my-book/>
    </el-carousel-item>
    <el-carousel-item :key="3" class="bg-transparent video">
      <my-video />
    </el-carousel-item>
    <el-carousel-item :key="4" class="bg-transparent code">
      <my-code />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.book{
  height: 490px;
  width: 760px;
  margin-top: 1rem;
}
.video{
  height: 466px;
  width: 800px;
  margin-top: 2rem;
}
.code{
  margin-top: 2rem;
}
</style>