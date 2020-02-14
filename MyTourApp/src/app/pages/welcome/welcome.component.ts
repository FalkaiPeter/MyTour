import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterLoginService } from 'src/app/services/register-login.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private registerLoginService:RegisterLoginService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form.value);
    return this.registerLoginService.login(form.value);
  }
}
