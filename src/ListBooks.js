import React from "react";
import { Link } from "react-router-dom";
import BookShelfTitle from "./ShelvesTitle";
import Shelf from "./Shelf";

const filterBook = (books, shelf) =>
  books.filter(book => book.shelf === shelf);

const ListBooks = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">

        {BookShelfTitle.map(shelf => {
          return (
            <Shelf onUpdateShelf={props.onUpdateShelf} shelfTitle={shelf.bookshelf}
            key={shelf.shelftitle} books={filterBook(props.books, shelf.shelftitle)} />
          );
        })}

      </div>

      <div className="open-search">
        <Link to="/search">Add a Book</Link>
      </div>
    </div>
  );
}
export default ListBooks;
