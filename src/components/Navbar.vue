<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span> {{ $t('navbar.project.added') }}</span>
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"> {{ $t('app.title.todo') }} </span>
        <span> {{ $t('app.title.vue') }} </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>{{ $t('navbar.menu') }}</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" @click.stop="onPushRoute(link.route)">
            <v-list-tile-title>{{ $t(link.text) }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat color="grey">
        <span> {{ $t('action.sign.out') }} </span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-1.png">
          </v-avatar>
          <p class="white--text subheading mt-1"> {{ $t('demo.user') }} </p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
            <!--
          <Popup @projectAdded="snackbar = true" />
          -->
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" @click.stop="onPushRoute(link.route)">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ $t(link.text) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namesapce } from '@/store/appModule/namespace';
import { getDrawer } from '@/store/appModule/getters';
import { setDrawer } from '@/store/appModule/mutations';
import { pushRoute } from '@/store/appModule/actions';
 
interface LinkItem {
  text: string,
  route: string,
  icon: string,
}

@Component
export default class Navbar extends Vue {

    private snackbar: boolean = false;
    private links: LinkItem[] = [
      { icon: 'dashboard', text: 'route.dashboard', route: '/'},
      { icon: 'folder', text: 'route.my.projects', route: '/projects'},
      { icon: 'person', text: 'route.team', route: '/team'},
    ];

    get drawer(): boolean {
        return this.$store.getters[`${namesapce}/${getDrawer}`] as boolean;
    }

    set drawer(value: boolean) {
        this.$store.commit(`${namesapce}/${setDrawer}`, value);
    }

    private onPushRoute(route: string): void {
      this.$store.dispatch(`${namesapce}/${pushRoute}`, route);
    }


    
}

</script>
