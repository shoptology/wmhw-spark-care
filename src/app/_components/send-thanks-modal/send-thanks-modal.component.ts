import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-send-thanks-modal',
  templateUrl: './send-thanks-modal.component.html',
  styleUrls: ['./send-thanks-modal.component.scss']
})
export class SendThanksModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SendThanksModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
