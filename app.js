const express = require("express");
const app = express();
const books = require("./books.json");

app.get("/", (req, res) => {
  res.send("<h1>Hello ,Welcome to Home Page</h1>");
});

app.get("/books", (req, res) => {
  res.send(books);
});

module.exports = app;
