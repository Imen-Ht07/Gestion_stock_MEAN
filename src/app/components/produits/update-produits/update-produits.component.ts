import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import{ProduitService} from 'src/app/services/produit.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-update-produits',
  templateUrl: './update-produits.component.html',
  styleUrls: ['./update-produits.component.css']
})
export class UpdateProduitsComponent implements OnInit {
  produits: Product[] = [];
  productImage!: any;
  id!:String;
  constructor( private P: ProduitService , 
    private router : Router, private route: ActivatedRoute) { }

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
     message='';  

  ngOnInit(): void {
    this.message = '';
    this.id = this.route.snapshot.params['id'];
    this.getProductByID(this.id);
  }

  loadImage(imageP: any) {
    this.productImage = imageP.target.files[0];
    console.log(this.productImage);
  }
  getProductByID(id:any): void {
    this.P.get(id)
      .subscribe(
        data => {
          this.productForm = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProduit(): void {
    this.P.updateProduct(this.productForm._id, this.productForm)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  }
