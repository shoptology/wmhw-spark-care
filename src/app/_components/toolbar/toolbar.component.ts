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

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    this.associate = JSON.parse(localStorage.getItem('associate'));
  }

  public goBack(): void {
    this.location.back();
  }

}
