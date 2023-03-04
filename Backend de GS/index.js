//importation
const express = require('express');
const authRoute = require ("./routes/authentification");
const produit = require("./routes/produitRoute");
const fournisseur = require("./routes/fournisseurRoute");
const facture = require("./routes/factureRoute");
const app = express();
//aide les ports de back et front a s'adapter 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
//use 
//pour les images BFR(Backend et Frontend Relation)
app.use('/uploads', express.static('uploads'));
//others
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/produit', produit);
app.use('/fournisseur',fournisseur);
app.use('/facture',facture );
//appel a database.js 
require('./database');

//serveur local 
app.listen(3000, () => {
    console.log("port started 3000");
});
