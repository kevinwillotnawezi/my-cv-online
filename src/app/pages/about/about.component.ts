import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  contactForm!: UntypedFormGroup;

  constructor() {}

  ngOnInit() {
    this.contactForm = new UntypedFormGroup({
      name: new UntypedFormControl(null, Validators.required),
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      message: new UntypedFormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log('test');
    console.log(this.contactForm);
  }
}
