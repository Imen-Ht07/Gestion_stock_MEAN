import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import{FactureService}from "src/app/services/facture.service";
import{Facture}from "src/app/models/facture"

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
factures : Facture[]=[];
  constructor(private Fac: FactureService,
    private router : Router ) { }
  
    listFacture() {
      this.Fac.getFactures().subscribe(
        (data:any) => {
          this.factures= data;
          console.log(data);
        },
        (err:any) => {
          console.log(err);
        }
      );
    }
    
  ngOnInit(): void {
    this.listFacture();
  }

}
