import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Associate } from '../../_models';
import { WmhwApiService } from '../../_services/wmhw-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  public associate: Associate;
  public activityLog;
  public notifications;

  constructor(
    private route: ActivatedRoute,
    public wmApi: WmhwApiService,
  ) {
    this.associate = JSON.parse(localStorage.getItem('associate'));
    this.notifications = this.wmApi.getRecievedNotifictionsByAssociateWin(this.associate.win);
    this.activityLog = this.wmApi.getActivityLogByAssociateWin(this.associate.win);
  }

  ngOnInit() {}
  
}
