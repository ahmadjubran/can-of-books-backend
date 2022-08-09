"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { handleBooks } = require("./modules/book.js");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/", handleHome);

function handleHome(req, res) {
  res.send("Hello World");
}

mongoose.connect("mongodb://localhost:27017/books");

app.get("/books", handleBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
