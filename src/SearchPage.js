import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from './Book';

class Search extends Component {

  state = {
    query: "", bookSearch: []
  }

  finalResults = (searchResults) =>
    searchResults.map(result => {
      const book = this.props.books.find(b => result.id === b.id);
      if (book) result.shelf = book.shelf;
      return result;
    });

  updateBookQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }));

    if (!query) {
      this.setState(() => ({
        bookSearch: []
      }));
      return;
    }
    BooksAPI.search(query).then((books) => {
      this.setState(search => ({
        bookSearch:
          !search.query || books.error === "empty" || !books ? [] : this.finalResults(books),
      }));
    });

  };


  render() {
    const { bookSearch } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.query} onChange={e => this.updateBookQuery(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookSearch.length > 0 && (bookSearch.map(book => (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={this.props.onUpdateShelf} />
              </li>
            ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
