import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Associate } from '../../_models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  public associate: Associate;
  public log;
  public notifications;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.associate = JSON.parse(localStorage.getItem('associate'));
    this.notifications = [
      {
        isNew: true,
        thankYouSent: false,
        date: 1564516054,
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
        fromAssociate: {
          name: 'Leoni Baxter',
        },
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1564516054,
        fromAssociate: {
          name: 'Jaime Vasquez',
        },
        sparkType: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1564516054,
        fromAssociate: {
          name: 'Johanna Roberts',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1564516054,
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
        fromAssociate: {
          name: 'Johanna Roberts',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        isNew: false,
        thankYouSent: true,
        date: 1564516054,
        fromAssociate: {
          name: 'Nikodem Greer',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    ];

    this.log = [
      {
        viewed: false,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Karam Griffith',
        },
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: false,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Iqrah Woodcock',
        },
        sparkType: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Dawid Bernard',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Isla-Mae Cox',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1564516054,
        toAssociate: {
          name: 'Karam Griffith',
        },
        sparkType: 'kindness',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Iqrah Woodcock',
        },
        sparkType: 'connection',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1564516054,
        toAssociate: {
          name: 'Dawid Bernard',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: false,
        date: 1564516054,
        toAssociate: {
          name: 'Isla-Mae Cox',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1564516054,
        toAssociate: {
          name: 'Dawid Bernard',
        },
        sparkType: 'safety',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        viewed: true,
        thankYouSent: true,
        date: 1564516054,
        toAssociate: {
          name: 'Isla-Mae Cox',
        },
        sparkType: 'simplicity',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    ];
  }

  ngOnInit() {

  }
}
