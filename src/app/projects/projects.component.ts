import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ProjectsDataService) {
    this.projectsList = this.service.getProjectsList();
    this.nextSection = "About"
  }

  ngOnInit(): void {
  }

}
