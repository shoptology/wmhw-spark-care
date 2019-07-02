import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Associate } from '../../_models/associate';
import { WmhwApiService } from '../../_services/wmhw-api.service';
import { SPARKTYPES } from '../../_models/spark-types';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-share-spark',
  templateUrl: './share-spark.component.html',
  styleUrls: ['./share-spark.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ShareSparkComponent implements OnInit {

  public associateCtrl = new FormControl();
  public filteredAssociates: Observable<Associate[]>;
  public associates: Associate[];
  public sparkTypes = SPARKTYPES;

  constructor(
    private router: Router,
    public associateService: WmhwApiService,
  ) {

    // fetch the associates list
    this.associates = this.associateService.getAssociates();

    // filter associates object for autocomplete
    this.filteredAssociates = this.associateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(associate => associate ? this._filterAssociates(associate) : this.associates.slice())
      );
  }

  private _filterAssociates(value: string): Associate[] {
    const filterValue = value.toLowerCase();

    return this.associates.filter(associate => associate.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {}

  public onSubmit(sparkForm: NgForm):void {

    // TODO: process spark data here, >then navigate next
    // this.submitSpark();

    this.navNext(sparkForm);
  }

  private submitSpark(sparkForm):void {
    // TODO: access/submit to spark service
    // this.spark.service.submit(spark to DB)
    // {
    //   dateCode: 1234567890
    //   fromAssociate:
    //   toAssociate: this.associateCtrl.value,
    //   type: sparkForm.value.type,
    //   message: sparkForm.value.message,
    // }

  }

  private navNext(sparkForm):void {
    this.router.navigate([
      '/spark-confirmation',
      {
        toAssociate: this.associateCtrl.value,
        fromAssociate: 'loggedin.user',
        type: sparkForm.value.type,
        message: sparkForm.value.message,
      }
    ]);

  }

}
