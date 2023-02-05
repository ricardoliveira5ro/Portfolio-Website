export class Certification {
    title: string;
    imageURL: string;  
    completedDate: number;  
    authBy: string;
    url: string;

    constructor(title: string, imageURL: string, completedDate: number, authBy: string, url: string) {
        this.title = title;
        this.imageURL = imageURL;
        this.completedDate = completedDate;
        this.authBy = authBy;
        this.url = url;
    }
}