<script setup >
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MyVideo from './components/MyVideo.vue'

import {ref} from "vue";



//临时接入一言，start

let msg = ref('You did it!')
yiYan()
let timer = setInterval(yiYan, 3500)
function yiYan(){
  const res = fetch('https://v1.hitokoto.cn')
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
      <MyVideo src="https://upos-sz-mirrorali.bilivideo.com/upgcxcode/50/02/585340250/585340250-1-208.mp4?e=ig8euxZM2rNcNbhj7bdVhwdlhzTjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1676401486&gen=playurlv2&os=alibv&oi=1921313500&trid=13cdfac6e9924023819df0b58e3f8fc1T&mid=3493116380187461&platform=html5&upsig=7fd44894d6ac9457d7c2f39117c9a3ee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&bw=366300&orderid=0,1&logo=80000000"/>
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
