import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Fournisseur} from 'src/app/models/fournisseur';
import{FournisseurService} from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-update-fournisseurs',
  templateUrl: './update-fournisseurs.component.html',
  styleUrls: ['./update-fournisseurs.component.css']
})
export class UpdateFournisseursComponent implements OnInit {
  id!:String;
  fournisseur: Fournisseur[] = [];
  constructor(private F:FournisseurService ,
    private router:Router, private route: ActivatedRoute) { }
FnsForm: Fournisseur = {
_id:'',
cin: 0,
lName: '',
fName: '',
tel: 0,
adr: '',
email: ''
};       
message="";       


  ngOnInit(): void {
    this.message = '';
    this.id = this.route.snapshot.params['id'];
    this.getFournisseurByID(this.id);
  }
  //update
  getFournisseurByID(id:any): void {
    this.F.get(id)
      .subscribe(
        data => {
          this.FnsForm = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
   updateFournisseur(): void {
    this.F.updateFournisseur(this.FnsForm._id, this.FnsForm) .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
}
