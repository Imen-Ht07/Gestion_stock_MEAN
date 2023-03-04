const mongoose = require("mongoose");
//declaration des attributs 
const factSchema = new mongoose.Schema({
 // destinataire 
    nameD:{ type:String},
    telD:{type:Number},
    adrD:{ type:String},
    dateF:{type:Date},
    echeance:{type:Date},
 // Facture
    numF:{type:Number},
    produit:{ type:String},
    qteF:{type:Number},
    prixUni:{type:Number},
    totalHT:{type:Number},

    total:{type:Number},
    totalTTC:{type:Number}

});
    //exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("Facture",factSchema);