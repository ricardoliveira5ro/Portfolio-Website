import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FadeIn } from '../app.routing.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './media-queries.css'],
  animations: [FadeIn(800, true)]
})
export class HomeComponent implements OnInit {

  isModalOpen: boolean;

  constructor(private router: Router) { 
    this.isModalOpen = false;
  }

  ngOnInit(): void {
    
  }

  nextSection() {
    this.router.navigate(['experience']);
  }

  goToSection(x: number) {
    switch (x) {
      case 1:
        this.router.navigate(['experience']);
        break;
      case 2:
        this.router.navigate(['projects']);
        break;
      case 3:
        this.router.navigate(['about-me']);
        break;
      case 4:
        this.router.navigate(['contacts']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
    document.getElementById('body').style.overflow = 'auto';
  }

  sideMenu() {
    if(!this.isModalOpen) {
      document.getElementById('side').style.display = 'inline';
      document.getElementById('body').style.overflow = 'hidden';
      this.isModalOpen = true;
    }
  }

  closeModal(event) {
    if(+event.clientX < (document.documentElement.clientWidth - 224) && this.isModalOpen) {
      document.getElementById('side').style.display = 'none';
      document.getElementById('body').style.overflow = 'auto';
      this.isModalOpen = false;
    }
  }
}
