import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  @Input('nextSection') nextSection: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['']);
  }

  navigateSection() {
    switch (this.nextSection) {
      case 'Experience':
        this.router.navigate(['experience']);
        break;
      case 'Projects':
        this.router.navigate(['projects']);
        break;
      case 'About':
        this.router.navigate(['about-me']);
        break;
      case 'Contact':
        this.router.navigate(['contacts']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

}
