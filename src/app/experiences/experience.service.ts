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
      `Lorem ipsum dolor sit amet. Qui ratione ipsam qui quasi dolor et
      consequatur molestiae in officia perferendis hic aliquam odio est
      quaerat asperiores. Et expedita dolorem ut possimus minima qui
      cupiditate explicabo qui deleniti nobis. Aut voluptatem similique qui
      quia dolore eos veritatis illo.`,
      [],
      '09/2022 — 02/2023',
      'test',
      ['Unity', 'C#', 'Visual Studio', 'SQL']
    ),
    new Experience(
      'Game Developer',
      'Freelance',
      'GROUPINBLUE',
      `Lorem ipsum dolor sit amet. Qui ratione ipsam qui quasi dolor et
      consequatur molestiae in officia perferendis hic aliquam odio est
      quaerat asperiores. Et expedita dolorem ut possimus minima qui
      cupiditate explicabo qui deleniti nobis. Aut voluptatem similique qui
      quia dolore eos veritatis illo.`,
      [],
      '08/2020 — 03/2021',
      'test',
      ['Unity', 'C#', 'Visual Studio', 'HTML', 'CSS', 'JS']
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
