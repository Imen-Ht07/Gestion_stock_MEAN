import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import{ProduitService} from 'src/app/services/produit.service';
import{Product} from 'src/app/models/product';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: Product[]=[]; 

  constructor( private P: ProduitService,
    private router : Router ) { }

  //methode d'affichage de la liste
  listProducts() {
    this.P.getProducts().subscribe(
      (data:any) => {
        this.produits = data;
        console.log(data);
      },
      (err:any) => {
        console.log(err);
      }
    );
  }
  
 //  supression 
 deleteProduit(_id:String)
 {
 
 this.P.supprimerProduit(_id).subscribe(() => {
 alert("produit supprimé");
 }); 

  }
//actualiser
  refresh(): void {
    window.location.reload();
}
 
  ngOnInit(): void {
    this.listProducts();
}
}