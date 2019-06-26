import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ToolbarComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public signOut(): void {

    // TODO: create log in/out service and do log out here

    this.router.navigate(["/login"]);

  }

  public goBack(): void {
    this.location.back();
  }

}
