export class Experience {
    title: string;
    startDate: number;  
    endDate: string | number;  
    description: string;
    type: ExperienceType;

    constructor(title: string, startDate: number, endDate: string | number, description: string, type: ExperienceType) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.type = type;
    }
}

export enum ExperienceType {
    Education,
    Job
}

