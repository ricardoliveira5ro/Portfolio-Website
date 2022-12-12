import { Injectable } from '@angular/core';
import { Project } from '../models/project.class';
import { Technology } from '../models/technology.class';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {

  constructor() {}

  public getProjectsList() {
    let list: Project[];

    list = [
      new Project('Portfolio', 'My portfolio website, SEO friendly and summarizes my experiences and personal projects.', '', '../../assets/images/projects/site.png', [
            new Technology('Angular', '../../assets/images/technologies/angular.png'), 
            new Technology('Tailwind CSS', '../../assets/images/technologies/tailwindcss.png'),
            new Technology('Github', '../../assets/images/technologies/github.png'),
            new Technology('Figma', '../../assets/images/technologies/figma.png')],
        true),
      new Project('Tracker', 'TRACKER:  An idea in progress...', '', '../../assets/images/projects/coming_soon.jpg', [], false)
    ]

    return list;
  }
}

