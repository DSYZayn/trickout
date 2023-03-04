<script setup>
let props = defineProps({items:Array})
</script>

<template>
  <nav class="flex-col space-y-5">
    <button v-for="item in props.items" class="flex flex-nowrap mx-auto">
      <i  :class="['icon', 'text-center', 'mr-2', 'flex', 'iconfont',item.icon]" ></i>
      <span class="flex" v-html="item.title"></span>
    </button>
  </nav>

</template>

<style scoped>
@import "tailwindcss/tailwind.css";

@font-face {
  font-family: iconfont;
}
.icon{
  width: 1em;
  height: 1em;

}

button {
  width: 8em;
  font-size: 18px;
  display: inline;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  border-radius: 50px;
  background: #D1D8EC;
  box-shadow: 12px 12px 24px #b2b8c9, -12px -12px 24px #f0f8ff;
  padding: 0 1em;
  line-height: 2.6em;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

button:hover {
  box-shadow: 0 0.1em 0.2em rgb(45 35 66 / 40%), 0 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0 -0.1em 0 #3c4fe0;
  transform: translateY(-0.1em);
}

button:active {
  box-shadow: inset 0 0.1em 0.6em #3c4fe0;
  transform: translateY(0em);
}


</style>