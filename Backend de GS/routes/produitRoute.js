const router = require("express").Router();
const Produit = require("../model/produit");
const multer = require("../multer");
// ajout d'image 
router.post("/add",multer.upload.single('imageP'), (req, res) => {
   
    const produit = new Produit({
      idP: req.body.idP,
      nameP: req.body.nameP,
      price: req.body.price,
      Qte:req.body.Qte,
      description: req.body.description,
      status: req.body.status,
      imageP: req.file.path
  
    });
  
    console.log(produit);
  
    produit.save((err, newProduit) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
      res.status(201).json({
        ok: true,
        produit: newProduit,
      });
    });
  });
 

//select all products 
  router.get('/produitlists', (req, res) => {
    Produit.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});

//Update a product
router.put('/modifProduit/:id', (req, res) => {
    Produit.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then((produit) => {
            res.status(200).send("updated success")
        })
        .catch((error) => { console.log(error) });
});

//delete a product
router.delete('/delproduit/:id', (req, res, next) => {
    Produit.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'produit supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
  //select par ID
  router.get('/produitByID/:id', (req, res, next) => {
    Produit.findOne({ _id: req.params.id})
      .then(produit => res.status(200).json(produit))
      .catch(error => res.status(404).json({ error }));
  });
  //select par nom
  router.get('/produitByname', (req, res, next) => {
    Produit.findOne({nameP: req.body.nameP })
      .then(produit => res.status(200).json(produit))
      .catch(error => res.status(404).json({ error }));
  
  });
  //get par ID
  router.get("/get/:id", (req, res) => {
    Produit.findById({ _id: req.params.id })
        .then((produit) => {
            res.status(200).send(produit)
        })
        .catch((error) => { console.log(error) });
}
);

  module.exports = router;

