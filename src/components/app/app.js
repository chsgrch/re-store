import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'
import Spiner from '../spiner'
import { BookstoreServiceProvider } from '../bookstore-service-context'
import BookstoreService from '../../services/bookstore-service'
import MainPage from '../pages/main-page'

export default class App extends Component {

  state = {
    bookstoreService: new BookstoreService(),
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state
    if (hasError) return <ErrorIndicator />
    return (
      <BookstoreServiceProvider value={this.state.bookstoreService}>
        <Spiner />
        <MainPage />
      </BookstoreServiceProvider>
    )
  }
}