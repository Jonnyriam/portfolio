import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';
import { AboutComponent } from './about/about.component';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';

@NgModule({
  declarations: [AppComponent, ExperienceComponent, ExperienceDetailComponent, AboutComponent, ExperienceItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
