<script setup >
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
// import MyVideo from './components/MyVideo.vue'
import {ref} from "vue";



//临时接入一言，start
const data = import.meta.env
console.log(data)
let msg = ref('You did it!')
yiYan()
let timer = setInterval(yiYan, 3500)
function yiYan(){
  const res = fetch(data.VITE_YIYAN)
  res.then(response => response.json())
      .then(data => msg.value = data.hitokoto)
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
<!--      <MyVideo/>-->
      <iframe src="//player.bilibili.com/player.html?aid=768611576&bvid=BV1rr4y1b7cu&cid=585340250&page=1" allowfullscreen> </iframe>
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
