const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBook
} = require("../controllers/bookController");

// Add new book
router.post("/books", createBook);

// Get all books
router.get("/books", getAllBooks);

// Get book by ID
router.get("/books/:id", getBookById);

// Update book
router.put("/books/:id", updateBook);

// Delete book
router.delete("/books/:id", deleteBook);

// Search book by title
router.get("/books/search", searchBook);

module.exports = router;