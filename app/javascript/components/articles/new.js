import React, { Component, Fragment } from 'react'
import Form from './form'

class NewArticle extends Component {
  createArticle = (values) => {
    fetch('http://localhost:3000/api/articles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    })
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.createArticle}/>
      </Fragment>
    )
  }
}

export default NewArticle
