import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FadeIn } from '../app.routing.animation';
import { AboutTechnology } from '../models/about-technology';
import { AboutDataService } from '../services/about-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './media-queries.css'],
  animations: [FadeIn(500, true)]
})
export class AboutComponent implements OnInit {

  technologies: AboutTechnology[];

  constructor(private router: Router, private service: AboutDataService) { 
    this.technologies = service.getAboutTechnologies();
    
  }

  ngOnInit(): void {

  }

  getAge() {
    return moment().diff(new Date(2001, 6, 28), 'years');
  }

  nextSection() {
    this.router.navigate(['contacts']);
  }

  home() {
    this.router.navigate(['']);
  }

}
