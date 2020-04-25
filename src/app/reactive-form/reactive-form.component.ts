import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }

}
