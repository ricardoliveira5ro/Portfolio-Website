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
      new Project(1, 'Portfolio Website', 'My portfolio website, SEO friendly and summarizes my experiences and personal projects.', [
          'My portfolio website designed to portray an interactive résumé summarizing my personal projects and experience.',
          'I used Figma as a prototyping tool in the early stages to define requirements and design the application style.',
          'To build the website I chose to implement Angular framework for a single-page client application, splitting the code into components to increase speed and performance. Also used Tailwind to simplify CSS usage and keep style files small.',
          'Embraced a services-data approach for easier maintenance and dynamic data.',
          'The source code is available on my GitHub repository, which I used for version control and to host the website early on.'
        ],
        '../../assets/images/projects/site.png', [
        new Technology('Angular', '../../assets/images/technologies/angular.png'),
        new Technology('TailwindCSS', '../../assets/images/technologies/tailwindcss.png')],
        true),
      new Project(2, 'Tracker', 'TRACKER:  An idea in progress...', [], '../../assets/images/projects/coming_soon.jpg', [], false)
    ]

    return list;
  }

  public getProjectById(id: number) {
    return this.getProjectsList().find(element => element.id === id);
  }
}

