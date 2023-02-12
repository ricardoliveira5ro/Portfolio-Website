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
      new Project(1,'Portfolio Website', 'My portfolio website, SEO friendly and summarizes my experiences and personal projects.', [
          'My portfolio website designed to portray an interactive résumé summarizing my personal projects and experience.',
          'I used Figma as a prototyping tool in the early stages to define requirements and design the application style.',
          'To build the website I chose to implement Angular framework for a single-page client application, splitting the code into components to increase speed and performance. Also used Tailwind to simplify CSS usage and keep style files small.',
          'Embraced a services-data approach for easier maintenance and dynamic data.',
          'The source code is available on my GitHub repository, which I used for version control and to host the website early on.'
        ],
        'https://ik.imagekit.io/ricardo5ro/projects/site.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676159821723', [
        new Technology('Angular', 'https://ik.imagekit.io/ricardo5ro/technologies/angular.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676159821725'),
        new Technology('TailwindCSS', 'https://ik.imagekit.io/ricardo5ro/technologies/tailwindcss.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676159821496')],
        true),
      new Project(2,'Expense Tracker', 'TRACKER:  An idea in progress...', [], 'https://ik.imagekit.io/ricardo5ro/projects/coming_soon.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676159821477', [], false)
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

