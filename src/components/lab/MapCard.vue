<script setup>
defineProps(["url"])

</script>

<template>
<div class="container ml-2">
  <img :src="url" alt="xx" class="mt-3">
</div>
</template>

<style scoped>
.container{
  perspective: 800px;
  transform-style: preserve-3d;
  width: 270px;
  height: 480px;
}
img{
  border: solid rgb(221, 214, 214) 2px;
  transform: rotateY(20deg);
  border-radius: 0.5rem;
  box-shadow: -4px -2px 0 white,
  2px 2px 0 gray;
  transition: transform 0.5s ease-in-out;
}
img:hover{
  transform:rotateY(0deg);
  transition: transform 0.5s ease-in-out;
}
</style>