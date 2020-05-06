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
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading
              changeShelf={this.changeShelf}
              currentreading={this.state.books}
            />
            <WantToRead
              changeShelf={this.changeShelf}
              wantToRead={this.state.books}
            />
            <Read changeShelf={this.changeShelf} read={this.state.books} />
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
