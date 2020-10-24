import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";

const withBookstoreService = () => (View) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <View {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
