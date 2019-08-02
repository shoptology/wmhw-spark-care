import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wm-logo',
  templateUrl: './wm-logo.component.html',
  styleUrls: ['./wm-logo.component.scss']
})
export class WmLogoComponent {

  @Input() width: number;
  @Input() height: number;

  constructor() { }

}
