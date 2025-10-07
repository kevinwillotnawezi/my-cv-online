import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [BannerComponent, ExperiencesComponent, EducationComponent, SkillsComponent, FooterComponent]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

}
