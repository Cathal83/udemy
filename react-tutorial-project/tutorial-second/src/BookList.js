import React, { Component } from "react";
import Book from "./Book";

import booksData from "./BookData";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: booksData };
  }

  //   state = {
  //     books: booksData
  //   };

  // handleDelete = () => {
  //   console.log(`I'm from parent component`);
  // };

  handleDelete = id => {
    console.log(this.state.books);
    const sortedBooks = this.state.books.filter(item => item.id !== id);
    this.setState({
      books: sortedBooks
    });
  };

  render() {
    //     const books = this.state.books.map(book => {
    //       return <Book key={book.id} info={book} />;
    //     });

    return (
      <section>
        <h3>This is our BookList</h3>
        {/* {books} */}
        {this.state.books.map((item, index) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
