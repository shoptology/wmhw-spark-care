import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, UserService } from '../../_services';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

// https://www.linkedin.com/pulse/angular-6-login-session-authentication-reactive-form-validation-das/
// https://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //     this.router.navigate(['/home']);
    // }
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

   // get return url from route parameters or default to '/'
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

   // redundancy
   this.authenticationService.logout();
  }

  public attemptLogin(loginForm: NgForm):void {

    if (loginForm.invalid) {

      // if form is invalid do nothing
      alert("Please check your username and password");
      return;

    } else {
      if(true){ // TODO: if login is valid
        console.log("Login successful");

        // TODO: pass this to service - this.authenticationService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', 'true');
        console.log('login username', loginForm.value.userName);
        localStorage.setItem('username', loginForm.value.userName);

        this.router.navigate([this.returnUrl]);

      } else {
        alert("Please check your username and password");
        // this.message = "Please check your userid and password";
      }
    }
  }
}
