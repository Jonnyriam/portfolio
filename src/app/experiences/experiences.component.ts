import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ExperienceService],
})
export class ExperiencesComponent {}
