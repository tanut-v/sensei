import React, { Component, Fragment } from 'react'
import ArticleFormWrapper from './article_form_wrapper'

class EditArticle extends Component {
  updateArticle = (article) => {
    fetch(`/api/articles/${article.id}`, {
      method: 'PATCH',
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
        <ArticleFormWrapper onSubmit={this.updateArticle}/>
      </Fragment>
    )
  }
}

export default EditArticle
