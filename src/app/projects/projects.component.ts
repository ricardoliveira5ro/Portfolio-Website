import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project.class';
import { ProjectsDataService } from '../services/projects-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './media-queries.css']
})
export class ProjectsComponent implements OnInit {

  projectsList: Project[];
  nextSection: string;

  constructor(private service: ProjectsDataService, private router: Router) {
    this.projectsList = this.service.getProjectsList();
    this.nextSection = "About"
  }

  ngOnInit(): void {
  }

  selectedProject(id: number) {
    this.router.navigate(['/project', id]);
  }

}
