<script setup>
import Map from "@arcgis/core/Map.js";
import config from "@arcgis/core/config.js";
import MapView from "@arcgis/core/views/MapView.js";
import {onMounted} from "vue";

onMounted(()=>
{
  config.apiKey = "AAPK4724d032e1c54f9ca4d0c71a8ef7d493QHMmJSOuOyQM4g0qr-LMRsB39-3Ar-ruUOUADTT6J0fRu8pGLU5m7JOsAgj_gd8V";
  const map = new Map({
    basemap: "satellite" // Basemap layer
  });

  const view = new MapView({
    map: map,
    center: [125.26146,43.8198],
    zoom: 19, // scale: 72223.819286
    container: "viewDiv",
    constraints: {
      snapToZoom: true
    }
  });
})


</script>

<template>
<div id="viewDiv"
     v-loading="loading"
     element-loading-text="Loading..."
>

</div>
</template>

<style scoped>
@import "@arcgis/core/assets/esri/themes/light/main.css";

#viewDiv{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>