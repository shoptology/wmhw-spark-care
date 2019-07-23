import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spark-confirmation',
  templateUrl: './spark-confirmation.component.html',
  styleUrls: ['./spark-confirmation.component.scss']
})
export class SparkConfirmationComponent implements OnInit {

  public toAssociate: string;
  public username: string;
  public type: string;
  public message: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<SparkConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {

    this.toAssociate = this.route.snapshot.params['toAssociate'];
    console.log('this.toAssociate',this.toAssociate);

    this.username = localStorage.getItem('username');
    console.log('this.username',this.username);

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
