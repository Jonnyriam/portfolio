import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    new Project(
      'Game Developer',
      'In partnership with a Masters student, I developed a VR game tailored for children with autism.',
      [
        'In partnership with a Masters student, I developed a VR game tailored for children with autism.',
        ` Our vision was to utilize virtual reality as a powerful medium for therapeutic intervention.
         In my role, I oversaw the development process, meticulously crafting and refining the application's features to create an engaging and effective tool for therapy and learning.`,
      ],
      [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.`,
      ],
      '09/2022 — 02/2023',
      ['Unity', 'C#', 'Visual Studio'],
      [
        //unity
        'assets/images/icons8-unity.svg',
        //c#
        'assets/images/icons8-c-sharp-logo.svg',
        //vs
        'assets/images/icons8-visual-studio.svg',
      ]
    ),
    new Project(
      'Game Developer',
      'As a final project for my BsC, I was challenged to develop a complete game with 2 other colleagues.',
      [
        'As a final project for my BsC, I was challenged to develop a complete game with 2 other colleagues.',
      ],
      [],
      '09/2022 — 02/2023',
      ['Unity', 'C#', 'Visual Studio'],
      [
        //unity
        'assets/images/icons8-unity.svg',
        //c#
        'assets/images/icons8-c-sharp-logo.svg',
        //vs
        'assets/images/icons8-visual-studio.svg',
      ]
    ),
    new Project(
      'Game Developer',
      'In partnership with a Masters student, developed a game for children with autism',
      [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.`,
      ],
      [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.`,
      ],
      '09/2022 — 02/2023',
      ['Unity', 'C#', 'Visual Studio'],
      [
        //unity
        'assets/images/icons8-unity.svg',
        //c#
        'assets/images/icons8-c-sharp-logo.svg',
        //vs
        'assets/images/icons8-visual-studio.svg',
      ]
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
