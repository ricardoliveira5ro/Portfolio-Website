import { Technology } from "./technology.class";

export class Project {
    name: string;
    title: string;
    description: string;
    imageURL: string;
    technologies: Technology[];
    listable: boolean;

    constructor(name: string, title: string, description: string, imageURL: string, technologies: Technology[], listable: boolean) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.technologies = technologies;
        this.listable = listable;
    }
}