import { Component } from '@angular/core';
import { ListePizzeComponent } from './liste-pizze/liste-pizze.component';
import { PizzaComponent } from './pizza/pizza.component';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListePizzeComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})

export class PizzeriaComponent {
  pizze = [
    { id: 1, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 2, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 3, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 4, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 5, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 6, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 7, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 8, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 9, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 10, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 11, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 12, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 13, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 14, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 15, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 16, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 17, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 18, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 19, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 20, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 21, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 22, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 23, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 24, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 25, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 26, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 27, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 28, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 29, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 30, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 31, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 32, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 33, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 34, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 35, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 36, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 37, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 38, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 39, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 40, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 41, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 42, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 43, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 44, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 45, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] },
    { id: 46, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'] },
    { id: 47, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
    { id: 48, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] },
    { id: 49, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'] },
    { id: 50, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'] }
  ];  

  pizzaSelezionata: { name: string, ingredients: string[], price: number } | null = null;

  onPizzaSelezionata(pizza: {name: string, ingredients: string[], price: number}) {
    this.pizzaSelezionata = pizza; // Ricevi l'oggetto con le informazioni della pizza
  }
  
}
