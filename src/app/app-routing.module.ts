import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importation de components
import { ProduitsComponent } from './components/produits/produits/produits.component';
import { AddProduitsComponent } from './components/produits/add-produits/add-produits.component';
import { LoginComponent } from './components/login/login.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs/fournisseurs.component';
import { AddFournisseursComponent } from './components/fournisseurs/add-fournisseurs/add-fournisseurs.component';
import { UpdateProduitsComponent } from './components/produits/update-produits/update-produits.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FacturesComponent } from './components/factures/factures/factures.component';
import { UpdateFournisseursComponent } from './components/fournisseurs/update-fournisseurs/update-fournisseurs.component';
import { AddFactureComponent } from './components/factures/add-facture/add-facture.component';
const routes: Routes = [
  //produits
  {path: "produits", component:ProduitsComponent},
  {path:"add-pr",component:AddProduitsComponent},
  {path:"upd-pr/:id",component:UpdateProduitsComponent},
  //login 
  {path:"", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  //fournisseurs
  {path:"fournisseurs",component:FournisseursComponent},
  {path:"add-fr",component:AddFournisseursComponent},
  {path:"upd-fr/:id",component:UpdateFournisseursComponent},
  //home 
  {path:"home",component:HomeComponent},
  //factures
  {path:"factures", component:FacturesComponent},
  {path:"add-fac", component:AddFactureComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
