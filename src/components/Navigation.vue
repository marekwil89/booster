<template>
  <nav>
    <el-menu :router="true" :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="/">Strona główna</el-menu-item>
      <el-menu-item index="/dashboard">Miejsca</el-menu-item>
      <el-menu-item index="/login">Logowanie</el-menu-item>
      <el-menu-item index="/register">Rejestracja</el-menu-item>
      <el-menu-item index="/add-place">Dodaj salon</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      activeIndex: null
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
