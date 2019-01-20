import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
Vue.use(Vuex);
import { appModule } from './appModule/module';
import { projectModule } from './projectModule/module';

const store: StoreOptions<{}> = {

    modules: {
        appModule,
        projectModule,
    },
};


export default new Store<{}>(store);
