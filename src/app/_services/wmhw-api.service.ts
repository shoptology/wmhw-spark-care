import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Statistic } from '../_models';
import { Associate } from '../_models';
import { Notification } from '../_models';
import { ASSOCIATES } from '../_services/associates';

@Injectable({
  providedIn: 'root'
})

export class WmhwApiService {

  constructor() { }

  getAssociatesByStoreId(storeId: number, win: number): Associate[] {
    // get all associates within the storeId, then remove this associate from list
    let associates = ASSOCIATES.filter(associate => associate.storeId == storeId).filter(associate => associate.win !== win);
    return associates;
  }

  getAssociateByWin(win: number): Associate {
    // TODO: write service to database here to replace dummy data
    const associate = ASSOCIATES.find(associate => associate.win == win);
    return associate;
  }

  getStatisticsByManagersWin(win: number): Statistic[] {
     // TODO: write service to database here to replace dummy data
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

  getActivityLogByAssociateWin(win: number): Notification[] {
    // TODO: write service to database here to replace dummy data
    const activityLog = [
      {
        isNew: false,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Karam Griffith',
        },
        fromAssociate: {name: 'you'},
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Iqrah Woodcock',
        },
        fromAssociate: {name: 'you'},
        sparkType: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Dawid Bernard',
        },
        fromAssociate: {name: 'you'},
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Isla-Mae Cox',
        },
        fromAssociate: {name: 'you'},
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: true,
        date: 1564516054,
        toAssociate: {
          name: 'Karam Griffith',
        },
        fromAssociate: {name: 'you'},
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      // {
      //   isNew: true,
      //   thankYouSent: false,
      //   date: 1564516054,
      //   toAssociate: {
      //     name: 'Iqrah Woodcock',
      //   },
      //   fromAssociate: {name: 'you'},
      //   sparkType: 'connection',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: true,
      //   thankYouSent: true,
      //   date: 1564516054,
      //   toAssociate: {
      //     name: 'Dawid Bernard',
      //   },
      //   fromAssociate: {name: 'you'},
      //   sparkType: 'safety',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: true,
      //   thankYouSent: false,
      //   date: 1564516054,
      //   toAssociate: {
      //     name: 'Isla-Mae Cox',
      //   },
      //   fromAssociate: {name: 'you'},
      //   sparkType: 'simplicity',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: true,
      //   thankYouSent: true,
      //   date: 1564516054,
      //   toAssociate: {
      //     name: 'Dawid Bernard',
      //   },
      //   fromAssociate: {name: 'you'},
      //   sparkType: 'safety',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: true,
      //   thankYouSent: true,
      //   date: 1564516054,
      //   toAssociate: {
      //     name: 'Isla-Mae Cox',
      //   },
      //   fromAssociate: {name: 'you'},
      //   sparkType: 'simplicity',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
    ];
    return activityLog;
  }

  getRecievedNotifictionsByAssociateWin(win: number): Notification[] {
    // TODO: write service to database here to replace dummy data
    const notifications = [
      {
        isNew: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: { name: 'you' },
        fromAssociate: {
          name: 'Leoni Baxter',
        },
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: { name: 'you' },
        fromAssociate: {
          name: 'Jaime Vasquez',
        },
        sparkType: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: { name: 'you' },
        fromAssociate: {
          name: 'Johanna Roberts',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: { name: 'you' },
        fromAssociate: {
          name: 'Nikodem Greer',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: { name: 'you' },
        fromAssociate: {
          name: 'Leoni Baxter',
        },
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      // {
      //   isNew: false,
      //   thankYouSent: true,
      //   date: 1564516054,
      //   toAssociate: { name: 'you' },
      //   fromAssociate: {
      //     name: 'Jaime Vasquez',
      //   },
      //   sparkType: 'connection',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: false,
      //   thankYouSent: true,
      //   date: 1564516054,
      //   toAssociate: { name: 'you' },
      //   fromAssociate: {
      //     name: 'Johanna Roberts',
      //   },
      //   sparkType: 'safety',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: false,
      //   thankYouSent: true,
      //   date: 1564516054,
      //   toAssociate: { name: 'you' },
      //   fromAssociate: {
      //     name: 'Nikodem Greer',
      //   },
      //   sparkType: 'simplicity',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: false,
      //   thankYouSent: false,
      //   date: 1564516054,
      //   toAssociate: { name: 'you' },
      //   fromAssociate: {
      //     name: 'Johanna Roberts',
      //   },
      //   sparkType: 'safety',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
      // {
      //   isNew: false,
      //   thankYouSent: true,
      //   date: 1564516054,
      //   toAssociate: { name: 'you' },
      //   fromAssociate: {
      //     name: 'Nikodem Greer',
      //   },
      //   sparkType: 'simplicity',
      //   message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      // },
    ];
    return notifications;
  }

  getTeamNotificationsByManagersWin(win: number): Notification[] {
    // TODO: write service to database here to replace dummy data
    const notifications = [
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          name: 'Jaime Vasquez',
        },
        fromAssociate: {
          name: 'Leoni Baxter',
        },
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          name: 'Leoni Baxter',
        },
        fromAssociate: {
          name: 'Jaime Vasquez',
        },
        sparkType: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          name: 'Nikodem Greer',
        },
        fromAssociate: {
          name: 'Johanna Roberts',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          name: 'Johanna Roberts',
        },
        fromAssociate: {
          name: 'Nikodem Greer',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          name: 'Jaime Vasquez',
        },
        fromAssociate: {
          name: 'Leoni Baxter',
        },
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          name: 'Leoni Baxter',
        },
        fromAssociate: {
          name: 'Jaime Vasquez',
        },
        sparkType: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          name: 'Nikodem Greer',
        },
        fromAssociate: {
          name: 'Johanna Roberts',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          name: 'Johanna Roberts',
        },
        fromAssociate: {
          name: 'Nikodem Greer',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          name: 'Nikodem Greer',
        },
        fromAssociate: {
          name: 'Johanna Roberts',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          name: 'Johanna Roberts',
        },
        fromAssociate: {
          name: 'Nikodem Greer',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    ];
    return notifications;
  }

  // TODO: this is where the DB calls should happen.
  // TODO: functions like sumbitSpark and sumbitThankYouNote
  submitSpark(sparkForm): void {}

}
