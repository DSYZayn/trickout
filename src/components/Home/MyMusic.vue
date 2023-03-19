<script setup>

</script>

<template>
  <p>一首随机的歌</p>

  <el-card class="sm:w-1/3 w-10/12 mt-5 absolute sm:left-1/3 left-1/12 rounded-2xl" :body-style="{padding: '0',background:'#dbe9fe'}">
      <img src="../../assets/img/music.png" alt="MUSIC">
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

span{
  font-size: 40%;
}
button {
  width: 80%;
  border-radius: 59px;
  background: #e6eef4;
  box-shadow:  11px 11px 22px #93989c;
}
button:hover {
  box-shadow: 0 0.1em 0.2rem rgb(45 35 66 / 40%), 0 0.4rem 0.7rem -0.1rem rgb(45 35 66 / 30%), inset 0 -0.1rem 0 rgba(83, 135, 135, 0.75);
  transform: translateY(-0.1rem);
}

button:active {
  box-shadow: inset 0 0.1rem 0.6rem #e7e6e2;
  transform: translateY(0);
}
@media (max-width: 640px){
  .left-1\/12{
    left: calc(100%/12);
  }
}

</style>