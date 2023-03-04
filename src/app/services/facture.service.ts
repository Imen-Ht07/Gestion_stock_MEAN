import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Facture}from "src/app/models/facture"

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  factures : Facture[]=[];
  API_URI = 'http://localhost:3000/facture';

  constructor(private http:HttpClient) { }
//affichage de tab factures
  getFactures(): Observable<any> {
    return this.http.get(`${this.API_URI}/facturelists`);
  }
  //ajout 
addFac(Facture: Facture): Observable<any> {
  return this.http.post<Facture>(`${this.API_URI}/addfact`,Facture);
              
}

}
