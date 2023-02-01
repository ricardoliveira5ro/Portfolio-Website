import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FadeIn } from '../app.routing.animation';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css', './media-queries.css'],
  animations: [FadeIn(500, true)]
})
export class ContactsComponent implements OnInit {

  FormData: FormGroup;
  successAlert = false;
  errorAlert = false;

  constructor(private router: Router, private builder: FormBuilder, private email: EmailService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData) {
    console.log("KEY: " + environment.sendGrid)
    /*
    this.email.SendEmail(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        this.successAlert = true;
        this.FormData.reset();        
        setTimeout(action =>
          this.successAlert = false
          , 7000)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })

        this.FormData.reset();

        this.errorAlert = true;
        setTimeout(action =>
          this.errorAlert = false
          , 7000)      
      })*/
  }

  home() {
    this.router.navigate(['']);
  }
}
