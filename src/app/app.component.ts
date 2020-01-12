import { Component, ViewEncapsulation,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'AngularMaterialApp';
  @Output() sidenavClose = new EventEmitter();

  public onSidenavClose = () => {
    console.log("close funtions")
    this.sidenavClose.emit();
  }

}
