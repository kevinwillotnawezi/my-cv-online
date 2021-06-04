import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPDF(): void {
    window.open('../../../../assets/file/FORTIL_Kevin WILLOT.pdf', '_blank');
  }
}
