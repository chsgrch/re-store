import React, { Component } from "react";
import { connect } from "react-redux";

import { compose } from "../../utils";
import { fetchBooks } from "../../actions";
import withBookstoreService from "../hoc/with-bookstore-service";
import BookListItem from "../book-list-item";
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";
import "./book-list.css";

const BookList = ({ books }) => {
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
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) return <Spiner />;
    if (error) return <ErrorIndicator details={error.toString()} />;
    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
