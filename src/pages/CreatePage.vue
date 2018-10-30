<template>
  <AuthGuard :permissions="['salon-manage']" message="LOGIN">
    <span id="create-page">
      <section class="create-section">
        <div class="create-box">
          <el-card
            class="box-card"
          >
            <h4 class="font-light">Dodawanie nowego salonu</h4>
            <el-form :model="model" :rules="rules" label-width="140px">
              <span>
                <el-form-item label="Nazwa salonu" prop="name">
                  <el-input placeholder="marek89" @blur="handleBlur" v-model="model.name"></el-input>
                  <pre class="el-form-item__error">{{blurError}}</pre>
                </el-form-item>
                <GoogleMap 
                   type="placesCreate"
                />
              </span>
              <div class="button-box">
                <el-button plain>
                  Dodaj salon
                  <i class="el-icon-arrow-right"></i>
                </el-button>
              </div>
            </el-form>
          </el-card>
        </div>
      </section>
    </span>
  </AuthGuard>
</template>

<script>

import AuthGuard from '../components/AuthGuard';
import GoogleMap from '../containers/GoogleMap'

export default {
  name: 'CreatePage',
  data() {
    return {
      model: {
        name: '',
      },
      rules: {
        name: [
          { required: true, message: 'Please input activity form', trigger: 'blur' }
        ]
      },
      blurError: '',
    };
  },
  // mounted() {
  //   this.geolocate();
  // },
  methods: {
    handleSelect(item) {
      // eslint-disable-next-line
      console.log(item);
    },
    handleBlur(item) {
      item.target.value ? this.blurError = 'Nazwa tego salonu już istnieje' : this.blurError = '';
    },
  },
  beforeMount(){
    // this.markers = this.$store.getters.loadMarkersList;
  },
  components: {
    GoogleMap,
    AuthGuard,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #create-page{
    .create-section{
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

      .create-box{
        margin: 230px 0 260px 0;
        width: 800px;

        .box-card{
          padding: 20px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

          h4{
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
  }
</style>
