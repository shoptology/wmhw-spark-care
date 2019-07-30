import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent implements OnInit {

  @Input('isNew') isNew: boolean;
  @Input('thankYouSent') thankYouSent: boolean;
  @Input('notificationType') notificationType: string;
  @Input('date') date: string;
  @Input('toAssociate') toAssociate: string;
  @Input('fromAssociate') fromAssociate: object;
  @Input('sparkType') sparkType: string;
  @Input('message') message: string;

  constructor() { }

  ngOnInit() {
  }

}
