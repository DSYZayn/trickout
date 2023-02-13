<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {ref} from "vue";
let msg = ref('You did it!')
let timer = setInterval(yiYan, 3000)
function yiYan(){
  const res = fetch('https://v.api.aa1.cn/api/yiyan/index.php')
  res.then(data => data.text()).then(data => msg.value = delHtmlTag(data))
  function delHtmlTag(str) {return str.replace(/<[^>]+>/g, "")}
}



</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="msg" />
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
