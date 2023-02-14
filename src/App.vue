<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
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
