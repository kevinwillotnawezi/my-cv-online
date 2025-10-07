import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { TypewriterService } from '../../services/typewriter.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    standalone: true,
    imports: [FooterComponent]
})
export class NotFoundComponent implements AfterViewInit {
  @ViewChild('tw') typewriterElement!: ElementRef<HTMLElement>;

  constructor(private typewriterService: TypewriterService) {}

  ngAfterViewInit(): void {
    document.getElementById('nav')?.classList.remove('transparent');
    const target = this.typewriterElement?.nativeElement;
    if (target) {
      this.typewriterService.typewrite(target, 'Not Found.', {
        speed: 75,
        loop: true,
        delay: 2000
      });
    }
  }
}
