import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeComponent: string = '';
  defaultText: string = 'Select a button to learn more.';
  activeComponentSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.defaultText);

  ngOnInit() {
    this.activeComponentSubject.next(this.defaultText);
  }

  toggleComponent(component: string) {
    if (this.activeComponent === component) {
      this.activeComponent = '';
      this.activeComponentSubject.next(this.defaultText);
    } else {
      this.activeComponent = component;
      this.activeComponentSubject.next(component);
    }
  }
}

