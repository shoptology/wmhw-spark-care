import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Associate } from '../../associate';
import { WmhwApiService } from '../../wmhw-api.service';

export interface Associate {
  avatar: string;
  name: string;
  win: number;
}

@Component({
  selector: 'app-share-spark',
  templateUrl: './share-spark.component.html',
  styleUrls: ['./share-spark.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ShareSparkComponent implements OnInit {

  associateCtrl = new FormControl();
  filteredAssociates: Observable<Associate[]>;
  associates: Associate[];

  constructor(
    private router: Router,
    public associateService: WmhwApiService,

  ) {

    this.associates = this.associateService.getAssociates();

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

  ngOnInit() {
  }

  public onSubmit():void {
    // TODO: process spark data here, >then navigate next
    this.submitSpark();
    this.navNext();
  }

  private submitSpark():void {
    // TODO: access/submit to spark service
  }

  private navNext():void {
    this.router.navigate(["/spark-confirmation"]);
  }

}
