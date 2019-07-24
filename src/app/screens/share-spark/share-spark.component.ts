import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { WmhwApiService } from '../../_services/wmhw-api.service';
import { SPARKTYPES } from '../../_models/spark-types';
import { NgForm } from '@angular/forms';
import { ShareSparkModalComponent } from '../../_components/share-spark-modal/share-spark-modal.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Associate } from '../../_models';

@Component({
  selector: 'app-share-spark',
  templateUrl: './share-spark.component.html',
  styleUrls: ['./share-spark.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ShareSparkComponent implements OnInit {

  public associateCtrl = new FormControl();
  public filteredAssociates: Observable<Associate[]>;
  public sparkTypes = SPARKTYPES;
  public associate: Associate;
  public associates: Associate[];

  constructor(
    private router: Router,
    public associateService: WmhwApiService,
    public dialog: MatDialog
  ) {

    // fetch the logged in user info
    this.associate = JSON.parse(localStorage.getItem('associate'));

    // fetch the associates list
    this.associates = this.associateService.getAssociatesByStoreId(this.associate.storeId, this.associate.win);

    // filter associates object for autocomplete
    this.filteredAssociates = this.associateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(associate => associate ? this._filterAssociates(associate) : this.associates.slice())
      );
  }

  ngOnInit() {

  }

  private _filterAssociates(value: string): Associate[] {
    const filterValue = value.toLowerCase();
    return this.associates.filter(associate => associate.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _openDialog(sparkForm): void {
    const dialogRef = this.dialog.open(ShareSparkModalComponent, {

      //-- modal options --//
      disableClose: true, // disable out of modal click to close
      autoFocus: true, // be sure to focus on first focusable element (the 'done' button)
      hasBackdrop: true, // using a backdrop for now but this may change when adding the blurred backdrop
      backdropClass: 'spark-share-modal__backdrop', // custom style class to add to the backdrop
      closeOnNavigation: true, // failsafe to make sure modal will close on fringe navigation
      // width: '250px', // fixed modal width
      data: { // data to pass to modal
        toAssociate: this.associateCtrl.value,
        fromAssociate: 'loggedin.user',
        type: sparkForm.value.type,
        // IF message has no content THEN message is populated with default text
        message:
          sparkForm.value.message ?
          sparkForm.value.message :
          'I noticed when you showed a moment of altruistic care. Sparks to you!',
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public onSubmit(sparkForm: NgForm):void {

    if (sparkForm.valid){

      // submit the spark to the record
      this.submitSpark(sparkForm);

      // open confirmation modal
      this._openDialog(sparkForm);

    } else {
      console.log('invalid form - see form errors in red');
    }

  }

  private submitSpark(sparkForm):void {
    // TODO: submit to spark service
  }

}
