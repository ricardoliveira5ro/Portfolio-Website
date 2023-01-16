import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './media-queries.css']
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
        this.router.navigate(['about']);
        break;
      case 4:
        this.router.navigate(['contacts']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

  sideMenu() {
    document.getElementById('side').style.display = 'inline';
    document.getElementById('body').style.overflow = 'hidden';
    this.isModalOpen = true;
  }

  closeModal(event) {
    if(+event.clientX < (window.innerWidth - 240) && this.isModalOpen) {
      document.getElementById('side').style.display = 'none';
      document.getElementById('body').style.overflow = 'auto';
    }
  }
}
