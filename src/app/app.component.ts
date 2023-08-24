import { Component, OnInit } from '@angular/core';
import { ComponentTextService } from './component-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeComponent: string = '';// Variable qui stocke le nom du composant actif.

  constructor(public componentTextService: ComponentTextService) {}//Injecte le service ComponentTextService dans le composant afin qu'il soit accessible dans les méthodes du composant.

  ngOnInit() {
    this.componentTextService.clearActiveComponent();// Méthode du cycle de vie OnInit qui est appelée lorsque le composant est initialisé
  }

  toggleComponent(component: string) {
    if (this.activeComponent === component) {
      this.activeComponent = '';
      this.componentTextService.clearActiveComponent();
    } else {
      this.activeComponent = component;
      this.componentTextService.setActiveComponent(component);
    }
  }
}