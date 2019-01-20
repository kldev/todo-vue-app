import { ActionContext, Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import { ProjectModel } from '@/model/ProjectModel';
import projectApi from '@/api/ProjectApi';

export interface IProjectState {
    loading: boolean;
    projects: ProjectModel[];
    selectedProject: ProjectModel;
}

interface IProjectActions extends ActionTree<IProjectState, {}> {
    [actions.loadProjects]( context: ActionContext<IProjectState, {}>): void;
    [actions.addProject]( context: ActionContext<IProjectState, {}>): void;
    [actions.removeProject]( context: ActionContext<IProjectState, {}>, payload: string): void;
}

interface IProjectMutations extends MutationTree<IProjectState> {
    [mutations.setLoading]( state: IProjectState, payload: boolean): void;
    [mutations.setProjects]( state: IProjectState, payload: ProjectModel[]): void;
    [mutations.setSelectedProject]( state: IProjectState, payload: ProjectModel): void;
}

interface IProjectGetters extends GetterTree<IProjectState, {}> {
    [getters.getLoading]( state: IProjectState): boolean;
    [getters.getProjects]( state: IProjectState): ProjectModel[];
    [getters.getSelectedProject]( state: IProjectState): ProjectModel;
}


const ProjectState: IProjectState = {
    loading: false,
    projects: [],
    selectedProject: new ProjectModel(),
};

const ProjectActions: IProjectActions = {
    [actions.loadProjects]( { commit }): void {

        projectApi.list().then(
            (resolve) => {
                commit(mutations.setProjects, resolve);
            },
        );
    },

    [actions.addProject]( { commit, dispatch, state }): void {
        projectApi.add(state.selectedProject).then(
            (resolve) => {
                dispatch(actions.loadProjects);
                commit(mutations.setSelectedProject, new ProjectModel());
            },
        );
    },

    [actions.removeProject]( { dispatch, commit }, id ): void {
        projectApi.remove(id).then(
            (resolve) => {
                dispatch(actions.loadProjects);
                commit(mutations.setSelectedProject, new ProjectModel());
            },
        );
    },
};

const ProjectMutations: IProjectMutations = {
    [mutations.setLoading](state, payload): void {
        state.loading = payload;
    },
    [mutations.setProjects](state, payload): void {
        state.projects = payload;
    },
    [mutations.setSelectedProject](state, payload): void {
        state.selectedProject = payload;
    },
};

const ProjectGetters: IProjectGetters = {
    [getters.getLoading](state): boolean {
        return state.loading;
    },

    [getters.getProjects](state): ProjectModel[] {
        return state.projects;
    },

    [getters.getSelectedProject](state): ProjectModel {
        return state.selectedProject;
    },
};

export const projectModule: Module<IProjectState, {}> = {
    namespaced: true,
    state: ProjectState,
    actions: ProjectActions,
    mutations: ProjectMutations,
    getters: ProjectGetters,
};
