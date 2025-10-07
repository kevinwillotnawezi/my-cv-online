import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TypewriterService } from '../../../services/typewriter.service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    providers: [NgbCarouselConfig],
    standalone: true,
    imports: [NgbCarousel, NgbSlide, CommonModule]
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('tw') typewriterElement!: ElementRef<HTMLElement>;
  @ViewChild('tw2') typewriterElement2!: ElementRef<HTMLElement>;
  @ViewChild('tw3') typewriterElement3!: ElementRef<HTMLElement>;

  images = [
    '../../../../assets/img/desk-593327_1920.jpg',
    '../../../../assets/img/laptop-336373_1920.jpg',
    '../../../../assets/img/cup-of-coffee-1280537_1920.jpg',
  ];

  private texts = [
    "Hi, I'm Kevin Willot",
    "IT Consultant",
    "Analyst-developer"
  ];

  constructor(
    config: NgbCarouselConfig,
    private typewriterService: TypewriterService
  ) {
    config.interval = 3350;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngAfterViewInit(): void {
    this.write(this.typewriterElement);
    this.write(this.typewriterElement2);
    this.write(this.typewriterElement3);
  }

  write(elem: ElementRef<HTMLElement>) {
    const target = elem?.nativeElement;
    if (target) {
      this.typewriterService.typewriteMultiple(target, this.texts, {
        speed: 75,
        deleteSpeed: 50,
        loop: true,
        delay: 300
      });
    }
  }
}
