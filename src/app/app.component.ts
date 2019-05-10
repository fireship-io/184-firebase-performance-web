import { Component } from '@angular/core';
import { AngularFirePerformance } from '@angular/fire/performance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private perf: AngularFirePerformance) {}

}
