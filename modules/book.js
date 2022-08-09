const mongoose = require("mongoose");

function handleBooks(req, res) {
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

  // Book.find({}, (error, books) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     res.send(books);
  //   }
  // });
}

exports.handleBooks = handleBooks;
