import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles:[`
    .ng-invalid{
      border: 1px solid red;
      background-color:red;
    }
  `]
})
export class TemplateDrivenComponent {
  user={
    username:'sunil',
    email:'sun.aec@rediffmail.com',
    password:'1234',
    gender:'male'
  }
  genders=['Male', 'Female'];
  onSubmit(form: NgForm){
    //console.log(form);
    //console.log(this.user);
    console.log(form.value);
  }
}
