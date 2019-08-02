import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { Associate } from '../../_models';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

  public associate: Associate;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.associate = JSON.parse(localStorage.getItem('associate'));
  }

  ngOnInit() {

  }

  public signOut(): void {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

}
