import { Component, Input } from '@angular/core';
import '../../../variables.scss';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  // TODO: this could be better executed with an SVG sprite, but will need to be able to have 'fill' overwritten with CSS or another solution
})

export class IconComponent {

  @Input('type') icon: string;
  @Input('title') title: string;

  constructor() {}

}
