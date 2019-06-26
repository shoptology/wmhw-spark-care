import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    // private location: Location,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  public attemptLogin(userData): void {

    this.router.navigate(["/home"]);

  }

  // public goBack(): void {
  //   this.location.back();
  // }

}
