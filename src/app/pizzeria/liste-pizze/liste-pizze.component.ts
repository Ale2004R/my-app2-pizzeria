import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste-pizze',
  standalone: true,
  imports: [],
  templateUrl: './liste-pizze.component.html',
  styleUrl: './liste-pizze.component.css'
})
export class ListePizzeComponent {
  @Input() pizze: { 
    id: number; 
    name: string; 
    price: number; 
    ingredients: string[]; 
  }[] = [];

  @Output() pizzaSelezionata = new EventEmitter<{name: string, ingredients: string[], price: number}>();

  onVisualizzaIngredienti(id: number) {
    const pizza = this.pizze[id];
    // Passiamo un oggetto con tutte le informazioni della pizza
    this.pizzaSelezionata.emit({
      name: pizza.name,
      ingredients: pizza.ingredients,
      price: pizza.price
    });
  }
}
