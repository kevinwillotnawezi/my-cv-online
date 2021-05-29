import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig],
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;
  @ViewChild('tw3') typewriterElement3;

  images = [
    '../../../../assets/img/desk-593327_1920.jpg',
    '../../../../assets/img/laptop-336373_1920.jpg',
    '../../../../assets/img/cup-of-coffee-1280537_1920.jpg',
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3350;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngAfterViewInit(): void {
    this.write(this.typewriterElement);
    this.write(this.typewriterElement2);
    this.write(this.typewriterElement3);
  }

  write(elem){
    const target = elem?.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
    });
    writer
      .type("Hi, I'm Kevin Willot")
      .rest(300)
      .clear()
      .type("IT Consultant")
      .rest(300)
      .clear()
      .type("Analyst-developer")
      .rest(300)
      .clear()
      .start();
  }
}
