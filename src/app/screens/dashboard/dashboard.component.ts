import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  public userName;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userName = this.route.snapshot.params['userName']
  }

}
