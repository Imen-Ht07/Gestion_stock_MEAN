const mongoose = require("mongoose");

//declaration des attributs 
const fournSchema = new mongoose.Schema({
    cin:{type:Number},
    fName:{ type:String},
    lName:{type:String},
    tel:{type:Number},
    email:{type:String},
    adr:{ type:String}
});

//exporter le model pour l'utiliser au autres pages
module.exports= mongoose.model("Fournisseur",fournSchema );