import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, UserService } from '../../_services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //     this.router.navigate(['/home']);
    // }
  }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //     username: ['', Validators.required],
    //     password: ['', Validators.required]
    // });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public attemptLogin(loginForm: NgForm):void {

    console.log('loginForm.value.userName',loginForm.value.userName);

    // TODO: process spark data here, >then navigate next
    // this.submitSpark();

    this.navNext(loginForm);
  }

  private navNext(loginForm):void {
    this.router.navigate([
      '/home',
      {
        userName: loginForm.value.userName,
      }
    ]);

  }

}
