import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FadeIn } from '../app.routing.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './media-queries.css'],
  animations: [FadeIn(500, true)]
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  getAge() {
    return moment().diff(new Date(2001, 6, 28), 'years');
  }

  nextSection() {
    this.router.navigate(['about-me']);
  }

  home() {
    this.router.navigate(['']);
  }

}
