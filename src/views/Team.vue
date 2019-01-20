<template>
  <div class="team">
  
    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 my-3>
          <h1 class="subheading grey--text">{{$t('route.team')}}</h1>
       </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span class="">${{'team.send.message'}}</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { PersonModel } from '@/model/PersonModel';

@Component
export default class Team extends Vue {

  private team: PersonModel[] = [
    new PersonModel('1', 'Mario', 'Web developer', '/avatar-1.png'),
    new PersonModel('2', 'Ryu', 'Graphic designer', '/avatar-2.png'),
    new PersonModel('3', 'Chun Li', 'Web developer', '/avatar-3.png'),
    new PersonModel('4', 'Gouken', 'Social media maverick', '/avatar-4.png'),
    new PersonModel('5', 'Yoshi', 'Sales guru', '/avatar-5.png'),
  ]
}
</script>