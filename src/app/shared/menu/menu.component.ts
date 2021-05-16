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
    if(elemId!=='contact')
      document.getElementById('WhatsappLink')?.classList.remove('active');
    const activeElems = document.getElementsByClassName('active');
    if (activeElems){
      activeElems[0]?.classList.remove('active');
    }
    let elem = document.getElementById(elemId);
    const yOffset = -60;
    if (elem) {
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if(elemId==='homeBanner')
      elemId = 'home';
    document.getElementById(elemId + 'Link')?.classList.add('active');
  }

  goToAboutMe() {
    if (this.router.url.includes(routesEnum.ABOUT)) {
      this.scroll("aboutBanner");
    } else{
      document.getElementsByClassName('active')[0].classList.remove('active');
    }
    document.getElementById('aboutLink')?.classList.add('active');
  }

  goToContact(){
    if (document.getElementsByClassName('active'))
      document.getElementsByClassName('active')[0]?.classList.remove('active');
    if (this.router.url.includes(routesEnum.HOME)) {
      this.router.navigate([routesEnum.ABOUT]);
      setTimeout(() => {
        this.scroll("contact");
      }, 10);
    } else {
      this.scroll("contact");
    }
    document.getElementById('WhatsappLink')?.classList.add('active');
  }
}
