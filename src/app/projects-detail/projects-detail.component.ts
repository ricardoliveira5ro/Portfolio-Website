import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FadeIn } from '../app.routing.animation';
import { Project } from '../models/project.class';
import { ProjectsDataService } from '../services/projects-data.service';


@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.css', './media-queries.css'],
  animations: [FadeIn(500, true)]
})
export class ProjectsDetailComponent implements OnInit {

  activatedProject: Project;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ProjectsDataService) { }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedProject = this.service.getProjectById(id);


    //Manually URL id doesnt match
    if(this.activatedProject === undefined || !this.isProjectValid())
      this.router.navigate(['/projects'])
  }

  isProjectValid() {
    return this.activatedProject.listable;
  }
}
