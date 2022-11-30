export class Certification {
    title: string;
    imageURL: string;  
    completedDate: number;  
    authBy: string;

    constructor(title: string, imageURL: string, completedDate: number, authBy: string) {
        this.title = title;
        this.imageURL = imageURL;
        this.completedDate = completedDate;
        this.authBy = authBy;
    }
}