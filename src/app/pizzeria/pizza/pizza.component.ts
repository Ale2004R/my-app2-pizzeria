import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})

export class PizzaComponent {
  @Input() pizza: { name: string, ingredients: string[], price: number } | null = null;

  console.log(pizza);
}