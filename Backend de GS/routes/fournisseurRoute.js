const router = require("express").Router();
const Fournisseur = require("../model/fournisseur");
router.post("/addfn", (req, res) => {
    const fournisseur = new Fournisseur({
    cin: req.body.cin,
    fName: req.body.fName,
    lName: req.body.lName,
    tel: req.body.tel,
    email: req.body.email,
    adr: req.body.adr
    });
    console.log(fournisseur);
  
    fournisseur.save((err, newFournisseur) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
      }
  
      res.status(201).json({
        ok: true,
        fournisseur: newFournisseur,
      });
    });
  });
  //select par ID
  router.get('/fournByID/:id', (req, res, next) => {
    Fournisseur.findOne({ _id: req.params.id })
      .then(fournisseur => res.status(200).json(fournisseur))
      .catch(error => res.status(404).json({ error }));
  });
//select tout les fournisseurs
  router.get('/fournisseurlists', (req, res) => {
    Fournisseur.find({})
        .then((lists) => {
            res.status(200).send(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        });
});
//Update fournisseur
router.put('/modiffourn/:id', (req, res) => {
    Fournisseur.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then((fournisseur) => {
            res.status(200).send("updated success")
        })
        .catch((error) => { console.log(error) });
});

//delete fournisseur
router.delete('/delfourn/:id', (req, res, next) => {
    Fournisseur.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'fournisseur supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
  //get par ID
  router.get("/getFourn/:id", (req, res) => {
    Fournisseur.findById({ _id: req.params.id })
        .then((Fournisseur) => {
            res.status(200).send(Fournisseur)
        })
        .catch((error) => { console.log(error) });
}
);

  module.exports = router;

