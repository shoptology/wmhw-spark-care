import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}

  // public attemptLogin(): void {
  //   this.router.navigate(['/home']);
  // }

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
