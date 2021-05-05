import { routesEnum } from './../../app-routing.module';
import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnChanges {


  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.router.url.includes(routesEnum.ABOUT)) {
      document.getElementById('footer').classList.remove('home-footer');
    } else {
      document.getElementById('footer').classList.add('home-footer');
    }
  }
}
