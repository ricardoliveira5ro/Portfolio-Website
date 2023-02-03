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
      new AboutTechnology("Java", 100),
      new AboutTechnology("Angular", 97),
      new AboutTechnology("SQL", 91),
      new AboutTechnology("C# / .NET", 85),
      new AboutTechnology("HTML / CSS", 84),
      new AboutTechnology("Javascript / Typescript", 78)
    ]

    return list;
  }
}
