<template>
  <span id="detail-page">
    <section class="places-section">
      <div class="box">
        <PlacesDetail :place="placesDetail"/>
      </div>
      <div class="box">
        <GoogleMap type="placesDetail" :markers="[...placesDetail]"/>
      </div>
    </section>
  </span>
</template>

<script>

import GoogleMap from '../containers/GoogleMap';
import PlacesDetail from '../containers/PlacesDetail';

export default {
  name: 'DetailPage',
  beforeCreate() {
    const paramId = this.$route.params.id;
    this.$store.placesStore.dispatch('getPlacesDetail', paramId);
  },
  computed: {
    placesDetail(){
      return this.$store.placesStore.getters.loadPlacesDetail;
    },
  },
  components: {
    PlacesDetail,
    GoogleMap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #detail-page{
    .searchbar-section{
      padding: 20px
    }

    .places-section{
      padding: 20px;
      display: flex;

      .box{
        width: 50%;
      }
    }
  }
</style>
