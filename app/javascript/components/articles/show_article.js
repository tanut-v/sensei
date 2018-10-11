import React, { Component } from 'react';
import Layout from '../shared/layout'

export default class ShowArticle extends Component {
  render() {
    return (
      <Layout>
        <img src={this.props.article.image_url}/>
        <h1>{this.props.article.title}</h1>
        <p>{this.props.article.content}</p>
      </Layout>
    )
  }
}
