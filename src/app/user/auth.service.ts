import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

  currentUser: IUser

  constructor() {
    console.log("Auth.service constructed")    
   }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName,
    this.currentUser.lastName = lastName
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
