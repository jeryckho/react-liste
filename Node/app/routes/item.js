const router = require("express").Router({ mergeParams: true });

router.route("/item").get((req, res) => {
  res.json({ message: "Items too !" + req.params.liste_id });
});

module.exports = router;
