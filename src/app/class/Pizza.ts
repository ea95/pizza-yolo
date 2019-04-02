export class Pizza {
    prix = 10;

    constructor (public nom, public ingredients, public image, prix?) {
        if(prix) {
            this.prix = prix;
        }
        
    }
    direNom(){
        console.log("je suis une pizza de type " + this.nom);
    }
     getImage(){
         return '/assets/images/' + this.image + '.jpeg';
     }
}
