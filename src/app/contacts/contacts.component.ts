import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css', './media-queries.css']
})
export class ContactsComponent implements OnInit {

  FormData: FormGroup;

  constructor(private router: Router, private builder: FormBuilder, private email: EmailService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData) {
    this.email.SendEmail(FormData)
      .subscribe(response => {
        
        //location.href = 'https://mailthis.to/confirm'
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  home() {
    this.router.navigate(['']);
  }
}
