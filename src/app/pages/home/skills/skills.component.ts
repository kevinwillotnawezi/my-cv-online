import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: true,
    imports: [MatCardModule]
})
export class SkillsComponent {

  constructor() { }

}
