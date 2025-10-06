import { routesEnum } from './../../app-routing.module';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterContentInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    (() => {
      let nav = document.getElementsByTagName('nav');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
          nav[0].classList.remove('transparent');
        } else {
          nav[0].classList.add('transparent');
        }
      });
    })();
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.getElementById('mynav');
    // On click
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        // Toggle class "is-active"
        hamburger.classList.toggle('is-active');
        // Do something else, like open/close menu
        navigation?.classList.toggle('mobile')
      });
    }
  }

  goToHomeElement(elemId: string): void {
    if (
      !this.router.url.includes(routesEnum.HOME) &&
      elemId !== routesEnum.HOME
    ) {
      this.router.navigate([routesEnum.HOME], { fragment: elemId });
    } else {
      this.scroll(elemId);
    }
    this.setActiveElement(elemId);
  }

  goToAboutElement(elemId: string): void {
    if (
      !this.router.url.includes(routesEnum.ABOUT) &&
      elemId !== routesEnum.ABOUT
    ) {
      this.router.navigate([routesEnum.ABOUT], { fragment: elemId });
    } else {
      this.scroll(elemId);
    }
    this.setActiveElement(elemId);
  }

  scroll(elemId: string) {
    let elem = document.getElementById(elemId);
    const yOffset = -60;
    if (elem) {
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (elemId === routesEnum.ABOUT || elemId === routesEnum.HOME) {
      document.getElementById('nav')?.classList.add('transparent');
    }
  }

  setActiveElement(element: string) {
    if (document.getElementsByClassName('active')) {
      document.getElementsByClassName('active')[0]?.classList.remove('active');
    }
    document.getElementById(element + 'Link')?.classList.add('active');
  }

  isNotPageNotFound(){
    return (
      this.router.url.includes(routesEnum.ABOUT) || this.router.url.includes(routesEnum.HOME)
    );
  }
}
