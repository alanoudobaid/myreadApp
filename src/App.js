import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import Search from './SearchPage';
import { Route } from "react-router-dom";

class BooksApp extends Component {
  state = { books: [] }


  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({ books }));
    });

  }

  onUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState(() => ({ books }))
      });
    });
  }


  render() {
    return (<div className="app">

      <Route exact path="/" render={() => (
        <ListBooks
          onUpdateShelf={this.onUpdateShelf}
          books={this.state.books}
        />)} />

      <Route path="/search" render={() => (<Search
        books={this.state.books}
        onUpdateShelf={this.onUpdateShelf}
      />)} />

    </div>);
  }
}

export default BooksApp
