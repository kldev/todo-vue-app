<template>
  <div class="dashboard">
   

    <v-container class="my-5">

       <v-flex xs12 my-3>
        <h1 class="subheading grey--text">{{$t('route.dashboard')}}</h1>
       </v-flex>

      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="onChangeSortBy('title')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase"> {{ $t('dashboard.by.project.name') }} </span>
          </v-btn>
          <span>{{ $t('dashboard.sort.by.project.name') }} </span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="onChangeSortBy('person')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase"> {{ $t('dashboard.by.person') }}</span>
          </v-btn>
          <span> {{ $t('dashboard.sort.by.person') }}</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text"> {{ $t('dashboard.project.title')}} </div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text"> {{ $t('dashboard.person')}} </div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text"> {{ $t('dashboard.due.by')}} </div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
   
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { loadProjects } from '@/store/projectModule/actions';
import { getProjects } from '@/store/projectModule/getters';
import { namespace } from '@/store/projectModule/namespace';
import { ProjectModel } from '@/model/ProjectModel';


@Component
export default class Dashboard extends Vue {

  private sortBy: string = 'person';

  mounted() {
    this.$store.dispatch(`${namespace}/${loadProjects}`);
  }

  onChangeSortBy(value: string): void {
    this.sortBy = value;
  } 

  get projects(): ProjectModel[] {
    const list = this.$store.getters[`${namespace}/${getProjects}`] as ProjectModel[];

    if (this.sortBy == 'person') {
      return list.sort( (a, b) => a.person > b.person ? -1 : 1);
    }

    if (this.sortBy == 'title') {
      return list.sort( (a, b) => a.title > b.title ? -1 : 1);
    }

    return list;
   
  }


}
</script>

<style scoped>

.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}

</style>
