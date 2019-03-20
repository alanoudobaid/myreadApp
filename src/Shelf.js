import React from "react";
import Book from "./Book";

const Shelf = props => {
  return (
    <div className="bookshelf" key={props.keys}>
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => {
            return (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={props.onUpdateShelf} />
              </li>
            );
          })
          }
        </ol>
      </div>
    </div>

  );



};




export default Shelf;
