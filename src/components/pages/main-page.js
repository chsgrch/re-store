import React from 'react'
import withBookstoreService from '../hoc/with-bookstore-service'
const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  )
}

const mapMethodsToProps = (bookstoreService) => {
  return {
    getBooks: bookstoreService.getBooks
  }
}

export default withBookstoreService(mapMethodsToProps)(Home);