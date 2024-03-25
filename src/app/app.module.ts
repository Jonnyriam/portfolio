import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceDetailComponent } from './experiences/experience-detail/experience-detail.component';
import { AboutComponent } from './about/about.component';
import { ExperienceItemComponent } from './experiences/experience-list/experience-item/experience-item.component';
import { ExperienceListComponent } from './experiences/experience-list/experience-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'project',
    component: AppComponent,
    children: [{ path: ':id', component: ProjectDetailComponent }],
  },
  {
    path: 'experience',
    component: AppComponent,
    children: [{ path: ':id', component: ExperienceDetailComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperiencesComponent,
    ExperienceListComponent,
    ExperienceItemComponent,
    ExperienceDetailComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
