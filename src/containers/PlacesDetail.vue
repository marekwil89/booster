<template>
  <span id="places-detail">
    <el-card class="box-card">
      <article>
        <div class="card-back">
          <router-link tag="a" to="/dashboard">
            <el-button plain>
              <i class="el-icon-arrow-left"></i>
              Cofnij
            </el-button>
          </router-link>
        </div>
      </article>
    </el-card>
    <el-card
        class="box-card"
        shadow="hover"
      >
      <article 
        class="card-inner"
      >
        <!-- <div class="card-carousel">
          <el-carousel height="250px">
            <el-carousel-item class="el-carousel-item" v-for="(image, key) in place.images" :style="{backgroundImage: 'url(' + image.src + ')'}" :key="key"></el-carousel-item>
          </el-carousel>
        </div> -->
        <div class="card-info">
          <figure>
            <img :src="require(`../assets/img/${place.logo}`)" alt="">
          </figure>
          <h5>{{place.name}}</h5>
        </div>
        <div class="card-description">
          <address>
            <p>
              <i class="el-icon-location"></i>
              {{place.address}}
            </p>
            <p>
              <i class="el-icon-phone"></i>
              <a :href="`tel:${place.phone}`">
                {{place.phone}}
              </a>
            </p>
            <p>
              <i class="el-icon-message"></i>
              <a :href="`mailto:${place.email}`">
                {{place.email}}
              </a>
            </p>
          </address>
        </div>
        <div class="card-aside">
          <router-link tag="a" :to="{ name: 'DetailPage', params: { id: place.id }}">
            <el-button plain>
              Pokaż zdjęcia
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </router-link>
        </div>
      </article>
    </el-card>
    <el-card class="box-card">
      <article class="card-services">
        <h5>Usługi:</h5>
        <el-tag
          v-for="(elem, index) in place.categories"
          :key="index"
          :class="`category ${onCategoryCompare(elem)}`"
          type="info"
          size="medium"
        >
          {{elem}}
        </el-tag>
      </article>
    </el-card>
    <el-card class="box-card">
      <article class="card-description">
        <h5>Opis:</h5>
        <div v-html="place.description"></div>
      </article>
    </el-card>
  </span>
</template>

<script>
import { categoryCompare } from "../helpers/categoryCompare";

export default {
  name: "PlacesDetail",
  data() {
    return {};
  },
  methods: {
    onCategoryCompare(category) {
      return categoryCompare(category);
    }
  },
  props: {
    place: Object
  }
};
</script>

<style lang="scss" scoped>
#places-detail {
  width: 100%;

  .box-card {
    z-index: 99;
    margin: 0 20px 20px 0;

    .card-inner {
      display: flex;
      justify-content: space-between;

      .card-info {
        padding-left: 15px;
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        border-right: 1px solid #dadada;

        h5 {
          font-weight: 500;
          margin: 10px 0 0 0;
          color: #5a6371;
        }
      }

      .card-description {
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #dadada;
      }

      .card-aside {
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
      }
    }

    .card-services {
      h5 {
        margin-bottom: 10px;
      }
    }

    .card-description {
      h5 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
