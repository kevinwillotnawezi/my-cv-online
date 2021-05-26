import Typewriter from 't-writer.js';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements AfterViewInit {
  @ViewChild('tw') typewriterElement;

  constructor() {}

  ngAfterViewInit(): void {
    document.getElementById('nav')?.classList.remove('transparent');
    const target = this.typewriterElement?.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#495564',
    });
    writer.type('Not Found.').rest(2000).start();
  }
}
