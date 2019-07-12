import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public username: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  public navToShareSpark(): void {
    this.router.navigate(["/share-spark"]);
  }

  public navToDashboard(): void {
    this.router.navigate(["/dashboard"]);
  }

  public navToTeamDashboard(): void {
    this.router.navigate(["/team-dashboard"]);
  }

  public signOut(): void {

    this.authenticationService.logout();
    this.router.navigate(["/login"]);


  }

}
