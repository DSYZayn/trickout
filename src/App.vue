<script setup >
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MyVideo from './components/MyVideo.vue'
import {ref} from "vue";



//临时接入一言，start
let data = import.meta.env
console.log(data)
console.log(data.VITE_PLYR_POSTER)
let msg = ref('You did it!')
yiYan()
let timer = setInterval(yiYan, 3500)
function yiYan(){
  const res = fetch("https://v1.hitokoto.cn")
  res.then(response => response.json())
      .then(data => msg.value = data['hitokoto'])
}
function stop(){
  clearInterval(timer)
}
function reset(){
  yiYan()
  timer = setInterval(yiYan, 3500)
}
//一言逻辑结束
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="msg" @mouseenter="stop" @mouseleave="reset"/>
      <MyVideo dataPoster="https://i1.hdslb.com/bfs/archive/8c58b5e13cb816c3dd212a5374d9dff8ce19507d.jpg" src="https://upos-sz-mirrorali.bilivideo.com/upgcxcode/50/02/585340250/585340250-1-208.mp4?e=ig8euxZM2rNcNbhj7bdVhwdlhzTjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1676448603&gen=playurlv2&os=alibv&oi=1921313500&trid=a71d73644f4f4a3e9beb1e4640e89ecaT&mid=3493116386478737&platform=html5&upsig=12cfd6a98373dbce0a2b01208cb0c434&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&bw=366300&orderid=0,1&logo=80000000"/>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
