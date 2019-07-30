import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SendThanksModalComponent } from '../../_components/send-thanks-modal/send-thanks-modal.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent implements OnInit {

  @Input('isNew') isNew: boolean;
  @Input('thankYouSent') thankYouSent: boolean;
  @Input('notificationType') notificationType: string;
  @Input('date') date: string;
  @Input('toAssociate') toAssociate: string;
  @Input('fromAssociate') fromAssociate: object;
  @Input('sparkType') sparkType: string;
  @Input('message') message: string;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(SendThanksModalComponent, {

      //-- modal options --//
      disableClose: true, // disable out of modal click to close
      autoFocus: true, // be sure to focus on first focusable element (the 'done' button)
      hasBackdrop: true, // using a backdrop for now but this may change when adding the blurred backdrop
      backdropClass: 'sned-thanks-modal__backdrop', // custom style class to add to the backdrop
      closeOnNavigation: true, // failsafe to make sure modal will close on fringe navigation
      // width: '250px', // fixed modal width
      data: { // data to pass to modal
        foo: 'bar',
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
