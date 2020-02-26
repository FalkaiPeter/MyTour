import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterLoginService } from 'src/app/services/register-login/register-login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  constructor(private registerLoginService: RegisterLoginService) { }

  signUp(form: NgForm) {
    if (form.value.password === form.value.confirmpassword) {
      return this.registerLoginService.signUp(form.value);
    }
  }


}
