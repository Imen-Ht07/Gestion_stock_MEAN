export class Facture {
    _id!: String;
    // destinataire 
    nameD!:String;
    telD!:Number;
    adrD!:String;
    dateF!:Date;
    echeance!:Date;
 // Facture
    numF!:Number;
    produit!:String;
    qteF!:Number;
    prixUni!:Number;
    totalHT!:Number;

    total!:Number;
    totalTTC!:Number
}
