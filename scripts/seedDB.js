const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Google Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/booklist"
);

const blogSeed = [
  {
    topic: "How to use this App",
    author: "App Master",
    synopsis:
      "The purpose of this App is to search google books",
    date: new Date(Date.now())
  },
  
];

db.Blog
  .remove({})
  .then(() => db.blogs.collection.insertMany(blogSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });