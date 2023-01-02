import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDataService } from './services/experience-data.service'
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ExperienceComponent,
    ScrollDownComponent,
    ProjectsComponent,
    ProjectsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ExperienceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
