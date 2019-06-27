import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spark-confirmation',
  templateUrl: './spark-confirmation.component.html',
  styleUrls: ['./spark-confirmation.component.scss']
})
export class SparkConfirmationComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public acknowledgeSpark(): void {

    // TODO: has spark already been acknowledged in DB?
    // TODO: anything else before navigate next?

    // go to next screen
    this.navNext();

  }

  public navNext(): void {
    this.router.navigate(["/home"]);
  }

}
