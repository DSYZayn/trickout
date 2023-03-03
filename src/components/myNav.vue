<script setup>
</script>

<template>
  <nav class="flex-col space-y-5">
    <button class="flex flex-nowrap mx-auto"><House class="icon my-auto mr-1" /><span class="align-middle text-center">主&ensp;&ensp;&ensp;&ensp;页</span></button>
    <button class="flex flex-nowrap mx-auto"><Tickets class="icon my-auto mr-1"/><span class="align-middle text-center">项目推荐</span></button>
    <button class="flex flex-nowrap mx-auto"><MagicStick class="icon my-auto mr-1"/><span class="align-middle text-center">实&ensp;验&ensp;室</span></button>
    <button class="flex flex-nowrap mx-auto"><Avatar class="icon my-auto mr-1"/><span class="align-middle text-center">关&ensp;&ensp;&ensp;&ensp;于</span></button>
    <button class="flex flex-nowrap mx-auto"><More class="icon my-auto mr-1"/><span class="align-middle text-center">更&ensp;&ensp;&ensp;&ensp;多</span></button>
  </nav>

</template>

<style scoped>
@import "tailwindcss/tailwind.css";

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