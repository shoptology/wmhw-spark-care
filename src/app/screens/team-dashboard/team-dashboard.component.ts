import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Associate } from '../../_models';
import { WmhwApiService } from '../../_services/wmhw-api.service';

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

  constructor(
    private route: ActivatedRoute,
    public wmApi: WmhwApiService,
  ) {
    this.associate = JSON.parse(localStorage.getItem('associate'));
    this.statistics = this.wmApi.getStatisticsByManagersWin(this.associate.win);
  }

  ngOnInit() {}

}
