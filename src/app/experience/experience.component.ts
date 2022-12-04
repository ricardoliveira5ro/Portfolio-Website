import { Component, OnInit } from '@angular/core';
import { Certification } from '../models/certification.class';
import { ExperienceDataService } from '../services/experience-data.service';
import { Experience, ExperienceType } from '../models/experience.class';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', './media-queries.css']
})
export class ExperienceComponent implements OnInit {

  experienceList: Experience[];
  certificationList: Certification[];

  nextSection: string;

  constructor(private service: ExperienceDataService) {
    this.experienceList = this.service.getExperienceList();
    this.certificationList = this.service.getCertificationsList();
    this.nextSection = "Projects"
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

}
  