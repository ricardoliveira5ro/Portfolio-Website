import { Component, HostListener, OnInit } from '@angular/core';
import { Certification } from '../models/certification.class';
import { ExperienceDataService } from '../services/experience-data.service';
import { Experience, ExperienceType } from '../models/experience.class';
import { Router } from '@angular/router';
import { FadeIn } from '../app.routing.animation';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', './media-queries.css'],
  animations: [FadeIn(500, true)]
})
export class ExperienceComponent implements OnInit {

  experienceList: Experience[];
  certificationList: Certification[];

  constructor(private service: ExperienceDataService, private router: Router) {
    this.experienceList = this.service.getExperienceList();
    this.certificationList = this.service.getCertificationsList();
  }

  ngOnInit(): void {

  }

  isEducation(e: Experience) {
    return (e.type == ExperienceType.Education);
  }

  isJob(e: Experience) {
    return (e.type == ExperienceType.Job);
  }

  downloadResume(){
    this.service
      .download('../../assets/CV_RICARDO_OLIVEIRA_EN.pdf')
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'CV_RICARDO_OLIVEIRA.pdf';
        a.click();
        URL.revokeObjectURL(objectUrl);
      })
  }

  nextSection() {
    this.router.navigate(['projects']);
  }

  home() {
    //this.router.navigate(['']);
  }

  
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {    
    this.router.navigate(['']);
  }

}
  