import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ToolbarComponent implements OnInit {

  public associate;
  public showBackButton: boolean;

  constructor(
    private location: Location,
    private router: Router,
  ) {
    this.associate = JSON.parse(localStorage.getItem('associate'));
    router.events.subscribe(() => {
      this.showBackButton = this.location.path() == '/home' ? false : true;
    });
  }

  ngOnInit() {

  }

  public goBack(): void {
    this.location.back();
  }

}
