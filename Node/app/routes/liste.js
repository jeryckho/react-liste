const router = require("express").Router({ mergeParams: true });

var Liste = require("../models/liste");

router.get("/", (req, res) => {
  res.json({ message: "hooray! welcome to our api!" });
});

router
  .route("/liste")
  .post((req, res) => {
    var liste = new Liste(req.body);
    liste.save((err, results) => {
      if (err) res.send(err);
      res.json(results);
    });
  })
  .get((req, res) => {
    Liste.find((err, results) => {
      if (err) res.send(err);
      res.json(results);
    });
  });

router
  .route("/liste/:liste_id")
  .get((req, res) => {
    Liste.findOne({ id: req.params.liste_id }, (err, results) => {
      if (err) res.send(err);
      res.json(results || {});
    });
  })
  .put((req, res) => {
    Liste.findOneAndUpdate(
      { id: req.params.liste_id },
      req.body,
      (err, results) => {
        if (err) res.send(err);
        res.json(results || {});
      }
    );
  })
  .delete((req, res) => {
    Liste.findOneAndRemove({ id: req.params.liste_id }, (err, results) => {
      if (err) res.send(err);
      res.json(results || {});
    });
  });

module.exports = router;
