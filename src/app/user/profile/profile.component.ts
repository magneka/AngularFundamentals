import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { last } from 'rxjs/operators';
//import { locateHostElement } from '@angular/core/src/render3/instructions';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../../services/toastr.service';

@Component({ 
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) { }

  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
   
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {      
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.toastr.success('profile saved')
      //this.router.navigate(['events'])
    }
  }
  
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }
  
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
