import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import{FactureService}from "src/app/services/facture.service";
import{Facture}from "src/app/models/facture"

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {

  constructor(private Fac: FactureService,
    private router : Router ) { }

  facForm: Facture = {
    _id:'',
    nameD:'',
    telD:0,
    adrD:'',
    dateF:new Date(),
    echeance: new Date(),
 // Facture
    numF:0,
    produit:'',
    qteF:0,
    prixUni:0,
    totalHT:0,

    total:0,
    totalTTC:0,
    };  

  addFac() {
      this.Fac.addFac(this.facForm).subscribe(
        (data) => {
          if (!data.ok) {
            alert('ERROR!!');
          } else {
            console.log(data);
            alert('Facture ajoutée avec succés !');
            
          }
        },
        (err) => {
          console.log(err);        
        }
      );
      this.router.navigate(['factures']);
    }
  ngOnInit(): void {
  }

}
