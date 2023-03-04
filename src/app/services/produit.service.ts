import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits:Product[]=[];
  currentProduit: Product[] | undefined;

  API_URI = 'http://localhost:3000/produit';
  
  constructor(private http:HttpClient) { }
//creation de tableau de produit
getProducts(): Observable<any> {
    return this.http.get(`${this.API_URI}/produitlists`);
  }
//ajout

addProduct(newProd:any, imageP: File): Observable<any> {
  const fd = new FormData();
  fd.append('idP', newProd.idP); 
  fd.append('nameP', newProd.nameP); 
  fd.append('description', newProd.description)   
  fd.append('status', newProd.status);    
  fd.append('price', newProd.price);
  fd.append('Qte', newProd.Qte); 
  fd.append('imageP', imageP, imageP.name);

  return this.http.post<Product>(`${this.API_URI}/add`, fd);
}
  //supression
    supprimerProduit(id:String) {
      return this.http.delete(`${this.API_URI}/delproduit/${id}`);
      }

//modifier
update(id: any, data: any): Observable<any> {
  return this.http.put(`${this.API_URI}/${id}`, data);
}
updateProduct(id: any, data: any): Observable<any> {
    
  return this.http.put<Product>(`${this.API_URI}/modifProduit/${id}`, data);
}
get(id: any): Observable<any> {
  return this.http.get(`${this.API_URI}/get/${id}`);
}
}


