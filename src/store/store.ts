import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
Vue.use(Vuex);
import { appModule } from './appModule/module';

const store: StoreOptions<{}> = {

    modules: {
        appModule,
    },
};


export default new Store<{}>(store);
