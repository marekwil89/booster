<template>
  <span id="login-page">
    <section class="login-section">
      <div class="login-box">
        <!-- <Circles/> -->
        <el-card
          class="box-card"
        >
          <h3>Logowanie</h3>
          <el-form :model="model" label-width="160px">
            <span>
              <el-form-item label="Nazwa użytkownika">
                <el-input placeholder="marek89" v-model="model.username"></el-input>
              </el-form-item>          
              <el-form-item label="hasło">
                <el-input placeholder="tajne hasło" v-model="model.password"></el-input>
              </el-form-item>
            </span>
            <div class="button-box">
              <el-button plain>Zaloguj się</el-button>
            </div>
          </el-form>
        </el-card>
      </div>
    </section>
  </span>
</template>

<script>

import Circles from '../components/Circles';

export default { 
  name: 'LoginPage',
  data() {
    return {
      model: {
        username: '',
        password: '',
      },
      loading: false,
    };
  },
  methods: {
    // remoteMethod(query) {
    //   if (query !== '') {
    //     this.loading = true;
    //     setTimeout(() => {
    //       this.loading = false;
    //       this.options4 = this.list.filter(item => {
    //         return item.label.toLowerCase()
    //           .indexOf(query.toLowerCase()) > -1;
    //       });
    //     }, 200);
    //   } else {
    //     this.options4 = [];
    //   }
    // }

    // serviceSearch(queryString, callback) {
    //   const services = this.markers;
    //   const results = queryString ? services.filter(this.createFilter(queryString)) : services;
    //   clearTimeout(this.timeout);
    //   this.timeout = setTimeout(() => {
    //     callback(results);
    //   }, 1000 * Math.random());
    // },
    // citySearch(queryString, callback) {
    //   const cities = this.markers;
    //   const results = queryString ? cities.filter(this.createFilter(queryString)) : cities;
    //   clearTimeout(this.timeout);
    //   this.timeout = setTimeout(() => {
    //     callback(results);
    //   }, 1000 * Math.random());
    // },
    // createFilter(queryString) {
    //   return (link) => {
    //     return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    //   };
    // },
    handleSelect(item) {
      // eslint-disable-next-line
      console.log(item);
    }
  },
  beforeMount(){
    // this.markers = this.$store.getters.loadMarkersList;
  },
  components: {
    Circles,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login-section{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    position: relative;
    background: #EEF1F6;

    &:after{
      content: '';
      z-index: 20;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 294px;
      background: url('../assets/img/header-bg.png') no-repeat;
      position: absolute;
    }

    .login-box{
      margin: 230px 0 260px 0;
      // border: 1px solid blue;
      width: 650px;

      .box-card{
        padding: 20px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

        h3{
          margin-bottom: 40px;
        }
      }

    }

    .button-box{
      display: flex;
      justify-content: flex-end;
      margin: 10px 0 0 0;
    }
  }
</style>
