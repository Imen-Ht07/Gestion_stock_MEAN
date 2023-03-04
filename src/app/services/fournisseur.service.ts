import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  API_URI = 'http://localhost:3000/fournisseur';
//update
  fournisseur:Fournisseur[]=[];
  currentFournisseur: Fournisseur[] | undefined;

  constructor(private http:HttpClient) { }
//creation de tableau de fournisseurs
getFournisseur(): Observable<any> {
    return this.http.get(`${this.API_URI}/fournisseurlists`);
  }
//ajout
addFournisseur(Fournisseur: Fournisseur): Observable<any> {
  return this.http.post<Fournisseur>(`${this.API_URI}/addfn`,Fournisseur);
              
}
  //supression
    supprimerFournisseur(id:String) {
      return this.http.delete(`${this.API_URI}/delfourn/${id}`);
      }

//modifier
update(id: any, data: any): Observable<any> {
  return this.http.put(`${this.API_URI}/${id}`, data);
}
updateFournisseur(id: any, data: any): Observable<any> {
    
  return this.http.put<Fournisseur>(`${this.API_URI}/modiffourn/${id}`, data);
}
get(id: any): Observable<any> {
  return this.http.get(`${this.API_URI}/getFourn/${id}`);
}
}