import React, { Component, Fragment } from 'react'

import ArticleFormWrapper from './article_form_wrapper'
import withState from '../../lib/with_state'
import Layout from '../shared/layout'

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
    .then(res => {
      if(res.status !== 201) return Promise.reject('error')

      this.props.state.setState({ flashMessage: { type: "success", message: "The article has been created." } })

      return res.json()
    })
    .then(({ id }) => Turbolinks.visit(`/articles/${id}`))
  }

  render() {
    return (
      <Layout>
        <ArticleFormWrapper onSubmit={this.createArticle}/>
      </Layout>
    )
  }
}

export default withState(NewArticle)
