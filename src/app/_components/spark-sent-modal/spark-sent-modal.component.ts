import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spark-sent-modal',
  templateUrl: './spark-sent-modal.component.html',
  styleUrls: ['./spark-sent-modal.component.scss']
})

export class SparkSentModalComponent implements OnInit {

  public toAssociate: string;
  public username: string;
  public type: string;
  public message: string;
  nextTimer;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<SparkSentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {

    this.username = localStorage.getItem('username');

    // the modal shall only be open for a brief moment
    this.nextTimer = setTimeout(()=>{
      this._navNext();
    }, 8000);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  public done(): void {
    this._navNext();
  }

  private _navNext(): void {
    this.dialogRef.close();
    this.router.navigate(["/home"]);
  }

  ngOnDestroy(){
    clearTimeout(this.nextTimer);
  }

}
