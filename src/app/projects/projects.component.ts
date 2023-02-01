import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FadeIn } from '../app.routing.animation';
import { Project } from '../models/project.class';
import { ProjectsDataService } from '../services/projects-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './media-queries.css'],
  animations: [FadeIn(500, true)]
})
export class ProjectsComponent implements OnInit {

  projectsList: Project[];
  constructor(private service: ProjectsDataService, private router: Router) {
    this.projectsList = this.service.getProjectsList();
  }

  ngOnInit(): void {
  }

  selectedProject(id: number) {
    this.router.navigate(['projects', id]);
    //this.router.navigate(['projects/project-detail'], { queryParams: { id: id, name: name } });
  }

  nextSection() {
    this.router.navigate(['about-me']);
  }

  home() {
    this.router.navigate(['']);
  }

}
