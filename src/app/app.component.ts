import { Component } from '@angular/core';
import { pizzas } from "./data/pizzas";

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
  panier = [];

  get total () {
    let total = 0;
    for(let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].prix;
    }
    return total;
  }

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }
  ajouterAuPanier (pizza) {
    this.panier.push(pizza);
  }
  supprimerItem(index) {
    this.panier.splice(index, 1)
  }

}