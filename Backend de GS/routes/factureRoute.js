const router = require("express").Router();
const Facture = require("../model/facture");

router.post("/addfact", (req, res) => {
    const facture = new Facture({
  // destinataire 
    nameD: req.body.nameD,
    telD: req.body.telD,
    adrD: req.body.adrD,
    dateF: req.body.dateF,
 // Facture
    numF: req.body.numF,
    produit:req.body.produit,
    qteF: req.body.qteF,
    prixUni: req.body.prixUni,
    totalHT: req.body.totalHT,
    total:req.body.total,
    totalTTC:req.body.totalTTC,

    });
    console.log(facture);
  
    facture.save((err, newFacture) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
  
      res.status(201).json({
        ok: true,
        facture: newFacture,
      });
    });
  });

  //select par ID
  router.get('/factByID/:id', (req, res, next) => {
    Facture.findOne({ _id: req.params.id })
      .then(facture => res.status(200).json(facture))
      .catch(error => res.status(404).json({ error }));
  });
  //select par Date
  router.get('/factByDate', (req, res, next) => {
    Facture.findOne({ Date: req.params.Date })
      .then(facture => res.status(200).json(facture))
      .catch(error => res.status(404).json({ error }));
  });
//select tout les factures
  router.get('/facturelists', (req, res) => {
    Facture.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});
//Update facture
router.put('/modiffact/:id', (req, res) => {
    Facture.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then((facture) => {
            res.status(200).send("updated success")
        })
        .catch((error) => { console.log(error) });
});

//delete facture
router.delete('/delfacture/:id', (req, res, next) => {
    Facture.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'facture supprimée !'}))
      .catch(error => res.status(400).json({ error }));
  });
 
  //get par ID
  router.get("/getfac/:id", (req, res) => {
    Facture.findById({ _id: req.params.id })
        .then((facture) => {
            res.status(200).send(facture)
        })
        .catch((error) => { console.log(error) });
}
);
  module.exports = router;

