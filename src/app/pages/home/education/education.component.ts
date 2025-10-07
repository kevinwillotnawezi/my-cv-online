import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    standalone: true,
    imports: [MatCardModule]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
