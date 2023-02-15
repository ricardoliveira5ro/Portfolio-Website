import { Technology } from "./technology.class";

export class Project {
    id: number;
    name: string;
    title: string;
    description: string[];
    imageURL: string;
    technologies: Technology[];
    demoURL: string;
    repositoryURL: string;
    listable: boolean;

    constructor(id: number, name: string, title: string, description: string[], imageURL: string, technologies: Technology[], demoURL: string, repositoryURL: string, listable: boolean) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.technologies = technologies;
        this.demoURL = demoURL;
        this.repositoryURL = repositoryURL;
        this.listable = listable;
    }
}