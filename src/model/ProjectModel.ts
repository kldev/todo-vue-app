export class ProjectModel {
    constructor(public id: string = '',
                public title: string = '',
                public person: string = '',
                public due: string = '',
                public content: string = '',
                public status: string = 'ongoing') {
    }
}
