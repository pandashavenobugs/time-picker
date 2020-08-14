import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // if you want use ngx-material-timepicker you must install ng material
  // binding can be variable whatever you want
  binding:Date;

  title = 'time-picker';
}
