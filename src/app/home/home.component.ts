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
    if(!this.isModalOpen) {
      console.log("INNNN");
      document.getElementById('side').style.display = 'block';
      document.getElementById('body').style.overflow = 'hidden';
      this.isModalOpen = true;
    }
  }

  closeModal(event) {
    console.log(+event.clientX)
    console.log((window.innerWidth - 224))
    console.log(window.innerWidth)

    if(+event.clientX < (window.innerWidth - 224) && this.isModalOpen) {
      console.log("To close")
      document.getElementById('side').style.display = 'none';
      document.getElementById('body').style.overflow = 'auto';
      this.isModalOpen = false;
    }
  }
}
