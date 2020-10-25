import React, { Component } from "react";
import { connect } from "react-redux";

import { compose } from "../../utils";
import { booksLoaded, booksRequested, errorLoading } from "../../actions";
import withBookstoreService from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    //1 - get data
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      errorLoading,
    } = this.props;
    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => {
        //2 - dispatch in store
        booksLoaded(data);
      })
      .catch((err) => {
        errorLoading(err);
      });
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) return <Spiner />;
    if (error) return <ErrorIndicator details={error.toString()} />;
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  errorLoading,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
