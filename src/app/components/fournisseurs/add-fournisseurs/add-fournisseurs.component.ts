import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Fournisseur} from 'src/app/models/fournisseur';
import{FournisseurService} from 'src/app/services/fournisseur.service';


@Component({
  selector: 'app-add-fournisseurs',
  templateUrl: './add-fournisseurs.component.html',
  styleUrls: ['./add-fournisseurs.component.css']
})
export class AddFournisseursComponent implements OnInit {

  constructor(private F:FournisseurService ,
                private router:Router) { }
FnsForm: Fournisseur = {
  _id:'',
  cin: 0,
  lName: '',
  fName: '',
  tel: 0,
  adr: '',
  email: ''
  };              
               
 addFournisseur() {
   this.F.addFournisseur(this.FnsForm).subscribe(
     (data)=>{
            if (!data.ok) {
           alert('ERROR!!');
        } else {
           console.log(data);
            alert('Fournisseur saved successfully!');
           }
            },
               
         (err) => {
               console.log(err);        
                     }
                   );
                   this.router.navigate(['fournisseurs']);
                 }

ngOnInit(): void {

                }
                
              
              }
