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
import { ProjectsDataService } from './services/projects-data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { SendingComponent } from './sending/sending.component';
import { AboutDataService } from './services/about-data.service';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ExperienceComponent,
    ScrollDownComponent,
    ProjectsComponent,
    ProjectsDetailComponent,
    NotFoundComponent,
    ContactsComponent,
    SuccessAlertComponent,
    ErrorAlertComponent,
    SendingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [ExperienceDataService, ProjectsDataService, AboutDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
