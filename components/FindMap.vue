<template>
  <div class="w-full h-96">
    <l-map
        v-model:zoom="zoom"
        v-model="zoom"
        :center="[35.770916111215165, 51.44012977824557]"
        @click="addMarker"
        @ready="addMarker"

    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" :attribution="attribution"></l-tile-layer>
      <!--      <l-circle-->
      <!--          :lat-lng="circle.center"-->
      <!--          :radius="circle.radius"-->
      <!--          :color="circle.color"-->
      <!--      />-->
      <!--      <l-control-layers />-->

      <l-marker :lat-lng=location draggable>
        <l-tooltip>
          شما اینجا هستی
        </l-tooltip>
        <l-popup>لوکیشن شما!</l-popup>
      </l-marker>


      <l-polyline
          :lat-lngs="[
          [36.770916111215165, 51.44012977824557],
        ]"
          color="green"
      ></l-polyline>
      <l-polygon
          :lat-lngs="[
         [35.770916111215165, 51.44012977824557]
        ]"
          color="#41b782"
          :fill="true"
          :fillOpacity="0.5"
          fillColor="#41b782"
      />
      <l-rectangle
          :lat-lngs="[
          [35.770916111215165, 51.44012977824557]
        ]"
          :fill="true"
          color="#35495d"
      />
      <l-rectangle
          :bounds="[
          [35.770916111215165, 51.44012977824557]
        ]"
      >
        <l-popup>
          lol
        </l-popup>
      </l-rectangle>
    </l-map>
  </div>
</template>
<script >
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
  LCircle
} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
    LCircle,
  },
  data() {
    return {
      geojson: {
        type: "FeatureCollection",
        features: [
          // ...
        ],
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
      map: null,
      location: null,
      zoom: 15,
      iconWidth: 25,
      iconHeight: 40,
      attribution:
          '&copy; <a target="_blank" href="https://osm.org/copyright">OpenStreetMap</a> contributors',

      circle: {
        center: [35.770916111215165,51.44012977824557],
        radius: 500,
        color: 'red'
      }
    };
  },
  methods: {
    addMarker(event) {
      this.location = event.latlng
      this.$emit('location',this.location)
    },
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
        circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
};
</script>