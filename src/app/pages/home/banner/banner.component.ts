import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig],
})
export class BannerComponent implements OnInit {
  images = [
    '../../../../assets/img/desk-593327_1920.jpg',
    '../../../../assets/img/laptop-336373_1920.jpg',
    '../../../../assets/img/cup-of-coffee-1280537_1920.jpg',
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    // config.pauseOnHover = true;
  }
  ngOnInit(): void {}
}
