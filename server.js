"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", handleHome);
app.get("/books", handleFindBooks);
app.post("/books", handleAddBook);
app.delete("/books/:id", handleDeleteBook);

function handleHome(req, res) {
  res.send("Hello World");
}

function handleAddBook(req, res) {
  const { newBook } = req.body;
  const book = new Book(newBook);
  book.save();
  try {
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
}

function handleDeleteBook(req, res) {
  const id = req.params.id;
  Book.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).send("Error in deleting book");
    } else {
      res.status(200).send(data);
    }
  });
}

mongoose.connect("mongodb://localhost:27017/books");

function handleFindBooks(req, res) {
  Book.find({}, (error, books) => {
    if (error) {
      console.log(error);
    } else {
      res.send(books);
    }
  });
}

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "Harry Potter",
  description:
    "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and muggles (non-magical people).",
  status: "Wish List",
});
const book2 = new Book({
  title: "Harry Potter 2",
  description:
    "Harry Potter 2 is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and muggles (non-magical people).",
  status: "Read",
});
const book3 = new Book({
  title: "Harry Potter 3",
  description:
    "Harry Potter 3 is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and muggles (non-magical people).",
  status: "Wish List",
});

book1.save();
book2.save();
book3.save();

app.listen(PORT, () => console.log(`listening on ${PORT}`));
