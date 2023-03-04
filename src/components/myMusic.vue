<script setup>

</script>

<template>
  <p>一首随机的歌</p>
  <el-card class="w-1/4 mt-10 mx-auto relative rounded-2xl" :body-style="{padding: '0',background:'#dbe9fe'}">
<!--    <img src="./../assets/img/musicO.png" class="block rounded-t-2xl " alt="">-->
    <img src="./../assets/img/music.png">
    <el-row :gutter="20" class="my-auto p-6 flex-nowrap">
      <el-col :span="8">
        <button>
          <span class="iconfont icon-shangyiqu align-middle"></span>
        </button>
      </el-col>
      <el-col :span="8">
        <button>
          <span class="iconfont icon-24gl-pause2 align-middle"></span>
        </button>
      </el-col>
      <el-col :span="8">
        <button >
          <span class="iconfont icon-xiayiqu align-middle"></span>
        </button>
      </el-col>


    </el-row>


  </el-card>
</template>

<style scoped>
p{
  font-family:Oradano-mincho-GSRR,sans-serif;
}



button {
  width: 1em;
  border-radius: 59px;
  background: #e6eef4;
  box-shadow:  11px 11px 22px #93989c;
}
button:hover {
  box-shadow: 0 0.1em 0.2em rgb(45 35 66 / 40%), 0 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0 -0.1em 0 rgba(83, 135, 135, 0.75);
  transform: translateY(-0.1em);
}

button:active {
  box-shadow: inset 0 0.1em 0.6em #e7e6e2;
  transform: translateY(0em);
}

</style>