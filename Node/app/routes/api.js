module.exports = function(app) {
  const lstRouter = require("./liste"); // /liste/:liste_id
  const itemRouter = require("./item"); // /item/:item_id

  lstRouter.use("/liste/:liste_id", itemRouter); // /liste/:liste_id/item/:item_id

  app.use("/api", lstRouter);
  app.use("/api", itemRouter);
};
