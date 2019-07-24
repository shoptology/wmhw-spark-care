import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  // TODO: this is where the DB calls should happen.
  // TODO: functions like sumbitSpark and sumbitThankYouNote
  submitSpark(sparkForm): void {}

}
