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

  public isLoggedIn;

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('--this.isLoggedIn',this.isLoggedIn);
  }

  public goBack(): void {
    this.location.back();
  }

}
