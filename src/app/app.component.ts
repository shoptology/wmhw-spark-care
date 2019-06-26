import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'wmhw-spark-care';

  getState(outlet) {
    let state = outlet.activatedRouteData.state;
    return outlet.activatedRouteData.state;
  }
  
}
