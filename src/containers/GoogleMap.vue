<template>
  <span>
    <label v-if="type === 'placesCreate'">
      <gmap-autocomplete
        placeholder="Wpisz adres aby dodać pinezkę na mapę"
        @place_changed="setPlace"
      >
      </gmap-autocomplete>
      <button @click="addMarker">Add</button>
    </label>
    <gmap-map
        ref="gmap"
        :style="`width: 100%; ${type === 'placesDetail' ? 'height: 85vh' : 'height: 60vh'}`"
        :center="center"
        :zoom="zoom"
        :options="{styles: styles}"
        @dragend="() => onDragend()"
      >
        <gmap-marker
          v-if="type === 'placesCreate'"
          :key="index"
          v-for="(m, index) in createdPlace"
          :position="m.position"
          @click="center=m.position"
        ></gmap-marker>

        <gmap-marker
          v-if="type === 'placesList' || type === 'placesDetail'"
          v-for="(elem, index) in markers"
          :ref="`marker${elem.id}`"
          :key="index"
          :position="{lat: elem.latitude, lng: elem.longitude}"
          :icon="require(`../assets/img/${elem.logo}`)"
          @mouseover="() => type === 'placesList' ? onMouseOverLocation(elem.id) : null"
          @mouseout="() => type === 'placesList' ? onMouseOutLocation(elem.id) : null"
        >
        </gmap-marker>
      </gmap-map>
  </span>

</template>

<script>

import { gmapApi } from 'vue2-google-maps'

export default { 
  name: 'GoogleMap',
  data () {
    return {
      center: {lat: 52.206078, lng: 21.007261},
      currentPlace: null,
      createdPlace: [],
      zoom: 6,
      // places: [],
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#fa3f58"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fa3f58"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#fa3f58"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#fa3f58"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#fa3f58"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ],
    }
  },
  computed: {
    google: gmapApi,
  },
  methods: {
    setPlace(currentPlace) {
      this.currentPlace = currentPlace;
    },
    addMarker() {
      this.createdPlace = [];
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };

        this.createdPlace.push({ position: marker });
        this.center = marker;
        this.zoom = 12;
        this.currentPlace = null;
      }
    },
    onMouseOverPlace(id) {
      const marker = id && this.$refs[`marker${id}`][0];
      marker && marker.$markerObject.setAnimation(this.google.maps.Animation.BOUNCE);
    },
    onMouseOutPlace(id) {
      const marker = id && this.$refs[`marker${id}`][0];
      marker && marker.$markerObject.setAnimation({});
    },
    onMouseOverLocation(id) {
      this.$root.$emit('highLightEmit', id, 'mouseOver')
    },
    onMouseOutLocation(id) {
      this.$root.$emit('highLightEmit', id, 'mouseOut')
    },
    onDragend() {
      this.$refs.gmap.$mapPromise.then((map) => {
        const northEastLat = map.getBounds().getNorthEast().lat();
        const northEastLng = map.getBounds().getNorthEast().lng();
        const southWestLat = map.getBounds().getSouthWest().lat();
        const southWestLng = map.getBounds().getSouthWest().lng();

        const request = {
          upperRight: {
            lat: northEastLat,
            lng: northEastLng,
          },
          bottomLeft: {
            lat: southWestLat,
            lng: southWestLng,
          }
        }
        // eslint-disable-next-line
        console.log(request);
        // map.panTo({lat: 1.38, lng: 103.80})
      })
    }
  },
  props: {
    type: String,
    markers: Array,
  },
  mounted() {
    if(this.type === 'placesList') {
      this.$root.$on('animationEmit', (id, eventType) => {
        eventType === 'mouseOver' && id ? this.onMouseOverPlace(id) : this.onMouseOutPlace(id);
      });
    }
  },
}
</script>

<style lang="scss" scoped>
  .gmap-marker{
    opacity: 1 !important;
  }
</style>
