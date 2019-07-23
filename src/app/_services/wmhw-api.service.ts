import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Associate } from '../_models/associate';
import { ASSOCIATES } from '../_services/associates';

@Injectable({
  providedIn: 'root'
})

export class WmhwApiService {

  constructor() { }

  // Get all the associates
  // TODO: this is too broad, refine get methods
  getAssociates(): Associate[] {

    // console.log('AssociateService - getAssociates - ASSOCIATES',ASSOCIATES);

    return ASSOCIATES;

  }

  getAssociate(win: number): Associate {

    // console.log('AssociateService - getAssociate - ASSOCIATES',ASSOCIATES);
    // console.log('AssociateService - getAssociate - ASSOCIATE.ID',win);

    // get associate by win filter
    const associate = ASSOCIATES.find(associate => associate.win == win);

    // console.log('AssociateService - getAssociate - ASSOCIATE',associate);

    return associate;

  }

}
