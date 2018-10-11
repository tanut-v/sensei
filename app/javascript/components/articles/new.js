import React, { Component, Fragment } from 'react'
import Form from './form'

class NewArticle extends Component {

  state = {
    article: {
      title: '',
      content: '',
      imageUrl: ''
    }
  }

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
        <Form article={this.state.article} onSubmit={this.createArticle}/>
      </Fragment>
    )
  }
}

export default NewArticle
