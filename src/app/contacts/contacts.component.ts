import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FadeIn } from '../app.routing.animation';
import { keys } from '../../../untracked'
import { HttpClient } from '@angular/common/http';
import { ExperienceDataService } from '../services/experience-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css', './media-queries.css'],
  animations: [FadeIn(500, true)]
})
export class ContactsComponent implements OnInit {

  FormData: FormGroup;
  loading = false;
  successAlert = false;
  errorAlert = false;

  constructor(private router: Router, private builder: FormBuilder, private http: HttpClient, private service: ExperienceDataService,) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData) {
    const data = {
      name: FormData.get('Name').value,
      email: FormData.get('EmailAddress').value,
      message: FormData.get('Message').value
    };
    this.FormData.reset()

    this.loading = true;
    document.getElementById('body').style.overflow = 'hidden';    

    this.http.post(keys.formspree_prod, data)
      .subscribe(() => {
        this.loading = false;
        document.getElementById('body').style.overflow = 'auto';  

        this.successAlert = true;
        setTimeout(action =>
          this.successAlert = false
          , 7000)
      }, (error) => {
        this.loading = false;
        document.getElementById('body').style.overflow = 'auto';  

        this.errorAlert = true;
        setTimeout(action =>
          this.errorAlert = false
          , 7000)
      });
  }

  home() {
    this.router.navigate(['']);
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
