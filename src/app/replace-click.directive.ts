import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appReplaceClick]'
})
export class ReplaceClickDirective {
  @Output() appReplaceClick = new EventEmitter<void>();//// Crée un événement de sortie personnalisé

  @HostListener('click', ['$event']) //// Définit un écouteur d'événements sur le clic pour l'élément hôte
  onClick(event: Event): void {
    event.preventDefault(); // Empêche le comportement de clic par défaut
    this.appReplaceClick.emit();//// Émet l'événement personnalisé lorsque l'élément est cliqué
  }
}
