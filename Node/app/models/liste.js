var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ListeSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  titre: { type: String, required: true },
  description: String,
  hasImage: Boolean,
  image: String
});

module.exports = mongoose.model("Liste", ListeSchema);
