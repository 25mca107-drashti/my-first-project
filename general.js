const axios = require('axios');

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get("http://localhost:3000/books");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Get by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:3000/isbn/${isbn}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Get by Author
async function getBookByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:3000/author/${author}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Get by Title
async function getBookByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:3000/title/${title}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBookByAuthor,
  getBookByTitle
};
