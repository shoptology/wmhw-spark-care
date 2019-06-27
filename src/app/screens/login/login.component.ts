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

  public attemptLogin(): void {

    // this.router.navigate(['/home', { id: 123456, foo: 'foo' }]);
    this.router.navigate(['/home']);

  }

}
