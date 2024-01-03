import { Injectable } from '@angular/core';
import { Experience } from './experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    new Experience(
      'Game Developer',
      'Freelance',
      '',
      'test',
      '09/2022 — 02/2023',
      'test',
      []
    ),
    new Experience(
      'Game Developer',
      'Freelance',
      'GROUPINBLUE',
      'test',
      '08/2020 — 03/2021',
      'test',
      []
    ),
  ];
  constructor() {}

  getExperiences() {
    return this.experiences.slice();
  }

  getExperience(id: number) {
    return this.experiences[id];
  }
}
