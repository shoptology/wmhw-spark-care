import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spark-confirmation',
  templateUrl: './spark-confirmation.component.html',
  styleUrls: ['./spark-confirmation.component.scss']
})
export class SparkConfirmationComponent implements OnInit {

  public toAssociate: string;
  public fromAssociate: string;
  public type: string;
  public message: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.toAssociate = this.route.snapshot.params['toAssociate'];
    console.log('this.toAssociate',this.toAssociate);

    this.fromAssociate = this.route.snapshot.params['fromAssociate'];
    console.log('this.fromAssociate',this.fromAssociate);

    this.type = this.route.snapshot.params['type'];
    console.log('this.type',this.type);

    this.message = this.route.snapshot.params['message'];
    console.log('this.message',this.message);

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