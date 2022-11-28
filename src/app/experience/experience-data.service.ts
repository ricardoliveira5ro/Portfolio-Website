import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from './certification.class';
import { Experience, ExperienceType } from './experience.class';

@Injectable({
  providedIn: 'root'
})
export class ExperienceDataService {

  constructor(private client: HttpClient){}

  public getExperienceList() {
    let list: Experience[];
    list = [
      new Experience('Computer Engineering Degree', 2019, 2022, 'I have studied a variety of algorithm principles and programming languages, used tools and software, and built useful projects in order to deepen my knowledge', ExperienceType.Education),
      new Experience('Technical Consultant at CGI', 2022, 'Present', 'Worked as a front-end and back-end developer on a few projects using Java, Groovy, and SQL', ExperienceType.Job)
    ]

    return list;
  }

  public getCertificationsList() {
    let list: Certification[];
    list = [
      new Certification('Python - Scientific Computing', '../../assets/images/certifications/python.png', 2022, 'FreeCodeCamp'),
      new Certification('Angular - The Complete Guide', '../../assets/images/certifications/angular.png', 2022, 'Udemy'),
      new Certification('Apache Groovy Developer', '../../assets/images/certifications/groovy.png', 2022, 'Udemy')
    ]

    return list;
  }

  download(url: string): Observable<Blob> {
    return this.client.get(url, {
      responseType: 'blob'
    })
  }

}
