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
    { id: 1, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'], src: 'assets/margherita.jpg' },
    { id: 2, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'], src: 'assets/pepperoni.jpg' },
    { id: 3, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'], src: 'assets/hawaiian.jpg' },
    { id: 4, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'], src: 'assets/vegetarian.jpg' },
    { id: 5, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'], src: 'assets/quattro-formaggi.jpg' },
    { id: 6, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'], src: 'assets/margherita.jpg' },
    { id: 7, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'], src: 'assets/pepperoni.jpg' },
    { id: 8, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'], src: 'assets/hawaiian.jpg' },
    { id: 9, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'], src: 'assets/vegetarian.jpg' },
    { id: 10, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'], src: 'assets/quattro-formaggi.jpg' },
    { id: 11, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'], src: 'assets/margherita.jpg' },
    { id: 12, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'], src: 'assets/pepperoni.jpg' },
    { id: 13, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'], src: 'assets/hawaiian.jpg' },
    { id: 14, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'], src: 'assets/vegetarian.jpg' },
    { id: 15, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'], src: 'assets/quattro-formaggi.jpg' },
    { id: 16, name: 'Margherita', price: 5, ingredients: ['tomato', 'mozzarella', 'basil'], src: 'assets/margherita.jpg' },
    { id: 17, name: 'Pepperoni', price: 6, ingredients: ['tomato', 'mozzarella', 'pepperoni'], src: 'assets/pepperoni.jpg' },
    { id: 18, name: 'Hawaiian', price: 6, ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'], src: 'assets/hawaiian.jpg' },
    { id: 19, name: 'Vegetarian', price: 6, ingredients: ['tomato', 'mozzarella', 'spinach', 'mushrooms', 'pepperoni'], src: 'assets/vegetarian.jpg' },
    { id: 20, name: 'Quattro Formaggi', price: 7, ingredients: ['tomato', 'mozzarella', 'ricotta', 'gorgonzola', 'parmesan'], src: 'assets/quattro-formaggi.jpg' },
  ];  

  pizzaSelezionata!: { name: string, ingredients: string[], price: number, src: string };

  onPizzaSelezionata(pizza: {name: string, ingredients: string[], price: number, src: string}) {
    this.pizzaSelezionata = pizza; // Ricevi l'oggetto con le informazioni della pizza
  }
  
}
