import { getSingleBook } from './bookData';
import { getAuthorBooks, getSingleAuthor } from './authorData';
// for merged promises
// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE Author
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(authorObject.firebaseKey)
      .then((bookArray) => resolve({ ...authorObject, bookArray })); // returns single book object
    // we nest this promise so that we can use the book object getauthorBooks
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

export { getAuthorDetails, getBookDetails };
