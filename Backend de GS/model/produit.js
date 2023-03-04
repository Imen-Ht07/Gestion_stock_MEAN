const mongoose = require("mongoose");
//declaration des attributs 
const produitSchema = new mongoose.Schema({
    imageP:{type:String},
    idP:{type:Number},
    nameP:{ type:String},
    price:{ type:Number},
    description:{ type:String},
    Qte:{type:Number},
    status:{type:Boolean},

});
//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("Produit",produitSchema);