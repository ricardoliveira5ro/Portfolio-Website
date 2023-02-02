import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FadeIn } from '../app.routing.animation';
import { EmailService } from '../services/email.service';
import { keys } from '../../../untracked'
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router, private builder: FormBuilder, private email: EmailService, private http: HttpClient) { }

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

    this.http.post(keys.formspree, data)
      .subscribe(response => {
        this.successAlert = true;
        setTimeout(action =>
          this.successAlert = false
          , 7000)

      }, error => {
        this.errorAlert = true;
        setTimeout(action =>
          this.errorAlert = false
          , 7000)
      });
  }

  home() {
    this.router.navigate(['']);
  }
}
