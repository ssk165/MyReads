import React, { Component } from "react";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WantToRead from "../WantToRead/WantToRead";
import Read from "../Read/Read";
import "../../App.css";
import { Link } from "react-router-dom";

class MainShelf extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading
              changeShelf={this.props.changeShelf}
              currentreading={this.props.state.books}
            />
            <WantToRead
              changeShelf={this.props.changeShelf}
              wantToRead={this.props.state.books}
            />
            <Read
              changeShelf={this.props.changeShelf}
              read={this.props.state.books}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainShelf;
