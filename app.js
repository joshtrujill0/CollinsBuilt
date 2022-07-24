const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`));
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);

//Mounted Routes
const view = require("./routes/viewRouter");

//Routes
app.use("/", view);

module.exports = app;
