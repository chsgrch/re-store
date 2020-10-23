import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-context'


const withBookstoreService = (mapMethodsToProps) => (View) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          const serviceProps = mapMethodsToProps(bookstoreService)
          return (<View {...props} {...serviceProps} />)
        }}
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService;