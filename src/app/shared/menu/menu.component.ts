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
  }

  scrollToElement(elemId): void {
    if (this.router.url.includes(routesEnum.ABOUT)) {
      this.router.navigate([routesEnum.HOME]);
      setTimeout(() => {
        this.scroll(elemId);
      }, 10);
    } else {
      this.scroll(elemId);
    }
  }

  scroll(elemId) {
    let elem = document.getElementById(elemId);
    const yOffset = -60;
    if (elem) {
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    document.getElementsByClassName('active')[0].classList.remove('active');
    let navItem = document.getElementById(elemId + 'Link');
    navItem.classList.add('active');
  }

  scrollHome() {
    let elem = document.getElementById('home');
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    document.getElementsByClassName('active')[0].classList.remove('active');
    let navItem = document.getElementById('homeLink');
    navItem.classList.add('active');
  }

  goToAboutMe() {
    document.getElementsByClassName('active')[0].classList.remove('active');
  }
}
