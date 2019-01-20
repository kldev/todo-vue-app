<template>
 <div class="projects">
  
    <v-container class="my-3">
       
       <v-flex xs12 my-3>
          <h1 class="subheading grey--text"> {{$t('projects.title')}} </h1>

       </v-flex>

      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in projects" :key="project.title">
          <div slot="header" class="py-1">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold"> {{ $t('projects.due.by', {due: project.due}) }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
export default class Projects extends Vue {

  mounted() {
    this.$store.dispatch(`${namespace}/${loadProjects}`);
  }

  get projects(): ProjectModel[] {
    return this.$store.getters[`${namespace}/${getProjects}`] as ProjectModel[];
  }


}
</script>