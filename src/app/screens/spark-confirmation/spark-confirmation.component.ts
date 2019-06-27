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
    this.navNext();
  }

  public navNext(): void {
    this.router.navigate(["/home"]);
  }

}
