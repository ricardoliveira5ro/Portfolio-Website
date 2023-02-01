import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  private url = 'https://mailthis.to/ricardo5ro'
  constructor(private http: HttpClient) { }

  SendEmail(input: any) {
    return this.http.post(this.url, input, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response
          }
        },
        (error) => {
          return error
        }
      )
    )
  }
}
