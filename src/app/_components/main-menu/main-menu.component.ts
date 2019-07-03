import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

  public username: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  public signOut(): void {

    // TODO: create log in/out service and do log out here

    this.authenticationService.logout();
    this.router.navigate(["/login"]);

  }

}
