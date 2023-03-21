<script setup>
let props = defineProps(["title","icon","name"])

</script>

<template>
  <button class="flex flex-nowrap mx-auto">
      <i  :class="['icon', 'text-center', 'mr-2', 'flex', 'iconfont',props.icon]" ></i>
      <router-link :to="{name:props.name}" v-html="props.title"></router-link>
    </button>

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
  box-shadow: 0 0.1rem 0.2rem rgb(45 35 66 / 40%), 0 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0 -0.1em 0 #98c1d9;
  transform: translateY(-0.1rem);
}

button:active {
  box-shadow: inset 0 0.1rem 0.6rem rgba(83, 135, 135, 0.75);
  transform: translateY(0em);
}


</style>