import { Component } from '@angular/core';
import { pizzas } from "./data/pizzas";

import { PizzaService } from "./pizza.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
  menuComplet = pizzas;
  menuVisible = true;
  nom = "";

  constructor(public pizzaService : PizzaService) {}

  get total () {
    let total = 0;
    for(let i = 0; i < this.pizzaService.panier.length; i++) {
      total += this.pizzaService.panier[i].prix;
    }
    return total;
  }

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }

  supprimerItem(index) {
    this.pizzaService.panier.splice(index, 1)
  }

}