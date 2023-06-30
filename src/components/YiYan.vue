<script setup>
import {computed, onMounted, ref} from "vue";


let hitokoto = ref('')//一言文字
let p = ref('')//一言标签
onMounted(()=>{
  yiYan()

})

//定时一言

setInterval(yiYan, 10000)
//计算动画步数
let steps = computed(()=>{
  return hitokoto.value.length
})
//获取一言数据
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

    <p class="mx-auto font-serif text-3xl truncate typing mt-5">{{hitokoto}}</p>


</template>

<style scoped>
.typing{
  width: 0;
  border-right: 0.15rem solid orange;
  animation: type 4.5s steps(v-bind(steps),end) forwards alternate-reverse infinite,
             blink 1s infinite;
}

@keyframes type {
  from{width: 0}
  to{width: 40%}
}
@keyframes blink {
  from{border-color: transparent}
  to{border-color: black}
}
</style>