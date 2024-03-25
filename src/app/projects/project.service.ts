import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    new Project(
      'Game Developer',
      'In partnership with a Masters student, developed a game for children with autism',
      [],
      [],
      '09/2022 — 02/2023',
      ['Unity', 'C#', 'Visual Studio'],
      []
    ),
    new Project(
      'Game Developer',
      'In partnership with a Masters student, developed a game for children with autism',
      [],
      [],
      '09/2022 — 02/2023',
      ['Unity', 'C#', 'Visual Studio'],
      []
    ),
    new Project(
      'Game Developer',
      'In partnership with a Masters student, developed a game for children with autism',
      [],
      [],
      '09/2022 — 02/2023',
      ['Unity', 'C#', 'Visual Studio'],
      []
    ),
  ];
  constructor() {}

  getProjects() {
    return this.projects.slice();
  }

  getProject(id: number) {
    return this.projects[id];
  }
}
