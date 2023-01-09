import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.class';
import { ProjectsDataService } from '../services/projects-data.service';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.css', './media-queries.css']
})
export class ProjectsDetailComponent implements OnInit {

  activatedProject: Project;

  constructor(private route: ActivatedRoute, private service: ProjectsDataService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.activatedProject = this.service.getProjectById(id);
  }

}
