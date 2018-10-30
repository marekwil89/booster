<template>
  <el-card shadow="hover" class="box-card">
    <el-form :model="model" class="form" label-width="150px">
      <div class="input-box">
        <el-form-item label="Wybierz miasto:">
          <el-select
            v-model="model.selectedCity"
            filterable
            reserve-keyword
            placeholder="Warszawa"
            :loading="loading">
            <el-option
              v-for="elem in cities"
              :key="elem"
              :label="elem"
              :value="elem">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Wyznacz kateogrię:">
          <el-checkbox-group size="small" v-model="model.selectedCategories">
            <el-checkbox-button
              v-for="elem in categories"
              :class="`${onCategoryCompare(elem)}`"
              :key="elem"
              :label="elem"
              name="type"
            ></el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button @click="onSubmit" plain>Filtruj</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>

import { CATEGORIES, CITIES } from '../helpers/constants';
import { categoryCompare } from "../helpers/categoryCompare";

export default { 
  name: 'SearchBarForm',
  data() {
    return {
      model: {
        selectedCity: '',
        selectedCategories: [],
      },
      loading: false,
      categories: Object.values(CATEGORIES),
      cities: Object.values(CITIES),
    };
  },
  methods: {
    onCategoryCompare(category) {
      return categoryCompare(category);
    },
    onSubmit() {
      // eslint-disable-next-line
      console.log(this.model);
    }
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
  },
}
</script>

<style lang="scss" scoped>
  .box-card{
    // margin: 20px 0;

    .form{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  // .form-inline{
  //   display: flex;
  //   height: 100%;
  //   justify-content: flex-start;
  //   align-items: center;

  //   .el-form-item{
  //     margin: 10px;
  //     // margin-bottom: 0;
  //   }
  // }

</style>
