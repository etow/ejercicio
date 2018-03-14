<template>
    <div class="app-content-inner">
        <h1>Tablero de indicadores</h1>

          <ul class="area">
            <li class="area-item" v-for="section in sections">
              <router-link :to="{ name: 'desarrollo', params: { area: section.name.toLowerCase() }}">{{section.name}}</router-link>
            </li>
          </ul>
      
          <div class="kpi-list">
            <div v-for="kpi in kpis" class="kpi" >
              <div class="inner">
                  <div class="name">{{kpi.name}}</div>
                  <div class="value">{{kpi.value}}</div>
                  <div class="limit" v-bind:class="{ 'not-ok': kpi.value > kpi.limit }">{{kpi.limit}} {{kpi.unit}}</div>
              </div>
            </div>
          </div>

        <button class="button add" @click="addKpi()"></button>
      </div>
</template>

<script>
  import dataService from '@/services/dataService.js';

  export default {
      name: 'app',
      data () {
        return {
          currentArea:{},
          sections: [],
          kpis: []
        }
      },
      methods: {
        setArea : function (area) {
          for(let i = 0; i < this.sections.length; i++){
            if(area.toLowerCase() == this.sections[i].name.toLowerCase()){
              this.kpis= this.sections[i].kpis;
              this.currentArea = {
                index: i,
                name: area
              }
            }
          }
        },
        addKpi: function () {
          let limit = Math.floor((Math.random() * 10) + 1);
          let value = Math.floor((Math.random() * 10) + 1);

          let dummy = {
            name: 'Dummy',
            unit: "u",
            limit: limit,
            value: value
          }

          this.sections[this.currentArea.index].kpis.push(dummy);
          this.setArea(this.currentArea.name);
        }
      },
      created: function () {
        this.sections = dataService.sections;
        this.setArea(this.$route.params.area);
      },
      watch:{
          $route (to, from){
              this.setArea(to.params.area);
          }
      } 
    }
</script>