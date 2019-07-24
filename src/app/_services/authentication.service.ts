import { Injectable } from '@angular/core';
import { Associate } from '../_models/associate';
import { ASSOCIATES } from '../_services/associates';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor() { }

  // auth
  attemptLogin(userName: string): Associate {

    // TODO: this is only checking for a valid username, need to add PW authentication
    const associate = ASSOCIATES.find(associate => associate.name == userName);
    return associate;

  }

  logout(): void {

    // remove local storage on logout
    localStorage.removeItem('associate');
    localStorage.removeItem('isLoggedIn');

  }
}
