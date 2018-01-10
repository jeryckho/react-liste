const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("port", process.env.PORT || 3001);

mongoose.Promise = global.Promise;
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  mongoose.connect("mongodb://mongo:27017/mydb", { useMongoClient: true });
} else {
  mongoose.connect("mongodb://192.168.99.100:27017/mydb", {
    useMongoClient: true
  });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/api")(app);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
