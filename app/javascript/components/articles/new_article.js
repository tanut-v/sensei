import React, { Component, Fragment } from 'react'
import ArticleFormWrapper from './article_form_wrapper'

class NewArticle extends Component {
  createArticle = (article) => {
    fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article)
    })
  }

  render() {
    return (
      <Fragment>
        <ArticleFormWrapper onSubmit={this.createArticle}/>
      </Fragment>
    )
  }
}

export default NewArticle
