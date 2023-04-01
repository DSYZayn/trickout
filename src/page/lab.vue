<script setup>
</script>

<template>
  <p class="bg-cyan-600">这是主视图组件lab页面</p>
  <router-link to="/map"><img src="@/assets/img/door.jpg" alt="map" class="w-1/3 slope "> </router-link>
</template>

<style scoped>
.slope{
  transform-style: preserve-3d;
  perspective:800px;
  transform:rotate3d(1,1,1,45deg);
}
</style>