<script setup>
import {ref} from "vue"
const mycode = ref("import {createApp} from 'vue'\n" +
    "import App from './App.vue'\n" +
    "import \"tailwindcss/tailwind.css\"\n" +
    "import \"element-plus/dist/index.css\"\n" +
    "import router from \"@/route\";\n" +
    "import * as ElementPlusIconsVue from \"@element-plus/icons-vue\"\n" +
    "import {VueMasonryPlugin} from \"vue-masonry\";\n" +
    "import hljsVuePlugin from '@highlightjs/vue-plugin';\n" +
    "import 'highlight.js/styles/stackoverflow-dark.css'\n" +
    "import 'highlight.js/lib/common'")


</script>

<template>
  <p class="text-4xl text-center">A Code Segment</p>
<div class="mt-10 codeCard">
    <highlightjs language="JavaScript" :code="mycode"  />
</div>

</template>

<style scoped>
p{
  font-family: Oradano-mincho-GSRR,sans-serif;
}
.codeCard :deep(.hljs){
  @apply rounded-xl;
  --borderWidth: 3px;
  overflow: hidden;
  position: relative;
  background: black;
  transition: all .2s;
}
.codeCard :deep(.hljs:hover) {
  transform: scale(0.98);
  border-radius: 20px;
}
.codeCard{
  padding: 0.3rem;
}
.codeCard::after{
  content: '';
  border-radius: 2rem;
  position: absolute;
  top: 5rem;
  left: -0.3rem;
  height: 44%;
  width: 102%;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  z-index: -10;
  animation: animatedgradient 10s ease alternate infinite;
  background-size: 300% 300%;
}
@keyframes animatedgradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}



</style>