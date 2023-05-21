import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My new app';
  subtitle = "The is a new messaging app"

  count: number = 1

  counter() {
    return this.count = this.count + 1
  }
}
