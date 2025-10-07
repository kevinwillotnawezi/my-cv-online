import { slideInAnimation } from '../app/animations/animation';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import * as AOS from 'aos';
// import 'aos/dist/aos.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
    standalone: true,
    imports: [RouterOutlet, MenuComponent]
})
export class AppComponent implements OnInit {
  title = 'my-cv-online';

  constructor(){}

  ngOnInit(): void {
    AOS.init(
      // {
      //   duration: 1000,
      //   once: true
      // }
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
