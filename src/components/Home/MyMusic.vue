<script setup>
import AudioPlayer from "@liripeng/vue-audio-player"
import axios from "axios";
import {ref} from "vue";
const audioList = [{
  name: '东西（Cover：林俊呈）',
  url: 'https://music.163.com/song/media/outer/url?id=2011122001.mp3'
}]
let img = ref("src/assets/img/music.jpg");








</script>

<template>
  <div class="music rounded-xl bg-lime-100 mx-auto bg-black">

    <el-card
            :body-style="{
                          padding:'0px',
                          background:'#e6eef4'}"
    >
      <p class="text-4xl text-center ">一首随机的歌</p>

      <img src="./../../assets/img/music.jpg" alt="music">
      <AudioPlayer
          ref="audioPlayer"
          :audio-list="audioList.map((elm) => elm.url)"
          theme-color="black"/>
    </el-card>

  </div>



</template>

<style scoped>
.music{
  width: 400px;
}
p{
  font-family:Oradano-mincho-GSRR,sans-serif;
}
img{
  display: block;
  width: 100%;
}


</style>