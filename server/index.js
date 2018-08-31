require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const cont = require("./controller");

const app = express();

app.use(json());
app.use(express.static(`${__dirname}/build`));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

app.post("/api/houses/newlisting", cont.post);
app.get("/api/houses", cont.get);
app.delete("/api/houses/:id", cont.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
