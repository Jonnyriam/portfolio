import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceDetailComponent } from './experiences/experience-detail/experience-detail.component';
import { AboutComponent } from './about/about.component';
import { ExperienceItemComponent } from './experiences/experience-list/experience-item/experience-item.component';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { ExperienceListComponent } from './experiences/experience-list/experience-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'experience',
    component: AppComponent,
    children: [{ path: ':id', component: ExperienceDetailComponent }],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ExperiencesComponent,
    ExperienceDetailComponent,
    AboutComponent,
    ExperienceItemComponent,
    ExperienceComponent,
    ExperienceListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
