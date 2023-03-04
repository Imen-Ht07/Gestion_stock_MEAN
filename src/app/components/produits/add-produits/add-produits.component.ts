import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import{ProduitService} from 'src/app/services/produit.service';
@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']
})
export class AddProduitsComponent implements OnInit {
  imageP!: any;

  constructor( private P: ProduitService , 
                   private router : Router ) { }

 productForm: Product = {
   _id:'',
    idP: 0,
    nameP: '',
    description: '',
    price: 0,
    status: true, 
    Qte:0,   
    imageP: '',
  };

  loadImage(img: any) {
    this.imageP = img.target.files[0];
    console.log(this.imageP);
  }

  addProduct() {
    this.P.addProduct(this.productForm, this.imageP).subscribe(
      (data) => {
        if (!data.ok) {
          alert('ERROR!!');
        } else {
          console.log(data);
          alert('Product saved successfully!');
          //this.listProduct();
        }
      },
      (err) => {
        console.log(err);        
      }
    );
    this.router.navigate(['produits']);
  }

  ngOnInit(): void {
  }

}
