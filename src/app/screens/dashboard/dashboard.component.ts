import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  public username;
  public log;
  public notifications;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');

//
//
// Rajan Neale
// Octavia Healy

// kindness
// connection
// safety
// simplicity




    this.notifications = [
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Leoni',
          lastName: 'Baxter',
        },
        type: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Jaime',
          lastName: 'Vasquez',
        },
        type: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Johanna',
          lastName: 'Roberts',
        },
        type: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Nikodem',
          lastName: 'Greer',
        },
        type: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Leoni',
          lastName: 'Baxter',
        },
        type: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Jaime',
          lastName: 'Vasquez',
        },
        type: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Johanna',
          lastName: 'Roberts',
        },
        type: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Nikodem',
          lastName: 'Greer',
        },
        type: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Johanna',
          lastName: 'Roberts',
        },
        type: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: 'you',
        fromAssociate: {
          firstName: 'Nikodem',
          lastName: 'Greer',
        },
        type: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    ];


    this.log = [
      {
        viewed: false,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          firstName: 'Karam',
          lastName: 'Griffith',
        },
        type: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: false,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          firstName: 'Iqrah',
          lastName: 'Woodcock',
        },
        type: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          firstName: 'Dawid',
          lastName: 'Bernard',
        },
        type: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          firstName: 'Isla-Mae',
          lastName: 'Cox',
        },
        type: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          firstName: 'Karam',
          lastName: 'Griffith',
        },
        type: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          firstName: 'Iqrah',
          lastName: 'Woodcock',
        },
        type: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          firstName: 'Dawid',
          lastName: 'Bernard',
        },
        type: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1562903452,
        toAssociate: {
          firstName: 'Isla-Mae',
          lastName: 'Cox',
        },
        type: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          firstName: 'Dawid',
          lastName: 'Bernard',
        },
        type: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1562903452,
        toAssociate: {
          firstName: 'Isla-Mae',
          lastName: 'Cox',
        },
        type: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    ];





  }

}
