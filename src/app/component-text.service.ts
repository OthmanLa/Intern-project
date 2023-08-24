import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentTextService {
  private defaultText = 'Select a button to learn more'; //Texte par défaut qui sera affiché lorsqu'aucun bouton n'est actif.
  private activeComponentSubject = new BehaviorSubject<string>(this.defaultText); //Un BehaviorSubject qui stocke le texte du composant actif.

  setActiveComponent(componentName: string) {
    this.activeComponentSubject.next(componentName); //Met à jour le texte du composant actif avec le nom du composant fourni.
  }

  clearActiveComponent() {
    this.activeComponentSubject.next(this.defaultText); //Met à jour le texte du composant actif avec le texte par défaut.
  }

  getActiveComponentText() {
    return this.activeComponentSubject.asObservable();//Renvoie le BehaviorSubject en tant qu'Observable.
  }
}