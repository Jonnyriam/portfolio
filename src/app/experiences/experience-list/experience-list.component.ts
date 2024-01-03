import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css'],
})
export class ExperienceListComponent {
  experiences: Experience[] | undefined;

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }
}
