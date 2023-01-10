import { Technology } from "./technology.class";

export class Project {
    [x: string]: any;
    id: number;
    name: string;
    title: string;
    description: string[];
    imageURL: string;
    technologies: Technology[];
    listable: boolean;

    constructor(id: number, name: string, title: string, description: string[], imageURL: string, technologies: Technology[], listable: boolean) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.technologies = technologies;
        this.listable = listable;
    }
}