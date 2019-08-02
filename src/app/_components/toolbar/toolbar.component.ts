import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Location } from '@angular/common';
import { PreviousRouteService } from '../../_services/previous-route.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ToolbarComponent implements OnInit {

  public associate;
  public showBackButton;

  constructor(
    private location: Location,
    private router: Router,
    private previousRouteService: PreviousRouteService,
  ) {

    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log('**');
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.checkRoute();
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
    });

  }

  ngOnInit() {

    this.associate = JSON.parse(localStorage.getItem('associate'));
    this.checkRoute();
  }

  checkRoute(): void {
    console.log('the previous route',this.previousRouteService.getPreviousUrl());
    this.showBackButton = this.previousRouteService.getPreviousUrl() == '/login' ? false : true;
    console.log('showBackButton',this.showBackButton);
  }

  public goBack(): void {
    this.location.back();
  }

}
