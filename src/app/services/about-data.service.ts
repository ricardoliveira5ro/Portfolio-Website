import { Injectable } from '@angular/core';
import { AboutTechnology } from '../models/about-technology';

@Injectable({
  providedIn: 'root'
})
export class AboutDataService {

  constructor() { }

  getAboutTechnologies() {
    let list: AboutTechnology[];
    
    list = [
      new AboutTechnology("Java"),
      new AboutTechnology("C# / .NET"),
      new AboutTechnology("Angular"),
      new AboutTechnology("Javascript / Typescript"),
      new AboutTechnology("SQL"),
      new AboutTechnology("HTML / CSS")
    ]

    return list;
  }
}
