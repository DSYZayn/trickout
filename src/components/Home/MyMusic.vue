<script setup>
import AudioPlayer from "@liripeng/vue-audio-player"
import {onBeforeMount, ref, watch} from "vue"
import axios from "axios";

let urls = ref([])
let isCardShow = ref(false)
let isSkeletonShow = ref(true)
let pic = ref("./../../assets/img/music.jpg")
let title = ref("A Random Song")

onBeforeMount(()=>{
  getMusic()
})

function getMusic(){
    axios.get("/music/wqwlapi/wyy_random.php")
        .then((res)=>{return res.data.data})
        .then((data)=>{
          urls.value=[data.url]
          pic.value = data.picurl
          title.value = data.name
          isCardShow.value = true
          isSkeletonShow.value = false
        })
}

</script>

<template>

  <div class="music rounded-2xl bg-lime-100 mx-auto bg-transparent">
    <el-skeleton v-if="isSkeletonShow" style="width: 400px;height: 500px;background:rgba(255,255,255,0.2);backdrop-filter: blur(50px)" animated>
      <el-card
          :body-style="{
                          padding:'0px',
                          backgroundColor:'blue',
                          borderRadius:'5rem'}"
      >
        <el-skeleton-item variant="p"/>
        <el-skeleton-item variant="image" style="width: 400px;height: 500px"/>
        <el-skeleton-item variant="h1" class="w-full"/>
      </el-card>
    </el-skeleton>
    <el-card
            v-if="isCardShow"
            :body-style="{
                          padding:'0px',
                          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e6eef4 100%)'}"
    >
      <p class="text-4xl text-center ">{{ title }}</p>
      <img :src=pic alt="music">
      <AudioPlayer
          ref="audioPlayer"
          :audio-list="urls"
          theme-color="black"/>
    </el-card>

  </div>



</template>

<style scoped>
.h-100{
  height: 800px;
}
.music{
  width: 400px;
}
p{
  font-family:Oradano-mincho-GSRR,Helvetica,sans-serif;
}
img{
  display: block;
  width: 100%;
}


</style>