import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

export interface Associate {
  avatar: string;
  name: string;
  win: number;
}

@Component({
  selector: 'app-share-spark',
  templateUrl: './share-spark.component.html',
  styleUrls: ['./share-spark.component.scss']
})
export class ShareSparkComponent implements OnInit {

  associateCtrl = new FormControl();
  filteredAssociates: Observable<Associate[]>;

  associates: Associate[] = [
    {
      avatar: null,
      name: 'Mark Roy',
      win: 345123,
    },
    {
      avatar: null,
      name: 'Aleena Stubbs',
      win: 345246,
    },
    {
      avatar: null,
      name: 'Toby Martinez',
      win: 345369,
    },
    {
      avatar: null,
      name: 'Sumayya Crosby',
      win: 345492,
    }
  ];


  constructor(
    private router: Router,
  ) {
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

  onSubmit() {
    this.router.navigate(["/spark-confirmation"]);
  }

}
