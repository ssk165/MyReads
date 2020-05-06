import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "././Components/SearchPage/SearchPage";
import MainShelf from "./Components/Mainshelf/MainShelf";
import { Switch, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      this.setState({
        books: [...this.state.books, ...result],
      });
      console.log(this.state);
    });
  }

  changeShelf = (book, e) => {
    if (book.shelf !== e.target.value) {
      let targetvalue = e.target.value;
      BooksAPI.update(book, e.target.value).then((result) => {
        let b = Object.assign(this.state);
        b.books.forEach((resultbook) => {
          if (resultbook.id === book.id) {
            resultbook.shelf = targetvalue;
          }
        });
        this.setState({ books: [...b.books] });
      });
    }
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <MainShelf state={this.state} changeShelf={this.changeShelf} />
          )}
        />
        <Route
          exact
          path="/search"
          component={() => (
            <SearchPage state={this.state} changeShelf={this.changeShelf} />
          )}
        />
      </Switch>
    );
  }
}

export default BooksApp;
