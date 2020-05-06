import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import CurrentlyReading from "././Components/CurrentlyReading/CurrentlyReading";
import WantToRead from "././Components/WantToRead/WantToRead";
import Read from "././Components/Read/Read";

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((result) => {
      this.setState({
        books: [...this.state.books, ...result],
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading currentreading={this.state.books} />
            <WantToRead wantToRead={this.state.books} />
            <Read read={this.state.books} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BooksApp;
