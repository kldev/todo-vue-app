import Vue from 'vue';
import Vuex, { Action, ActionContext, Module, ActionTree, MutationTree, GetterTree } from 'vuex';

// import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

export interface IAppState {
    drawer: boolean;
}

interface IAppMutations extends MutationTree<IAppState> {
    [mutations.setDrawer](state: IAppState, payload: boolean): void;
}

interface IAppGetters extends GetterTree<IAppState, {}> {
    [getters.getDrawer](state: IAppState): boolean;
}

const AppMutations: IAppMutations = {
    [mutations.setDrawer](state, payload) {
        state.drawer = payload;
    },
};

const AppGetters: IAppGetters = {
    [getters.getDrawer](state): boolean {
        return state.drawer;
    },
};

export const AppModule: Module<IAppState, {}> = {
    namespaced: true,
    mutations: AppMutations,
    getters: AppGetters,
};
