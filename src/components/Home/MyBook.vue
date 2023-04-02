<script setup>
import { ref, nextTick, onMounted } from 'vue'
import turn from '@/assets/js/turn.js'
import $ from 'jquery'

const currentPage = ref(1)

const bookList = ref([])
for(let i=1; i<50; i++){
  if(i<10) {
    const book = JSON.parse(`{"url":"/simianfeng/simianfeng-00${i}.jpg"}`)
    // console.log(book)
    bookList.value.push(book)
  }
  else if(i>=10 && i<100){
    const book = JSON.parse(`{"url":"/simianfeng/simianfeng-0${i}.jpg"}`)
    bookList.value.push(book)
  }
  else{
    const book = JSON.parse(`{"url":"/simianfeng/simianfeng-${i}.jpg"}`)
    bookList.value.push(book)
  }
}

onMounted(() => {
  onTurn()
})

const onTurn = () => {
  nextTick(() => {
    const flipbook = $('#flipbook')
    flipbook.turn({
      height: 490, //高度
      width: 760, //宽度
      display: 'double', //单页显示/双页显示  single/double
      elevation: 50,
      duration: 500, //翻页速度(毫秒), 默认600ms
      gradients: true, //翻页时的阴影渐变, 默认true
      autoCenter: true, //自动居中, 默认false
      acceleration: true, //硬件加速, 默认true, 如果是触摸设备设置为true
      page: 1, //设置当前显示第几页
      pages: bookList.value.length, //总页数
      when: {
        //监听事件
        turning: function (e, page, view) {
          // console.log(e, page, view)
          // 翻页前触发
        },
        turned: function (e, page) {
          // console.log(e, page)
          currentPage.value = page
          // 翻页后触发
        },
      },
    })
  })
}

</script>

<template>
  <p class="text-4xl text-center ">A Book</p>
  <div class="turn-container mx-auto">
    <div class="turn-banner">
      <div class="turn-content">
        <div id="flipbook">
          <el-image v-for="(item, index) in bookList" :key="index" fit="scale-down" :src="item.url" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p{
  font-family:Oradano-mincho-GSRR,sans-serif;
}
.turn-content {
  display: flex;
  margin: 0 auto;
  overflow: hidden;
}

</style>