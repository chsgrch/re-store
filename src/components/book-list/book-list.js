import React, { Component } from "react";
import { connect } from "react-redux";

import { compose } from "../../utils";
import { booksLoaded } from "../../actions";
import withBookstoreService from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    //1 - get data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    //2 - dispatch in store
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
        {books.map((el) => {
          return (
            <li key={el.id}>
              <BookListItem book={el} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
