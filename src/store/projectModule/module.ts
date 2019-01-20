import { ActionContext, Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import { ProjectModel } from '@/model/ProjectModel';

export interface IProjectState {
    loading: boolean;
    projects: ProjectModel[];
}

interface IProjectActions extends ActionTree<IProjectState, {}> {

}

interface IProjectMutations extends MutationTree<IProjectState> {

}

interface IProjectGetters extends GetterTree<IProjectState, {}> {

}

const ProjectState: IProjectState = {
    loading: false,
    projects: [],
};

const ProjectActions: IProjectActions = {

};

const ProjectMutations: IProjectMutations = {

};

const ProjectGetters: IProjectGetters = {

};

export const projectModule: Module<IProjectState, {}> = {
    namespaced: true,
    state: ProjectState,
    actions: ProjectActions,
    mutations: ProjectMutations,
    getters: ProjectGetters,
};
