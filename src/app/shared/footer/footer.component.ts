import { Router } from '@angular/router';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  @Input() home: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // if (this.home) {
    //   document.getElementById('footer').classList.add('home-footer');
    //   document.getElementById('footer').classList.remove('about-footer');
    // } else {
    //   document.getElementById('footer').classList.add('about-footer');
    //   document.getElementById('footer').classList.remove('home-footer');
    // }
  }
}
