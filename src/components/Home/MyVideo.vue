<script setup>

</script>

<template>
  <vue-plyr>
    <p class="text-4xl text-center ">A video</p>
    <div class="plyr__video-embed rounded-2xl">
      <iframe
          src="https://player.bilibili.com/player.html?aid=670045394&bvid=BV1Fa4y1s79D&cid=250244024&page=1&autoplay=false"
          width="800px"
          height="450px"
          allowfullscreen
          allowtransparency

      ></iframe>
    </div>
  </vue-plyr>
</template>

<style scoped>
p{
  font-family:Oradano-mincho-GSRR,sans-serif;
}
.plyr__video-embed{
  width: 400px;
}
</style>