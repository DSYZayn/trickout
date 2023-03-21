<script setup>
import AudioPlayer from "@liripeng/vue-audio-player"
import axios from "axios";
import {ref} from "vue";
const audioList = [{
  name: '东西（Cover：林俊呈）',
  url: 'https://music.163.com/song/media/outer/url?id=2011122001.mp3'
}]
let img = ref("src/assets/img/music.jpg");


var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "api.wqwlkj.cn");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Cookie", "PHPSESSID=i2e5s83r2sio1dutdqde3f66i6");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.wqwlkj.cn/wqwlapi/wyy_random.php", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


</script>

<template>
  <div class="music rounded-xl bg-lime-100 mx-auto">

    <el-card
            :body-style="{
                          padding:'0px',
                          background:'#e6eef4',
                          borderRadius:'0.75rem'}"
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