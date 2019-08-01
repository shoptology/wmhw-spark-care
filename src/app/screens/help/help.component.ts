import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel'; // https://www.npmjs.com/package/@ngu/carousel
import { Associate } from '../../_models';
import { FAQS } from '../../_models/faqs';
import { INTROSTEPS } from '../../_models/intro-steps';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HelpComponent implements OnInit {

  public associate: Associate;
  public faqs: Array<any> = FAQS;
  public introTiles: Array<any> = INTROSTEPS;
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 1200,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    loop: true,
    // interval: { timing: 8000 },
    animation: 'lazy',
  };

  constructor() {
    this.associate = JSON.parse(localStorage.getItem('associate'));
  }

  ngOnInit() {

  }

}
