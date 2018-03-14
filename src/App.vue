<template>
  <div id="app" class="app">
    <div class="app-sidebar">
      <nav class="main-nav">
        <ul class="menu">
          <li class="menu-item" v-for="menuItem in menu">
            <a href="#">{{menuItem}}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import dataService from '@/services/dataService.js';

  export default {
      name: 'app',
      data () {
        return {
          menu: [],
        }
      },
      created: function () {
        this.menu = dataService.menu;

        let routeArea = this.$route.params.area ? this.$route.params.area : dataService.sections[0].name.toLowerCase() ;

        this.$router.push({ 
          name: this.menu[0].toLowerCase(), 
          params: { area: routeArea }
        });

      }
    }
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
