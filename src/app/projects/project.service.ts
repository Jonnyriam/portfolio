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
         In my role, I oversaw the development process, developing and refining the application's features to create an engaging and effective tool for therapy and learning.`,
      ],
      [
        [
          `Designed, developed and refined every game system`,
          `in order to meet the Masters student planning of the game.`,
        ],
        [
          `Helped creating and shaping`,
          ` the game environment so that it could be more precise and less confuse for the children,
           while keeping some degree of difficulty.`,
        ],
        [`Tweaked`, `animations so their transitions would be smoother.`],
        [
          `Created`,
          `in partnership with the Masters student the game cinematics.`,
        ],
      ],
      '03/2023 — 08/2023',
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
        `As a final project for my BsC,`,
        `I was challenged to develop a complete game with 2 other colleagues.`,
        ` The game we created`,
        `was a 2D survival game with macro and micromanagement aspects.`,
      ],
      [
        [
          `Developed a variety of systems,`,
          `encompassing core functionalities such as `,
          `Save/Load`,
          `functionality and complex gameplay features like`,
          `survivors mechanics, zombies combat AI`,
          `and `,
          `map features.`,
        ],
        [
          `Cooperated with one of the colleagues`,
          `to ensure that the game was balanced and fair, so that it would be fun yet challenging to play.`,
        ],
        [`Helped`, `creating and maintaining the game UI.`],
      ],
      '02/2023 — 06/2023',
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
    /*new Project(
      'Web Developer',
      'Developed this portfolio as a challenge to enhance my skills in Angular, HTML and CSS.',
      [
        `Developed`,
        `this portfolio as a challenge to enhance my skills in `,
        `Angular, HTML and CSS.`,
        `Also created this as a way to showcase my work in some projects that I've done in the future.`,
      ],
      [
        [
          `Developed`,`this porfolio as a challenge to enhance my skills.` 
        ],
        [``]
      ],
      '01/2024 — 04/2024',
      ['HTML', 'CSS', 'Angular'],
      [
        //unity
        'assets/images/icons8-html5.svg',
        //c#
        'assets/images/icons8-css3.svg',
        //vs
        'assets/images/icons8-angularjs.svg',
      ]
    ),*/
  ];
  constructor() {}

  getProjects() {
    return this.projects.slice();
  }

  getProject(id: number) {
    return this.projects[id];
  }
}
