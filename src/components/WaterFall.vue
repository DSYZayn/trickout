<script setup>

</script>

<template>
  <div class="container relative overflow-x-hidden ">
    <div v-masonry="containerID" transition-duration="0.3s" item-selector=".water" class="absolute md:left-32 space-y-7">
      <div v-masonry-tile class="water" v-for="i in 50" :class="['water--h'+i%2,'overflow-y-hidden']">
        <!--    item-->
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white h-full ">
          <img class="w-full h-1/2" :src="'https://picsum.photos/200/100?random=' + i" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.water--h0{
  height: 500px;
}
.water--h1{
  height: 550px;
}
</style>