<script setup>
import Map from "@arcgis/core/Map.js";
import config from "@arcgis/core/config.js";
import MapView from "@arcgis/core/views/MapView.js";
import {onMounted, ref} from "vue";
import screenfull from "screenfull"
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";

const arcmap = ref(null)
const full = ref(null)

let baseLayer = new WebTileLayer({
    urlTemplate: 'http://ais.dongsy.com.cn:31637/arcgis/rest/services/AIS/portsMap/MapServer?f=jsapi',
    subDomains:["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    copyright:"ais2023"
})

onMounted(()=>
{
  config.apiKey = "AAPK4724d032e1c54f9ca4d0c71a8ef7d493QHMmJSOuOyQM4g0qr-LMRsB39-3Ar-ruUOUADTT6J0fRu8pGLU5m7JOsAgj_gd8V";
  const map = new Map({
    basemap: {
        baseLayers:[baseLayer]
    },// Basemap layer
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
  view.ui.remove("attribution")
  full.value.style.visibility="visible"
})
function fullScreen() {
  if (screenfull.isEnabled && !screenfull.isFullscreen) {
    screenfull.request(arcmap.value);
  }
}
function toggleFullScreen() {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
}
function exitFullScreen() {
  if (screenfull.isEnabled && screenfull.isFullscreen) {
    screenfull.exit();
  }
}


</script>

<template>
<div id="viewDiv" ref="arcmap" class="bg-white">
  <div class="screenfull mt-5 w-10" ref="full">

    <FullScreen @click="fullScreen" class="text-red-800" />
    <CloseBold @click="exitFullScreen" class="text-red-800"/>
  </div>

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