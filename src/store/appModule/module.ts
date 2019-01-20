import { ActionContext, Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import AppRouter from '@/router';


import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

export interface IAppState {
    drawer: boolean;
}


interface IAppActions extends ActionTree<IAppState, {}> {
    [actions.pushRoute]( context: ActionContext<IAppState, {}>, payload: string ): void;
}

interface IAppMutations extends MutationTree<IAppState> {
    [mutations.setDrawer](state: IAppState, payload: boolean): void;
}

interface IAppGetters extends GetterTree<IAppState, {}> {
    [getters.getDrawer](state: IAppState): boolean;
}

const AppState: IAppState = {
    drawer: false,
};

const AppActions: IAppActions = {
    [actions.pushRoute]({}, payload: string): void {
        AppRouter.push(payload);
    },
};


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

export const appModule: Module<IAppState, {}> = {
    namespaced: true,
    state: AppState,
    actions: AppActions,
    mutations: AppMutations,
    getters: AppGetters,
};
