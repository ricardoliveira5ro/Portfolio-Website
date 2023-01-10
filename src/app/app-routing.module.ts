import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'project-detail/:id', component: ProjectsDetailComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
