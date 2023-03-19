<script setup>
import NavBtn from "@/components/NavBtn.vue"
let nav = [
  {title: '主&ensp;&ensp;&ensp;&ensp;页', icon: 'icon-zhuye',name:'home'},
  {title: '项目推荐', icon: 'icon-xiangmu',name:'projects'},
  {title: '实&ensp;验&ensp;室', icon: 'icon-shiyanshi',name:'lab'},
  {title: '关&ensp;&ensp;&ensp;&ensp;于', icon: 'icon-guanyuwomen', name: 'about'},
  {title: '更&ensp;&ensp;&ensp;&ensp;多', icon: 'icon-gengduo-hengxiang', name: 'more'}]
</script>

<template>
  <NavBtn v-for="{title, icon, name} in nav" :name="name" :icon="icon" :title="title" />
</template>

<style scoped>

</style>