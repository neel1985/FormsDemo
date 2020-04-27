import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  tooltipPresent = true;
  
  user = new User();

  constructor() { }

  ngOnInit(): void {
    
  }

  doSomething(){
    alert('Clicked');
  }

  onSubmit(contactForm) {
    console.log(contactForm.value);
    console.log(contactForm.valid);
  }

}
