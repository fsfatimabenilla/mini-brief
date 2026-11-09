const formumaire = document.querySelector("#form");
const nom = document.querySelector("#nom");
const montant = document.querySelector("#montant");
const erreur = document.querySelector("#error");
const filtre = document.querySelector("#filtre");
const recherche = document.querySelector("#recherche");
const liste = document.querySelector("#liste");
const total = document.querySelector("#total");

// console.log("children:"+liste.children.length) ;
// console.log("childNodes:"+liste.childNodes.length);

let produits = [
        { id: 1, nom: "Café", montant: 12,},
        { id: 2, nom: "Tram", montant: 8},
        { id: 3, nom: "Glasse", montant: 74}
]

function affichage(produit){
    liste.innerHTML = "";
    produit.forEach((produits)=>{
        const li = document.createElement("li");
        li.textContent = produits.nom + produits.montant;
        liste.append(li);
    });
}
affichage(produits);