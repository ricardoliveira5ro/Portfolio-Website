import { Injectable } from '@angular/core';
import { Project } from '../models/project.class';
import { Technology } from '../models/technology.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  constructor() { }

  public getProjectsList() {
    let list: Project[];

    list = [
      new Project(1,'Portfolio Website', 'My portfolio website, summarizes my experiences and personal projects.', [
          'My portfolio website designed to portray an interactive résumé summarizing my personal projects and experience.',
          'I used Figma as a prototyping tool in the early stages to define requirements and design the application style.',
          'To build the website I chose to implement Angular framework for a single-page client application, splitting the code into components to increase speed and performance. Also used Tailwind to simplify CSS usage and keep style files small.',
          'Embraced a services-data approach for easier maintenance and dynamic data.',
          'The source code is available on my GitHub repository, which I used for version control and to host the website early on.'
        ],
        'https://ik.imagekit.io/ricardo5ro/projects/site.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676159821723', [
        new Technology('Angular', 'https://ik.imagekit.io/ricardo5ro/technologies/angular.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676159821725'),
        new Technology('TailwindCSS', 'https://ik.imagekit.io/ricardo5ro/technologies/tailwindcss.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676159821496')],
        'https://r-oliveira.live/',
        'https://github.com/ricardoliveira5ro/ricardoliveira5ro.github.io',
        true),
      new Project(2,'Absences API',
        'RESTfull .NET Web API representing a simple absence management system', [
          'A simple absence management system, that can be integrated as a back-end software. Manage employee`s information, absences and custom statistics.',
          'C# .NET RESTfull Web API, with all CRUD operations (HTTP requests)',
          'Used Entity framework, SQL Server and Repository Pattern for database context and manipulation',
          'DTOs and AutoMapper according to each request with exception handler and validators for input',
          'Built locally only, the source code is available on GitHub and can be cloned, used and modified'
        ],
        'https://ik.imagekit.io/ricardo5ro/projects/AbsencesAPI.png?updatedAt=1679652954842', [
          new Technology('C#', 'https://ik.imagekit.io/ricardo5ro/technologies/csharp.png?updatedAt=1679653322122'),
          new Technology('.NET', 'https://ik.imagekit.io/ricardo5ro/technologies/dotNetCore.png?updatedAt=1679653618365')],
        '',
        'https://github.com/ricardoliveira5ro/AbsencesAPI',
        true)
    ]

    return list;
  }

  public getProjectById(id: number) {
    return this.getProjectsList().find(element => element.id === id);
  }

  public getProjectByName(name: string) {
    return this.getProjectsList().find(element => element.name === name);
  }

}

