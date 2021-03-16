import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, AfterContentInit {
  constructor() {}

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
}
