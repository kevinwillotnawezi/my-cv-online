import { Component } from '@angular/core';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    standalone: true,
    imports: []
})
export class ExperiencesComponent {

  constructor() { }

  openPDF(): void {
    window.open('../../../../assets/file/FORTIL_Kevin WILLOT.pdf', '_blank');
  }
}
