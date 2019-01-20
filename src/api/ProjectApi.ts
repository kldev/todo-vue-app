
import {ProjectModel } from '@/model/ProjectModel';

class ProjectApi {
    constructor(private projects: ProjectModel[] = []) {

        //  tslint:disable-next-line:no-string-literal
        if (window.localStorage && localStorage['projects'] !== undefined) {
            // tslint:disable-next-line:no-string-literal
            this.projects = JSON.parse(window.localStorage['projects']);
        }

    }

    public list(): Promise<ProjectModel[]> {
        return new Promise<ProjectModel[]>(
            (resolve) => {
                resolve(this.projects);
            },
        );
    }

    public add(project: ProjectModel): Promise<string> {
        return new Promise<string>(
            (resolve ) => {

                project.id = `${this.projects.length + 1}`;
                this.projects.push(project);

                this.fakeSave();
                resolve('success');
            },
        );
    }

    public remove(id: string): Promise<string> {
        return new Promise<string>(
            (resolve ) => {
                this.projects = this.projects.filter( (item) => item.id === id);

                this.fakeSave();
                resolve('success');
            },
         );
    }

    private fakeSave() {
        if (window.localStorage) {
            // tslint:disable-next-line:no-string-literal
            localStorage['projects'] = JSON.stringify(this.projects);
        }
    }

}

export default new ProjectApi();
