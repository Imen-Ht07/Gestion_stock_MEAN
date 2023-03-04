import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//communiquer avec l backend
import { HttpClientModule } from '@angular/common/http';
// pour les formulaires 
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// importation de composants
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
//produits
import { ProduitsComponent } from './components/produits/produits/produits.component';
import { UpdateProduitsComponent } from './components/produits/update-produits/update-produits.component';
import { AddProduitsComponent } from './components/produits/add-produits/add-produits.component';
//fournisseurs
import { FournisseursComponent } from './components/fournisseurs/fournisseurs/fournisseurs.component';
import { AddFournisseursComponent } from './components/fournisseurs/add-fournisseurs/add-fournisseurs.component';
import { UpdateFournisseursComponent } from './components/fournisseurs/update-fournisseurs/update-fournisseurs.component';
//factures
import { FacturesComponent } from './components/factures/factures/factures.component';
import { AddFactureComponent } from './components/factures/add-facture/add-facture.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitsComponent,
    LoginComponent,
    RegisterComponent,
    FournisseursComponent,
    AddFournisseursComponent,
    UpdateProduitsComponent,
    HomeComponent,
    FacturesComponent,
    UpdateFournisseursComponent,
    AddFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
