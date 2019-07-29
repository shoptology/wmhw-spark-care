import { Component, HostListener, ViewChild } from '@angular/core';
import { routerTransition } from './app-router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],
})
export class AppComponent {

  @ViewChild('toolbar') toolbar: ElementRef;

  @HostListener("window:scroll", [])
  onWindowScroll() {

    // add/remove shadow on toolbar (8 instead of 0 to add padding to the scroll)
    if( window.pageYOffset > 8 ){
      this.toolbar.nativeElement.classList.add('app__toolbar--scrolled');
    } else {
      this.toolbar.nativeElement.classList.remove('app__toolbar--scrolled')
    }

  }

  title = 'wmhw-spark-care';

  getState(outlet) {
    let state = outlet.activatedRouteData.state;
    return outlet.activatedRouteData.state;
  }

}
