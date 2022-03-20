<template>
    <div>
        <!-- <h1>This is home page</h1> -->
        <!-- <app-header></app-header> -->
        <HeaderVue/>
        <div class="container">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderVue from "./components/Header.vue"

export default {
  name: 'App',
  components: {
     HeaderVue
  }
}
</script>

<style>

</style>
