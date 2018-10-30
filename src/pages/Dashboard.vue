<template>
  <span id="dashboard-page">
    <section class="searchbar-section">
      <SearchBarForm/>
    </section>
    <section class="places-section">
      <div class="box">
        <PlacesList :markers="markers"/>
      </div>
      <div class="box">
        <GoogleMap type="placesList" :markers="markers"/>
      </div>
    </section>
  </span>
</template>

<script>

import SearchBarForm from '../forms/SearchBarForm'
import GoogleMap from '../containers/GoogleMap'
import PlacesList from '../containers/PlacesList'

export default {
  name: 'Dashoard',
  computed: {
    markers(){
      return this.$store.placesStore.getters.loadMarkersList;
    },
  },
  components: {
    GoogleMap,
    SearchBarForm,
    PlacesList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #dashboard-page{
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
