<template>
  <span id="main-page">
    <section class="header-section">
      <div class="head-box">
        <h1>Zacznij już dzisiaj razem z nami drogę do lepszego życia.</h1>
        <h3>Get your freebie template now</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora cumque sint quia praesentium impedit ut quisquam similique nobis? Laboriosam, ipsa.</p>
      </div>
    </section>
    <section class="places-card-section">
      <h3>Najlepiej oceniane salony</h3>
      <PlacesList :markers="markers" vertical/>
    </section>
    <section class="offer-section">
      <div class="head-box">
        <h4 class="font-light">We have built our own blockchain protocol, and modular building blocks to enable fitting in any business and its internal mechanisms & structure.</h4>
      </div>
      <div class="offer-wrapper">
        <article>
          <h1 class="font-bold">MODULAR BUILDING BLOCKS ENABLING A NEW ERA OF MONETARY</h1>
          <h3>GET YOUR FREEBIE TEMPLATE NOW</h3>
        </article>
        <figure>
          <img src="../assets/img/girl.jpg" alt="">
        </figure>
      </div>
    </section>
    <section class="find-section">
      <div class="head-box">
        <figure>
          <img src="../assets/img/girls.jpg" alt="">
        </figure>
        <h4 class="font-light">We have built our own blockchain protocol, and modular building blocks to enable fitting in any business and its internal mechanisms & structure.</h4>
        <el-button plain>
          Pokaż szczegóły
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
    </section>
    <section class="benefits-section">
      <div class="head-box">
        <h3>GET YOUR FREEBIE TEMPLATE NOW</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore debitis deleniti, molestiae consectetur error ducimus atque numquam recusandae sint. Nesciunt earum tempore unde dolores ab, velit labore repellat voluptatibus rem.</p>
      </div>
      <div class="benefits-wrapper">
        <article>
          <figure>
            <img src="../assets/img/hairdresser_big.png" alt="">
          </figure>
          <h4>Hairdresser/barber</h4>
          <p>We have built our own blockchain protocol, and modular building blocks to.</p>
          <el-button plain>
            Pokaż szczegóły
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </article>
        <article>
          <figure>
            <img src="../assets/img/makeup_big.png" alt="">
          </figure>
          <h4>Makeup</h4>
          <p>We have built our own blockchain protocol, and modular building blocks to.</p>
          <el-button plain>
            Pokaż szczegóły
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </article>
      </div>
      <div class="clear"></div>
    </section>
  </span>
</template>

<script>

import PlacesList from '../containers/PlacesList'

export default {
  name: 'MainPage',
  data () {
    return {
      markers: []
    }
  },
  mounted(){
    this.markers = this.$store.placesStore.getters.loadMarkersList;
  },
  components: {
    PlacesList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header-section{
    min-height: 94vh;
    background: url('../assets/img/header.jpg');
    background-size: cover;
    background-position: 100%;
    background-attachment: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .head-box{
      background: rgba(#fff, 0.7);
      width: 1000px;
      padding: 20px 140px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 94vh;

      h1{
        margin-bottom: 20px;
      }

      h3{
        margin-bottom: 20px;
      }
    }
  }

  .places-card-section{
    padding: 150px 0;
    position: relative;
    background: #EEF1F6;
    overflow: hidden;

    &:after{
      content: '';
      z-index: 0;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 294px;
      background: url('../assets/img/header-bg.png') no-repeat;
      position: absolute;
    }

    h3{
      text-align: center;
      margin-bottom: 80px;
    }

    #places-list{
      z-index: 20;
    }
  }

  .offer-section{
    padding: 150px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .head-box{
      width: 900px;
      margin-bottom: 200px;
    }

    .offer-wrapper{
      display: flex;

      article{
        width: 950px;

        h1{
          margin-bottom: 20px;
        }
      }

      figure{
        width: 400px;
        position: relative;

        &:after{
          content: '';
          z-index: 0;
          bottom: -80px;
          left: -200px;
          width: 400px;
          height: 100%;
          z-index: -1;
          background: url('../assets/img/boy.jpg') no-repeat;
          background-size: cover;
          background-position: left;
          position: absolute;

        }

        img{
          width: 100%
        }
      }
    }
  }

  .find-section{
    padding: 150px 0;


    .head-box{
      margin: 0 auto;
      width: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      figure{
        width: 800px;
        img{
          width: 100%;
        }
      }

      h4{
        margin: 80px 0 20px 0;
      }
    }
  }

  .benefits-section{
    padding: 250px 0;
    background: #EEF1F6;
    position: relative;
    overflow: hidden;

    &:after, &:before{
      content: '';
      z-index: 0;
      left: 0;
      width: 100%;
      height: 294px;
      background: url('../assets/img/header-bg.png') no-repeat;
      position: absolute;
    }

    &:after{
      top: -50px;
      transform: rotate(180deg);
    }

    &:before{
      bottom: 0px;
    }

    .head-box{
      width: 800px;
      margin: 0 auto 50px auto;

      h3{
        margin-bottom: 20px;
        text-align: center;
      }
    }

    .benefits-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;

      article{
        width: 300px;
        padding: 20px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p{
          text-align: center;
          margin: 10px 0;
        }

        figure{
          width: 100%;
          padding: 40px;
          img{
            width: 100%;
          }
        }
      }
    }
  }

</style>
