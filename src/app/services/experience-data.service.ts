import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from '../models/certification.class';
import { Experience, ExperienceType } from '../models/experience.class';

@Injectable({
  providedIn: 'root'
}) 
export class ExperienceDataService {

  constructor(private client: HttpClient){}

  public getExperienceList() {
    let list: Experience[];
    list = [
      new Experience('Computer Science and Engineering Degree', 2019, 2022, 'I have studied a variety of algorithm principles and programming languages, used tools and software, and built useful projects in order to deepen my knowledge', ExperienceType.Education),
      new Experience('Technical Consultant at CGI', 2022, 'Present', 'Worked as a front-end and back-end developer on a few projects using Java, Groovy, and SQL', ExperienceType.Job)
    ]

    return list;
  }

  public getCertificationsList() {
    let list: Certification[];
    list = [
      new Certification('Angular - The Complete Guide', '../../assets/images/certifications/angular.png', 2022, 'Udemy', 'https://www.udemy.com/course/the-complete-guide-to-angular-2/'),
      new Certification('Apache Groovy Developer', '../../assets/images/certifications/groovy.png', 2022, 'Udemy', 'https://www.udemy.com/course/apache-groovy/?src=sac&kw=Apache+Groovy+Developer'),
      new Certification('ASP.NET Core Web API', '../../assets/images/certifications/dotNetCore.png', 2023, 'Udemy', 'https://www.udemy.com/course/aspnet-core-web-api-csharp-dotnet-course-bootcamp/')
    ]

    return list;
  }

  download(url: string): Observable<Blob> {
    return this.client.get(url, {
      responseType: 'blob'
    })
  }

}
