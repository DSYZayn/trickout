<script setup>
import {ref} from "vue";

let hitokoto = ref('')
//定时一言
yiYan()
setInterval(yiYan, 5000)

function yiYan() {
  fetch('https://v1.hitokoto.cn')
      .then(response => response.json())
      .then(data => {
        hitokoto.value = data.hitokoto
      })
      .catch(console.error)
}
</script>

<template>
<p class="inline-block font-serif text-3xl leading-8 truncate flex justify-center mt-4">{{ hitokoto }}</p>
</template>

<style scoped>

</style>