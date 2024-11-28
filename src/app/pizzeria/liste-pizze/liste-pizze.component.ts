import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste-pizze',
  standalone: true,
  imports: [],
  templateUrl: './liste-pizze.component.html',
  styleUrl: './liste-pizze.component.css'
})
export class ListePizzeComponent {
  @Input() listaPizze: { 
    id: number; 
    name: string; 
    price: number; 
    ingredients: string[]; 
    src: string
  }[] = [];

  @Output() pizzaSelezionata = new EventEmitter<{name: string, ingredients: string[], price: number, src: string}>();

  onVisualizzaIngredienti(id: number) {
    const pizza = this.listaPizze[id];
    // Passiamo un oggetto con tutte le informazioni della pizza
    this.pizzaSelezionata.emit({
      name: pizza.name,
      ingredients: pizza.ingredients,
      price: pizza.price,
      src: pizza.src
    });

    let none = document.querySelector('.none');
    none?.classList.remove('none');
  }
}
