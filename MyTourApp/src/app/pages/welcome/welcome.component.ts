import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterLoginService } from 'src/app/services/register-login/register-login.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private registerLoginService: RegisterLoginService) { }


  login(form: NgForm){
    return this.registerLoginService.login(form.value);
  }
}
