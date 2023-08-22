import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeComponent: string = ''; // Initialize to an empty string

  toggleComponent(component: string) {
    if (this.activeComponent === component) {
      this.activeComponent = ''; // Toggle off if clicked again
    } else {
      this.activeComponent = component;
    }
  }
}

