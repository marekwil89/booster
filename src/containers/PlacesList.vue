<template>
  <span id="places-list" :class="`${vertical && 'vertical'}`">
    <el-card
        v-for="elem in markers"
        :key="elem.name"
        :class="`box-card ${vertical && 'vertical'} ${activated === elem.id && 'active'}`"
        shadow="hover"
        :ref="`marker${elem.id}`"
      >
      <article 
        @mouseover="() => onMouseOverPlace(elem.id)"
        @mouseout="() => onMouseOutPlace(elem.id)"
        :class="`card-inner ${vertical && 'vertical'}`"
      >
        <div class="card-carousel">
          <el-carousel :height="`${vertical ? '250px' : '150px'}`">
            <el-carousel-item class="el-carousel-item" v-for="(image, key) in elem.images" :style="{backgroundImage: 'url(' + image.src + ')'}" :key="key"></el-carousel-item>
          </el-carousel>
        </div>
        <div class="card-info">
          <figure>
            <img :src="require(`../assets/img/${elem.logo}`)" alt="">
          </figure>
          <h5>{{elem.name}}</h5>
        </div>
        <div class="card-description">
          <address>
            <p>
              <i class="el-icon-location"></i>
              {{elem.address}}
            </p>
            <p>
              <i class="el-icon-phone"></i>
              <a :href="`tel:${elem.phone}`">
                {{elem.phone}}
              </a>
            </p>
            <p>
              <i class="el-icon-message"></i>
              <a :href="`mailto:${elem.email}`">
                {{elem.email}}
              </a>
            </p>
          </address>
        </div>
        <div class="card-aside">
          <router-link tag="a" :to="{ name: 'DetailPage', params: { id: elem.id }}">
            <el-button plain>
              Pokaż szczegóły
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </router-link>
        </div>
      </article>
    </el-card>
  </span>
</template>

<script>

export default { 
  name: 'PlacesList',
  data() {
    return {
      activated: null,
    };
  },
  methods: {
    onMouseOverPlace(id) {
      !this.vertical && this.$root.$emit('animationEmit', id, 'mouseOver')
    },
    onMouseOutPlace(id) {
      !this.vertical && this.$root.$emit('animationEmit', id, 'mouseOut')
    },
    onMouseOverLocation(id) {
      this.activated = id;
    },
    onMouseOutLocation() {
      this.activated = null;
    },
  },
  mounted() {
    this.$root.$on('highLightEmit', (id, eventType) => {
      eventType === 'mouseOver' && id ? this.onMouseOverLocation(id) : this.onMouseOutLocation();
    });
  },
  props: {
    vertical: Boolean,
    markers: Array,
  },
}
</script>

<style lang="scss" scoped>
  #places-list{
    width: 100%;

    &.vertical {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .box-card{
      z-index: 99;
      margin: 0 20px 20px 0;

      &.active{
        transform: translateX(20px);
      }

      &.vertical{
        margin: 20px;
        width: 400px;
      }

      .card-inner{
        display: flex;
        justify-content: space-around;

        &.vertical{
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .card-carousel{
            display: block;
          }

          .card-info{
            margin: 10px 0;
          }

          .card-description{
            justify-content: flex-start;
          }

          .card-carousel, .card-description, .card-info, .card-aside{
            width: 100%;
            border-right: none;
            
            address{
              margin: 0px 0 20px 0;
            }
          }
        }

        .card-carousel{
          display: none;
        }

        .card-info{
          width: 33%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border-right: 1px solid #dadada;

          h5{
            font-weight: 500;
            margin: 10px 0 0 0;
            color: #5A6371;
          }
        }

        .card-description{
          width: 33%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #dadada;
        }

        .card-aside{
          width: 33%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          flex-direction: column;
        }
      }
    }
  }
</style>
