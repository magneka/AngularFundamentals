import { Component, OnInit } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string

  // NB fungerer uten å deklarere denne, (autodeklarert i html??)
  mouseoverlogin: boolean

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(formValues) {
    console.log(formValues)
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel () {
    this.router.navigate(['events'])
  }

}
