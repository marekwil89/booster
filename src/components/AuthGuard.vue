<template>
  <span id="auth-guard">
    <slot v-if="hasPermissions"></slot>
    <section v-else class="auth-section">
      <el-alert
        title="Uwaga"
        type="warning"
        :description="errorMessage"
      >
      </el-alert>
    </section>
  </span>
</template>

<script>
import { WARNINGS } from '../helpers/constants';

export default {
  name: 'AuthGuard',
  data() {
    return {
      warnings: WARNINGS,
    };
  },
  props: {
    permissions: Array,
    message: String,
  },
  computed: {
    hasPermissions(){
      return this.permissions && this.logedUser.permissions.some(elem => this.permissions.indexOf(elem) > -1);
    },
    logedUser(){
      return this.$store.userStore.getters.loadLogedUser;
    },
    errorMessage(){
      return this.message && this.warnings[this.message];
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #auth-guard{
    .auth-section{
      padding: 20px;
    }
  }
</style>
