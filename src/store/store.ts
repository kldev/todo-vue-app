import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
Vue.use(Vuex);
import { AppModule } from './appModule/module';

const store: StoreOptions<{}> = {

    modules: {
        AppModule,
    },
};



export default new Store<{}>(store);