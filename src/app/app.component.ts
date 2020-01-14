import { Component, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'AngularMaterialApp';
  drawer: MatSidenav;

  public onSidenavClose = () => {
    this.drawer.close();
  }
  

}
