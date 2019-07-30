import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Associate } from '../../_models';
import { WmhwApiService } from '../../_services/wmhw-api.service';
import { Chart } from 'angular-highcharts'; // https://api.highcharts.com/highcharts/
import { SPARKTYPES } from '../../_models/spark-types';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TeamDashboardComponent implements OnInit {

  public associate: Associate;
  public log;
  public notifications;
  public statistics;
  public sparkTypes = SPARKTYPES;
  public sparksGivenChart;

  constructor(
    private route: ActivatedRoute,
    public wmApi: WmhwApiService,
  ) {
    this.associate = JSON.parse(localStorage.getItem('associate'));
    this.statistics = this.wmApi.getStatisticsByManagersWin(this.associate.win);
    this.sparksGivenChart = new Chart(<any>{

      chart: {
        type: 'column'
      },
      title: {
        text: 'Sparks Given',
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: this.sparkTypes[0].title,
          data: [33],
          color: this.sparkTypes[0].color,
        },
        {
          name: this.sparkTypes[1].title,
          data: [42],
          color: this.sparkTypes[1].color,
        },
        {
          name: this.sparkTypes[2].title,
          data: [55],
          color: this.sparkTypes[2].color,
        },
        {
          name: this.sparkTypes[3].title,
          data: [26],
          color: this.sparkTypes[3].color,
        },
      ],
    });
    this.notifications = [
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

  }

  ngOnInit() {}

  export(){
    alert("Open Export Options Modal: \n Export options included but not limited to print, email, pdf of this.Spark data");
  }

}
