const axios = require('axios');

// Get all books
async function getAllBooks() {
  const response = await axios.get("http://localhost:3000/books");
  return response.data;
}

// Get by ISBN
async function getBookByISBN(isbn) {
  const response = await axios.get(`http://localhost:3000/isbn/${isbn}`);
  return response.data;
}

// Get by Author
async function getBookByAuthor(author) {
  const response = await axios.get(`http://localhost:3000/author/${author}`);
  return response.data;
}

// Get by Title
async function getBookByTitle(title) {
  const response = await axios.get(`http://localhost:3000/title/${title}`);
  return response.data;
}
