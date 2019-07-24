import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

// notes on building authentication with in angular
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
  associate;

  constructor(
    // public associateService: WmhwApiService,
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

  // In the fringe case of being directed to login from within app,
  // returnUrl will be a better user experience than being sent to the home page after login
  // * get return url from route parameters or default to '/' (routing = /home)
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

   // redundancy
   this.authenticationService.logout();
  }

  public attemptLogin(loginForm: NgForm):void {

    if (loginForm.invalid) {

      // if form is invalid do nothing
      return;

    } else {

      console.log("checking valid form /   username:",loginForm.value.userName);

      this.associate = this.authenticationService.attemptLogin(loginForm.value.userName);
      console.log('this.associate',this.associate);

      if(this.associate){

        // store associate object in local storage for the session
        localStorage.setItem('associate', this.associate);

        // this.router.navigate([this.returnUrl]); // ^ see above
        this.router.navigate(['/home']);

      } else {
        // TODO: this is a poor user experience,
        // make sure user knows exactly what the problem is
        // mostly handled with input:required attributes
        alert('invalid Username or Password');
      }
    }
  }
}
