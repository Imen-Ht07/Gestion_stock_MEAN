import { Component, OnInit } from '@angular/core';
import{Fournisseur} from 'src/app/models/fournisseur';
import{FournisseurService} from 'src/app/services/fournisseur.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  fournisseurs: Fournisseur[]=[];
  constructor( private F: FournisseurService,
    private router : Router ) { }
    
//methode d'affichage de la liste
listFns() {
  this.F.getFournisseur().subscribe(
    (data:any) => {
      this.fournisseurs = data;
      console.log(data);
    },
    (err:any) => {
      console.log(err);
    }
  );
}
 //  supression 
 deleteFournisseur(_id:String)
 {
 this.F.supprimerFournisseur(_id).subscribe(() => {
 alert("Fournisseur supprimé");
 }); 
  }
// actualiser
  refresh(): void {
    window.location.reload();
}
 
  ngOnInit(): void {
    this.listFns();
  }

}
