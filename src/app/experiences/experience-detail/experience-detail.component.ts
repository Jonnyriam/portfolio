import { Component, Input, OnInit, Output } from '@angular/core';
import { Experience } from '../experience.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css'],
})
export class ExperienceDetailComponent implements OnInit {
  experience!: Experience;
  id!: number;
  constructor(
    private expService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.experience = this.expService.getExperience(this.id);
    });
  }
}
