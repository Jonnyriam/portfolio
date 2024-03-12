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
      `As a passion project, I worked on a game in cooperation with a small company as a core gameplay and system developer. Additionally, I
      often collaborated with the design team to bring about the best UX.`,
      [
        'As a passion project,',
        ` I worked on a game in cooperation with a small company as a core gameplay and system developer. Additionally, I
        often collaborated with the design team to bring about the best UX.`,
      ],

      [
        `Designed and implemented a range of systems, covering everything from Save/Load functionality to intricate gameplay systems like
        orbs, towers and character mechanics.`,

        `Collaborated with other developers to establish robust data transmission from the game to servers, allowing for website display and
        facilitating data aggregation for analysis. This cooperative effort enhanced my proficiency in recognizing and prioritizing data with
        analytical significance, leading to the extraction of actionable insights for well-informed decision-making.`,

        `Partnered with the Design team to shape the game UI and also contributed to the evolution of certain aspects of the website UI and
        UX.`,

        `Engaged with the Development team to improve the current and create newer necessary documents. This experience highlighted
        how clear and comprehensive documentation fosters efficient communication, seamless knowledge transfer, and overall project
        cohesion.`,
      ],
      '09/2022 — 02/2023',
      'test',
      ['Unity', 'C#', 'Visual Studio', 'SQL'],
      [
        //unity
        'assets/images/icons8-unity.svg',
        //c#
        'assets/images/icons8-c-sharp-logo.svg',
        //vs
        'assets/images/icons8-visual-studio.svg',
        //sql
        'assets/images/icons8-postgresql.svg',
      ]
    ),
    new Experience(
      'Game Developer',
      'Freelance',
      'GROUPINBLUE',
      `Groupinblue was a dynamic studio with a multidisciplinary team. During my time there, I participated on the development of several
      games and worked with 3D and space modelling.`,
      [
        `Groupinblue was a dynamic studio with a multidisciplinary team.`,
        ` During my time there, I participated on the development of several
      games and worked with 3D and space modelling.`,
      ],
      [
        `Teamed up with the product manager to create and refine algorithms for slot machines. This collaborative endeavor amplified my
      proficiency in translating visionary concepts into technical algorithms.`,

        `Conducted a comprehensive assessment of code and validated its adherence to requested functionalities through thorough testing.`,
      ],
      '08/2020 — 03/2021',
      'test',
      ['Unity', 'C#', 'Visual Studio', 'HTML', 'CSS', 'JS'],
      [
        //unity
        'assets/images/icons8-unity.svg',
        //c#
        'assets/images/icons8-c-sharp-logo.svg',
        //vs
        'assets/images/icons8-visual-studio.svg',
        //html
        'assets/images/icons8-html5.svg',
        //css
        'assets/images/icons8-css3.svg',
        //js
        'assets/images/icons8-js.svg',
      ]
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
