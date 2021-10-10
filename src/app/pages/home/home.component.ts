import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup = this.fb.group({
    year: new FormControl('', [Validators.required, Validators.min(25) , Validators.max(60)])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get validator(): FormControl {
    return this.form.get('year') as FormControl;
  }

  get validatorForm(): Validators {
    return this.validator.invalid  && (this.validator.dirty || this.validator.touched);
  }
}

