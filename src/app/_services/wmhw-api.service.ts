import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Statistic } from '../_models';
import { Associate } from '../_models';
import { ASSOCIATES } from '../_services/associates';

@Injectable({
  providedIn: 'root'
})

export class WmhwApiService {

  constructor() { }

  /* Get list of Associates by StoreID */
  getAssociatesByStoreId(storeId: number, win: number): Associate[] {
    let associates = ASSOCIATES.filter(associate => associate.storeId == storeId).filter(associate => associate.win !== win);
    return associates;
  }

  /* Get Associate by WIN number */
  getAssociateByWin(win: number): Associate {
    const associate = ASSOCIATES.find(associate => associate.win == win);
    return associate;
  }

  getStatisticsByManagersWin(win: number): Statistic[] {

     // TODO: calculate real data from database values
    const statistics: Statistic[] = [
      {
        title: 'Associates signed up',
        value: 16,
        valueDisplay: 'number',
      },
      {
        title: 'Participation rate',
        value: .88,
        valueDisplay: 'percent',
      },
      {
        title: 'Sparks given',
        value: 56,
        valueDisplay: 'number',
      },
    ];
    return statistics;
  }

  // TODO: this is where the DB calls should happen.
  // TODO: functions like sumbitSpark and sumbitThankYouNote
  submitSpark(sparkForm): void {}

}
