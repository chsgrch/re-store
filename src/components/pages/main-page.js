import React from "react";
import withBookstoreService from "../hoc/with-bookstore-service";
import ErrorBoundry from "../error-boundry";
const Home = () => {
  return (
    <ErrorBoundry>
      <h1>HOME PAGE</h1>
    </ErrorBoundry>
  );
};

const mapMethodsToProps = (bookstoreService) => {
  return {
    getBooks: bookstoreService.getBooks,
  };
};

export default withBookstoreService()(Home);
